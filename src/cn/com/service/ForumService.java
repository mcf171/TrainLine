package cn.com.service;

import java.util.List;

import cn.com.dao.ThemeDAO;
import cn.com.dao.TieziDAO;
import cn.com.dao.TopicDAO;
import cn.com.model.Theme;
import cn.com.model.Tiezi;
import cn.com.model.Topic;

public class ForumService {

	private ThemeDAO themeDAO;
	private TopicDAO topicDAO;
	private TieziDAO tieziDAO;

	/*
	 * 获取所有的主题
	 */
	public List<Theme> getThemeList() {
		return themeDAO.findAll();
	}

	/*
	 * 添加主题
	 */

	public boolean addTheme(Theme themeName) {
		boolean flag = true;
		themeDAO.save(themeName);

		return flag;

	}
	/**
	 * 获取所有Topic
	 * @return
	 */
	public List<Topic> getTopicList() {
		
		return topicDAO.findAll();
	}
	
	public List<Topic> searchTopics(Topic topic){
		
		
		return topicDAO.findByExampleFuzzy(topic);
	}
	/**
	 * 获取所有帖子
	 * @return
	 */
	public List<Tiezi> getTieziList(){
		
		return tieziDAO.findAll();
	}
	
	public ThemeDAO getThemeDAO() {
		return themeDAO;
	}

	public void setThemeDAO(ThemeDAO themeDAO) {
		this.themeDAO = themeDAO;
	}

	public TopicDAO getTopicDAO() {
		return topicDAO;
	}

	public void setTopicDAO(TopicDAO topicDAO) {
		this.topicDAO = topicDAO;
	}

	public TieziDAO getTieziDAO() {
		return tieziDAO;
	}

	public void setTieziDAO(TieziDAO tieziDAO) {
		this.tieziDAO = tieziDAO;
	}

}
