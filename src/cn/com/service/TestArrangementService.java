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
	
	/**
	 * 更新TestArrangement
	 * @author:Apache
	 * @time:2014-2-21 14:28
	 * @param testarrangement
	 */
	public void update(Testarrangement testarrangement)
	{
		testarrangementDAO.merge(testarrangement);
	}

	/**
	 * 通过Id获取TestArrangement
	 * @author:Apache
	 * @time:2014-2-21 11:26
	 * @param testarrangementId
	 * @return
	 */
	public Testarrangement getTestarrangement(int testarrangementId)
	{
		return testarrangementDAO.findById(testarrangementId);
		
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
