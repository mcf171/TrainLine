package cn.com.service;

import java.util.List;

import cn.com.dao.RecordDAO;
import cn.com.dao.UserDAO;
import cn.com.model.Course;
import cn.com.model.Record;
import cn.com.model.User;
import cn.com.util.MD5;

public class UserService {

	private UserDAO userDAO;
	
	public User login(User user){
		
		user.setUserPassword(new MD5().getMD5ofStr(user.getUserPassword()));
		List<User>list =  userDAO.findByExample(user);
		
		user = list.size() == 1 ? list.get(0) : null;
		
		return user;
	}
	
	public List<User> getUserList(){
		
		return userDAO.findAll();
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
