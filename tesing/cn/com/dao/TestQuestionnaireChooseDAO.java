package cn.com.dao;

import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import cn.com.model.QuestionnaireChoose;

import junit.framework.TestCase;

public class TestQuestionnaireChooseDAO extends TestCase{

	@Test
	/**
	 * 测试QuestionnaireDAO更新时是否只更新count
	 * @author:Apache
	 * @time:2014-2-18 15:10
	 * @result failure
	 */
	public void testUpdate(){
		
		ApplicationContext ac = new ClassPathXmlApplicationContext("applicationContext.xml");
		QuestionnaireChooseDAO dao = (QuestionnaireChooseDAO) ac.getBean("QuestionnaireChooseDAO");
		QuestionnaireChoose data = new QuestionnaireChoose();
		data.setQuestionnaireChooseId(9);
		data.setCount(3);
		dao.merge(data);
	}
}
