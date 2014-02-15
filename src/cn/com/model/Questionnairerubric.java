package cn.com.model;

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
	private String questionnaireRubricContent;
	private QuestionnaireRubricResult questionnaireRubricResult;

	// Constructors

	/** default constructor */
	public Questionnairerubric() {
	}

	/** full constructor */
	public Questionnairerubric(Questionnaire questionnaire,
			Integer questionnaireRubricType, String questionnaireRubricContent) {
		this.questionnaire = questionnaire;
		this.questionnaireRubricType = questionnaireRubricType;
		this.questionnaireRubricContent = questionnaireRubricContent;
	}

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

	public String getQuestionnaireRubricContent() {
		return this.questionnaireRubricContent;
	}

	public void setQuestionnaireRubricContent(String questionnaireRubricContent) {
		this.questionnaireRubricContent = questionnaireRubricContent;
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

	public QuestionnaireRubricResult getQuestionnaireRubricResult() {
		return questionnaireRubricResult;
	}

	public void setQuestionnaireRubricResult(
			QuestionnaireRubricResult questionnaireRubricResult) {
		this.questionnaireRubricResult = questionnaireRubricResult;
	}

}