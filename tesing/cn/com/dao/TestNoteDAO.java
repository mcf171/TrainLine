package cn.com.dao;

import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import cn.com.model.Catalogue;
import cn.com.model.Note;
import cn.com.model.Resource;

import junit.framework.TestCase;

public class TestNoteDAO extends TestCase{

	@Test
	public void testGetById(){
		ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");
		NoteDAO noteDAO = (NoteDAO)context.getBean("NoteDAO");
		Note note = noteDAO.findById(5);
		this.assertNotNull(note.getCatalogue());
	}
}
