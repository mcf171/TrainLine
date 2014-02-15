package cn.com.service;

import cn.com.dao.QuestionnaireRubricResultDAO;
import cn.com.model.QuestionnaireRubricResult;

public class QuestionnaireRubricResultService {
	
	private QuestionnaireRubricResultDAO questionnaireRubricResultDAO;

	public int insert(QuestionnaireRubricResult questionnaireRubricResult) {
		return questionnaireRubricResultDAO.save(questionnaireRubricResult);
	}
/*
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
*/

	public QuestionnaireRubricResultDAO getQuestionnaireRubricResultDAO() {
		return questionnaireRubricResultDAO;
	}

	public void setQuestionnaireRubricResultDAO(
			QuestionnaireRubricResultDAO questionnaireRubricResultDAO) {
		this.questionnaireRubricResultDAO = questionnaireRubricResultDAO;
	}
	
	
}
