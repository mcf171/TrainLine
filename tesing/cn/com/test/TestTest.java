package cn.com.test;

import org.junit.Test;

import junit.framework.TestCase;

public class TestTest extends TestCase {

	@Test
	public void testTestString(){
		
		String str = "123123a";
		this.assertTrue(str.contains("a"));
	}
}
