package cn.com.service;

import java.io.File;

import cn.com.dao.CatalogueDAO;
import cn.com.model.Catalogue;
import cn.com.model.Resource;
import cn.com.util.WebUtil;

public class CatalogueService {

	private CatalogueDAO catalogueDAO;

	public boolean deleteCatalogue(Catalogue catalogue){
		
		boolean flag = false;
		catalogue = catalogueDAO.findById(catalogue.getCatalogueId());
		
		try {
			
			catalogueDAO.delete(catalogue);
			for(Resource item : catalogue.getResource()){
				
				String path = WebUtil.getWebSitePhysalPath() + item.getResourcePath();
				flag = (new File(path)).delete();
				path = path.substring(0,path.indexOf('.'))+".pdf";
				flag = (new File(path)).delete();
				
			}
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
	
	
	
	
}
