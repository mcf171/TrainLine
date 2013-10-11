package cn.com.service;

import cn.com.model.User;

public interface IUserService {

	public boolean checkUser(User user);
	
	public boolean add(User user);
}
