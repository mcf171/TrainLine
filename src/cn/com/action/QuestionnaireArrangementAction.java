package cn.com.action;

import java.util.List;
import java.util.Map;

import cn.com.base.BaseActionSupport;
import cn.com.model.QuestionnaireArrangement;
import cn.com.model.User;
import cn.com.service.QuestionnaireArrangementService;

public class QuestionnaireArrangementAction extends BaseActionSupport{
	
	private Map<String,Object> dataMap;
	private QuestionnaireArrangementService questionnaireArrangementService;
	private QuestionnaireArrangement questionnaireArrangement;
	private String[] userId;
	
	/**后台获得增加问卷安排页面
	 * author:Apache
	 * time:2014-1-20 21:50
	 * @return /WEB-INF/jsp/backend/questionnaire/addQuestionnaireArrangement.jsp
	 */
	public String getAddQuestionnaireArrangementPage(){
		
		return this.SUCCESS;
	}
	
	/**
	 * 获取后台显示所有问卷安排列表页面
	 * author: Apache
	 * time: 2014-1-22 17:01
	 * @return /WEB-INF/jsp/backend/questionnaire/questionnaireArrangementList.jsp
	 */
	public String getQuestionnaireArrangementListPage(){
		
		return this.SUCCESS;
	}

	/**
	 * 后台获取所有问卷安排
	 * author:Apache
	 * time:2014-1-22 17:04
	 * @return
	 */
	public String getQuestionnaireArrangementList(){
		
		List<QuestionnaireArrangement> list = questionnaireArrangementService.getAllQuestionnaireArrangement();
		
		dataMap.put("list", list);
		
		return this.SUCCESS;
	}
	
	/**
	 * 后台删除QuestinonaireArrangement
	 * author:Apache
	 * time: 2014-1-22 15:47
	 * @return
	 */
	public String deleteQuestionnaireArrangement(){
		
		questionnaireArrangementService.deleteQuestionnaireArrangement(questionnaireArrangement);
		
		return this.SUCCESS;
	}
	
	/**
	 * 后台增加问卷安排
	 * author:Apache
	 * time:2014-1-23 12:00
	 * @return
	 */
	public String addQuestionnaireArrangement(){
		
		questionnaireArrangement.setUser((User) session.get("user"));
		int questionnaireArrangementId = questionnaireArrangementService.addQuestionnaireArrangement(questionnaireArrangement);
		questionnaireArrangement.setQuestionnaireArrangementId(questionnaireArrangementId);
		questionnaireArrangement.setQuestionArrangementState(1);
		questionnaireArrangementService.distributeQuestionnaireArrangementToUser(userId, questionnaireArrangement);
		
		return this.SUCCESS;
	}
	
	/**
	 * 获取前台问卷安排页面
	 * author : Apache
	 * time : 2014-1-23
	 * @return /WEB-INF/jsp/questionnaire.jsp
	 */
	public String getQuestionnaireArrangePage(){
		
		questionnaireArrangement = questionnaireArrangementService.getQuestionnaireArrangementById(questionnaireArrangement.getQuestionnaireArrangementId());
		
		request.setAttribute("questionnaireArrangement", questionnaireArrangement);
		
		return this.SUCCESS;
	}
	
	public Map<String, Object> getDataMap() {
		return dataMap;
	}

	public void setDataMap(Map<String, Object> dataMap) {
		this.dataMap = dataMap;
	}

	public QuestionnaireArrangementService getQuestionnaireArrangementService() {
		return questionnaireArrangementService;
	}

	public void setQuestionnaireArrangementService(
			QuestionnaireArrangementService questionnaireArrangementService) {
		this.questionnaireArrangementService = questionnaireArrangementService;
	}
	
	public QuestionnaireArrangement getQuestionnaireArrangement() {
		return questionnaireArrangement;
	}

	public void setQuestionnaireArrangement(
			QuestionnaireArrangement questionnaireArrangement) {
		this.questionnaireArrangement = questionnaireArrangement;
	}

	public String[] getUserId() {
		return userId;
	}

	public void setUserId(String[] userId) {
		this.userId = userId;
	}

	
	

}
