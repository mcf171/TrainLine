package cn.com.util;

import javax.servlet.http.HttpServletRequest;

public class InterceptorUtil {

	public static String getIpAddr(HttpServletRequest request) {  

	    String ip = request.getHeader("x-forwarded-for");  

	    if(ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) {  

	        ip = request.getHeader("PRoxy-Client-IP");  

	    }  

	    if(ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) {  

	        ip = request.getHeader("WL-Proxy-Client-IP");  

	    }  

	    if(ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) {  

	        ip = request.getRemoteAddr();  

	    }  

	    return ip;  

	}    
	
	public static String getURL(HttpServletRequest request){
		
		String url = request.getRequestURI();
		url = url.substring(url.lastIndexOf("/")+1);
		
		return url;
	}
	
	public static String getBasePath(HttpServletRequest request){
		
		String path = request.getContextPath();
		String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
		
		return basePath;
	}
}
