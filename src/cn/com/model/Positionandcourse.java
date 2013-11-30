package cn.com.model;

/**
 * Positionandcourse entity. @author MyEclipse Persistence Tools
 */

public class Positionandcourse implements java.io.Serializable {

	// Fields

	private PositionandcourseId id;

	// Constructors

	/** default constructor */
	public Positionandcourse() {
	}

	/** full constructor */
	public Positionandcourse(PositionandcourseId id) {
		this.id = id;
	}

	// Property accessors

	public PositionandcourseId getId() {
		return this.id;
	}

	public void setId(PositionandcourseId id) {
		this.id = id;
	}

}