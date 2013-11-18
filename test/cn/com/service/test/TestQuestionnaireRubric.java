package cn.com.service.test;

import java.util.List;

import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import cn.com.dao.QuestionnairerubricDAO;
import cn.com.model.Questionnairerubric;

public class TestQuestionnaireRubric {
	
	@Test
	public void testQuestionnaireRubric(){
		 ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");
		 QuestionnairerubricDAO  questionnairerubricDAO = (QuestionnairerubricDAO) context.getBean("QuestionnairerubricDAO");
		 Questionnairerubric questionnairerubric = new Questionnairerubric();
		 questionnairerubric.setQuestionnaireRubricContent("content ****");
		 questionnairerubric.setQuestionnaireRubricId(1);
		 questionnairerubric.setQuestionnaireRubricType(1);
		 questionnairerubricDAO.save(questionnairerubric);
		List<Questionnairerubric> list = questionnairerubricDAO.findAll();
		for (Questionnairerubric q:list) {
			System.out.println("ID:"+q.getQuestionnaireRubricId()+"  content:"+q.getQuestionnaireRubricContent());
		}
	}

}
