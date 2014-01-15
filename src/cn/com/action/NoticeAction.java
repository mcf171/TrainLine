package cn.com.action;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import cn.com.base.BaseActionSupport;
import cn.com.model.Note;
import cn.com.model.Notice;
import cn.com.model.Noticetype;
import cn.com.model.Resource;
import cn.com.service.NoticeService;
import cn.com.service.ResourceService;
import cn.com.util.Page;

public class NoticeAction extends BaseActionSupport {
	private List<Note> nList;
	private NoticeService noticeService;
	private ResourceService resourceService;
	private Map<String, List> dataMap;
	private Notice notice;
	private int pageNum = 1;
	private int length = 5;
	
	/**
	 * 获取note内容
	 * author: Apache
	 * time:2014-1-12 23:00
	 * @return
	 */
	public String getNoticeContent(){
		
		notice = noticeService.getNoticeById(notice);
		Notice temp = new Notice();
		temp.setNoticetype(notice.getNoticetype());
		List<Notice> list = noticeService.findByNoticeExample(temp);
		Notice preNotice = noticeService.getPreNotice(notice);
		Notice lastNotice = noticeService.getLastNotice(notice);
		request.setAttribute("notice", notice);
		request.setAttribute("preNotice", preNotice);
		request.setAttribute("lastNotice", lastNotice);
		request.setAttribute("list", list);
		return this.SUCCESS;
	}
	

	/**
	 * 前台显示五条课程公告
	 * author: Apache
	 * time:2014-1-13 11:50
	 * author:Apache
	 * modifyTIme:2014-1-15 11:19
	 * @return
	 */
	public String getAllNormalKechengGongGao(){
		/**
		 * 2014-1-15 11:19
		List<Notice> list = noticeService.findNormalKeChengGongGao();		
		request.setAttribute("list", list);
		request.setAttribute("type", "课程公告");
		*/
		List<Notice> list = new ArrayList<Notice>();
		Page page = noticeService.getNoticeByPage(list, notice, pageNum, length);
		request.setAttribute("list", list);
		request.setAttribute("notice", notice);
		request.setAttribute("type", "课程公告");
		request.setAttribute("page", page);
		request.setAttribute("url", "getAllNormalKechengGongGao");
		return this.SUCCESS;
	}
	/**
	 * 前台显示五条考试公告
	 * author: Apache
	 * time:2014-1-13 11:50
	 * author:Apache
	 * modifyTIme:2014-1-15 11:19
	 * @return
	 */
	public String getAllNormalKaoShiGongGao(){
		/**
		List<Notice> list = noticeService.findNormalKaoShiGongGao();
		request.setAttribute("list", list);
		request.setAttribute("type", "考试公告");
		*/
		List<Notice> list = new ArrayList<Notice>();
		Page page = noticeService.getNoticeByPage(list, notice, pageNum, length);
		request.setAttribute("list", list);
		request.setAttribute("notice", notice);
		request.setAttribute("type", "考试公告");
		request.setAttribute("page", page);
		request.setAttribute("url", "getAllNormalKaoShiGongGao");
		return this.SUCCESS;
	}
	
	/***
	 * 获取前台课程公共，考试公告，排行榜
	 * author:Apache
	 * modifyTime:2014-1-15 11:47
	 * @return
	 */
	public String getHomeNotice(){
		
		List<Resource> list = resourceService.getPaiHangBangList();
		List<Notice> noticeList4 = new ArrayList<Notice>();
		Notice notice = new Notice();
		Noticetype noticeType = new Noticetype();
		noticeType.setNoticeTypeId(1);
		notice.setNoticetype(noticeType);
		noticeService.getNoticeByPage(noticeList4, notice, pageNum, length);
		noticeType.setNoticeTypeId(2);
		notice.setNoticetype(noticeType);
		List<Notice> noticeList5 = new ArrayList<Notice>(); 
		noticeService.getNoticeByPage(noticeList5, notice, pageNum, length);
		
		request.setAttribute("noticeList4", noticeList4);
		request.setAttribute("noticeList5", noticeList5);
		request.setAttribute("resourceList", list);
		return this.SUCCESS;
	}
	public NoticeService getNoticeService() {
		return noticeService;
	}

	public void setNoticeService(NoticeService noticeService) {
		this.noticeService = noticeService;
	}

	public NoticeAction() {

		dataMap = new HashMap<String, List>();
	}

	
	public Map<String, List> getDataMap() {
		return dataMap;
	}

	
	public void setDataMap(Map<String, List> dataMap) {
		this.dataMap = dataMap;
	}

	public List<Note> getnList() {
		return nList;
	}

	public void setnList(List<Note> nList) {
		this.nList = nList;
	}

	public Notice getNotice() {
		return notice;
	}
	public void setNotice(Notice notice) {
		this.notice = notice;
	}


	public int getPageNum() {
		return pageNum;
	}


	public void setPageNum(int pageNum) {
		this.pageNum = pageNum;
	}


	public int getLength() {
		return length;
	}


	public void setLength(int length) {
		this.length = length;
	}


	public ResourceService getResourceService() {
		return resourceService;
	}


	public void setResourceService(ResourceService resourceService) {
		this.resourceService = resourceService;
	}

}
