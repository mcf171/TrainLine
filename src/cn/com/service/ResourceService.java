package cn.com.service;

import java.util.List;

import cn.com.dao.RecordDAO;
import cn.com.dao.ResourceDAO;
import cn.com.model.Booktype;
import cn.com.model.Record;
import cn.com.model.Resource;


public class ResourceService {
     private ResourceDAO resourceDAO;

	public ResourceDAO getResourceDAO() {
		return resourceDAO;
	}

	public void setResourceDAO(ResourceDAO resourceDAO) {
		this.resourceDAO = resourceDAO;
	}
   public List<Resource> getResourceList(){
		
		return resourceDAO.findAll();
	} 
}
