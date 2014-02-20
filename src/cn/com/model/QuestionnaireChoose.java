package cn.com.model;

import java.io.Serializable;

public class QuestionnaireChoose implements Serializable{

	private Integer questionnaireChooseId;
	private String questionnaireChooseContent;
	private Questionnairerubric questionnaireRubric;
	private Integer count;
	public Integer getQuestionnaireChooseId() {
		return questionnaireChooseId;
	}
	public void setQuestionnaireChooseId(Integer questionnaireChooseId) {
		this.questionnaireChooseId = questionnaireChooseId;
	}
	public String getQuestionnaireChooseContent() {
		return questionnaireChooseContent;
	}
	public void setQuestionnaireChooseContent(String questionnaireChooseContent) {
		this.questionnaireChooseContent = questionnaireChooseContent;
	}
	public Questionnairerubric getQuestionnaireRubric() {
		return questionnaireRubric;
	}
	public void setQuestionnaireRubric(Questionnairerubric questionnaireRubric) {
		this.questionnaireRubric = questionnaireRubric;
	}
	public Integer getCount() {
		return count;
	}
	public void setCount(Integer count) {
		this.count = count;
	}
	
	
}
