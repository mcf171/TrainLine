package cn.com.service.impl;

import java.util.List;

import cn.com.dao.impl.UserDAO;
import cn.com.model.User;
import cn.com.service.IUserService;

public class UserServiceImpl implements IUserService {

	private UserDAO userDao;
	
	public boolean checkUser(User user) {
		// TODO Auto-generated method stub
		
		boolean flag = false;
		
		List<User>list =  userDao.findByUserName(user.getUserName());
		
		if(list.size() != 0){
			String userPassword = list.get(0).getUserPassward();
			if( userPassword.equals(user.getUserPassward()) ){
				
				flag = true;
				
			}
		}
		
		return flag;
	}

	public boolean add(User user) {
		// TODO Auto-generated method stub
		boolean flag = false;
		
		List<User> list = userDao.findByUserName(user.getUserName());
		
		if( list.size() == 0 ){
			flag = true;
			userDao.save(user);
		}
		return flag;
	}

	public UserDAO getUserDao() {
		return userDao;
	}

	public void setUserDao(UserDAO userDao) {
		this.userDao = userDao;
	}
}

	
