package cn.com.service.impl;

import java.util.List;

import cn.com.dao.impl.BookDAO;
import cn.com.model.Book;
import cn.com.service.IBookService;

public class BookServiceImpl implements IBookService {

	private BookDAO bookDAO;
	
	public List<Book> getBookList() {
		// TODO Auto-generated method stub
		List<Book> list = bookDAO.findAll();
		
		return list;
	}

	public BookDAO getBookDAO() {
		return bookDAO;
	}

	public void setBookDAO(BookDAO bookDAO) {
		this.bookDAO = bookDAO;
	}
	
	

}
