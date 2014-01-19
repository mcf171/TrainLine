package cn.com.action;

import java.util.Map;

import cn.com.base.BaseActionSupport;
import cn.com.model.Catalogue;
import cn.com.service.CatalogueService;

public class CatalogueAction extends BaseActionSupport{

	private Catalogue catalogue;
	private CatalogueService catalogueService;
	private Map<String,Object> dataMap;
	
	public String deleteCatalogue(){
		
		boolean flag = catalogueService.deleteCatalogue(catalogue);
		
		if(flag){
			
			dataMap.put("info", "success");
		}else{
			
			dataMap.put("info", "fail");
		}
		
		return this.SUCCESS;
	}
	
	public Catalogue getCatalogue() {
		return catalogue;
	}
	public void setCatalogue(Catalogue catalogue) {
		this.catalogue = catalogue;
	}
	public CatalogueService getCatalogueService() {
		return catalogueService;
	}
	public void setCatalogueService(CatalogueService catalogueService) {
		this.catalogueService = catalogueService;
	}

	public Map<String, Object> getDataMap() {
		return dataMap;
	}

	public void setDataMap(Map<String, Object> dataMap) {
		this.dataMap = dataMap;
	}
	
	
}
