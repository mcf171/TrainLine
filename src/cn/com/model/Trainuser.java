package cn.com.model;



/**
 * Trainuser entity. @author MyEclipse Persistence Tools
 */

public class Trainuser  implements java.io.Serializable {


    // Fields    

     private TrainuserId id;


    // Constructors

    /** default constructor */
    public Trainuser() {
    }

    
    /** full constructor */
    public Trainuser(TrainuserId id) {
        this.id = id;
    }

   
    // Property accessors

    public TrainuserId getId() {
        return this.id;
    }
    
    public void setId(TrainuserId id) {
        this.id = id;
    }
   








}