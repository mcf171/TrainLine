package cn.com.model;

import java.sql.Timestamp;
import java.util.HashSet;
import java.util.Set;

/**
 * Classcase entity. @author MyEclipse Persistence Tools
 */

public class Classcase implements java.io.Serializable {

	// Fields

	private Integer classCaseId;
	private Integer personOfHierarchy;
	private Integer personOfSum;
	private Timestamp classStartTime;
	private Timestamp classEndtTime;
	private String classContent;
	private Integer trainHour;
	private String trainChannel;
	private String trainWay;
	private String trainAgreementNunber;
	private String trainType;
	private String trainCategory;
	private String trainReason;
	private String trainAddress;
	private String trainUnit;
	private String trainUnitType;
	private String awarding;
	private String recognition;
	private Integer exitCountry;
	private Float trainCost;
	private Float accreditationFees;
	private Float travelExpense;
	private Float otherCost;
	private String classCaseComment;
	private Trainingclass trainingClass;

	// Constructors

	/** default constructor */
	public Classcase() {
	}

	// Property accessors

	public Integer getClassCaseId() {
		return this.classCaseId;
	}

	public void setClassCaseId(Integer classCaseId) {
		this.classCaseId = classCaseId;
	}

	public Integer getPersonOfHierarchy() {
		return this.personOfHierarchy;
	}

	public void setPersonOfHierarchy(Integer personOfHierarchy) {
		this.personOfHierarchy = personOfHierarchy;
	}

	public Integer getPersonOfSum() {
		return this.personOfSum;
	}

	public void setPersonOfSum(Integer personOfSum) {
		this.personOfSum = personOfSum;
	}

	public Timestamp getClassStartTime() {
		return this.classStartTime;
	}

	public void setClassStartTime(Timestamp classStartTime) {
		this.classStartTime = classStartTime;
	}

	public Timestamp getClassEndtTime() {
		return this.classEndtTime;
	}

	public void setClassEndtTime(Timestamp classEndtTime) {
		this.classEndtTime = classEndtTime;
	}

	public String getClassContent() {
		return this.classContent;
	}

	public void setClassContent(String classContent) {
		this.classContent = classContent;
	}

	public Integer getTrainHour() {
		return this.trainHour;
	}

	public void setTrainHour(Integer trainHour) {
		this.trainHour = trainHour;
	}

	public String getTrainChannel() {
		return this.trainChannel;
	}

	public void setTrainChannel(String trainChannel) {
		this.trainChannel = trainChannel;
	}

	public String getTrainWay() {
		return this.trainWay;
	}

	public void setTrainWay(String trainWay) {
		this.trainWay = trainWay;
	}

	public String getTrainAgreementNunber() {
		return this.trainAgreementNunber;
	}

	public void setTrainAgreementNunber(String trainAgreementNunber) {
		this.trainAgreementNunber = trainAgreementNunber;
	}

	public String getTrainType() {
		return this.trainType;
	}

	public void setTrainType(String trainType) {
		this.trainType = trainType;
	}

	public String getTrainCategory() {
		return this.trainCategory;
	}

	public void setTrainCategory(String trainCategory) {
		this.trainCategory = trainCategory;
	}

	public String getTrainReason() {
		return this.trainReason;
	}

	public void setTrainReason(String trainReason) {
		this.trainReason = trainReason;
	}

	public String getTrainAddress() {
		return this.trainAddress;
	}

	public void setTrainAddress(String trainAddress) {
		this.trainAddress = trainAddress;
	}

	public String getTrainUnit() {
		return this.trainUnit;
	}

	public void setTrainUnit(String trainUnit) {
		this.trainUnit = trainUnit;
	}

	public String getTrainUnitType() {
		return this.trainUnitType;
	}

	public void setTrainUnitType(String trainUnitType) {
		this.trainUnitType = trainUnitType;
	}

	public String getAwarding() {
		return this.awarding;
	}

	public void setAwarding(String awarding) {
		this.awarding = awarding;
	}

	public String getRecognition() {
		return this.recognition;
	}

	public void setRecognition(String recognition) {
		this.recognition = recognition;
	}

	public Integer getExitCountry() {
		return this.exitCountry;
	}

	public void setExitCountry(Integer exitCountry) {
		this.exitCountry = exitCountry;
	}

	public Float getTrainCost() {
		return this.trainCost;
	}

	public void setTrainCost(Float trainCost) {
		this.trainCost = trainCost;
	}

	public Float getAccreditationFees() {
		return this.accreditationFees;
	}

	public void setAccreditationFees(Float accreditationFees) {
		this.accreditationFees = accreditationFees;
	}

	public Float getTravelExpense() {
		return this.travelExpense;
	}

	public void setTravelExpense(Float travelExpense) {
		this.travelExpense = travelExpense;
	}

	public Float getOtherCost() {
		return this.otherCost;
	}

	public void setOtherCost(Float otherCost) {
		this.otherCost = otherCost;
	}

	public String getClassCaseComment() {
		return this.classCaseComment;
	}

	public void setClassCaseComment(String classCaseComment) {
		this.classCaseComment = classCaseComment;
	}

	public Trainingclass getTrainingClass() {
		return trainingClass;
	}

	public void setTrainingClass(Trainingclass trainingClass) {
		this.trainingClass = trainingClass;
	}

	@Override
	public int hashCode() {
		// TODO Auto-generated method stub
		return 1;
	}

	@Override
	public boolean equals(Object obj) {
		// TODO Auto-generated method stub
		boolean flag = false;
		if (obj instanceof  Classcase){
			Classcase item = (Classcase) obj;
			//System.out.println("local id is :"+this.courseId);
			//System.out.println("compare id is : "+ item.getCourseId());
			if(item.getClassCaseId().equals(this.classCaseId)){
				flag = true;
			}
		}
		return flag;
	}
	
}