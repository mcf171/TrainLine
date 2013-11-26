package cn.com.action;

import java.sql.Timestamp;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
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
	private Credential credential;
	

	public CredentialAction() {
		dataMap =new HashMap<String, List>();
	}

	public String findAllCredential() {
		if(credential!=null)
		{
			cList = credentialService.findConditions(credential);
		}else {
			cList = credentialService.findAll();
		}
		if(cList!=null)
		{
			for (int i = 0; i < cList.size(); i++) {
				Timestamp ts = cList.get(i).getCredentiaStartTime();  
		        String tsStr = "";  
		        DateFormat sdf = new SimpleDateFormat("yyyy-MM-dd"); 
		       String dateStr = sdf.format(ts);
				cList.get(i).setCredentiaStartTime1(dateStr);
			}
		}
		dataMap.put("cList", cList);
		return SUCCESS;
	}
	
	public String deleteCredential()
	{
			if(credential!=null)
			{
				credentialService.delete(credential);
			}
		return JSON;
	}
	
	public String intoCertificatePage()
	{
		return "intoCertificatePage";
	}

	public List<Credential> getcList() {
		return cList;
	}

	public void setcList(List<Credential> cList) {
		this.cList = cList;
	}

//	public CredentialService getCredentialService() {
//		return credentialService;
//	}

	public void setCredentialService(CredentialService credentialService) {
		this.credentialService = credentialService;
	}

	public Map<String, List> getDataMap() {
		return dataMap;
	}

	public void setDataMap(Map<String, List> dataMap) {
		this.dataMap = dataMap;
	}

	public Credential getCredential() {
		return credential;
	}

	public void setCredential(Credential credential) {
		this.credential = credential;
	}
}
