package cn.com.action;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import cn.com.base.BaseActionSupport;
import cn.com.model.Notice;
import cn.com.service.NoticeService;

public class NewManageAction extends BaseActionSupport{
  
	private List<Notice> noticeList = new ArrayList<Notice>();
	private NoticeService noticeService ;
	private Map<String,Object> dataMap = new HashMap<String,Object>();
	

	 public String show(){
		 return "message";
	 }

	public List<Notice> getNoticeList() {
		return noticeList;
	}

	public void setNoticeList(List<Notice> noticeList) {
		this.noticeList = noticeList;
	}
	 
	 public String getAllNotice(){
		 noticeList = noticeService.getAllNotice();
		 System.out.println(noticeList.size());
		 dataMap.put("noticeList", noticeList);
		 return this.SUCCESS;
	 }

	public NoticeService getNoticeService() {
		return noticeService;
	}

	public void setNoticeService(NoticeService noticeService) {
		this.noticeService = noticeService;
	}
	 
	 
}
