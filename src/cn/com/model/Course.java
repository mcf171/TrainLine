package cn.com.model;

import java.util.HashSet;
import java.util.Set;

/**
 * Course entity. @author MyEclipse Persistence Tools
 */

public class Course implements java.io.Serializable {

	// Fields

	private Integer courseId;
	private Integer courseTypeId;
	private String courseName;
	private String courseSpeaker;
	private String courseIntro;
	private String courseCode;
	private Integer courseState;
	private Integer courseKind;
	private Set users = new HashSet(0);
	private Set userandcourses = new HashSet(0);
	private Set<Catalogue> catalogues = new HashSet<Catalogue>(0);
	private Set<Trainingclass> trainingClasss = new HashSet<Trainingclass>(0);
	private Set testquestions = new HashSet(0);

	// Constructors
	private Integer isSelect =0;
	/** default constructor */
	public Course() {
	}

	

	// Property accessors

	public Integer getCourseId() {
		return this.courseId;
	}

	public void setCourseId(Integer courseId) {
		this.courseId = courseId;
	}

	public String getCourseName() {
		return this.courseName;
	}

	public void setCourseName(String courseName) {
		this.courseName = courseName;
	}

	public String getCourseSpeaker() {
		return this.courseSpeaker;
	}

	public void setCourseSpeaker(String courseSpeaker) {
		this.courseSpeaker = courseSpeaker;
	}

	public String getCourseIntro() {
		return this.courseIntro;
	}

	public void setCourseIntro(String courseIntro) {
		this.courseIntro = courseIntro;
	}

	public Integer getCourseState() {
		return this.courseState;
	}

	public void setCourseState(Integer courseState) {
		this.courseState = courseState;
	}


	public Set<Trainingclass> getTrainingClasss() {
		return trainingClasss;
	}



	public void setTrainingClasss(Set<Trainingclass> trainingClasss) {
		this.trainingClasss = trainingClasss;
	}



	public void setCatalogues(Set<Catalogue> catalogues) {
		this.catalogues = catalogues;
	}



	public Set getUserandcourses() {
		return this.userandcourses;
	}

	public void setUserandcourses(Set userandcourses) {
		this.userandcourses = userandcourses;
	}

	public Set<Catalogue> getCatalogues() {
		return this.catalogues;
	}



	public Set getTestquestions() {
		return this.testquestions;
	}

	public void setTestquestions(Set testquestions) {
		this.testquestions = testquestions;
	}

	public Integer getIsSelect() {
		return isSelect;
	}

	public void setIsSelect(Integer isSelect) {
		this.isSelect = isSelect;
	}

	public Integer getCourseTypeId() {
		return courseTypeId;
	}

	public void setCourseTypeId(Integer courseTypeId) {
		this.courseTypeId = courseTypeId;
	}

	public Integer getCourseKind() {
		return courseKind;
	}

	public void setCourseKind(Integer courseKind) {
		this.courseKind = courseKind;
	}



	public Set getUsers() {
		return users;
	}



	public void setUsers(Set users) {
		this.users = users;
	}



	@Override
	public boolean equals(Object obj) {
		// TODO Auto-generated method stub
		boolean flag = false;
		if (obj instanceof  Course){
			Course item = (Course) obj;
			//System.out.println("local id is :"+this.courseId);
			//System.out.println("compare id is : "+ item.getCourseId());
			if(item.getCourseId().equals(this.courseId)){
				flag = true;
			}
		}
		return flag;
	}



	@Override
	public int hashCode() {
		// TODO Auto-generated method stub
		return 1;
	}



	public String getCourseCode() {
		return courseCode;
	}



	public void setCourseCode(String courseCode) {
		this.courseCode = courseCode;
	}

	
}