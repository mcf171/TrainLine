package cn.com.util;

import javax.servlet.ServletContext;

import org.apache.struts2.ServletActionContext;

import com.opensymphony.xwork2.ActionContext;

public class WebUtil {

	
	
	public static String getWebSitePhysalPath(){
		String physicalPath;
		ActionContext ac = ActionContext.getContext();   
		ServletContext sc = (ServletContext) ac.get(ServletActionContext.SERVLET_CONTEXT);   
		physicalPath = sc.getRealPath("/");
		return physicalPath;
	}
}
