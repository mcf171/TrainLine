package cn.com.action;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import cn.com.base.BaseActionSupport;
import cn.com.model.Testarrangement;
import cn.com.service.TestArrangementService;

public class TestArrangementAction extends BaseActionSupport{
	private List<Testarrangement> taList;
	private TestArrangementService testArrangementService;
	private Map<String, Object> dataMap;
	private Testarrangement testArrangement;
	
	
	public TestArrangementAction() {
		super();
		dataMap = new HashMap<String, Object>();
		// TODO Auto-generated constructor stub
	}

	public String findAllTestarrangement()
	{
		taList = testArrangementService.findAll();
		super.session.put("taList", taList);
		return SUCCESS;
	}
	
	/**
	 * 获取前台考试中心页面
	 * @return
	 */
	public String getNormalTestArrangementPage(){
		
		
		return this.SUCCESS;
	}
	
	/**
	 * 获取考试页面
	 * @return
	 */
	public String getTestPage(){
		
		testArrangement = testArrangementService.getTestarrangement(testArrangement);
		request.setAttribute("testArrangement", testArrangement);
		
		return this.SUCCESS;
	}
	/**
	 * 获取前台考试中心页面数据
	 * @return
	 */
	public String getTestArrangementList(){
		
		List<Testarrangement> list = testArrangementService.findAll();
		dataMap.put("testArrangementList", list);
		
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

	public Map<String, Object> getDataMap() {
		return dataMap;
	}

	public void setDataMap(Map<String, Object> dataMap) {
		this.dataMap = dataMap;
	}

	public Testarrangement getTestArrangement() {
		return testArrangement;
	}

	public void setTestArrangement(Testarrangement testArrangement) {
		this.testArrangement = testArrangement;
	}

	

}
