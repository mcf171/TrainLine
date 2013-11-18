package cn.com.service;

import java.util.List;

import cn.com.dao.TestquestionDAO;
import cn.com.model.Testquestion;

public class TestQuestionService {
	private TestquestionDAO testquestionDAO;

	public void insert(Testquestion testQuestion) {
		testquestionDAO.save(testQuestion);
	}

	public void delete(Testquestion testQuestion)
	{
		testquestionDAO.delete(testQuestion);
	}
	
	public void update(Testquestion testQuestion)
	{
	}

	public Testquestion getTestQuestion()
	{
		
		return null;
	}
	
	public List<Testquestion> findAll(){
		return testquestionDAO.findAll();
		
	}
	
	public TestquestionDAO getTestquestionDAO() {
		return testquestionDAO;
	}

	public void setTestquestionDAO(TestquestionDAO testquestionDAO) {
		this.testquestionDAO = testquestionDAO;
	}
	
}
