package cn.com.action;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import cn.com.base.BaseActionSupport;
import cn.com.model.Testarrangement;
import cn.com.model.Testpaper;
import cn.com.model.Trainingclass;
import cn.com.model.User;
import cn.com.service.TestArrangementService;

public class TestArrangementAction extends BaseActionSupport{
	private List<Testarrangement> taList;
	private TestArrangementService testArrangementService;
	private Map<String, Object> dataMap;
	private Testarrangement testArrangement;
	private int testPaperId;
	private int trainClassId;
	
	public TestArrangementAction() {
		super();
		dataMap = new HashMap<String, Object>();
		// TODO Auto-generated constructor stub
	}
	
	/**
	 * 删除TestArrangement
	 * @author:Apache
	 * @time:2014-2-21 15:01
	 * @return
	 */
	public String deleteTestArrangement(){
		
		testArrangementService.delete(testArrangement);
		return this.SUCCESS;
	}
	
	/**
	 * 更新TestArrangement
	 * @author:Apache
	 * @time:2014-2-21 14:30
	 * @return
	 */
	public String updateTestArrangment(){
		
		testArrangementService.update(testArrangement);
		
		return this.SUCCESS;
	}
	
	
	/**
	 * 获取testArrangement更新页面
	 * @author:Apache
	 * @time:2014-2-21 14:14
	 * @return
	 */
	public String getUpdateTestArrangementPage(){
		
		testArrangement = testArrangementService.getTestarrangement(testArrangement.getTestArrangementId());
		request.setAttribute("testArrangement", testArrangement);
		return this.SUCCESS;
	}
	
	public String addTestArrangment(){
		
		testArrangement.setTestpaper(new Testpaper());
		testArrangement.getTestpaper().setTestPaperId(testPaperId);
		testArrangement.setTestState(1);
		testArrangement.setUser((User) session.get("user"));
		testArrangement.setTrainingclass(new Trainingclass());
		testArrangement.getTrainingclass().setTrainingClassId(trainClassId);
		
		testArrangementService.insert(testArrangement);
		
		return this.SUCCESS;
	}
	public String findAllTestarrangement()
	{
		taList = testArrangementService.findAll();
		dataMap.put("taList", taList);
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
		
		testArrangement = testArrangementService.getTestarrangement(testArrangement.getTestArrangementId());
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
	public String getAddTestArrangementPage(){
		
		
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
	public int getTestPaperId() {
		return testPaperId;
	}
	public void setTestPaperId(int testPaperId) {
		this.testPaperId = testPaperId;
	}
	public int getTrainClassId() {
		return trainClassId;
	}
	public void setTrainClassId(int trainClassId) {
		this.trainClassId = trainClassId;
	}

	

}
