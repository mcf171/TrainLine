package cn.com.dao;

import java.util.List;

import junit.framework.TestCase;

import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class TestTestquestionDAO extends TestCase{

	@Test
	public void testFindByAll(){
		ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");
		TestquestionDAO testDAO = (TestquestionDAO)context.getBean("TestquestionDAO");
		List list = testDAO.findAll();
		this.assertNotNull(list);
	}
	
}
