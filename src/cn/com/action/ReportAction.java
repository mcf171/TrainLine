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
	
	
}
