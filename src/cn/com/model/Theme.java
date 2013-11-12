package cn.com.model;

import java.util.HashSet;
import java.util.Set;

/**
 * Theme entity. @author MyEclipse Persistence Tools
 */

public class Theme implements java.io.Serializable {

	// Fields

	private Integer themeId;
	private String themeName;
	private Set topics = new HashSet(0);

	// Constructors

	/** default constructor */
	public Theme() {
	}

	/** full constructor */
	public Theme(String themeName, Set topics) {
		this.themeName = themeName;
		this.topics = topics;
	}

	// Property accessors

	public Integer getThemeId() {
		return this.themeId;
	}

	public void setThemeId(Integer themeId) {
		this.themeId = themeId;
	}

	public String getThemeName() {
		return this.themeName;
	}

	public void setThemeName(String themeName) {
		this.themeName = themeName;
	}

	public Set getTopics() {
		return this.topics;
	}

	public void setTopics(Set topics) {
		this.topics = topics;
	}

}