package cn.com.model;

import java.util.HashSet;
import java.util.Set;

/**
 * Certificatetype entity. @author MyEclipse Persistence Tools
 */

public class Certificatetype implements java.io.Serializable {

	// Fields

	private Integer certificateTypeId;
	private String certificateTypeName;
	private Set credentials = new HashSet(0);

	// Constructors

	/** default constructor */
	public Certificatetype() {
	}

	/** full constructor */
	public Certificatetype(String certificateTypeName, Set credentials) {
		this.certificateTypeName = certificateTypeName;
		this.credentials = credentials;
	}

	// Property accessors

	public Integer getCertificateTypeId() {
		return this.certificateTypeId;
	}

	public void setCertificateTypeId(Integer certificateTypeId) {
		this.certificateTypeId = certificateTypeId;
	}

	public String getCertificateTypeName() {
		return this.certificateTypeName;
	}

	public void setCertificateTypeName(String certificateTypeName) {
		this.certificateTypeName = certificateTypeName;
	}

	public Set getCredentials() {
		return this.credentials;
	}

	public void setCredentials(Set credentials) {
		this.credentials = credentials;
	}

}