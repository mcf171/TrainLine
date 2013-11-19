package cn.com.model;

/**
 * Book entity. @author MyEclipse Persistence Tools
 */

public class Book implements java.io.Serializable {

	// Fields

	private Integer bookId;
	private String bookName;
	private String bookContent;
	private String bookClassIndex;
	private Booktype bookType;
	private Integer bookState;
	private String bookURL;
	// Constructors

	/** default constructor */
	public Book() {
	}

	/** full constructor */
	public Book(String bookName, String bookContent, Integer bookTypeId,
			String bookClassIndex) {
		this.bookName = bookName;
		this.bookContent = bookContent;

		this.bookClassIndex = bookClassIndex;
	}

	// Property accessors

	public Integer getBookId() {
		return this.bookId;
	}

	public void setBookId(Integer bookId) {
		this.bookId = bookId;
	}

	public String getBookName() {
		return this.bookName;
	}

	public void setBookName(String bookName) {
		this.bookName = bookName;
	}

	public String getBookContent() {
		return this.bookContent;
	}

	public void setBookContent(String bookContent) {
		this.bookContent = bookContent;
	}

	

	public Booktype getBookType() {
		return bookType;
	}

	public void setBookType(Booktype bookType) {
		this.bookType = bookType;
	}

	public String getBookClassIndex() {
		return this.bookClassIndex;
	}

	public void setBookClassIndex(String bookClassIndex) {
		this.bookClassIndex = bookClassIndex;
	}

	public Integer getBookState() {
		return bookState;
	}

	public void setBookState(Integer bookState) {
		this.bookState = bookState;
	}

	public String getBookURL() {
		return bookURL;
	}

	public void setBookURL(String bookURL) {
		this.bookURL = bookURL;
	}

}