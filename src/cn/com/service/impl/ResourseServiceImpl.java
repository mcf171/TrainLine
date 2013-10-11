package cn.com.service.impl;

import java.util.ArrayList;
import java.util.List;


import cn.com.dao.impl.ResourseDAO;
import cn.com.model.Resourse;
import cn.com.service.IResourseService;

public class ResourseServiceImpl implements IResourseService{

	private ResourseDAO resourseDAO;
	
	
	

	public  ResourseDAO getResourseDAO() {
		return  resourseDAO;
	}

	public void setResourseDAO( ResourseDAO  resourseDAO) {
		this.resourseDAO =  resourseDAO;
	}

	public List<Resourse> getResourseList() {
		List<Resourse> list = resourseDAO.findAll();
		return list;
	}

	
}
