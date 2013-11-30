package cn.com.service;

import java.util.List;

import cn.com.dao.TestpaperDAO;
import cn.com.dao.TestquestionDAO;
import cn.com.model.Testpaper;
import cn.com.model.Testquestion;

public class TestPaperService {
	
	private TestpaperDAO testpaperDAO;
	private TestquestionDAO testquestionDAO;

	public void insert(Testpaper testpaper) {
		testpaperDAO.save(testpaper);
	}

	public void delete(Testpaper testpaper)
	{
		testpaperDAO.delete(testpaper);
	}
	
	public void update(Testpaper testpaper)
	{
	}

	public Testpaper getTestpaper(Testpaper testpaper)
	{
		
		return null;
	}
	
	public List<Testpaper> findAll(){
		return testpaperDAO.findAll();
		
	}
	
	public List<Testquestion> getTestquestionList(){
		
		return testquestionDAO.findAll();
	}
	
	
	public TestquestionDAO getTestquestionDAO() {
		return testquestionDAO;
	}

	public void setTestquestionDAO(TestquestionDAO testquestionDAO) {
		this.testquestionDAO = testquestionDAO;
	}

	public TestpaperDAO getTestpaperDAO() {
		return testpaperDAO;
	}

	public void setTestpaperDAO(TestpaperDAO testpaperDAO) {
		this.testpaperDAO = testpaperDAO;
	}
	

}
