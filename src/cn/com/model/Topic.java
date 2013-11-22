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
	private Integer userId;
	private String topicName;
	private String topicImgPath;
	private Set posts = new HashSet(0);
	private Set tiezis = new HashSet(0);

	// Constructors

	/** default constructor */
	public Topic() {
	}

	/** full constructor */
	public Topic(Theme theme, Integer userId, String topicName,
			String topicImgPath, Set posts, Set tiezis) {
		this.theme = theme;
		this.userId = userId;
		this.topicName = topicName;
		this.topicImgPath = topicImgPath;
		this.posts = posts;
		this.tiezis = tiezis;
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

	public Integer getUserId() {
		return this.userId;
	}

	public void setUserId(Integer userId) {
		this.userId = userId;
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

	public Set getPosts() {
		return this.posts;
	}

	public void setPosts(Set posts) {
		this.posts = posts;
	}

	public Set getTiezis() {
		return this.tiezis;
	}

	public void setTiezis(Set tiezis) {
		this.tiezis = tiezis;
	}

}