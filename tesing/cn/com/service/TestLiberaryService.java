package cn.com.service;

import java.util.List;

import junit.framework.TestCase;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import cn.com.model.Book;

public class TestLiberaryService extends TestCase{

	public void testGetBook(){
		
		ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");
		LiberaryService liberaryService = (LiberaryService)context.getBean("liberaryService");
		Book book = new Book();
		book.setBookId(1);
		book = liberaryService.getBook(book.getBookId());
		
		this.assertNotNull(book);
		
	}
	
	public void testSearchInsideLibraryList(){
		
		ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");
		LiberaryService liberaryService = (LiberaryService)context.getBean("liberaryService");
		Book book = new Book();
		book.setBookContent("test");
		book.setBookName("内部");
		List<Book> list = liberaryService.searchInsideLibraryList(book);
		for(Book item : list){
			System.out.println(item.getBookContent());
		}
		this.assertNotNull(list);
	}
}
