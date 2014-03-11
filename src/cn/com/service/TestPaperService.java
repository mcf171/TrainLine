package cn.com.service;

import java.io.File;
import java.util.Calendar;
import java.util.List;

import jxl.Cell;
import jxl.Sheet;
import jxl.Workbook;

import cn.com.dao.TestpaperDAO;
import cn.com.dao.TestquestionDAO;
import cn.com.model.Questionnaire;
import cn.com.model.Testpaper;
import cn.com.model.Testquestion;
import cn.com.util.GlobalConstant;
import cn.com.util.UploadUtil;
import cn.com.util.WebUtil;

public class TestPaperService {
	
	private TestpaperDAO testpaperDAO;
	private TestquestionDAO testquestionDAO;

	public void insert(Testpaper testpaper) {
		testpaperDAO.save(testpaper);
	}

	public void delete(Testpaper testpaper)
	{
		testpaperDAO.delete(testpaper);
	}
	
	public void update(Testpaper testpaper)
	{
		testpaperDAO.update(testpaper);
	}
	
	public void updateState(Testpaper testpaper){
		
		Testpaper temp = testpaperDAO.findById(testpaper.getTestPaperId());
		temp.setTestPaperState(testpaper.getTestPaperState());
		this.update(temp);
	}
	public Testpaper getTestpaper(Testpaper testpaper)
	{
		
		return null;
	}
	
	public List<Testpaper> findAll(){
		return testpaperDAO.findAll();
		
	}
	
	public List<Testpaper> findOpenTestPaper(){
		
		List<Testpaper> list = testpaperDAO.findByProperty("testPaperState", 1);
		
		return list;
	}
	
public List<Testpaper> findRubbleTestPaper(){
		
		List<Testpaper> list = testpaperDAO.findByProperty("testPaperState", 3);
		
		return list;
	}

public List<Testpaper> findKeepTestPaper(){
	
	
	List<Testpaper> list = testpaperDAO.findByProperty("testPaperState", 2);
	return list;
}
	
	
	
	public TestquestionDAO getTestquestionDAO() {
		return testquestionDAO;
	}

	public void setTestquestionDAO(TestquestionDAO testquestionDAO) {
		this.testquestionDAO = testquestionDAO;
	}

	public TestpaperDAO getTestpaperDAO() {
		return testpaperDAO;
	}

	public void setTestpaperDAO(TestpaperDAO testpaperDAO) {
		this.testpaperDAO = testpaperDAO;
	}

	/**
	 * 批量上传TestQuestionnaire
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
        	Testpaper testPaper = new Testpaper();
        	
        	for(int j=0 ; j< cells.length; j++){
        		
        		switch(j){
        		
        		case 0: testPaper.setTestPaperName(cells[j].getContents());break;
        		case 1: testPaper.setTestPaperCode(cells[j].getContents());break;
        		}
        		
        	}
        	testPaper.setTestPaperState(1);
        	testpaperDAO.save(testPaper);
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
