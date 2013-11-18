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
	private Map<Object,List> dataMap;
	
	public NoteAction()
	{
		dataMap = new HashMap<Object, List>();
	}

	@SuppressWarnings("unchecked")
	public String findAllNote(){
		nList = noteService.findAll();
		dataMap.put("nList", nList);
		request.setAttribute("nList", nList);
		return JSON;
	}
	
	
	public Map<Object, List> getDataMap() {
		return dataMap;
	}

	public void setDataMap(Map<Object, List> dataMap) {
		this.dataMap = dataMap;
	}

	public List<Note> getnList() {
		return nList;
	}

	public void setnList(List<Note> nList) {
		this.nList = nList;
	}
//
//	public NoteService getNoteService() {
//		return noteService;
//	}

	public void setNoteService(NoteService noteService) {
		this.noteService = noteService;
	}

}
