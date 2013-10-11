package cn.com.model;



/**
 * TrainuserId entity. @author MyEclipse Persistence Tools
 */

public class TrainuserId  implements java.io.Serializable {


    // Fields    

     private User user;
     private Train train;


    // Constructors

    /** default constructor */
    public TrainuserId() {
    }

    
    /** full constructor */
    public TrainuserId(User user, Train train) {
        this.user = user;
        this.train = train;
    }

   
    // Property accessors

    public User getUser() {
        return this.user;
    }
    
    public void setUser(User user) {
        this.user = user;
    }

    public Train getTrain() {
        return this.train;
    }
    
    public void setTrain(Train train) {
        this.train = train;
    }
   



   public boolean equals(Object other) {
         if ( (this == other ) ) return true;
		 if ( (other == null ) ) return false;
		 if ( !(other instanceof TrainuserId) ) return false;
		 TrainuserId castOther = ( TrainuserId ) other; 
         
		 return ( (this.getUser()==castOther.getUser()) || ( this.getUser()!=null && castOther.getUser()!=null && this.getUser().equals(castOther.getUser()) ) )
 && ( (this.getTrain()==castOther.getTrain()) || ( this.getTrain()!=null && castOther.getTrain()!=null && this.getTrain().equals(castOther.getTrain()) ) );
   }
   
   public int hashCode() {
         int result = 17;
         
         result = 37 * result + ( getUser() == null ? 0 : this.getUser().hashCode() );
         result = 37 * result + ( getTrain() == null ? 0 : this.getTrain().hashCode() );
         return result;
   }   





}