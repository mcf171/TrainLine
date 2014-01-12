package cn.com.action;

import java.util.List;
import java.util.Map;

import cn.com.base.BaseActionSupport;
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

	/**
	 * 展示视频资源管理页面
	 * @return
	 */
	public String showBackendResourceListPage() {
		return this.SUCCESS;
	}

	/**
	 * 展示视频资源管理页面
	 * @return
	 */
	public String showBackendInsideResourceListPage() {

		List<Resource> list = resourceService.getResourceList();
		request.setAttribute("resourceList", list);
		return this.SUCCESS;
	}
	
	public String showBackendDocResourcePage(){
		
		return this.SUCCESS;
	}
	
	public String showBackendDongTaiResourcePage(){
		
		return this.SUCCESS;
	}
	/**
	 * 获取后台视频资源列表
	 * @return
	 */
	public String getBackendShiPingResource(){
	
		List<Resource> list = this.resourceService.getBackendShiPingResource();
		dataMap.put("list", list);
		
		return this.SUCCESS;
	}
	/**
	 * 获取后台文档资源列表
	 * @return
	 */
	public String getBackendWenDangResource(){
		
		List<Resource> list = this.resourceService.getBackendDocResource();
		dataMap.put("list", list);
		return this.SUCCESS;
	}
	/**
	 * 获取后台动态图片资源
	 * @return
	 */
	public String getBackendDongTaiResource(){
		
		List<Resource> list = this.resourceService.getBackendDongTaiResource();
		dataMap.put("list", list);
		return this.SUCCESS;
	}
	public Map<String, Object> getDataMap() {
		return dataMap;
	}

	public void setDataMap(Map<String, Object> dataMap) {
		this.dataMap = dataMap;
	}

}
