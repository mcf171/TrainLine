package cn.com.action;

import java.util.List;

import cn.com.base.BaseActionSupport;
import cn.com.model.Announcement;
import cn.com.model.Resourse;
import cn.com.service.IAnnouncementService;
import cn.com.service.IResourseService;

public class HomeAction  extends BaseActionSupport{

	private IAnnouncementService announcementService;
	private IResourseService resourseService;
	private Announcement announcement;
	private Resourse resourse;
	
	public String getHomeList(){
		
		List<Announcement>courceList = announcementService.getCourceList();
		
		List<Announcement>examList = announcementService.getExamList();
		List<Resourse> resourseList=resourseService.getResourseList();
		request.setAttribute("courceList", courceList);
		request.setAttribute("examList", examList);
		request.setAttribute("resourseList", resourseList);
		return SUCCESS;
	}

	public String getAnnouncement(){
		
		announcement = announcementService.getAnnouncementById(announcement);
		
		request.setAttribute("announcement", announcement);
		
		return SUCCESS;
	}
	
	public IResourseService getResourseService() {
		return resourseService;
	}

	public void setResourseService(IResourseService resourseService) {
		this.resourseService = resourseService;
	}

	public Resourse getResourse() {
		return resourse;
	}

	public void setResourse(Resourse resourse) {
		this.resourse = resourse;
	}

	public IAnnouncementService getAnnouncementService() {
		return announcementService;
	}

	public void setAnnouncementService(IAnnouncementService announcementService) {
		this.announcementService = announcementService;
	}

	public void setAnnouncement(Announcement announcement) {
		this.announcement = announcement;
	}
	
	
}
