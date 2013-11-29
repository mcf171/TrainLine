package cn.com.action;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import cn.com.base.BaseActionSupport;
import cn.com.model.Record;
import cn.com.service.RecordService;

public class RecordAction extends BaseActionSupport{

	private RecordService recordService;
	private List<Record> recordList = new ArrayList<Record>();
	private int userId;
	private int recordId;
	private Map<String, Object> dataMap;
	private Record record;
	private int flag;
	
	public RecordAction() {
		super();
		dataMap =new HashMap<String,Object>();
	}
	public int getRecordId() {
		return recordId;
	}
	public void setRecordId(int recordId) {
		this.recordId = recordId;
	}
	public int getFlag() {
		return flag;
	}
	public void setFlag(int flag) {
		this.flag = flag;
	}
	public Record getRecord() {
		return record;
	}
	public void setRecord(Record record) {
		this.record = record;
	}
	public Map<String, Object> getDataMap() {
		return dataMap;
	}
	public void setDataMap(Map<String, Object> dataMap) {
		this.dataMap = dataMap;
	}
	public int getUserId() {
		return userId;
	}
	public void setUserId(int userId) {
		this.userId = userId;
	}
	public RecordService getRecordService() {
		return recordService;
	}
	public void setRecordService(RecordService recordService) {
		this.recordService = recordService;
	}
	public List<Record> getRecordList() {
		return recordList;
	}
	public void setRecordList(List<Record> recordList) {
		this.recordList = recordList;
	}
	
	public String execute() throws Exception {
		return this.SUCCESS;
	}

	public String getAllRecord(){
		//System.out.println(record.getRecordId());
		if(record!=null){
             if(flag==1){
            	 System.out.println(record.getUserId());
            	 this.recordList = recordService.findByUserId(record.getUserId());
             }
             else if(flag==2){
            	 this.recordList.add(recordService.findById(record.getRecordId()));
             }
		}
		else{
			this.recordList = recordService.findAllRecord();
		}
		dataMap.put("recordList", recordList);
		return this.SUCCESS ;
	}
    
	public String delete(){
		recordService.delete(userId);
		this.recordList = recordService.findAllRecord();
		return "delete";
	}
}
