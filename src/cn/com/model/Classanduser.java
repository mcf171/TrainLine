package cn.com.model;

/**
 * Classanduser entity. @author MyEclipse Persistence Tools
 */

public class Classanduser implements java.io.Serializable {

	// Fields

	private ClassanduserId id;

	// Constructors

	/** default constructor */
	public Classanduser() {
	}

	/** full constructor */
	public Classanduser(ClassanduserId id) {
		this.id = id;
	}

	// Property accessors

	public ClassanduserId getId() {
		return this.id;
	}

	public void setId(ClassanduserId id) {
		this.id = id;
	}

}