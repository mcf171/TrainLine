package cn.com.service.test;

import static org.junit.Assert.*;

import java.util.List;
import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import cn.com.dao.QuestionnaireDAO;
import cn.com.model.Questionnaire;

public class TestQuestionnare{


	@Test
	public void test() {
		 ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");
		 QuestionnaireDAO questionnaireDAO = (QuestionnaireDAO) context.getBean("QuestionnaireDAO");
		 Questionnaire questionnaire = new Questionnaire("sd", "xuetai", "4534654", 1, null, null);
		 questionnaire.setQuestionnaireId(8);
		 questionnaireDAO.delete(questionnaire);
		List<Questionnaire> list = questionnaireDAO.findAll();
		for (Questionnaire q:list) {
			System.out.println("author:"+q.getQuestionnaireAuthor()+"  ID:"+q.getQuestionnaireId());
		}
	}

}
