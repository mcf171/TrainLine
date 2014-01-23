package cn.com.service;

import java.util.List;

import cn.com.dao.QuestionnairerubricDAO;
import cn.com.model.Questionnaire;
import cn.com.model.Questionnairerubric;

public class QuestionnairerubricService {
	private QuestionnairerubricDAO questionnairerubricDAO;

	public int insert(Questionnairerubric questionnairerubric) {
		return questionnairerubricDAO.save(questionnairerubric);
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

}
