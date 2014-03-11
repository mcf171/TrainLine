package cn.com.interceptor;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;

import org.apache.struts2.ServletActionContext;
import org.springframework.context.ApplicationContext;

import cn.com.model.User;
import cn.com.util.InterceptorUtil;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionInvocation;
import com.opensymphony.xwork2.interceptor.AbstractInterceptor;

public class GlobalInterceptor extends AbstractInterceptor{

	private static String basePath;
	private static String rootPath;
	private static String physicalPath;
	private static final List<String>avoidAction;
	
	static{
		
		List<String> actionList = new ArrayList<String>();
		actionList.add("logout.action");
		actionList.add("validCode.action");
		actionList.add("login.action");
		actionList.add("validationCode.action");
		
		avoidAction = Collections.unmodifiableList(actionList);
	}

	@Override
	public String intercept(ActionInvocation invocation) throws Exception {
		// TODO Auto-generated method stub
		
		ActionContext ctx = invocation.getInvocationContext();
		
		HttpServletRequest request =  (HttpServletRequest) ctx.get(ServletActionContext.HTTP_REQUEST);
		ApplicationContext application = (ApplicationContext) ctx.get(ServletActionContext.APPLICATION);
		//application.
		
		//String actionName = invocation.getAction().getClass().getName();
		String url = InterceptorUtil.getURL(request);
		boolean flag = avoidAction.contains(url);
		
		if (request.getRequestURI().contains("/admin/") || url.contains("getBackendIndex")) {
			
			User user = (User) request.getSession().getAttribute("user");
			
			if(user.getUserState() != 1){
				
				flag = false;
			}
			
		}
		
		if(rootPath == null){
			
			rootPath = InterceptorUtil.getRootPath(request);
		}
		if(basePath == null){
			
			basePath = InterceptorUtil.getBasePath(request);
		}
		if(physicalPath == null){
			 
			ServletContext sc = (ServletContext) ctx.get(ServletActionContext.SERVLET_CONTEXT);   
			physicalPath = sc.getRealPath("/");
		}
		
		request.setAttribute("basePath", basePath);
		request.setAttribute("rootPath", rootPath);
		request.setAttribute("physicalPath", physicalPath);
		User user = (User) ctx.getSession().get("user");
		
		String result;
		
		if(user != null || flag){
		result = invocation.invoke();
		}else{
			result = "login";
		}
		return result;
	}
	
	
}
