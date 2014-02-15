package cn.com.model;

import java.sql.Timestamp;

public class Message implements java.io.Serializable{


	// Fields

	private Integer messageId;
	private String messageTitle;
	private Timestamp messageTime;
	private User user;
	private String url;
	private Integer weight;

	// Constructors
	public Message() {
	}

	public Integer getMessageId() {
		return messageId;
	}

	public void setMessageId(Integer messageId) {
		this.messageId = messageId;
	}

	public String getMessageTitle() {
		return messageTitle;
	}

	public void setMessageTitle(String messageTitle) {
		this.messageTitle = messageTitle;
	}

	public Timestamp getMessageTime() {
		return messageTime;
	}

	public void setMessageTime(Timestamp messageTime) {
		this.messageTime = messageTime;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public Integer getWeight() {
		return weight;
	}

	public void setWeight(Integer weight) {
		this.weight = weight;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	@Override
	public int hashCode() {
		// TODO Auto-generated method stub
		return 1;
	}

	@Override
	public boolean equals(Object obj) {
		// TODO Auto-generated method stub
		boolean flag = false;
		
		if(obj instanceof Message){
			
			Message temp = (Message) obj;
			flag = temp.getMessageId() == this.messageId ? true : false;
		}
		
		return flag;
	}


	// Property accessors


}
