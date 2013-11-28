package cn.com.action;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import cn.com.base.BaseActionSupport;
import cn.com.model.Company;
import cn.com.model.Department;
import cn.com.model.Position;
import cn.com.model.User;
import cn.com.model.UserDTO;
import cn.com.service.HumanService;

import com.opensymphony.xwork2.ActionSupport;

public class HumanAction extends BaseActionSupport {

	private HumanService humanService;
	private Map<String, Object> dataMap;
	private Company company;
	private Department department;

	public HumanAction() {
		super();
		// TODO Auto-generated constructor stub
		dataMap = new HashMap<String, Object>();
	}

	public String showBackendHumanPage() {
		return SUCCESS;
	}

	public String showBackendPersonPage() {
		return SUCCESS;
	}

	public String getPersonList() {
		List<User> userList = humanService.getUserList();
		dataMap.put("human", userList);
		return SUCCESS;
	}
	
	public String addPersonPage() {
		return SUCCESS;
	}
	
	//company部分
	public String showBackendCompanyPage() {
		return SUCCESS;
	}

	public String getCompanyList() {
		List<Company> companyList = humanService.getCompanyList();
		dataMap.put("human", companyList);
		return SUCCESS;
	}
	
	public String addCompanyPage() {
		return SUCCESS;
	}
	
	public String addCompany(){
		boolean flag = humanService.addCompany(company);
		String path = flag == true? SUCCESS : FAIL;
		return path;
	}

	//department部分
	public String showBackendDepartmentPage() {
		return SUCCESS;
	}
	
	public String getDepartmentList() {
		List<Department> departmentList = null;
		if(department == null)
		{
			departmentList = humanService.getDepartmentList();
		}
		else{
			if(department.getCompany()!=null){
				departmentList = humanService.getDepartmentListByCompanyName(department.getCompany().getCompanyName());
				System.out.println(departmentList.size());
				System.out.println(departmentList.get(0).getDepartmentName());
			}
		}
		dataMap.put("human", departmentList);
		return SUCCESS;
	}
	
	
	
	public String addDepartmentPage() {
		List<Company> allCompanyList = humanService.getCompanyList();
		request.setAttribute("allCompanyList", allCompanyList);
		return SUCCESS;
	}
	
	public String addDepartment(){
		String companyName = department.getCompany().getCompanyName();
		Company company = humanService.getCompanyByName(companyName);
		department.getCompany().setCompanyId(company.getCompanyId());
		boolean flag = humanService.addDepartment(department);
		String path = flag == true? SUCCESS:FAIL;
		return path;
	}

	public String showBackendPositionPage() {
		return SUCCESS;
	}

	public String getPositionList() {
		List<Position> positionList = humanService.getPositionList();
		dataMap.put("human", positionList);
		return SUCCESS;
	}

	public String addPositionPage() {
		List<Company> allCompanyList = humanService.getCompanyList();
		request.setAttribute("allCompanyList", allCompanyList);
		return SUCCESS;
	}

	public Map<String, Object> getDataMap() {
		return dataMap;
	}

	public void setDataMap(Map<String, Object> dataMap) {
		this.dataMap = dataMap;
	}

	public HumanService getHumanService() {
		return humanService;
	}

	public void setHumanService(HumanService humanService) {
		this.humanService = humanService;
	}

	public Company getCompany() {
		return company;
	}

	public void setCompany(Company company) {
		this.company = company;
	}

	public Department getDepartment() {
		return department;
	}

	public void setDepartment(Department department) {
		this.department = department;
	}
}
