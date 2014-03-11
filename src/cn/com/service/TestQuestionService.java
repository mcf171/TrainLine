package cn.com.service;

import java.io.File;
import java.util.Calendar;
import java.util.List;

import jxl.Cell;
import jxl.Sheet;
import jxl.Workbook;

import cn.com.dao.CourseDAO;
import cn.com.dao.TestpaperDAO;
import cn.com.dao.TestquestionDAO;
import cn.com.model.Course;
import cn.com.model.Questionnaire;
import cn.com.model.QuestionnaireChoose;
import cn.com.model.Questionnairerubric;
import cn.com.model.TestQuestionItem;
import cn.com.model.Testpaper;
import cn.com.model.Testquestion;
import cn.com.util.GlobalConstant;
import cn.com.util.UploadUtil;
import cn.com.util.WebUtil;

public class TestQuestionService {
	
	private TestquestionDAO testquestionDAO;
	private TestQuestionItemService testQuestionItemService;
	private CourseDAO courseDAO;
	private TestpaperDAO testPaperDAO;

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

	/**
	 * 批量上传试卷题目
	 * @author Apache
	 * @time 2014-3-11 2:21
	 * @param file
	 * @param uploadFileName
	 * @return
	 */
	public boolean batchUpload(File file, String uploadFileName) {
		// TODO Auto-generated method stub

		boolean flag = false;
		
		try{
		
		String time = Calendar.getInstance().getTimeInMillis() + "";
		String saveFileName = time +  uploadFileName.substring(uploadFileName.lastIndexOf("."));
		String savePath = WebUtil.getWebSitePhysalPath() + GlobalConstant.SAVEPATH_TEMP + saveFileName;
		File dstFile = new File(savePath);
		UploadUtil.copyFile(file, dstFile);
		
		Workbook book = Workbook.getWorkbook(new File(savePath));
        // 获得第一个工作表对象
        Sheet sheet = book.getSheet(0);
        // 得到第一列第一行的单元格
        int rows = sheet.getRows();
        for(int i=1 ; i < rows ; i++){
        	
        	Cell[] cells = sheet.getRow(i);
        	Testquestion testQuestion = new Testquestion();
        	String[]correctAnswer = cells[13].getContents().split(",");
        	int testQuestionId;
        	for(int j=0 ; j< cells.length; j++){
        		
        		switch(j){
        		
        		case 0: testQuestion.setTestQuestionName(cells[j].getContents());break;
        		case 1: testQuestion.setDegreeOfDifficulty(Integer.parseInt(cells[j].getContents()));break;
        		case 2: testQuestion.setTestType(cells[j].getContents());break;
        		case 3: testQuestion.setScore(Integer.parseInt(cells[j].getContents()));break;
        		case 4: 
        			List<Course> courses = courseDAO.findByCourseCode(cells[j].getContents());
        			if(courses.size() >1){
        				throw new RuntimeException();
        			}
        			testQuestion.setCourse(courses.get(0));break;
        			
        		case 6:;
        		case 7:;
        		case 8:;
        		case 9:;
        		case 10:;
        		case 11:;
        		case 12:;
        		case 5:
        			boolean testFlag = false;
        			if(!testQuestion.getTestType().equals("3")){
        				
        				int index = j-5;
        				String indexString = index +"";
        				for(String item : correctAnswer){
        					
        					testFlag = item.equals(indexString) == true ? true :false;
        				}
        			}
        			TestQuestionItem testQuestionItem = new TestQuestionItem();
        			testQuestionItem.setTestQuestionItemContent(cells[j].getContents());
        			testQuestionItem.setTestQuestion(testQuestion);
        			testQuestionItem.setFlag(testFlag);
        			int testQuestionItemId = testQuestionItemService.add(testQuestionItem);
        			testQuestionItem = testQuestionItemService.findById(testQuestionItemId);
        			testQuestion.getTestQuestionChooses().add(testQuestionItem);
        		}
        		
        	}
        	testquestionDAO.save(testQuestion);
        }
        
        book.close();
        
        dstFile.delete();
        flag = true;
		}
		catch(Exception e){
			e.printStackTrace();
			flag = false;
			throw new RuntimeException();
		}
		return flag;
	}

	public CourseDAO getCourseDAO() {
		return courseDAO;
	}

	public void setCourseDAO(CourseDAO courseDAO) {
		this.courseDAO = courseDAO;
	}

	public TestpaperDAO getTestPaperDAO() {
		return testPaperDAO;
	}

	public void setTestPaperDAO(TestpaperDAO testPaperDAO) {
		this.testPaperDAO = testPaperDAO;
	}

	/**
	 * 批量删除
	 * @author Apache
	 * @time 2014-3-11 3:04
	 * @param testQuestionIds
	 * @return
	 */
	public boolean batchDelete(String[] testQuestionIds) {
		// TODO Auto-generated method stub
		
		boolean flag = false;
		
		try {
			
			for(String item : testQuestionIds){
				
				int testQuestionId = Integer.parseInt(item);
				Testquestion testQuestion = testquestionDAO.findById(testQuestionId);
				testquestionDAO.delete(testQuestion);
			}
			flag = true;
			
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
			flag = false;
			throw new RuntimeException();
		}
		
		return false;
	}

	
	
	
}
