package cn.com.service;

import java.util.List;

import cn.com.dao.TestpaperDAO;
import cn.com.model.Testpaper;

public class TestPaperService {
	private TestpaperDAO testpaperDAO;

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
	public TestpaperDAO getTestpaperDAO() {
		return testpaperDAO;
	}

	public void setTestpaperDAO(TestpaperDAO testpaperDAO) {
		this.testpaperDAO = testpaperDAO;
	}
	

}
