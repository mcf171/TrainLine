package cn.com.service.impl;

import java.util.List;

import cn.com.dao.impl.ExamDAO;
import cn.com.model.Exam;
import cn.com.service.IExamService;

public class ExamServiceImpl implements IExamService {

	private ExamDAO examDAO;
	
	public List<Exam> getAllExamList() {
		// TODO Auto-generated method stub
		List<Exam> list = null;
		
		list = examDAO.findAll();
		
		return list;
	}

	public ExamDAO getExamDAO() {
		return examDAO;
	}

	public void setExamDAO(ExamDAO examDAO) {
		this.examDAO = examDAO;
	}

	
}
