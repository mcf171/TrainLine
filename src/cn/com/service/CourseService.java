package cn.com.service;

import java.util.List;

import cn.com.dao.CourseDAO;
import cn.com.model.Course;

public class CourseService {
	private CourseDAO courseDAO;

	public void insert(Course course) {
		courseDAO.save(course);
	}

	public void delete(Course course)
	{
		courseDAO.delete(course);
	}
	
	public void update(Course course)
	{
	}

	public Course getCourse(Course course)
	{
		
		return null;
	}
	
	public List<Course> findAll(){
		return courseDAO.findAll();
		
	}

	public CourseDAO getCourseDAO() {
		return courseDAO;
	}

	public void setCourseDAO(CourseDAO courseDAO) {
		this.courseDAO = courseDAO;
	}
}
