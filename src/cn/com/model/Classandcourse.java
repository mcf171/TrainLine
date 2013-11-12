package cn.com.model;

/**
 * Classandcourse entity. @author MyEclipse Persistence Tools
 */

public class Classandcourse implements java.io.Serializable {

	// Fields

	private ClassandcourseId id;

	// Constructors

	/** default constructor */
	public Classandcourse() {
	}

	/** full constructor */
	public Classandcourse(ClassandcourseId id) {
		this.id = id;
	}

	// Property accessors

	public ClassandcourseId getId() {
		return this.id;
	}

	public void setId(ClassandcourseId id) {
		this.id = id;
	}

}