package cn.com.model;



/**
 * Position entity. @author MyEclipse Persistence Tools
 */

public class Position  implements java.io.Serializable {


    // Fields    

     private Integer positionId;
     private String positionName;


    // Constructors

    /** default constructor */
    public Position() {
    }

    
    /** full constructor */
    public Position(String positionName) {
        this.positionName = positionName;
    }

   
    // Property accessors

    public Integer getPositionId() {
        return this.positionId;
    }
    
    public void setPositionId(Integer positionId) {
        this.positionId = positionId;
    }

    public String getPositionName() {
        return this.positionName;
    }
    
    public void setPositionName(String positionName) {
        this.positionName = positionName;
    }
   








}