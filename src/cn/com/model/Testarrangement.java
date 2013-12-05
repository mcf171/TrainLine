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
	private User user;
	private String testArrangementPlace;
	private Timestamp testStartTime;
	private Timestamp attributestStartTimete51;
	private Integer testSumPerson;
	private Integer testPersonOfHierarchy;
	private Integer passMark;
	private Integer testState;
	//private Set testpapers = new HashSet(0);

	// Constructors

	/** default constructor */
	public Testarrangement() {
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

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}



}