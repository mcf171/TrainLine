package cn.com.action;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import cn.com.base.BaseActionSupport;
import cn.com.model.Catalogue;
import cn.com.model.Note;
import cn.com.service.NoteService;
import cn.com.util.RegEx;

public class NoteAction extends BaseActionSupport {
	private List<Note> nList;
	private NoteService noteService;
	private Map<String, List> dataMap;

	// **查询条件*/
	private Note note ;
	private Integer noteId;
	private String userId;
	private String catalogueId;
	private String noteContent;
	private Integer page;

	public NoteAction() {
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

}
