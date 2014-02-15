package cn.com.service;

import java.util.List;

import cn.com.dao.QuestionnairerubricDAO;
import cn.com.model.Questionnaire;
import cn.com.model.QuestionnaireRubricResult;
import cn.com.model.Questionnairerubric;

public class QuestionnairerubricService {
	
	private QuestionnairerubricDAO questionnairerubricDAO;
	private QuestionnaireRubricResultService questionnaireRubricResultService;

	/**
	 * 进行保存QuestionnaireRubric并同时保存结果
	 * author:Apache
	 * time:2014-2-1 17:25
	 * @param questionnairerubric
	 * @return
	 */
	public int insert(Questionnairerubric questionnairerubric) {
		
		int questionnaireRubricId = 0;
		try {
		
			questionnaireRubricId = questionnairerubricDAO.save(questionnairerubric);
			questionnairerubric = questionnairerubricDAO.findById(questionnaireRubricId);
			QuestionnaireRubricResult result = new QuestionnaireRubricResult();
			result.setQuestionnaireRubric(questionnairerubric);
			questionnaireRubricResultService.insert(result);

		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
			throw new RuntimeException();
		}
		return questionnaireRubricId;
	}

	public void delete(Questionnairerubric questionnairerubric)
	{
		questionnairerubricDAO.delete(questionnairerubric);
	}
	
	public void update(Questionnairerubric questionnairerubric)
	{
	}

	public Questionnairerubric getQuestionnairerubric(Questionnairerubric questionnairerubric)
	{
		return questionnairerubricDAO.findById(questionnairerubric.getQuestionnaireRubricId());
	}
	
	public List<Questionnairerubric> findAll(){
		return questionnairerubricDAO.findAll();
		
	}

	public QuestionnairerubricDAO getQuestionnairerubricDAO() {
		return questionnairerubricDAO;
	}

	public void setQuestionnairerubricDAO(
			QuestionnairerubricDAO questionnairerubricDAO) {
		this.questionnairerubricDAO = questionnairerubricDAO;
	}

	public QuestionnaireRubricResultService getQuestionnaireRubricResultService() {
		return questionnaireRubricResultService;
	}

	public void setQuestionnaireRubricResultService(
			QuestionnaireRubricResultService questionnaireRubricResultService) {
		this.questionnaireRubricResultService = questionnaireRubricResultService;
	}

	
}
