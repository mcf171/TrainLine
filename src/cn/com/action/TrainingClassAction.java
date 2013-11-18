package cn.com.action;

import java.util.List;

import cn.com.base.BaseActionSupport;
import cn.com.model.Trainingclass;
import cn.com.service.TrainingClassService;

public class TrainingClassAction extends BaseActionSupport {
	private List<Trainingclass> tcList;
	private TrainingClassService trainingClassService;

	public String findAll()
	{
		tcList = trainingClassService.findAll();
		super.session.put("tcList", tcList);
		return SUCCESS;
		
	}
	
	public List<Trainingclass> getTcList() {
		return tcList;
	}

	public void setTcList(List<Trainingclass> tcList) {
		this.tcList = tcList;
	}

	public TrainingClassService getTrainingClassService() {
		return trainingClassService;
	}

	public void setTrainingClassService(
			TrainingClassService trainingClassService) {
		this.trainingClassService = trainingClassService;
	}

}
