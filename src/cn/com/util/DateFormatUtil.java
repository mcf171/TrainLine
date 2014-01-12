package cn.com.util;

import java.sql.Timestamp;
import java.text.DateFormat;
import java.text.SimpleDateFormat;

public class DateFormatUtil {

	public static String converterToString(Timestamp o){
		
	        String tsStr = "";  
	        DateFormat sdf = new SimpleDateFormat("yyyy/MM/dd HH:mm:ss");  
	        try {  
	            //方法一  
	            tsStr = sdf.format(o);  
	            System.out.println(tsStr);  
	        } catch (Exception e) {  
	            e.printStackTrace();  
	        }
	        return tsStr;
	}
}
