package cn.com.model;

import java.sql.Timestamp;

/**
 * Majorqualification entity. @author MyEclipse Persistence Tools
 */

public class Majorqualification implements java.io.Serializable {

	// Fields

	private Integer majorQualificationId;
	private Integer userId;
	private String grantWay;
	private String qualificationApprovalDocument;
	private Timestamp grantQualificationDate;
	private String grantQualificationUnit;
	private Integer majorCertificateNumber;
	private Timestamp m;
	private Timestamp majorEngagerEndTime;
	private String engageUnit;
	private String employmentApprovalDocument;
	private String professionalOffice;
	private String judgingPanel;
	private String majorComment;

	// Constructors

	/** default constructor */
	public Majorqualification() {
	}

	/** full constructor */
	public Majorqualification(Integer userId, String grantWay,
			String qualificationApprovalDocument,
			Timestamp grantQualificationDate, String grantQualificationUnit,
			Integer majorCertificateNumber, Timestamp m,
			Timestamp majorEngagerEndTime, String engageUnit,
			String employmentApprovalDocument, String professionalOffice,
			String judgingPanel, String majorComment) {
		this.userId = userId;
		this.grantWay = grantWay;
		this.qualificationApprovalDocument = qualificationApprovalDocument;
		this.grantQualificationDate = grantQualificationDate;
		this.grantQualificationUnit = grantQualificationUnit;
		this.majorCertificateNumber = majorCertificateNumber;
		this.m = m;
		this.majorEngagerEndTime = majorEngagerEndTime;
		this.engageUnit = engageUnit;
		this.employmentApprovalDocument = employmentApprovalDocument;
		this.professionalOffice = professionalOffice;
		this.judgingPanel = judgingPanel;
		this.majorComment = majorComment;
	}

	// Property accessors

	public Integer getMajorQualificationId() {
		return this.majorQualificationId;
	}

	public void setMajorQualificationId(Integer majorQualificationId) {
		this.majorQualificationId = majorQualificationId;
	}

	public Integer getUserId() {
		return this.userId;
	}

	public void setUserId(Integer userId) {
		this.userId = userId;
	}

	public String getGrantWay() {
		return this.grantWay;
	}

	public void setGrantWay(String grantWay) {
		this.grantWay = grantWay;
	}

	public String getQualificationApprovalDocument() {
		return this.qualificationApprovalDocument;
	}

	public void setQualificationApprovalDocument(
			String qualificationApprovalDocument) {
		this.qualificationApprovalDocument = qualificationApprovalDocument;
	}

	public Timestamp getGrantQualificationDate() {
		return this.grantQualificationDate;
	}

	public void setGrantQualificationDate(Timestamp grantQualificationDate) {
		this.grantQualificationDate = grantQualificationDate;
	}

	public String getGrantQualificationUnit() {
		return this.grantQualificationUnit;
	}

	public void setGrantQualificationUnit(String grantQualificationUnit) {
		this.grantQualificationUnit = grantQualificationUnit;
	}

	public Integer getMajorCertificateNumber() {
		return this.majorCertificateNumber;
	}

	public void setMajorCertificateNumber(Integer majorCertificateNumber) {
		this.majorCertificateNumber = majorCertificateNumber;
	}

	public Timestamp getM() {
		return this.m;
	}

	public void setM(Timestamp m) {
		this.m = m;
	}

	public Timestamp getMajorEngagerEndTime() {
		return this.majorEngagerEndTime;
	}

	public void setMajorEngagerEndTime(Timestamp majorEngagerEndTime) {
		this.majorEngagerEndTime = majorEngagerEndTime;
	}

	public String getEngageUnit() {
		return this.engageUnit;
	}

	public void setEngageUnit(String engageUnit) {
		this.engageUnit = engageUnit;
	}

	public String getEmploymentApprovalDocument() {
		return this.employmentApprovalDocument;
	}

	public void setEmploymentApprovalDocument(String employmentApprovalDocument) {
		this.employmentApprovalDocument = employmentApprovalDocument;
	}

	public String getProfessionalOffice() {
		return this.professionalOffice;
	}

	public void setProfessionalOffice(String professionalOffice) {
		this.professionalOffice = professionalOffice;
	}

	public String getJudgingPanel() {
		return this.judgingPanel;
	}

	public void setJudgingPanel(String judgingPanel) {
		this.judgingPanel = judgingPanel;
	}

	public String getMajorComment() {
		return this.majorComment;
	}

	public void setMajorComment(String majorComment) {
		this.majorComment = majorComment;
	}

}