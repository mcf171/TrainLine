package cn.com.action;

import java.util.List;

import cn.com.base.BaseActionSupport;
import cn.com.model.User;
import cn.com.service.IUserService;


public class UserAction extends BaseActionSupport {
	private User user;
	private IUserService userService;
	private List<User> list;

	/**
	 ע*用户注册
	 * @return
	 * @throws Exception
	 */
	public String register() throws Exception{
		
		boolean falg = false;
		if(user!=null){
				falg = userService.add(user);
				
		}
		if (falg) {
			return SUCCESS;
		}

		return FAIL;
	}

	/**
	 * 用户登录
	 * @return
	 * @throws Exception
	 */
	public String login() throws Exception{
		
		boolean isLogin = false;
		if(user!=null && userService.checkUser(user)){
			isLogin = true;
			session.put("user", user);
		}
		if(isLogin){
			return SUCCESS;
		}else{
		
			request.setAttribute("error", "error");
			return LOGIN;
		}
		
	}


	public IUserService getuserService() {
		return userService;
	}

	public void setuserService(IUserService userService) {
		this.userService = userService;
	}


	public void setList(List<User> uList) {
		this.list = uList;
	}

	public List<User> getList() {
		return list;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

}
