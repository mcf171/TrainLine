package cn.com.service;

import java.util.Iterator;
import java.util.List;
import java.util.Set;

import cn.com.dao.CatalogueDAO;
import cn.com.dao.CourseDAO;
import cn.com.dao.ResourseandcatelogueDAO;
import cn.com.model.Catalogue;
import cn.com.model.Course;
import cn.com.model.Resource;

public class CourseService {
	private CourseDAO courseDAO;
	private CatalogueDAO catalogueDAO;
	private ResourseandcatelogueDAO resourseandcatelogueDAO;

	public Integer insert(Course course) {
		return courseDAO.save(course);
	}
	
	public List<Course> findByExample(Course course){
		
		return courseDAO.findByExample(course);
	}
	public void delete(Course course)
	{
		courseDAO.delete(course);
	}
	
	public void update(Course course)
	{
		courseDAO.update(course);
	}

	public Course getCourse(Course course)
	{
		
		return courseDAO.findById(course.getCourseId());
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

	public List<Course> searchCourses(Course course) {
		return courseDAO.searchCourses(course);
	}

	public CatalogueDAO getCatalogueDAO() {
		return catalogueDAO;
	}

	public void setCatalogueDAO(CatalogueDAO catalogueDAO) {
		this.catalogueDAO = catalogueDAO;
	}

	public void addChapterAndRescourse(Catalogue catalogue, Set<Resource> set) {
		Integer catalogueId = catalogueDAO.save(catalogue);
	    Iterator<Resource> i = set.iterator();
		while(i.hasNext())
		{
			Resource r = i.next();
			r.setCatalogueId(catalogueId);
			resourseandcatelogueDAO.save(r);
		}
	}


	public ResourseandcatelogueDAO getResourseandcatelogueDAO() {
		return resourseandcatelogueDAO;
	}


	public void setResourseandcatelogueDAO(ResourseandcatelogueDAO resourseandcatelogueDAO) {
		this.resourseandcatelogueDAO = resourseandcatelogueDAO;
	}


	public List<Course> fgFindAll() {
		return courseDAO.fgFindAll();
	}


	public List<Course> findCourseToCenter(String keyWords, String courseType,
			String positionName) {
		return courseDAO.findCourseToCenter(keyWords,courseType,positionName);
	}


	public List<Course> fgFindMyAllCourse(Integer userId) {
		return courseDAO.fgFindMyAllCourse(userId);
	}


	public List<Course> fgFindMyAllCourse(Integer userId, Course course) {
		
		return courseDAO.fgFindMyAllCourse(userId,course);
	}


	public List<Course> fbFindExampleCourse() {
		return courseDAO.fbFindExampleCourse();
	}


	public List<Course> fbFindExampleCourse(Course course) {
		return courseDAO.fbFindExampleCourse(course);
	}


	public List<Catalogue> getCataloguDetail(Integer courseId) {
		return courseDAO.getCataloguDetail(courseId);
	}
	
	public List<Course> findDangJianKeCheng(){
		
		return courseDAO.findByProperty("courseKind", 3);
	}
	
	public List<Course> findDangJianJiangZuo(){
		
		return courseDAO.findByProperty("courseKind", 4);
	}
}
