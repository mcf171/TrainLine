package cn.com.action;

import cn.com.base.BaseActionSupport;

public class EmailAction extends BaseActionSupport{

	/**
	 * 获取Email首页页面
	 * author:Apache
	 * time:2014-2-14 22:38
	 * @return
	 */
	public String getEmailHomePage(){
		
		return this.SUCCESS;
	}
	
	/**
	 * 返回写信页面
	 * author:Apache
	 * time:2014-2-14 22:48
	 * @return
	 */
	public String getWriteEmailPage(){
		
		return this.SUCCESS;
	}
	
	/**
	 * 获取收件箱页面
	 * author:Apache
	 * time:2014-2-14 22:47
	 * @return
	 */
	public String getCollectionPage(){
		
		return this.SUCCESS;
	}
	
	/**
	 * 返回通讯录页面
	 * author:Apache
	 * time:2014-2-14 22:49
	 * @return
	 */
	public String getRelationShipaPage(){
		
		return this.SUCCESS;
	}
}
