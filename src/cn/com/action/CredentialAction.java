package cn.com.action;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import cn.com.base.BaseActionSupport;
import cn.com.model.Credential;
import cn.com.service.CredentialService;

public class CredentialAction extends BaseActionSupport {
	private List<Credential> cList = null;
	private CredentialService credentialService;
	private Map<String, List> dataMap;
	

	public CredentialAction() {
		dataMap =new HashMap<String, List>();
	}

	public String findAllCredential() {
		cList = credentialService.findAll();
		dataMap.put("cList", cList);
		return SUCCESS;
	}

	public List<Credential> getcList() {
		return cList;
	}

	public void setcList(List<Credential> cList) {
		this.cList = cList;
	}

	public CredentialService getCredentialService() {
		return credentialService;
	}

	public void setCredentialService(CredentialService credentialService) {
		this.credentialService = credentialService;
	}

	public Map<String, List> getDataMap() {
		return dataMap;
	}

	public void setDataMap(Map<String, List> dataMap) {
		this.dataMap = dataMap;
	}
}
