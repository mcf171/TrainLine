package cn.com.service;

import java.util.List;

import cn.com.dao.RecordDAO;
import cn.com.model.Record;


public class RecordService {
	private RecordDAO recordDAO;
	
public RecordDAO getRecordDAO() {
		return recordDAO;
	}

	public void setRecordDAO(RecordDAO recordDAO) {
		this.recordDAO = recordDAO;
	}

public Record getRecordById(int userId){
	
	List<Record>list =recordDAO.findByUserId(userId);
	return (Record)list.get(0);
	}
}
