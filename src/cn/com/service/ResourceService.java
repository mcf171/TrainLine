package cn.com.service;

import java.io.File;
import java.util.Calendar;
import java.util.List;

import org.apache.struts2.ServletActionContext;

import cn.com.dao.ResourceDAO;
import cn.com.model.Book;
import cn.com.model.Catalogue;
import cn.com.model.Resource;
import cn.com.util.FlexpaperUtil;
import cn.com.util.GlobalConstant;
import cn.com.util.UploadUtil;
import cn.com.util.WebUtil;

public class ResourceService {
	private ResourceDAO resourceDAO;
	private UploadUtil uploadUtil;

	public ResourceDAO getResourceDAO() {
		return resourceDAO;
	}

	public void setResourceDAO(ResourceDAO resourceDAO) {
		this.resourceDAO = resourceDAO;
	}

	public List<Resource> getResourceList() {

		return resourceDAO.findAll();
	}
	
	/**
	 * 删除Resource，同时删除上传文件
	 * @author Apache
	 * @time 2014-2-22 20:33
	 * @param resource
	 * @return
	 */
	public boolean deleteResource(Resource resource){
		
		boolean flag = false;
		
		resource = resourceDAO.findById(resource.getResourceId());
		
		try {
		
			String filePath = WebUtil.getWebSitePhysalPath() + resource.getResourcePath();
			File file  = new File(filePath);
			
			if(file.exists()){
				
				file.delete();
			}
			resourceDAO.delete(resource);
			
			flag = true;
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
			throw new RuntimeException();
		}
		
		return flag;
	}
	
	/**
	 * 增加Resource，并上传资源
	 * @author Apache
	 * @time 2014-2-22 16:20
	 * @param resource
	 * @param image
	 * @param imageContentType
	 * @param imageFileName
	 * @return
	 */
	public boolean  addResource(Resource resource , File image, String imageContentType, String imageFileName){
		
		boolean flag = false;
		
		Calendar rightNow = Calendar.getInstance();
		imageFileName = rightNow.getTimeInMillis() + imageFileName.substring(imageFileName.indexOf("."));
		
		uploadUtil.setFlie(image);
		uploadUtil.setFlieContentType(imageContentType);
		uploadUtil.setFlieFileName(imageFileName);
		
		try {
			String resourceURL = uploadUtil.getSavePath()+"/"+imageFileName;
			resource.setResourcePath(resourceURL);
			resourceDAO.save(resource);
			uploadUtil.upload();
			flag = FlexpaperUtil.converterDocumentToSWF(WebUtil.getWebSitePhysalPath(), uploadUtil.getSavePath(), imageFileName);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			flag = false;
			e.printStackTrace();
			throw new RuntimeException();
		}finally{
			
			uploadUtil.close();
		}
		
		return flag;
		
	}
	
	/**
	 * 上传文件；
	 * @author Apache
	 * @time 2014-3-6 21:22
	 * @param resource
	 * @param file
	 */
	public void addResource(Resource resource,File file,String fileName){
		
		int resourceType = resource.getResourceType();
		String path  = "";
		String fileType =   fileName.substring(fileName.lastIndexOf("."));
		Calendar rightNow = Calendar.getInstance();
		fileName =  "" + rightNow.getTimeInMillis() + fileType;
		switch(resourceType){
		
		case 1: path += GlobalConstant.SAVEPATH_RESOURCE_VIDEO +fileName;break;
		case 2: path += GlobalConstant.SAVEPATH_RESOURCE_DOCUMENT +fileName;break;
		case 3:path += GlobalConstant.SAVEPATH_RESOURCE_OTHERS + fileName;break;
		}
		String dsSavePath = ServletActionContext.getServletContext().getRealPath(path);
		File dsFile = new File(dsSavePath);
		try {
			
			UploadUtil.copyFile(file, dsFile);
			
			resource.setResourcePath(path);
			resource.setDownloundCount(0);
			resourceDAO.save(resource);

		} catch (Exception e) {
		// TODO: handle exception
			e.printStackTrace();
			throw new RuntimeException();
		}
	}
	
