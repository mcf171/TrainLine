package cn.com.model;

/**
 * UserandquestionId entity. @author MyEclipse Persistence Tools
 */

public class UserandquestionId implements java.io.Serializable {

	// Fields

	private Testquestion testquestion;
	private Integer userId;

	// Constructors

	/** default constructor */
	public UserandquestionId() {
	}

	/** full constructor */
	public UserandquestionId(Testquestion testquestion, Integer userId) {
		this.testquestion = testquestion;
		this.userId = userId;
	}

	// Property accessors

	public Testquestion getTestquestion() {
		return this.testquestion;
	}

	public void setTestquestion(Testquestion testquestion) {
		this.testquestion = testquestion;
	}

	public Integer getUserId() {
		return this.userId;
	}

	public void setUserId(Integer userId) {
		this.userId = userId;
	}

	public boolean equals(Object other) {
		if ((this == other))
			return true;
		if ((other == null))
			return false;
		if (!(other instanceof UserandquestionId))
			return false;
		UserandquestionId castOther = (UserandquestionId) other;

		return ((this.getTestquestion() == castOther.getTestquestion()) || (this
				.getTestquestion() != null
				&& castOther.getTestquestion() != null && this
				.getTestquestion().equals(castOther.getTestquestion())))
				&& ((this.getUserId() == castOther.getUserId()) || (this
						.getUserId() != null && castOther.getUserId() != null && this
						.getUserId().equals(castOther.getUserId())));
	}

	public int hashCode() {
		int result = 17;

		result = 37
				* result
				+ (getTestquestion() == null ? 0 : this.getTestquestion()
						.hashCode());
		result = 37 * result
				+ (getUserId() == null ? 0 : this.getUserId().hashCode());
		return result;
	}

}