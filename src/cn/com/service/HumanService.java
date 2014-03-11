package cn.com.service;

import java.io.File;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;

import jxl.Cell;
import jxl.Sheet;
import jxl.Workbook;
import cn.com.dao.CompanyDAO;
import cn.com.dao.DepartmentDAO;
import cn.com.dao.EducationbackgroundDAO;
import cn.com.dao.MajorqualificationDAO;
import cn.com.dao.PersonalinformationDAO;
import cn.com.dao.PositionDAO;
import cn.com.dao.UserDAO;
import cn.com.model.Company;
import cn.com.model.Course;
import cn.com.model.Department;
import cn.com.model.Educationbackground;
import cn.com.model.Majorqualification;
import cn.com.model.Personalinformation;
import cn.com.model.Position;
import cn.com.model.User;
import cn.com.util.DAOUtil;
import cn.com.util.GlobalConstant;
import cn.com.util.MD5;
import cn.com.util.UploadUtil;
import cn.com.util.WebUtil;

public class HumanService {
	
	private CourseService courseService;
	private UserDAO userDAO;
	private CompanyDAO companyDAO;
	private DepartmentDAO departmentDAO;
	private PositionDAO positionDAO;
	private PersonalinformationDAO personalinformationDAO;
	private MajorqualificationDAO majorqualificationDAO;
	private EducationbackgroundDAO educationbackgroundDAO;
	private DAOUtil daoUtil;
	
	/**
	 * 分页条件查询
	 * @author Apache
	 * @time 2014-3-8 23:35
	 * @param page
	 * @param limit
	 * @param user
	 * @return
	 */
	public List<User> getUserList(int page, int limit, User user){

		daoUtil.setLimit(limit);
		daoUtil.setPage(page);
		
		int firstResults = daoUtil.getFirstResult();
		int maxResults = daoUtil.getMaxResult();
		
		user = user == null ? new User() : user;
		
		List<User> list = userDAO.findByPage(firstResults, maxResults, user);
		
		 return list;
	}
	
	public List<User> getUserByExample(User user){
		return userDAO.findByExample(user);
	}
	
	public User getUserById(int id){
		return userDAO.findById(id);
	}

	
	public boolean addUser(User user){
		boolean flag = false;
		try{
			userDAO.save(user);
			flag = true;
		}catch (Exception e) {
			flag = false;
			e.printStackTrace();
		}
		return flag;
	}
	
	public boolean modifyUser(User user,String[] positions){
		boolean flag = false;
		try{
			
			for(String item : positions){
				
				Position position = new Position();
				position.setPositionId(Integer.parseInt(item));
				user.getPositions().add(position);
			}
			User temp = userDAO.findById(user.getUserId());
			if(!temp.getUserPassword().equals(user.getUserPassword())){
				
				user.setUserPassword(MD5.getInstance().getMD5ofStr(user.getUserPassword()));
			}
			userDAO.merge(user);
			flag = true;
		}catch (Exception e) {
			flag = false;
			e.printStackTrace();
		}
		return flag;
	}
	
	public void deleteUser(User user){
		
		try {
			
//		
//		if(user.getPersonalinformation().getPersonalInformationId() != null){
//			personalinformationDAO.delete(user.getPersonalinformation());
//		}
//		if(user.getMajorqualification() != null){
//			majorqualificationDAO.delete(user.getMajorqualification());
//		}
//		if(user.getEducationbackground() != null){
//			educationbackgroundDAO.delete(user.getEducationbackground());
//		}
		userDAO.delete(user);
		
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
			throw new RuntimeException();
		}
	}
	
	public List<Company> getCompanyList(int page, int limit, Company company){

		daoUtil.setLimit(limit);
		daoUtil.setPage(page);
		
		int firstResults = daoUtil.getFirstResult();
		int maxResults = daoUtil.getMaxResult();
		
		company = company == null ? new Company() : company;
		
		List<Company> list = companyDAO.findByPage(firstResults, maxResults, company);
		
		 return list;
	}
	
	
	public Company getCompanyByName(Object companyName){
		return (Company) companyDAO.findByCompanyName(companyName).get(0);
	}
	
	public Company getCompanyById(int companyId){
		return companyDAO.findById(companyId);
	}
	
