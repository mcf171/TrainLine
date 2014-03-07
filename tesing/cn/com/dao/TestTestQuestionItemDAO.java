package cn.com.dao;

import junit.framework.TestCase;

import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import cn.com.model.TestQuestionItem;
import cn.com.model.User;

public class TestTestQuestionItemDAO extends TestCase {

	ApplicationContext ac;
	TestQuestionItemDAO testQuestionItemDAO;
	UserDAO userDAO;
	
	public TestTestQuestionItemDAO() {
		super();
		// TODO Auto-generated constructor stub
		ac =  new ClassPathXmlApplicationContext("applicationContext.xml");
		testQuestionItemDAO = (TestQuestionItemDAO)ac.getBean("TestQuestionItemDAO");
		userDAO = (UserDAO)ac.getBean("UserDAO");
	}
	@Test
	public void testTestUpdate(){
		
		TestQuestionItem testQuestionItem = testQuestionItemDAO.findById(1);
		User user = userDAO.findById(1);
		testQuestionItem.getUsers().add(user);
		testQuestionItemDAO.update(testQuestionItem);
	}
}
