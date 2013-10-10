package cn.com.model;

import java.sql.Timestamp;
import java.util.HashSet;
import java.util.Set;


/**
 * Exam entity. @author MyEclipse Persistence Tools
 */

public class Exam  implements java.io.Serializable {


    // Fields    

     private Integer examId;
     private String examName;
     private Timestamp examStartTime;
     private Timestamp examEndTime;
   


    // Constructors

    /** default constructor */
    public Exam() {
    }

    
    /** full constructor */
    public Exam(String examName, Timestamp examStartTime, Timestamp examEndTime) {
        this.examName = examName;
        this.examStartTime = examStartTime;
        this.examEndTime = examEndTime;
        
    }

   
    // Property accessors

    public Integer getExamId() {
        return this.examId;
    }
    
    public void setExamId(Integer examId) {
        this.examId = examId;
    }

    public String getExamName() {
        return this.examName;
    }
    
    public void setExamName(String examName) {
        this.examName = examName;
    }

    public Timestamp getExamStartTime() {
        return this.examStartTime;
    }
    
    public void setExamStartTime(Timestamp examStartTime) {
        this.examStartTime = examStartTime;
    }

    public Timestamp getExamEndTime() {
        return this.examEndTime;
    }
    
    public void setExamEndTime(Timestamp examEndTime) {
        this.examEndTime = examEndTime;
    }

}