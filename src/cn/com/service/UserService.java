package cn.com.service;

import java.util.List;

import org.hibernate.dialect.function.PositionSubstringFunction;

import cn.com.dao.PositionDAO;
import cn.com.dao.UserDAO;
import cn.com.model.Position;
import cn.com.model.User;
import cn.com.util.MD5;

public class UserService {

	private UserDAO userDAO;
	private PositionDAO positionDAO;
	
	/**
	 * 增加用户,并同时将职业赋予
	 * @author Apache
	 * @time 2014-2-22 21:20
	 * @param user
	 * @return
	 */
	public boolean add(User user,String[] positions){
		
		boolean flag = false;
		
		for(String item : positions){
			
			Position position = positionDAO.findById(Integer.parseInt(item));
			user.getPositions().add(position);
		}
		
		user.setUserPassword(MD5.getInstance().getMD5ofStr(user.getUserPassword()));
		
		try {
		
			userDAO.save(user);
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
			throw new RuntimeException();
		}
		
		return flag;
	}
	
	/**
	 * 通过Id查询User
	 * @author Apache
	 * @time 2014-3-3 21:15
	 * @param userId
	 * @return
	 */
	public User findById(int userId){
		
		User user = userDAO.findById(userId);
		return user;
	}
	
	/**
	 * 模糊查询User
	 * @author Apache
	 * @time 2014-3-3 18:50
	 * @param user
	 * @return
	 */
	public List findUser(User user){
		
		List list = userDAO.findByExample(user);
		
		return list;
	}
	
	public User login(User user){
		
		user.setUserPassword(MD5.getInstance().getMD5ofStr(user.getUserPassword()));
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

	public PositionDAO getPositionDAO() {
		return positionDAO;
	}

	public void setPositionDAO(PositionDAO positionDAO) {
		this.positionDAO = positionDAO;
	}
	
	
	
	
}
