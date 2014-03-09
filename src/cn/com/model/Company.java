package cn.com.model;

import java.util.List;

/**
 * Company entity. @author MyEclipse Persistence Tools
 */

public class Company implements java.io.Serializable {

	// Fields

	private Integer companyId;
	private String companyName;
	private Integer companystatus;
	private String companyIntro;
	private String companyShortName;

	// Constructors

	/** default constructor */
	public Company() {
	}

	/** full constructor */
	public Company(String companyName, Integer companystatus,
			String companyIntro, String companyShortName) {
		this.companyName = companyName;
		this.companystatus = companystatus;
		this.companyIntro = companyIntro;
		this.companyShortName = companyShortName;
	}

	// Property accessors

	public Integer getCompanyId() {
		return this.companyId;
	}

	public void setCompanyId(Integer companyId) {
		this.companyId = companyId;
	}

	public String getCompanyName() {
		return this.companyName;
	}

	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}

	public Integer getCompanystatus() {
		return this.companystatus;
	}

	public void setCompanystatus(Integer companystatus) {
		this.companystatus = companystatus;
	}

	public String getCompanyIntro() {
		return this.companyIntro;
	}

	public void setCompanyIntro(String companyIntro) {
		this.companyIntro = companyIntro;
	}

	public String getCompanyShortName() {
		return this.companyShortName;
	}

	public void setCompanyShortName(String companyShortName) {
		this.companyShortName = companyShortName;
	}


}