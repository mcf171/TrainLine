package cn.com.model;

import java.util.HashSet;
import java.util.Set;

/**
 * Resource entity. @author MyEclipse Persistence Tools
 */

public class Resource implements java.io.Serializable {

	// Fields

	private Integer resourceId;
	private Integer catalogueId;
	private String resourceName;
	private String resourcePath;
	private Integer resourceType;
	private Set resourseandcatelogues = new HashSet(0);

	// Constructors

	/** default constructor */
	public Resource() {
	}

	/** full constructor */
	

	// Property accessors

	public Integer getResourceId() {
		return this.resourceId;
	}

	public Resource(Integer resourceId, Integer catalogueId,
			String resourceName, String resourcePath, Integer resourceType,
			Set resourseandcatelogues) {
		this.resourceId = resourceId;
		this.catalogueId = catalogueId;
		this.resourceName = resourceName;
		this.resourcePath = resourcePath;
		this.resourceType = resourceType;
		this.resourseandcatelogues = resourseandcatelogues;
	}

	public void setResourceId(Integer resourceId) {
		this.resourceId = resourceId;
	}

	public String getResourceName() {
		return this.resourceName;
	}

	public void setResourceName(String resourceName) {
		this.resourceName = resourceName;
	}

	public String getResourcePath() {
		return this.resourcePath;
	}

	public void setResourcePath(String resourcePath) {
		this.resourcePath = resourcePath;
	}

	public Integer getResourceType() {
		return this.resourceType;
	}

	public void setResourceType(Integer resourceType) {
		this.resourceType = resourceType;
	}

	public Set getResourseandcatelogues() {
		return this.resourseandcatelogues;
	}

	public void setResourseandcatelogues(Set resourseandcatelogues) {
		this.resourseandcatelogues = resourseandcatelogues;
	}

	public Integer getCatalogueId() {
		return catalogueId;
	}

	public void setCatalogueId(Integer catalogueId) {
		this.catalogueId = catalogueId;
	}

}