package cn.com.model;

/**
 * Topicaccessory entity. @author MyEclipse Persistence Tools
 */

public class Topicaccessory implements java.io.Serializable {

	// Fields

	private Integer topicAccessoryId;
	private Topic topic;
	private String topicAccessoryPath;
	private String topicAccessoryName;

	// Constructors

	/** default constructor */
	public Topicaccessory() {
	}

	/** full constructor */
	public Topicaccessory(Topic topic, String topicAccessoryPath,
			String topicAccessoryName) {
		this.topic = topic;
		this.topicAccessoryPath = topicAccessoryPath;
		this.topicAccessoryName = topicAccessoryName;
	}

	// Property accessors

	public Integer getTopicAccessoryId() {
		return this.topicAccessoryId;
	}

	public void setTopicAccessoryId(Integer topicAccessoryId) {
		this.topicAccessoryId = topicAccessoryId;
	}

	public Topic getTopic() {
		return this.topic;
	}

	public void setTopic(Topic topic) {
		this.topic = topic;
	}

	public String getTopicAccessoryPath() {
		return this.topicAccessoryPath;
	}

	public void setTopicAccessoryPath(String topicAccessoryPath) {
		this.topicAccessoryPath = topicAccessoryPath;
	}

	public String getTopicAccessoryName() {
		return this.topicAccessoryName;
	}

	public void setTopicAccessoryName(String topicAccessoryName) {
		this.topicAccessoryName = topicAccessoryName;
	}

}