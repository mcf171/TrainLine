package cn.com.service;

import java.util.List;


import cn.com.dao.CompanyDAO;
import cn.com.dao.DepartmentDAO;
import cn.com.dao.PositionDAO;
import cn.com.dao.UserDAO;
import cn.com.model.Company;
import cn.com.model.Department;
import cn.com.model.Position;
import cn.com.model.User;

public class HumanService {
	private UserDAO userDAO;
	private CompanyDAO companyDAO;
	private DepartmentDAO departmentDAO;
	private PositionDAO positionDAO;
	
	public List<User> getUserList(){
		return userDAO.findAll();
	}
	
	public List<Company> getCompanyList(){
		return companyDAO.findAll();
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
	
	public List<Department> getDepartmentListByCompanyId(int companyId){
		System.out.println(companyId);
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
}
