package cn.com.dao;

import org.springframework.orm.hibernate3.support.HibernateDaoSupport;

import cn.com.model.TestGrade;

public class TestGradeDAO extends HibernateDaoSupport{

	public int save(TestGrade testGrade) {
			return (Integer) getHibernateTemplate().save(testGrade);
	}

	public void delete(TestGrade persistentInstance) {
			getHibernateTemplate().delete(persistentInstance);
	}
	
	public TestGrade findById(int testQuestionItemId){
		
		TestGrade instance = (TestGrade) getHibernateTemplate().get(
				"cn.com.model.TestGrade", testQuestionItemId);
		
		return instance;
	}
	
	public void update(TestGrade testGrade){
		
		this.getHibernateTemplate().merge(testGrade);
	}
}
