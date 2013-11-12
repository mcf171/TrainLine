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
	private Set notes = new HashSet(0);
	private Set tcomments = new HashSet(0);
	private Set resourseandcatelogues = new HashSet(0);

	// Constructors

	/** default constructor */
	public Catalogue() {
	}

	/** full constructor */
	public Catalogue(Course course, String catalogueName,
			Integer catalogueNumber, Timestamp uploading,
			String uploadingPerson, Set notes, Set tcomments,
			Set resourseandcatelogues) {
		this.course = course;
		this.catalogueName = catalogueName;
		this.catalogueNumber = catalogueNumber;
		this.uploading = uploading;
		this.uploadingPerson = uploadingPerson;
		this.notes = notes;
		this.tcomments = tcomments;
		this.resourseandcatelogues = resourseandcatelogues;
	}

	// Property accessors

	public Integer getCatalogueId() {
		return this.catalogueId;
	}

	public void setCatalogueId(Integer catalogueId) {
		this.catalogueId = catalogueId;
	}

	public Course getCourse() {
		return this.course;
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

	public Set getResourseandcatelogues() {
		return this.resourseandcatelogues;
	}

	public void setResourseandcatelogues(Set resourseandcatelogues) {
		this.resourseandcatelogues = resourseandcatelogues;
	}

}