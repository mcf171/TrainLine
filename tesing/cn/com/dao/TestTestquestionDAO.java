package cn.com.dao;

import java.util.List;

import junit.framework.TestCase;

import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import cn.com.model.Testpaper;
import cn.com.model.Testquestion;

public class TestTestquestionDAO extends TestCase{

	@Test
	public void testFindByAll(){
		ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");
		TestquestionDAO testDAO = (TestquestionDAO)context.getBean("TestquestionDAO");
		List list = testDAO.findAll();
		this.assertNotNull(list);
	}
	@Test
	public void testDelete(){
		ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");
		TestquestionDAO testDAO = (TestquestionDAO)context.getBean("TestquestionDAO");
		Testquestion testQuestion = testDAO.findById(1);
		testDAO.delete(testQuestion);
		
	}
	
}
