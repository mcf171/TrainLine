package cn.com.dao;

import org.springframework.orm.hibernate3.support.HibernateDaoSupport;

import cn.com.model.Practisingcertificate;
import cn.com.model.TestQuestionItem;
import cn.com.model.Testquestion;

public class TestQuestionItemDAO extends HibernateDaoSupport{

	public int save(TestQuestionItem testQuestionItem) {
			return (Integer) getHibernateTemplate().save(testQuestionItem);
	}

	public void delete(TestQuestionItem persistentInstance) {
			getHibernateTemplate().delete(persistentInstance);
	}
	
	public TestQuestionItem findById(int testQuestionItemId){
		
		TestQuestionItem instance = (TestQuestionItem) getHibernateTemplate().get(
				"cn.com.model.TestQuestionItem", testQuestionItemId);
		
		return instance;
	}
	
	public void update(TestQuestionItem testQuestionItem){
		
		this.getHibernateTemplate().merge(testQuestionItem);
	}
}
