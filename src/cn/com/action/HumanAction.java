package cn.com.action;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import net.sf.json.JSONObject;

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
	private Position position;
	

	public HumanAction() {
		super();
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
	
	public String modifyCompanyPage(){
		company = humanService.getCompanyById(company.getCompanyId());
		request.setAttribute("company", company);
		return SUCCESS;
	}
	
	public String modifyCompany(){
		boolean flag = humanService.modifyCompany(company);
		System.out.println("modifyCompany:" + flag);
		String path = flag == true? SUCCESS:FAIL;
		return path;
	}
	
	public String deleteCompany() {
		humanService.deleteCompany(company);
		dataMap.put("success", "success");
		return SUCCESS;
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
				departmentList = humanService.getDepartmentListByCompanyId(department.getCompany().getCompanyId());
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
		boolean flag = humanService.addDepartment(department);
		String path = flag == true? SUCCESS:FAIL;
		return path;
	}
	
	public String modifyDepartmentPage(){
		List<Company> allCompanyList = humanService.getCompanyList();
		department = humanService.getDepartmentById(department.getDepartmentId());
		request.setAttribute("allCompanyList", allCompanyList);
		request.setAttribute("department", department);
		return SUCCESS;
	}
	
	public String modifyDepartment(){
		boolean flag = humanService.modifyDepartment(department);
		String path = flag == true? SUCCESS:FAIL;
		return path;
	}

	public String deleteDepartment() {
		System.out.println(department.getDepartmentId());
		humanService.deleteDepartment(department);
		dataMap.put("success", "success");
		return SUCCESS;
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

	public String addPosition(){
		System.out.println("departmentName" + position.getDepartment().getDepartmentName());
		boolean flag = humanService.addPosition(position);
		String path = flag == true? SUCCESS:FAIL;
		return path;
	}
	
	public String modifyPositionPage(){
		List<Company> allCompanyList = humanService.getCompanyList();
		position = humanService.getPositionById(position.getPositionId());
		request.setAttribute("allCompanyList", allCompanyList);
		request.setAttribute("position", position);
		return SUCCESS;
	}
	
	public String modifyPosition(){
		System.out.println(position.getPositionId());
		boolean flag = humanService.modifyPosition(position);
		String path = flag == true? SUCCESS:FAIL;
		return path;
	}
	
	public String deletePosition() {
		humanService.deletePosition(position);
		dataMap.put("success", "success");
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

	public Position getPosition() {
		return position;
	}

	public void setPosition(Position position) {
		this.position = position;
	}
}
