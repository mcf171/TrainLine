package cn.com.action;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import cn.com.base.BaseActionSupport;
import cn.com.model.Note;
import cn.com.service.NoteService;
//test
public class NoteAction extends BaseActionSupport {
	private List<Note> nList;
	private NoteService noteService;
	private Map<String,List> dataMap;
	private Note note;
	
	//**查询条件*/
	private Integer noteId;
	private Integer catalogueId;
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
	
	public Integer getNoteId() {
		return noteId;
	}

	public void setNoteId(Integer noteId) {
		this.noteId = noteId;
	}

	public Integer getCatalogueId() {
		return catalogueId;
	}

	public void setCatalogueId(Integer catalogueId) {
		this.catalogueId = catalogueId;
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

	public NoteService getNoteService() {
		return noteService;
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

	public Note getNote() {
		return note;
	}

	public void setNote(Note note) {
		this.note = note;
	}

}
