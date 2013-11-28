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
	private Set posts = new HashSet(0);
	private Set jobcertificates = new HashSet(0);
	private Set testquestions = new HashSet(0);
	private Set courses = new HashSet(0);
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

	// Constructors

	/** default constructor */
	public User() {
	}

	/** full constructor */
	public User(Majorqualification majorqualification,
			Personalinformation personalinformation,
			Educationbackground educationbackground, String userName,
			String userPassword, Integer userState, Set posts,
			Set jobcertificates, Set testquestions, Set courses, Set records,
			Set notes, Set discusses, Set positions, Set trainingclasses,
			Set testarrangements, Set mails, Set topics, Set tiezis,
			Set educationbackgrounds, Set majorqualifications,
			Set practisingcertificates, Set jobtechnicalgrades,
			Set personalinformations) {
		this.majorqualification = majorqualification;
		this.personalinformation = personalinformation;
		this.educationbackground = educationbackground;
		this.userName = userName;
		this.userPassword = userPassword;
		this.userState = userState;
		this.posts = posts;
		this.jobcertificates = jobcertificates;
		this.testquestions = testquestions;
		this.courses = courses;
		this.records = records;
		this.notes = notes;
		this.discusses = discusses;
		this.positions = positions;
		this.trainingclasses = trainingclasses;
		this.testarrangements = testarrangements;
		this.mails = mails;
		this.topics = topics;
		this.tiezis = tiezis;
		this.educationbackgrounds = educationbackgrounds;
		this.majorqualifications = majorqualifications;
		this.practisingcertificates = practisingcertificates;
		this.jobtechnicalgrades = jobtechnicalgrades;
		this.personalinformations = personalinformations;
	}

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

	public Set getPosts() {
		return this.posts;
	}

	public void setPosts(Set posts) {
		this.posts = posts;
	}

	public Set getJobcertificates() {
		return this.jobcertificates;
	}

	public void setJobcertificates(Set jobcertificates) {
		this.jobcertificates = jobcertificates;
	}

	public Set getTestquestions() {
		return this.testquestions;
	}

	public void setTestquestions(Set testquestions) {
		this.testquestions = testquestions;
	}

	public Set getCourses() {
		return this.courses;
	}

	public void setCourses(Set courses) {
		this.courses = courses;
	}

	public Set getRecords() {
		return this.records;
	}

	public void setRecords(Set records) {
		this.records = records;
	}

	public Set getNotes() {
		return this.notes;
	}

	public void setNotes(Set notes) {
		this.notes = notes;
	}

	public Set getDiscusses() {
		return this.discusses;
	}

	public void setDiscusses(Set discusses) {
		this.discusses = discusses;
	}

	public Set getPositions() {
		return this.positions;
	}

	public void setPositions(Set positions) {
		this.positions = positions;
	}

	public Set getTrainingclasses() {
		return this.trainingclasses;
	}

	public void setTrainingclasses(Set trainingclasses) {
		this.trainingclasses = trainingclasses;
	}

	public Set getTestarrangements() {
		return this.testarrangements;
	}

	public void setTestarrangements(Set testarrangements) {
		this.testarrangements = testarrangements;
	}

	public Set getMails() {
		return this.mails;
	}

	public void setMails(Set mails) {
		this.mails = mails;
	}

	public Set getTopics() {
		return this.topics;
	}

	public void setTopics(Set topics) {
		this.topics = topics;
	}

	public Set getTiezis() {
		return this.tiezis;
	}

	public void setTiezis(Set tiezis) {
		this.tiezis = tiezis;
	}

	public Set getEducationbackgrounds() {
		return this.educationbackgrounds;
	}

	public void setEducationbackgrounds(Set educationbackgrounds) {
		this.educationbackgrounds = educationbackgrounds;
	}

	public Set getMajorqualifications() {
		return this.majorqualifications;
	}

	public void setMajorqualifications(Set majorqualifications) {
		this.majorqualifications = majorqualifications;
	}

	public Set getPractisingcertificates() {
		return this.practisingcertificates;
	}

	public void setPractisingcertificates(Set practisingcertificates) {
		this.practisingcertificates = practisingcertificates;
	}

	public Set getJobtechnicalgrades() {
		return this.jobtechnicalgrades;
	}

	public void setJobtechnicalgrades(Set jobtechnicalgrades) {
		this.jobtechnicalgrades = jobtechnicalgrades;
	}

	public Set getPersonalinformations() {
		return this.personalinformations;
	}

	public void setPersonalinformations(Set personalinformations) {
		this.personalinformations = personalinformations;
	}

}