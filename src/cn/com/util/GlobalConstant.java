package cn.com.util;

import java.util.ArrayList;
import java.util.List;


public class GlobalConstant {

	public static String SPLIT_STRING = "~";
	public static String MODIFYURL = "1";
	public static String SAVEPATH_RESOURCE_VIDEO="upload/video/";
	public static String SAVEPATH_RESOURCE_DOCUMENT="upload/document/";
	public static String SAVEPATH_RESOURCE_OTHERS="upload/others/";
	public static String SAVEPATH_BOOk = "upload/liberary/";
	public static String SAVEPATH_COURSE_RESOURCE = "upload/resources/";
	public static String SAVEPATH_TEMP = "upload/temp/";
	
	public static List<String >ALLOW_UPLOAD_DOC = new ArrayList<String>();
	public static List<String >ALLOW_UPLOAD_MEDIO = new ArrayList<String>();
	
	static{
		
		ALLOW_UPLOAD_DOC.add(".ppt");
		ALLOW_UPLOAD_DOC.add(".doc");
		ALLOW_UPLOAD_DOC.add(".pdf");
		ALLOW_UPLOAD_MEDIO.add(".swf");
		ALLOW_UPLOAD_MEDIO.add(".flv");
		ALLOW_UPLOAD_MEDIO.add(".mp4");
	}
}
