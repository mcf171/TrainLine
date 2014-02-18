package cn.com.action;

import java.util.List;
import java.util.Map;

import cn.com.base.BaseActionSupport;
import cn.com.model.Questionnairerubric;
import cn.com.service.QuestionnaireChooseService;
import cn.com.service.QuestionnairerubricService;
/**
 * 
 * @author zongyulang
 *
 */
public class QuestionnaireRubricAction extends BaseActionSupport{
	
	private List<Questionnairerubric> qrList = null;
	private QuestionnairerubricService questionnairerubricService;
	private QuestionnaireChooseService questionnaireChooseService;
	private Questionnairerubric questionnaireRubric;
	private String[] questionnaireChooses;
	
	private Map<String, Object>dataMap;
	/**
	 * 返回所有的问卷题目
	 * @return
	 */
	public String findAllQRubric()
	{
		setQrList(questionnairerubricService.findAll());
		session.put("qrList", qrList);
		return SUCCESS;
	}
	/***
	 * 后台增加问卷题目
	 * author:Apache
	 * time:2014-1-20 17:35
	 * @return
	 */
	public String addQuestionnaireRubric(){
		
		int questionnaireRubricId = questionnairerubricService.insert(questionnaireRubric);
		questionnaireRubric = questionnairerubricService.getQuestionnairerubric(questionnaireRubricId);
		questionnaireChooseService.insert(questionnaireChooses,questionnaireRubric);
		dataMap.put("questionnaireRubricId", questionnaireRubricId);
		return this.SUCCESS;
	}
	
	/***
	 * 后台通过Id删除QuestionnaireRubric
	 * author:Apache
	 * time:2014-1-20 19:34
	 * @return
	 */
	public String deleteQuestionnaireRubric(){
		
		questionnairerubricService.delete(questionnaireRubric);
		return this.SUCCESS;
	}
	

	public QuestionnairerubricService getQuestionnairerubricService() {
		return questionnairerubricService;
	}

	public void setQuestionnairerubricService(QuestionnairerubricService questionnairerubricService) {
		this.questionnairerubricService = questionnairerubricService;
	}

	public List<Questionnairerubric> getQrList() {
		return qrList;
	}

	public void setQrList(List<Questionnairerubric> qrList) {
		this.qrList = qrList;
	}

	public Questionnairerubric getQuestionnaireRubric() {
		return questionnaireRubric;
	}

	public void setQuestionnaireRubric(Questionnairerubric questionnaireRubric) {
		this.questionnaireRubric = questionnaireRubric;
	}
	public Map<String, Object> getDataMap() {
		return dataMap;
	}
	public void setDataMap(Map<String, Object> dataMap) {
		this.dataMap = dataMap;
	}
	public String[] getQuestionnaireChooses() {
		return questionnaireChooses;
	}
	public void setQuestionnaireChooses(String[] questionnaireChooses) {
		this.questionnaireChooses = questionnaireChooses;
	}
	public QuestionnaireChooseService getQuestionnaireChooseService() {
		return questionnaireChooseService;
	}
	public void setQuestionnaireChooseService(
			QuestionnaireChooseService questionnaireChooseService) {
		this.questionnaireChooseService = questionnaireChooseService;
	}
	
	
	
}
