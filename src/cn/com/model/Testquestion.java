package cn.com.model;

import java.util.HashSet;
import java.util.Set;

/**
 * Testquestion entity. @author MyEclipse Persistence Tools
 */

public class Testquestion implements java.io.Serializable {

	// Fields

	private Integer testQuestionId;
	private Testpaper testpaper;
	private Course course;
	private String testQuestionName;
	private Integer degreeOfDifficulty;
	private Integer score;
	private String testType;
	private Set userandquestions = new HashSet(0);

	// Constructors

	/** default constructor */
	public Testquestion() {
	}

	/** full constructor */
	public Testquestion(Testpaper testpaper, Course course,
			String testQuestionName, Integer degreeOfDifficulty, Integer score,
			String testType, Set userandquestions) {
		this.testpaper = testpaper;
		this.course = course;
		this.testQuestionName = testQuestionName;
		this.degreeOfDifficulty = degreeOfDifficulty;
		this.score = score;
		this.testType = testType;
		this.userandquestions = userandquestions;
	}

	// Property accessors

	public Integer getTestQuestionId() {
		return this.testQuestionId;
	}

	public void setTestQuestionId(Integer testQuestionId) {
		this.testQuestionId = testQuestionId;
	}

	public Testpaper getTestpaper() {
		return this.testpaper;
	}

	public void setTestpaper(Testpaper testpaper) {
		this.testpaper = testpaper;
	}

	public Course getCourse() {
		return this.course;
	}

	public void setCourse(Course course) {
		this.course = course;
	}

	public String getTestQuestionName() {
		return this.testQuestionName;
	}

	public void setTestQuestionName(String testQuestionName) {
		this.testQuestionName = testQuestionName;
	}

	public Integer getDegreeOfDifficulty() {
		return this.degreeOfDifficulty;
	}

	public void setDegreeOfDifficulty(Integer degreeOfDifficulty) {
		this.degreeOfDifficulty = degreeOfDifficulty;
	}

	public Integer getScore() {
		return this.score;
	}

	public void setScore(Integer score) {
		this.score = score;
	}

	public String getTestType() {
		return this.testType;
	}

	public void setTestType(String testType) {
		this.testType = testType;
	}

	public Set getUserandquestions() {
		return this.userandquestions;
	}

	public void setUserandquestions(Set userandquestions) {
		this.userandquestions = userandquestions;
	}

}