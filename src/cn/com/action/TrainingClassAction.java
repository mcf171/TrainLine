package cn.com.action;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.sun.swing.internal.plaf.metal.resources.metal;

import cn.com.base.BaseActionSupport;
import cn.com.model.Classandcourse;
import cn.com.model.ClassandcourseId;
import cn.com.model.Classcase;
import cn.com.model.Course;
import cn.com.model.Trainingclass;
import cn.com.service.TrainingClassService;

public class TrainingClassAction extends BaseActionSupport {
	private List<Trainingclass> tcList;
	private TrainingClassService trainingClassService;
	private Map<String, List> dataMap;
	private Trainingclass trainingclass;
	private Integer classId;
	private Integer courseId;
	private Classcase classcase;

	public TrainingClassAction() {
		dataMap = new HashMap<String, List>();
	}

	public String findAllTrainingClass() {
		if (trainingclass == null) {
			tcList = trainingClassService.findAll();
		} else {
			tcList = trainingClassService.findByConditions(trainingclass);
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
	public String geTrainClass()
	{
		classId = (Integer) session.get("classId");
		if(classId!=null)
		{
			trainingclass = trainingClassService.getTrainingclass(classId);
		}
		return JSON;
	}

	public String deleteClass(){
		if (trainingclass.getTrainingClassId() != null) {
			trainingClassService.delete(trainingclass);
		}
		return JSON;
	}

	public String addClass() {
		if (trainingclass != null) {
			trainingclass.setTrainingClassStatus(new Integer(1));
			classId = trainingClassService.insert(trainingclass);
			super.session.put("classId",classId);
		}
		return JSON;
	}
	
	public String addClassAndCourse()
	{
		classId = (Integer) session.get("classId");
		if(classId!=null&&courseId!=null)
		{
			Classandcourse classandcourse = new Classandcourse();
			classandcourse.setId(new ClassandcourseId(classId, courseId));
			trainingClassService.saveClassAndCourse(classandcourse);
		}
		
		return JSON;
	}

	public String getCourseByClassId()
	{
		classId = (Integer) session.get("classId");
		if(classId!=null)
		{
			List<Course> courseList =trainingClassService.getCourseByClassId(classId);
			dataMap.put("courseList",courseList);
		}
		
		return "getCourseByClassId";
	}
	
	public String delCourseFrClass()
	{
		classId = (Integer) session.get("classId");
		if(courseId!=null && classId!=null)
		{
			Classandcourse classandcourse = new Classandcourse();
			classandcourse.setId(new ClassandcourseId(classId, courseId));
			trainingClassService.delCourseFClass(classandcourse);
		}
		return  JSON;
	}
	
	public String updateClass() {
		if (trainingclass != null) {
			trainingClassService.update(trainingclass);
		}
		return JSON;
	}

	public String getClassCase()
	{
		classId = (Integer) session.get("classId");
		if(classId!=null)
		{
			classcase= trainingClassService.getClassCaseById(classId);
		}
		return JSON;
	}
	
	public String intoClassInfoPage()
	{
		if(classId!=null)
		{
			super.session.put("classId",classId);
		}
		return "intoClassInfoPage";
	}
	
	public String intoClasspage() {
		return "intoClasspage";
	}

	public String classContent() {
		return "classContent";
	}

	public String intoAddClassPage() {
		return "intoAddClassPage";
	}

	public String intoAddClassPage2() {
		if(classId!=null)
		{
			super.session.put("classId",classId);
		}
		return "intoAddClassPage2";
	}

	public List<Trainingclass> getTcList() {
		return tcList;
	}

	public void setTcList(List<Trainingclass> tcList) {
		this.tcList = tcList;
	}

	public void setTrainingClassService(
			TrainingClassService trainingClassService) {
		this.trainingClassService = trainingClassService;
	}

	public Map<String, List> getDataMap() {
		return dataMap;
	}

	public void setDataMap(Map<String, List> dataMap) {
		this.dataMap = dataMap;
	}

	public Trainingclass getTrainingclass() {
		return trainingclass;
	}

	public void setTrainingclass(Trainingclass trainingclass) {
		this.trainingclass = trainingclass;
	}

	public Integer getClassId() {
		return classId;
	}

	public void setClassId(Integer classId) {
		this.classId = classId;
	}



	public Integer getCourseId() {
		return courseId;
	}

	public void setCourseId(Integer courseId) {
		this.courseId = courseId;
	}

	public Classcase getClasscase() {
		return classcase;
	}

	public void setClasscase(Classcase classcase) {
		this.classcase = classcase;
	}


}
