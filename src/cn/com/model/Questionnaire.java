package cn.com.model;

import java.util.HashSet;
import java.util.Set;

/**
 * Questionnaire entity. @author MyEclipse Persistence Tools
 */

public class Questionnaire implements java.io.Serializable {

	// Fields

	private Integer questionnaireId;
	private String questionnaireTitle;
	private String questionnaireAuthor;
	private String questionnaireNumber;
	private Integer open;
	private Set questionnairerubrics = new HashSet(0);

	// Constructors

	/** default constructor */
	public Questionnaire() {
	}

	/** full constructor */
	

	// Property accessors

	public Integer getQuestionnaireId() {
		return this.questionnaireId;
	}

	public void setQuestionnaireId(Integer questionnaireId) {
		this.questionnaireId = questionnaireId;
	}

	public String getQuestionnaireTitle() {
		return this.questionnaireTitle;
	}

	public void setQuestionnaireTitle(String questionnaireTitle) {
		this.questionnaireTitle = questionnaireTitle;
	}

	public String getQuestionnaireAuthor() {
		return this.questionnaireAuthor;
	}

	public void setQuestionnaireAuthor(String questionnaireAuthor) {
		this.questionnaireAuthor = questionnaireAuthor;
	}

	public String getQuestionnaireNumber() {
		return this.questionnaireNumber;
	}

	public void setQuestionnaireNumber(String questionnaireNumber) {
		this.questionnaireNumber = questionnaireNumber;
	}

	public Integer getOpen() {
		return this.open;
	}

	public void setOpen(Integer open) {
		this.open = open;
	}

	public Set getQuestionnairerubrics() {
		return this.questionnairerubrics;
	}

	public void setQuestionnairerubrics(Set questionnairerubrics) {
		this.questionnairerubrics = questionnairerubrics;
	}




}