package cn.com.dao;

import java.util.List;

import junit.framework.Assert;
import junit.framework.TestCase;

import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import cn.com.model.Book;
import cn.com.model.Note;

public class TestBookDAO extends TestCase{
	
	
	public void testFindAll(){
		
//		ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");
//		BookDAO bookDAO = (BookDAO)context.getBean("BookDAO");
//		
//		List<Book> list = bookDAO.findAll();
//	     Assert.assertNotNull(list.get(0));
		
	}
	
	/*
	public void testBookTypeDAO(){
		ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");
		BooktypeDAO bookDAO = (BooktypeDAO)context.getBean("BookTypeDAO");
		List list = bookDAO.findAll();
	     Assert.assertNotNull(list.get(0));
		
	}
	*/
	
	
	public void testBookTypeDAO(){
		ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");
		BooktypeDAO bookDAO = (BooktypeDAO)context.getBean("BooktypeDAO");
		List list = bookDAO.findAll();
	     Assert.assertNotNull(list.get(0));
		
	}
	@Test
	public void testFindByBookTypeId(){
		
		ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");
		BookDAO bookDAO = (BookDAO)context.getBean("BookDAO");
		List list = bookDAO.findByProperty("bookType.bookTypeId", 1);
		this.assertNotNull(list);
	}
}