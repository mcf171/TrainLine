package cn.com.model;

/**
 * UserandcourseId entity. @author MyEclipse Persistence Tools
 */

public class UserandcourseId implements java.io.Serializable {

	// Fields

	private Integer userId;
	private Course course;

	// Constructors

	/** default constructor */
	public UserandcourseId() {
	}

	/** full constructor */
	public UserandcourseId(Integer userId, Course course) {
		this.userId = userId;
		this.course = course;
	}

	// Property accessors

	public Integer getUserId() {
		return this.userId;
	}

	public void setUserId(Integer userId) {
		this.userId = userId;
	}

	public Course getCourse() {
		return this.course;
	}

	public void setCourse(Course course) {
		this.course = course;
	}

	public boolean equals(Object other) {
		if ((this == other))
			return true;
		if ((other == null))
			return false;
		if (!(other instanceof UserandcourseId))
			return false;
		UserandcourseId castOther = (UserandcourseId) other;

		return ((this.getUserId() == castOther.getUserId()) || (this
				.getUserId() != null && castOther.getUserId() != null && this
				.getUserId().equals(castOther.getUserId())))
				&& ((this.getCourse() == castOther.getCourse()) || (this
						.getCourse() != null && castOther.getCourse() != null && this
						.getCourse().equals(castOther.getCourse())));
	}

	public int hashCode() {
		int result = 17;

		result = 37 * result
				+ (getUserId() == null ? 0 : this.getUserId().hashCode());
		result = 37 * result
				+ (getCourse() == null ? 0 : this.getCourse().hashCode());
		return result;
	}

}