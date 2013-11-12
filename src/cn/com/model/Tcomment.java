package cn.com.model;

import java.sql.Timestamp;

/**
 * Tcomment entity. @author MyEclipse Persistence Tools
 */

public class Tcomment implements java.io.Serializable {

	// Fields

	private Integer tcommentId;
	private Catalogue catalogue;
	private String tcommentContent;
	private Timestamp tcommentDate;
	private Integer tcommentEvaluate;

	// Constructors

	/** default constructor */
	public Tcomment() {
	}

	/** full constructor */
	public Tcomment(Catalogue catalogue, String tcommentContent,
			Timestamp tcommentDate, Integer tcommentEvaluate) {
		this.catalogue = catalogue;
		this.tcommentContent = tcommentContent;
		this.tcommentDate = tcommentDate;
		this.tcommentEvaluate = tcommentEvaluate;
	}

	// Property accessors

	public Integer getTcommentId() {
		return this.tcommentId;
	}

	public void setTcommentId(Integer tcommentId) {
		this.tcommentId = tcommentId;
	}

	public Catalogue getCatalogue() {
		return this.catalogue;
	}

	public void setCatalogue(Catalogue catalogue) {
		this.catalogue = catalogue;
	}

	public String getTcommentContent() {
		return this.tcommentContent;
	}

	public void setTcommentContent(String tcommentContent) {
		this.tcommentContent = tcommentContent;
	}

	public Timestamp getTcommentDate() {
		return this.tcommentDate;
	}

	public void setTcommentDate(Timestamp tcommentDate) {
		this.tcommentDate = tcommentDate;
	}

	public Integer getTcommentEvaluate() {
		return this.tcommentEvaluate;
	}

	public void setTcommentEvaluate(Integer tcommentEvaluate) {
		this.tcommentEvaluate = tcommentEvaluate;
	}

}