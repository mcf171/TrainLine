package cn.com.action;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import cn.com.base.BaseActionSupport;
import cn.com.model.Train;
import cn.com.model.User;
import cn.com.service.ITrainService;

public class TrainAction extends BaseActionSupport{

	private Map<String, Object> dataMap;
			
	private ITrainService trainService; 

	public TrainAction(){
		
		dataMap = new HashMap<String, Object>();
		
	}
	
	public String getTrainList(){
		
		User user = (User) session.get("user");
		
		List<Train> list = trainService.getTrainList();
		
		dataMap.put("trainList", list);
		
		return SUCCESS;
	}

	public Map<String, Object> getDataMap() {
		return dataMap;
	}

	public void setDataMap(Map<String, Object> dataMap) {
		this.dataMap = dataMap;
	}

	public ITrainService getTrainService() {
		return trainService;
	}

	public void setTrainService(ITrainService trainService) {
		this.trainService = trainService;
	}

}
