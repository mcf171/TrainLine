package cn.com.model;

import java.util.HashSet;
import java.util.Set;

/**
 * Testpaper entity. @author MyEclipse Persistence Tools
 */

public class Testpaper implements java.io.Serializable {

	// Fields

	private Integer testPaperId;
	private Testarrangement testarrangement;
	private String testPaperName;
	private Set testquestions = new HashSet(0);
	private Set testarrangements = new HashSet(0);

	// Constructors

	/** default constructor */
	public Testpaper() {
	}

	/** full constructor */
	public Testpaper(Testarrangement testarrangement, String testPaperName,
			Set testquestions, Set testarrangements) {
		this.testarrangement = testarrangement;
		this.testPaperName = testPaperName;
		this.testquestions = testquestions;
		this.testarrangements = testarrangements;
	}

	// Property accessors

	public Integer getTestPaperId() {
		return this.testPaperId;
	}

	public void setTestPaperId(Integer testPaperId) {
		this.testPaperId = testPaperId;
	}

	public Testarrangement getTestarrangement() {
		return this.testarrangement;
	}

	public void setTestarrangement(Testarrangement testarrangement) {
		this.testarrangement = testarrangement;
	}

	public String getTestPaperName() {
		return this.testPaperName;
	}

	public void setTestPaperName(String testPaperName) {
		this.testPaperName = testPaperName;
	}

	public Set getTestquestions() {
		return this.testquestions;
	}

	public void setTestquestions(Set testquestions) {
		this.testquestions = testquestions;
	}

	public Set getTestarrangements() {
		return this.testarrangements;
	}

	public void setTestarrangements(Set testarrangements) {
		this.testarrangements = testarrangements;
	}

}