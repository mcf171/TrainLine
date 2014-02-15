package cn.com.action;

import java.util.List;
import java.util.Map;

import javax.servlet.ServletContext;

import org.apache.struts2.ServletActionContext;

import cn.com.base.BaseActionSupport;
import cn.com.model.Record;
import cn.com.model.User;
import cn.com.service.RecordService;
import cn.com.service.UserService;

import com.opensymphony.xwork2.ActionContext;

public class UserAction extends BaseActionSupport{

	private UserService userService;
	private RecordService recordService;
	private User user;
	private Map<String, Object> dataMap;
	
	/**
	 * 显示用户信息页面
	 * author:Apache
	 * time:2014-2-14 22:15
	 * @return
	 */
	public String getUserInfoPage(){
		
		return this.SUCCESS;
	}
	
	public String login(){
		
		//user.getUserPassword();
		User temp = (User) session.get("user");
		boolean exitUser = temp == null ? false : true;
		String path;
		if(!exitUser){
		
			user = userService.login(user);
			
			path = user == null ? this.INPUT : this.SUCCESS;
			session.put("user", user);
			request.setAttribute("error", "用户名或密码错误");
			
		}else{
			
			path=this.SUCCESS;
		}
		return path;
		
	}
	/**
	 * 前台注销
	 * author:Apache
	 * time:2014-1-20 22:17
	 * @return
	 */
	public String logout(){
		
		session.remove("user");
		return this.LOGIN;
	}
   public String show(){
	    user = (User)session.get("user");
	    Record record= recordService.getRecordById(user.getUserId());
		String path = user == null ? this.INPUT : this.SUCCESS;
		session.put("record", record);
		return path;
		
	}
   
   /**
    * 获取所有用户List
    * author:Apache
    * time:2014-1-22 19:37
    * @return
    */
   public String getAllUser(){
	   
	   List<User> list = userService.getUserList();
	    
	   dataMap.put("list", list);
	   
	   return this.SUCCESS;
   }
   
	public String getBackendIndex(){
		
		user = (User) session.get("user");
		
//		String path = user.getUserState()==1? this.SUCCESS : this.LOGIN;	
//		
//		return path;
		return SUCCESS;
		
	}
	
	public String goToJform(){
		
		
		return this.SUCCESS;
	}
	
	public UserService getUserService() {
		return userService;
	}

	public void setUserService(UserService userService) {
		this.userService = userService;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}
	public RecordService getRecordService() {
		return recordService;
	}
	public void setRecordService(RecordService recordService) {
		this.recordService = recordService;
	}
	public Map<String, Object> getDataMap() {
		return dataMap;
	}
	public void setDataMap(Map<String, Object> dataMap) {
		this.dataMap = dataMap;
	}
	
	
	
}
