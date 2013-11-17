package cn.com.action;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import cn.com.base.BaseActionSupport;
import cn.com.model.Book;
import cn.com.service.LiberaryService;

public class LiberaryAction extends BaseActionSupport{

	private LiberaryService liberaryService;
	private Map<String, Object> dataMap;
	
	public LiberaryAction() {
		super();
		// TODO Auto-generated constructor stub
		dataMap = new HashMap<String, Object>();
	}

	public String getInsideLiberaryList(){
		
		List<Book> list = liberaryService.getInsideLiberaryList();
		dataMap.put("liberary", list);
		return this.SUCCESS;
	}

	public LiberaryService getLiberaryService() {
		return liberaryService;
	}

	public void setLiberaryService(LiberaryService liberaryService) {
		this.liberaryService = liberaryService;
	}

	public Map<String, Object> getDataMap() {
		return dataMap;
	}

	public void setDataMap(Map<String, Object> dataMap) {
		this.dataMap = dataMap;
	}
	
	
}
