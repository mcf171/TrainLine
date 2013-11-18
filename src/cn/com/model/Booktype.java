package cn.com.model;

/**
 * Booktype entity. @author MyEclipse Persistence Tools
 */

public class Booktype implements java.io.Serializable {

	// Fields

	private Integer bookTypeId;
	private String bookTypeName;

	// Constructors

	/** default constructor */
	public Booktype() {
	}

	/** full constructor */
	public Booktype(String bookTypeName) {
		this.bookTypeName = bookTypeName;
	}

	// Property accessors

	public Integer getBookTypeId() {
		return this.bookTypeId;
	}

	public void setBookTypeId(Integer bookTypeId) {
		this.bookTypeId = bookTypeId;
	}

	public String getBookTypeName() {
		return this.bookTypeName;
	}

	public void setBookTypeName(String bookTypeName) {
		this.bookTypeName = bookTypeName;
	}

}