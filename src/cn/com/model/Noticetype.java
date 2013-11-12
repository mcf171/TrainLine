package cn.com.model;

import java.util.HashSet;
import java.util.Set;

/**
 * Noticetype entity. @author MyEclipse Persistence Tools
 */

public class Noticetype implements java.io.Serializable {

	// Fields

	private Integer noticeTypeId;
	private String noticeTypeName;
	private Set notices = new HashSet(0);

	// Constructors

	/** default constructor */
	public Noticetype() {
	}

	/** full constructor */
	public Noticetype(String noticeTypeName, Set notices) {
		this.noticeTypeName = noticeTypeName;
		this.notices = notices;
	}

	// Property accessors

	public Integer getNoticeTypeId() {
		return this.noticeTypeId;
	}

	public void setNoticeTypeId(Integer noticeTypeId) {
		this.noticeTypeId = noticeTypeId;
	}

	public String getNoticeTypeName() {
		return this.noticeTypeName;
	}

	public void setNoticeTypeName(String noticeTypeName) {
		this.noticeTypeName = noticeTypeName;
	}

	public Set getNotices() {
		return this.notices;
	}

	public void setNotices(Set notices) {
		this.notices = notices;
	}

}