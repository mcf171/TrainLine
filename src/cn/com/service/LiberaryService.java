package cn.com.service;

import java.util.List;

import cn.com.dao.BookDAO;
import cn.com.model.Book;

public class LiberaryService {

	private BookDAO bookDAO ;

	public List<Book> getInsideLiberaryList(){
		
		 return bookDAO.findByProperty("bookState", 1);
	}
	
	public List<Book> getOutSideLiberaryList(){
		
		return bookDAO.findByProperty("bookState", 2);
	}
	
	public List<Book> getDangkeLiberaryList(){
		
		return bookDAO.findByProperty("bookState", 3);
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
	
	
}
