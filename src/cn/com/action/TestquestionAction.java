package cn.com.action;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import cn.com.base.BaseActionSupport;
import cn.com.model.Testquestion;
import cn.com.service.TestQuestionService;

public class TestquestionAction extends BaseActionSupport {
	
	private List<Testquestion> tlist;
	private TestQuestionService testQuestionService;
	private Map<String, Object> dataMap;
	private Testquestion testquestion;
	private String danxuanstandardAnswer;
	private String[] danxuantestAnswerIntroduce;
	private String[] duoxuanstandardAnswer;
	private String[] duoxuantestAnswerIntroduce;
	
	public TestquestionAction() {
		super();
		dataMap = new HashMap<String, Object>();
		// TODO Auto-generated constructor stub
	}
	/**
	 * 获取所有试题
	 * @return
	 */
	public String getQuestions(){
		
		List<Testquestion>list = null;
		
		list = testQuestionService.getquestionList();
		
		dataMap.put("testquestionList", list);
		
		return this.SUCCESS;
	}
	/**
	 * 根据Id返回Testquestion
	 * @return
	 */
	public String getTestquestionById(){
		
		testquestion = testQuestionService.getTestquestionById(testquestion);
		
		request.setAttribute("testquestion", testquestion);
		
		return this.SUCCESS;
	}
	/**
	 * 获取增加试题页面
	 * @return
	 */
	public String getAddQuestionPage(){
		
		
		return this.SUCCESS;
	}
	/**
	 * 增加试题
	 * @return
	 */
	public String addTestquestion(){
		
		testQuestionService.insert(testquestion, danxuanstandardAnswer, danxuantestAnswerIntroduce, duoxuanstandardAnswer, duoxuantestAnswerIntroduce);
		
		return this.SUCCESS;
	}
	/**
	 * 获取显示试题列表页面
	 * @return
	 */
	public String getQuestionsPage(){
		
		return this.SUCCESS;
	}
	
	/**
	 * 获取显示修改页面
	 * @return
	 */
	public String getTestquestionModifyPage(){
		
		testquestion = testQuestionService.getTestquestionById(testquestion);
		
		request.setAttribute("testquestion", testquestion);
		return this.SUCCESS;
	}
	public String deleteTestquestion(){
		
		testQuestionService.delete(testquestion);
		return this.SUCCESS;
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
	public Map<String, Object> getDataMap() {
		return dataMap;
	}
	public void setDataMap(Map<String, Object> dataMap) {
		this.dataMap = dataMap;
	}
	public Testquestion getTestquestion() {
		return testquestion;
	}
	public void setTestquestion(Testquestion testquestion) {
		this.testquestion = testquestion;
	}
	public String getDanxuanstandardAnswer() {
		return danxuanstandardAnswer;
	}
	public void setDanxuanstandardAnswer(String danxuanstandardAnswer) {
		this.danxuanstandardAnswer = danxuanstandardAnswer;
	}
	public String[] getDuoxuanstandardAnswer() {
		return duoxuanstandardAnswer;
	}
	public void setDuoxuanstandardAnswer(String[] duoxuanstandardAnswer) {
		this.duoxuanstandardAnswer = duoxuanstandardAnswer;
	}
	public String[] getDanxuantestAnswerIntroduce() {
		return danxuantestAnswerIntroduce;
	}
	public void setDanxuantestAnswerIntroduce(String[] danxuantestAnswerIntroduce) {
		this.danxuantestAnswerIntroduce = danxuantestAnswerIntroduce;
	}
	public String[] getDuoxuantestAnswerIntroduce() {
		return duoxuantestAnswerIntroduce;
	}
	public void setDuoxuantestAnswerIntroduce(String[] duoxuantestAnswerIntroduce) {
		this.duoxuantestAnswerIntroduce = duoxuantestAnswerIntroduce;
	}

	
}
