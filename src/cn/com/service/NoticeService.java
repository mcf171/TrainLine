package cn.com.service;

import java.sql.Timestamp;
import java.util.List;

import cn.com.dao.NoticeDAO;
import cn.com.dao.NoticetypeDAO;
import cn.com.model.Notice;
import cn.com.model.Noticetype;

public class NoticeService {
 
	private NoticeDAO noticeDAO;
	private NoticetypeDAO noticeTypeDAO;
	
	public NoticetypeDAO getNoticeTypeDAO() {
		return noticeTypeDAO;
	}

	public void setNoticeTypeDAO(NoticetypeDAO noticeTypeDAO) {
		this.noticeTypeDAO = noticeTypeDAO;
	}

	public NoticeDAO getNoticeDAO() {
		return noticeDAO;
	}

	public void setNoticeDAO(NoticeDAO noticeDAO) {
		this.noticeDAO = noticeDAO;
	}

	public List getAllNotice(){
		return noticeDAO.findAll();
	}
	
	public List getAllNoticeType(){
		return noticeTypeDAO.findAll();
	}
	public List findByNoticeExample(Notice notice){
		return noticeDAO.findByNoticeExample(notice);
	}
	
	public void addNotice(Notice notice){
		noticeDAO.save(notice);
	}
	
	public Noticetype findById(int id){
		return noticeTypeDAO.findById(id);
	}
	
	public List findByNoticeTime(Timestamp fromTime, Timestamp toTime){
		return noticeDAO.findByNoticeTime(fromTime, toTime);
	}
}
