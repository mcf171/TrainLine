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
import cn.com.model.User;
import cn.com.service.CourseService;

/**
 */

public class CourseAction extends BaseActionSupport {
	private List<Course> cList;
	private List<Catalogue> ctList;
	private CourseService courseService;
	private Map<String, List> dataMap;

	private Integer courseId;
	private Course course;

	private String catalogueName;

	private String keyWords;
	private String positionName;
	private String courseType;

	// 文件上传
	public static final int BUFFER_SIZE = 1024 * 6;
	private String title;
	private File[] upload;
	private String[] uploadFileName;
	private String[] uploadContentTypeName;
	private String savePath;

	/**
	 * 上传文件 文件流控制
	 * 
	 * @param src
	 * @param dst
	 */
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

	/**
	 * 上传资源并存入数据库路径等信息
	 * 
	 * @return
	 * @throws Exception
	 */
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
		courseId = (Integer) request.getAttribute("courseId");
		if (courseId != null) {
			catalogue.setCourseId(courseId);
		}
		try {
			courseService.addChapterAndRescourse(catalogue, set);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return "intoaddChapterPage";
	}

	public String intoaddChapterPage() {
		if (courseId != null) {
			request.setAttribute("courseId", courseId);
		}
		return "intoaddChapterPage";
	}

	/**
	 * 添加课程
	 * 
	 * @return
	 */
	public String addCourse() {
		if (course != null) {
			courseId = courseService.insert(course);
		}
		return JSON;
	}

	public CourseAction() {
		dataMap = new HashMap<String, List>();
	}

	/**
	 * 返回所有课程
	 * 
	 * @return
	 */
	public String findAllCourse() {
		if (course != null) {
			cList = courseService.searchCourses(course);
		} else {
			cList = courseService.findAll();
		}
		dataMap.put("cList", cList);
		return SUCCESS;
	}

	/**
	 * 前台返回课程
	 * 
	 * @return
	 */
	public String fbfindCourse() {
		if (positionName != null || courseType != null) {
			cList = courseService.findCourseToCenter(keyWords, courseType,
					positionName);
		} else {
			cList = courseService.fgFindAll();
		}
		dataMap.put("cList", cList);
		return SUCCESS;
	}

	/**
	 * 前台学习中心，我的课程
	 * 
	 * @return
	 */
	public String fbFindMyCourse() {
		User user = null;
		user = (User) session.get("user");
		if (user != null) {

			if (course != null) {
				cList = courseService.fgFindMyAllCourse(user.getUserId(),
						course);
			} else {
				cList = courseService.fgFindMyAllCourse(user.getUserId());
			}
		}

		dataMap.put("cList", cList);
		return SUCCESS;
	}

	/**
	 * 前台案例教学
	 * 
	 * @return
	 */
	public String fbFindExampleCourse() {

		if (course != null) {
			cList = courseService.fbFindExampleCourse(course);
		} else {
			cList = courseService.fbFindExampleCourse();
		}
		dataMap.put("cList", cList);
		return SUCCESS;
	}

	/**
	 * 删除课程
	 */
	public String deleteCourse() {
		Course course = new Course();
		course.setCourseId(courseId);
		courseService.delete(course);

		return JSON;
	}

	/**
	 * 根据Id返回course
	 * 
	 * @return
	 */
	public String getCourseById() {
		if (course != null) {
			course = courseService.getCourse(course);
		}
		return JSON;
	}

	/**
	 * 更新一条记录
	 * 
	 * @return
	 */
	public String updateCourse() {
		if (course != null) {
			courseService.update(course);
		}
		return JSON;
	}

	public String intoDetailCourseInfo() {
		if (courseId != null) {
			request.setAttribute("courseId", courseId);
		}
		return "detailCourseInfo";
	}

	/**
	 * 根据课程id查看章节信息
	 * 
	 * @return
	 */
	public String catalogueDetail()
	{
	if(courseId!=null)
	{
		ctList = courseService.getCataloguDetail(courseId);
	}
		
		return JSON;
	}

	

	public String intoAddcoursePage() {
		return "addCourse";
	}

	public String intoCoursePage() {

		return "intoCoursePage";
	}

	public String intoStudyCenter() {
		return "intoStudyCenter";
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

	public String getKeyWords() {
		return keyWords;
	}

	public void setKeyWords(String keyWords) {
		this.keyWords = keyWords;
	}

	public String getPositionName() {
		return positionName;
	}

	public void setPositionName(String positionName) {
		this.positionName = positionName;
	}

	public String getCourseType() {
		return courseType;
	}

	public void setCourseType(String courseType) {
		this.courseType = courseType;
	}

	public List<Catalogue> getCtList() {
		return ctList;
	}

	public void setCtList(List<Catalogue> ctList) {
		this.ctList = ctList;
	}
}
