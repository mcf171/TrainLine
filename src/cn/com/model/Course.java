package cn.com.model;

import java.util.HashSet;
import java.util.Set;

/**
 * Course entity. @author MyEclipse Persistence Tools
 */

public class Course implements java.io.Serializable {

	// Fields

	private Integer courseId;
	private Integer keepsecret;
	private String courseName;
	private String videoPlace;
	private String bookPlace;
	

	// Constructors

	/** default constructor */
	public Course() {
	}

	/** full constructor */
	public Course(Integer keepsecret, String courseName, String videoPlace,
			String bookPlace) {
		this.keepsecret = keepsecret;
		this.courseName = courseName;
		this.videoPlace = videoPlace;
		this.bookPlace = bookPlace;
		
	}

	// Property accessors

	public Integer getCourseId() {
		return this.courseId;
	}

	public void setCourseId(Integer courseId) {
		this.courseId = courseId;
	}

	public Integer getKeepsecret() {
		return this.keepsecret;
	}

	public void setKeepsecret(Integer keepsecret) {
		this.keepsecret = keepsecret;
	}

	public String getCourseName() {
		return this.courseName;
	}

	public void setCourseName(String courseName) {
		this.courseName = courseName;
	}

	public String getVideoPlace() {
		return this.videoPlace;
	}

	public void setVideoPlace(String videoPlace) {
		this.videoPlace = videoPlace;
	}

	public String getBookPlace() {
		return this.bookPlace;
	}

	public void setBookPlace(String bookPlace) {
		this.bookPlace = bookPlace;
	}


}