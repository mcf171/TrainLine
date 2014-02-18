package cn.com.model;

import java.util.Set;

/**
 * Questionnairerubric entity. @author MyEclipse Persistence Tools
 */

public class Questionnairerubric implements java.io.Serializable {

	// Fields

	private Integer questionnaireRubricId;
	private Questionnaire questionnaire;
	private Integer questionnaireRubricType;
	private Integer questionnaireRubricWeight;
	private String questionnaireRubricIntroduce;
	private Set<QuestionnaireChoose> questionnaireChoose;

	// Constructors

	/** default constructor */
	public Questionnairerubric() {
	}

	/** full constructor */
	
	// Property accessors

	public Integer getQuestionnaireRubricId() {
		return this.questionnaireRubricId;
	}

	public void setQuestionnaireRubricId(Integer questionnaireRubricId) {
		this.questionnaireRubricId = questionnaireRubricId;
	}

	public Questionnaire getQuestionnaire() {
		return this.questionnaire;
	}

	public void setQuestionnaire(Questionnaire questionnaire) {
		this.questionnaire = questionnaire;
	}

	public Integer getQuestionnaireRubricType() {
		return this.questionnaireRubricType;
	}

	public void setQuestionnaireRubricType(Integer questionnaireRubricType) {
		this.questionnaireRubricType = questionnaireRubricType;
	}

	

	public Set<QuestionnaireChoose> getQuestionnaireChoose() {
		return questionnaireChoose;
	}

	public void setQuestionnaireChoose(Set<QuestionnaireChoose> questionnaireChoose) {
		this.questionnaireChoose = questionnaireChoose;
	}

	public Integer getQuestionnaireRubricWeight() {
		return questionnaireRubricWeight;
	}

	public void setQuestionnaireRubricWeight(Integer questionnaireRubricWeight) {
		this.questionnaireRubricWeight = questionnaireRubricWeight;
	}

	public String getQuestionnaireRubricIntroduce() {
		return questionnaireRubricIntroduce;
	}

	public void setQuestionnaireRubricIntroduce(String questionnaireRubricIntroduce) {
		this.questionnaireRubricIntroduce = questionnaireRubricIntroduce;
	}

	

}