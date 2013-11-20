package cn.com.service.test;

import static org.junit.Assert.*;

import java.util.List;

import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import cn.com.dao.ClasscaseDAO;
import cn.com.dao.CredentialDAO;
import cn.com.dao.TrainingclassDAO;
import cn.com.model.Classcase;
import cn.com.model.Credential;
import cn.com.model.Trainingclass;

public class TestTrainingClass {

	@Test
	public void test() {
		 ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");
		 TrainingclassDAO trainingclassDAO = (TrainingclassDAO) context.getBean("TrainingclassDAO");
		 CredentialDAO credentialDAO = (CredentialDAO) context.getBean("CredentialDAO");
		 ClasscaseDAO classcaseDAO = (ClasscaseDAO) context.getBean("ClasscaseDAO");
		 Trainingclass t  = new Trainingclass();
		 t.setTrainingClassName("软件1103班");
		 t.setTrainingClassStatus(1);
		 
		 Classcase classcase = new Classcase();
		 classcase.setPersonOfHierarchy(34);
		 classcase.setPersonOfSum(35);
		 classcase.setClassContent("ljgkshgkshskhgkidshgirshgishugi");
		 
		 Credential credential =credentialDAO.findById(1);
		 System.out.println("************"+credential.getCredentialName()+"*************");
		 
		 t.setCredential(credential);
		 classcase.setTrainingclass(t);
		 t.setClasscase(classcase);
		 classcaseDAO.save(classcase);
		// trainingclassDAO.save(t);
	
	}

}
