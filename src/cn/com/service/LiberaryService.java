package cn.com.service;

import java.util.List;

import cn.com.dao.BookDAO;
import cn.com.model.Book;

public class LiberaryService {

	private BookDAO bookDAO ;

	public List<Book> getInsideLiberaryList(){
		
		 return bookDAO.findAll();
	}
	
	public BookDAO getBookDAO() {
		return bookDAO;
	}

	public void setBookDAO(BookDAO bookDAO) {
		this.bookDAO = bookDAO;
	}
	
	
}
