package cn.com.service;

import java.util.ArrayList;
import java.util.List;

import org.junit.runner.Request;

import cn.com.dao.CompanyDAO;
import cn.com.dao.DepartmentDAO;
import cn.com.dao.PersonalinformationDAO;
import cn.com.dao.PositionDAO;
import cn.com.dao.UserDAO;
import cn.com.model.Company;
import cn.com.model.Department;
import cn.com.model.Personalinformation;
import cn.com.model.Position;
import cn.com.model.User;
import cn.com.model.UserDTO;

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
			// TODO: handle exception
			flag = false;
			e.printStackTrace();
		}finally{
			flag = false;
		}
		return flag;
	}
	
	
	public boolean modifyCompany(Company company){
		boolean flag = false;
		try{
			companyDAO.merge(company);
			flag = true;
		}catch (Exception e) {
			// TODO: handle exception
			flag = false;
			e.printStackTrace();
		}finally{
			flag = false;
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
		for(int i=0; i<departmentList.size(); i++){
			System.out.println("DepartmentName:" + departmentList.get(i).getDepartmentName());
		}
		return departmentList;
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
	
	public List<Position> getPositionList(){
		return positionDAO.findAll();
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
