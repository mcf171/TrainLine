package cn.com.dao;

import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import cn.com.model.Questionnaire;

import junit.framework.TestCase;

public class TestQuestionnaireDAO extends TestCase {

	/**
	 * 测试QuestionnaireDAO的Delete操作是否在删除Questionnaire是同事删除QuestionnaireRubric以及QuestionnaireRubricResult
	 * author:Apache
	 * time:2014-2-1 17:58
	 */
	@Test
	public void testDelete(){
	
		ApplicationContext ac =  new ClassPathXmlApplicationContext("applicationContext.xml");
		QuestionnaireDAO questionnaireDAO = (QuestionnaireDAO)ac.getBean("QuestionnaireDAO");
		Questionnaire questionnaire = new Questionnaire();
		questionnaire.setQuestionnaireId(22);
		questionnaireDAO.delete(questionnaire);
	}
}
