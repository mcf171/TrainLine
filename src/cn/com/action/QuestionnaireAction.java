package cn.com.action;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import cn.com.base.BaseActionSupport;
import cn.com.model.Questionnaire;
import cn.com.service.QuestionnaireService;

public class QuestionnaireAction extends BaseActionSupport{
	private QuestionnaireService questionnairerService;
	private List<Questionnaire> qList;
	private Map<String,Object> dataMap;
	private Questionnaire questionnaire;
	
	
	public QuestionnaireAction()
	{
		dataMap = new HashMap<String, Object>();
	}

	/**
	 * 返回指定questionnaire页面
	 * author:Apache
	 * time:2014-2-13 18:17
	 * @return
	 */
	public String showQuestionnaire(){
		
		questionnaire = questionnairerService.getQuestionnaire(questionnaire);
		request.setAttribute("questionnaire", questionnaire);
		return this.SUCCESS;
	}
	
	public String findAllQuestionnare()throws Exception{
		if(questionnaire!=null)
		{
			qList = questionnairerService.findByConditions(questionnaire);
		}else {
			qList = questionnairerService.findAll();
		}
		
		dataMap.put("qList",qList);
		return SUCCESS;
	}
	
	public String getQuestionnaireById()
	{
		if(questionnaire!=null){
			questionnaire =questionnairerService.getQuestionnaire(questionnaire);
		}
		dataMap.put("questionnaire", questionnaire);
		return this.SUCCESS;
	}
	
	public String deleteQuestionaire()
	{
		questionnairerService.delete(questionnaire);
		return this.SUCCESS;
	}
	
	public String updateQuestion()
	{
		if(questionnaire!=null)
		{
			questionnairerService.update(questionnaire);
		}
		return this.SUCCESS;
	}
	
	public String intoQuestionnairePage(){
		
		return this.SUCCESS;
	}
	
	/***
	 * 后台获得增加问卷的页面
	 * author:Apache
	 * time:2014-1-20 11:00
	 * @return /WEB-INF/jsp/backend/questionnaire/addQuestionnaire.jsp
	 */
	public String getAddQuestionnairePage(){
		
		return this.SUCCESS;
	}
	
	/***
	 * 后台增加Questionnaire 并跳转至增加题目页面
	 * author:Apache
	 * time:2014-1-20 11:00
	 * @return /WEB-INF/jsp/backend/questionnaire/addQuestionnaire.jsp
	 */
	public String addQuestionnaire(){
		
		int questionnaireId = questionnairerService.insert(questionnaire);
		
		request.setAttribute("questionnaireId", questionnaireId);
		
		return this.SUCCESS;
	}

	public void setQuestionnairerService(QuestionnaireService questionnairerService) {
		this.questionnairerService = questionnairerService;
	}


	public List<Questionnaire> getqList() {
		return qList;
	}


	public void setqList(List<Questionnaire> qList) {
		this.qList = qList;
	}

	public Map<String, Object> getDataMap() {
		return dataMap;
	}


	public void setDataMap(Map<String, Object> dataMap) {
		this.dataMap = dataMap;
	}


	public QuestionnaireService getQuestionnairerService() {
		return questionnairerService;
	}


	public Questionnaire getQuestionnaire() {
		return questionnaire;
	}


	public void setQuestionnaire(Questionnaire questionnaire) {
		this.questionnaire = questionnaire;
	}

}
