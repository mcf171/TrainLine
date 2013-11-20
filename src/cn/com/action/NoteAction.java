package cn.com.action;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import cn.com.base.BaseActionSupport;
import cn.com.model.Note;
import cn.com.service.NoteService;

public class NoteAction extends BaseActionSupport {
	private List<Note> nList;
	private NoteService noteService;
	private Map<String,List> dataMap;
	
	//**查询条件*/
	private String userId;
	private String catalogueId;
	private String noteContent;
	
	
	public NoteAction()
	{
		dataMap = new HashMap<String, List>();
	}


	@SuppressWarnings("unchecked")
	public String findAllNote(){
		nList = noteService.findAll();
		dataMap.put("nList", nList);
		return SUCCESS;
	}
	
	public String searchNote()
	{
		return "search";
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


}
