package cn.com.service;

import java.io.File;
import java.util.List;

import org.springframework.transaction.annotation.Transactional;

import cn.com.dao.BookDAO;
import cn.com.dao.BooktypeDAO;
import cn.com.model.Book;
import cn.com.model.Booktype;
import cn.com.util.BookStateConstant;
import cn.com.util.UploadUtil;

public class LiberaryService {

	private BookDAO bookDAO ;
	private BooktypeDAO bookTypeDAO;
	private UploadUtil uploadUtil;
	
	/**
	 * 获取所有内部图书列表
	 * @return
	 */
	public List<Booktype> getBookTypeList(){
		return bookTypeDAO.findAll();
	}
	
	/**
	 * 模糊查询内部图书
	 * @param book
	 * @return
	 */
	public List<Book> searchLibraryList(Book book ){
		
		return bookDAO.findByExampleFuzzy(book);
	}
	
	/**
	 * 获取内部图书列表
	 * @return
	 */
	public List<Book> getInsideLiberaryList(){
		
		 return bookDAO.findByProperty("bookState", BookStateConstant.INISDELIBRARY);
	}
	
	/**
	 * 获取外部图书列表
	 * @return
	 */
	public List<Book> getOutSideLiberaryList(){
		
		return bookDAO.findByProperty("bookState", BookStateConstant.OUTSIDELIBRARY);
	}
	
	/**
	 * 获取党课图书列表
	 * @return
	 */
	public List<Book> getDangkeLiberaryList(){
		
		return bookDAO.findByProperty("bookState", BookStateConstant.DANGKELIBRARY);
	}
	
	/**
	 * 删除Book
	 * @param book
	 */
	public void deleteBook(Book book){
		
		bookDAO.delete(book);
	}
	
	/**
	 * 增加Book
	 * @param book
	 * @param image
	 * @param imageContentType
	 * @param imageFileName
	 * @return
	 */

	public boolean addBook(Book book , File image, String imageContentType, String imageFileName){
		
		boolean flag = false;
		String bookURL = uploadUtil.getSavePath()+"/"+imageFileName;
		book.setBookURL(bookURL);
		uploadUtil.setFlie(image);
		uploadUtil.setFlieContentType(imageContentType);
		uploadUtil.setFlieFileName(imageFileName);
		
		try {
			bookDAO.save(book);
			uploadUtil.upload();
			flag = true;
		} catch (Exception e) {
			// TODO Auto-generated catch block
			flag = false;
			e.printStackTrace();
			throw new RuntimeException();
		}finally{
			
			
			uploadUtil.close();
		}
		
		return flag;
	}
	
	/**
	 * 修改Book信息并修改上传文件
	 * @param book
	 * @param image
	 * @param imageContentType
	 * @param imageFileName
	 * @return
	 */
	public boolean modifyBook(Book book, File image, String imageContentType, String imageFileName){
		
		boolean flag = false;
		
		if(image != null && imageContentType != null && imageFileName != null){
			
			String bookURL = uploadUtil.getSavePath()+"/"+imageFileName;
			book.setBookURL(bookURL);
			uploadUtil.setFlie(image);
			uploadUtil.setFlieContentType(imageContentType);
			uploadUtil.setFlieFileName(imageFileName);
			
			try {
				bookDAO.merge(book);
				uploadUtil.upload();
				flag = true;
			} catch (Exception e) {
				// TODO Auto-generated catch block
				
				e.printStackTrace();
			}finally{
				
				flag = false;
				uploadUtil.close();
			}
			
		}else{
			
			bookDAO.merge(book);
		}
		
		return flag;
	}
	
	/**
	 * 当修改Book但是不修改上传文件时调用
	 * @param book
	 * @return 是否修改成功
	 */
	public boolean modifyBook(Book book){
		
		boolean flag = false;
		
		flag = this.modifyBook(book, null, null, null);
		
		return flag;
	}
	/**
	 * 根据BookId获取Book
	 * @param id
	 * @return Book数据
	 */
	public Book getBook(int id){
		
		return bookDAO.findById(id);
	}
	
	public BookDAO getBookDAO() {
		return bookDAO;
	}

	public void setBookDAO(BookDAO bookDAO) {
		this.bookDAO = bookDAO;
	}

	public BooktypeDAO getBookTypeDAO() {
		return bookTypeDAO;
	}

	public void setBookTypeDAO(BooktypeDAO bookTypeDAO) {
		this.bookTypeDAO = bookTypeDAO;
	}

	public UploadUtil getUploadUtil() {
		return uploadUtil;
	}

	public void setUploadUtil(UploadUtil uploadUtil) {
		this.uploadUtil = uploadUtil;
	}
	
	
}
