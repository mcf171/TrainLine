package cn.com.action;



import java.util.List;
import java.util.Map;

import cn.com.base.BaseActionSupport;

import cn.com.model.Book;
import cn.com.model.Resource;
import cn.com.service.ResourceService;


public class ResourceAction extends BaseActionSupport {
	private ResourceService resourceService;
	private Map<String, Object> dataMap;
public ResourceService getResourceService() {
		return resourceService;
	}


	public void setResourceService(ResourceService resourceService) {
		this.resourceService = resourceService;
	}


public String showBackendResourceListPage(){
		return this.SUCCESS;
	}


public String showBackendInsideResourceListPage(){
	
	
	List<Resource> list = resourceService.getResourceList();
	request.setAttribute("resourceList", list);
	return this.SUCCESS;
}


}
