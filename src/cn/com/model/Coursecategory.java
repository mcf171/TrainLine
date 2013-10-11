package cn.com.model;



/**
 * Coursecategory entity. @author MyEclipse Persistence Tools
 */

public class Coursecategory  implements java.io.Serializable {


    // Fields    

     private Integer courseCategoryId;
     private String courseCategoryName;


    // Constructors

    /** default constructor */
    public Coursecategory() {
    }

    
    /** full constructor */
    public Coursecategory(String courseCategoryName) {
        this.courseCategoryName = courseCategoryName;
    }

   
    // Property accessors

    public Integer getCourseCategoryId() {
        return this.courseCategoryId;
    }
    
    public void setCourseCategoryId(Integer courseCategoryId) {
        this.courseCategoryId = courseCategoryId;
    }

    public String getCourseCategoryName() {
        return this.courseCategoryName;
    }
    
    public void setCourseCategoryName(String courseCategoryName) {
        this.courseCategoryName = courseCategoryName;
    }
   








}