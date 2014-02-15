package cn.com.service;

import java.util.List;

import cn.com.dao.QuestionnaireDAO;
import cn.com.model.Questionnaire;

public class QuestionnaireService {
	private QuestionnaireDAO questionnaireDAO;
	
	/**
	 * 增加questionnaire 并返回Id
	 * @param questionnaire
	 * @return
	 */
	public int insert(Questionnaire questionnaire) {
		return questionnaireDAO.save(questionnaire);
	}

	/**
	 * 删除Questionnaire
	 * author:Apache
	 * modifyTime:2014-2-1 17:53
	 * @param questionnaire
	 */
	public void delete(Questionnaire questionnaire)
	{
		try {
		
			questionnaireDAO.delete(questionnaire);
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
			throw new RuntimeException();
		}
	}
	
	public void update(Questionnaire questionnaire)
	{
		questionnaireDAO.update(questionnaire);
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

	public List<Questionnaire> findByConditions(Questionnaire questionnaire) {
		return questionnaireDAO.findByConditions(questionnaire);
	}

	/**
	 * 通过指定Id获取Questionnaire
	 * @param questionnaire
	 * @return
	 */
	public Questionnaire getQuestionnaire(Questionnaire questionnaire) {
		return questionnaireDAO.findById(questionnaire.getQuestionnaireId());
		
	}
}
