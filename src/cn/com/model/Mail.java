package cn.com.model;

import java.sql.Timestamp;
import java.util.HashSet;
import java.util.Set;

/**
 * Mail entity. @author MyEclipse Persistence Tools
 */

public class Mail implements java.io.Serializable {

	// Fields

	private Integer mailId;
	private String mailContent;
	private Timestamp mailTime;
	private String mailTitle;
	private User sendUser;
	private User reciveUser;
	private Integer mailState;

	// Constructors

	/** default constructor */
	public Mail() {
	}



	// Property accessors

	public Integer getMailId() {
		return this.mailId;
	}

	public void setMailId(Integer mailId) {
		this.mailId = mailId;
	}

	public String getMailContent() {
		return this.mailContent;
	}

	public void setMailContent(String mailContent) {
		this.mailContent = mailContent;
	}

	public Timestamp getMailTime() {
		return this.mailTime;
	}

	public void setMailTime(Timestamp mailTime) {
		this.mailTime = mailTime;
	}

	public Integer getMailState() {
		return this.mailState;
	}

	public void setMailState(Integer mailState) {
		this.mailState = mailState;
	}



	public String getMailTitle() {
		return mailTitle;
	}



	public void setMailTitle(String mailTitle) {
		this.mailTitle = mailTitle;
	}



	public User getSendUser() {
		return sendUser;
	}



	public void setSendUser(User sendUser) {
		this.sendUser = sendUser;
	}



	public User getReciveUser() {
		return reciveUser;
	}



	public void setReciveUser(User reciveUser) {
		this.reciveUser = reciveUser;
	}

	

}