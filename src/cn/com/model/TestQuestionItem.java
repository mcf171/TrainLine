package cn.com.model;

import java.util.HashSet;
import java.util.Set;

/**
 * Testquestion entity. @author MyEclipse Persistence Tools
 */

public class TestQuestionItem implements java.io.Serializable {

	// Fields

	private Integer testQuestionItemId;
	private String testQuestionItemContent;
	private Testquestion testQuestion;
	private Boolean flag;
	private Set<User> users = new HashSet<User>(); 
	
	public Integer getTestQuestionItemId() {
		return testQuestionItemId;
	}
	public void setTestQuestionItemId(Integer testQuestionItemId) {
		this.testQuestionItemId = testQuestionItemId;
	}
	public String getTestQuestionItemContent() {
		return testQuestionItemContent;
	}
	public void setTestQuestionItemContent(String testQuestionItemContent) {
		this.testQuestionItemContent = testQuestionItemContent;
	}
	public Testquestion getTestQuestion() {
		return testQuestion;
	}
	public void setTestQuestion(Testquestion testQuestion) {
		this.testQuestion = testQuestion;
	}
	public Boolean getFlag() {
		return flag;
	}
	public void setFlag(Boolean flag) {
		this.flag = flag;
	}
	public Set<User> getUsers() {
		return users;
	}
	public void setUsers(Set<User> users) {
		this.users = users;
	}
	
	
}