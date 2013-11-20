package cn.com.action;

import java.util.List;
import cn.com.base.BaseActionSupport;
import cn.com.model.Questionnairerubric;
import cn.com.service.QuestionnairerubricService;
/**
 * 
 * @author zongyulang
 *
 */
public class QuestionnaireRubricAction extends BaseActionSupport{
	private List<Questionnairerubric> qrList = null;
	private QuestionnairerubricService questionnairerubricService;
	
	/**
	 * 返回所有的问卷题目
	 * @return
	 */
	public String findAllQRubric()
	{
		setQrList(questionnairerubricService.findAll());
		session.put("qrList", qrList);
		return SUCCESS;
	}

	public QuestionnairerubricService getQuestionnairerubricService() {
		return questionnairerubricService;
	}

	public void setQuestionnairerubricService(QuestionnairerubricService questionnairerubricService) {
		this.questionnairerubricService = questionnairerubricService;
	}

	public List<Questionnairerubric> getQrList() {
		return qrList;
	}

	public void setQrList(List<Questionnairerubric> qrList) {
		this.qrList = qrList;
	}

	
}
