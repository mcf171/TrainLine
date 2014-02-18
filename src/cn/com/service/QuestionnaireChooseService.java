package cn.com.service;

import java.util.List;

import cn.com.dao.QuestionnaireChooseDAO;
import cn.com.model.Questionnaire;
import cn.com.model.QuestionnaireChoose;
import cn.com.model.Questionnairerubric;

public class QuestionnaireChooseService {
	
	private QuestionnaireChooseDAO questionnaireChooseDAO;

	/**
	 * 进行保存QuestionnaireChoose并同时保存结果
	 * author:Apache
	 * time:2014-2-1 17:25
	 * @param questionnaireChoose
	 * @return
	 */
	public int insert(QuestionnaireChoose questionnaireChoose) {
		
		int questionnaireRubricId = 0;
		try {
		
			questionnaireRubricId = questionnaireChooseDAO.save(questionnaireChoose);

		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
			throw new RuntimeException();
		}
		return questionnaireRubricId;
	}

	/**
	 * 根据传入的字符串数组进行保存questionnaireChoose;
	 * @author:Apache
	 * @time:2014-2-18 12:01
	 * @param questionnaireChooses
	 * @param questionnaireRubric
	 */
	public void insert(String[] questionnaireChooses, Questionnairerubric questionnaireRubric){
		
		for(String item : questionnaireChooses){
			
			QuestionnaireChoose questionnaireChoose = new QuestionnaireChoose();
			questionnaireChoose.setQuestionnaireChooseContent(item);
			questionnaireChoose.setCount(0);
			questionnaireChoose.setQuestionnaireRubric(questionnaireRubric);
			questionnaireChooseDAO.save(questionnaireChoose);
		}
	}
	
	/**
	 * 通过传入的questionnaireChooseId数组进行加一操作
	 * @author:Apache
	 * @time:2014-2-18 15:03
	 * @param questionnaireChooses
	 */
	public void update(String[] questionnaireChooses){
		
		for(String item : questionnaireChooses){
			
			QuestionnaireChoose questionnaireChoose = questionnaireChooseDAO.findById(Integer.parseInt(item));
			questionnaireChoose.setCount(questionnaireChoose.getCount()+1);
			
			questionnaireChooseDAO.merge(questionnaireChoose);
		}
		
	}
	
	public void delete(QuestionnaireChoose questionnaireChoose)
	{
		questionnaireChooseDAO.delete(questionnaireChoose);
	}
	
	public void update(QuestionnaireChoose questionnaireChoose)
	{
	}

	public QuestionnaireChoose getQuestionnaireChoose(QuestionnaireChoose questionnaireChoose)
	{
		return questionnaireChooseDAO.findById(questionnaireChoose.getQuestionnaireChooseId());
	}
	
	public List<QuestionnaireChoose> findAll(){
		return questionnaireChooseDAO.findAll();
		
	}

	public QuestionnaireChooseDAO getQuestionnaireChooseDAO() {
		return questionnaireChooseDAO;
	}

	public void setQuestionnaireChooseDAO(
			QuestionnaireChooseDAO questionnaireChooseDAO) {
		this.questionnaireChooseDAO = questionnaireChooseDAO;
	}


	
}
