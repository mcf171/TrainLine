package cn.com.action;

import java.io.File;
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
	
	// 封装上传文件域的属性
    private File image;
    // 封装上传文件类型的属性
    private String imageContentType;
    // 封装上传文件名的属性
    private String imageFileName;

	public CredentialAction() {
		dataMap =new HashMap<String, List>();
	}

	/**
	 * 后台显示Credential
	 * author:Apache
	 * time:2014-1-30 9:12
	 * @return
	 */
	public String showCredential(){
		
		credential = credentialService.getCredentialById(credential);
		request.setAttribute("credential", credential);
		return this.SUCCESS;
	}
	
	/**
	 * 获取更新Credential页面
	 * author:Apache
	 * time:2014-1-30 9:47
	 * @return
	 */
	public String getUpadteCredentialPage(){
		
		credential = credentialService.getCredentialById(credential);
		request.setAttribute("credential", credential);
		return this.SUCCESS;
	}
	/**
	 * 更新Credential
	 * author:Apache
	 * time:2014-1-30 9:46
	 * @return
	 */
	public String updateCredential(){
		
		Credential temp = credentialService.getCredentialById(credential);
		if (credential.getCredentiaPath() == null) {
			
			credential.setCredentiaPath(temp.getCredentiaPath());
		}
		credentialService.update(credential);
		return this.SUCCESS;
	}
	/**
	 * 获取所有的证书列表
	 * author:Apache
	 * time:2014-1-29 19:56
	 * @return
	 */
	public String findAllCredential() {
		if(credential!=null)
		{
			cList = credentialService.findConditions(credential);
		}else {
			cList = credentialService.findAll();
		}
		/*
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
		*/
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
	
	/**
	 * 获取增加Credential页面
	 * author:Apache
	 * time:2014-1-29 18:42
	 * @return
	 */
	public String getAddCertificatePage(){
		
		return this.SUCCESS;
	}
	
	/**
	 * 后台增加Certificate
	 * author:Apache
	 * time:2014-1-29 18:46
	 * @return
	 */
	public String addCertifiacate(){
		
		//credential.setCredentiaStartTime(new Timestamp(System.currentTimeMillis()));
		
		credentialService.insert(credential, image, imageContentType, imageFileName,(String)request.getAttribute("physicalPath"));
		
		
		return this.SUCCESS;
	}
	public String intoCertificatePage()
	{
		return this.SUCCESS;
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

	public File getImage() {
		return image;
	}

	public void setImage(File image) {
		this.image = image;
	}

	public String getImageContentType() {
		return imageContentType;
	}

	public void setImageContentType(String imageContentType) {
		this.imageContentType = imageContentType;
	}

	public String getImageFileName() {
		return imageFileName;
	}

	public void setImageFileName(String imageFileName) {
		this.imageFileName = imageFileName;
	}

	public CredentialService getCredentialService() {
		return credentialService;
	}
	
	
}