	public boolean updateResource(Resource resource , File file, String fileName){
		
		boolean flag = false;
		
		try {
			if(file !=null){
				
				int resourceType = resource.getResourceType();
				String path  = "upload\\";
				String fileType = "." + fileName.substring(fileName.lastIndexOf("."));
				Calendar rightNow = Calendar.getInstance();
				switch(resourceType){
				
				case 1: path += GlobalConstant.SAVEPATH_RESOURCE_VIDEO + rightNow.getTimeInMillis() + fileType;break;
				case 2: path += GlobalConstant.SAVEPATH_RESOURCE_DOCUMENT + rightNow.getTimeInMillis() + fileType;break;
				case 3:path += GlobalConstant.SAVEPATH_RESOURCE_OTHERS + rightNow.getTimeInMillis() + fileType;break;
				}
				String dsSavePath = ServletActionContext.getServletContext().getRealPath(path);
				File dsFile = new File(dsSavePath);
				
				UploadUtil.copyFile(file, dsFile);
				resource.setResourcePath(path);
				resourceDAO.save(resource);
				flag = true;
				
			}else{
				Resource temp = resourceDAO.findById(resource.getResourceId());
				resource.setResourcePath(temp.getResourcePath());
				resourceDAO.merge(resource);
			}
		
		} catch (Exception e) {
			// TODO: handle exception
				flag = false;
				e.printStackTrace();
				throw new RuntimeException();
			}
		
		return flag;
	}
	
	/**
	 * 更新Resource，同时进行相关资源上传
	 * @author Apache
	 * @time 2014-2-22 16:07
	 * @param resource
	 * @param image
	 * @param imageContentType
	 * @param imageFileName
	 * @return
	 */
	public boolean updateResource(Resource resource, File image, String imageContentType, String imageFileName){
		
		boolean flag = false;
		
		if(image != null && imageContentType != null && imageFileName != null){
			
			Resource temp = resourceDAO.findById(resource.getResourceId());
			String oldPath = WebUtil.getWebSitePhysalPath() + temp.getResourcePath();
			File file = new File(oldPath);
			
			String resourceURL = uploadUtil.getSavePath()+"/"+imageFileName;
			resource.setResourcePath(resourceURL);
			uploadUtil.setFlie(image);
			uploadUtil.setFlieContentType(imageContentType);
			uploadUtil.setFlieFileName(imageFileName);
			
			try {
				
				if(file.exists()){
					
					file.delete();
				}
				resourceDAO.merge(resource);
				uploadUtil.upload();
				flag = true;
			} catch (Exception e) {
				// TODO Auto-generated catch block
				
				e.printStackTrace();
			}finally{
				
				flag = false;
				uploadUtil.close();
			}
			
		}else{
			Resource temp = resourceDAO.findById(resource.getResourceId());
			resource.setResourcePath(temp.getResourcePath());
			resourceDAO.merge(resource);
		}
		
		return flag;
	}
	
	/**
	 * 更新Resource，Resource上传文件无修改
	 * @author Apache
	 * @time 2014-2-22 16:10
	 * @param resource
	 * @return
	 */
	public boolean updateResource(Resource resource){
		
		boolean flag = false;
		
		//flag = this.updateResource(resource, null, null, null);
		flag = this.updateResource(resource, null ,null);
		
		return flag;
		
	}
	/**
	 * 通过ID获取Resource
	 * @author Apache
	 * @time 2014-2-22 15:15
	 * @param resourceId
	 * @return
	 */
	public Resource getResourceById(int resourceId){
		
		Resource resource = resourceDAO.findById(resourceId);
		
		return resource;
	}

	public List<Resource> getBackendShiPingResource() {

		Resource example = new Resource();
		Catalogue catalogue = new Catalogue();
		catalogue.setCatalogueId(0);
		example.setCatalogue(catalogue);
		example.setResourceType(1);

		return this.resourceDAO.findByExample(example);
	}

	public List<Resource> getBackendDocResource() {

		Resource example = new Resource();
		Catalogue catalogue = new Catalogue();
		catalogue.setCatalogueId(0);
		example.setCatalogue(catalogue);
		example.setResourceType(2);

		return this.resourceDAO.findByExample(example);
	}

	public List<Resource> getBackendDongTaiResource() {

		Resource example = new Resource();
		Catalogue catalogue = new Catalogue();
		catalogue.setCatalogueId(0);
		example.setCatalogue(catalogue);
		example.setResourceType(3);

		return this.resourceDAO.findByExample(example);
	}

	public List<Resource> getPaiHangBangList() {

		return resourceDAO.findAllOrderByDownLoad();
	}

	public UploadUtil getUploadUtil() {
		return uploadUtil;
	}

	public void setUploadUtil(UploadUtil uploadUtil) {
		this.uploadUtil = uploadUtil;
	}
	
}
