package cn.com.model;

import java.sql.Timestamp;
import java.util.HashSet;
import java.util.Set;

/**
 * Credential entity. @author MyEclipse Persistence Tools
 */

public class Credential implements java.io.Serializable {

	// Fields

	private Integer credentialId;
	private Certificatetype certificatetype;
	private String credentialName;
	private Integer credentialvalidity;
	private Timestamp credentiaStartTime;
	private String credentiaGrantUnit;
	private String credentiaPath;

	// Constructors
	private String credentiaStartTime1;
	/** default constructor */
	public Credential() {
	}

	/** full constructor */
	public Credential(Certificatetype certificatetype, String credentialName,
			Integer credentialvalidity, Timestamp credentiaStartTime,
			String credentiaGrantUnit, String credentiaPath) {
		this.certificatetype = certificatetype;
		this.credentialName = credentialName;
		this.credentialvalidity = credentialvalidity;
		this.credentiaStartTime = credentiaStartTime;
		this.credentiaGrantUnit = credentiaGrantUnit;
		this.credentiaPath = credentiaPath;
	}

	// Property accessors

	public Integer getCredentialId() {
		return this.credentialId;
	}

	public void setCredentialId(Integer credentialId) {
		this.credentialId = credentialId;
	}

	public Certificatetype getCertificatetype() {
		return this.certificatetype;
	}

	public void setCertificatetype(Certificatetype certificatetype) {
		this.certificatetype = certificatetype;
	}

	public String getCredentialName() {
		return this.credentialName;
	}

	public void setCredentialName(String credentialName) {
		this.credentialName = credentialName;
	}

	public Integer getCredentialvalidity() {
		return this.credentialvalidity;
	}

	public void setCredentialvalidity(Integer credentialvalidity) {
		this.credentialvalidity = credentialvalidity;
	}

	public Timestamp getCredentiaStartTime() {
		return this.credentiaStartTime;
	}

	public void setCredentiaStartTime(Timestamp credentiaStartTime) {
		this.credentiaStartTime = credentiaStartTime;
	}

	public String getCredentiaGrantUnit() {
		return this.credentiaGrantUnit;
	}

	public void setCredentiaGrantUnit(String credentiaGrantUnit) {
		this.credentiaGrantUnit = credentiaGrantUnit;
	}

	public String getCredentiaPath() {
		return this.credentiaPath;
	}

	public void setCredentiaPath(String credentiaPath) {
		this.credentiaPath = credentiaPath;
	}

	public String getCredentiaStartTime1() {
		return credentiaStartTime1;
	}

	public void setCredentiaStartTime1(String credentiaStartTime1) {
		this.credentiaStartTime1 = credentiaStartTime1;
	}
}