package cn.com.dao;

import java.util.List;

import junit.framework.TestCase;

import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import cn.com.model.Notice;
import cn.com.model.Noticetype;

public class TestNoticeDAO extends TestCase {

	@Test
	public void testGetNoticeByExampleByPage(){
		ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");
		NoticeDAO noticeDAO = (NoticeDAO)context.getBean("noticeDAO");
		Notice notice = new Notice();
		Noticetype noticeType = new Noticetype();
		noticeType.setNoticeTypeId(1);
		notice.setNoticetype(noticeType);
		
		List list = noticeDAO.findByNoticeExample(notice, 0, 5);
		this.assertNotNull(list);
	}
}
