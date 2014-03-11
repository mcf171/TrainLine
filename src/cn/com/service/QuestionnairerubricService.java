package cn.com.service;

import java.io.File;
import java.util.Calendar;
import java.util.List;

import jxl.Cell;
import jxl.Sheet;
import jxl.Workbook;

import cn.com.dao.QuestionnaireChooseDAO;
import cn.com.dao.QuestionnaireDAO;
import cn.com.dao.QuestionnairerubricDAO;
import cn.com.model.Questionnaire;
import cn.com.model.QuestionnaireChoose;
import cn.com.model.QuestionnaireRubricResult;
import cn.com.model.Questionnairerubric;
import cn.com.util.GlobalConstant;
import cn.com.util.UploadUtil;
import cn.com.util.WebUtil;

public class QuestionnairerubricService {
	
	private QuestionnairerubricDAO questionnairerubricDAO;
	private QuestionnaireDAO questionnaireDAO;
	private QuestionnaireChooseDAO questionnaireChooseDAO;

	/**
	 * 进行保存QuestionnaireRubric并同时保存结果
	 * author:Apache
	 * time:2014-2-1 17:25
	 * @param questionnairerubric
	 * @return
	 */
	public int insert(Questionnairerubric questionnairerubric) {
		
		int questionnaireRubricId = 0;
		try {
		
			questionnaireRubricId = questionnairerubricDAO.save(questionnairerubric);

		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
			throw new RuntimeException();
		}
		return questionnaireRubricId;
	}

	/**
	 * 删除QuestionnaireRubric
	 * @author Apache
	 * @time 2014-3-5 16:20
	 * @param questionnairerubric
	 */
	public void delete(Questionnairerubric questionnairerubric)
	{
		try {
		questionnairerubric = questionnairerubricDAO.findById(questionnairerubric.getQuestionnaireRubricId());
		questionnairerubricDAO.delete(questionnairerubric);

		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
			throw new RuntimeException();
		}
	}
	
	public void update(Questionnairerubric questionnairerubric)
	{
	}

	/**
	 * 通过ID查询QuestionnaireRubric
	 * @author: Apache
	 * @time: 2014-2-18 12:12
	 * @param questionnairerubric
	 * @return
	 */
	public Questionnairerubric getQuestionnairerubric(int questionnaireRubricId)
	{
		return questionnairerubricDAO.findById(questionnaireRubricId);
	}
	
	public List<Questionnairerubric> findAll(){
		return questionnairerubricDAO.findAll();
		
	}

	public QuestionnairerubricDAO getQuestionnairerubricDAO() {
		return questionnairerubricDAO;
	}

	public void setQuestionnairerubricDAO(
			QuestionnairerubricDAO questionnairerubricDAO) {
		this.questionnairerubricDAO = questionnairerubricDAO;
	}

	/**
	 * 批量上传QuestionnaireRubric
	 * @aturho Apache
	 * @time 2014-3-9 11:19
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
        	Questionnairerubric questionnaireRubric = new Questionnairerubric();
        	
        	int questionnaireRubricId;
        	for(int j=0 ; j< cells.length; j++){
        		
        		switch(j){
        		
        		case 0: questionnaireRubric.setQuestionnaireRubricIntroduce(cells[j].getContents());break;
        		case 1: questionnaireRubric.setQuestionnaireRubricType(Integer.parseInt(cells[j].getContents()));break;
        		case 2: questionnaireRubric.setQuestionnaireRubricWeight(Integer.parseInt(cells[j].getContents()));break;
        		case 3: 
        			List<Questionnaire> questionnaires = questionnaireDAO.findByQuestionnaireNumber(cells[j].getContents());
        			if(questionnaires.size() >1){
        				throw new RuntimeException();
        			}
        			questionnaireRubric.setQuestionnaire(questionnaires.get(0));
        			questionnaireRubricId = questionnairerubricDAO.save(questionnaireRubric);
        			questionnaireRubric  =questionnairerubricDAO.findById(questionnaireRubricId);
        			break;
        		case 4:;
        		case 5:;
        		case 6:;
        		case 7:;
        		case 8:;
        		case 9:;
        		case 10:;
        		case 11:
        			
        			QuestionnaireChoose questionnaireChoose = new QuestionnaireChoose();
        			questionnaireChoose.setCount(0);
        			questionnaireChoose.setQuestionnaireChooseContent(cells[j].getContents());
        			questionnaireChoose.setQuestionnaireRubric(questionnaireRubric);
        			int questionnaireChooseId  = questionnaireChooseDAO.save(questionnaireChoose);
        			questionnaireChoose = questionnaireChooseDAO.findById(questionnaireChooseId);
        			questionnaireRubric.getQuestionnaireChoose().add(questionnaireChoose);
        		}
        		
        	}
        	questionnairerubricDAO.save(questionnaireRubric);
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

	public QuestionnaireDAO getQuestionnaireDAO() {
		return questionnaireDAO;
	}

	public void setQuestionnaireDAO(QuestionnaireDAO questionnaireDAO) {
		this.questionnaireDAO = questionnaireDAO;
	}

	public QuestionnaireChooseDAO getQuestionnaireChooseDAO() {
		return questionnaireChooseDAO;
	}

	public void setQuestionnaireChooseDAO(
			QuestionnaireChooseDAO questionnaireChooseDAO) {
		this.questionnaireChooseDAO = questionnaireChooseDAO;
	}


	
}
