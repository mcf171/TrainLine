package cn.com.model;

import java.sql.Timestamp;

/**
 * Jobtechnicalgrade entity. @author MyEclipse Persistence Tools
 */

public class Jobtechnicalgrade implements java.io.Serializable {

	// Fields

	private Integer jobTechnicalGradeId;
	private Integer userId;
	private Integer technicalGrade;
	private String workType;
	private Timestamp workerCertificateGrantDate;
	private String workerprofessionalCertificate;
	private String employmentType;
	private Timestamp workerEngageStartTime;
	private String employmentNumber;
	private Integer speciaType;
	private String workComment;
	private Timestamp workerEngageEndTime;

	// Constructors

	/** default constructor */
	public Jobtechnicalgrade() {
	}

	/** full constructor */
	public Jobtechnicalgrade(Integer userId, Integer technicalGrade,
			String workType, Timestamp workerCertificateGrantDate,
			String workerprofessionalCertificate, String employmentType,
			Timestamp workerEngageStartTime, String employmentNumber,
			Integer speciaType, String workComment,
			Timestamp workerEngageEndTime) {
		this.userId = userId;
		this.technicalGrade = technicalGrade;
		this.workType = workType;
		this.workerCertificateGrantDate = workerCertificateGrantDate;
		this.workerprofessionalCertificate = workerprofessionalCertificate;
		this.employmentType = employmentType;
		this.workerEngageStartTime = workerEngageStartTime;
		this.employmentNumber = employmentNumber;
		this.speciaType = speciaType;
		this.workComment = workComment;
		this.workerEngageEndTime = workerEngageEndTime;
	}

	// Property accessors

	public Integer getJobTechnicalGradeId() {
		return this.jobTechnicalGradeId;
	}

	public void setJobTechnicalGradeId(Integer jobTechnicalGradeId) {
		this.jobTechnicalGradeId = jobTechnicalGradeId;
	}

	public Integer getUserId() {
		return this.userId;
	}

	public void setUserId(Integer userId) {
		this.userId = userId;
	}

	public Integer getTechnicalGrade() {
		return this.technicalGrade;
	}

	public void setTechnicalGrade(Integer technicalGrade) {
		this.technicalGrade = technicalGrade;
	}

	public String getWorkType() {
		return this.workType;
	}

	public void setWorkType(String workType) {
		this.workType = workType;
	}

	public Timestamp getWorkerCertificateGrantDate() {
		return this.workerCertificateGrantDate;
	}

	public void setWorkerCertificateGrantDate(
			Timestamp workerCertificateGrantDate) {
		this.workerCertificateGrantDate = workerCertificateGrantDate;
	}

	public String getWorkerprofessionalCertificate() {
		return this.workerprofessionalCertificate;
	}

	public void setWorkerprofessionalCertificate(
			String workerprofessionalCertificate) {
		this.workerprofessionalCertificate = workerprofessionalCertificate;
	}

	public String getEmploymentType() {
		return this.employmentType;
	}

	public void setEmploymentType(String employmentType) {
		this.employmentType = employmentType;
	}

	public Timestamp getWorkerEngageStartTime() {
		return this.workerEngageStartTime;
	}

	public void setWorkerEngageStartTime(Timestamp workerEngageStartTime) {
		this.workerEngageStartTime = workerEngageStartTime;
	}

	public String getEmploymentNumber() {
		return this.employmentNumber;
	}

	public void setEmploymentNumber(String employmentNumber) {
		this.employmentNumber = employmentNumber;
	}

	public Integer getSpeciaType() {
		return this.speciaType;
	}

	public void setSpeciaType(Integer speciaType) {
		this.speciaType = speciaType;
	}

	public String getWorkComment() {
		return this.workComment;
	}

	public void setWorkComment(String workComment) {
		this.workComment = workComment;
	}

	public Timestamp getWorkerEngageEndTime() {
		return this.workerEngageEndTime;
	}

	public void setWorkerEngageEndTime(Timestamp workerEngageEndTime) {
		this.workerEngageEndTime = workerEngageEndTime;
	}

}