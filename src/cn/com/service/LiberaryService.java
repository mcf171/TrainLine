package cn.com.service;

import java.io.File;
import java.util.Calendar;
import java.util.List;

import org.springframework.transaction.annotation.Transactional;

import cn.com.dao.BookDAO;
import cn.com.dao.BooktypeDAO;
import cn.com.model.Book;
import cn.com.model.Booktype;
import cn.com.util.BookStateConstant;
import cn.com.util.DAOUtil;
import cn.com.util.FlexpaperUtil;
import cn.com.util.GlobalConstant;
import cn.com.util.UploadUtil;
import cn.com.util.WebUtil;

public class LiberaryService {

	private BookDAO bookDAO ;
	private BooktypeDAO bookTypeDAO;
	private UploadUtil uploadUtil;
	private DAOUtil daoUtil;
	
	/**
	 * 获取所有内部图书列表
	 * @return
	 */
	public List<Booktype> getBookTypeList(){
		return bookTypeDAO.findAll();
	}
	
	/**
	 * 模糊查询内部图书,并分页
	 * @author Apache 
	 * @time 2014-3-8 22:12
	 * @param book
	 * @return
	 */
	public List<Book> searchLibraryList(int page, int limit, Book book ){
		
		daoUtil.setLimit(limit);
		daoUtil.setPage(page);
		
		int firstResults = daoUtil.getFirstResult();
		int maxResults = daoUtil.getMaxResult();
		
		List<Book> list = bookDAO.findByPage(firstResults, maxResults, book);
		
		return list;
		
	}
	
	/**
	 * 获取内部图书列表
	 * @author Apahce
	 * @time 2014-3-8 22:31
	 * @return
	 */
	public List<Book> getInsideLiberaryList(int page, int limit , Book book){
		
		daoUtil.setLimit(limit);
		daoUtil.setPage(page);
		
		int firstResults = daoUtil.getFirstResult();
		int maxResults = daoUtil.getMaxResult();
		
		book = book == null ? new Book() : book;
		Booktype bookType = book.getBookType() == null? new Booktype() : book.getBookType();
		bookType.setBookTypeId(BookStateConstant.INISDELIBRARY);
		book.setBookType(bookType);
		
		List<Book> list = bookDAO.findByPage(firstResults, maxResults, book);
		
		 return list;
	}
	
	/**
	 * 获取Book的总记录数
	 * @author book
	 * @time 2014-3-8 22:28
	 * @param book
	 * @return
	 */
	public int getTotalCount(Book book){
		
		List<Book>list = bookDAO.findByExampleFuzzy(book);
		
		int totalCount = list.size();
		
		return totalCount;
	}
	
	/**
	 * 获取外部图书列表
	 * @param book 
	 * @param limit 
	 * @param page 
	 * @return
	 */
	public List<Book> getOutSideLiberaryList(int page, int limit, Book book){
		

		daoUtil.setLimit(limit);
		daoUtil.setPage(page);
		
		int firstResults = daoUtil.getFirstResult();
		int maxResults = daoUtil.getMaxResult();
		
		book = book == null ? new Book() : book;
		Booktype bookType = book.getBookType() == null? new Booktype() : book.getBookType();
		bookType.setBookTypeId(BookStateConstant.OUTSIDELIBRARY);
		book.setBookType(bookType);
		
		List<Book> list = bookDAO.findByPage(firstResults, maxResults, book);
		
		return list;
	}
	
	/**
	 * 获取党课图书列表
	 * @param book 
	 * @param limit 
	 * @param page 
	 * @return
	 */
	public List<Book> getDangkeLiberaryList(int page, int limit, Book book){

		daoUtil.setLimit(limit);
		daoUtil.setPage(page);
		
		int firstResults = daoUtil.getFirstResult();
		int maxResults = daoUtil.getMaxResult();
		
		book = book == null ? new Book() : book;
		Booktype bookType = book.getBookType() == null? new Booktype() : book.getBookType();
		bookType.setBookTypeId(BookStateConstant.DANGKELIBRARY);
		book.setBookType(bookType);
		
		List<Book> list = bookDAO.findByPage(firstResults, maxResults, book);
		return list;
	}
	
	/**
	 * 删除Book,同时删除文件
	 * @author Apache
	 * @time 2014-3-8 1:05;
	 * @param book
	 */
	public void deleteBook(Book book){
		
		book = bookDAO.findById(book.getBookId());
		
		this.removeBookResource(book);
		
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

	public boolean addBook(Book book , File image, String imageContentType, String imageFileName,String physicalPath){
		
		boolean flag = false;
		String time = Calendar.getInstance().getTimeInMillis() + "";
		imageFileName = time + imageFileName.substring(imageFileName.lastIndexOf("."));
		String swfName = time + ".swf";
		String bookURL = uploadUtil.getSavePath() + swfName;
		book.setBookURL(bookURL);
		uploadUtil.setFlie(image);
		uploadUtil.setFlieContentType(imageContentType);
		uploadUtil.setFlieFileName(imageFileName);
		uploadUtil.setSavePath(GlobalConstant.SAVEPATH_BOOk);
		
		try {
			bookDAO.save(book);
			uploadUtil.upload();
			flag = FlexpaperUtil.converterDocumentToSWF(physicalPath, GlobalConstant.SAVEPATH_BOOk, imageFileName);
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
			
			imageFileName = Calendar.getInstance().getTimeInMillis() + ".swf";
			String bookURL = uploadUtil.getSavePath()+"/"+imageFileName;
			book.setBookURL(bookURL);
			uploadUtil.setFlie(image);
			uploadUtil.setFlieContentType(imageContentType);
			uploadUtil.setFlieFileName(imageFileName);
			uploadUtil.setSavePath(GlobalConstant.SAVEPATH_BOOk);
			
			try {
				Book temp = bookDAO.findById(book.getBookId());
				uploadUtil.upload();
				this.removeBookResource(temp);
				flag = FlexpaperUtil.converterDocumentToSWF(WebUtil.getWebSitePhysalPath(), GlobalConstant.SAVEPATH_BOOk, imageFileName);
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
	
	/**
	 * 删除Book的swf文件
	 * @author Apache
	 * @time 2014-3-8 1:10
	 * @param book
	 */
	public void removeBookResource(Book book){
		
		String swfName = book.getBookURL();
		File file = new File(WebUtil.getWebSitePhysalPath() + GlobalConstant.SAVEPATH_BOOk + swfName);
		if(file.exists()){
			
			file.delete();
		}
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

	public DAOUtil getDaoUtil() {
		return daoUtil;
	}

	public void setDaoUtil(DAOUtil daoUtil) {
		this.daoUtil = daoUtil;
	}
	
	
}
