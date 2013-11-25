package cn.com.model;

import java.sql.Timestamp;
import java.util.HashSet;
import java.util.Set;

/**
 * Tiezi entity. @author MyEclipse Persistence Tools
 */

public class Tiezi implements java.io.Serializable {

	// Fields

	private Integer tieziId;
	private Topic topic;
	private Integer userId;
	private String tieziContent;
	private String tieziTitle;
	private Timestamp tieziTime;
	private Set tieziaccessories = new HashSet(0);
	private Set discusses = new HashSet(0);

	// Constructors

	/** default constructor */
	public Tiezi() {
	}

	/** full constructor */
	public Tiezi(Topic topic, Integer userId, String tieziContent,
			String tieziTitle, Timestamp tieziTime, Set tieziaccessories,
			Set discusses) {
		this.topic = topic;
		this.userId = userId;
		this.tieziContent = tieziContent;
		this.tieziTitle = tieziTitle;
		this.tieziTime = tieziTime;
		this.tieziaccessories = tieziaccessories;
		this.discusses = discusses;
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

	public Integer getUserId() {
		return this.userId;
	}

	public void setUserId(Integer userId) {
		this.userId = userId;
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

	public Set getTieziaccessories() {
		return this.tieziaccessories;
	}

	public void setTieziaccessories(Set tieziaccessories) {
		this.tieziaccessories = tieziaccessories;
	}

	public Set getDiscusses() {
		return this.discusses;
	}

	public void setDiscusses(Set discusses) {
		this.discusses = discusses;
	}

}