package cn.com.service.impl;

import java.util.ArrayList;
import java.util.List;

import cn.com.dao.impl.AnnouncementDAO;
import cn.com.model.Announcement;
import cn.com.service.IAnnouncementService;

public class AnnouncementServiceImpl implements IAnnouncementService{

	private AnnouncementDAO announcementDAO;
	
	public List<Announcement> getCourceList() {
		// TODO Auto-generated method stub
		List<Announcement> list = announcementDAO.findAll();
		List<Announcement> temp = new ArrayList<Announcement>();
		for(Announcement item : list){
			if(item.getAnnouncementType().equals("0")){
				temp.add(item);
			}
		}
		return temp;
	}

	public List<Announcement> getExamList() {
		// TODO Auto-generated method stub
		List<Announcement> list = announcementDAO.findAll();
		List<Announcement> temp = new ArrayList<Announcement>();
		for(Announcement item : list){
			if(item.getAnnouncementType().equals("1")){
				temp.add(item);
			}
		}
		return temp;
	}

	public AnnouncementDAO getAnnouncementDAO() {
		return announcementDAO;
	}

	public void setAnnouncementDAO(AnnouncementDAO announcementDAO) {
		this.announcementDAO = announcementDAO;
	}

	public Announcement getAnnouncementById(Announcement announcement) {
		// TODO Auto-generated method stub
		Announcement item = announcementDAO.findById(announcement.getAnnouncementId());
		return item;
	}

	
}
