package cn.com.base;

import java.io.Serializable;
import java.sql.SQLException;
import java.util.Iterator;
import java.util.List;

import cn.com.util.Page;


public interface IHibernateTemplate {
	//增加  
	public boolean saveObject(Object obj) throws SQLException;
	
	public boolean saveObjectBatch(Object[] obj) throws SQLException;
	//删除
	public boolean deleteObject(Object obj) throws SQLException;
	
	public boolean deleteObjectBatch(Object[] obj) throws SQLException;
	//根据特定的条件删除  
	public boolean deleteObjectbulk(String sqlString, Object[] params) throws SQLException;
	//修改
	public boolean updateObject(Object obj) throws SQLException;
	
	public boolean updateObjectBatch(Object[] obj) throws SQLException;
	//根据特定的条件 修改
	public boolean updateObjectbulk(String sqlString, Object[] params) throws SQLException;
	
	//通过hql和命名的参数  分页
	
	//通过hql的name查询   分页
	public List findByNamedHqlPage(String hqlname, Object[] params, final Page page)throws SQLException;
	
	//通过传入语句  分页
	public List findByHqlQueryPage(String hql, String groupAndSort, Object[] objs, final Page page)throws SQLException;
	
	
	//根据条件查询全部
	
	public List findByNamedHqlNoPage(String hqlname, Object[] params)throws SQLException;
	
	
	
	public int countByNamedHql(String hqlname, Object[] params)throws SQLException;
	
	//根据ID查询，有延迟加载和没有延迟加载的
	
	public Object findByIdNoLazy(Class clz, Serializable id) throws SQLException;
	
	//返回列表，list列表
	
	//返回列表，iterator列表
	public Iterator findAllCache(Class clz) throws SQLException;
	
	
}
