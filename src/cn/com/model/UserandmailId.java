package cn.com.model;

/**
 * UserandmailId entity. @author MyEclipse Persistence Tools
 */

public class UserandmailId implements java.io.Serializable {

	// Fields

	private Integer userId;
	private Mail mail;

	// Constructors

	/** default constructor */
	public UserandmailId() {
	}

	/** full constructor */
	public UserandmailId(Integer userId, Mail mail) {
		this.userId = userId;
		this.mail = mail;
	}

	// Property accessors

	public Integer getUserId() {
		return this.userId;
	}

	public void setUserId(Integer userId) {
		this.userId = userId;
	}

	public Mail getMail() {
		return this.mail;
	}

	public void setMail(Mail mail) {
		this.mail = mail;
	}

	public boolean equals(Object other) {
		if ((this == other))
			return true;
		if ((other == null))
			return false;
		if (!(other instanceof UserandmailId))
			return false;
		UserandmailId castOther = (UserandmailId) other;

		return ((this.getUserId() == castOther.getUserId()) || (this
				.getUserId() != null && castOther.getUserId() != null && this
				.getUserId().equals(castOther.getUserId())))
				&& ((this.getMail() == castOther.getMail()) || (this.getMail() != null
						&& castOther.getMail() != null && this.getMail()
						.equals(castOther.getMail())));
	}

	public int hashCode() {
		int result = 17;

		result = 37 * result
				+ (getUserId() == null ? 0 : this.getUserId().hashCode());
		result = 37 * result
				+ (getMail() == null ? 0 : this.getMail().hashCode());
		return result;
	}

}