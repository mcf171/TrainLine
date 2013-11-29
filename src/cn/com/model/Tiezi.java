package cn.com.model;

import java.sql.Timestamp;

/**
 * Tiezi entity. @author MyEclipse Persistence Tools
 */

public class Tiezi implements java.io.Serializable {

	// Fields

	private Integer tieziId;
	private Topic topic;
	private User user;
	private String tieziContent;
	private String tieziTitle;
	private Timestamp tieziTime;


	// Constructors

	/** default constructor */
	public Tiezi() {
	}


	// Property accessors

	public Integer getTieziId() {
		return this.tieziId;
	}

	public void setTieziId(Integer tieziId) {
		this.tieziId = tieziId;
	}

	public Topic getTopic() {
		return this.topic;
	}

	public void setTopic(Topic topic) {
		this.topic = topic;
	}

	

	public User getUser() {
		return user;
	}


	public void setUser(User user) {
		this.user = user;
	}


	public String getTieziContent() {
		return this.tieziContent;
	}

	public void setTieziContent(String tieziContent) {
		this.tieziContent = tieziContent;
	}

	public String getTieziTitle() {
		return this.tieziTitle;
	}

	public void setTieziTitle(String tieziTitle) {
		this.tieziTitle = tieziTitle;
	}

	public Timestamp getTieziTime() {
		return this.tieziTime;
	}

	public void setTieziTime(Timestamp tieziTime) {
		this.tieziTime = tieziTime;
	}

}