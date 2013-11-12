package cn.com.model;

/**
 * Resourseandcatelogue entity. @author MyEclipse Persistence Tools
 */

public class Resourseandcatelogue implements java.io.Serializable {

	// Fields

	private ResourseandcatelogueId id;

	// Constructors

	/** default constructor */
	public Resourseandcatelogue() {
	}

	/** full constructor */
	public Resourseandcatelogue(ResourseandcatelogueId id) {
		this.id = id;
	}

	// Property accessors

	public ResourseandcatelogueId getId() {
		return this.id;
	}

	public void setId(ResourseandcatelogueId id) {
		this.id = id;
	}

}