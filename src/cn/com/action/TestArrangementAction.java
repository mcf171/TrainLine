package cn.com.action;

import java.util.List;

import com.sun.net.httpserver.Authenticator.Success;

import cn.com.base.BaseActionSupport;
import cn.com.model.Testarrangement;
import cn.com.service.TestArrangementService;

public class TestArrangementAction extends BaseActionSupport{
	private List<Testarrangement> taList;
	private TestArrangementService testArrangementService;

	public String findAllTestarrangement()
	{
		taList = testArrangementService.findAll();
		super.session.put("taList", taList);
		return SUCCESS;
	}
	
	public String getNormalTestArrangementPage(){
		
		
		return this.SUCCESS;
	}
	
	public String getBackendTestArrangementPage(){
		
		return this.SUCCESS;
	}
	
	public List<Testarrangement> getTaList() {
		return taList;
	}

	public void setTaList(List<Testarrangement> taList) {
		this.taList = taList;
	}

	public TestArrangementService getTestArrangementService() {
		return testArrangementService;
	}

	public void setTestArrangementService(
			TestArrangementService testArrangementService) {
		this.testArrangementService = testArrangementService;
	}

}
