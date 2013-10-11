package cn.com.model;

import java.util.HashSet;
import java.util.Set;


/**
 * User entity. @author MyEclipse Persistence Tools
 */

public class User  implements java.io.Serializable {


    // Fields    

     private Integer userId;
     private String userName;
     private String userPassward;
     private String sex;
     private String userPhone;
     private Set trainusers = new HashSet(0);
     private Set usercourses = new HashSet(0);
     private Set userexams = new HashSet(0);


    // Constructors

    /** default constructor */
    public User() {
    }

    
    /** full constructor */
    public User(String userName, String userPassward, String sex, String userPhone, Set trainusers, Set usercourses, Set userexams) {
        this.userName = userName;
        this.userPassward = userPassward;
        this.sex = sex;
        this.userPhone = userPhone;
        this.trainusers = trainusers;
        this.usercourses = usercourses;
        this.userexams = userexams;
    }

   
    // Property accessors

    public Integer getUserId() {
        return this.userId;
    }
    
    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public String getUserName() {
        return this.userName;
    }
    
    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getUserPassward() {
        return this.userPassward;
    }
    
    public void setUserPassward(String userPassward) {
        this.userPassward = userPassward;
    }

    public String getSex() {
        return this.sex;
    }
    
    public void setSex(String sex) {
        this.sex = sex;
    }

    public String getUserPhone() {
        return this.userPhone;
    }
    
    public void setUserPhone(String userPhone) {
        this.userPhone = userPhone;
    }

    public Set getTrainusers() {
        return this.trainusers;
    }
    
    public void setTrainusers(Set trainusers) {
        this.trainusers = trainusers;
    }

    public Set getUsercourses() {
        return this.usercourses;
    }
    
    public void setUsercourses(Set usercourses) {
        this.usercourses = usercourses;
    }

    public Set getUserexams() {
        return this.userexams;
    }
    
    public void setUserexams(Set userexams) {
        this.userexams = userexams;
    }
   








}