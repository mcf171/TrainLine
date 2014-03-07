package cn.com.model;

import java.sql.Timestamp;
import java.util.HashSet;
import java.util.Set;

/**
 * Testarrangement entity. @author MyEclipse Persistence Tools
 */

public class TestGrade implements java.io.Serializable {

	// Fields
	private Integer testGradeId;
	private Testarrangement testArrangement;
	private User user;
	private double grade;
	public Integer getTestGradeId() {
		return testGradeId;
	}
	public void setTestGradeId(Integer testGradeId) {
		this.testGradeId = testGradeId;
	}
	public Testarrangement getTestArrangement() {
		return testArrangement;
	}
	public void setTestArrangement(Testarrangement testArrangement) {
		this.testArrangement = testArrangement;
	}
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	public double getGrade() {
		return grade;
	}
	public void setGrade(double grade) {
		this.grade = grade;
	}
	
	

}