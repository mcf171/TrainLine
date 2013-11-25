package cn.com.action;

import junit.framework.TestCase;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class TestLiberaryAction extends TestCase {

	public void testAddBook(){
		
		ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");
		LiberaryAction liberaryAction = (LiberaryAction)context.getBean("liberaryAction");
		
		this.assertNotNull(liberaryAction.addBook());
	}
}
