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

	public List<Resource> getResourceList() {

		return resourceDAO.findAll();
	}

	public List<Resource> getBackendShiPingResource() {

		Resource example = new Resource();
		example.setCatalogueId(0);
		example.setResourceType(1);

		return this.resourceDAO.findByExample(example);
	}

	public List<Resource> getBackendDocResource() {

		Resource example = new Resource();
		example.setCatalogueId(0);
		example.setResourceType(2);

		return this.resourceDAO.findByExample(example);
	}

	public List<Resource> getBackendDongTaiResource() {

		Resource example = new Resource();
		example.setCatalogueId(0);
		example.setResourceType(3);

		return this.resourceDAO.findByExample(example);
	}

	public List<Resource> getPaiHangBangList() {

		return resourceDAO.findAllOrderByDownLoad();
	}
}
