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

	// Constructors

	/** default constructor */
	public Theme() {
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

	

}