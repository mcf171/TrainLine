package cn.com.action;

import java.util.List;
import java.util.Map;

import cn.com.base.BaseActionSupport;
import cn.com.model.Classcase;
import cn.com.model.Course;
import cn.com.model.Trainingclass;
import cn.com.service.CourseService;
import cn.com.service.TrainingClassService;

public class TrainingClassAction extends BaseActionSupport {
	private TrainingClassService trainingClassService;
	private CourseService courseService;
	private Map<String, Object> dataMap;
	private Trainingclass trainingClass;
	private Course course;
	private Classcase classCase;


	/**
	 * 后台获取所有课程信息
	 * author:Apache
	 * modifyTime : 2014-1-26 19:40
	 * @return
	 */
	public String findAllTrainingClass() {
		
		List<Trainingclass> tcList;
		if (trainingClass == null) {
			tcList = trainingClassService.findAll();
		} else {
			tcList = trainingClassService.findByConditions(trainingClass);
		}

		dataMap.put("tcList",tcList);
		return SUCCESS;

	}
	
	/**
	 * 前台显示培训班页面
	 * @return
	 */
	public String getNormalTrainClassPage(){
		
		
		
		return this.SUCCESS;
	}
	
	/**
	 * 获取前台培训班级列表
	 * @return
	 */
	public String getNormalTrainClassList(){
		
		List<Trainingclass> list = trainingClassService.findAll();
		dataMap.put("trainList", list);
		return this.SUCCESS;
	}
	public String getDetialInfoPage(){
		
		
		return this.SUCCESS;
	}

	public String deleteClass(){
		if (trainingClass != null) {
			trainingClassService.delete(trainingClass);
		}
		return this.SUCCESS;
	}

	/**
	 * 后台增加课程
	 * author:Acpache
	 * modifyTime:2014-1-26 19:21
	 * @return
	 */
	public String addClass() {
		
		if (trainingClass != null) {
			trainingClass.setTrainingClassStatus(new Integer(1));
			int trainingClassId = trainingClassService.insert(trainingClass);
			request.setAttribute("trainingClassId", trainingClassId);
			dataMap.put("trainingClassId", trainingClassId);
		}
		
		return this.SUCCESS;
	}
	

	
	/**
	 * 获取后台班级管理页面
	 * author:Apache
	 * time:2014-1-26 19:54
	 * @return
	 */
	public String getClassManagerPage(){
		
		return this.SUCCESS;
	}
	
	/**
	 * 后台获取显示班级列表页面
	 * author :Apache
	 * time : 2014-1-26 19:50
	 * @return
	 */
	public String getClassListPage(){
	
		return this.SUCCESS;
	}
	/**
	 * 后台更新TrainingClass
	 * autho:Apache
	 * time:2014-1-28 16:34
	 * @return
	 */
	public String updateClass(){
		
		Trainingclass temp = trainingClassService.getTrainingclass(trainingClass.getTrainingClassId());
		temp.setTrainingClassName(trainingClass.getTrainingClassName());
		temp.setCredential(trainingClass.getCredential());
		trainingClassService.update(temp);
		return this.SUCCESS;
	}
	
	/**
	 * 后台获取更新TrainingClass的第二个页面
	 * autho:Apache
	 * time:2014-1-28 16:34
	 * @return
	 */
	public String getUpdateClassPage2(){
		trainingClass = trainingClassService.getTrainingclass(trainingClass.getTrainingClassId());
		request.setAttribute("trainingClass", trainingClass);
		return this.SUCCESS;
	}
	/**
	 * 获得增加班级的第一个页面
	 * author:Apache
	 * time:2014-1-26 20:02;
	 * @return
	 */
	public String getAddClassPage1(){
		
		return this.SUCCESS;
	}
	
	/**
	 * 获得增加班级的第二个页面
	 * author:Apache
	 * time:2014-1-26 20:02;
	 * @return
	 */
	public String getAddClassPage2(){
		
		System.out.println(request.getAttribute("trainingClassId"));
		request.setAttribute("trainingClass", trainingClass);
		return this.SUCCESS;
	}
	
	/**
	 * 给班级增加课程
	 * author:Apache
	 * time:2014-1-26 20:37
	 * @return
	 */
	public String trainingClassAddCourse(){
		
		course = courseService.getCourse(course);
		trainingClass = trainingClassService.getTrainingclass(trainingClass.getTrainingClassId());
		trainingClass.getCourses().add(course);
		trainingClassService.insert(trainingClass);
		
		return this.SUCCESS;
	}
	
	/**
	 * 删除课程的Course
	 * author:Apache
	 * time:2014-1-27 11:40
	 * @return
	 */
	public String deleteCourseFromTrainingClass(){
		
		course = courseService.getCourse(course);
		trainingClass = trainingClassService.getTrainingclass(trainingClass.getTrainingClassId());
		trainingClass.getCourses().remove(course);
		trainingClassService.update(trainingClass);
		return this.SUCCESS;
	}
	
	/**
	 * 后台获取显示TrainingClass详细信息页面，并将得到的trainingClass存储到request里面
	 * author:Apache
	 * time:2014-1-27 14:02
	 * @return
	 */
	public String showTrainingClassInfoPage(){
		
		trainingClass = trainingClassService.getTrainingclass(trainingClass.getTrainingClassId());
		request.setAttribute("trainingClass", trainingClass);
		
		return this.SUCCESS;
	}

	/**
	 * 获取trainingClass的ClassCase
	 * author:Apacahe
	 * time:2014-1-27 15:09
	 * @return
	 */
	public String getTrainingClassClassCase(){
		
		trainingClass = trainingClassService.getTrainingclass(trainingClass.getTrainingClassId());
		dataMap.put("list", trainingClass.getClassCases());
		return this.SUCCESS;
	}
	
	
	public void setTrainingClassService(
			TrainingClassService trainingClassService) {
		this.trainingClassService = trainingClassService;
	}

	

	public Map<String, Object> getDataMap() {
		return dataMap;
	}

	public void setDataMap(Map<String, Object> dataMap) {
		this.dataMap = dataMap;
	}

	public TrainingClassService getTrainingClassService() {
		return trainingClassService;
	}


	public Trainingclass getTrainingClass() {
		return trainingClass;
	}

	public void setTrainingClass(Trainingclass trainingClass) {
		this.trainingClass = trainingClass;
	}

	public Course getCourse() {
		return course;
	}

	public void setCourse(Course course) {
		this.course = course;
	}



	public Classcase getClassCase() {
		return classCase;
	}

	public void setClassCase(Classcase classCase) {
		this.classCase = classCase;
	}

	public CourseService getCourseService() {
		return courseService;
	}

	public void setCourseService(CourseService courseService) {
		this.courseService = courseService;
	}


}
