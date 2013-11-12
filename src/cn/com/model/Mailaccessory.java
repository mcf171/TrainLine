package cn.com.model;

/**
 * Mailaccessory entity. @author MyEclipse Persistence Tools
 */

public class Mailaccessory implements java.io.Serializable {

	// Fields

	private Integer mailAccessoryId;
	private Mail mail;
	private String mailAccessoryName;
	private String mailAccessoryPath;

	// Constructors

	/** default constructor */
	public Mailaccessory() {
	}

	/** full constructor */
	public Mailaccessory(Mail mail, String mailAccessoryName,
			String mailAccessoryPath) {
		this.mail = mail;
		this.mailAccessoryName = mailAccessoryName;
		this.mailAccessoryPath = mailAccessoryPath;
	}

	// Property accessors

	public Integer getMailAccessoryId() {
		return this.mailAccessoryId;
	}

	public void setMailAccessoryId(Integer mailAccessoryId) {
		this.mailAccessoryId = mailAccessoryId;
	}

	public Mail getMail() {
		return this.mail;
	}

	public void setMail(Mail mail) {
		this.mail = mail;
	}

	public String getMailAccessoryName() {
		return this.mailAccessoryName;
	}

	public void setMailAccessoryName(String mailAccessoryName) {
		this.mailAccessoryName = mailAccessoryName;
	}

	public String getMailAccessoryPath() {
		return this.mailAccessoryPath;
	}

	public void setMailAccessoryPath(String mailAccessoryPath) {
		this.mailAccessoryPath = mailAccessoryPath;
	}

}