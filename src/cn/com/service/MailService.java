package cn.com.service;

import cn.com.dao.MailDAO;
import cn.com.model.Mail;

public class MailService {

	private MailDAO mailDAO;

	/**
	 * 增加mail并返回增加后的mail
	 * @author Apache
	 * @time 2014-3-3 18:36
	 * @param mail
	 */
	public Mail addMail(Mail mail){
		
		int mailId = mailDAO.save(mail);
		mail  = mailDAO.findById(mailId);
		return mail;
	}
	
	/**
	 * 删除mail
	 * @author Apache
	 * @time 2014-3-3 21:37
	 * @param mail
	 */
	public void delete(Mail mail){
		
		mailDAO.delete(mail);
	}
	
	/**
	 * 通过Id 查询mail
	 * @author Apache
	 * @time 2014-3-3 21:46
	 * @param mailId
	 * @return
	 */
	public Mail findById(int mailId){
		
		Mail mail = mailDAO.findById(mailId);
		
		return mail;
		
	}
	
	public MailDAO getMailDAO() {
		return mailDAO;
	}

	public void setMailDAO(MailDAO mailDAO) {
		this.mailDAO = mailDAO;
	}
	
	
}
