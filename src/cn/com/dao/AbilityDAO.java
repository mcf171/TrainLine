package cn.com.dao;

import java.util.ArrayList;
import java.util.List;

import org.springframework.orm.hibernate3.support.HibernateDaoSupport;

import cn.com.model.Ability;
import cn.com.model.Book;

public class AbilityDAO extends HibernateDaoSupport{

	public List findAll() {
	
			String queryString = "from Ability";
			return getHibernateTemplate().find(queryString);
		
	}
	
	/**
	 * 更新权限
	 * @author Apahce
	 * @time 2014-5-29 16:25
	 * @param ability
	 */
	public void updateAbility(Ability ability){
		
		this.getHibernateTemplate().merge(ability);
		this.getHibernateTemplate().flush();
	}
	
	/**
	 * 通过Id获取Ability
	 * @author Apache
	 * @time 2014-5-29 16:19
	 * @param ability
	 * @return
	 */
	public Ability getById(Ability ability){
		
		ability = this.getHibernateTemplate().get(Ability.class, ability.getAbilityId());
		
		return ability;
	}

	/**
	 * 删除权限
	 * @author Apache
	 * @time 2014-5-29 16:08
	 * @param ability
	 */
	public void deleteAbility(Ability ability){
		
		this.getHibernateTemplate().delete(ability);
	}
	
	
	/**
	 * 增加权限
	 * @author Apache
	 * @time 2014-5-28 23:36
	 * @param ability
	 */
	public void add(Ability ability){
		
		this.getHibernateTemplate().save(ability);
	}
	
	
	
	/**
	 * 模糊查询权限
	 * @author Apache
	 * @time 2014-5-28 21:44
	 * @param ability
	 * @return
	 */
	public  List findByExampleFuzzy(Ability ability) {
		
		String queryString = "from Ability where 1=1 ";
		
		List<Object> params = new ArrayList<Object>();
		if(ability !=null) {
			
			if(ability.getAbilityId() != null){
				
				queryString += "and abilityId = ? ";
				params.add(ability.getAbilityId());
			}
			
			if(ability.getAbilityLevel() != null){
				
				queryString += "and abilityLevel = ? ";
				params.add(ability.getAbilityLevel());
			}
			if(ability.getAbilityName() != null){
				
				queryString += "and abilityName = ? ";
				params.add(ability.getAbilityName());
			}
			
			if(ability.getAbilityURL() != null){
				
				queryString += "and abilityURL = ? ";
				params.add(ability.getAbilityURL());
			}
			
			if(ability.getParentAbility() != null){
				
				queryString +=  "and ability.parentAbility.abilityId = ? ";
				params.add(ability.getParentAbility().getAbilityId());
			}
			
		}
		List<Book> list = getHibernateTemplate().find(queryString, params.toArray());
		
		return list;
	}
}
