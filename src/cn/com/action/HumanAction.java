package cn.com.action;

import cn.com.base.BaseActionSupport;

import com.opensymphony.xwork2.ActionSupport;

public class HumanAction extends BaseActionSupport{
	public String showBackendHumanPage(){
		return SUCCESS;
	}
	
	public String showBackendPersonPage(){
		return SUCCESS;
	}
	
	public String showBackendCompanyPage(){
		System.out.println("daolezheli");
		return SUCCESS;
	}
	
	public String showBackendDepartmentPage(){
		return SUCCESS;
	}
	
	public String showBackendPositionPage(){
		return SUCCESS;
	}
	
	public String addPersonPage(){
		return SUCCESS;
	}
	
	public String addCompanyPage(){
		return SUCCESS;
	}
	
	public String addDepartmentPage(){
		return SUCCESS;
	}
	
	public String addPositionPage(){
		return SUCCESS;
	}
}
