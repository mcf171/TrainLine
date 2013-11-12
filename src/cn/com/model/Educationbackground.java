package cn.com.model;

import java.sql.Timestamp;

/**
 * Educationbackground entity. @author MyEclipse Persistence Tools
 */

public class Educationbackground implements java.io.Serializable {

	// Fields

	private Integer educationBackgroundId;
	private Integer userId;
	private Timestamp entranceDate;
	private Timestamp graduateDate;
	private String graduateSchool;
	private String major;
	private String majorDescribevt;
	private Integer educationlevels;
	private String degree;
	private Integer eductionalSystme;
	private String learnWay;
	private Timestamp degreeGrantDate;
	private String degreeNumber;
	private String degreeGrantCountry;
	private String educationResult;
	private String educationBackgroundRemark;
	private Integer highEducation;
	private Integer fullTimeEduction;
	private Integer highEducationOnJob;
	private Integer officeEducation;

	// Constructors

	/** default constructor */
	public Educationbackground() {
	}

	/** full constructor */
	public Educationbackground(Integer userId, Timestamp entranceDate,
			Timestamp graduateDate, String graduateSchool, String major,
			String majorDescribevt, Integer educationlevels, String degree,
			Integer eductionalSystme, String learnWay,
			Timestamp degreeGrantDate, String degreeNumber,
			String degreeGrantCountry, String educationResult,
			String educationBackgroundRemark, Integer highEducation,
			Integer fullTimeEduction, Integer highEducationOnJob,
			Integer officeEducation) {
		this.userId = userId;
		this.entranceDate = entranceDate;
		this.graduateDate = graduateDate;
		this.graduateSchool = graduateSchool;
		this.major = major;
		this.majorDescribevt = majorDescribevt;
		this.educationlevels = educationlevels;
		this.degree = degree;
		this.eductionalSystme = eductionalSystme;
		this.learnWay = learnWay;
		this.degreeGrantDate = degreeGrantDate;
		this.degreeNumber = degreeNumber;
		this.degreeGrantCountry = degreeGrantCountry;
		this.educationResult = educationResult;
		this.educationBackgroundRemark = educationBackgroundRemark;
		this.highEducation = highEducation;
		this.fullTimeEduction = fullTimeEduction;
		this.highEducationOnJob = highEducationOnJob;
		this.officeEducation = officeEducation;
	}

	// Property accessors

	public Integer getEducationBackgroundId() {
		return this.educationBackgroundId;
	}

	public void setEducationBackgroundId(Integer educationBackgroundId) {
		this.educationBackgroundId = educationBackgroundId;
	}

	public Integer getUserId() {
		return this.userId;
	}

	public void setUserId(Integer userId) {
		this.userId = userId;
	}

	public Timestamp getEntranceDate() {
		return this.entranceDate;
	}

	public void setEntranceDate(Timestamp entranceDate) {
		this.entranceDate = entranceDate;
	}

	public Timestamp getGraduateDate() {
		return this.graduateDate;
	}

	public void setGraduateDate(Timestamp graduateDate) {
		this.graduateDate = graduateDate;
	}

	public String getGraduateSchool() {
		return this.graduateSchool;
	}

	public void setGraduateSchool(String graduateSchool) {
		this.graduateSchool = graduateSchool;
	}

	public String getMajor() {
		return this.major;
	}

	public void setMajor(String major) {
		this.major = major;
	}

	public String getMajorDescribevt() {
		return this.majorDescribevt;
	}

	public void setMajorDescribevt(String majorDescribevt) {
		this.majorDescribevt = majorDescribevt;
	}

	public Integer getEducationlevels() {
		return this.educationlevels;
	}

	public void setEducationlevels(Integer educationlevels) {
		this.educationlevels = educationlevels;
	}

	public String getDegree() {
		return this.degree;
	}

	public void setDegree(String degree) {
		this.degree = degree;
	}

	public Integer getEductionalSystme() {
		return this.eductionalSystme;
	}

	public void setEductionalSystme(Integer eductionalSystme) {
		this.eductionalSystme = eductionalSystme;
	}

	public String getLearnWay() {
		return this.learnWay;
	}

	public void setLearnWay(String learnWay) {
		this.learnWay = learnWay;
	}

	public Timestamp getDegreeGrantDate() {
		return this.degreeGrantDate;
	}

	public void setDegreeGrantDate(Timestamp degreeGrantDate) {
		this.degreeGrantDate = degreeGrantDate;
	}

	public String getDegreeNumber() {
		return this.degreeNumber;
	}

	public void setDegreeNumber(String degreeNumber) {
		this.degreeNumber = degreeNumber;
	}

	public String getDegreeGrantCountry() {
		return this.degreeGrantCountry;
	}

	public void setDegreeGrantCountry(String degreeGrantCountry) {
		this.degreeGrantCountry = degreeGrantCountry;
	}

	public String getEducationResult() {
		return this.educationResult;
	}

	public void setEducationResult(String educationResult) {
		this.educationResult = educationResult;
	}

	public String getEducationBackgroundRemark() {
		return this.educationBackgroundRemark;
	}

	public void setEducationBackgroundRemark(String educationBackgroundRemark) {
		this.educationBackgroundRemark = educationBackgroundRemark;
	}

	public Integer getHighEducation() {
		return this.highEducation;
	}

	public void setHighEducation(Integer highEducation) {
		this.highEducation = highEducation;
	}

	public Integer getFullTimeEduction() {
		return this.fullTimeEduction;
	}

	public void setFullTimeEduction(Integer fullTimeEduction) {
		this.fullTimeEduction = fullTimeEduction;
	}

	public Integer getHighEducationOnJob() {
		return this.highEducationOnJob;
	}

	public void setHighEducationOnJob(Integer highEducationOnJob) {
		this.highEducationOnJob = highEducationOnJob;
	}

	public Integer getOfficeEducation() {
		return this.officeEducation;
	}

	public void setOfficeEducation(Integer officeEducation) {
		this.officeEducation = officeEducation;
	}

}