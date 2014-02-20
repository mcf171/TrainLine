package cn.com.dao;

import junit.framework.TestCase;

import org.hibernate.Session;
import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import cn.com.model.User;

public class TestUserDAO extends TestCase {

	@Test
	public void testUpdate(){
		
		ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");
		UserDAO userDAO = (UserDAO)context.getBean("UserDAO");
		
		Session session1 = userDAO.getHibernateTemplate().getSessionFactory().openSession();
		User user = new User();

		Session session2 = userDAO.getHibernateTemplate().getSessionFactory().openSession();
		user.setUserId(5);
		user.setUserPassword("6");
		session2.merge(user);
		session2.flush();
	}
}
