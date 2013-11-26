package cn.com.service;

import java.util.List;

import cn.com.dao.ThemeDAO;
import cn.com.model.Theme;

public class ForumService {
    
	 private  ThemeDAO   themeDAO;

	 /*
	  * 获取所有的主题
	  */
     public List<Theme> getThemeList(){
    	 return themeDAO.findAll();
     }

	public ThemeDAO getThemeDAO() {
		return themeDAO;
	}

	public void setThemeDAO(ThemeDAO themeDAO) {
		this.themeDAO = themeDAO;
	}
	 
}
