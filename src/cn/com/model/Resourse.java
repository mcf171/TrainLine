package cn.com.model;

/**
 * Resourse entity. @author MyEclipse Persistence Tools
 */

public class Resourse implements java.io.Serializable {

	// Fields

	private Integer resourseId;
	private String resourseName;
	private String resourseContent;
	private String resoursePerson;
	private Integer downloundCount;

	// Constructors

	/** default constructor */
	public Resourse() {
	}

	/** full constructor */
	public Resourse(String resourseName, String resourseContent,
			String resoursePerson, Integer downloundCount) {
		this.resourseName = resourseName;
		this.resourseContent = resourseContent;
		this.resoursePerson = resoursePerson;
		this.downloundCount = downloundCount;
	}

	// Property accessors

	public Integer getResourseId() {
		return this.resourseId;
	}

	public void setResourseId(Integer resourseId) {
		this.resourseId = resourseId;
	}

	public String getResourseName() {
		return this.resourseName;
	}

	public void setResourseName(String resourseName) {
		this.resourseName = resourseName;
	}

	public String getResourseContent() {
		return this.resourseContent;
	}

	public void setResourseContent(String resourseContent) {
		this.resourseContent = resourseContent;
	}

	public String getResoursePerson() {
		return this.resoursePerson;
	}

	public void setResoursePerson(String resoursePerson) {
		this.resoursePerson = resoursePerson;
	}

	public Integer getDownloundCount() {
		return this.downloundCount;
	}

	public void setDownloundCount(Integer downloundCount) {
		this.downloundCount = downloundCount;
	}

}