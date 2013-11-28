package cn.com.model;

import java.sql.Timestamp;

/**
 * Jobcertificate entity. @author MyEclipse Persistence Tools
 */

public class Jobcertificate implements java.io.Serializable {

	// Fields

	private Integer jobCertificateId;
	private User user;
	private String jobCertificateName;
	private Integer jobCertificateType;
	private String jobCertificateGrantUnit;
	private String jobCertificateNumber;
	private Timestamp jobCertificateGrantDate;
	private Integer jobindate;
	private Timestamp jobStartTime;
	private Timestamp jobReviewTime;
	private Integer effective;

	// Constructors

	/** default constructor */
	public Jobcertificate() {
	}

	/** full constructor */
	public Jobcertificate(User user, String jobCertificateName,
			Integer jobCertificateType, String jobCertificateGrantUnit,
			String jobCertificateNumber, Timestamp jobCertificateGrantDate,
			Integer jobindate, Timestamp jobStartTime, Timestamp jobReviewTime,
			Integer effective) {
		this.user = user;
		this.jobCertificateName = jobCertificateName;
		this.jobCertificateType = jobCertificateType;
		this.jobCertificateGrantUnit = jobCertificateGrantUnit;
		this.jobCertificateNumber = jobCertificateNumber;
		this.jobCertificateGrantDate = jobCertificateGrantDate;
		this.jobindate = jobindate;
		this.jobStartTime = jobStartTime;
		this.jobReviewTime = jobReviewTime;
		this.effective = effective;
	}

	// Property accessors

	public Integer getJobCertificateId() {
		return this.jobCertificateId;
	}

	public void setJobCertificateId(Integer jobCertificateId) {
		this.jobCertificateId = jobCertificateId;
	}

	public User getUser() {
		return this.user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public String getJobCertificateName() {
		return this.jobCertificateName;
	}

	public void setJobCertificateName(String jobCertificateName) {
		this.jobCertificateName = jobCertificateName;
	}

	public Integer getJobCertificateType() {
		return this.jobCertificateType;
	}

	public void setJobCertificateType(Integer jobCertificateType) {
		this.jobCertificateType = jobCertificateType;
	}

	public String getJobCertificateGrantUnit() {
		return this.jobCertificateGrantUnit;
	}

	public void setJobCertificateGrantUnit(String jobCertificateGrantUnit) {
		this.jobCertificateGrantUnit = jobCertificateGrantUnit;
	}

	public String getJobCertificateNumber() {
		return this.jobCertificateNumber;
	}

	public void setJobCertificateNumber(String jobCertificateNumber) {
		this.jobCertificateNumber = jobCertificateNumber;
	}

	public Timestamp getJobCertificateGrantDate() {
		return this.jobCertificateGrantDate;
	}

	public void setJobCertificateGrantDate(Timestamp jobCertificateGrantDate) {
		this.jobCertificateGrantDate = jobCertificateGrantDate;
	}

	public Integer getJobindate() {
		return this.jobindate;
	}

	public void setJobindate(Integer jobindate) {
		this.jobindate = jobindate;
	}

	public Timestamp getJobStartTime() {
		return this.jobStartTime;
	}

	public void setJobStartTime(Timestamp jobStartTime) {
		this.jobStartTime = jobStartTime;
	}

	public Timestamp getJobReviewTime() {
		return this.jobReviewTime;
	}

	public void setJobReviewTime(Timestamp jobReviewTime) {
		this.jobReviewTime = jobReviewTime;
	}

	public Integer getEffective() {
		return this.effective;
	}

	public void setEffective(Integer effective) {
		this.effective = effective;
	}

}