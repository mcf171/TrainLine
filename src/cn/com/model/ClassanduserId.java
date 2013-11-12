package cn.com.model;

/**
 * ClassanduserId entity. @author MyEclipse Persistence Tools
 */

public class ClassanduserId implements java.io.Serializable {

	// Fields

	private Integer userId;
	private Trainingclass trainingclass;

	// Constructors

	/** default constructor */
	public ClassanduserId() {
	}

	/** full constructor */
	public ClassanduserId(Integer userId, Trainingclass trainingclass) {
		this.userId = userId;
		this.trainingclass = trainingclass;
	}

	// Property accessors

	public Integer getUserId() {
		return this.userId;
	}

	public void setUserId(Integer userId) {
		this.userId = userId;
	}

	public Trainingclass getTrainingclass() {
		return this.trainingclass;
	}

	public void setTrainingclass(Trainingclass trainingclass) {
		this.trainingclass = trainingclass;
	}

	public boolean equals(Object other) {
		if ((this == other))
			return true;
		if ((other == null))
			return false;
		if (!(other instanceof ClassanduserId))
			return false;
		ClassanduserId castOther = (ClassanduserId) other;

		return ((this.getUserId() == castOther.getUserId()) || (this
				.getUserId() != null && castOther.getUserId() != null && this
				.getUserId().equals(castOther.getUserId())))
				&& ((this.getTrainingclass() == castOther.getTrainingclass()) || (this
						.getTrainingclass() != null
						&& castOther.getTrainingclass() != null && this
						.getTrainingclass()
						.equals(castOther.getTrainingclass())));
	}

	public int hashCode() {
		int result = 17;

		result = 37 * result
				+ (getUserId() == null ? 0 : this.getUserId().hashCode());
		result = 37
				* result
				+ (getTrainingclass() == null ? 0 : this.getTrainingclass()
						.hashCode());
		return result;
	}

}