	public boolean addCompany(Company company){
		boolean flag = false;
		try{
			companyDAO.save(company);
			flag = true;
		}catch (Exception e) {
			flag = false;
			e.printStackTrace();
		}
		return flag;
	}
	
	public void deleteCompany(Company company){
		
		List<Department> departmentList = departmentDAO.findByProperty("company.companyId", company.getCompanyId());
		for(int i=0; i<departmentList.size(); i++){
			deleteDepartment(departmentList.get(i));
		}
		companyDAO.delete(company);
	}
	
	public boolean modifyCompany(Company company){
		boolean flag = false;
		try{
			companyDAO.merge(company);
			flag = true;
		}catch (Exception e) {
			flag = false;
			e.printStackTrace();
		}
		return flag;
	}
	
	/**
	 * 分页条件查询deparment
	 * @author Apache
	 * @time 2014-3-9 13:04
	 * @param page
	 * @param limit
	 * @param department
	 * @return
	 */
	public List<Department> getDepartmentList(int page, int limit, Department department){

		daoUtil.setLimit(limit);
		daoUtil.setPage(page);
		
		int firstResults = daoUtil.getFirstResult();
		int maxResults = daoUtil.getMaxResult();
		
		department = department == null ? new Department() : department;
		
		List<Department> list = departmentDAO.findByPage(firstResults, maxResults, department);
		
		 return list;
	}
	
	
	public List<Department> getDepartmentListByCompanyId(int companyId){
		Company company = companyDAO.findById(companyId);
		List<Department> departmentList = departmentDAO.findByProperty("company.companyId", company.getCompanyId());
		return departmentList;
	}
	
	public Department getDepartmentById(int departmentId){
		return departmentDAO.findById(departmentId);
	}
	
	public boolean addDepartment(Department department){
		boolean flag = false;
		try{
			departmentDAO.save(department);
			flag = true;
		}catch(Exception e){
			flag = false;
			e.printStackTrace();
		}
		return flag;
	}
	
	public boolean modifyDepartment(Department department){
		boolean flag = false;
		try{
			departmentDAO.merge(department);
			flag = true;
		}catch (Exception e) {
			// TODO: handle exception
			flag = false;
			e.printStackTrace();
		}
		return flag;
	}
	

	public void deleteDepartment(Department department){
		List<Position> positionList = positionDAO.findByProperty("department.departmentId", department.getDepartmentId());
		for(int i=0; i<positionList.size(); i++){
			positionDAO.delete(positionList.get(i));
		}
		departmentDAO.delete(department);
	}
	
	/**
	 * 增加分页功能
	 * @author Apache
	 * @modifyTime 2014-3-7 21:00
	 * @param page
	 * @param limit
	 * @return
	 */
	public List<Position> getPositionList(int page, int limit,Position position ){

		daoUtil.setLimit(limit);
		daoUtil.setPage(page);
		
		int firstResults = daoUtil.getFirstResult();
		int maxResults = daoUtil.getMaxResult();
		
		position = position == null ? new Position() : position;
		
		List<Position> list = positionDAO.findByPage(firstResults, maxResults, position);
		
		return list;
	}
	
	/**
	 * 条件查询分页
	 * @author Apache
	 * @time 2014-3-7 21:29
	 * @param page
	 * @param limit
	 * @param position
	 * @return
	 */
	public List<Position> getPositionList(String page, String limit, Position position){
		
		return positionDAO.findAll();
	}


	public List<Position> searchPositionList(Position position){
		return positionDAO.findByExampleFuzzy(position);
	}
	
	public Position getPositionById(int positionId){
		return positionDAO.findById(positionId);
	}
	
	/**
	 * 增加Position
	 * @author Apache
	 * @time 2014-3-5 10:00
	 * @param position
	 * @param courseIds
	 * @return
	 */
	public boolean addPosition(Position position, String[] courseIds){
		boolean flag = false;
		try{
			for(String courseId : courseIds){
				
				Course course = courseService.getCourse(Integer.parseInt(courseId));
				position.getCourses().add(course);
			}
			positionDAO.save(position);
			flag = true;
		}catch (Exception e) {
			// TODO: handle exception
			flag = false;
			e.printStackTrace();
		}
		return flag;
	}
	
