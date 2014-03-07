package cn.com.action;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import cn.com.base.BaseActionSupport;
import cn.com.model.Mail;
import cn.com.model.User;
import cn.com.service.MailService;
import cn.com.service.UserService;

public class MailAction extends BaseActionSupport{

	private Mail mail ;
	private User reviceUser;
	private MailService mailService;
	private UserService userService;
	private Map<String, Object>dataMap;
	
	public MailAction() {
		
		super();
		System.out.println(1);
		// TODO Auto-generated constructor stub
	}

	/**
	 * 显示邮件
	 * @author Apache
	 * @time 2014-3-3 21:49 
	 * @return
	 */
	public String showMail(){
		
		mail = mailService.findById(mail.getMailId());
		request.setAttribute("mail", mail);
		
		return this.SUCCESS;
	}
	
	/**
	 * 删除mail
	 * @author Apache
	 * @tiem 2014-3-3 21:44
	 * @return
	 */
	
	public String deleteMail(){
		
		mailService.delete(mail);
		return this.SUCCESS;
	}
	
	/**
	 * 增加Mail
	 * @author Apache
	 * @time 2014-3-3 18:44
	 * @return
	 */
	public String addMail(){
		
		List<User> list = userService.findUser(reviceUser);
		reviceUser = list.get(0);
		mail.setReciveUser(reviceUser);
		User sendUser = (User) session.get("user");
		sendUser = userService.findById(sendUser.getUserId());
		mail.setSendUser(sendUser);
		mail.setMailState(1);
		mail.setMailTime(new Timestamp(System.currentTimeMillis()));
		mail = mailService.addMail(mail);
		
		list.get(0).getReviceMail().add(mail);
		sendUser.getSendMail().add(mail);
		userService.update(sendUser);
		userService.update(reviceUser);
		
		return this.SUCCESS;
	}
	
	/**
	 * 获取Email首页页面
	 * author:Apache
	 * time:2014-2-14 22:38
	 * @return
	 */
	public String getEmailHomePage(){
		
		return this.SUCCESS;
	}

	/**
	 * 返回写信页面
	 * author:Apache
	 * time:2014-2-14 22:48
	 * @return
	 */
	public String getWriteEmailPage(){
		
		return this.SUCCESS;
	}
	
	/**
	 * 获取收件箱页面
	 * author:Apache
	 * time:2014-2-14 22:47
	 * @return
	 */
	public String getSendEmail(){
		
		User user = (User) session.get("user");
		user = userService.findById(user.getUserId());
		request.setAttribute("user", user);
		
		return this.SUCCESS;
	}
	
	/**
	 * 返回通讯录页面
	 * author:Apache
	 * time:2014-2-14 22:49
	 * @return
	 */
	public String getReciveEmail(){
		
		User user = (User) session.get("user");
		user = userService.findById(user.getUserId());
		request.setAttribute("user", user);
		
		return this.SUCCESS;
	}

	public Mail getMail() {
		return mail;
	}

	public void setMail(Mail mail) {
		this.mail = mail;
	}

	public User getReviceUser() {
		return reviceUser;
	}

	public void setReviceUser(User reviceUser) {
		this.reviceUser = reviceUser;
	}

	public MailService getMailService() {
		return mailService;
	}

	public void setMailService(MailService mailService) {
		this.mailService = mailService;
	}

	public UserService getUserService() {
		return userService;
	}

	public void setUserService(UserService userService) {
		this.userService = userService;
	}

	public Map<String, Object> getDataMap() {
		return dataMap;
	}

	public void setDataMap(Map<String, Object> dataMap) {
		this.dataMap = dataMap;
	}
	
}
