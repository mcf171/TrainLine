package cn.com.model;

/**
 * ClassandcourseId entity. @author MyEclipse Persistence Tools
 */

public class ClassandcourseId implements java.io.Serializable {

	// Fields

	private Trainingclass trainingclass;
	private Course course;

	// Constructors

	/** default constructor */
	public ClassandcourseId() {
	}

	/** full constructor */
	public ClassandcourseId(Trainingclass trainingclass, Course course) {
		this.trainingclass = trainingclass;
		this.course = course;
	}

	// Property accessors

	public Trainingclass getTrainingclass() {
		return this.trainingclass;
	}

	public void setTrainingclass(Trainingclass trainingclass) {
		this.trainingclass = trainingclass;
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
		if (!(other instanceof ClassandcourseId))
			return false;
		ClassandcourseId castOther = (ClassandcourseId) other;

		return ((this.getTrainingclass() == castOther.getTrainingclass()) || (this
				.getTrainingclass() != null
				&& castOther.getTrainingclass() != null && this
				.getTrainingclass().equals(castOther.getTrainingclass())))
				&& ((this.getCourse() == castOther.getCourse()) || (this
						.getCourse() != null && castOther.getCourse() != null && this
						.getCourse().equals(castOther.getCourse())));
	}

	public int hashCode() {
		int result = 17;

		result = 37
				* result
				+ (getTrainingclass() == null ? 0 : this.getTrainingclass()
						.hashCode());
		result = 37 * result
				+ (getCourse() == null ? 0 : this.getCourse().hashCode());
		return result;
	}

}