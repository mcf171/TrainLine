package cn.com.model;

import java.sql.Timestamp;
import java.util.HashSet;
import java.util.Set;

/**
 * Testarrangement entity. @author MyEclipse Persistence Tools
 */

public class Testarrangement implements java.io.Serializable {

	// Fields

	private Integer testArrangementId;
	private Testpaper testpaper;
	private Trainingclass trainingclass;
	private Integer userId;
	private String testArrangementPlace;
	private Timestamp testStartTime;
	private Timestamp attributestStartTimete51;
	private Integer testSumPerson;
	private Integer testPersonOfHierarchy;
	private Integer passMark;
	private Integer testState;
	private Set testpapers = new HashSet(0);

	// Constructors

	/** default constructor */
	public Testarrangement() {
	}

	/** full constructor */
	public Testarrangement(Testpaper testpaper, Trainingclass trainingclass,
			Integer userId, String testArrangementPlace,
			Timestamp testStartTime, Timestamp attributestStartTimete51,
			Integer testSumPerson, Integer testPersonOfHierarchy,
			Integer passMark, Integer testState, Set testpapers) {
		this.testpaper = testpaper;
		this.trainingclass = trainingclass;
		this.userId = userId;
		this.testArrangementPlace = testArrangementPlace;
		this.testStartTime = testStartTime;
		this.attributestStartTimete51 = attributestStartTimete51;
		this.testSumPerson = testSumPerson;
		this.testPersonOfHierarchy = testPersonOfHierarchy;
		this.passMark = passMark;
		this.testState = testState;
		this.testpapers = testpapers;
	}

	// Property accessors

	public Integer getTestArrangementId() {
		return this.testArrangementId;
	}

	public void setTestArrangementId(Integer testArrangementId) {
		this.testArrangementId = testArrangementId;
	}

	public Testpaper getTestpaper() {
		return this.testpaper;
	}

	public void setTestpaper(Testpaper testpaper) {
		this.testpaper = testpaper;
	}

	public Trainingclass getTrainingclass() {
		return this.trainingclass;
	}

	public void setTrainingclass(Trainingclass trainingclass) {
		this.trainingclass = trainingclass;
	}

	public Integer getUserId() {
		return this.userId;
	}

	public void setUserId(Integer userId) {
		this.userId = userId;
	}

	public String getTestArrangementPlace() {
		return this.testArrangementPlace;
	}

	public void setTestArrangementPlace(String testArrangementPlace) {
		this.testArrangementPlace = testArrangementPlace;
	}

	public Timestamp getTestStartTime() {
		return this.testStartTime;
	}

	public void setTestStartTime(Timestamp testStartTime) {
		this.testStartTime = testStartTime;
	}

	public Timestamp getAttributestStartTimete51() {
		return this.attributestStartTimete51;
	}

	public void setAttributestStartTimete51(Timestamp attributestStartTimete51) {
		this.attributestStartTimete51 = attributestStartTimete51;
	}

	public Integer getTestSumPerson() {
		return this.testSumPerson;
	}

	public void setTestSumPerson(Integer testSumPerson) {
		this.testSumPerson = testSumPerson;
	}

	public Integer getTestPersonOfHierarchy() {
		return this.testPersonOfHierarchy;
	}

	public void setTestPersonOfHierarchy(Integer testPersonOfHierarchy) {
		this.testPersonOfHierarchy = testPersonOfHierarchy;
	}

	public Integer getPassMark() {
		return this.passMark;
	}

	public void setPassMark(Integer passMark) {
		this.passMark = passMark;
	}

	public Integer getTestState() {
		return this.testState;
	}

	public void setTestState(Integer testState) {
		this.testState = testState;
	}

	public Set getTestpapers() {
		return this.testpapers;
	}

	public void setTestpapers(Set testpapers) {
		this.testpapers = testpapers;
	}

}