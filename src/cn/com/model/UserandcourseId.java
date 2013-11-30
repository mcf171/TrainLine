package cn.com.model;

/**
 * UserandcourseId entity. @author MyEclipse Persistence Tools
 */

public class UserandcourseId implements java.io.Serializable {

	// Fields

	private Integer userId;
	private Integer courseId;

	// Constructors

	/** default constructor */
	public UserandcourseId() {
	}

	public Integer getUserId() {
		return userId;
	}

	public void setUserId(Integer userId) {
		this.userId = userId;
	}

	public Integer getCourseId() {
		return courseId;
	}

	public void setCourseId(Integer courseId) {
		this.courseId = courseId;
	}

	public UserandcourseId(Integer userId, Integer courseId) {
		this.userId = userId;
		this.courseId = courseId;
	}

}