package cn.com.model;

import java.sql.Timestamp;

/**
 * Announcement entity. @author MyEclipse Persistence Tools
 */

public class Announcement implements java.io.Serializable {

	// Fields

	private Integer announcementId;
	private String announcementName;
	private String announcementContent;
	private String announcementPerson;
	private Timestamp announcementTime;
	private String announcementType;

	// Constructors

	/** default constructor */
	public Announcement() {
	}

	/** full constructor */
	public Announcement(String announcementName, String announcementContent,
			String announcementPerson, Timestamp announcementTime,
			String announcementType) {
		this.announcementName = announcementName;
		this.announcementContent = announcementContent;
		this.announcementPerson = announcementPerson;
		this.announcementTime = announcementTime;
		this.announcementType = announcementType;
	}

	// Property accessors

	public Integer getAnnouncementId() {
		return this.announcementId;
	}

	public void setAnnouncementId(Integer announcementId) {
		this.announcementId = announcementId;
	}

	public String getAnnouncementName() {
		return this.announcementName;
	}

	public void setAnnouncementName(String announcementName) {
		this.announcementName = announcementName;
	}

	public String getAnnouncementContent() {
		return this.announcementContent;
	}

	public void setAnnouncementContent(String announcementContent) {
		this.announcementContent = announcementContent;
	}

	public String getAnnouncementPerson() {
		return this.announcementPerson;
	}

	public void setAnnouncementPerson(String announcementPerson) {
		this.announcementPerson = announcementPerson;
	}

	public Timestamp getAnnouncementTime() {
		return this.announcementTime;
	}

	public void setAnnouncementTime(Timestamp announcementTime) {
		this.announcementTime = announcementTime;
	}

	public String getAnnouncementType() {
		return this.announcementType;
	}

	public void setAnnouncementType(String announcementType) {
		this.announcementType = announcementType;
	}

}