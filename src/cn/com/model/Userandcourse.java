package cn.com.model;

/**
 * Userandcourse entity. @author MyEclipse Persistence Tools
 */

public class Userandcourse implements java.io.Serializable {

	// Fields

	private UserandcourseId id;

	// Constructors

	/** default constructor */
	public Userandcourse() {
	}

	/** full constructor */
	public Userandcourse(UserandcourseId id) {
		this.id = id;
	}

	// Property accessors

	public UserandcourseId getId() {
		return this.id;
	}

	public void setId(UserandcourseId id) {
		this.id = id;
	}

}