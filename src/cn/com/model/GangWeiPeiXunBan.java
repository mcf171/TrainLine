package cn.com.model;

import java.io.Serializable;
import java.sql.Timestamp;
import java.util.HashSet;
import java.util.Set;

public class GangWeiPeiXunBan implements Serializable {

	private Integer id;
	private String title;
	private String classContent;
	private String classTimeArea;
	private String dependence;
	private String classObject;
	private String peopleNumber;
	private String classTimeScore;
	private String price;
	private String userBooks;
	private String classPlace;
	private String communicatePeople;
	private String phone;
	private Set<CourseSetting> courseSettings = new HashSet<CourseSetting>();
	private Set<TeacherSituation> teacherSituations = new HashSet<TeacherSituation>();
	private String dutyPeople;
	private String passTime;
	private String department;
	private String departmentPassTime;
	private String postScript;
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getClassContent() {
		return classContent;
	}
	public void setClassContent(String classContent) {
		this.classContent = classContent;
	}
	public String getClassTimeArea() {
		return classTimeArea;
	}
	public void setClassTimeArea(String classTimeArea) {
		this.classTimeArea = classTimeArea;
	}
	public String getDependence() {
		return dependence;
	}
	public void setDependence(String dependence) {
		this.dependence = dependence;
	}
	public String getClassObject() {
		return classObject;
	}
	public void setClassObject(String classObject) {
		this.classObject = classObject;
	}
	public String getPeopleNumber() {
		return peopleNumber;
	}
	public void setPeopleNumber(String peopleNumber) {
		this.peopleNumber = peopleNumber;
	}
	public String getClassTimeScore() {
		return classTimeScore;
	}
	public void setClassTimeScore(String classTimeScore) {
		this.classTimeScore = classTimeScore;
	}
	public String getPrice() {
		return price;
	}
	public void setPrice(String price) {
		this.price = price;
	}
	public String getUserBooks() {
		return userBooks;
	}
	public void setUserBooks(String userBooks) {
		this.userBooks = userBooks;
	}
	public String getClassPlace() {
		return classPlace;
	}
	public void setClassPlace(String classPlace) {
		this.classPlace = classPlace;
	}
	public String getCommunicatePeople() {
		return communicatePeople;
	}
	public void setCommunicatePeople(String communicatePeople) {
		this.communicatePeople = communicatePeople;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public Set<CourseSetting> getCourseSettings() {
		return courseSettings;
	}
	public void setCourseSettings(Set<CourseSetting> courseSettings) {
		this.courseSettings = courseSettings;
	}
	public Set<TeacherSituation> getTeacherSituations() {
		return teacherSituations;
	}
	public void setTeacherSituations(Set<TeacherSituation> teacherSituations) {
		this.teacherSituations = teacherSituations;
	}
	public String getDutyPeople() {
		return dutyPeople;
	}
	public void setDutyPeople(String dutyPeople) {
		this.dutyPeople = dutyPeople;
	}
	public String getPassTime() {
		return passTime;
	}
	public void setPassTime(String passTime) {
		this.passTime = passTime;
	}
	public String getDepartment() {
		return department;
	}
	public void setDepartment(String department) {
		this.department = department;
	}
	public String getDepartmentPassTime() {
		return departmentPassTime;
	}
	public void setDepartmentPassTime(String departmentPassTime) {
		this.departmentPassTime = departmentPassTime;
	}
	public String getPostScript() {
		return postScript;
	}
	public void setPostScript(String postScript) {
		this.postScript = postScript;
	}
	
	
}
