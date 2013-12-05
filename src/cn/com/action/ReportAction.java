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

	public ReportService getReportService() {
		return reportService;
	}

	public void setReportService(ReportService reportService) {
		this.reportService = reportService;
	}
	
	
}
