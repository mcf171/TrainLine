package cn.com.service;

import java.util.List;

import cn.com.dao.CredentialDAO;
import cn.com.model.Credential;

public class CredentialService {
	private CredentialDAO credentialDAO;
	
	public void insert(Credential credential) {
		credentialDAO.save(credential);
	}

	public void delete(Credential credential)
	{
		credentialDAO.delete(credential);
	}
	
	public void update(Credential credential)
	{
	}

	public Credential getCourse(Credential credential)
	{
		
		return null;
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

}
