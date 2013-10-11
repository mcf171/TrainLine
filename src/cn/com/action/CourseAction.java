package cn.com.action;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import cn.com.base.BaseActionSupport;
import cn.com.model.Course;
import cn.com.model.User;
import cn.com.service.ICourseService;

public class CourseAction extends BaseActionSupport{

	private Map<String, Object> dataMap;
			
	private ICourseService courseService; 

	public CourseAction(){
		
		dataMap = new HashMap<String, Object>();
		
	}
	
	public String getCourseList(){
		
		User user = (User) session.get("user");
		
		List<Course> list = courseService.getCourseList();
		
		dataMap.put("courseList", list);
		
		return SUCCESS;
	}

	public Map<String, Object> getDataMap() {
		return dataMap;
	}

	public void setDataMap(Map<String, Object> dataMap) {
		this.dataMap = dataMap;
	}

	public ICourseService getCourseService() {
		return courseService;
	}

	public void setCourseService(ICourseService courseService) {
		this.courseService = courseService;
	}

	
	
	
}
