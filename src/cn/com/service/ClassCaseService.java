package cn.com.service;

import java.util.List;

import cn.com.dao.ClasscaseDAO;
import cn.com.model.Classcase;

public class ClassCaseService {

	private ClasscaseDAO classCaseDAO;
	
	/**
	 * 通过Example查询ClassCase
	 * author:Apache
	 * time:2014-1-27 14:32
	 * @param example
	 * @return
	 */
	public List<Classcase> getClassCaseByExample(Classcase example){
		
		List<Classcase> list;
		try {
			 list = classCaseDAO.findByExample(example);
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
			throw new RuntimeException();
		}
		return list;
	}
	
	/**
	 * 根据ClassCaseId删除ClassCase
	 * author:Apache
	 * time:2014-1-27 17:09
	 * @param classCase
	 */
	public void deleteClassCase(Classcase classCase){
		
		classCaseDAO.delete(classCase);
	}

	public ClasscaseDAO getClassCaseDAO() {
		return classCaseDAO;
	}

	public void setClassCaseDAO(ClasscaseDAO classCaseDAO) {
		this.classCaseDAO = classCaseDAO;
	}
	
	
	
}
