package cn.com.action;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import cn.com.base.BaseActionSupport;
import cn.com.model.Testpaper;
import cn.com.model.Testquestion;
import cn.com.service.TestPaperService;

public class TestPaperAction extends BaseActionSupport {
	
	private List<Testpaper> tpList;
	private TestPaperService testPaperService;
	private Map<String, Object> dataMap;
	
	
	
	public TestPaperAction() {
		super();
		dataMap = new HashMap<String, Object>();
		// TODO Auto-generated constructor stub
	}

	public String findAllTestPaper()
	{
		tpList= testPaperService.findAll();
		super.session.put("tpList", tpList);
		return SUCCESS;
		
	}
	
	public String getExaminations(){
		
		return this.SUCCESS;
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

	public Map<String, Object> getDataMap() {
		return dataMap;
	}

	public void setDataMap(Map<String, Object> dataMap) {
		this.dataMap = dataMap;
	}
	
	
}
