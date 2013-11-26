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
import java.util.Date;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.apache.struts2.ServletActionContext;
import cn.com.base.BaseActionSupport;
import cn.com.model.Catalogue;
import cn.com.model.Course;
import cn.com.model.Resource;
import cn.com.model.Resourseandcatelogue;
import cn.com.model.ResourseandcatelogueId;
import cn.com.service.CourseService;

/**/
public class CourseAction extends BaseActionSupport {
	private List<Course> cList;
	private CourseService courseService;
	private Map<String, List> dataMap;

	private Integer courseId;
	private Course course;

	private String catalogueName;

	// 文件上传
	public static final int BUFFER_SIZE = 1024 * 6;
	private String title;
	private File[] upload;
	private String[] uploadFileName;
	private String[] uploadContentTypeName;
	private String savePath;

	private static void copyFile(File src, File dst) {
		InputStream inputStream = null;
		OutputStream outputStream = null;
		try {

			inputStream = new BufferedInputStream(new FileInputStream(src),
					BUFFER_SIZE);
			outputStream = new BufferedOutputStream(new FileOutputStream(dst),
					BUFFER_SIZE);
			byte[] buffer = new byte[BUFFER_SIZE];
			int len = 0;
			while ((len = inputStream.read(buffer)) > 0) {
				outputStream.write(buffer, 0, len);
			}

		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			try {
				if (null != inputStream) {
					inputStream.close();
				}
				if (null != outputStream) {
					outputStream.close();
				}
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
	}

	public String addRescourse() throws Exception {
		File[] srcFile = this.getUpload();
		Set<Resource> set = new HashSet<Resource>();
		for (int i = 0; i < srcFile.length; i++) {
			String path = this.getSavePath() + "\\"
					+ this.getUploadFileName()[i];
			String dstSavePath = ServletActionContext.getServletContext()
					.getRealPath(path);
			File dstFile = new File(dstSavePath);
			this.copyFile(srcFile[i], dstFile);
			Resource resource = new Resource();
			resource.setResourceName(this.getUploadFileName()[i]);
			resource.setResourcePath(path);
			set.add(resource);
		}

		Catalogue catalogue = new Catalogue();
		catalogue.setCatalogueName(catalogueName);
		catalogue.setUploadingPerson("xuetai");
		Timestamp timestamp = new Timestamp(new Date().getTime());
		catalogue.setUploading(timestamp);
		courseId =(Integer) request.getAttribute("courseId");
		if(courseId!=null)
		{
			catalogue.setCourseId(courseId);
		}
		try{
		courseService.addChapterAndRescourse(catalogue,set);
		}catch (Exception e) {
			e.printStackTrace();
		}
		return "intoaddChapterPage";
	}
	
	public String intoaddChapterPage()
	{
		if(courseId!=null)
		{
		request.setAttribute("courseId", courseId);
		}
		return "intoaddChapterPage";
	}
	
	public String addCourse()
	{
		if(course!=null)
		{
			courseId=	courseService.insert(course);
		}
		return JSON;
	}

	public CourseAction() {
		dataMap = new HashMap<String, List>();
	}

	public String findAllCourse() {
		//cList = (List<Course>) session.get("cList");
		if (course != null) {
			cList = courseService.searchCourses(course);
			session.remove("cList");
		} 
		else {
//			if(cList==null){
				cList = courseService.findAll();
//				session.put("cList",cList);
//			}
		}
		dataMap.put("cList",cList);
		return SUCCESS;
	}

	public String deleteCourse() {
		Course course = new Course();
		course.setCourseId(courseId);
		courseService.delete(course);
		
		//cList = courseService.findAll();
		//cList = (List<Course>) session.put("cList",cList);
		return JSON;
	}

	public String getCourseById() {
		if (course!= null) {
			course = courseService.getCourse(course);
		}
		return JSON;
	}

	public String updateCourse() {
		if (course != null) {
			courseService.update(course);
//			cList = courseService.findAll();
//			session.put("cList",cList);
		}
		return JSON;
	}

	public String intoAddcoursePage() {
		return "addCourse";
	}

	public String intoCoursePage() {

		return "intoCoursePage";
	}

	public List<Course> getcList() {
		return cList;
	}

	public void setcList(List<Course> cList) {
		this.cList = cList;
	}

	public void setCourseService(CourseService courseService) {
		this.courseService = courseService;
	}

	public Map getDataMap() {
		return dataMap;
	}

	public void setDataMap(Map dataMap) {
		this.dataMap = dataMap;
	}

	public Integer getCourseId() {
		return courseId;
	}

	public void setCourseId(Integer courseId) {
		this.courseId = courseId;
	}

	public Course getCourse() {
		return course;
	}

	public void setCourse(Course course) {
		this.course = course;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public File[] getUpload() {
		return upload;
	}

	public void setUpload(File[] upload) {
		this.upload = upload;
	}

	public String[] getUploadFileName() {
		return uploadFileName;
	}

	public void setUploadFileName(String[] uploadFileName) {
		this.uploadFileName = uploadFileName;
	}

	public String[] getUploadContentTypeName() {
		return uploadContentTypeName;
	}

	public void setUploadContentTypeName(String[] uploadContentTypeName) {
		this.uploadContentTypeName = uploadContentTypeName;
	}

	public String getSavePath() {
		return savePath;
	}

	public void setSavePath(String savePath) {
		this.savePath = savePath;
	}

	public String getCatalogueName() {
		return catalogueName;
	}

	public void setCatalogueName(String catalogueName) {
		this.catalogueName = catalogueName;
	}
}
