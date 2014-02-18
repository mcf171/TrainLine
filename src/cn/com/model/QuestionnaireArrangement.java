package cn.com.model;

import java.sql.Timestamp;

/**
 * Questionarrangement entity. @author MyEclipse Persistence Tools
 */

public class QuestionnaireArrangement implements java.io.Serializable {

	// Fields

	private Integer questionnaireArrangementId;
	private Questionnaire questionnaire;
	private String questionArrangementName;
	private Integer questionArrangementState;
	private User user;
	private Timestamp questionArrangementBeginTime;
	private Timestamp questionArrangementOverTime;
	private String questionArrangementIntro;
	private int finishCount;

	// Constructors

	/** default constructor */
	public QuestionnaireArrangement() {
	}

	/** full constructor */
	public QuestionnaireArrangement(Questionnaire questionnaire,
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


	public Questionnaire getQuestionnaire() {
		return this.questionnaire;
	}

	public Integer getQuestionnaireArrangementId() {
		return questionnaireArrangementId;
	}

	public void setQuestionnaireArrangementId(Integer questionnaireArrangementId) {
		this.questionnaireArrangementId = questionnaireArrangementId;
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

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public int getFinishCount() {
		return finishCount;
	}

	public void setFinishCount(int finishCount) {
		this.finishCount = finishCount;
	}

	
}