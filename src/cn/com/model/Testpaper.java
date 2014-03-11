package cn.com.model;

import java.util.HashSet;
import java.util.Set;

/**
 * Testpaper entity. @author MyEclipse Persistence Tools
 */

public class Testpaper implements java.io.Serializable {

	// Fields

	private Integer testPaperId;
	private Integer testPaperState;
	private String testPaperName;
	private String testPaperCode;
	private Set<Testquestion> testquestions = new HashSet<Testquestion>(0);
;

	// Constructors

	/** default constructor */
	public Testpaper() {
	}

	

	// Property accessors

	public Integer getTestPaperId() {
		return this.testPaperId;
	}

	public void setTestPaperId(Integer testPaperId) {
		this.testPaperId = testPaperId;
	}


	public String getTestPaperName() {
		return this.testPaperName;
	}

	public void setTestPaperName(String testPaperName) {
		this.testPaperName = testPaperName;
	}

	


	public Set<Testquestion> getTestquestions() {
		return testquestions;
	}



	public void setTestquestions(Set<Testquestion> testquestions) {
		this.testquestions = testquestions;
	}



	public Integer getTestPaperState() {
		return testPaperState;
	}



	public void setTestPaperState(Integer testPaperState) {
		this.testPaperState = testPaperState;
	}



	public String getTestPaperCode() {
		return testPaperCode;
	}



	public void setTestPaperCode(String testPaperCode) {
		this.testPaperCode = testPaperCode;
	}



}