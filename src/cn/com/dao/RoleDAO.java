package cn.com.dao;

import java.util.ArrayList;
import java.util.List;

import org.springframework.orm.hibernate3.support.HibernateDaoSupport;

import cn.com.model.Role;

public class RoleDAO extends HibernateDaoSupport {

	public List findAll() {
		
		String queryString = "from Role";
		return getHibernateTemplate().find(queryString);
	
	}
	

	/**
	 * 更新角色
	 * @author Apahce
	 * @time 2014-5-29 16:25
	 * @param role
	 */
	public void updateRole(Role role){
		
		this.getHibernateTemplate().merge(role);
		this.getHibernateTemplate().flush();
	}
	
	/**
	 * 通过Id获取Role
	 * @author Apache
	 * @time 2014-5-29 16:19
	 * @param role
	 * @return
	 */
	public Role getById(Role role){
		
		role = this.getHibernateTemplate().get(Role.class, role.getRoleId());
		
		return role;
	}

	/**
	 * 删除角色
	 * @author Apache
	 * @time 2014-5-29 16:08
	 * @param role
	 */
	public void deleteRole(Role role){
		
		this.getHibernateTemplate().delete(role);
		this.getHibernateTemplate().flush();
	}
	
	
	/**
	 * 增加角色
	 * @author Apache
	 * @time 2014-5-28 23:36
	 * @param role
	 */
	public void add(Role role){
		
		this.getHibernateTemplate().save(role);
	}
	
	
	
	/**
	 * 模糊查询角色
	 * @author Apache
	 * @time 2014-5-28 21:44
	 * @param role
	 * @return
	 */
	public  List findByExampleFuzzy(Role role) {
		
		String queryString = "from Role where 1=1 ";
		
		List<Object> params = new ArrayList<Object>();
		if(role !=null) {
			
			if(role.getRoleId() != null){
				
				queryString += "and roleId = ? ";
				params.add(role.getRoleId());
			}
			
			if(role.getRoleName()!= null){
				
				queryString += "and roleName = ? ";
				params.add(role.getRoleName());
			}
		}
		List<Role> list = getHibernateTemplate().find(queryString, params.toArray());
		
		return list;
	}
}
