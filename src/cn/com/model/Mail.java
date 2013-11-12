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
	private Integer mailState;
	private Set mailaccessories = new HashSet(0);
	private Set userandmails = new HashSet(0);

	// Constructors

	/** default constructor */
	public Mail() {
	}

	/** full constructor */
	public Mail(String mailContent, Timestamp mailTime, Integer mailState,
			Set mailaccessories, Set userandmails) {
		this.mailContent = mailContent;
		this.mailTime = mailTime;
		this.mailState = mailState;
		this.mailaccessories = mailaccessories;
		this.userandmails = userandmails;
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

	public Set getMailaccessories() {
		return this.mailaccessories;
	}

	public void setMailaccessories(Set mailaccessories) {
		this.mailaccessories = mailaccessories;
	}

	public Set getUserandmails() {
		return this.userandmails;
	}

	public void setUserandmails(Set userandmails) {
		this.userandmails = userandmails;
	}

}