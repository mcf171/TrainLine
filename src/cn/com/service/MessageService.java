package cn.com.service;

import cn.com.dao.MessageDAO;
import cn.com.model.Message;

public class MessageService {

	private MessageDAO messageDAO;

	public void addMessage(Message message){
		
		messageDAO.save(message);
	}
	
	public MessageDAO getMessageDAO() {
		return messageDAO;
	}

	public void setMessageDAO(MessageDAO messageDAO) {
		this.messageDAO = messageDAO;
	}
	
	
}
