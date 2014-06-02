package cn.com.action;

import java.io.File;
import java.util.List;
import java.util.Map;

import cn.com.base.BaseActionSupport;
import cn.com.model.User;
import cn.com.service.RecordService;
import cn.com.service.UserService;

public class UserAction extends BaseActionSupport{

	private UserService userService;
	private RecordService recordService;
	private User user;
	private String[] positionIds;
	private String[] roleIds;
	private Map<String, Object> dataMap;

	private File upload;
	private String uploadFileName;
	

	/**
	 * 删除User 
	 * @aurho Apachce
	 * @time 2014-3-9 12:15
	 * @return
	 */
		
	public String deleteUser(){
			
		userService.deleteUser(user);
		
		return this.SUCCESS;
	}
	
	/**
	 * 批量上传人员
	 * @author Apache
	 * @time 2014-3-9 11:14
	 * @return
	 */
	public String batchUploadUser(){
		boolean flag = false;
		try {
			
		 flag = userService.batchUpload(upload, uploadFileName);

		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
			request.setAttribute("msg", flag);
			return this.SUCCESS;
		}
		request.setAttribute("msg", flag);
		
		return this.SUCCESS;
	}
	
	/**
	 * 添加用户
	 * @author Apache
	 * @time 2014-2-22 20:58
	 * @return
	 */
	public String addUser(){
		
		userService.add(user,positionIds, roleIds);
		
		return this.SUCCESS;
	}
	
	/**
	 * 显示用户信息页面
	 * author:Apache
	 * time:2014-2-14 22:15
	 * @return
	 */
	public String getUserInfoPage(){
		
		return this.SUCCESS;
	}
	
	/**
	 * 检验是否存在用户
	 * @return
	 */
	public String checkUser(){
		
		List<User> list =  userService.findUser(user);
		
		boolean flag = list.size() == 0 ? false : true;
		
		dataMap.put("flag", flag);
		
		return this.SUCCESS;
	}
	/**
	 * 验证登陆是否成功
	 * @author Apache
	 * @time 2014-3-4 22:51
	 * @return
	 */
	public String login(){
		
		//user.getUserPassword();
		User temp = (User) session.get("user");
		boolean exitUser = temp == null ? false : true;
		if(!exitUser){
		
			user = userService.login(user);
			
			 boolean flag = user == null ? false : true;
			session.put("user", user);
			request.setAttribute("msg", flag);
		}else{
			
			request.setAttribute("msg", true);
		}
		
		return this.SUCCESS;
		
	}
	/**
	 * 获取首页
	 * @author Apache
	 * @time 2014-3-4 22:58
	 * @return
	 */
	public String getIndex(){
		
		return this.SUCCESS;
	}
	/**
	 * 前台注销
	 * author:Apache
	 * time:2014-1-20 22:17
	 * @return
	 */
	public String logout(){
		
		session.remove("user");
		return this.LOGIN;
	}
	
   
   /**
    * 获取所有用户List
    * author:Apache
    * time:2014-1-22 19:37
    * @return
    */
   public String getAllUser(){
	   
	   List<User> list = userService.getUserList();
	    
	   dataMap.put("list", list);
	   
	   return this.SUCCESS;
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
	public Map<String, Object> getDataMap() {
		return dataMap;
	}
	public void setDataMap(Map<String, Object> dataMap) {
		this.dataMap = dataMap;
	}
	public String[] getPositionIds() {
		return positionIds;
	}
	public void setPositionIds(String[] positionIds) {
		this.positionIds = positionIds;
	}

	public File getUpload() {
		return upload;
	}

	public void setUpload(File upload) {
		this.upload = upload;
	}

	public String getUploadFileName() {
		return uploadFileName;
	}

	public void setUploadFileName(String uploadFileName) {
		this.uploadFileName = uploadFileName;
	}

	public String[] getRoleIds() {
		return roleIds;
	}

	public void setRoleIds(String[] roleIds) {
		this.roleIds = roleIds;
	}

	
}
