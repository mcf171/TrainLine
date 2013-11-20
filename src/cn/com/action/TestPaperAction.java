package cn.com.action;

import java.util.List;

import com.sun.org.apache.bcel.internal.generic.RETURN;

import cn.com.base.BaseActionSupport;
import cn.com.model.Testpaper;
import cn.com.service.TestPaperService;

public class TestPaperAction extends BaseActionSupport {
	private List<Testpaper> tpList;
	private TestPaperService testPaperService;
	
	public String findAllTestPaper()
	{
		tpList= testPaperService.findAll();
		super.session.put("tpList", tpList);
		return SUCCESS;
		
	}
	public List<Testpaper> getTpList() {
		return tpList;
	}

	public void setTpList(List<Testpaper> tpList) {
		this.tpList = tpList;
	}

	public TestPaperService getTestPaperService() {
		return testPaperService;
	}

	public void setTestPaperService(TestPaperService testPaperService) {
		this.testPaperService = testPaperService;
	}

}
