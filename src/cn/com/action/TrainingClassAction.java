package cn.com.action;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import cn.com.base.BaseActionSupport;
import cn.com.model.Trainingclass;
import cn.com.service.TrainingClassService;

public class TrainingClassAction extends BaseActionSupport {
	private List<Trainingclass> tcList;
	private TrainingClassService trainingClassService;
	private Map<String, List> dataMap;
	

	public TrainingClassAction() {
		dataMap = new HashMap<String, List>();
	}

	public String findAllTrainingClass()
	{
		tcList = trainingClassService.findAll();
		dataMap.put("tcList", tcList);
		return SUCCESS;
		
	}
	
	public List<Trainingclass> getTcList() {
		return tcList;
	}

	public void setTcList(List<Trainingclass> tcList) {
		this.tcList = tcList;
	}


	public void setTrainingClassService(
			TrainingClassService trainingClassService) {
		this.trainingClassService = trainingClassService;
	}

	public Map<String, List> getDataMap() {
		return dataMap;
	}

	public void setDataMap(Map<String, List> dataMap) {
		this.dataMap = dataMap;
	}

}
