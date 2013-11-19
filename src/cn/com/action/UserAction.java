package cn.com.action;

import cn.com.base.BaseActionSupport;
import cn.com.model.User;
import cn.com.service.UserService;

public class UserAction extends BaseActionSupport{

	private UserService userService;
	
	private User user;
	
	public String login(){
		
		user = userService.login(user);
		
		String path = user == null ? this.INPUT : this.SUCCESS;
		
		session.put("user", user);
		
		return path;
		
	}

	public String getBackendIndex(){
		
		user = (User) session.get("user");
		
		String path = user.getUserState()==1? this.SUCCESS : this.LOGIN;
		
		return path;
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
	
	
	
}
