package cn.com.model;

import java.sql.Timestamp;

/**
 * Notice entity. @author MyEclipse Persistence Tools
 */

public class Notice implements java.io.Serializable {

	// Fields

	private Integer noticeId;
	private Noticetype noticetype;
	private String noticeTitle;
	private Timestamp noticeTime;
	private String noticeAuthor;
	private Integer weight;
	private String noticeContent;

	// Constructors

	/** default constructor */
	public Notice() {
	}

	/** full constructor */
	public Notice(Noticetype noticetype, String noticeTitle,
			Timestamp noticeTime, String noticeAuthor, Integer weight,
			String noticeContent) {
		this.noticetype = noticetype;
		this.noticeTitle = noticeTitle;
		this.noticeTime = noticeTime;
		this.noticeAuthor = noticeAuthor;
		this.weight = weight;
		this.noticeContent = noticeContent;
	}

	// Property accessors

	public Integer getNoticeId() {
		return this.noticeId;
	}

	public void setNoticeId(Integer noticeId) {
		this.noticeId = noticeId;
	}

	public Noticetype getNoticetype() {
		return this.noticetype;
	}

	public void setNoticetype(Noticetype noticetype) {
		this.noticetype = noticetype;
	}

	public String getNoticeTitle() {
		return this.noticeTitle;
	}

	public void setNoticeTitle(String noticeTitle) {
		this.noticeTitle = noticeTitle;
	}

	public Timestamp getNoticeTime() {
		return this.noticeTime;
	}

	public void setNoticeTime(Timestamp noticeTime) {
		this.noticeTime = noticeTime;
	}

	public String getNoticeAuthor() {
		return this.noticeAuthor;
	}

	public void setNoticeAuthor(String noticeAuthor) {
		this.noticeAuthor = noticeAuthor;
	}

	public Integer getWeight() {
		return this.weight;
	}

	public void setWeight(Integer weight) {
		this.weight = weight;
	}

	public String getNoticeContent() {
		return this.noticeContent;
	}

	public void setNoticeContent(String noticeContent) {
		this.noticeContent = noticeContent;
	}

}