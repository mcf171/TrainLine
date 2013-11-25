package cn.com.util;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;

@Aspect
public class LoggingAspect {

	private Log log = LogFactory.getLog(this.getClass());
	
	@Before("execution(* cn.com.action.LiberaryAction.addBook(..))")
	public void logBefore(){
		log.info("the method addBook() begins");
		System.out.println("test");
	}
}
