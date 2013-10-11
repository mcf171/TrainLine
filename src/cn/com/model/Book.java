package cn.com.model;



/**
 * Book entity. @author MyEclipse Persistence Tools
 */

public class Book  implements java.io.Serializable {


    // Fields    

     private Integer bookId;
     private String bookName;
     private String bookContent;
     private String bookClass;
     private String bookClassIndex;


    // Constructors

    /** default constructor */
    public Book() {
    }

    
    /** full constructor */
    public Book(String bookName, String bookContent, String bookClass, String bookClassIndex) {
        this.bookName = bookName;
        this.bookContent = bookContent;
        this.bookClass = bookClass;
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

    public String getBookClass() {
        return this.bookClass;
    }
    
    public void setBookClass(String bookClass) {
        this.bookClass = bookClass;
    }

    public String getBookClassIndex() {
        return this.bookClassIndex;
    }
    
    public void setBookClassIndex(String bookClassIndex) {
        this.bookClassIndex = bookClassIndex;
    }
   








}