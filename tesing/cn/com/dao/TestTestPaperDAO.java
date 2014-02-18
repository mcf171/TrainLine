package cn.com.dao;

import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import cn.com.model.Testpaper;
import cn.com.model.Testquestion;

import junit.framework.TestCase;

public class TestTestPaperDAO extends TestCase{

	@Test
	public void testAddTestPaper(){
		
		ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");
		TestpaperDAO testPaperDAO = (TestpaperDAO)context.getBean("TestpaperDAO");
		
		Testquestion temp  = new Testquestion();
		Testpaper testPaper = new Testpaper();
		testPaper.getTestquestions().add(temp);
		testPaperDAO.save(testPaper);
	}
	
	@Test
	public void testFind(){
		
		ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");
		TestpaperDAO testPaperDAO = (TestpaperDAO)context.getBean("TestpaperDAO");
		
		this.assertEquals(testPaperDAO.findById(6).getTestquestions().size(),0);
	}
	

	
}
