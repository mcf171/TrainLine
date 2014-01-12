package cn.com.action;

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
	
	public String login(){
		
		user = userService.login(user);
		
		String path = user == null ? this.INPUT : this.SUCCESS;
		session.put("user", user);
		
		return path;
		
	}
   public String show(){
	    user = (User)session.get("user");
	    Record record= recordService.getRecordById(user.getUserId());
		String path = user == null ? this.INPUT : this.SUCCESS;
		session.put("record", record);
		return path;
		
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
	
	
	
}
