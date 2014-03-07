package cn.com.action;

import java.io.File;
import java.util.List;
import java.util.Map;

import cn.com.base.BaseActionSupport;
import cn.com.model.Resource;
import cn.com.service.ResourceService;
import cn.com.util.GlobalConstant;

public class ResourceAction extends BaseActionSupport {
	private ResourceService resourceService;
	private Map<String, Object> dataMap;
	private Resource resource;
	private String modifyResource;//如果为1则修改了ResourceURL

	/*
	// 封装上传文件域的属性
    private File image;
    // 封装上传文件类型的属性
    private String imageContentType;
    // 封装上传文件名的属性
    private String imageFileName;
    */
	
	private String title;
	private File upload;
	private String uploadFileName;
	private String[] uploadContentTypeName;
	private String savePath;
    
	public ResourceService getResourceService() {
		return resourceService;
	}

	public void setResourceService(ResourceService resourceService) {
		this.resourceService = resourceService;
	}

	/**
	 * 更新Resource
	 * @author:Apache
	 * @time:2014-2-21 20:56
	 * @return
	 */
	public String updateResource(){
		
		if(GlobalConstant.MODIFYURL.equals(modifyResource)){
			
			resourceService.updateResource(resource,upload,uploadFileName);
			//resourceService.updateResource(resource, image, imageContentType, imageFileName);
		}else{
			
			resourceService.updateResource(resource);
		}
		
		return this.SUCCESS;
	}
	/**
	 * 获取更新资源页面
	 * @author:Apache
	 * @time:2014-2-21 20:54
	 * @return
	 */
	public String getUpdateResoucePage(){
		
		resource = resourceService.getResourceById(resource.getResourceId());
		
		request.setAttribute("resource", resource);
		
		return this.SUCCESS;
	}
	/**
	 * 获取增加资源页面
	 * @author:Apache
	 * @time:2014-2-21 20:03
	 * @return
	 */
	public String getAddResourcePage(){
		
		request.setAttribute("resource", resource);
		
		return this.SUCCESS;
	}
	
	/**
	 * 获取视频资源页面
	 * @author Apache
	 * @time 2014-2-22 16:33
	 * @return
	 */
	public String showBackendVideoResourcePage(){
		
		return this.SUCCESS;
	}
	
	/**
	 * 增加资源
	 * @author:Apache
	 * @time:2014-2-21 20:04
	 * @return
	 */
	public String addResource(){
		
		resourceService.addResource(resource, upload,uploadFileName);
		
		return this.SUCCESS;
	}
	
	/**
	 * 删除资源
	 * @author:Apache
	 * @time:2014-2-21 20:06
	 * @return
	 */
	public String deleteResource(){
		
		resourceService.deleteResource(resource);
		
		return this.SUCCESS;
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

	public Resource getResource() {
		return resource;
	}

	public void setResource(Resource resource) {
		this.resource = resource;
	}

	public String getModifyResource() {
		return modifyResource;
	}

	public void setModifyResource(String modifyResource) {
		this.modifyResource = modifyResource;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}


	public String getUploadFileName() {
		return uploadFileName;
	}

	public void setUploadFileName(String uploadFileName) {
		this.uploadFileName = uploadFileName;
	}

	public String[] getUploadContentTypeName() {
		return uploadContentTypeName;
	}

	public void setUploadContentTypeName(String[] uploadContentTypeName) {
		this.uploadContentTypeName = uploadContentTypeName;
	}

	public String getSavePath() {
		return savePath;
	}

	public void setSavePath(String savePath) {
		this.savePath = savePath;
	}

	public File getUpload() {
		return upload;
	}

	public void setUpload(File upload) {
		this.upload = upload;
	}


	
}
