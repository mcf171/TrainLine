package cn.com.service;

import java.sql.Timestamp;
import java.util.List;

import cn.com.dao.QuestionarrangementDAO;
import cn.com.model.Message;
import cn.com.model.Questionarrangement;
import cn.com.model.User;

public class QuestionnaireArrangementService {
	
	private QuestionarrangementDAO questionnaireArrangementDAO;
	private MessageService messageService;
	private UserService userService;

	/**
	 * 获得所有QuestionnaireArrangement的List
	 * author:Apche
	 * time:2014-1-22 17:00
	 * @return
	 */
	public List<Questionarrangement> getAllQuestionnaireArrangement(){
		
		return questionnaireArrangementDAO.findAll();
	}
	
	/**
	 * 根据Id删除QuestionnaireArrangement
	 * author:Apache
	 * time:2014-1-22 17:44
	 * @param questionnaireArrangement
	 * @return
	 */
	public boolean deleteQuestionnaireArrangement(Questionarrangement questionnaireArrangement){
		
		boolean flag = false;
		
		questionnaireArrangementDAO.delete(questionnaireArrangement);
		
		flag = true;
		
		return  flag;
	}
	
	/**
	 * 增加问卷安排
	 * author:Apache
	 * time: 12:00
	 * @param questionnaireArrangement
	 * @return
	 */
	public int addQuestionnaireArrangement(Questionarrangement questionnaireArrangement){

		return  questionnaireArrangementDAO.save(questionnaireArrangement);
		
	}
	
	/**
	 * 根据传入的UserId进行分发问卷调查通知
	 * author:Apache
	 * time:2014-1-23 12:52
	 * @param userId 如果为null则给所有人分发，否则则给指定UserId分发
	 * @param questionnaireArrangement
	 */
	public void distributeQuestionnaireArrangementToUser(String[] userId, Questionarrangement questionnaireArrangement){
		
		if(userId == null){
			
			List<User> list  = userService.getUserList();
			for(User item : list){
				Message message = new Message();
				message.setMessageTime(new Timestamp(System.currentTimeMillis()));
				message.setMessageTitle(questionnaireArrangement.getQuestionArrangementName());
				message.setUrl("getQuestionnaireArrangePage.action?questionnaireArrangementId="+questionnaireArrangement.getQuestionnaireArrangementId());
				message.setWeight(2);
				message.setUser(item);
				messageService.addMessage(message);
			}
			
		}else{
			
			Message message = new Message();
			message.setMessageTime(new Timestamp(System.currentTimeMillis()));
			message.setMessageTitle(questionnaireArrangement.getQuestionArrangementName());
			message.setUrl("getQuestionnaireArrangePage.action?questionnaireArrangementId="+questionnaireArrangement.getQuestionnaireArrangementId());
			message.setWeight(2);
			
			for(String item : userId){
				
				User user = new User();
				user.setUserId(Integer.parseInt(item));
				user = userService.getUserById(user);
				message.setUser(user);
				messageService.addMessage(message);
			}
		}
		
		
	}
	
	public QuestionarrangementDAO getQuestionnaireArrangementDAO() {
		return questionnaireArrangementDAO;
	}

	public void setQuestionnaireArrangementDAO(
			QuestionarrangementDAO questionnaireArrangementDAO) {
		this.questionnaireArrangementDAO = questionnaireArrangementDAO;
	}

	public MessageService getMessageService() {
		return messageService;
	}

	public void setMessageService(MessageService messageService) {
		this.messageService = messageService;
	}

	public UserService getUserService() {
		return userService;
	}

	public void setUserService(UserService userService) {
		this.userService = userService;
	}

}
