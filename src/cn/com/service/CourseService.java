package cn.com.service;

import java.io.File;
import java.sql.Timestamp;
import java.util.Calendar;
import java.util.Date;
import java.util.List;
import java.util.Set;

import cn.com.dao.CatalogueDAO;
import cn.com.dao.CourseDAO;
import cn.com.dao.ResourseandcatelogueDAO;
import cn.com.model.Catalogue;
import cn.com.model.Course;
import cn.com.model.Resource;
import cn.com.model.User;
import cn.com.util.FlexpaperUtil;
import cn.com.util.GlobalConstant;
import cn.com.util.UploadUtil;
import cn.com.util.WebUtil;

public class CourseService {
	
	private CourseDAO courseDAO;
	private CatalogueDAO catalogueDAO;
	private ResourceService resourceService;
	private ResourseandcatelogueDAO resourseandcatelogueDAO;
	private CatalogueService catalogueService;

	public Integer insert(Course course) {
		return courseDAO.save(course);
	}
	
	public boolean addChapter(File[] srcFile, String[] fileNames, Catalogue catalogue,User user){
		
		boolean flag = false;
		
		for (int i = 0; i < srcFile.length; i++) {
			
			Resource resource = new Resource();
			resource.setResourceName(fileNames[i]);
			resource.setCatalogue(catalogue);
			resource.setDownloundCount(0);
			String resourceType = resource.getResourceName().substring(resource.getResourceName().lastIndexOf("."));
			
			
			if(GlobalConstant.ALLOW_UPLOAD_DOC.contains(resourceType)||GlobalConstant.ALLOW_UPLOAD_MEDIO.contains(resourceType)){
				
				
				String time = Calendar.getInstance().getTimeInMillis() + "";
				String resourcePath = GlobalConstant.SAVEPATH_COURSE_RESOURCE +   time + resourceType;
				String dstSavePath = WebUtil.getWebSitePhysalPath() + resourcePath;
				File dstFile = new File(dstSavePath);
				UploadUtil.copyFile(srcFile[i], dstFile);
				int resourceTypeInt = 2;
				try {
				
					if(GlobalConstant.ALLOW_UPLOAD_DOC.contains(resourceType)){
					
						flag = FlexpaperUtil.converterDocumentToSWF(WebUtil.getWebSitePhysalPath(), GlobalConstant.SAVEPATH_COURSE_RESOURCE,  time + resourceType);
						resourcePath = resourcePath.substring(0,resourcePath.lastIndexOf(".")) + ".swf";
						resourceTypeInt = 1;
					}
				
					resource.setResourcePath(resourcePath);
					resource.setResourceType(resourceTypeInt);
					
					catalogue.getResource().add(resource);
					catalogue.setUploadingPerson(user.getUserName());
					Timestamp timestamp = new Timestamp(new Date().getTime());
					catalogue.setUploading(timestamp);
					catalogueDAO.save(catalogue);
					flag = true;
					
				} catch (Exception e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
					flag = false;
					throw new RuntimeException();
				}
			
			}
		}
		
		return flag;
		
	}
	
	/**
	 * 模糊查询
	 * @param course
	 * @return
	 */
	public List<Course> findByExample(Course course){
		
		return courseDAO.findByExample(course);
	}
	/**
	 * 删除课程，同时删除catalog
	 * author:Apache
	 * modifyTime:2014-1-16 13:19
	 * @param course 传入的course ，至少包括courseId;
	 */
	public void delete(Course course)
	{
		try {
		
		course = courseDAO.findById(course.getCourseId());
		
		for(Catalogue item : course.getCatalogues()){
			
			for(Resource resource : item.getResource() ){
				
				File file = new File(WebUtil.getWebSitePhysalPath() + resource.getResourcePath());
				if(file.exists()){
					file.delete();
				}
			}
		}
		
		courseDAO.delete(course);
		
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
			throw new RuntimeException();
		}
	}
	
	public void update(Course course)
	{
		courseDAO.merge(course);
	}
/**
 * 通过ID查询
 * @param course
 * @return
 */
	public Course getCourse(Course course)
	{
		
		return courseDAO.findById(course.getCourseId());
	}
	
	/**
	 * 通过Id查询
	 * @author Apache
	 * @time 2014-3-5 10:02
	 * @param courseId
	 * @return
	 */
	public Course getCourse(int courseId)
	{
		
		return courseDAO.findById(courseId);
	}
	
	public List<Course> findAll(){
		return courseDAO.findAll();
		
	}

	public CourseDAO getCourseDAO() {
		return courseDAO;
	}

	public void setCourseDAO(CourseDAO courseDAO) {
		this.courseDAO = courseDAO;
	}

	public List<Course> searchCourses(Course course) {
		return courseDAO.searchCourses(course);
	}

	public CatalogueDAO getCatalogueDAO() {
		return catalogueDAO;
	}

	public void setCatalogueDAO(CatalogueDAO catalogueDAO) {
		this.catalogueDAO = catalogueDAO;
	}

	public void addChapterAndRescourse(Catalogue catalogue, Set<Resource> set) {
		catalogueDAO.save(catalogue);
	   
	}


	public ResourseandcatelogueDAO getResourseandcatelogueDAO() {
		return resourseandcatelogueDAO;
	}


	public void setResourseandcatelogueDAO(ResourseandcatelogueDAO resourseandcatelogueDAO) {
		this.resourseandcatelogueDAO = resourseandcatelogueDAO;
	}


	public List<Course> fgFindAll() {
		return courseDAO.fgFindAll();
	}


	public List<Course> findCourseToCenter(String keyWords, String courseType,
			String positionName) {
		return courseDAO.findCourseToCenter(keyWords,courseType,positionName);
	}


	public List<Course> fgFindMyAllCourse(Integer userId) {
		return courseDAO.fgFindMyAllCourse(userId);
	}


	public List<Course> fgFindMyAllCourse(Integer userId, Course course) {
		
		return courseDAO.fgFindMyAllCourse(userId,course);
	}


	public List<Course> fbFindExampleCourse() {
		return courseDAO.fbFindExampleCourse();
	}


	public List<Course> fbFindExampleCourse(Course course) {
		return courseDAO.fbFindExampleCourse(course);
	}


	public List<Catalogue> getCataloguDetail(Integer courseId) {
		return courseDAO.getCataloguDetail(courseId);
	}
	
	public List<Course> findDangJianKeCheng(){
		
		return courseDAO.findByProperty("courseState", 3);
	}
	
	public List<Course> findDangJianJiangZuo(){
		
		return courseDAO.findByProperty("courseState", 4);
	}
	public CatalogueService getCatalogueService() {
		return catalogueService;
	}
	public void setCatalogueService(CatalogueService catalogueService) {
		this.catalogueService = catalogueService;
	}
	public ResourceService getResourceService() {
		return resourceService;
	}
	public void setResourceService(ResourceService resourceService) {
		this.resourceService = resourceService;
	}
	
	
}
