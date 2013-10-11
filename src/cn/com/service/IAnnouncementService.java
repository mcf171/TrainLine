package cn.com.service;

import java.util.List;

import cn.com.model.Announcement;

public interface IAnnouncementService {

	public List<Announcement>getCourceList();
	
	public List<Announcement>getExamList();
	
	public Announcement getAnnouncementById(Announcement announcement);

}
