package cn.com.model;



/**
 * UsercourseId entity. @author MyEclipse Persistence Tools
 */

public class UsercourseId  implements java.io.Serializable {


    // Fields    

     private User user;
     private Course course;


    // Constructors

    /** default constructor */
    public UsercourseId() {
    }

    
    /** full constructor */
    public UsercourseId(User user, Course course) {
        this.user = user;
        this.course = course;
    }

   
    // Property accessors

    public User getUser() {
        return this.user;
    }
    
    public void setUser(User user) {
        this.user = user;
    }

    public Course getCourse() {
        return this.course;
    }
    
    public void setCourse(Course course) {
        this.course = course;
    }
   



   public boolean equals(Object other) {
         if ( (this == other ) ) return true;
		 if ( (other == null ) ) return false;
		 if ( !(other instanceof UsercourseId) ) return false;
		 UsercourseId castOther = ( UsercourseId ) other; 
         
		 return ( (this.getUser()==castOther.getUser()) || ( this.getUser()!=null && castOther.getUser()!=null && this.getUser().equals(castOther.getUser()) ) )
 && ( (this.getCourse()==castOther.getCourse()) || ( this.getCourse()!=null && castOther.getCourse()!=null && this.getCourse().equals(castOther.getCourse()) ) );
   }
   
   public int hashCode() {
         int result = 17;
         
         result = 37 * result + ( getUser() == null ? 0 : this.getUser().hashCode() );
         result = 37 * result + ( getCourse() == null ? 0 : this.getCourse().hashCode() );
         return result;
   }   





}