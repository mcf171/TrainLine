package cn.com.model;

import java.sql.Timestamp;

/**
 * Personalinformation entity. @author MyEclipse Persistence Tools
 */

public class Personalinformation implements java.io.Serializable {

	// Fields

	private Integer personalInformationId;
	private Integer userId;
	private String realName;
	private String picturePath;
	private String idnumber;
	private String sex;
	private Timestamp birthdate;
	private Integer age;
	private String nationality;
	private Timestamp workStartTime;
	private String nativePlace;
	private String birthplace;
	private String domicilePlace;
	private Integer marriageStatus;
	private String politicsStatus;
	private Timestamp enterChinaRailwayGroupTime;
	private Timestamp enterUnit;
	private Integer workingAge;
	private String homeAddress;
	private Integer telPhone;
	private Integer qq;
	private String email;
	private Integer personType;
	private String nowWorkPosition;
	private Timestamp grantPositionTime;
	private String performWork;
	private String performWorkPlate;
	private String workDuty;
	private String personnelReductionPath;
	private Integer team;

	// Constructors

	/** default constructor */
	public Personalinformation() {
	}

	/** full constructor */
	public Personalinformation(Integer userId, String realName,
			String picturePath, String idnumber, String sex,
			Timestamp birthdate, Integer age, String nationality,
			Timestamp workStartTime, String nativePlace, String birthplace,
			String domicilePlace, Integer marriageStatus,
			String politicsStatus, Timestamp enterChinaRailwayGroupTime,
			Timestamp enterUnit, Integer workingAge, String homeAddress,
			Integer telPhone, Integer qq, String email, Integer personType,
			String nowWorkPosition, Timestamp grantPositionTime,
			String performWork, String performWorkPlate, String workDuty,
			String personnelReductionPath, Integer team) {
		this.userId = userId;
		this.realName = realName;
		this.picturePath = picturePath;
		this.idnumber = idnumber;
		this.sex = sex;
		this.birthdate = birthdate;
		this.age = age;
		this.nationality = nationality;
		this.workStartTime = workStartTime;
		this.nativePlace = nativePlace;
		this.birthplace = birthplace;
		this.domicilePlace = domicilePlace;
		this.marriageStatus = marriageStatus;
		this.politicsStatus = politicsStatus;
		this.enterChinaRailwayGroupTime = enterChinaRailwayGroupTime;
		this.enterUnit = enterUnit;
		this.workingAge = workingAge;
		this.homeAddress = homeAddress;
		this.telPhone = telPhone;
		this.qq = qq;
		this.email = email;
		this.personType = personType;
		this.nowWorkPosition = nowWorkPosition;
		this.grantPositionTime = grantPositionTime;
		this.performWork = performWork;
		this.performWorkPlate = performWorkPlate;
		this.workDuty = workDuty;
		this.personnelReductionPath = personnelReductionPath;
		this.team = team;
	}

	// Property accessors

	public Integer getPersonalInformationId() {
		return this.personalInformationId;
	}

	public void setPersonalInformationId(Integer personalInformationId) {
		this.personalInformationId = personalInformationId;
	}

	public Integer getUserId() {
		return this.userId;
	}

	public void setUserId(Integer userId) {
		this.userId = userId;
	}

	public String getRealName() {
		return this.realName;
	}

	public void setRealName(String realName) {
		this.realName = realName;
	}

	public String getPicturePath() {
		return this.picturePath;
	}

	public void setPicturePath(String picturePath) {
		this.picturePath = picturePath;
	}

	public String getIdnumber() {
		return this.idnumber;
	}

	public void setIdnumber(String idnumber) {
		this.idnumber = idnumber;
	}

	public String getSex() {
		return this.sex;
	}

	public void setSex(String sex) {
		this.sex = sex;
	}

	public Timestamp getBirthdate() {
		return this.birthdate;
	}

	public void setBirthdate(Timestamp birthdate) {
		this.birthdate = birthdate;
	}

