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
	
	public QuestionnaireAction()
	{
		dataMap = new HashMap<Object, List>();
	}

	
	public String findAllQuestionnare()throws Exception{
		qList = questionnairerService.findAll();
		dataMap.put("qList",qList);
		//request.setAttribute("qList", qList);
		return JSON;
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

}
