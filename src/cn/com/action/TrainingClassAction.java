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
	private Trainingclass trainingclass;
	

	public TrainingClassAction() {
		dataMap = new HashMap<String, List>();
	}

	public String findAllTrainingClass()
	{
		if(trainingclass==null){
			tcList = trainingClassService.findAll();
		}else {
			tcList = trainingClassService.findByConditions(trainingclass);
		}
		
		dataMap.put("tcList", tcList);
		return SUCCESS;
		
	}
	
	public String deleteClass()
	{
		if(trainingclass.getTrainingClassId()!=null)
		{
			trainingClassService.delete(trainingclass);
		}
		return JSON;
	}
	
	public String updateClass()
	{
		if(trainingclass!=null)
		{
			trainingClassService.update(trainingclass);
		}
		return JSON;
	}
	public String intoClasspage()
	{
		return "intoClasspage";
	}
	
	public String classContent()
	{
		return "classContent";
	}
	
	public String intoCertificatePage()
	{
		
		return "intoCertificatePage";
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

	public Trainingclass getTrainingclass() {
		return trainingclass;
	}

	public void setTrainingclass(Trainingclass trainingclass) {
		this.trainingclass = trainingclass;
	}

}
