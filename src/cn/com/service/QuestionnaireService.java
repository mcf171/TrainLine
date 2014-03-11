package cn.com.service;

import java.io.File;
import java.util.Calendar;
import java.util.List;

import jxl.Cell;
import jxl.Sheet;
import jxl.Workbook;

import cn.com.dao.QuestionnaireDAO;
import cn.com.model.Position;
import cn.com.model.Questionnaire;
import cn.com.model.User;
import cn.com.util.DAOUtil;
import cn.com.util.GlobalConstant;
import cn.com.util.MD5;
import cn.com.util.UploadUtil;
import cn.com.util.WebUtil;

public class QuestionnaireService {
	
	private QuestionnaireDAO questionnaireDAO;
	private DAOUtil daoUtil;
	
	/**
	 * 增加questionnaire 并返回Id
	 * @param questionnaire
	 * @return
	 */
	public int insert(Questionnaire questionnaire) {
		return questionnaireDAO.save(questionnaire);
	}

	/**
	 * 删除Questionnaire
	 * author:Apache
	 * modifyTime:2014-2-1 17:53
	 * @param questionnaire
	 */
	public void delete(Questionnaire questionnaire)
	{
		try {
		
			questionnaireDAO.delete(questionnaire);
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
			throw new RuntimeException();
		}
	}
	
	/**
	 * 更新Questionnaire
	 * @author:Apache
	 * @time:2014-2-21 11:05
	 * @param questionnaire
	 */
	public void update(Questionnaire questionnaire)
	{
		questionnaireDAO.merge(questionnaire);
	}

	
	public List<Questionnaire> findAll(){
		return questionnaireDAO.findAll();
		
	}

	public QuestionnaireDAO getQuestionnaireDAO() {
		return questionnaireDAO;
	}

	public void setQuestionnaireDAO(QuestionnaireDAO questionnaireDAO) {
		this.questionnaireDAO = questionnaireDAO;
	}

	public List<Questionnaire> findByConditions(Questionnaire questionnaire) {
		
		return questionnaireDAO.findByExampleFuzzy(questionnaire);
	}

	/**
	 * 通过指定Id获取Questionnaire
	 * @param questionnaire
	 * @return
	 */
	public Questionnaire getQuestionnaire(int questionnaireId) {
		return questionnaireDAO.findById(questionnaireId);
		
	}

	public List<Questionnaire> getQuetionnaireList(int page, int limit,
			Questionnaire questionnaire) {
		// TODO Auto-generated method stub
		daoUtil.setLimit(limit);
		daoUtil.setPage(page);
		
		int firstResults = daoUtil.getFirstResult();
		int maxResults = daoUtil.getMaxResult();
		
		questionnaire = questionnaire == null ? new Questionnaire() : questionnaire;
		
		List<Questionnaire> list = questionnaireDAO.findByPage(firstResults, maxResults, questionnaire);
		
		 return list;
	}

	public int getTotalCount(Questionnaire questionnaire) {
		// TODO Auto-generated method stub
		List<Questionnaire>list = questionnaireDAO.findByExampleFuzzy(questionnaire);
		
		int totalCount = list.size();
		
		return totalCount;
	}

	public DAOUtil getDaoUtil() {
		return daoUtil;
	}

	public void setDaoUtil(DAOUtil daoUtil) {
		this.daoUtil = daoUtil;
	}

	/**
	 * 批量上传Questionnaire
	 * @aturho Apache
	 * @time 2014-3-9 11:19
	 * @param humanService
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
        	Questionnaire questionnaire = new Questionnaire();
        	
        	for(int j=0 ; j< cells.length; j++){
        		
        		switch(j){
        		
        		case 0: questionnaire.setQuestionnaireTitle(cells[j].getContents());break;
        		case 1: questionnaire.setQuestionnaireAuthor(cells[j].getContents());break;
        		case 2: questionnaire.setQuestionnaireNumber(cells[j].getContents());break;
        		}
        		
        	}
        	questionnaireDAO.save(questionnaire);
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
	
	
}
