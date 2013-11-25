package cn.com.util;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class RegEx {
	
	public static boolean isNumber(String string)
	{
		String regex="^[0-9]*$";
		Pattern pat=Pattern.compile(regex);  
		Matcher mat=pat.matcher(string);  
		return mat.matches();
	}
}
