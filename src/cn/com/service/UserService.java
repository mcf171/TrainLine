package cn.com.service;

import java.util.List;

import cn.com.dao.RecordDAO;
import cn.com.dao.UserDAO;
import cn.com.model.Course;
import cn.com.model.Record;
import cn.com.model.User;

public class UserService {

	private UserDAO userDAO;
	
	public User login(User user){
		
		List<User>list =  userDAO.findByExample(user);
		
		user = list.size() == 1 ? list.get(0) : null;
		
		return user;
	}
    
	public User getUserById(User user){
		
		return userDAO.findById(user.getUserId());
	}
	
	public UserDAO getUserDAO() {
		return userDAO;
	}

	public void setUserDAO(UserDAO userDAO) {
		this.userDAO = userDAO;
	}

	public void update(User user) {
		// TODO Auto-generated method stub
		userDAO.merge(user);
	}
	
	
	
}
