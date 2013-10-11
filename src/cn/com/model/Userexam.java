package cn.com.model;



/**
 * Userexam entity. @author MyEclipse Persistence Tools
 */

public class Userexam  implements java.io.Serializable {


    // Fields    

     private UserexamId id;


    // Constructors

    /** default constructor */
    public Userexam() {
    }

    
    /** full constructor */
    public Userexam(UserexamId id) {
        this.id = id;
    }

   
    // Property accessors

    public UserexamId getId() {
        return this.id;
    }
    
    public void setId(UserexamId id) {
        this.id = id;
    }
   








}