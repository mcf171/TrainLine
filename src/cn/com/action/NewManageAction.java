package cn.com.action;



import java.sql.Timestamp;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.apache.struts2.ServletActionContext;

import cn.com.base.BaseActionSupport;
import cn.com.model.Notice;
import cn.com.model.Noticetype;
import cn.com.model.User;
import cn.com.service.NoticeService;

public class NewManageAction extends BaseActionSupport{
  
	private List<Notice> noticeList =null;
	private NoticeService noticeService ;
	private Map<String,Object> dataMap ;
	private List<Noticetype> noticeTypeList ;
	private Notice notice;
	private HttpServletRequest request;
	private HttpSession session;
	private String fromTime;
	private String toTime;
	private int flag;
	
	public int getFlag() {
		return flag;
	}
	public void setFlag(int flag) {
		this.flag = flag;
	}
	public String getFromTime() {
		return fromTime;
	}
	public void setFromTime(String fromTime) {
		this.fromTime = fromTime;
	}
	public String getToTime() {
		return toTime;
	}
	public void setToTime(String toTime) {
		this.toTime = toTime;
	}
	public HttpSession getSession() {
		return session;
	}
	public void setSession(HttpSession session) {
		this.session = session;
	}
	public Notice getNotice() {
		return notice;
	}
	public void setNotice(Notice notice) {
		this.notice = notice;
	}
	public NewManageAction(){
		request=ServletActionContext.getRequest();
		session = request.getSession();
		dataMap = new HashMap<String,Object>();
	}
	 public String show(){
		 return "message";
	 }

	 public Map<String, Object> getDataMap() {
			return dataMap;
		}

		public List<Noticetype> getNoticeTypeList() {
		return noticeTypeList;
	}
	public void setNoticeTypeList(List<Noticetype> noticeTypeList) {
		this.noticeTypeList = noticeTypeList;
	}
		public void setDataMap(Map<String, Object> dataMap) {
			this.dataMap = dataMap;
		}
	 
	public List<Notice> getNoticeList() {
		return noticeList;
	}

	public void setNoticeList(List<Notice> noticeList) {
		this.noticeList = noticeList;
	}
	 
	 public String getAllNotice() throws ParseException{
		 if(flag==1){
			 SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
			 fromTime+=" 00:00:00";
			 toTime+=" 00:00:00";
			 Date date1=df.parse(fromTime);
			 Date date2 =df.parse(toTime);
			 fromTime=df.format(date1);
			 toTime=df.format(date2);
			 Timestamp fromTimeStamp = Timestamp.valueOf(fromTime);
			 Timestamp toTimeStamp = Timestamp.valueOf(toTime);
			 noticeList = noticeService.findByNoticeTime(fromTimeStamp, toTimeStamp);
		 }
		 else if(notice!=null){
			 noticeList = noticeService.findByNoticeExample(notice);
		 }
		 else{
			 noticeList = noticeService.getAllNotice();
		 }
		 dataMap.put("noticeList", noticeList);
		 return this.SUCCESS;
	 }

	 public String getAllNoticeType(){
		 noticeList = noticeService.getAllNotice();
		 noticeTypeList = noticeService.getAllNoticeType();
		 return this.SUCCESS;
	 }
	 
	 public String getType(){
		 noticeTypeList = noticeService.getAllNoticeType();
		 request.setAttribute("typeList", noticeTypeList);
		 return this.SUCCESS;
	 }
	  
	 public String addNews(){
		 if(notice!=null){		
			 Timestamp nowDate =new Timestamp(System.currentTimeMillis());
			 notice.setNoticeTime(nowDate);
			 Noticetype noticeType = new Noticetype();
			 noticeType = noticeService.findNoticetypeById(notice.getNoticetype().getNoticeTypeId());
			 notice.setNoticetype(noticeType);
			 User user = new User();
			 user=(User)session.getAttribute("user");
			 notice.setNoticeAuthor(user.getUserName());
			 noticeService.addNotice(notice);
		 }
	     return this.SUCCESS;
	 }
	 
	 
	public NoticeService getNoticeService() {
		return noticeService;
	}

	public void setNoticeService(NoticeService noticeService) {
		this.noticeService = noticeService;
	}

	
	 
	 
}
