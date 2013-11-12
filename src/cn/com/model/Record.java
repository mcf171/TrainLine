package cn.com.model;

import java.sql.Timestamp;

/**
 * Record entity. @author MyEclipse Persistence Tools
 */

public class Record implements java.io.Serializable {

	// Fields

	private Integer recordId;
	private Integer userId;
	private Timestamp onLineTime;
	private Timestamp downLineTime;
	private String ipaddress;

	// Constructors

	/** default constructor */
	public Record() {
	}

	/** full constructor */
	public Record(Integer userId, Timestamp onLineTime, Timestamp downLineTime,
			String ipaddress) {
		this.userId = userId;
		this.onLineTime = onLineTime;
		this.downLineTime = downLineTime;
		this.ipaddress = ipaddress;
	}

	// Property accessors

	public Integer getRecordId() {
		return this.recordId;
	}

	public void setRecordId(Integer recordId) {
		this.recordId = recordId;
	}

	public Integer getUserId() {
		return this.userId;
	}

	public void setUserId(Integer userId) {
		this.userId = userId;
	}

	public Timestamp getOnLineTime() {
		return this.onLineTime;
	}

	public void setOnLineTime(Timestamp onLineTime) {
		this.onLineTime = onLineTime;
	}

	public Timestamp getDownLineTime() {
		return this.downLineTime;
	}

	public void setDownLineTime(Timestamp downLineTime) {
		this.downLineTime = downLineTime;
	}

	public String getIpaddress() {
		return this.ipaddress;
	}

	public void setIpaddress(String ipaddress) {
		this.ipaddress = ipaddress;
	}

}