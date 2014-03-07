package cn.com.service;

import cn.com.dao.TestQuestionItemDAO;
import cn.com.model.TestQuestionItem;

public class TestQuestionItemService {

	private TestQuestionItemDAO testQuestionItemDAO;

	/**
	 * 增加TestQuestionItem
	 * @author Apache
	 * @time 2014-2-26 11:33
	 * @param testQuestionItem
	 * @return
	 */
	public int add(TestQuestionItem testQuestionItem){
		
		return testQuestionItemDAO.save(testQuestionItem);
	}
	
	/**
	 * 通过Id查询TestQuestionItem
	 * @author Apache
	 * @time 2014-2-26 11:32
	 * @param testQuestionItemId
	 * @return
	 */
	public TestQuestionItem findById(int testQuestionItemId){
		
		return testQuestionItemDAO.findById(testQuestionItemId);
	}
	
	/**
	 * 更新TestQuestionItem
	 * @author Apache
	 * @time 2014-2-27 5:33
	 * @param testQuestionItem
	 */
	public void updateTestQuestionItem(TestQuestionItem testQuestionItem){
		
		testQuestionItemDAO.update(testQuestionItem);
	}
	
	public TestQuestionItemDAO getTestQuestionItemDAO() {
		return testQuestionItemDAO;
	}

	public void setTestQuestionItemDAO(TestQuestionItemDAO testQuestionItemDAO) {
		this.testQuestionItemDAO = testQuestionItemDAO;
	}
	
	
}
