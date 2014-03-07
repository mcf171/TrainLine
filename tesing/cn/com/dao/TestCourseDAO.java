package cn.com.dao;

import junit.framework.TestCase;

import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import cn.com.model.Catalogue;
import cn.com.model.Course;
import cn.com.model.User;

public class TestCourseDAO extends TestCase{

	private ApplicationContext context;
	private CourseDAO courseDAO;
	
	
	public TestCourseDAO() {
		super();
		// TODO Auto-generated constructor stub
		context = new ClassPathXmlApplicationContext("applicationContext.xml");
		courseDAO = (CourseDAO)context.getBean("CourseDAO");
	}


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
	
	@Test
	public void testGetCourseById(){
		
		
		Course course = courseDAO.findById(91);
		for(Catalogue item: course.getCatalogues()){
			System.out.println(item.getCatalogueId());
			this.assertNotNull(item.getNote());
		}
	}
	
	@Test
	public void testDeleteCourse(){
		
		Course course = courseDAO.findById(104);
		courseDAO.delete(course);
	}
}
