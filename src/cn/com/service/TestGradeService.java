package cn.com.service;

import cn.com.dao.TestGradeDAO;
import cn.com.model.TestGrade;

public class TestGradeService {
	
	private TestGradeDAO testGradeDAO;

	/**
	 * 增加TestGrade，并返回TestGrade
	 * @autho Apache
	 * @time 2014-3-1 1:39
	 * @param testGrade
	 * @return
	 */
	public Integer add(TestGrade testGrade){
		
		int testGradeId=  testGradeDAO.save(testGrade);

		return testGradeId;
	}
	
	/**
	 * 通过Id 查询TestGrade
	 * @author Apache
	 * @time 2014-3-1 1:39
	 * @param testGradeId
	 * @return
	 */
	public TestGrade findById(int testGradeId){
		
		TestGrade testGrade = testGradeDAO.findById(testGradeId);
		return testGrade;
		
	}
	public TestGradeDAO getTestGradeDAO() {
		return testGradeDAO;
	}

	public void setTestGradeDAO(TestGradeDAO testGradeDAO) {
		this.testGradeDAO = testGradeDAO;
	}
	
	
	

}
