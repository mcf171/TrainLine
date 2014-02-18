package cn.com.action;

import java.util.Map;

import cn.com.base.BaseActionSupport;
import cn.com.model.Message;
import cn.com.service.MessageService;

public class MessageAction extends BaseActionSupport{

	private MessageService messageService;
	private Message message;
	private Map<String, Object>dataMap;
	
	
	/**
	 * 删除Message
	 * author:Apache
	 * time:2014-2-16 12:28
	 * @return
	 */
	public String deleteMessage(){
		
		messageService.deleteMessage(message);
		
		return this.SUCCESS;
	}
	public MessageService getMessageService() {
		return messageService;
	}
	public void setMessageService(MessageService messageService) {
		this.messageService = messageService;
	}
	public Message getMessage() {
		return message;
	}
	public void setMessage(Message message) {
		this.message = message;
	}
	public Map<String, Object> getDataMap() {
		return dataMap;
	}
	public void setDataMap(Map<String, Object> dataMap) {
		this.dataMap = dataMap;
	}
	
	
	
}
