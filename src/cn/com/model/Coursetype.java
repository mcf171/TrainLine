package cn.com.model;

/**
 * Coursetype entity. @author MyEclipse Persistence Tools
 */

public class Coursetype implements java.io.Serializable {

	// Fields

	private Integer courseTypeId;
	private String coursetypeName;

	// Constructors

	/** default constructor */
	public Coursetype() {
	}

	/** full constructor */
	public Coursetype(String coursetypeName) {
		this.coursetypeName = coursetypeName;
	}

	// Property accessors

	public Integer getCourseTypeId() {
		return this.courseTypeId;
	}

	public void setCourseTypeId(Integer courseTypeId) {
		this.courseTypeId = courseTypeId;
	}

	public String getCoursetypeName() {
		return this.coursetypeName;
	}

	public void setCoursetypeName(String coursetypeName) {
		this.coursetypeName = coursetypeName;
	}

}