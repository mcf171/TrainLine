package cn.com.action;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import cn.com.base.BaseActionSupport;
import cn.com.model.Catalogue;
import cn.com.model.Note;
import cn.com.model.Notice;
import cn.com.model.PeiXunRenYuanBaoMingBiao;
import cn.com.service.NoteService;
import cn.com.service.NoticeService;
import cn.com.service.ReportService;

public class ReportAction extends BaseActionSupport {
	
	private ReportService reportService;
	private PeiXunRenYuanBaoMingBiao peiXunRenYuanBaoMingBiao;
	private Map<String , Object>dataMap;
	
	public String getBackendReportPage(){
		
		return this.SUCCESS;
	}
	
	/**
	 * 删除培训人员报名表
	 * @author Apache
	 * @time 2014-3-2 12:11
	 * @return
	 */
	
	public String deletePeiXunRenYuanBaoMingBiao(){
		
		reportService.deletePeiXunRenYuanBaoMingBiao(peiXunRenYuanBaoMingBiao);
		
		return this.SUCCESS;
	}
	
	/**
	 * 获得修改培训人员报名表页面
	 * @aturho Apache
	 * @time 2014-3-2 12:15
	 * @return
	 */
	public String getModifyPeiXunRenYuanBaoMingBiaoPage(){
		
		peiXunRenYuanBaoMingBiao = reportService.getPeiXunRenYuanBaoMingBiaoById(peiXunRenYuanBaoMingBiao.getId());
		request.setAttribute("peiXunRenYuanBaoMingBiao", peiXunRenYuanBaoMingBiao);
		return this.SUCCESS;
	}
	
	/**
	 * 修改培训人员报名表
	 * @author Apahce
	 * @time 2014-3-2 12:16
	 * @return
	 */
	public String modifyPeiXunRenYuanBaoMingBiao(){
		
		reportService.updatePeiXunRenYuanBaoMingBiao(peiXunRenYuanBaoMingBiao);
		return this.SUCCESS;
	}
	/**
	 * 获取增加培训人员报名表页面
	 * @author Apache
	 * @time 2014-3-2 10:39
	 * @return
	 */
	public String getAddPeiXunRenYuanBaoMingBiaoPage(){
		
		return this.SUCCESS;
	}
	
	/**
	 * 增加培训人员报名表
	 * @author Apache
	 * @time 2014-3-2 10:40
	 * @return
	 */
	public String addPeiXunRenYuanBaoMingBiao(){
		
		reportService.addPeiXunRenYuanBaoMingBiao(peiXunRenYuanBaoMingBiao);
		
		return this.SUCCESS;
	}
	
	/**
	 * 获取培训报名表List
	 * @author Apache
	 * @time 2014-3-2 11:32
	 * @return
	 */
	public String getPeiXUnRenYuanBaoMingBiaoList(){
		
		List list = reportService.getPeiXunRenYuanBaoMingBiaoList();
		
		dataMap.put("list", list);
		
		return this.SUCCESS;
		
	}
	/**
	 * 获取培训人员人员报名表页面
	 * @return
	 */
	public String getPeiXunRenYuanBaoMingBiaoPage(){
		
		return this.SUCCESS;
	}
	
	/**
	 * 获取后台岗位培训班级报名表页面
	 * @return
	 */
	public String getGangWeiPeiXunBanBeiAnBiaoPage(){
		
		
		return this.SUCCESS;
	}
	/**
	 * 获取年度培训计划及实施情况页面
	 * @return
	 */
	public String getNianDuPeiJiXunJiHuaShiShiQingKuang(){
		
		
		return this.SUCCESS;
	}
	/**
	 * 获取岗位培训班详细页面
	 * @return
	 */
	public String getGangWeiPeiXunBanXiangXiPage(){
		
		return this.SUCCESS;
	}
	/**
	 * 获取年度培训完成情况页面
	 * author:Apache
	 * time:2014-2-16 9:58
	 * @return
	 */
	public String getNianDuPeiXunWanChengQingKuangPage(){
		
		return this.SUCCESS;
	}
	
	/**
	 * 获取培训班报名表页面
	 * author:Apache
	 * time:2014-2-16 9:58
	 * @return
	 */
	public String getPeiXunBanBaoMingPage(){
		
		return this.SUCCESS;
	}
	
	/**
	 * 获取培训日程安排页面
	 * author:Apache
	 * time:2014-2-16 10:00
	 * @return
	 */
	public String getPeiXunRiChengAnPaiPage(){
		
		return this.SUCCESS;
	}
	
	/**
	 * 获取高级技术评审页面
	 * author:Apache
	 * time:2014-2-16 10:00
	 * @return
	 */
	public String getGaoJiJishuPingShenPage(){
		
		return this.SUCCESS;
	}
	
	/**
	 * 获取技师评审页面
	 * author:Apache
	 * time:2014-2-16 10:00
	 * @return
	 */
	public String getJiShiPingShenPage(){
		
		return this.SUCCESS;
	}
	
	/**
	 * 获取职业技能鉴定表
	 * author:Apache
	 * time:2014-2-16 10:00
	 * @return
	 */
	public String getZhiYeJiNengJianDing(){
		
		return this.SUCCESS;
	}
	
	/**
	 * 获取五大员报名登记表页面
	 * author:Apache
	 * time:2014-2-16 10:00
	 * @return
	 */
	public String getWuDaYuanBaoMingDengJiPage(){
		
		return this.SUCCESS;
	}
	
	/**
	 * 获取五大员取证考生花名册
	 * author:Apache
	 * time:2014-2-16 10:00
	 * @return
	 */
	public String getWuDayuanQuZhengKaoShengHuaMingCePage(){
		
		return this.SUCCESS;
	}
	
	/**
	 * 获取教师工作情况表页面
	 * author:Apache
	 * time:2014-2-16 10:00
	 * @return
	 */
	public String getJiaoShiGongZuoQingKuangPage(){
		
		return this.SUCCESS;
	}
	
	/**
	 * 获取教师信息登记表页面
	 * author:Apache
	 * time:2014-2-16 10:00
	 * @return
	 */
	public String getJiaoShiXinXiDengJiPage(){
		
		return this.SUCCESS;
	}
	//public String getNianDuPeiXun

	public ReportService getReportService() {
		return reportService;
	}

	public void setReportService(ReportService reportService) {
		this.reportService = reportService;
	}

	public PeiXunRenYuanBaoMingBiao getPeiXunRenYuanBaoMingBiao() {
		return peiXunRenYuanBaoMingBiao;
	}

	public void setPeiXunRenYuanBaoMingBiao(
			PeiXunRenYuanBaoMingBiao peiXunRenYuanBaoMingBiao) {
		this.peiXunRenYuanBaoMingBiao = peiXunRenYuanBaoMingBiao;
	}

	public Map<String, Object> getDataMap() {
		return dataMap;
	}

	public void setDataMap(Map<String, Object> dataMap) {
		this.dataMap = dataMap;
	}
	
	
}
