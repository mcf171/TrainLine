package cn.com.dao;

import junit.framework.TestCase;

import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import cn.com.model.Trainingclass;

public class TestTrainingClassDAO extends TestCase {

	@Test
	public void testDelete(){
		ApplicationContext ac =  new ClassPathXmlApplicationContext("applicationContext.xml");
		TrainingclassDAO trainingClassDAO = (TrainingclassDAO)ac.getBean("TrainingclassDAO");
		Trainingclass trainingClass = new Trainingclass();
		trainingClass.setTrainingClassId(16);
		trainingClassDAO.delete(trainingClass);
	}
}
