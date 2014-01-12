package cn.com.action;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import cn.com.base.BaseActionSupport;
import cn.com.model.Testpaper;
import cn.com.model.Testquestion;
import cn.com.service.TestPaperService;
import cn.com.service.TestQuestionService;

public class TestPaperAction extends BaseActionSupport {
	
	private List<Testpaper> tpList;
	private TestPaperService testPaperService;
	private TestQuestionService testQuestionService; 
	private Map<String, Object> dataMap;
	private Testpaper testPaper;
	private int[] testQuestions;
	private int testQuestion;
	
	public TestPaperAction() {
		super();
		dataMap = new HashMap<String, Object>();
		// TODO Auto-generated constructor stub
	}

	public String findAllTestPaper()
	{
		tpList= testPaperService.findAll();
		dataMap.put("tpList", tpList);
		return SUCCESS;
		
	}
	
	/**
	 * 后台获取已公布状态的试卷
	 * @return
	 */
	public String findOpenTestPaper(){
		List<Testpaper> list = testPaperService.findOpenTestPaper();
		dataMap.put("list", list);
		return this.SUCCESS;
	}
	
	/**
	 * 获取后台保留状态的试卷
	 * @return
	 */
	public String findKeepTestPaper(){
		
		List<Testpaper> list = testPaperService.findKeepTestPaper();
		dataMap.put("list", list);
		return this.SUCCESS;
	}
	/**
	 * 得倒增加试卷页面
	 * @return
	 */
	public String getAddTestPaperPage(){
		
		
		
		return this.SUCCESS;
	}
	public String addTestPaper(){
		
		testPaper.setTestPaperState(1);
		
		for(int item : testQuestions){
			
			Testquestion temp = new Testquestion();
			temp.setTestQuestionId(item);
			temp = testQuestionService.getTestquestionById(temp);
			testPaper.getTestquestions().add(temp);
		}
		
		testPaperService.insert(testPaper);
		return this.SUCCESS;
	}
	/**
	 * 获取后台回收站状态的试卷
	 * @return
	 */
	public String findRubbleTestPaper(){
		List<Testpaper> list = testPaperService.findRubbleTestPaper();
		dataMap.put("list", list);
		return this.SUCCESS;
	}
	public String deleteTestPaper(){
		
		testPaperService.delete(testPaper);
		return this.SUCCESS;
	}
	public String modifyTestPaper(){
		
		if(testPaper.getTestPaperState()!=0&&testPaper.getTestPaperName()==null){
			
			testPaperService.updateState(testPaper);
		}else{
			
			testPaperService.update(testPaper);
		}
		return this.SUCCESS;
	}
	public String getExaminations(){
		
		return this.SUCCESS;
	}
	
	public String getOpenTestPaperPage(){
		
		return this.SUCCESS;
	}
	
	public String getKeepTestPaperPage(){
		
		return this.SUCCESS;
	}
	
	public String getRubbleTestPaperPage(){
		
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

	public Testpaper getTestPaper() {
		return testPaper;
	}

	public void setTestPaper(Testpaper testPaper) {
		this.testPaper = testPaper;
	}

	

	public TestQuestionService getTestQuestionService() {
		return testQuestionService;
	}

	public void setTestQuestionService(TestQuestionService testQuestionService) {
		this.testQuestionService = testQuestionService;
	}

	public int[] getTestQuestions() {
		return testQuestions;
	}

	public void setTestQuestions(int[] testQuestions) {
		this.testQuestions = testQuestions;
	}

	public int getTestQuestion() {
		return testQuestion;
	}

	public void setTestQuestion(int testQuestion) {
		this.testQuestion = testQuestion;
	}


}
