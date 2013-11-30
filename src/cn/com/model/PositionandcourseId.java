package cn.com.model;

/**
 * PositionandcourseId entity. @author MyEclipse Persistence Tools
 */

public class PositionandcourseId implements java.io.Serializable {

	// Fields

	private Integer positionId;
	private Integer courseId;

	// Constructors

	/** default constructor */
	public PositionandcourseId() {
	}

	/** full constructor */
	public PositionandcourseId(Integer positionId, Integer courseId) {
		this.positionId = positionId;
		this.courseId = courseId;
	}

	// Property accessors

	public Integer getPositionId() {
		return this.positionId;
	}

	public void setPositionId(Integer positionId) {
		this.positionId = positionId;
	}

	public Integer getCourseId() {
		return this.courseId;
	}

	public void setCourseId(Integer courseId) {
		this.courseId = courseId;
	}

	public boolean equals(Object other) {
		if ((this == other))
			return true;
		if ((other == null))
			return false;
		if (!(other instanceof PositionandcourseId))
			return false;
		PositionandcourseId castOther = (PositionandcourseId) other;

		return ((this.getPositionId() == castOther.getPositionId()) || (this
				.getPositionId() != null && castOther.getPositionId() != null && this
				.getPositionId().equals(castOther.getPositionId())))
				&& ((this.getCourseId() == castOther.getCourseId()) || (this
						.getCourseId() != null
						&& castOther.getCourseId() != null && this
						.getCourseId().equals(castOther.getCourseId())));
	}

	public int hashCode() {
		int result = 17;

		result = 37
				* result
				+ (getPositionId() == null ? 0 : this.getPositionId()
						.hashCode());
		result = 37 * result
				+ (getCourseId() == null ? 0 : this.getCourseId().hashCode());
		return result;
	}

}