package cn.com.model;

/**
 * Userandquestion entity. @author MyEclipse Persistence Tools
 */

public class Userandquestion implements java.io.Serializable {

	// Fields

	private UserandquestionId id;

	// Constructors

	/** default constructor */
	public Userandquestion() {
	}

	/** full constructor */
	public Userandquestion(UserandquestionId id) {
		this.id = id;
	}

	// Property accessors

	public UserandquestionId getId() {
		return this.id;
	}

	public void setId(UserandquestionId id) {
		this.id = id;
	}

}