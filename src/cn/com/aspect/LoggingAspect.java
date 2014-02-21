package cn.com.aspect;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

//@Aspect
public class LoggingAspect {

	private Log log = LogFactory.getLog(this.getClass());
	
	//@Before("execution(* cn.com.action.UserAction.login(..))")
	public void loginBefore(){
//		Map<String,Object> session =  (Map<String,Object>)ActionContext.getContext().getSession();
//		HttpServletRequest request = (HttpServletRequest) ActionContext.getContext().get(ServletActionContext.HTTP_REQUEST);
//		HttpServletResponse response = (HttpServletResponse) ActionContext.getContext().get(ServletActionContext.HTTP_RESPONSE); 
		log.info("the method addBook() begins");
		System.out.println("test");
	}
}
