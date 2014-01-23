package cn.com.service;

import java.util.List;

import javax.management.RuntimeErrorException;

import cn.com.dao.NoteDAO;
import cn.com.model.Note;

public class NoteService {
	private NoteDAO noteDAO;
	
	/***
	 * 插入笔记，如果存在则更新笔记
	 * author:Apache
	 * modifyTime: 2014-1-20 10:00
	 * @param note
	 */
	public void insert(Note note) {
		try {
			noteDAO.attachDirty(note);
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
			throw new RuntimeException();
		}
		
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
