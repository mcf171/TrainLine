package cn.com.model;

import java.sql.Timestamp;

/**
 * Post entity. @author MyEclipse Persistence Tools
 */

public class Post implements java.io.Serializable {

	// Fields

	private Integer postId;
	private Topic topic;
	private Integer userId;
	private String postTitle;
	private Timestamp postTime;

	// Constructors

	/** default constructor */
	public Post() {
	}

	/** full constructor */
	public Post(Topic topic, Integer userId, String postTitle,
			Timestamp postTime) {
		this.topic = topic;
		this.userId = userId;
		this.postTitle = postTitle;
		this.postTime = postTime;
	}

	// Property accessors

	public Integer getPostId() {
		return this.postId;
	}

	public void setPostId(Integer postId) {
		this.postId = postId;
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

	public String getPostTitle() {
		return this.postTitle;
	}

	public void setPostTitle(String postTitle) {
		this.postTitle = postTitle;
	}

	public Timestamp getPostTime() {
		return this.postTime;
	}

	public void setPostTime(Timestamp postTime) {
		this.postTime = postTime;
	}

}