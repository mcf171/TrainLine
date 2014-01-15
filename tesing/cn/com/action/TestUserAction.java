package cn.com.action;

import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import cn.com.model.User;

import junit.framework.TestCase;

public class TestUserAction extends TestCase {

	@Test
	public void testLogin(){
		
		ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");
		UserAction userAction = (UserAction)context.getBean("userAction");
		User user = new User();
		user.setUserName("admin");
		user.setUserPassword("admin");
		userAction.setUser(user);
		userAction.login();
	}
}
