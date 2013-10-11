package cn.com.model;

import java.sql.Timestamp;
import java.util.HashSet;
import java.util.Set;


/**
 * Train entity. @author MyEclipse Persistence Tools
 */

public class Train  implements java.io.Serializable {


    // Fields    

     private Integer trainId;
     private String trainName;
     private Timestamp trainStartTime;
     private Timestamp trainEndTime;
     private String trainWay;
     private String trainPlace;
     private String trainContent;
     private Integer trainCountHour;
     private String trainType;
     private String trainTelegramCode;
     private String trainTrainAgency;
    


    // Constructors

    /** default constructor */
    public Train() {
    }

    
    /** full constructor */
    public Train(String trainName, Timestamp trainStartTime, Timestamp trainEndTime, String trainWay, String trainPlace, String trainContent, Integer trainCountHour, String trainType, String trainTelegramCode, String trainTrainAgency) {
        this.trainName = trainName;
        this.trainStartTime = trainStartTime;
        this.trainEndTime = trainEndTime;
        this.trainWay = trainWay;
        this.trainPlace = trainPlace;
        this.trainContent = trainContent;
        this.trainCountHour = trainCountHour;
        this.trainType = trainType;
        this.trainTelegramCode = trainTelegramCode;
        this.trainTrainAgency = trainTrainAgency;
        
    }

   
    // Property accessors

    public Integer getTrainId() {
        return this.trainId;
    }
    
    public void setTrainId(Integer trainId) {
        this.trainId = trainId;
    }

    public String getTrainName() {
        return this.trainName;
    }
    
    public void setTrainName(String trainName) {
        this.trainName = trainName;
    }

    public Timestamp getTrainStartTime() {
        return this.trainStartTime;
    }
    
    public void setTrainStartTime(Timestamp trainStartTime) {
        this.trainStartTime = trainStartTime;
    }

    public Timestamp getTrainEndTime() {
        return this.trainEndTime;
    }
    
    public void setTrainEndTime(Timestamp trainEndTime) {
        this.trainEndTime = trainEndTime;
    }

    public String getTrainWay() {
        return this.trainWay;
    }
    
    public void setTrainWay(String trainWay) {
        this.trainWay = trainWay;
    }

    public String getTrainPlace() {
        return this.trainPlace;
    }
    
    public void setTrainPlace(String trainPlace) {
        this.trainPlace = trainPlace;
    }

    public String getTrainContent() {
        return this.trainContent;
    }
    
    public void setTrainContent(String trainContent) {
        this.trainContent = trainContent;
    }

    public Integer getTrainCountHour() {
        return this.trainCountHour;
    }
    
    public void setTrainCountHour(Integer trainCountHour) {
        this.trainCountHour = trainCountHour;
    }

    public String getTrainType() {
        return this.trainType;
    }
    
    public void setTrainType(String trainType) {
        this.trainType = trainType;
    }

    public String getTrainTelegramCode() {
        return this.trainTelegramCode;
    }
    
    public void setTrainTelegramCode(String trainTelegramCode) {
        this.trainTelegramCode = trainTelegramCode;
    }

    public String getTrainTrainAgency() {
        return this.trainTrainAgency;
    }
    
    public void setTrainTrainAgency(String trainTrainAgency) {
        this.trainTrainAgency = trainTrainAgency;
    }

}