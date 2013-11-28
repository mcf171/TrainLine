package cn.com.model;

import java.util.HashSet;
import java.util.Set;

/**
 * Department entity. @author MyEclipse Persistence Tools
 */

public class Department implements java.io.Serializable {

	// Fields

	private Integer departmentId;
	private Company company;
	private String departmentName;
	private Integer departmentstatus;
	private String departmentShortName;
	private String businessUnits;
	private Integer departmentCoding;
	private String country;
	private Set positions = new HashSet(0);

	// Constructors

	/** default constructor */
	public Department() {
	}

	/** full constructor */
	public Department(Company company, String departmentName,
			Integer departmentstatus, String departmentShortName,
			String businessUnits, Integer departmentCoding, String country,
			Set positions) {
		this.company = company;
		this.departmentName = departmentName;
		this.departmentstatus = departmentstatus;
		this.departmentShortName = departmentShortName;
		this.businessUnits = businessUnits;
		this.departmentCoding = departmentCoding;
		this.country = country;
		this.positions = positions;
	}

	// Property accessors

	public Integer getDepartmentId() {
		return this.departmentId;
	}

	public void setDepartmentId(Integer departmentId) {
		this.departmentId = departmentId;
	}

	public Company getCompany() {
		return this.company;
	}

	public void setCompany(Company company) {
		this.company = company;
	}

	public String getDepartmentName() {
		return this.departmentName;
	}

	public void setDepartmentName(String departmentName) {
		this.departmentName = departmentName;
	}

	public Integer getDepartmentstatus() {
		return this.departmentstatus;
	}

	public void setDepartmentstatus(Integer departmentstatus) {
		this.departmentstatus = departmentstatus;
	}

	public String getDepartmentShortName() {
		return this.departmentShortName;
	}

	public void setDepartmentShortName(String departmentShortName) {
		this.departmentShortName = departmentShortName;
	}

	public String getBusinessUnits() {
		return this.businessUnits;
	}

	public void setBusinessUnits(String businessUnits) {
		this.businessUnits = businessUnits;
	}

	public Integer getDepartmentCoding() {
		return this.departmentCoding;
	}

	public void setDepartmentCoding(Integer departmentCoding) {
		this.departmentCoding = departmentCoding;
	}

	public String getCountry() {
		return this.country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public Set getPositions() {
		return this.positions;
	}

	public void setPositions(Set positions) {
		this.positions = positions;
	}

}