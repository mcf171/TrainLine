package cn.com.action;

import java.util.List;
import java.util.Map;

import cn.com.base.BaseActionSupport;
import cn.com.model.Ability;
import cn.com.model.Role;
import cn.com.service.AbilityService;

public class AbilityAction extends BaseActionSupport{

	private Ability ability;
	private AbilityService abilityService;

	private Map<String, Object> dataMap;
	
	/**
	 * 修改权限
	 * @authro Apache
	 * @time 2014-5-29 16:24
	 * @return
	 */
	public String modifyAbility(){
		
		this.abilityService.updateAbility(ability);
		
		return this.SUCCESS;
	}
	
	/**
	 * 获取修改权限页面
	 * @return
	 */
	public String getModifyAbilityPage(){
		
		ability = abilityService.getById(ability);
		request.setAttribute("ability", ability);
		
		return this.SUCCESS;
	}
	
	/**
	 * 删除权限
	 * @author Apahce
	 * @time 2014-5-29 16:07
	 * @return
	 */
	public String deleteAbility(){
		
		abilityService.deleteAbility(ability);
		
		return this.SUCCESS	;
	}
	
	/**
	 * 增加权限
	 * @author Apache
	 * @time 2014-5-28 23:38
	 * @return
	 */
	public String addAbility(){
		
		this.abilityService.add(ability);
		
		return this.SUCCESS;
	}
	
	/**
	 * 根据权限级别获取权限
	 * @author Apache
	 * @time 2014-5-28 17:17
	 * @return
	 */
	public String getAbilityLevel(){
		
		List<Ability> list = abilityService.getAbilityByExample(ability);
		
		dataMap.put("list", list);
		
		return this.SUCCESS;
	}
	
	/**
	 * 获取增加权限的页面
	 * @author Apache
	 * @time 2014-5-28
	 * @return
	 */
	public String getAddAbilityPage(){
		
		Ability ability = new Ability();
		ability.setAbilityLevel(1);
		List<Ability> list = abilityService.getAbilityByExample(ability);
		
		request.setAttribute("firstLevel", list);
		
		return this.SUCCESS;
	}
	/**
	 * 获取权限管理总页面
	 * @author Apache
	 * @time 2014-5-18 15:32
	 * @return
	 */
	public String getAbilityManagerPage(){
		
		return this.SUCCESS;
	}
	
	/**
	 * 获取所有权限
	 * @author Apahce
	 * @time 2014-5-18 15:41
	 * @return
	 */
	public String getAllAbilitys(){
		
		List<Ability> list  = abilityService.getAll();
		
		dataMap.put("list", list);
		
		return this.SUCCESS;
	}
	
	public AbilityService getAbilityService() {
		return abilityService;
	}

	public void setAbilityService(AbilityService abilityService) {
		this.abilityService = abilityService;
	}

	public Map<String, Object> getDataMap() {
		return dataMap;
	}

	public void setDataMap(Map<String, Object> dataMap) {
		this.dataMap = dataMap;
	}

	public Ability getAbility() {
		return ability;
	}

	public void setAbility(Ability ability) {
		this.ability = ability;
	}
	
}
