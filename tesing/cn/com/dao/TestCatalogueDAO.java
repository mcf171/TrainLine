package cn.com.dao;

import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import cn.com.model.Catalogue;
import cn.com.model.Resource;

import junit.framework.TestCase;

public class TestCatalogueDAO extends TestCase{

	/***
	 * 测试catalogDAO的delete操作
	 * 测试结果为删除catalog的同时应该删除resource
	 */
	@Test
	public void testDeleteCatalogueDAO(){
		
		ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");
		CatalogueDAO catalogueDAO = (CatalogueDAO)context.getBean("CatalogueDAO");
		
		Catalogue catalogue = catalogueDAO.findById(40);
		for(Resource item : catalogue.getResource()){
			
			System.out.println("resource id : " + item.getResourceId());
		}
		catalogueDAO.delete(catalogue);
		
	}
	
	@Test
	public void testGetById(){
		ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");
		CatalogueDAO catalogueDAO = (CatalogueDAO)context.getBean("CatalogueDAO");
		Catalogue catalogue = catalogueDAO.findById(53);
		this.assertNotNull(catalogue.getNote());
	}
}
