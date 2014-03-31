package cn.com.test;

import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Collection;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Properties;
import java.util.Set;

import junit.framework.TestCase;

import org.junit.Test;

import cn.com.util.FlexpaperUtil;

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
	public void testProperties(){
		
		Properties prop = new Properties();
		InputStream in = getClass().getResourceAsStream("/OpenOffice.properties");
		try {
			prop.load(in);
			System.out.println(prop.get("path"));
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	@Test
	public void testConveterDocumentToSwf(){
		
		String physicalSavePath = "D:\\software_exe\\Tomcat\\webapps\\TrainLine\\";
		String savePath = "upload\\liberary\\";
		String docName="1394209225873.doc";
		try {
			FlexpaperUtil.converterDocumentToSWF(physicalSavePath,savePath, docName);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
}
