package cn.com.model;

/**
 * Tieziaccessory entity. @author MyEclipse Persistence Tools
 */

public class Tieziaccessory implements java.io.Serializable {

	// Fields

	private Integer tieziAccessoryId;
	private Tiezi tiezi;
	private String tiezAccessoryPath;
	private String tiezAccessoryName;

	// Constructors

	/** default constructor */
	public Tieziaccessory() {
	}

	/** full constructor */
	public Tieziaccessory(Tiezi tiezi, String tiezAccessoryPath,
			String tiezAccessoryName) {
		this.tiezi = tiezi;
		this.tiezAccessoryPath = tiezAccessoryPath;
		this.tiezAccessoryName = tiezAccessoryName;
	}

	// Property accessors

	public Integer getTieziAccessoryId() {
		return this.tieziAccessoryId;
	}

	public void setTieziAccessoryId(Integer tieziAccessoryId) {
		this.tieziAccessoryId = tieziAccessoryId;
	}

	public Tiezi getTiezi() {
		return this.tiezi;
	}

	public void setTiezi(Tiezi tiezi) {
		this.tiezi = tiezi;
	}

	public String getTiezAccessoryPath() {
		return this.tiezAccessoryPath;
	}

	public void setTiezAccessoryPath(String tiezAccessoryPath) {
		this.tiezAccessoryPath = tiezAccessoryPath;
	}

	public String getTiezAccessoryName() {
		return this.tiezAccessoryName;
	}

	public void setTiezAccessoryName(String tiezAccessoryName) {
		this.tiezAccessoryName = tiezAccessoryName;
	}

}