package cn.com.action;

import java.util.Map;

import cn.com.base.BaseActionSupport;
import cn.com.model.QuestionnaireRubricResult;

public class QuestionnaireRubricResultAction extends BaseActionSupport{
	
	private Map<String,Object> dataMap;
	
	
	public String saveQuestionnaireRubricResult(){
		
		return this.SUCCESS;
	}
	
	/**
	 * 返回得到questionnaireRubricResult的页面
	 * author:Apache
	 * time:2014-2-8 17:30
	 * @return
	 */
	public String getQuestionnaireRubricResult(){
		
		return this.SUCCESS;
	}
	public Map<String, Object> getDataMap() {
		return dataMap;
	}

	public void setDataMap(Map<String, Object> dataMap) {
		this.dataMap = dataMap;
	}

	
	

}
