package cn.com.model;

import java.util.HashSet;
import java.util.Set;

/**
 * User entity. @author MyEclipse Persistence Tools
 */

public class User implements java.io.Serializable {

	// Fields
	private Integer userId;
	private Majorqualification majorqualification;
	private Personalinformation personalinformation;
	private Educationbackground educationbackground;
	private String userName;
	private String userPassword;
	private Integer userState;
	private Set courses = new HashSet(0);
	private Set notices = new HashSet(0);
	private Set message  = new HashSet(0);
	/*
	private Set posts = new HashSet(0);
	private Set jobcertificates = new HashSet(0);
	private Set testquestions = new HashSet(0);
	
	private Set records = new HashSet(0);
	private Set notes = new HashSet(0);
	private Set discusses = new HashSet(0);
	private Set positions = new HashSet(0);
	private Set trainingclasses = new HashSet(0);
	private Set testarrangements = new HashSet(0);
	private Set mails = new HashSet(0);
	private Set topics = new HashSet(0);
	private Set tiezis = new HashSet(0);
	private Set educationbackgrounds = new HashSet(0);
	private Set majorqualifications = new HashSet(0);
	private Set practisingcertificates = new HashSet(0);
	private Set jobtechnicalgrades = new HashSet(0);
	private Set personalinformations = new HashSet(0);
*/
	// Constructors

	/** default constructor */
	public User() {
	}

	/** full constructor */
	

	// Property accessors

	public Integer getUserId() {
		return this.userId;
	}

	public void setUserId(Integer userId) {
		this.userId = userId;
	}

	public Majorqualification getMajorqualification() {
		return this.majorqualification;
	}

	public void setMajorqualification(Majorqualification majorqualification) {
		this.majorqualification = majorqualification;
	}

	public Personalinformation getPersonalinformation() {
		return this.personalinformation;
	}

	public void setPersonalinformation(Personalinformation personalinformation) {
		this.personalinformation = personalinformation;
	}

	public Educationbackground getEducationbackground() {
		return this.educationbackground;
	}

	public void setEducationbackground(Educationbackground educationbackground) {
		this.educationbackground = educationbackground;
	}

	public String getUserName() {
		return this.userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getUserPassword() {
		return this.userPassword;
	}

	public void setUserPassword(String userPassword) {
		this.userPassword = userPassword;
	}

	public Integer getUserState() {
		return this.userState;
	}

	public void setUserState(Integer userState) {
		this.userState = userState;
	}

	public Set getCourses() {
		return courses;
	}

	public void setCourses(Set courses) {
		this.courses = courses;
	}

	public Set getNotices() {
		return notices;
	}

	public void setNotices(Set notices) {
		this.notices = notices;
	}

	public Set getMessage() {
		return message;
	}

	public void setMessage(Set message) {
		this.message = message;
	}


}