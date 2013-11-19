package cn.com.interceptor;

import javax.servlet.http.HttpServletRequest;

import org.apache.struts2.ServletActionContext;

import cn.com.util.InterceptorUtil;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionInvocation;
import com.opensymphony.xwork2.interceptor.AbstractInterceptor;

public class GlobalInterceptor extends AbstractInterceptor{

	private static String basePath;

	@Override
	public String intercept(ActionInvocation invocation) throws Exception {
		// TODO Auto-generated method stub
		
		ActionContext ctx = invocation.getInvocationContext();
		
		HttpServletRequest request =  (HttpServletRequest) ctx.get(ServletActionContext.HTTP_REQUEST);
		
		if(basePath == null){
			
			basePath = InterceptorUtil.getBasePath(request);
		}
		
		request.setAttribute("basePath", basePath);
		
		String result = invocation.invoke();
		
		return result;
	}
	
	
}
