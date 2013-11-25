package cn.com.service;

import static org.junit.Assert.*;

import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import cn.com.dao.NoteDAO;
import cn.com.model.Note;

public class TestNote {

	@Test
	public void test() {
		ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");
		NoteDAO noteDAO = (NoteDAO) context.getBean("NoteDAO");
		Note note = new Note();
		note.setNoteId(4);
		noteDAO.delete(note);
	}

}
