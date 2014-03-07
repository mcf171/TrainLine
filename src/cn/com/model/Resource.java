package cn.com.model;

import java.util.HashSet;
import java.util.Set;

/**
 * Resource entity. @author MyEclipse Persistence Tools
 */

public class Resource implements java.io.Serializable {

	// Fields

	private Integer resourceId;
	private String resourceName;
	private String resourcePath;
	private Integer resourceType;
	private Integer downloundCount;
	private Catalogue catalogue;
	private Set resourseandcatelogues = new HashSet(0);

	// Constructors

	/** default constructor */
	public Resource() {
		Catalogue item = new Catalogue();
		item.setCatalogueId(0);
		catalogue = item;
	}

	/** full constructor */
	

	// Property accessors

	public Integer getResourceId() {
		return this.resourceId;
	}


	public void setResourceId(Integer resourceId) {
		this.resourceId = resourceId;
	}

	public String getResourceName() {
		return this.resourceName;
	}

	public void setResourceName(String resourceName) {
		this.resourceName = resourceName;
	}

	public String getResourcePath() {
		return this.resourcePath;
	}

	public void setResourcePath(String resourcePath) {
		this.resourcePath = resourcePath;
	}

	public Integer getResourceType() {
		return this.resourceType;
	}

	public void setResourceType(Integer resourceType) {
		this.resourceType = resourceType;
	}

	public Set getResourseandcatelogues() {
		return this.resourseandcatelogues;
	}

	public void setResourseandcatelogues(Set resourseandcatelogues) {
		this.resourseandcatelogues = resourseandcatelogues;
	}


	public Integer getDownloundCount() {
		return downloundCount;
	}

	public void setDownloundCount(Integer downloundCount) {
		this.downloundCount = downloundCount;
	}

	public Catalogue getCatalogue() {
		return catalogue;
	}

	public void setCatalogue(Catalogue catalogue) {
		this.catalogue = catalogue;
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
		
		if(obj instanceof Resource){
			
			Resource temp = (Resource)obj;
			flag = temp.getResourceId().equals(this.resourceId);
		}
		
		return flag;
	}

	
}