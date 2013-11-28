package cn.com.action;

import java.io.File;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import cn.com.base.BaseActionSupport;
import cn.com.model.Book;
import cn.com.model.Booktype;
import cn.com.service.LiberaryService;
import cn.com.util.BookStateConstant;
import cn.com.util.UploadUtil;
//test
public class LiberaryAction extends BaseActionSupport{

	private LiberaryService liberaryService;
	private Map<String, Object> dataMap;
	private String modifyBookURL;
	private Book book;
	
	// 封装上传文件域的属性
    private File image;
    // 封装上传文件类型的属性
    private String imageContentType;
    // 封装上传文件名的属性
    private String imageFileName;
	
	public LiberaryAction() {
		super();
		// TODO Auto-generated constructor stub
		dataMap = new HashMap<String, Object>();
	}
	/// 内部图书函数模块
	public String showBackendInsideLiberaryListPage(){
		
		
		List<Booktype> list = liberaryService.getBookTypeList();
		//request.setAttribute("test", "test");
		request.setAttribute("bookTypeList", list);
		
		return this.SUCCESS;
	}
	
	public String getInsideLiberaryList(){
		
		List<Book> list = null;
		if(book !=null){
			
			//book.setBookState(BookStateConstant.INISDELIBRARY);
			list = liberaryService.searchLibraryList(book);
		}else{
			
			list=  liberaryService.getInsideLiberaryList();
		}
		
		dataMap.put("liberary", list);
		return this.SUCCESS;
	}
	
	//—内部图书模块
	
	//外部图书模块

	public String getOutSideLiberaryList(){
		
		List<Book> list = null;
		if(book !=null){
			
			//book.setBookState(BookStateConstant.INISDELIBRARY);
			list = liberaryService.searchLibraryList(book);
		}else{
			
			list = liberaryService.getOutSideLiberaryList();
		}
		dataMap.put("liberary", list);
		return this.SUCCESS;
	}
	//——外部图书模块
	
	//党课图书模块

	public String getDangkeLiberaryList(){
		
		List<Book> list = null;
		if(book !=null){
			
			//book.setBookState(BookStateConstant.INISDELIBRARY);
			list = liberaryService.searchLibraryList(book);
		}else{
			
			 list = liberaryService.getDangkeLiberaryList();
		}

		dataMap.put("liberary", list);
		return this.SUCCESS;
	}
	//——党课图书模块
	
	public String showNormalLiberaryListPage(){
		
		return this.SUCCESS;
	}
	
	public String showBackendLiberaryListPage(){
		
		return this.SUCCESS;
	}

	public String readBook(){
		
		 book = liberaryService.getBook(book.getBookId());
		 
		 request.setAttribute("book", book);
		 
		 return this.SUCCESS;
		
	}
	
	public String addBookPage(){
		
		List<Booktype> list = liberaryService.getBookTypeList();
		//request.setAttribute("test", "test");
		request.setAttribute("bookTypeList", list);
		request.setAttribute("book", book);
		return this.SUCCESS;
	}
	
	public String addBook(){
		
		boolean flag = liberaryService.addBook(book, image, imageContentType, imageFileName);
		String path = flag == true ? this.SUCCESS : this.FAIL;
		
		return path;
	}
	
	public String modifyBookPage(){
		
		book = liberaryService.getBook(book.getBookId());
		List<Booktype> list = liberaryService.getBookTypeList();

		request.setAttribute("bookTypeList", list);
		request.setAttribute("book", book);
		
		return this.SUCCESS;
	}
	
	public String modifyBook(){
		
		if("1".equals(modifyBookURL)){
			
			liberaryService.modifyBook(book, image, imageContentType, imageFileName);
		}else{
			
			liberaryService.modifyBook(book);
		}
		return this.SUCCESS;
	}
	
	public String deleteBook(){
		
		liberaryService.deleteBook(book);
		dataMap.put("success", "success");
		
		return this.SUCCESS;
	}

	public LiberaryService getLiberaryService() {
		return liberaryService;
	}

	public void setLiberaryService(LiberaryService liberaryService) {
		this.liberaryService = liberaryService;
	}

	public Map<String, Object> getDataMap() {
		return dataMap;
	}

	public void setDataMap(Map<String, Object> dataMap) {
		this.dataMap = dataMap;
	}

	public Book getBook() {
		return book;
	}

	public void setBook(Book book) {
		this.book = book;
	}

	public File getImage() {
		return image;
	}
	public void setImage(File image) {
		this.image = image;
	}
	public String getImageContentType() {
		return imageContentType;
	}
	public void setImageContentType(String imageContentType) {
		this.imageContentType = imageContentType;
	}
	public String getImageFileName() {
		return imageFileName;
	}
	public void setImageFileName(String imageFileName) {
		this.imageFileName = imageFileName;
	}
	public String getModifyBookURL() {
		return modifyBookURL;
	}
	public void setModifyBookURL(String modifyBookURL) {
		this.modifyBookURL = modifyBookURL;
	}
	
	
	
}
