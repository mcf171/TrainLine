package cn.com.dao;

import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import cn.com.model.Questionnaire;

import junit.framework.TestCase;

public class TestQuestionnaireDAO extends TestCase {

	ApplicationContext ac;
	QuestionnaireDAO questionnaireDAO;
	
	public TestQuestionnaireDAO() {
		super();
		// TODO Auto-generated constructor stub
		ac =  new ClassPathXmlApplicationContext("applicationContext.xml");
		questionnaireDAO = (QuestionnaireDAO)ac.getBean("QuestionnaireDAO");
	}

	/**
	 * 测试QuestionnaireDAO的Delete操作是否在删除Questionnaire是同事删除QuestionnaireRubric以及QuestionnaireRubricResult
	 * author:Apache
	 * time:2014-2-1 17:58
	 * @result true
	 */
	@Test
	public void testDelete(){
		
		Questionnaire questionnaire =questionnaireDAO.findById(54);
		questionnaireDAO.delete(questionnaire);
	}
	
	/**
	 * 测试更新Questionnaire是否删除QuestionnaireRubric
	 * @result true
	 * @author Apache
	 * @time 2014-2-19 14:00
	 */
	public void testUpdate(){
		
		Questionnaire questionnaire = new Questionnaire();
		questionnaire.setOpen(1);
		questionnaire.setQuestionnaireId(52);
		questionnaire.setQuestionnaireAuthor("53");
		questionnaireDAO.merge(questionnaire);
		
	}
}
