package cn.com.action;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import cn.com.base.BaseActionSupport;
import cn.com.model.Catalogue;
import cn.com.model.Note;
import cn.com.model.Notice;
import cn.com.service.NoteService;
import cn.com.service.NoticeService;
import cn.com.service.ReportService;

public class ReportAction extends BaseActionSupport {
	
	private ReportService reportService;
	
	public String getBackendReportPage(){
		
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
	//public String getNianDuPeiXun

	public ReportService getReportService() {
		return reportService;
	}

	public void setReportService(ReportService reportService) {
		this.reportService = reportService;
	}
	
	
}
