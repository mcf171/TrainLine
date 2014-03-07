package cn.com.test;

import java.util.Calendar;

import org.junit.Test;

import junit.framework.TestCase;

public class TestTest extends TestCase {

	@Test
	public void testTestString(){
		
		String str = "123123a";
		this.assertTrue(str.contains("a"));
	}
	
	@Test
	public void testTime(){
		
		Calendar rightNow = Calendar.getInstance();
		System.out.println(rightNow.getTimeInMillis());
	
	}
	
	@Test
	public void testConverterDocumentToPDF(){
		
	}
}
