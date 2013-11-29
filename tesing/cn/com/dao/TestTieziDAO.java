package cn.com.dao;

import java.util.List;

import junit.framework.TestCase;

import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import cn.com.model.Tiezi;

public class TestTieziDAO extends TestCase {

	@Test
	public void testFindAll(){
		
		ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");
		TieziDAO tieziDAO = (TieziDAO)context.getBean("TieziDAO");
		List<Tiezi> list = tieziDAO.findAll();
		this.assertNotNull(list.get(0).getTopic());
		//this.assertNotNull(list);
		
	}
	
}
