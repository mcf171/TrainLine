package cn.com.service;

import java.io.File;
import java.util.Calendar;
import java.util.List;

import com.sun.jmx.snmp.Timestamp;

import cn.com.dao.CredentialDAO;
import cn.com.model.Credential;
import cn.com.util.FlexpaperUtil;
import cn.com.util.UploadUtil;

public class CredentialService {
	
	private CredentialDAO credentialDAO;
	private UploadUtil uploadUtil;
	
	public boolean insert(Credential credential, File image, String imageContentType, String imageFileName, String physicalPath) {
		
		boolean flag = false;
		imageFileName= "" + Calendar.getInstance().getTimeInMillis() + imageFileName.substring(imageFileName.lastIndexOf("."));
		String swfName = imageFileName;
		String bookURL = uploadUtil.getSavePath()+"/"+swfName;
		credential.setCredentiaPath(bookURL);
		uploadUtil.setFlie(image);
		uploadUtil.setFlieContentType(imageContentType);
		uploadUtil.setFlieFileName(imageFileName);
		
		try {
			credentialDAO.save(credential);
			uploadUtil.upload();
			flag=true;
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
	 * 删除Credential同时删除文件
	 * author:Apache
	 * time:2014-1-30 14:07
	 * @param credential
	 */
	public void delete(Credential credential)
	{
		credential = credentialDAO.findById(credential.getCredentialId());
		try {
		
			File file = new File(credential.getCredentiaPath());
			if(file.exists()){
				
				file.delete();
			}
			credentialDAO.delete(credential);
		
		} catch (Exception e) {
			// TODO: handle exception
		
			e.printStackTrace();
			throw new RuntimeException();
		}
		
	}
	
	/**
	 * 更新Credential
	 * @author Apache
	 * @time 2014-3-5 22:55
	 * @param credential
	 * @param image
	 * @param imageContentType
	 * @param imageFileName
	 * @param string
	 */
	public void update(Credential credential, File image, String imageContentType, String imageFileName, String string)
	{
		

		imageFileName= "" + Calendar.getInstance().getTimeInMillis() + imageFileName.substring(imageFileName.lastIndexOf("."));
		String swfName = imageFileName;
		String bookURL = uploadUtil.getSavePath()+"/"+swfName;
		credential.setCredentiaPath(bookURL);
		uploadUtil.setFlie(image);
		uploadUtil.setFlieContentType(imageContentType);
		uploadUtil.setFlieFileName(imageFileName);
		
		try {
			credentialDAO.merge(credential);
			uploadUtil.upload();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			throw new RuntimeException();
		}finally{
			
			uploadUtil.close();
		}
		
	}

	/**
	 * 通过Id获取Credential
	 * author:Apache
	 * time:2014-1-30 9:11
	 * @param credential
	 * @return
	 */
	public Credential getCredentialById(Credential credential){
	
		return credentialDAO.findById(credential.getCredentialId());
	}
	public List<Credential> findAll()
	{
		return credentialDAO.findAll();
	}
	public CredentialDAO getCredentialDAO() {
		return credentialDAO;
	}

	public void setCredentialDAO(CredentialDAO credentialDAO) {
		this.credentialDAO = credentialDAO;
	}

	public List<Credential> findConditions(Credential credential) {
		// TODO Auto-generated method stub
		return credentialDAO.findConditions(credential);
	}

	public UploadUtil getUploadUtil() {
		return uploadUtil;
	}

	public void setUploadUtil(UploadUtil uploadUtil) {
		this.uploadUtil = uploadUtil;
	}

}
