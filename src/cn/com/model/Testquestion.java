package cn.com.model;

import java.util.HashSet;
import java.util.Set;

/**
 * Testquestion entity. @author MyEclipse Persistence Tools
 */

public class Testquestion implements java.io.Serializable {

	// Fields

	private Integer testQuestionId;
	private Course course;
	private String testQuestionName;
	private Integer degreeOfDifficulty;
	private Integer score;
	private String testType;
	private String testAnswerIntroduce;
	private String standardAnswer;
	/**
	private Set testpapers = new HashSet(0);
	private Set users = new HashSet(0);
*/
	// Constructors

	/** default constructor */
	public Testquestion() {
	}



	// Property accessors

	public Integer getTestQuestionId() {
		return this.testQuestionId;
	}

	public void setTestQuestionId(Integer testQuestionId) {
		this.testQuestionId = testQuestionId;
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

	public String getTestAnswerIntroduce() {
		return this.testAnswerIntroduce;
	}

	public void setTestAnswerIntroduce(String testAnswerIntroduce) {
		this.testAnswerIntroduce = testAnswerIntroduce;
	}

	public String getStandardAnswer() {
		return this.standardAnswer;
	}

	public void setStandardAnswer(String standardAnswer) {
		this.standardAnswer = standardAnswer;
	}


}