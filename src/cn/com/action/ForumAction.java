package cn.com.action;

import java.util.List;

import cn.com.base.BaseActionSupport;
import cn.com.model.Theme;
import cn.com.service.ForumService;

public class ForumAction extends BaseActionSupport{
  
	private ForumService forumService; 
	public ForumService getForumService() {
		return forumService;
	}

	public void setForumService(ForumService forumService) {
		this.forumService = forumService;
	}

	
	public ForumAction() {
		super();
		// TODO Auto-generated constructor stub
	}

	/*
	 * 显示社区管理页面
	 */
	public String ShowBackenForumList(){
		return this.SUCCESS;
	}
	/*
	 * 显示主题管理
	 */
	public String ShowBackenThemeList(){
		List<Theme> list=forumService.getThemeList(); 
		request.setAttribute("forumList", list);
		return this.SUCCESS;
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
}
