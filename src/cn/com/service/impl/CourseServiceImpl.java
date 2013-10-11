package cn.com.service.impl;

import java.util.List;

import cn.com.dao.impl.CourseDAO;
import cn.com.model.Course;
import cn.com.service.ICourseService;

public class CourseServiceImpl implements ICourseService {

	private CourseDAO courseDAO;
	
	public CourseDAO getCourseDAO() {
		return courseDAO;
	}

	public void setCourseDAO(CourseDAO courseDAO) {
		this.courseDAO = courseDAO;
	}

	public List<Course> getCourseList() {
		// TODO Auto-generated method stub
		
		List<Course> list = courseDAO.findAll();
		
		return list;
	}
	
	
}
