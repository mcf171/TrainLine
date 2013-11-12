package cn.com.model;

/**
 * Userandmail entity. @author MyEclipse Persistence Tools
 */

public class Userandmail implements java.io.Serializable {

	// Fields

	private UserandmailId id;

	// Constructors

	/** default constructor */
	public Userandmail() {
	}

	/** full constructor */
	public Userandmail(UserandmailId id) {
		this.id = id;
	}

	// Property accessors

	public UserandmailId getId() {
		return this.id;
	}

	public void setId(UserandmailId id) {
		this.id = id;
	}

}