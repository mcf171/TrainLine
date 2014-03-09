package cn.com.service;

import java.io.File;
import java.util.Calendar;
import java.util.List;

import jxl.Cell;
import jxl.Sheet;
import jxl.Workbook;

import org.hibernate.dialect.function.PositionSubstringFunction;

import cn.com.dao.PositionDAO;
import cn.com.dao.UserDAO;
import cn.com.model.Position;
import cn.com.model.User;
import cn.com.util.GlobalConstant;
import cn.com.util.MD5;
import cn.com.util.UploadUtil;
import cn.com.util.WebUtil;

public class UserService {

	private UserDAO userDAO;
	private PositionDAO positionDAO;
	

	public boolean deleteUser(User user){
		
		boolean flag = false;
		
		try {
			
		userDAO.delete(user);
		flag = true;
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
			flag =false;
			throw new RuntimeException();
		}
		return flag;
	}
	/**
	 * 批量上传人员
	 * @aturho Apache
	 * @time 2014-3-9 11:19
	 * @param humanService
	 * @param uploadFileName
	 * @return
	 */
	public boolean batchUpload(File file, String uploadFileName) {
		// TODO Auto-generated method stub
		
		boolean flag = false;
		
		try{
		
		String time = Calendar.getInstance().getTimeInMillis() + "";
		String saveFileName = time +  uploadFileName.substring(uploadFileName.lastIndexOf("."));
		String savePath = WebUtil.getWebSitePhysalPath() + GlobalConstant.SAVEPATH_TEMP + saveFileName;
		File dstFile = new File(savePath);
		UploadUtil.copyFile(file, dstFile);
		
		Workbook book = Workbook.getWorkbook(new File(savePath));
        // 获得第一个工作表对象
        Sheet sheet = book.getSheet(0);
        // 得到第一列第一行的单元格
        int rows = sheet.getRows();
        for(int i=1 ; i < rows ; i++){
        	
        	Cell[] cells = sheet.getRow(i);
        	User user = new User();
        	
        	for(int j=0 ; j< cells.length; j++){
        		
        		switch(j){
        		
        		case 0: user.setUserName(cells[j].getContents());break;
        		case 1: user.setUserPassword(cells[j].getContents());break;
        		case 2: user.setUserState(Integer.parseInt(cells[j].getContents()));break;
        		}
        		
        	}
        	user.setUserPassword(MD5.getInstance().getMD5ofStr(user.getUserPassword()));
        	userDAO.save(user);
        }
        
        book.close();
        
        dstFile.delete();
        flag = true;
		}
		catch(Exception e){
			e.printStackTrace();
			flag = false;
			throw new RuntimeException();
		}
		return flag;
	}
	
	
	
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
