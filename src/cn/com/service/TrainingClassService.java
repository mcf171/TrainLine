package cn.com.service;

import java.io.File;
import java.util.Calendar;
import java.util.List;

import jxl.Cell;
import jxl.Sheet;
import jxl.Workbook;

import cn.com.dao.CourseDAO;
import cn.com.dao.TrainingclassDAO;
import cn.com.model.Classandcourse;
import cn.com.model.Classcase;
import cn.com.model.Course;
import cn.com.model.Testpaper;
import cn.com.model.Trainingclass;
import cn.com.util.GlobalConstant;
import cn.com.util.UploadUtil;
import cn.com.util.WebUtil;

public class TrainingClassService {
	
	private TrainingclassDAO trainingclassDAO;
	private CourseDAO courseDAO;
	
	public Integer insert(Trainingclass trainingclass)
	{
		int trainingClassId;
		try{
			trainingClassId = trainingclassDAO.save(trainingclass);
		}catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
			throw new RuntimeException();
		}
		return trainingClassId;
	}

	public void delete(Trainingclass trainingclass)
	{
		trainingclassDAO.delete(trainingclass);
	}
	
	public void update(Trainingclass trainingclass)
	{
		try {
			
			trainingclassDAO.merge(trainingclass);
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
			throw new RuntimeException();
		}
		
	}

	public Trainingclass getTrainingclass(Integer trainingclassId)
	{
		
		return trainingclassDAO.findById(trainingclassId);
	}
	
	public List<Trainingclass> findAll(){
		return trainingclassDAO.findAll();
		
	}
	
	public TrainingclassDAO getTrainingclassDAO() {
		return trainingclassDAO;
	}

	public void setTrainingclassDAO(TrainingclassDAO trainingclassDAO) {
		this.trainingclassDAO = trainingclassDAO;
	}

	public List<Trainingclass> findByConditions(Trainingclass trainingclass) {
		return trainingclassDAO.findByConditions(trainingclass);
	}

	public void saveClassAndCourse(Classandcourse classandcourse) {
		trainingclassDAO.saveClassAndCourse(classandcourse);
	}

	public List<Course> getCourseByClassId(Integer classId) {
		List<Course> list =trainingclassDAO.getCourseByClassId( classId);
		return list;
	}

	public void delCourseFClass(Classandcourse classandcourse) {
		trainingclassDAO.delCourseFClass( classandcourse);
	}

	public Classcase getClassCaseById(Integer classId) {
		return trainingclassDAO.getClassCaseById(classId);
	}

	/**
	 * 批量上传班级
	 * @author Apache
	 * @time 2014-3-11 20:56
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
        	Trainingclass trainingClass = new Trainingclass();
        	String[] courseIds = cells[1].getContents().split(",");
        	
        	for(int j=0 ; j< cells.length; j++){
        		
        		switch(j){
        		
        		case 0: trainingClass.setTrainingClassName(cells[j].getContents());break;
        		case 1:
        			List<Course> courses = courseDAO.findByCourseCode(cells[j].getContents());
        			if(courses.size() >1){
        				throw new RuntimeException();
        			}
        			trainingClass.getCourses().add(courses.get(0));
        			break;
        		}
        		
        	}
        	trainingClass.setTrainingClassStatus(1);
        	trainingclassDAO.save(trainingClass);
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
	

	
}
