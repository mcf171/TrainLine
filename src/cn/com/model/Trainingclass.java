package cn.com.model;

import java.util.HashSet;
import java.util.Set;

/**
 * Trainingclass entity. @author MyEclipse Persistence Tools
 */

public class Trainingclass implements java.io.Serializable {

	// Fields

	private Integer trainingClassId;
	//private Classcase classcase;
	private Credential credential;
	private String trainingClassName;
	private Integer trainingClassStatus;
	private Set<Course> courses = new HashSet<Course>(0);
	private Set<Classcase> classCases = new HashSet<Classcase>(0);

	// Constructors

	/** default constructor */
	public Trainingclass() {
	}

	/** full constructor */


	// Property accessors

	public Integer getTrainingClassId() {
		return this.trainingClassId;
	}


	public Credential getCredential() {
		return credential;
	}

	public void setCredential(Credential credential) {
		this.credential = credential;
	}

	public void setTrainingClassId(Integer trainingClassId) {
		this.trainingClassId = trainingClassId;
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

	public Set<Course> getCourses() {
		return courses;
	}

	public void setCourses(Set<Course> courses) {
		this.courses = courses;
	}

	public Set<Classcase> getClassCases() {
		return classCases;
	}

	public void setClassCases(Set<Classcase> classCases) {
		this.classCases = classCases;
	}




}