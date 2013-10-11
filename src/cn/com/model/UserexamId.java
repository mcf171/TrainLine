package cn.com.model;



/**
 * UserexamId entity. @author MyEclipse Persistence Tools
 */

public class UserexamId  implements java.io.Serializable {


    // Fields    

     private User user;
     private Exam exam;


    // Constructors

    /** default constructor */
    public UserexamId() {
    }

    
    /** full constructor */
    public UserexamId(User user, Exam exam) {
        this.user = user;
        this.exam = exam;
    }

   
    // Property accessors

    public User getUser() {
        return this.user;
    }
    
    public void setUser(User user) {
        this.user = user;
    }

    public Exam getExam() {
        return this.exam;
    }
    
    public void setExam(Exam exam) {
        this.exam = exam;
    }
   



   public boolean equals(Object other) {
         if ( (this == other ) ) return true;
		 if ( (other == null ) ) return false;
		 if ( !(other instanceof UserexamId) ) return false;
		 UserexamId castOther = ( UserexamId ) other; 
         
		 return ( (this.getUser()==castOther.getUser()) || ( this.getUser()!=null && castOther.getUser()!=null && this.getUser().equals(castOther.getUser()) ) )
 && ( (this.getExam()==castOther.getExam()) || ( this.getExam()!=null && castOther.getExam()!=null && this.getExam().equals(castOther.getExam()) ) );
   }
   
   public int hashCode() {
         int result = 17;
         
         result = 37 * result + ( getUser() == null ? 0 : this.getUser().hashCode() );
         result = 37 * result + ( getExam() == null ? 0 : this.getExam().hashCode() );
         return result;
   }   





}