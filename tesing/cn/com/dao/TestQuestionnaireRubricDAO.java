package cn.com.dao;

import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import cn.com.model.QuestionnaireChoose;
import cn.com.model.Questionnairerubric;

import junit.framework.TestCase;

public class TestQuestionnaireRubricDAO extends TestCase{

	ApplicationContext ac ;
	QuestionnairerubricDAO dao ;
	
	
	public TestQuestionnaireRubricDAO() {
		super();
		// TODO Auto-generated constructor stub
		ac = new ClassPathXmlApplicationContext("applicationContext.xml");
		dao = (QuestionnairerubricDAO) ac.getBean("QuestionnairerubricDAO");
	}


	/**
	 * 测试删除是否删除QuestionnaireItem;
	 * @result true
	 */
	@Test
	public void testDelete(){
		
		Questionnairerubric questionnaireRubric = dao.findById(9);
		dao.delete(questionnaireRubric);
	}
}
