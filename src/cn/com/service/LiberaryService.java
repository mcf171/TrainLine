package cn.com.service;

import java.util.List;

import cn.com.dao.BookDAO;
import cn.com.dao.BooktypeDAO;
import cn.com.model.Book;
import cn.com.model.Booktype;
import cn.com.util.BookStateConstant;

public class LiberaryService {

	private BookDAO bookDAO ;
	private BooktypeDAO bookTypeDAO;

	
	public List<Booktype> getBookTypeList(){
		
		return bookTypeDAO.findAll();
	}
	
	public List<Book> searchInsideLibraryList(Book book ){
		
		return bookDAO.findByExampleFuzzy(book);
	}
	
	public List<Book> getInsideLiberaryList(){
		
		 return bookDAO.findByProperty("bookState", BookStateConstant.INISDELIBRARY);
	}
	
	public List<Book> getOutSideLiberaryList(){
		
		return bookDAO.findByProperty("bookState", BookStateConstant.OUTSIDELIBRARY);
	}
	
	public List<Book> getDangkeLiberaryList(){
		
		return bookDAO.findByProperty("bookState", BookStateConstant.DANGKELIBRARY);
	}
	
	public void deleteBook(Book book){
		
		bookDAO.delete(book);
	}
	
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
	
	
}
