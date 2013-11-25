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
	private Map<Object,List> dataMap;
	private Questionnaire questionnaire;
	
	
	public QuestionnaireAction()
	{
		dataMap = new HashMap<Object, List>();
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
		return JSON;
	}
	
	public String deleteQuestionaire()
	{
		questionnairerService.delete(questionnaire);
		return JSON;
	}
	
	public String updateQuestion()
	{
		if(questionnaire!=null)
		{
			questionnairerService.update(questionnaire);
		}
		return JSON;
	}
	
	public String intoQuestionnairePage(){
		
		return "intoQuestionnairePage";
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


	public Map<Object, List> getDataMap() {
		return dataMap;
	}


	public void setDataMap(Map<Object, List> dataMap) {
		this.dataMap = dataMap;
	}


	public Questionnaire getQuestionnaire() {
		return questionnaire;
	}


	public void setQuestionnaire(Questionnaire questionnaire) {
		this.questionnaire = questionnaire;
	}

}
