package cn.com.service;

import java.io.File;

import cn.com.dao.CatalogueDAO;
import cn.com.dao.ResourceDAO;
import cn.com.model.Catalogue;
import cn.com.model.Resource;
import cn.com.util.WebUtil;

public class CatalogueService {

	private CatalogueDAO catalogueDAO;
	private ResourceDAO resourceDAO;

	public boolean deleteCatalogue(Catalogue catalogue){
		
		boolean flag = false;
		
		catalogue = catalogueDAO.findById(catalogue.getCatalogueId());
		
		try {
			
			
			for(Resource item : catalogue.getResource()){
				
				String path = WebUtil.getWebSitePhysalPath() + item.getResourcePath();
				
				flag = true;
				
				if(new File(path).exists()){
					
					flag = (new File(path)).delete();
				}
				path = path.substring(0,path.indexOf('.'))+".pdf";
				
				if(new File(path).exists()){
					
					flag = (new File(path)).delete();
				}
				//resourceDAO.delete(item);
			}
			
			catalogue.getCourse().getCatalogues().remove(catalogue);
			catalogueDAO.delete(catalogue);
			
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
			throw new RuntimeException();
		}
		
		return flag;
	}
	
	public CatalogueDAO getCatalogueDAO() {
		return catalogueDAO;
	}

	public void setCatalogueDAO(CatalogueDAO catalogueDAO) {
		this.catalogueDAO = catalogueDAO;
	}

	public ResourceDAO getResourceDAO() {
		return resourceDAO;
	}

	public void setResourceDAO(ResourceDAO resourceDAO) {
		this.resourceDAO = resourceDAO;
	}
	
	
	
	
}
