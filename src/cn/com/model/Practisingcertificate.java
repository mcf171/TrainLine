package cn.com.model;

import java.sql.Timestamp;

/**
 * Practisingcertificate entity. @author MyEclipse Persistence Tools
 */

public class Practisingcertificate implements java.io.Serializable {

	// Fields

	private Integer practisingCertificateId;
	private Integer userId;
	private String practisingCertificateName;
	private Timestamp practisingCertificateStartTime;
	private Timestamp practisingCertificateEndTime;
	private String practisingCertificateNumber;
	private String practisingCertificateRegisterUnit;
	private Timestamp practisingCertificateGrantTime;
	private Integer registerPractisingCertificateNumber;
	private String practisingCertificateRegisterMagor;
	private String practisingCertificatecomment;

	// Constructors

	/** default constructor */
	public Practisingcertificate() {
	}

	/** full constructor */
	public Practisingcertificate(Integer userId,
			String practisingCertificateName,
			Timestamp practisingCertificateStartTime,
			Timestamp practisingCertificateEndTime,
			String practisingCertificateNumber,
			String practisingCertificateRegisterUnit,
			Timestamp practisingCertificateGrantTime,
			Integer registerPractisingCertificateNumber,
			String practisingCertificateRegisterMagor,
			String practisingCertificatecomment) {
		this.userId = userId;
		this.practisingCertificateName = practisingCertificateName;
		this.practisingCertificateStartTime = practisingCertificateStartTime;
		this.practisingCertificateEndTime = practisingCertificateEndTime;
		this.practisingCertificateNumber = practisingCertificateNumber;
		this.practisingCertificateRegisterUnit = practisingCertificateRegisterUnit;
		this.practisingCertificateGrantTime = practisingCertificateGrantTime;
		this.registerPractisingCertificateNumber = registerPractisingCertificateNumber;
		this.practisingCertificateRegisterMagor = practisingCertificateRegisterMagor;
		this.practisingCertificatecomment = practisingCertificatecomment;
	}

	// Property accessors

	public Integer getPractisingCertificateId() {
		return this.practisingCertificateId;
	}

	public void setPractisingCertificateId(Integer practisingCertificateId) {
		this.practisingCertificateId = practisingCertificateId;
	}

	public Integer getUserId() {
		return this.userId;
	}

	public void setUserId(Integer userId) {
		this.userId = userId;
	}

	public String getPractisingCertificateName() {
		return this.practisingCertificateName;
	}

	public void setPractisingCertificateName(String practisingCertificateName) {
		this.practisingCertificateName = practisingCertificateName;
	}

	public Timestamp getPractisingCertificateStartTime() {
		return this.practisingCertificateStartTime;
	}

	public void setPractisingCertificateStartTime(
			Timestamp practisingCertificateStartTime) {
		this.practisingCertificateStartTime = practisingCertificateStartTime;
	}

	public Timestamp getPractisingCertificateEndTime() {
		return this.practisingCertificateEndTime;
	}

	public void setPractisingCertificateEndTime(
			Timestamp practisingCertificateEndTime) {
		this.practisingCertificateEndTime = practisingCertificateEndTime;
	}

	public String getPractisingCertificateNumber() {
		return this.practisingCertificateNumber;
	}

	public void setPractisingCertificateNumber(
			String practisingCertificateNumber) {
		this.practisingCertificateNumber = practisingCertificateNumber;
	}

	public String getPractisingCertificateRegisterUnit() {
		return this.practisingCertificateRegisterUnit;
	}

	public void setPractisingCertificateRegisterUnit(
			String practisingCertificateRegisterUnit) {
		this.practisingCertificateRegisterUnit = practisingCertificateRegisterUnit;
	}

	public Timestamp getPractisingCertificateGrantTime() {
		return this.practisingCertificateGrantTime;
	}

	public void setPractisingCertificateGrantTime(
			Timestamp practisingCertificateGrantTime) {
		this.practisingCertificateGrantTime = practisingCertificateGrantTime;
	}

	public Integer getRegisterPractisingCertificateNumber() {
		return this.registerPractisingCertificateNumber;
	}

	public void setRegisterPractisingCertificateNumber(
			Integer registerPractisingCertificateNumber) {
		this.registerPractisingCertificateNumber = registerPractisingCertificateNumber;
	}

	public String getPractisingCertificateRegisterMagor() {
		return this.practisingCertificateRegisterMagor;
	}

	public void setPractisingCertificateRegisterMagor(
			String practisingCertificateRegisterMagor) {
		this.practisingCertificateRegisterMagor = practisingCertificateRegisterMagor;
	}

	public String getPractisingCertificatecomment() {
		return this.practisingCertificatecomment;
	}

	public void setPractisingCertificatecomment(
			String practisingCertificatecomment) {
		this.practisingCertificatecomment = practisingCertificatecomment;
	}

}