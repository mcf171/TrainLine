package cn.com.model;

import java.io.Serializable;

public class CourseSetting implements Serializable{

	private Integer id;
	private String content;
	private String studyTime;
	private String studyWay;
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public String getStudyTime() {
		return studyTime;
	}
	public void setStudyTime(String studyTime) {
		this.studyTime = studyTime;
	}
	public String getStudyWay() {
		return studyWay;
	}
	public void setStudyWay(String studyWay) {
		this.studyWay = studyWay;
	}
	
	
}
