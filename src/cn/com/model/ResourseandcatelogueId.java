package cn.com.model;

/**
 * ResourseandcatelogueId entity. @author MyEclipse Persistence Tools
 */

public class ResourseandcatelogueId implements java.io.Serializable {

	// Fields

	private Catalogue catalogue;
	private Resource resource;

	// Constructors

	/** default constructor */
	public ResourseandcatelogueId() {
	}

	/** full constructor */
	public ResourseandcatelogueId(Catalogue catalogue, Resource resource) {
		this.catalogue = catalogue;
		this.resource = resource;
	}

	// Property accessors

	public Catalogue getCatalogue() {
		return this.catalogue;
	}

	public void setCatalogue(Catalogue catalogue) {
		this.catalogue = catalogue;
	}

	public Resource getResource() {
		return this.resource;
	}

	public void setResource(Resource resource) {
		this.resource = resource;
	}

	public boolean equals(Object other) {
		if ((this == other))
			return true;
		if ((other == null))
			return false;
		if (!(other instanceof ResourseandcatelogueId))
			return false;
		ResourseandcatelogueId castOther = (ResourseandcatelogueId) other;

		return ((this.getCatalogue() == castOther.getCatalogue()) || (this
				.getCatalogue() != null && castOther.getCatalogue() != null && this
				.getCatalogue().equals(castOther.getCatalogue())))
				&& ((this.getResource() == castOther.getResource()) || (this
						.getResource() != null
						&& castOther.getResource() != null && this
						.getResource().equals(castOther.getResource())));
	}

	public int hashCode() {
		int result = 17;

		result = 37 * result
				+ (getCatalogue() == null ? 0 : this.getCatalogue().hashCode());
		result = 37 * result
				+ (getResource() == null ? 0 : this.getResource().hashCode());
		return result;
	}

}