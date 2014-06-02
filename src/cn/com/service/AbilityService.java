package cn.com.service;

import java.util.List;

import cn.com.dao.AbilityDAO;
import cn.com.model.Ability;

public class AbilityService {

	private AbilityDAO abilityDAO;

	/**
	 * 更新权限
	 * @author Apache
	 * @time 2014-5-29 16:27
	 * @param ability
	 * @return
	 */
	public boolean updateAbility(Ability ability){
		
		boolean flag = false;
		
		try {
			
			abilityDAO.updateAbility(ability);
			flag = true;
		} catch (RuntimeException e) {
			// TODO: handle exception
			flag = false;
		}
		
		return flag;
	}
	
	/**
	 * 通过Id获取权限
	 * @author Apache
	 * @time 2014-5-29 16:20
	 * @param ability
	 * @return
	 */
	public Ability getById(Ability ability){
		
		ability = abilityDAO.getById(ability);
		
		return ability;
	}
	
	/**
	 * 删除权限
	 * @authro Apahce
	 * @time 2014-5-29 16:10
	 * @param ability
	 * @return
	 */
	public boolean deleteAbility(Ability ability){
		
		boolean flag = false;
		
		try {
			
			abilityDAO.deleteAbility(ability);
			flag = true;
		} catch (RuntimeException e) {
			// TODO: handle exception
			flag = false;
		}
		return flag;
	}
	
	
	/**
	 * 增加权限
	 * @author Apache
	 * @time 2014-5-28 23:37
	 * @param ability
	 */
	public void add(Ability ability){
	
		this.abilityDAO.add(ability);
		
	}
	
	/**
	 * 查询所有的权限
	 * @author Apache
	 * @time 2014-5-18 15:39
	 * @return
	 */
	public List<Ability> getAll(){
		
		List<Ability> list = abilityDAO.findAll();

		return list;
	}
	
	/**
	 * 通过Example来查询权限
	 * @author Apahce
	 * @time 2014-5-28 21:45
	 * @param ability
	 * @return
	 */
	public List<Ability> getAbilityByExample(Ability ability){
		
		List<Ability> list = abilityDAO.findByExampleFuzzy(ability);
		
		return list;
	}
	
	public AbilityDAO getAbilityDAO() {
		return abilityDAO;
	}

	public void setAbilityDAO(AbilityDAO abilityDAO) {
		this.abilityDAO = abilityDAO;
	}
	
	
}
