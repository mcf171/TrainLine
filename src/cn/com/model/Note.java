package cn.com.model;

/**
 * Note entity. @author MyEclipse Persistence Tools
 */

public class Note implements java.io.Serializable {

	// Fields

	private Integer noteId;
	private Catalogue catalogue;
	private Integer userId;
	private String noteContent;

	// Constructors

	/** default constructor */
	public Note() {
	}

	/** full constructor */
	public Note(Catalogue catalogue, Integer userId, String noteContent) {
		this.catalogue = catalogue;
		this.userId = userId;
		this.noteContent = noteContent;
	}

	// Property accessors

	public Integer getNoteId() {
		return this.noteId;
	}

	public void setNoteId(Integer noteId) {
		this.noteId = noteId;
	}

	public Catalogue getCatalogue() {
		return this.catalogue;
	}

	public void setCatalogue(Catalogue catalogue) {
		this.catalogue = catalogue;
	}

	public Integer getUserId() {
		return this.userId;
	}

	public void setUserId(Integer userId) {
		this.userId = userId;
	}

	public String getNoteContent() {
		return this.noteContent;
	}

	public void setNoteContent(String noteContent) {
		this.noteContent = noteContent;
	}

}