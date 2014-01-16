package cn.com.model;

import java.sql.Timestamp;
import java.util.HashSet;
import java.util.Set;

/**
 * Catalogue entity. @author MyEclipse Persistence Tools
 */

public class Catalogue implements java.io.Serializable {

	// Fields

	private Integer catalogueId;
	private Integer courseId;
	private String catalogueName;
	private Integer catalogueNumber;
	private Timestamp uploading;
	private String uploadingPerson;
	private Integer cataloguaWeight;
	private Set<Resource> resource = new HashSet<Resource>(0);
	private Set notes = new HashSet(0);
	private Set tcomments = new HashSet(0);
	

	// Constructors

	/** default constructor */
	public Catalogue() {
	}

	/** full constructor */

	// Property accessors

	public Integer getCatalogueId() {
		return this.catalogueId;
	}

	

	public void setCatalogueId(Integer catalogueId) {
		this.catalogueId = catalogueId;
	}


	public Integer getCourseId() {
		return courseId;
	}

	public void setCourseId(Integer courseId) {
		this.courseId = courseId;
	}

	public String getCatalogueName() {
		return this.catalogueName;
	}

	public void setCatalogueName(String catalogueName) {
		this.catalogueName = catalogueName;
	}

	public Integer getCatalogueNumber() {
		return this.catalogueNumber;
	}

	public void setCatalogueNumber(Integer catalogueNumber) {
		this.catalogueNumber = catalogueNumber;
	}

	public Timestamp getUploading() {
		return this.uploading;
	}

	public void setUploading(Timestamp uploading) {
		this.uploading = uploading;
	}

	public String getUploadingPerson() {
		return this.uploadingPerson;
	}

	public void setUploadingPerson(String uploadingPerson) {
		this.uploadingPerson = uploadingPerson;
	}

	public Set getNotes() {
		return this.notes;
	}

	public void setNotes(Set notes) {
		this.notes = notes;
	}

	public Set getTcomments() {
		return this.tcomments;
	}

	public void setTcomments(Set tcomments) {
		this.tcomments = tcomments;
	}

	public Set<Resource> getResource() {
		return resource;
	}

	public void setResource(Set resource) {
		this.resource = resource;
	}

	public Integer getCataloguaWeight() {
		return cataloguaWeight;
	}

	public void setCataloguaWeight(Integer cataloguaWeight) {
		this.cataloguaWeight = cataloguaWeight;
	}
	
}