package cn.com.service;

import java.util.List;

import cn.com.dao.QuestionnaireDAO;
import cn.com.model.Questionnaire;

public class QuestionnaireService {
	private QuestionnaireDAO questionnaireDAO;
	
	public void insert(Questionnaire questionnaire) {
		questionnaireDAO.save(questionnaire);
	}

	public void delete(Questionnaire questionnaire)
	{
		questionnaireDAO.delete(questionnaire);
	}
	
	public void update(Questionnaire questionnaire)
	{
	}

	public Questionnaire getQuestionnaire()
	{
		
		return null;
	}
	
	public List<Questionnaire> findAll(){
		return questionnaireDAO.findAll();
		
	}

	public QuestionnaireDAO getQuestionnaireDAO() {
		return questionnaireDAO;
	}

	public void setQuestionnaireDAO(QuestionnaireDAO questionnaireDAO) {
		this.questionnaireDAO = questionnaireDAO;
	}
}
