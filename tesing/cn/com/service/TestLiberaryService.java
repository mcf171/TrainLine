package cn.com.service;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import cn.com.dao.BookDAO;
import cn.com.model.Book;

import junit.framework.TestCase;

public class TestLiberaryService extends TestCase{

	public void testGetBook(){
		
		ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");
		LiberaryService liberaryService = (LiberaryService)context.getBean("liberaryService");
		Book book = new Book();
		book.setBookId(1);
		book = liberaryService.getBook(book.getBookId());
		
		this.assertNotNull(book);
		
	}
}
