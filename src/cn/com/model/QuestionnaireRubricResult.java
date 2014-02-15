package cn.com.model;

/**
 * Questionnairerubric entity. @author MyEclipse Persistence Tools
 */

public class QuestionnaireRubricResult implements java.io.Serializable {

	// Fields

	private Integer questionnaireRubricResultId;
	private Questionnairerubric questionnaireRubric;
	private Integer countA;
	private Integer countB;
	private Integer countC;
	private Integer countD;
	private Integer countE;
	private Integer countF;
	private Integer countG;
	private Integer countH;
	private Integer countI;

	// Constructors

	/** default constructor */
	public QuestionnaireRubricResult() {
		
		this.countA = 0;
		this.countB = 0;
		this.countC = 0;
		this.countD = 0;
		this.countE = 0;
		this.countF = 0;
		this.countG = 0;
		this.countH = 0;
		this.countI = 0;
	}

	public Integer getQuestionnaireRubricResultId() {
		return questionnaireRubricResultId;
	}

	public void setQuestionnaireRubricResultId(Integer questionnaireRubricResultId) {
		this.questionnaireRubricResultId = questionnaireRubricResultId;
	}

	public Questionnairerubric getQuestionnaireRubric() {
		return questionnaireRubric;
	}

	public void setQuestionnaireRubric(Questionnairerubric questionnaireRubric) {
		this.questionnaireRubric = questionnaireRubric;
	}

	public Integer getCountA() {
		return countA;
	}

	public void setCountA(Integer countA) {
		this.countA = countA;
	}

	public Integer getCountB() {
		return countB;
	}

	public void setCountB(Integer countB) {
		this.countB = countB;
	}

	public Integer getCountC() {
		return countC;
	}

	public void setCountC(Integer countC) {
		this.countC = countC;
	}

	public Integer getCountD() {
		return countD;
	}

	public void setCountD(Integer countD) {
		this.countD = countD;
	}

	public Integer getCountE() {
		return countE;
	}

	public void setCountE(Integer countE) {
		this.countE = countE;
	}

	public Integer getCountF() {
		return countF;
	}

	public void setCountF(Integer countF) {
		this.countF = countF;
	}

	public Integer getCountG() {
		return countG;
	}

	public void setCountG(Integer countG) {
		this.countG = countG;
	}

	public Integer getCountH() {
		return countH;
	}

	public void setCountH(Integer countH) {
		this.countH = countH;
	}

	public Integer getCountI() {
		return countI;
	}

	public void setCountI(Integer countI) {
		this.countI = countI;
	}


}