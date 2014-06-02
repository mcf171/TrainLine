package cn.com.service;

import java.util.List;

import cn.com.dao.RoleDAO;
import cn.com.model.Ability;
import cn.com.model.Role;

public class RoleService {

	private RoleDAO roleDAO;
	private AbilityService abilityService;
	
	/**
	 * 通过Id查询角色
	 * @author Apache
	 * @time 2014-5-30 10:53
	 * @param role
	 * @return
	 */
	public Role getById(Role role){
		
		role  = roleDAO.getById(role);
		
		return role;
	}
	
	/**
	 * 添加角色
	 * @author Apache
	 * @time 2014-5-28 22:47
	 * @param role
	 * @param abilityIds
	 */
	public void addRole(Role role , String[] abilityIds){
		
		if(abilityIds != null && abilityIds.length != 0){
			
			for(String abilityId : abilityIds){
				
				Ability ability = new Ability();
				ability.setAbilityId(Integer.parseInt(abilityId));
				abilityService.getById(ability);
				
				role.getAbilitys().add(ability);
			}
		}
		
		roleDAO.add(role);
	}
	
	
	/**
	 * 更新角色
	 * @author Apahce
	 * @time 2014-5-29 22:41
	 * @param role
	 * @return
	 */

	public boolean updateRole(Role role, String[] abilityIds){
		
		boolean flag = false;
		
		try {
			
			if(abilityIds != null && abilityIds.length != 0){
				
				for(String abilityId : abilityIds){
					
					Ability ability = new Ability();
					ability.setAbilityId(Integer.parseInt(abilityId));
					abilityService.getById(ability);
					
					role.getAbilitys().add(ability);
				}
			}
			roleDAO.updateRole(role);
			flag = true;
		} catch (RuntimeException e) {
			// TODO: handle exception
			flag = false;
		}
		
		return flag;
	}
	
	/**
	 * 删除角色
	 * @author Apache
	 * @time 2014-5-29 22:40
	 * @param role
	 * @return
	 */
	public boolean deleteRole(Role role){
		
		boolean flag = false;
		
		try {
			
			this.roleDAO.deleteRole(role);
			flag = true;
		} catch (RuntimeException e) {
			// TODO: handle exception
			flag = false;
		}
		
		return flag;
	}
	
	/**
	 * 查询所有的角色
	 * @author Apache
	 * @time 2014-5-18 15:40
	 * @return
	 */
	public List<Role> getAll(){
		
		List<Role> list = roleDAO.findAll();
		
		return list;
	}
	
	public RoleDAO getRoleDAO() {
		return roleDAO;
	}

	public void setRoleDAO(RoleDAO roleDAO) {
		this.roleDAO = roleDAO;
	}


	public AbilityService getAbilityService() {
		return abilityService;
	}


	public void setAbilityService(AbilityService abilityService) {
		this.abilityService = abilityService;
	}
	
	
}
