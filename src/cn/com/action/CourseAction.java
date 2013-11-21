package cn.com.action;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import cn.com.base.BaseActionSupport;
import cn.com.model.Course;
import cn.com.service.CourseService;

public class CourseAction extends BaseActionSupport {
	private List<Course> cList;
	private CourseService courseService;
	private Map<String,List> dataMap;
	
	private Integer courseId;
	private Course course;
	
	public CourseAction()
	{
		dataMap =new  HashMap<String, List>();
	}
	
	
	public String findAllCourse(){
		if(course!=null)
		{
			cList =courseService.searchCourses(course);
		}else{
			cList =courseService.findAll();
		}
		dataMap.put("cList", cList);
		return SUCCESS;
	}
	
	public String deleteCourse(){
		Course course = new Course();
		course.setCourseId(courseId);
		courseService.delete(course);
		return SUCCESS;
	}
	
	public String addCourse()
	{
		return "addCourse";
	}
	
	public String intoCoursePage()
	{
		
		return "intoCoursePage";
	}

	public List<Course> getcList() {
		return cList;
	}

	public void setcList(List<Course> cList) {
		this.cList = cList;
	}


	public void setCourseService(CourseService courseService) {
		this.courseService = courseService;
	}

	public Map getDataMap() {
		return dataMap;
	}

	public void setDataMap(Map dataMap) {
		this.dataMap = dataMap;
	}


	public Integer getCourseId() {
		return courseId;
	}


	public void setCourseId(Integer courseId) {
		this.courseId = courseId;
	}


	public Course getCourse() {
		return course;
	}


	public void setCourse(Course course) {
		this.course = course;
	}

}
