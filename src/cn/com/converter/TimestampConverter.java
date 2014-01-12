package cn.com.converter;

import java.sql.Timestamp;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Map;

import org.apache.struts2.util.StrutsTypeConverter;

public class TimestampConverter extends StrutsTypeConverter {

	@Override
	public Object convertFromString(Map context, String[] values, Class toClass) {
		// TODO Auto-generated method stub
		Timestamp ts = new Timestamp(System.currentTimeMillis());
		if (values != null || values.length > 0) {

			String preString = values[0].substring(0, values[0].indexOf('T'));
			String lastString = values[0].substring(values[0].indexOf('T'));
			String result = preString + lastString;
			try {
				ts = Timestamp.valueOf(result);
				System.out.println(ts);
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
		return ts;
	}

	@Override
	public String convertToString(Map context, Object o) {
		// TODO Auto-generated method stub
	    Timestamp ts = (Timestamp) o;  
        String tsStr = "";  
        DateFormat sdf = new SimpleDateFormat("yyyy/MM/dd HH:mm:ss");  
        try {  
            //方法一  
            tsStr = sdf.format(ts);  
            System.out.println(tsStr);  
        } catch (Exception e) {  
            e.printStackTrace();  
        }  
		return tsStr;
	}

}
