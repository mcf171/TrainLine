package cn.com.service.impl;

import java.util.List;

import cn.com.dao.impl.TrainDAO;
import cn.com.model.Train;
import cn.com.service.ITrainService;

public class TrainServiceImpl implements ITrainService {

	private TrainDAO trainDAO;
	
	public List<Train> getTrainList() {
		// TODO Auto-generated method stub
		List<Train> list = trainDAO.findAll();
		return list;
	}

	public TrainDAO getTrainDAO() {
		return trainDAO;
	}

	public void setTrainDAO(TrainDAO trainDAO) {
		this.trainDAO = trainDAO;
	}
	
	


}
