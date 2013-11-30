package cn.com.model;

import java.util.HashSet;
import java.util.Set;

/**
 * Topic entity. @author MyEclipse Persistence Tools
 */

public class Topic implements java.io.Serializable {

	// Fields

	private Integer topicId;
	private Theme theme;
	private User user;
	private String topicName;
	private String topicImgPath;


	// Constructors

	/** default constructor */
	public Topic() {
	}


	// Property accessors

	public Integer getTopicId() {
		return this.topicId;
	}

	public void setTopicId(Integer topicId) {
		this.topicId = topicId;
	}

	public Theme getTheme() {
		return this.theme;
	}

	public void setTheme(Theme theme) {
		this.theme = theme;
	}

	

	public User getUser() {
		return user;
	}


	public void setUser(User user) {
		this.user = user;
	}


	public String getTopicName() {
		return this.topicName;
	}

	public void setTopicName(String topicName) {
		this.topicName = topicName;
	}

	public String getTopicImgPath() {
		return this.topicImgPath;
	}

	public void setTopicImgPath(String topicImgPath) {
		this.topicImgPath = topicImgPath;
	}


}