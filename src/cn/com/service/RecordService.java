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
	
	public List findAllRecord(){
		return recordDAO.findAll();
	} 
	
	public void delete( int userId){
		Record record = recordDAO.findById(userId);
		recordDAO.delete(record);
	}
	
	public Record findById(int id){
		return recordDAO.findById(id);
	}
	
	public List findByUserId(int userId){
		return recordDAO.findByUserId(userId);
	}
	public Record getRecordById(int userId){
		
		List<Record>list =recordDAO.findByUserId(userId);
		return (Record)list.get(0);
		}
}
