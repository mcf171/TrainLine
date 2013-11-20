package cn.com.service;

import java.util.List;

import cn.com.dao.TrainingclassDAO;
import cn.com.model.Trainingclass;

public class TrainingClassService {
	private TrainingclassDAO trainingclassDAO;
	
	public void insert(Trainingclass trainingclass)
	{
		trainingclassDAO.save(trainingclass);
	}

	public void delete(Trainingclass trainingclass)
	{
		trainingclassDAO.delete(trainingclass);
	}
	
	public void update(Trainingclass trainingclass)
	{
	}

	public Trainingclass getTrainingclass()
	{
		
		return null;
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
	

}
