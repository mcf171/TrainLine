package cn.com.service;

import java.util.List;

import cn.com.dao.QuestionnairerubricDAO;
import cn.com.model.Questionnaire;
import cn.com.model.QuestionnaireRubricResult;
import cn.com.model.Questionnairerubric;

public class QuestionnairerubricService {
	
	private QuestionnairerubricDAO questionnairerubricDAO;

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

	/**
	 * 通过ID查询QuestionnaireRubric
	 * @author: Apache
	 * @time: 2014-2-18 12:12
	 * @param questionnairerubric
	 * @return
	 */
	public Questionnairerubric getQuestionnairerubric(int questionnaireRubricId)
	{
		return questionnairerubricDAO.findById(questionnaireRubricId);
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
