package cn.com.action;

import java.io.File;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import cn.com.base.BaseActionSupport;
import cn.com.model.Questionnaire;
import cn.com.model.User;
import cn.com.service.QuestionnaireService;

public class QuestionnaireAction extends BaseActionSupport{
	private QuestionnaireService questionnairerService;
	private List<Questionnaire> qList;
	private Map<String,Object> dataMap;
	private Questionnaire questionnaire;
	private int page;
	private int limit;
	private File upload;
	private String uploadFileName;
	
	
	public QuestionnaireAction()
	{
		dataMap = new HashMap<String, Object>();
	}


	/**
	 * 批量上传问卷
	 * @author Apache
	 * @time 2014-3-9 11:14
	 * @return
	 */
	public String batchUpload(){
		boolean flag = false;
		try {
			
		 flag = questionnairerService.batchUpload(upload, uploadFileName);

		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
			request.setAttribute("msg", flag);
			return this.SUCCESS;
		}
		request.setAttribute("msg", flag);
		
		return this.SUCCESS;
	}
	
	/**
	 * 获取updateQuestionnaire页面
	 * @author Apache
	 * @time 2014-2-19 14:07
	 * @return
	 */
	public String getUpdateQuestionnairePage(){
		
		questionnaire = questionnairerService.getQuestionnaire(questionnaire.getQuestionnaireId());
		request.setAttribute("questionnaire", questionnaire);
		return this.SUCCESS;
	}
	
	/**
	 * 返回指定questionnaire页面
	 * author:Apache
	 * time:2014-2-13 18:17
	 * @return
	 */
	public String showQuestionnaire(){
		
		questionnaire = questionnairerService.getQuestionnaire(questionnaire.getQuestionnaireId());
		request.setAttribute("questionnaire", questionnaire);
		return this.SUCCESS;
	}
	
	/**
	 * 通过Questionniare
	 * @author Apache
	 * @time 2014-3-10 12:18
	 * @return
	 */
	public String findAllQuestionnare(){
		
		List<Questionnaire> questionnaireList = null;

		questionnaireList = questionnairerService.getQuetionnaireList(page, limit, questionnaire);
		int totalCount = questionnairerService.getTotalCount(questionnaire);
		
		dataMap.put("totalCount", totalCount);
		dataMap.put("qList", questionnaireList);
		
		return this.SUCCESS;
	}
	
	public String getQuestionnaireById()
	{
		if(questionnaire!=null){
			questionnaire =questionnairerService.getQuestionnaire(questionnaire.getQuestionnaireId());
		}
		dataMap.put("questionnaire", questionnaire);
		return this.SUCCESS;
	}
	
	public String deleteQuestionaire()
	{
		questionnairerService.delete(questionnaire);
		return this.SUCCESS;
	}
	
	public String updateQuestion()
	{
		if(questionnaire!=null)
		{
			questionnairerService.update(questionnaire);
		}
		return this.SUCCESS;
	}
	
	public String intoQuestionnairePage(){
		
		return this.SUCCESS;
	}
	
	/***
	 * 后台获得增加问卷的页面
	 * author:Apache
	 * time:2014-1-20 11:00
	 * @return /WEB-INF/jsp/backend/questionnaire/addQuestionnaire.jsp
	 */
	public String getAddQuestionnairePage(){
		
		return this.SUCCESS;
	}
	
	/***
	 * 后台增加Questionnaire 并跳转至增加题目页面
	 * author:Apache
	 * time:2014-1-20 11:00
	 * @return /WEB-INF/jsp/backend/questionnaire/addQuestionnaire.jsp
	 */
	public String addQuestionnaire(){
		
		int questionnaireId = questionnairerService.insert(questionnaire);
		
		dataMap.put("questionnaireId", questionnaireId);
		
		return this.SUCCESS;
	}

	public void setQuestionnairerService(QuestionnaireService questionnairerService) {
		this.questionnairerService = questionnairerService;
	}


	public List<Questionnaire> getqList() {
		return qList;
	}


	public void setqList(List<Questionnaire> qList) {
		this.qList = qList;
	}

	public Map<String, Object> getDataMap() {
		return dataMap;
	}


	public void setDataMap(Map<String, Object> dataMap) {
		this.dataMap = dataMap;
	}


	public QuestionnaireService getQuestionnairerService() {
		return questionnairerService;
	}


	public Questionnaire getQuestionnaire() {
		return questionnaire;
	}


	public void setQuestionnaire(Questionnaire questionnaire) {
		this.questionnaire = questionnaire;
	}

	public int getPage() {
		return page;
	}

	public void setPage(int page) {
		this.page = page;
	}

	public int getLimit() {
		return limit;
	}

	public void setLimit(int limit) {
		this.limit = limit;
	}


	public File getUpload() {
		return upload;
	}


	public void setUpload(File upload) {
		this.upload = upload;
	}


	public String getUploadFileName() {
		return uploadFileName;
	}


	public void setUploadFileName(String uploadFileName) {
		this.uploadFileName = uploadFileName;
	}

	
}
