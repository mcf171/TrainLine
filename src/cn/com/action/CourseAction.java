package cn.com.action;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import cn.com.base.BaseActionSupport;
import cn.com.model.Course;
import cn.com.service.CourseService;
//test
public class CourseAction extends BaseActionSupport {
	private List<Course> cList;
	private CourseService courseService;
	private Map<String,List> dataMap;
	
	public CourseAction()
	{
		dataMap =new  HashMap<String, List>();
	}
	
	
	public String findAllCourse(){
		cList =courseService.findAll();
		dataMap.put("cList", cList);
		return SUCCESS;
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

}
