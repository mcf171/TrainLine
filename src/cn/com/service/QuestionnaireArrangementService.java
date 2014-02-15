package cn.com.service;

import java.sql.Timestamp;
import java.util.List;

import cn.com.dao.QuestionnaireArrangementDAO;
import cn.com.model.Message;
import cn.com.model.QuestionnaireArrangement;
import cn.com.model.User;

public class QuestionnaireArrangementService {
	
	private QuestionnaireArrangementDAO questionnaireArrangementDAO;
	private MessageService messageService;
	private UserService userService;

	/**
	 * 获得所有QuestionnaireArrangement的List
	 * author:Apche
	 * time:2014-1-22 17:00
	 * @return
	 */
	public List<QuestionnaireArrangement> getAllQuestionnaireArrangement(){
		
		return questionnaireArrangementDAO.findAll();
	}
	
	/**
	 * 根据Id删除QuestionnaireArrangement
	 * author:Apache
	 * time:2014-1-22 17:44
	 * @param questionnaireArrangement
	 * @return
	 */
	public boolean deleteQuestionnaireArrangement(QuestionnaireArrangement questionnaireArrangement){
		
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
	public int addQuestionnaireArrangement(QuestionnaireArrangement questionnaireArrangement){

		return  questionnaireArrangementDAO.save(questionnaireArrangement);
		
	}
	
	/**
	 * 通过Id获取QuestionnaireArrangement
	 * @param questionnaireArrangementId
	 * @return
	 */
	public QuestionnaireArrangement getQuestionnaireArrangementById(int questionnaireArrangementId){
		
		return questionnaireArrangementDAO.findById(questionnaireArrangementId);
	}
	
	/**
	 * 根据传入的UserId进行分发问卷调查通知
	 * author:Apache
	 * time:2014-1-23 12:52
	 * @param userId 如果为null则给所有人分发，否则则给指定UserId分发
	 * @param questionnaireArrangement
	 */
	public void distributeQuestionnaireArrangementToUser(String[] userId, QuestionnaireArrangement questionnaireArrangement){
		
		if(userId == null){
			
			List<User> list  = userService.getUserList();
			for(User item : list){
				Message message = new Message();
				message.setMessageTime(new Timestamp(System.currentTimeMillis()));
				message.setMessageTitle(questionnaireArrangement.getQuestionArrangementName());
				message.setUrl("getQuestionnaireArrangePage.action?questionnaireArrangement.questionnaireArrangementId="+questionnaireArrangement.getQuestionnaireArrangementId());
				message.setWeight(2);
				message.setUser(item);
				messageService.addMessage(message);
			}
			
		}else{
		
			for(String item : userId){
				Message message = new Message();
				message.setMessageTime(new Timestamp(System.currentTimeMillis()));
				message.setMessageTitle(questionnaireArrangement.getQuestionArrangementName());
				message.setUrl("getQuestionnaireArrangePage.action?questionnaireArrangementId="+questionnaireArrangement.getQuestionnaireArrangementId());
				message.setWeight(2);
				
				User user = new User();
				user.setUserId(Integer.parseInt(item));
				user = userService.getUserById(user);
				message.setUser(user);
				messageService.addMessage(message);
			}
		}
		
		
	}
	
	/**
	 * 更新QuestionnaireArrangment
	 * author:Apache
	 * time:2014-1-31 23:00
	 * @param questionnaireArrangement
	 */
	public void updateQuestionnaireArrangement(QuestionnaireArrangement questionnaireArrangement){
		
		try {
			
			Message message = new Message();
			QuestionnaireArrangement temp = questionnaireArrangementDAO.findById(questionnaireArrangement.getQuestionnaireArrangementId());
			message.setMessageTitle(temp.getQuestionArrangementName());
			List<Message> list = messageService.getMessageByExample(message);
			messageService.batchDeleteMessage(list);
			questionnaireArrangementDAO.merge(questionnaireArrangement);
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
			throw new RuntimeException();
		}
		
	}
	
	public QuestionnaireArrangementDAO getQuestionnaireArrangementDAO() {
		return questionnaireArrangementDAO;
	}

	public void setQuestionnaireArrangementDAO(
			QuestionnaireArrangementDAO questionnaireArrangementDAO) {
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
