package cn.com.action;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import cn.com.base.BaseActionSupport;
import cn.com.model.Catalogue;
import cn.com.model.Note;
import cn.com.model.Notice;
import cn.com.model.Noticetype;
import cn.com.model.Resource;
import cn.com.model.User;
import cn.com.service.NoteService;
import cn.com.service.NoticeService;
import cn.com.service.ResourceService;

public class NoteAction extends BaseActionSupport {
	private List<Note> nList;
	private NoteService noteService;
	
	private NoticeService noticeService;
	private Map<String, List> dataMap;
	private Notice notice;

	// **查询条件*/
	private Note note ;
	private Integer noteId;
	private String userId;
	private String catalogueId;
	private String noteContent;
	private Integer page;
	private List<Notice>noticeList1;
	private List<Notice>noticeList2;
	private List<Notice>noticeList3;

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
	public List<Notice> getNoticeList1() {
		return noticeList1;
	}

	public void setNoticeList1(List<Notice> noticeList1) {
		this.noticeList1 = noticeList1;
	}

	public List<Notice> getNoticeList2() {
		return noticeList2;
	}

	public void setNoticeList2(List<Notice> noticeList2) {
		this.noticeList2 = noticeList2;
	}

	public List<Notice> getNoticeList3() {
		return noticeList3;
	}

	public void setNoticeList3(List<Notice> noticeList3) {
		this.noticeList3 = noticeList3;
	}

	public NoticeService getNoticeService() {
		return noticeService;
	}

	public void setNoticeService(NoticeService noticeService) {
		this.noticeService = noticeService;
	}

	public NoteAction() {
		noticeList1=new ArrayList<Notice>();
		noticeList2=new ArrayList<Notice>();
		noticeList3=new ArrayList<Notice>();
		note =new Note();
		dataMap = new HashMap<String, List>();
	}

	@SuppressWarnings("unchecked")
	public String findAllNote() {
		if (userId != null && !(userId.equals(""))) {
			note.setUserId(Integer.parseInt(userId));
		}
		if (catalogueId != null && !(catalogueId.equals(""))) {
			Catalogue catalogue = new Catalogue();
			catalogue.setCatalogueId(Integer.parseInt(catalogueId));
			note.setCatalogue(catalogue);
		}
		if (noteContent != null && !(noteContent.equals(""))) {
			note.setNoteContent(noteContent);
		}

		if (note == null) {
			nList = noteService.findAll();
		} else {
			nList = noteService.searchNote(note);
		}

		dataMap.put("nList", nList);
		return SUCCESS;
	}

	public String deleteNote()
	{
		Note note = new Note();
		note.setNoteId(noteId);
		noteService.delete(note);
		return SUCCESS;
	}
	
	public String intoStudy() {
		return "intoStudy";
	}

	public String showNotePage() {
		return "showNotePage";
	}

	public String getNoteContent() {
		return noteContent;
	}

	public void setNoteContent(String noteContent) {
		this.noteContent = noteContent;
	}

	public Map<String, List> getDataMap() {
		return dataMap;
	}

	public String getNoticeList(){
		List<Notice> noticeList = new ArrayList<Notice>();
		noticeList = noticeService.getAllNotice();
		for(int i=0;i<noticeList.size();i++){
			int id = noticeList.get(i).getNoticetype().getNoticeTypeId();
			if(id==5){
		           noticeList1.add(noticeList.get(i));
			}
			else if(id==6){
				noticeList2.add(noticeList.get(i));
			}
			else if(id==7){
				noticeList3.add(noticeList.get(i));
			}
		}
		return this.SUCCESS;
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

	public void setNoteService(NoteService noteService) {
		this.noteService = noteService;
	}

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public String getCatalogueId() {
		return catalogueId;
	}

	public void setCatalogueId(String catalogueId) {
		this.catalogueId = catalogueId;
	}

	public Integer getPage() {
		return page;
	}

	public void setPage(Integer page) {
		this.page = page;
	}

	public NoteService getNoteService() {
		return noteService;
	}

	public Note getNote() {
		return note;
	}

	public void setNote(Note note) {
		this.note = note;
	}

	public Integer getNoteId() {
		return noteId;
	}

	public void setNoteId(Integer noteId) {
		this.noteId = noteId;
	}

	public Notice getNotice() {
		return notice;
	}
	public void setNotice(Notice notice) {
		this.notice = notice;
	}

}
