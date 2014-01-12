package cn.com.interceptor;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;

import org.apache.struts2.ServletActionContext;

import cn.com.util.InterceptorUtil;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionInvocation;
import com.opensymphony.xwork2.interceptor.AbstractInterceptor;

public class GlobalInterceptor extends AbstractInterceptor{

	private static String basePath;
	private static String rootPath;
	private static String physicalPath;

	@Override
	public String intercept(ActionInvocation invocation) throws Exception {
		// TODO Auto-generated method stub
		
		ActionContext ctx = invocation.getInvocationContext();
		
		HttpServletRequest request =  (HttpServletRequest) ctx.get(ServletActionContext.HTTP_REQUEST);
		
		if(rootPath == null){
			
			rootPath = InterceptorUtil.getRootPath(request);
		}
		if(basePath == null){
			
			basePath = InterceptorUtil.getBasePath(request);
		}
		if(physicalPath == null){
			
			ActionContext ac = ActionContext.getContext();   
			ServletContext sc = (ServletContext) ac.get(ServletActionContext.SERVLET_CONTEXT);   
			physicalPath = sc.getRealPath("/");
		}
		
		request.setAttribute("basePath", basePath);
		request.setAttribute("rootPath", rootPath);
		request.setAttribute("physicalPath", physicalPath);
		String result = invocation.invoke();
		
		return result;
	}
	
	
}
