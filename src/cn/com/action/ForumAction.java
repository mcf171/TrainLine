package cn.com.action;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import cn.com.base.BaseActionSupport;
import cn.com.model.Theme;
import cn.com.service.ForumService;

public class ForumAction extends BaseActionSupport{
  
	private ForumService forumService; 
	private Theme them;
	private Map<String, Object> dataMap;
	public Map<String, Object> getDataMap() {
		return dataMap;
	}

	public void setDataMap(Map<String, Object> dataMap) {
		this.dataMap = dataMap;
	}

	public ForumService getForumService() {
		return forumService;
	}

	public void setForumService(ForumService forumService) {
		this.forumService = forumService;
	}

	
	public ForumAction() {
		super();
		dataMap = new HashMap<String, Object>();
		// TODO Auto-generated constructor stub
	}

	/*
	 * 显示社区管理页面
	 */
	public String ShowBackenForumList(){
		return this.SUCCESS;
	}
	
	//主题模块
	/*
	 * 显示主题管理
	 */
	public String ShowBackenThemeList(){	
		return this.SUCCESS;
	}
	//获得主题的所有内容
	public String getBackenThemeList(){
		List<Theme> list=forumService.getThemeList(); 
		dataMap.put("themelist", list);
		return SUCCESS;
	}
	//主题增加页面
	public String addTheme(){
		return SUCCESS;
	}
	//主题页面修改
	public String modifyTheme(){
		return SUCCESS;
	}
	//主题增加成功
	public String addThemeInto(){
		System.out.println("te");
		boolean flsg=forumService.addTheme(them);
		return SUCCESS;
	}
	/*
	 * 显示话题管理
	 */
	public String ShowBackenTopicList(){
		return this.SUCCESS;
	}
	/*
	 * 显示发帖管理
	 */
	public String ShowBackenTalkList(){
		return this.SUCCESS;
	}

	public Theme getThem() {
		return them;
	}

	public void setThem(Theme them) {
		this.them = them;
	}
	
}
