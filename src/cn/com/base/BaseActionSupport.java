package cn.com.base;

import java.io.IOException;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.struts2.ServletActionContext;
import org.apache.struts2.interceptor.ServletRequestAware;
import org.apache.struts2.interceptor.ServletResponseAware;
import org.apache.struts2.interceptor.SessionAware;

import com.opensymphony.xwork2.ActionSupport;


public class BaseActionSupport extends ActionSupport  implements
SessionAware, ServletResponseAware, ServletRequestAware{
	public static final String INDEX="index";
	public static final String JSON="json";
	public static final String LIST="list";
	public static final String SUCCESS="success";
	public static final String LOGIN="login";
	public static final String FINDALL="findall";
	public static final String FAIL="fail";
	public static final String INPUT="input";

	/**
	 * @Fields session:TODO
	 */
	protected Map session;

	protected HttpServletResponse response;

	protected HttpServletRequest request;
	
	/**
	 * 绕过Template,直接输出内容的简便函数.
	 */
	private String render(String text, String contentType) {
		try {
			HttpServletResponse response = ServletActionContext.getResponse();
			response.setContentType(contentType);
			response.getWriter().write(text);
		} catch (IOException e) {
			e.printStackTrace();
		}
		return null;
	}

	/**
	 * 直接输出字符串.
	 */
	protected String renderText(String text) {
		return render(text, "text/plain;charset=UTF-8");
	}

	protected String renderSuccess() {
		return this.renderText("操作成功!");
	}

	protected String renderSuccess(String message) {
		return this.renderText(message);
	}

	protected String renderFailure() {
		return this.renderText("操作失败!");
	}

	protected String renderFailure(String message) {
		return this.renderText(message);
	}

	
	//得到 siteid 的方法
	protected long formSiteId(){
		return 1;
	}
	

	public void setServletResponse(HttpServletResponse response) {
		this.response = response;
	}

	public void setServletRequest(HttpServletRequest request) {
		this.request = request;
	}

	public void setSession(Map session) {
		this.session = session;
	}

}
