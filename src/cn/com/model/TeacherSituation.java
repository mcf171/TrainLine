package cn.com.model;

import java.io.Serializable;

public class TeacherSituation implements Serializable {

	private Integer id;
	private String name;
	private String educaton;
	private String profession;
	private String jobs;
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEducaton() {
		return educaton;
	}
	public void setEducaton(String educaton) {
		this.educaton = educaton;
	}
	public String getProfession() {
		return profession;
	}
	public void setProfession(String profession) {
		this.profession = profession;
	}
	public String getJobs() {
		return jobs;
	}
	public void setJobs(String jobs) {
		this.jobs = jobs;
	}
	
	
}
