package cn.com.action;

import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.sql.Timestamp;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

import javax.servlet.ServletContext;

import org.apache.struts2.ServletActionContext;

import com.opensymphony.xwork2.ActionContext;

import cn.com.base.BaseActionSupport;
import cn.com.model.Catalogue;
import cn.com.model.Classcase;
import cn.com.model.Course;
import cn.com.model.Resource;
import cn.com.model.Resourseandcatelogue;
import cn.com.model.ResourseandcatelogueId;
import cn.com.model.Trainingclass;
import cn.com.model.User;
import cn.com.service.ClassCaseService;
import cn.com.service.CourseService;
import cn.com.service.UserService;
import cn.com.util.FlexpaperUtil;
import cn.com.util.UploadUtil;

/**
 */

public class ClassCaseAction extends BaseActionSupport {
	
	private ClassCaseService classCaseService;
	private Map<String , Object> dataMap;
	private Trainingclass trainingClass;
	private Classcase classCase;
	
	/**
	 * 后台通过trainingClassId获取ClassCase
	 * author:Apache
	 * time:2014-1-27 14:43
	 * @return
	 */
	public String getClassCaseByTrainingClassId(){
	
		List<Classcase> list =  classCaseService.getClassCaseByExample(classCase);
		dataMap.put("list", list);
		
		return this.SUCCESS;
	}
	
	/**
	 * 后台根据ClassCaseId删除ClassCase
	 * author:Apache
	 * time:2014-1-27 16:48
	 * @return
	 */
	public String deleteClassCase(){
		
		classCaseService.deleteClassCase(classCase);
		return this.SUCCESS;
	}

	public Map<String, Object> getDataMap() {
		return dataMap;
	}

	public void setDataMap(Map<String, Object> dataMap) {
		this.dataMap = dataMap;
	}

	public ClassCaseService getClassCaseService() {
		return classCaseService;
	}

	public void setClassCaseService(ClassCaseService classCaseService) {
		this.classCaseService = classCaseService;
	}

	public Trainingclass getTrainingClass() {
		return trainingClass;
	}

	public void setTrainingClass(Trainingclass trainingClass) {
		this.trainingClass = trainingClass;
	}

	public Classcase getClassCase() {
		return classCase;
	}

	public void setClassCase(Classcase classCase) {
		this.classCase = classCase;
	}
	
	
}
