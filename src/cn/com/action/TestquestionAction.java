package cn.com.action;

import java.util.List;

import cn.com.base.BaseActionSupport;
import cn.com.model.Testquestion;
import cn.com.service.TestQuestionService;

public class TestquestionAction extends BaseActionSupport {
	private List<Testquestion> tlist;
	private TestQuestionService testQuestionService;

	public String findAll()
	{
		tlist = testQuestionService.findAll();
		session.put("tlist", tlist);
		return SUCCESS;
	}
	
	public List<Testquestion> getTlist() {
		return tlist;
	}

	public void setTlist(List<Testquestion> tlist) {
		this.tlist = tlist;
	}

	public TestQuestionService getTestQuestionService() {
		return testQuestionService;
	}

	public void setTestQuestionService(TestQuestionService testQuestionService) {
		this.testQuestionService = testQuestionService;
	}

}