	public boolean modifyPosition(Position position, String[] courseIds){
		boolean flag = false;
		try{
			for(String courseId : courseIds){
				
				Course course = courseService.getCourse(Integer.parseInt(courseId));
				position.getCourses().add(course);
			}
			positionDAO.merge(position);
			flag = true;
		}catch (Exception e) {
			// TODO: handle exception
			flag = false;
			e.printStackTrace();
		}
		return flag;
	}
	
	public void deletePosition(Position position){
		positionDAO.delete(position);
	}
	
	public Personalinformation getPersonalinformationById(int id){
		return personalinformationDAO.findById(id);
	}
	
	public Majorqualification getMajorqualificationById(int id){
		return majorqualificationDAO.findById(id);
	}
	
	public Educationbackground getEducationbackgroundById(int id){
		return educationbackgroundDAO.findById(id);
	}
	
	public boolean deletePersonalinformation(Personalinformation personalinformation) {
		boolean flag = false;
		try {
			personalinformationDAO.delete(personalinformation);
			flag = true;
		} catch (Exception e) {
			// TODO: handle exception
			flag = false;
			e.printStackTrace();
		}
		return flag;
	}
	
	public boolean deleteMajorqualification(Majorqualification majorqualification) {
		boolean flag = false;
		try {
			majorqualificationDAO.delete(majorqualification);
			flag = true;
		} catch (Exception e) {
			// TODO: handle exception
			flag = false;
			e.printStackTrace();
		}
		return flag;
	}
	
	public boolean deleteEducationbackground(Educationbackground educationbackground) {
		boolean flag = false;
		try {
			educationbackgroundDAO.delete(educationbackground);
			flag = true;
		} catch (Exception e) {
			// TODO: handle exception
			flag = false;
			e.printStackTrace();
		}
		return flag;
	}
	
	public boolean addPersonalinformation(Personalinformation personalinformation){
		boolean flag = false;
		try{
			personalinformationDAO.save(personalinformation);
			flag = true;
		}catch (Exception e) {
			flag = false;
			e.printStackTrace();
		}
		return flag;
	}
	
	public boolean addMajorqualification(Majorqualification majorqualification){
		boolean flag = false;
		try{
			majorqualificationDAO.save(majorqualification);
			flag = true;
		}catch (Exception e) {
			flag = false;
			e.printStackTrace();
		}
		return flag;
	}
	
	public boolean addEducationbackground(Educationbackground educationbackground){
		boolean flag = false;
		try{
			educationbackgroundDAO.save(educationbackground);
			flag = true;
		}catch (Exception e) {
			flag = false;
			e.printStackTrace();
		}
		return flag;
	}
	
	public boolean modifyPersonalinformation(Personalinformation personalinformation){
		boolean flag = false;
		try{
			personalinformationDAO.merge(personalinformation);
			flag = true;
		}catch (Exception e) {
			flag = false;
			e.printStackTrace();
		}
		return flag;
	}
	
	public boolean modifyEducationbackground(Educationbackground educationbackground){
		boolean flag = false;
		try{
			educationbackgroundDAO.merge(educationbackground);
			flag = true;
		}catch (Exception e) {
			flag = false;
			e.printStackTrace();
		}
		return flag;
	}
	
	public boolean modifyMajorqualification(Majorqualification majorqualification){
		boolean flag = false;
		try{
			majorqualificationDAO.merge(majorqualification);
			flag = true;
		}catch (Exception e) {
			flag = false;
			e.printStackTrace();
		}
		return flag;
	}
	
	public UserDAO getUserDAO() {
		return userDAO;
	}

	public void setUserDAO(UserDAO userDAO) {
		this.userDAO = userDAO;
	}

	public CompanyDAO getCompanyDAO() {
		return companyDAO;
	}

	public void setCompanyDAO(CompanyDAO companyDAO) {
		this.companyDAO = companyDAO;
	}

	public DepartmentDAO getDepartmentDAO() {
		return departmentDAO;
	}

	public void setDepartmentDAO(DepartmentDAO departmentDAO) {
		this.departmentDAO = departmentDAO;
	}

	public PositionDAO getPositionDAO() {
		return positionDAO;
	}

	public void setPositionDAO(PositionDAO positionDAO) {
		this.positionDAO = positionDAO;
	}

	public PersonalinformationDAO getPersonalinformationDAO() {
		return personalinformationDAO;
	}

	public void setPersonalinformationDAO(
			PersonalinformationDAO personalinformationDAO) {
		this.personalinformationDAO = personalinformationDAO;
	}

