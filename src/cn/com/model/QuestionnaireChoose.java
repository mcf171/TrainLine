package cn.com.model;

import java.io.Serializable;

public class QuestionnaireChoose implements Serializable{

	private int questionnaireChooseId;
	private String questionnaireChooseContent;
	private Questionnairerubric questionnaireRubric;
	private int count;
	public int getQuestionnaireChooseId() {
		return questionnaireChooseId;
	}
	public void setQuestionnaireChooseId(int questionnaireChooseId) {
		this.questionnaireChooseId = questionnaireChooseId;
	}
	public String getQuestionnaireChooseContent() {
		return questionnaireChooseContent;
	}
	public void setQuestionnaireChooseContent(String questionnaireChooseContent) {
		this.questionnaireChooseContent = questionnaireChooseContent;
	}
	public int getCount() {
		return count;
	}
	public void setCount(int count) {
		this.count = count;
	}
	public Questionnairerubric getQuestionnaireRubric() {
		return questionnaireRubric;
	}
	public void setQuestionnaireRubric(Questionnairerubric questionnaireRubric) {
		this.questionnaireRubric = questionnaireRubric;
	}
	
	
}
