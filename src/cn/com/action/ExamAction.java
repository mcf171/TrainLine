package cn.com.action;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import cn.com.base.BaseActionSupport;
import cn.com.model.Exam;
import cn.com.model.User;
import cn.com.service.IExamService;

public class ExamAction extends BaseActionSupport{

	private Map<String, Object> dataMap;
			
	private IExamService examService; 

	public ExamAction(){
		
		dataMap = new HashMap<String, Object>();
		
	}
	
	public String getExamList(){
		
		User user = (User) session.get("user");
		
		List<Exam> list = examService.getAllExamList();
		
		dataMap.put("examList", list);
		
		return SUCCESS;
	}

	public Map<String, Object> getDataMap() {
		return dataMap;
	}

	public void setDataMap(Map<String, Object> dataMap) {
		this.dataMap = dataMap;
	}

	public IExamService getExamService() {
		return examService;
	}

	public void setExamService(IExamService examService) {
		this.examService = examService;
	}
	
	
}