	public Integer getAge() {
		return this.age;
	}

	public void setAge(Integer age) {
		this.age = age;
	}

	public String getNationality() {
		return this.nationality;
	}

	public void setNationality(String nationality) {
		this.nationality = nationality;
	}

	public Timestamp getWorkStartTime() {
		return this.workStartTime;
	}

	public void setWorkStartTime(Timestamp workStartTime) {
		this.workStartTime = workStartTime;
	}

	public String getNativePlace() {
		return this.nativePlace;
	}

	public void setNativePlace(String nativePlace) {
		this.nativePlace = nativePlace;
	}

	public String getBirthplace() {
		return this.birthplace;
	}

	public void setBirthplace(String birthplace) {
		this.birthplace = birthplace;
	}

	public String getDomicilePlace() {
		return this.domicilePlace;
	}

	public void setDomicilePlace(String domicilePlace) {
		this.domicilePlace = domicilePlace;
	}

	public Integer getMarriageStatus() {
		return this.marriageStatus;
	}

	public void setMarriageStatus(Integer marriageStatus) {
		this.marriageStatus = marriageStatus;
	}

	public String getPoliticsStatus() {
		return this.politicsStatus;
	}

	public void setPoliticsStatus(String politicsStatus) {
		this.politicsStatus = politicsStatus;
	}

	public Timestamp getEnterChinaRailwayGroupTime() {
		return this.enterChinaRailwayGroupTime;
	}

	public void setEnterChinaRailwayGroupTime(
			Timestamp enterChinaRailwayGroupTime) {
		this.enterChinaRailwayGroupTime = enterChinaRailwayGroupTime;
	}

	public Timestamp getEnterUnit() {
		return this.enterUnit;
	}

	public void setEnterUnit(Timestamp enterUnit) {
		this.enterUnit = enterUnit;
	}

	public Integer getWorkingAge() {
		return this.workingAge;
	}

	public void setWorkingAge(Integer workingAge) {
		this.workingAge = workingAge;
	}

	public String getHomeAddress() {
		return this.homeAddress;
	}

	public void setHomeAddress(String homeAddress) {
		this.homeAddress = homeAddress;
	}

	public Integer getTelPhone() {
		return this.telPhone;
	}

	public void setTelPhone(Integer telPhone) {
		this.telPhone = telPhone;
	}

	public Integer getQq() {
		return this.qq;
	}

	public void setQq(Integer qq) {
		this.qq = qq;
	}

	public String getEmail() {
		return this.email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Integer getPersonType() {
		return this.personType;
	}

	public void setPersonType(Integer personType) {
		this.personType = personType;
	}

	public String getNowWorkPosition() {
		return this.nowWorkPosition;
	}

	public void setNowWorkPosition(String nowWorkPosition) {
		this.nowWorkPosition = nowWorkPosition;
	}

	public Timestamp getGrantPositionTime() {
		return this.grantPositionTime;
	}

	public void setGrantPositionTime(Timestamp grantPositionTime) {
		this.grantPositionTime = grantPositionTime;
	}

	public String getPerformWork() {
		return this.performWork;
	}

	public void setPerformWork(String performWork) {
		this.performWork = performWork;
	}

	public String getPerformWorkPlate() {
		return this.performWorkPlate;
	}

	public void setPerformWorkPlate(String performWorkPlate) {
		this.performWorkPlate = performWorkPlate;
	}

	public String getWorkDuty() {
		return this.workDuty;
	}

	public void setWorkDuty(String workDuty) {
		this.workDuty = workDuty;
	}

	public String getPersonnelReductionPath() {
		return this.personnelReductionPath;
	}

	public void setPersonnelReductionPath(String personnelReductionPath) {
		this.personnelReductionPath = personnelReductionPath;
	}

	public Integer getTeam() {
		return this.team;
	}

	public void setTeam(Integer team) {
		this.team = team;
	}

}