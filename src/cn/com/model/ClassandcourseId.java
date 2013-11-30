package cn.com.model;;

/**
 * ClassandcourseId entity. @author MyEclipse Persistence Tools
 */

public class ClassandcourseId implements java.io.Serializable {

	// Fields

	private Integer trainingClassId;
	private Integer courseId;

	// Constructors

	/** default constructor */
	public ClassandcourseId() {
	}

	/** full constructor */
	public ClassandcourseId(Integer trainingClassId, Integer courseId) {
		this.trainingClassId = trainingClassId;
		this.courseId = courseId;
	}

	// Property accessors

	public Integer getTrainingClassId() {
		return this.trainingClassId;
	}

	public void setTrainingClassId(Integer trainingClassId) {
		this.trainingClassId = trainingClassId;
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
		if (!(other instanceof ClassandcourseId))
			return false;
		ClassandcourseId castOther = (ClassandcourseId) other;

		return ((this.getTrainingClassId() == castOther.getTrainingClassId()) || (this
				.getTrainingClassId() != null
				&& castOther.getTrainingClassId() != null && this
				.getTrainingClassId().equals(castOther.getTrainingClassId())))
				&& ((this.getCourseId() == castOther.getCourseId()) || (this
						.getCourseId() != null
						&& castOther.getCourseId() != null && this
						.getCourseId().equals(castOther.getCourseId())));
	}

	public int hashCode() {
		int result = 17;

		result = 37
				* result
				+ (getTrainingClassId() == null ? 0 : this.getTrainingClassId()
						.hashCode());
		result = 37 * result
				+ (getCourseId() == null ? 0 : this.getCourseId().hashCode());
		return result;
	}

}