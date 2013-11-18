package cn.com.model;

import java.util.HashSet;
import java.util.Set;

/**
 * Course entity. @author MyEclipse Persistence Tools
 */

public class Course implements java.io.Serializable {

	// Fields

	private Integer courseId;
	private String courseName;
	private String courseSpeaker;
	private String courseIntro;
	private Integer courseState;
	

	// Constructors

	/** default constructor */
	public Course() {
	}

	/** full constructor */
	public Course(String courseName, String courseSpeaker, String courseIntro,
			Integer courseState, Set classandcourses, Set userandcourses,
			Set catalogues, Set testquestions) {
		this.courseName = courseName;
		this.courseSpeaker = courseSpeaker;
		this.courseIntro = courseIntro;
		this.courseState = courseState;
		
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


}