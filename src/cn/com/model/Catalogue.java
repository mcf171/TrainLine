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
	private Course course;
	private String catalogueName;
	private Integer catalogueNumber;
	private Timestamp uploading;
	private String uploadingPerson;
	private Integer cataloguaWeight;
	private Note note;
	private Set<Resource> resource = new HashSet<Resource>(0);
	

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



	public Course getCourse() {
		return course;
	}

	public void setCourse(Course course) {
		this.course = course;
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

	public Note getNote() {
		return note;
	}

	public void setNote(Note note) {
		this.note = note;
	}

}