	public MajorqualificationDAO getMajorqualificationDAO() {
		return majorqualificationDAO;
	}

	public void setMajorqualificationDAO(MajorqualificationDAO majorqualificationDAO) {
		this.majorqualificationDAO = majorqualificationDAO;
	}

	public EducationbackgroundDAO getEducationbackgroundDAO() {
		return educationbackgroundDAO;
	}

	public void setEducationbackgroundDAO(
			EducationbackgroundDAO educationbackgroundDAO) {
		this.educationbackgroundDAO = educationbackgroundDAO;
	}

	public CourseService getCourseService() {
		return courseService;
	}

	public void setCourseService(CourseService courseService) {
		this.courseService = courseService;
	}

	public DAOUtil getDaoUtil() {
		return daoUtil;
	}

	public void setDaoUtil(DAOUtil daoUtil) {
		this.daoUtil = daoUtil;
	}

	/**
	 * 获取模糊查询的User数
	 * @author Apache
	 * @time 2014-3-8 23:36
	 * @param user
	 * @return
	 */
	public int getTotalCount(User user) {
		// TODO Auto-generated method stub

		List<User>list = userDAO.findByExampleFuzzy(user);
		
		int totalCount = list.size();
		
		return totalCount;
	}

	/**
	 * 获取TotalCount
	 * @author Apache
	 * @time 2014-3-9 12:50
	 * @param company
	 * @return
	 */
	public int getTotalCount(Company company) {
		// TODO Auto-generated method stub

		List<Company>list = companyDAO.findByExampleFuzzy(company);
		
		int totalCount = list.size();
		
		return totalCount;
	}

	/**
	 * 获取所有Company
	 * @author Apache
	 * @time 2014-3-9 12:42
	 * @return
	 */
	public List<Company> getCompanyList() {
		// TODO Auto-generated method stub
		return companyDAO.findAll();
	}

	/**
	 * 获取DepartmentCount
	 * @author Apahce
	 * @time 2014-3-9 12:59
	 * @param department
	 * @return
	 */
	public int getTotalCount(Department department) {
		// TODO Auto-generated method stub

		List<Department>list = departmentDAO.findByExampleFuzzy(department);
		
		int totalCount = list.size();
		
		return totalCount;
	}

	/**
	 * 获取Position记录数
	 * @author Apache
	 * @time 2014-3-9 19:15
	 * @param position
	 * @return
	 */
	public int getTotalCount(Position position) {
		// TODO Auto-generated method stub
		List<Position>list = positionDAO.findByExampleFuzzy(position);
		
		int totalCount = list.size();
		
		return totalCount;
	}

	/**
	 * 批量上传公司
	 * @author Apache
	 * @time 2014-3-9 23:29
	 * @param file
	 * @param uploadFileName
	 * @return
	 */
	public boolean batchUploadCompany(File file, String uploadFileName) {
		// TODO Auto-generated method stub

		boolean flag = false;
		
		try{
		
		String time = Calendar.getInstance().getTimeInMillis() + "";
		String saveFileName = time +  uploadFileName.substring(uploadFileName.lastIndexOf("."));
		String savePath = WebUtil.getWebSitePhysalPath() + GlobalConstant.SAVEPATH_TEMP + saveFileName;
		File dstFile = new File(savePath);
		UploadUtil.copyFile(file, dstFile);
		
		Workbook book = Workbook.getWorkbook(new File(savePath));
        // 获得第一个工作表对象
        Sheet sheet = book.getSheet(0);
        // 得到第一列第一行的单元格
        int rows = sheet.getRows();
        for(int i=1 ; i < rows ; i++){
        	
        	Cell[] cells = sheet.getRow(i);
        	Company company = new Company();
        	
        	for(int j=0 ; j< cells.length; j++){
        		
        		switch(j){
        		
        		//case 0: company.setCompanyId(Integer.parseInt(cells[j].getContents()));break;
        		case 0: company.setCompanyName(cells[j].getContents());break;
        		case 1: company.setCompanystatus(Integer.parseInt(cells[j].getContents()));break;
        		case 2: company.setCompanyIntro(cells[j].getContents());break;
        		case 3: company.setCompanyShortName(cells[j].getContents());break;
        		}
        		
        	}
        	companyDAO.save(company);
        }
        
        book.close();
        
        dstFile.delete();
        flag = true;
		}
		catch(Exception e){
			e.printStackTrace();
			flag = false;
			throw new RuntimeException();
		}
		return flag;
	}

