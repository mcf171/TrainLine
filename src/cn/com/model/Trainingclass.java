package cn.com.model;

import java.util.HashSet;
import java.util.Set;

/**
 * Trainingclass entity. @author MyEclipse Persistence Tools
 */

public class Trainingclass implements java.io.Serializable {

	// Fields

	private Integer trainingClassId;
	private Classcase classcase;
	private Credential credential;
	private String trainingClassName;
	private Integer trainingClassStatus;
	private Set testarrangements = new HashSet(0);
	private Set classcases = new HashSet(0);
	private Set classandusers = new HashSet(0);
	private Set classandcourses = new HashSet(0);

	// Constructors

	/** default constructor */
	public Trainingclass() {
	}

	/** full constructor */
	public Trainingclass(Classcase classcase, Credential credential,
			String trainingClassName, Integer trainingClassStatus,
			Set testarrangements, Set classcases, Set classandusers,
			Set classandcourses) {
		this.classcase = classcase;
		this.credential = credential;
		this.trainingClassName = trainingClassName;
		this.trainingClassStatus = trainingClassStatus;
		this.testarrangements = testarrangements;
		this.classcases = classcases;
		this.classandusers = classandusers;
		this.classandcourses = classandcourses;
	}

	// Property accessors

	public Integer getTrainingClassId() {
		return this.trainingClassId;
	}

	public void setTrainingClassId(Integer trainingClassId) {
		this.trainingClassId = trainingClassId;
	}

	public Classcase getClasscase() {
		return this.classcase;
	}

	public void setClasscase(Classcase classcase) {
		this.classcase = classcase;
	}

	public Credential getCredential() {
		return this.credential;
	}

	public void setCredential(Credential credential) {
		this.credential = credential;
	}

	public String getTrainingClassName() {
		return this.trainingClassName;
	}

	public void setTrainingClassName(String trainingClassName) {
		this.trainingClassName = trainingClassName;
	}

	public Integer getTrainingClassStatus() {
		return this.trainingClassStatus;
	}

	public void setTrainingClassStatus(Integer trainingClassStatus) {
		this.trainingClassStatus = trainingClassStatus;
	}

	public Set getTestarrangements() {
		return this.testarrangements;
	}

	public void setTestarrangements(Set testarrangements) {
		this.testarrangements = testarrangements;
	}

	public Set getClasscases() {
		return this.classcases;
	}

	public void setClasscases(Set classcases) {
		this.classcases = classcases;
	}

	public Set getClassandusers() {
		return this.classandusers;
	}

	public void setClassandusers(Set classandusers) {
		this.classandusers = classandusers;
	}

	public Set getClassandcourses() {
		return this.classandcourses;
	}

	public void setClassandcourses(Set classandcourses) {
		this.classandcourses = classandcourses;
	}

}