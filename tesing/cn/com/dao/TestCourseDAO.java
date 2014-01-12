package cn.com.dao;

import junit.framework.TestCase;

import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import cn.com.model.Course;
import cn.com.model.User;

public class TestCourseDAO extends TestCase{

	@Test
	public void testUpdate(){
		
		ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");
		CourseDAO courseDAO = (CourseDAO)context.getBean("CourseDAO");
		UserDAO userDAO = (UserDAO)context.getBean("UserDAO");
		User user = userDAO.findById(1);
		Course course = courseDAO.findById(10);
		course.getUsers().add(user);
		courseDAO.merge(course);
	}
}
