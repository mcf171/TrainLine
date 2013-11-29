package cn.com.service;

import java.util.List;

import cn.com.dao.NoticeDAO;

public class NoticeService {
 
	private NoticeDAO noticeDAO;
	
	public NoticeDAO getNoticeDAO() {
		return noticeDAO;
	}

	public void setNoticeDAO(NoticeDAO noticeDAO) {
		this.noticeDAO = noticeDAO;
	}

	public List getAllNotice(){
		return noticeDAO.findAll();
	}
}
