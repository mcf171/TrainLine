package cn.com.service;

import java.util.List;

import cn.com.dao.TrainingclassDAO;
import cn.com.model.Classandcourse;
import cn.com.model.Classcase;
import cn.com.model.Course;
import cn.com.model.Trainingclass;

public class TrainingClassService {
	private TrainingclassDAO trainingclassDAO;
	
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
	

}
