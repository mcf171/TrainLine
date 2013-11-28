package cn.com.service;

import java.util.List;

import cn.com.dao.RecordDAO;
import cn.com.dao.UserDAO;
import cn.com.model.Record;
import cn.com.model.User;

public class UserService {

	private UserDAO userDAO;
	
	public User login(User user){
		
		List<User>list =  userDAO.findByExample(user);
		
		user = list.size() == 1 ? list.get(0) : null;
		
		return user;
	}
    
	public UserDAO getUserDAO() {
		return userDAO;
	}

	public void setUserDAO(UserDAO userDAO) {
		this.userDAO = userDAO;
	}
	
	
	
}
