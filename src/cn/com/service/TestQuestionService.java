package cn.com.service;

import java.util.List;

import cn.com.dao.TestquestionDAO;
import cn.com.model.TestQuestionItem;
import cn.com.model.Testquestion;

public class TestQuestionService {
	
	private TestquestionDAO testquestionDAO;
	private TestQuestionItemService testQuestionItemService;

	public List<Testquestion> getTestQuestion(Testquestion testquestion){
	
		List<Testquestion> list = testquestionDAO.findByExample(testquestion);
		
		return list;
	}
	
	public Testquestion getTestquestionById(Testquestion testquestion){
		
		return testquestionDAO.findById(testquestion.getTestQuestionId());
	}
	
	/**
	 * 增加问卷题目
	 * @author Apache
	 * @time 2014-2-26 11:18
	 * @param testQuestion
	 * @param danxuanstandardAnswer
	 * @param danxuantestAnswerIntroduce
	 * @param duoxuanstandardAnswer
	 * @param duoxuantestAnswerIntroduce
	 */
	public void insert(Testquestion testQuestion, String danxuanstandardAnswer, String[] danxuantestAnswerIntroduce, String[] duoxuanstandardAnswer, String[] duoxuantestAnswerIntroduce) {
		
		try {
			int testQuestionId = testquestionDAO.save(testQuestion);
			testQuestion = testquestionDAO.findById(testQuestionId);
			
			if(danxuanstandardAnswer!=null){
				
				for(int i = 0; i < danxuantestAnswerIntroduce.length; i++){
					
					TestQuestionItem testQuestionItem = new TestQuestionItem();
					testQuestionItem.setTestQuestion(testQuestion);
					testQuestionItem.setTestQuestionItemContent(danxuantestAnswerIntroduce[i]);
					testQuestionItem.setFlag(i+1 == Integer.parseInt(danxuanstandardAnswer)? true: false);
					
					int testQuetionItemId = testQuestionItemService.add(testQuestionItem);
					testQuestionItem = testQuestionItemService.findById(testQuetionItemId);
					testQuestion.getTestQuestionChooses().add(testQuestionItem);
				}
			}else{
				
				for(int i = 0; i < duoxuantestAnswerIntroduce.length; i++){
					
					TestQuestionItem testQuestionItem = new TestQuestionItem();
					testQuestionItem.setTestQuestion(testQuestion);
					testQuestionItem.setTestQuestionItemContent(duoxuantestAnswerIntroduce[i]);
					
					boolean flag = false;
					for(String item: duoxuanstandardAnswer){
						
						flag = Integer.parseInt(item) == i+1 ? true : false;
					}
					testQuestionItem.setFlag(flag);
					
					int testQuetionItemId = testQuestionItemService.add(testQuestionItem);
					testQuestionItem = testQuestionItemService.findById(testQuetionItemId);
					testQuestion.getTestQuestionChooses().add(testQuestionItem);
				}
			}
			
			testquestionDAO.save(testQuestion);
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
			throw new RuntimeException();
		}
	}

	public void delete(Testquestion testQuestion)
	{
		testquestionDAO.delete(testQuestion);
	}
	
	public void update(Testquestion testQuestion)
	{
	}

	public Testquestion getTestQuestion()
	{
		
		return null;
	}
	
	public List<Testquestion> findAll(){
		return testquestionDAO.findAll();
		
	}
	
	public TestquestionDAO getTestquestionDAO() {
		return testquestionDAO;
	}

	public void setTestquestionDAO(TestquestionDAO testquestionDAO) {
		this.testquestionDAO = testquestionDAO;
	}

	public List<Testquestion> getquestionList() {
		// TODO Auto-generated method stub
		List list;
		try {
			
			list = testquestionDAO.findAll();
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
			throw new RuntimeException();
		} 
		return list;
	}

	public TestQuestionItemService getTestQuestionItemService() {
		return testQuestionItemService;
	}

	public void setTestQuestionItemService(
			TestQuestionItemService testQuestionItemService) {
		this.testQuestionItemService = testQuestionItemService;
	}
	
}
