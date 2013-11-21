package cn.com.service;

import java.util.List;

import cn.com.dao.NoteDAO;
import cn.com.model.Note;

public class NoteService {
	private NoteDAO noteDAO;
	
	public void insert(Note note) {
		noteDAO.save(note);
	}

	public void delete(Note note)
	{
		noteDAO.delete(note);
	}
	
	public void update(Note note)
	{
	}

	public Note getnote()
	{
		
		return null;
	}
	
	public List<Note> findAll(){
		return noteDAO.findAll();
	}

	public List<Note> searchNote(Note note)
	{
		return noteDAO.findByConditions(note);
	}
	
	public NoteDAO getNoteDAO() {
		return noteDAO;
	}

	public void setNoteDAO(NoteDAO noteDAO) {
		this.noteDAO = noteDAO;
	}

}