	/**
	 * 批量上传部门
	 * @author Apache
	 * @time 2014-3-9 23:36
	 * @param upload
	 * @param uploadFileName
	 * @return
	 */
	public boolean batchUploadDepartment(File file, String uploadFileName) {
		// TODO Auto-generated method stub

		boolean flag = false;
		
		try{
		
		String time = Calendar.getInstance().getTimeInMillis() + "";
		String saveFileName = time +  uploadFileName.substring(uploadFileName.lastIndexOf("."));
		String savePath = WebUtil.getWebSitePhysalPath() + GlobalConstant.SAVEPATH_TEMP + saveFileName;
		File dstFile = new File(savePath);
		UploadUtil.copyFile(file, dstFile);
		
		Workbook book = Workbook.getWorkbook(new File(savePath));
        // 获得第一个工作表对象
        Sheet sheet = book.getSheet(0);
        // 得到第一列第一行的单元格
        int rows = sheet.getRows();
        for(int i=1 ; i < rows ; i++){
        	
        	Cell[] cells = sheet.getRow(i);
        	Department department = new Department();
        	
        	for(int j=0 ; j< cells.length; j++){
        		
        		switch(j){
        		
        		//case 0: department.setDepartmentId(Integer.parseInt(cells[j].getContents()));break;
        		case 0: department.setDepartmentName(cells[j].getContents());break;
        		case 1: department.setDepartmentstatus(Integer.parseInt(cells[j].getContents()));break;
        		case 2: department.setDepartmentShortName(cells[j].getContents());break;
        		case 3: department.setBusinessUnits(cells[j].getContents());break;
        		case 4: department.setDepartmentCoding(cells[j].getContents());break;
        		case 5: department.setCountry(cells[j].getContents());break;
        		case 6: 
        			List<Company> list = companyDAO.findByCompanyShortName(cells[j].getContents());
        			if(list.size()>1){
        				throw new RuntimeException();
        			}
        			Company company = list.get(0);
        			department.setCompany(company);
        			break;
        		}
        		
        	}
        	departmentDAO.save(department);
        }
        
        book.close();
        
        dstFile.delete();
        flag = true;
		}
		catch(Exception e){
			e.printStackTrace();
			flag = false;
			throw new RuntimeException();
		}
		return flag;
	}


	/**
	 * 批量上传岗位
	 * @author Apache
	 * @time 2014-3-9 23:36
	 * @param upload
	 * @param uploadFileName
	 * @return
	 */
	public boolean batchUploadPosition(File file, String uploadFileName) {
		// TODO Auto-generated method stub

		boolean flag = false;
		
		try{
		
		String time = Calendar.getInstance().getTimeInMillis() + "";
		String saveFileName = time +  uploadFileName.substring(uploadFileName.lastIndexOf("."));
		String savePath = WebUtil.getWebSitePhysalPath() + GlobalConstant.SAVEPATH_TEMP + saveFileName;
		File dstFile = new File(savePath);
		UploadUtil.copyFile(file, dstFile);
		
		Workbook book = Workbook.getWorkbook(new File(savePath));
        // 获得第一个工作表对象
        Sheet sheet = book.getSheet(0);
        // 得到第一列第一行的单元格
        int rows = sheet.getRows();
        for(int i=1 ; i < rows ; i++){
        	
        	Cell[] cells = sheet.getRow(i);
        	Position position = new Position();
        	
        	for(int j=0 ; j< cells.length; j++){
        		
        		switch(j){
        		
        		//case 0: position.setPositionId(Integer.parseInt(cells[j].getContents()));break;
        		case 0: position.setPositionName(cells[j].getContents());break;
        		case 1: 
        			List<Department> list = departmentDAO.findByDepartmentCoding(cells[j].getContents());
        			Department department = list.get(0);
        			if(list.size()>1){
        				throw new RuntimeException();
        			}
        			position.setDepartment(department);
        			break;
        		}
        		
        	}
        	positionDAO.save(position);
        }
        
        book.close();
        
        dstFile.delete();
        flag = true;
		}
		catch(Exception e){
			e.printStackTrace();
			flag = false;
			throw new RuntimeException();
		}
		return flag;
	}
	
}
