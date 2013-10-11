package cn.com.model;



/**
 * Usercourse entity. @author MyEclipse Persistence Tools
 */

public class Usercourse  implements java.io.Serializable {


    // Fields    

     private UsercourseId id;


    // Constructors

    /** default constructor */
    public Usercourse() {
    }

    
    /** full constructor */
    public Usercourse(UsercourseId id) {
        this.id = id;
    }

   
    // Property accessors

    public UsercourseId getId() {
        return this.id;
    }
    
    public void setId(UsercourseId id) {
        this.id = id;
    }
   








}