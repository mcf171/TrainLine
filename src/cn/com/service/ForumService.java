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
     
     /*
      * 添加主题
      */

     public boolean addTheme(Theme themeName){
    	 boolean flag=true;
    	 themeDAO.save(themeName);
    	 
    	 return flag;
    	 
     }
	public ThemeDAO getThemeDAO() {
		return themeDAO;
	}

	public void setThemeDAO(ThemeDAO themeDAO) {
		this.themeDAO = themeDAO;
	}
	 
}
