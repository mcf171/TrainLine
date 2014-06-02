package cn.com.action;

import java.util.List;
import java.util.Map;

import cn.com.base.BaseActionSupport;
import cn.com.model.Role;
import cn.com.service.RoleService;

public class RoleAction extends BaseActionSupport {

	private RoleService roleService;
	private Map<String, Object> dataMap;
	private String[] abilityIds;
	private Role role;
	
	/**
	 * 删除角色
	 * @author Apahce
	 * @time 2014-5-29 22:35
	 * @return
	 */
	public String deleteRole(){
		
		roleService.deleteRole(role);
		
		return this.SUCCESS;
	}
	/**
	 * 修改角色
	 * @author Apache
	 * @time 2014-5-29 22:34
	 * @return
	 */
	public String modifyRole(){
		
		roleService.updateRole(role, abilityIds);
		
		return this.SUCCESS;
	}
	
	/**
	 * 获取修改角色页面
	 * @author Apache
	 * @time 2014-5-29 22:34
	 * @return
	 */
	public String getModifyRolePage(){
		
		role  = roleService.getById(role);
		
		request.setAttribute("role", role);
		
		return this.SUCCESS;
	}
	
	/**
	 * 增加角色
	 * @author Apache
	 * @time 2014-5-29 22:33
	 * @return
	 */
	public String addRole(){
		
		roleService.addRole(role, abilityIds);
		
		return this.SUCCESS;
	}
	
	/**
	 * 获取增加角色页面
	 * @author Apache
	 * @time 2014-5-29 22:32
	 * @return
	 */
	public String getAddRolePage(){
		
		return this.SUCCESS;
	}
	
	/**
	 * 获取管理总页面
	 * @author Apache
	 * @time 2014-5-18 15:18
	 * @return
	 */
	public String getRoleManagerPage(){
		return this.SUCCESS;
	}
	
	/**
	 * 获取所有角色
	 * @author Apahce
	 * @time 2014-5-18 15:41
	 * @return
	 */
	public String getAllRoles(){
		
		List<Role> list  = roleService.getAll();
		
		dataMap.put("list", list);
		
		return this.SUCCESS;
	}
	
	public RoleService getRoleService() {
		return roleService;
	}
	public void setRoleService(RoleService roleService) {
		this.roleService = roleService;
	}

	public Map<String, Object> getDataMap() {
		return dataMap;
	}

	public void setDataMap(Map<String, Object> dataMap) {
		this.dataMap = dataMap;
	}

	public String[] getAbilityIds() {
		return abilityIds;
	}

	public void setAbilityIds(String[] abilityIds) {
		this.abilityIds = abilityIds;
	}
	public Role getRole() {
		return role;
	}
	public void setRole(Role role) {
		this.role = role;
	}
	
	
	
}
