package cn.com.service;

import java.sql.Timestamp;
import java.util.List;

import cn.com.dao.TestarrangementDAO;
import cn.com.model.TestGrade;
import cn.com.model.TestQuestionItem;
import cn.com.model.Testarrangement;
import cn.com.model.Testquestion;
import cn.com.model.User;

public class TestArrangementService{
	
	private TestarrangementDAO testarrangementDAO;
	private TestQuestionItemService testQuestionItemService;
	private TestGradeService testGradeService;
	
	/**
	 * 保存TestArrangement
	 * @author Apache
	 * @time 2014-2-216 22:19
	 * @param testarrangement
	 */
	public void insert(Testarrangement testarrangement) {
		testarrangementDAO.save(testarrangement);
	}

	
	/**
	 * 完成测试，更新TestArrangement。
	 * @author Apache
	 * @time 2014-2-26 22:21
	 * @param testArrangement
	 * @param testQuestionItemIds
	 * @param user
	 */
	public void finishTest(Testarrangement testArrangement, String[] testQuestionItemIds, User user){
		
		try {
			
			testArrangement = testarrangementDAO.findById(testArrangement.getTestArrangementId());
			
			for(String testQuestionItemId : testQuestionItemIds){
				
				TestQuestionItem testQuestionItem = testQuestionItemService.findById(Integer.parseInt(testQuestionItemId));
				testQuestionItem.getUsers().add(user);
				testQuestionItemService.updateTestQuestionItem(testQuestionItem);
			}
			TestGrade testGrade = this.automaticCheckTestPaper(testArrangement, user);
			testArrangement.getTestGrades().add(testGrade);
			testarrangementDAO.merge(testArrangement);
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
			throw new RuntimeException();
		}
	}
	
	/**
	 * 自动完成阅卷
	 * @author Apache
	 * @time 2014-2-28 21:26
	 * @param testArrangement
	 * @param user
	 * @return
	 */
	public TestGrade automaticCheckTestPaper(Testarrangement testArrangement, User user){
		
		double grade = 0;
		TestGrade testGrade = null;	
		
		for(Testquestion testQuestion : testArrangement.getTestpaper().getTestquestions()){
			
			int testType = Integer.parseInt(testQuestion.getTestType());
			switch(testType){
				
			case 1:
				for(TestQuestionItem testQuestionItem : testQuestion.getTestQuestionChooses()){
					
					if(testQuestionItem.getFlag()){
						System.out.println(testQuestionItem.getUsers().contains(user));
						grade = testQuestionItem.getUsers().contains(user) ? grade+testQuestion.getScore() : grade;
					}
				}break;
			case 2:
				boolean flag = true;
				for(TestQuestionItem testQuestionItem : testQuestion.getTestQuestionChooses()){
					
					if(!testQuestionItem.getFlag()){
						
						flag = testQuestionItem.getUsers().contains(user) ? false : flag;
					}
					
				grade = flag == true ? grade + testQuestion.getScore() : grade;
				}break;
			}
			
			testGrade =  new TestGrade();
			testGrade.setGrade(grade);
			testGrade.setTestArrangement(testArrangement);
			testGrade.setUser(user); 
			int testGradeId = testGradeService.add(testGrade);
			testGrade = testGradeService.findById(testGradeId);
		}
		return testGrade;
	}
	/**
	 * 删除TestArrangement
	 * @author Apache
	 * @time 2014-2-26 22:22
	 * @param testarrangement
	 */
	public void delete(Testarrangement testarrangement)
	{
		testarrangementDAO.delete(testarrangement);
	}
	
	/**
	 * 更新TestArrangement
	 * @author:Apache
	 * @time:2014-2-21 14:28
	 * @param testarrangement
	 */
	public void update(Testarrangement testarrangement)
	{
		testarrangementDAO.merge(testarrangement);
	}

	/**
	 * 通过Id获取TestArrangement
	 * @author:Apache
	 * @time:2014-2-21 11:26
	 * @param testarrangementId
	 * @return
	 */
	public Testarrangement getTestarrangement(int testarrangementId)
	{
		
		Testarrangement testArrangement = testarrangementDAO.findById(testarrangementId);
		Timestamp timeStamp =new Timestamp(System.currentTimeMillis());
		if(testArrangement.getTestStartTime().compareTo(timeStamp) < 0){
			
			testArrangement.setTestState(1);
		}else if(testArrangement.getTestStartTime().compareTo(timeStamp) > 0){
		
			testArrangement.setTestState(3);
		}else{
			
			testArrangement.setTestState(2);
		}
		testarrangementDAO.merge(testArrangement);
		return testArrangement;
		
	}
	
	public List<Testarrangement> findAll()
	{
		return testarrangementDAO.findAll();
	}

	public TestarrangementDAO getTestarrangementDAO() {
		return testarrangementDAO;
	}

	public void setTestarrangementDAO(TestarrangementDAO testarrangementDAO) {
		this.testarrangementDAO = testarrangementDAO;
	}

	public TestQuestionItemService getTestQuestionItemService() {
		return testQuestionItemService;
	}

	public void setTestQuestionItemService(
			TestQuestionItemService testQuestionItemService) {
		this.testQuestionItemService = testQuestionItemService;
	}

	public TestGradeService getTestGradeService() {
		return testGradeService;
	}

	public void setTestGradeService(TestGradeService testGradeService) {
		this.testGradeService = testGradeService;
	}

}
