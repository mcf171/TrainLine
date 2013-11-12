package cn.com.model;

import java.sql.Timestamp;

/**
 * Questionarrangement entity. @author MyEclipse Persistence Tools
 */

public class Questionarrangement implements java.io.Serializable {

	// Fields

	private Integer questionArrangementId;
	private Questionnaire questionnaire;
	private String questionArrangementName;
	private Integer questionArrangementState;
	private Timestamp questionArrangementBeginTime;
	private Timestamp questionArrangementOverTime;
	private String questionArrangementIntro;

	// Constructors

	/** default constructor */
	public Questionarrangement() {
	}

	/** full constructor */
	public Questionarrangement(Questionnaire questionnaire,
			String questionArrangementName, Integer questionArrangementState,
			Timestamp questionArrangementBeginTime,
			Timestamp questionArrangementOverTime,
			String questionArrangementIntro) {
		this.questionnaire = questionnaire;
		this.questionArrangementName = questionArrangementName;
		this.questionArrangementState = questionArrangementState;
		this.questionArrangementBeginTime = questionArrangementBeginTime;
		this.questionArrangementOverTime = questionArrangementOverTime;
		this.questionArrangementIntro = questionArrangementIntro;
	}

	// Property accessors

	public Integer getQuestionArrangementId() {
		return this.questionArrangementId;
	}

	public void setQuestionArrangementId(Integer questionArrangementId) {
		this.questionArrangementId = questionArrangementId;
	}

	public Questionnaire getQuestionnaire() {
		return this.questionnaire;
	}

	public void setQuestionnaire(Questionnaire questionnaire) {
		this.questionnaire = questionnaire;
	}

	public String getQuestionArrangementName() {
		return this.questionArrangementName;
	}

	public void setQuestionArrangementName(String questionArrangementName) {
		this.questionArrangementName = questionArrangementName;
	}

	public Integer getQuestionArrangementState() {
		return this.questionArrangementState;
	}

	public void setQuestionArrangementState(Integer questionArrangementState) {
		this.questionArrangementState = questionArrangementState;
	}

	public Timestamp getQuestionArrangementBeginTime() {
		return this.questionArrangementBeginTime;
	}

	public void setQuestionArrangementBeginTime(
			Timestamp questionArrangementBeginTime) {
		this.questionArrangementBeginTime = questionArrangementBeginTime;
	}

	public Timestamp getQuestionArrangementOverTime() {
		return this.questionArrangementOverTime;
	}

	public void setQuestionArrangementOverTime(
			Timestamp questionArrangementOverTime) {
		this.questionArrangementOverTime = questionArrangementOverTime;
	}

	public String getQuestionArrangementIntro() {
		return this.questionArrangementIntro;
	}

	public void setQuestionArrangementIntro(String questionArrangementIntro) {
		this.questionArrangementIntro = questionArrangementIntro;
	}

}