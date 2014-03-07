package cn.com.model;

import java.util.HashSet;
import java.util.Set;

/**
 * Position entity. @author MyEclipse Persistence Tools
 */

public class Position implements java.io.Serializable {

	// Fields

	private Integer positionId;
	private Department department;
	private String positionName;
	private Set<Course> courses = new HashSet<Course>();
	private Set users = new HashSet(0);

	// Constructors

	/** default constructor */
	public Position() {
	}

	/** full constructor */
	public Position(Department department, String positionName, Set users) {
		this.department = department;
		this.positionName = positionName;
		this.users = users;
	}

	// Property accessors

	public Integer getPositionId() {
		return this.positionId;
	}

	public void setPositionId(Integer positionId) {
		this.positionId = positionId;
	}

	public Department getDepartment() {
		return this.department;
	}

	public void setDepartment(Department department) {
		this.department = department;
	}

	public String getPositionName() {
		return this.positionName;
	}

	public void setPositionName(String positionName) {
		this.positionName = positionName;
	}

	public Set getUsers() {
		return this.users;
	}

	public void setUsers(Set users) {
		this.users = users;
	}

	public Set<Course> getCourses() {
		return courses;
	}

	public void setCourses(Set<Course> courses) {
		this.courses = courses;
	}

}