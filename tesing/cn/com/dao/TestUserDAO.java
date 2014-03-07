package cn.com.dao;

import junit.framework.TestCase;

import org.hibernate.Session;
import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import cn.com.model.Position;
import cn.com.model.User;

public class TestUserDAO extends TestCase {

	ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");
	UserDAO userDAO = (UserDAO)context.getBean("UserDAO");

	@Test
	public void testUpdate(){
		
		Session session1 = userDAO.getHibernateTemplate().getSessionFactory().openSession();
		User user = new User();

		Session session2 = userDAO.getHibernateTemplate().getSessionFactory().openSession();
		user.setUserId(5);
		user.setUserPassword("6");
		session2.merge(user);
		session2.flush();
	}
	@Test
	public void testSelect(){
		
		User user = userDAO.findById(8);
		
		for(Position item : user.getPositions()){
			
			this.assertNotNull(item.getDepartment());
		}
	}
}
