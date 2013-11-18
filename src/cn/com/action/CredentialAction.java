package cn.com.action;

import java.util.List;

import cn.com.base.BaseActionSupport;
import cn.com.model.Credential;
import cn.com.service.CredentialService;

public class CredentialAction extends BaseActionSupport {
	private List<Credential> cList = null;
	private CredentialService credentialService;

	public String findAll() {
		cList = credentialService.findAll();
		super.session.put("cList", cList);
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
}
