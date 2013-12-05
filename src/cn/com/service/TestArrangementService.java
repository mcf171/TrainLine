package cn.com.service;

import java.util.List;

import cn.com.dao.TestarrangementDAO;
import cn.com.model.Testarrangement;

public class TestArrangementService{
	private TestarrangementDAO testarrangementDAO;
	
	public void insert(Testarrangement testarrangement) {
		testarrangementDAO.save(testarrangement);
	}

	public void delete(Testarrangement testarrangement)
	{
		testarrangementDAO.delete(testarrangement);
	}
	
	public void update(Testarrangement testarrangement)
	{
	}

	public Testarrangement getTestarrangement(Testarrangement testarrangement)
	{
		return testarrangementDAO.findById(testarrangement.getTestArrangementId());
		
	}
	
	public List<Testarrangement> findAll()
	{
		return testarrangementDAO.findAll();
	}

	public TestarrangementDAO getTestarrangementDAO() {
		return testarrangementDAO;
	}

	public void setTestarrangementDAO(TestarrangementDAO testarrangementDAO) {
		this.testarrangementDAO = testarrangementDAO;
	}

}
