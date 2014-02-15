package cn.com.service;

import java.util.List;

import cn.com.dao.MessageDAO;
import cn.com.model.Message;

public class MessageService {

	private MessageDAO messageDAO;

	public void addMessage(Message message){
		
		messageDAO.save(message);
	}
	
	/**
	 * 通过Example查询Message
	 * author:Apache
	 * time:2014-1-31 23:03
	 * @param example
	 * @return
	 */
	public List<Message> getMessageByExample(Message example){
		
		return messageDAO.findByExample(example);
	}
	
	/**
	 * 删除Message
	 * author:Apache
	 * time:2014-1-31 23:07
	 * @param message
	 */
	public void deleteMessage(Message message){
		
		try {
			
			messageDAO.deleteMessage(message);
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
			throw new RuntimeException();
		}
		
	}
	
	public boolean batchDeleteMessage(List<Message> list){
		
		boolean flag = false;
		
		try {
			
			for(Message item: list){
				
				this.deleteMessage(item);
			}
		} catch (Exception e) {
			// TODO: handle exception
			
			e.printStackTrace();
		}
		
		
		return flag;
		
	}
	public MessageDAO getMessageDAO() {
		return messageDAO;
	}

	public void setMessageDAO(MessageDAO messageDAO) {
		this.messageDAO = messageDAO;
	}
	
	
}
