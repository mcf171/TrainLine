package cn.com.model;

/**
 * Discuss entity. @author MyEclipse Persistence Tools
 */

public class Discuss implements java.io.Serializable {

	// Fields

	private Integer discussId;
	private Tiezi tiezi;
	private Integer userId;
	private String discussContent;

	// Constructors

	/** default constructor */
	public Discuss() {
	}

	/** full constructor */
	public Discuss(Tiezi tiezi, Integer userId, String discussContent) {
		this.tiezi = tiezi;
		this.userId = userId;
		this.discussContent = discussContent;
	}

	// Property accessors

	public Integer getDiscussId() {
		return this.discussId;
	}

	public void setDiscussId(Integer discussId) {
		this.discussId = discussId;
	}

	public Tiezi getTiezi() {
		return this.tiezi;
	}

	public void setTiezi(Tiezi tiezi) {
		this.tiezi = tiezi;
	}

	public Integer getUserId() {
		return this.userId;
	}

	public void setUserId(Integer userId) {
		this.userId = userId;
	}

	public String getDiscussContent() {
		return this.discussContent;
	}

	public void setDiscussContent(String discussContent) {
		this.discussContent = discussContent;
	}

}