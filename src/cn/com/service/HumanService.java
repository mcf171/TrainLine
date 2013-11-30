package cn.com.service;

import java.util.ArrayList;
import java.util.List;


import cn.com.dao.CompanyDAO;
import cn.com.dao.DepartmentDAO;
import cn.com.dao.EducationbackgroundDAO;
import cn.com.dao.MajorqualificationDAO;
import cn.com.dao.PersonalinformationDAO;
import cn.com.dao.PositionDAO;
import cn.com.dao.UserDAO;
import cn.com.model.Company;
import cn.com.model.Department;
import cn.com.model.Educationbackground;
import cn.com.model.Majorqualification;
import cn.com.model.Personalinformation;
import cn.com.model.Position;
import cn.com.model.User;

public class HumanService {
	private UserDAO userDAO;
	private CompanyDAO companyDAO;
	private DepartmentDAO departmentDAO;
	private PositionDAO positionDAO;
	private PersonalinformationDAO personalinformationDAO;
	private MajorqualificationDAO majorqualificationDAO;
	private EducationbackgroundDAO educationbackgroundDAO;
	
	public List<User> getUserList(){
		List<User> list = userDAO.findAll();
		return userDAO.findAll();
	}
	
	public List<User> getUserByExample(User user){
		return userDAO.findByExample(user);
	}
	
	public User getUserById(int id){
		return userDAO.findById(id);
	}
	
	public List<User> searchUserList(User user){
		String realName = user.getPersonalinformation().getRealName();
		List<User> userList = new ArrayList<User>();
		if(realName.equals("") || realName == null){
			userList = userDAO.findByExampleFuzzy(user);
		}else{
			List<Personalinformation> list =  personalinformationDAO.findByRealName(realName);
			for(int i=0; i<list.size(); i++){
				user.getPersonalinformation().setPersonalInformationId(list.get(i).getPersonalInformationId());
			    List userListParam = userDAO.findByExampleFuzzy(user);
			    userList.addAll(userListParam);
			}
		}
		return userList;
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
	
	public boolean modifyUser(User user){
		boolean flag = false;
		try{
			userDAO.merge(user);
			flag = true;
		}catch (Exception e) {
			flag = false;
			e.printStackTrace();
		}
		return flag;
	}
	
	public void deleteUser(User user){
		if(user.getPersonalinformation().getPersonalInformationId() != null){
			personalinformationDAO.delete(user.getPersonalinformation());
		}
		if(user.getMajorqualification() != null){
			majorqualificationDAO.delete(user.getMajorqualification());
		}
		if(user.getEducationbackground() != null){
			educationbackgroundDAO.delete(user.getEducationbackground());
		}
		userDAO.delete(user);
	}
	
	public List<Company> getCompanyList(){
		return companyDAO.findAll();
	}
	
	public List<Company> searchCompanyList(Company company){
		return companyDAO.findByExampleFuzzy(company);
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
	
	public List<Department> getDepartmentList(){
		return departmentDAO.findAll();
	}
	
	public List<Department> searchDepartmentList(Department department){
		List<Company> companyList = companyDAO.findByCompanyName(department.getCompany().getCompanyName());
		if(companyList.size() > 0){			
			department.getCompany().setCompanyId(companyList.get(0).getCompanyId());
		}
		return departmentDAO.findByExampleFuzzy(department);
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
	
	public List<Position> getPositionList(){
		return positionDAO.findAll();
	}

	public List<Position> searchPositionList(Position position){
		return positionDAO.findByExampleFuzzy(position);
	}
	
	public Position getPositionById(int positionId){
		return positionDAO.findById(positionId);
	}
	
	public boolean addPosition(Position position){
		boolean flag = false;
		try{
			positionDAO.save(position);
			flag = true;
		}catch (Exception e) {
			// TODO: handle exception
			flag = false;
			e.printStackTrace();
		}
		return flag;
	}
	
	public boolean modifyPosition(Position position){
		boolean flag = false;
		try{
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
}
