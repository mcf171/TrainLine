package cn.com.base;

import java.io.Serializable;
import java.sql.SQLException;
import java.util.Collection;
import java.util.Iterator;
import java.util.List;

import org.hibernate.HibernateException;
import org.hibernate.Query;
import org.hibernate.ScrollableResults;
import org.hibernate.Session;
import org.springframework.dao.DataAccessException;
import org.springframework.orm.hibernate3.HibernateCallback;
import org.springframework.orm.hibernate3.support.HibernateDaoSupport;

import cn.com.util.Page;


public class HibernateTemplateImpl extends HibernateDaoSupport implements IHibernateTemplate {

	private PagerManager pagerManager = new PagerManager();
	/** 
	* @Title: saveObject
	* @Description: 保存一个pojo对象
	* @param @param obj  pojo对象
	* @param @return  成功返回true  失败返回false
	* @param @throws SQLException
	* @throws
	 */
	public boolean saveObject(Object obj) throws SQLException {
		boolean flag = false;
		
		try {
			this.getHibernateTemplate().save(obj);
			flag = true;
		} catch (Exception e) {
			throw new SQLException(e);
		}
		return flag;
	}

	/** 
	* @Title: saveObjectBatch
	* @Description: 批量添加
	* @param @param obj  pojo对象数组
	* @param @return 成功返回true  失败返回 false
	* @param @throws SQLException
	* @throws
	 */
	public boolean saveObjectBatch(Object[] obj) throws SQLException {
		return false;
	}

	//lock  可为null
	/** 
	* @Title: deleteObject
	* @Description: 删除一个对象
	* @param @param obj  被删除的对象
	* @param @param locktype  删除时需要加入的锁的类型   为0时  不加锁
	* @param @return 成功返回true  失败返回 false
	* @throws
	 */
	public boolean deleteObject(Object obj)throws SQLException{
		boolean flag = false;
		try {
			this.getHibernateTemplate().delete(obj);
			flag = true;
		} catch (Exception e) {
			throw new SQLException(e);
		}
		return flag;
	}

	/** 
	* @Title: deleteObjectBatch
	* @Description: 批量删除
	* @param @param obj  需要删除的pojo数组
	* @param @param locktype 删除时需要加入的锁的类型   为0时  不加锁
	* @param @return 成功返回true  失败返回 false
	* @param @throws SQLException
	* @throws
	 */
	public boolean deleteObjectBatch(Object[] obj)
			throws SQLException {
		return false;
	}

	/** 
	* @Title: deleteObjectbulk
	* @Description: 删除对象  根据条件删除
	* @param @param sqlString  相应的sql语句 占位符用“？”表示
	* @param @param params     删除条件
	* @param @return      成功返回true  失败  false
	* @param @throws SQLException
	* @throws
	 */
	public boolean deleteObjectbulk(String sqlString, Object[] params)
			throws SQLException {
		boolean flag = false;
		try {
			getHibernateTemplate().bulkUpdate(sqlString, params);
			flag = true;
		} catch (Exception e) {
			throw new SQLException(e);
		}
		return flag;
	}

	/** 
	* @Title: updateObject
	* @Description: 更新一个对象
	* @param @param obj  需要被删除的对象
	* @param @param locktype  需要加入的锁的类型   为0时  不加锁
	* @param @return 成功返回true  失败返回 false
	* @param @throws SQLException
	* @throws
	 */
	public boolean updateObject(Object obj)
			throws SQLException {
		boolean flag = false;
		try {
			getHibernateTemplate().update(obj);
			flag = true;
		} catch (Exception e) {
			throw new SQLException(e);
		}
		return flag;
	}

	/** 
	* @Title: updateObjectBatch
	* @Description: 批量更新
	* @param @param obj
	* @param @param locktype 需要加入的锁的类型   为0时  不加锁
	* @param @return 成功返回true  失败返回 false
	* @param @throws SQLException
	* @throws
	 */
	public boolean updateObjectBatch(Object[] obj)
			throws SQLException {
		return false;
	}

	/** 
	* @Title: updateObjectbulk
	* @Description: 根据条件更新相应对象
	* @param @param sqlString  需要的sql 语句 占位符用“？” 表示
	* @param @param params  sql对应的条件
	* @param @return 成功返回true  失败返回 false
	* @param @throws SQLException
	* @throws
	 */
	public boolean updateObjectbulk(String sqlString, Object[] params)
			throws SQLException {
		boolean flag = false;
		try {
			getHibernateTemplate().bulkUpdate(sqlString, params);
			
			flag = true;
		} catch (Exception e) {
			throw new SQLException(e);
		}
		
		return flag;
	}



	/** 
	* @Title: findByNamedHqlAndParaNoPage
	* @Description:  根据命名hql和参数查询 
	* @param @param hqlname  hql的逻辑名
	* @param @param paramName 参数的别名数组
	* @param @param params    对应的参数的值
	* @param @return
	* @throws
	 */
//	public List findByNamedHqlAndParaNoPage(String hqlname, String[] paramName,
//			Object[] params) throws SQLException{
//		List result = null;
//		try {
//			result = getHibernateTemplate().findByNamedQueryAndNamedParam(hqlname, paramName, params);
//		} catch (Exception e) {
//			throw new SQLException(e);
//		}
//		
//		return result;
//	}

	/** 
	* @Title: findByNamedHqlNoPage
	* @Description:  通过命名的hql查询 
	* @param @param hqlname  hql的逻辑名
	* @param @param params    hql语句的参数 参数占位符用“？”
	* @param @return
	* @throws
	 */
	public List findByNamedHqlNoPage(String hqlname, Object[] params) throws SQLException{
		try {
			return getHibernateTemplate().findByNamedQuery(hqlname, params);
		} catch (Exception e) {
			throw new SQLException(e);
		}
	}

	/** 
	* @Title: findById
	* @Description: 根据id 查询得到一个pojo  延迟加载
	* @param @param clz  相应的pojo的class
	* @param @param id   需要查询的pojo的id
	* @param @param locktype  需要加入的锁的类型   为0时  不加锁
	* @param @return  pojo对象
	* @param @throws SQLException
	* @throws
	 */
//	public Object findById(Class clz, Serializable id) throws SQLException {
//		try {
//			return getHibernateTemplate().load(clz, id);
//		} catch (Exception e) {
//			throw new SQLException(e);
//		}
//	}

	/** 
	* @Title: findByIdNoLazy
	* @Description: 根据id 查询得到一个pojo  无延迟加载
	* @param @param clz  相应的pojo的class
	* @param @param id    需要查询的pojo的id
	* @param @param locktype 需要加入的锁的类型   为0时  不加锁
	* @param @return
	* @param @throws SQLException
	* @throws
	 */
	public Object findByIdNoLazy(Class clz, Serializable id) throws SQLException {
		try {
			return getHibernateTemplate().get(clz, id);
		} catch (Exception e) {
			throw new SQLException(e);
		}
	}

	/**
	* @Title: findAllCache
	* @Description: TODO
	* @param @param clz
	* @param @return
	* @param @throws SQLException
	* @throws
	 */
	public Iterator findAllCache(Class clz) throws SQLException {
		return null;
	}
	
	
//	public int countByNamedHqlAndPara(String hqlname, String[] paramName,
//			Object[] params) throws SQLException{
//		List list = null;
//		try {
//			list = getHibernateTemplate().findByNamedParam(hqlname, paramName, params);
//		} catch (Exception e) {
//			throw new SQLException(e);
//		}
//		
//		if (null == list) {
//			return 0;
//		}
//		
//		Long result = (Long) list.get(0);
//		
//		return result.intValue();
//	}

	public int countByNamedHql(String hqlname, Object[] params) throws SQLException{
		List list = null;
		try {
			list = getHibernateTemplate().findByNamedQuery(hqlname, params);
		} catch (Exception e) {
			throw new SQLException(e);
		}
		
		if (null == list) {
			return 0;
		}
		Long result = (Long) list.get(0);
		
		return result.intValue();
	}

//	public List findByNamedHqlAndParaPage(String hqlname, String[] paramName,
//			Object[] params, Page page) throws SQLException {
//		try {
//			return pagerManager.findByNamedHqlAndParaPage(hqlname, paramName, params, page);
//		} catch (Exception e) {
//			throw new SQLException(e);
//		}
//	}

	public List findByNamedHqlPage(String hqlname, Object[] params, Page page)
			throws SQLException {
		try {
			return pagerManager.findByNamedHqlPage(hqlname, params, page);
		} catch (Exception e) {
			throw new SQLException(e);
		}
	}

	public List findByHqlQueryPage(String hql, String groupAndSort,
			Object[] objs, Page page) throws SQLException {
		try {
			
			return pagerManager.findByHqlQueryPage(hql, groupAndSort, objs, page);
		} catch (Exception e) {
			throw new SQLException(e);
		}
	}

//	public List findByHqlQueryNameParaPage(String hql, String groupAndSort,
//			String[] paraName, Object[] objs, Page page) throws SQLException {
//		try {
//			return pagerManager.findByHqlQueryNameParaPage(hql, groupAndSort, paraName, objs, page);
//		} catch (Exception e) {
//			throw new SQLException(e);
//		}
//	}

	//实现一些 和分页相关的 函数
	private class PagerManager{
		/**
		* @Title: findNameSqlAndParamPage
		* @Description: TODO
		* @param @param queryName
		* @param @param paramNames
		* @param @param values
		* @param @param page  如果page为null  则不分页查询
		* @param @param 
		* @param @return
		* @param @throws DataAccessException
		* @return List
		* @throws
		 */
//		public List findByNamedHqlAndParaPage(final String queryName,
//				final String[] paramNames, final Object[] values, final Page page) throws DataAccessException {
//			if(null == page){
//				return findByNamedHqlAndParaNoPage(queryName, paramNames, values);
//			}
//			if (paramNames != null && values != null && paramNames.length != values.length) {
//				throw new IllegalArgumentException("Length of paramNames array must match length of values array");
//			}
//			
//		
//			return getHibernateTemplate().executeFind(
//					new HibernateCallback<List>() {
//						public List doInHibernate(Session session)
//								throws HibernateException {
//							Query queryObject = session.getNamedQuery(queryName);
//							
//							if (values != null) {
//								for (int i = 0; i < values.length; i++) {
//									queryObject.setParameter(paramNames[i], values[i]);
//								}
//							}						
//							//得到总数
//							ScrollableResults rs = queryObject.scroll();
//							rs.last();
//							int totalrow = rs.getRowNumber() +1;
//							page.setTotalAndPage(totalrow);
//							
//							//分页查询
//							queryObject.setFirstResult(page.startRow());
//							queryObject.setMaxResults(page.getNumPerPage());
//							return queryObject.list();
//						}
//					});
//		}

		/**
		 * @throws SQLException 
		* @Title: findNameSqlPage
		* @Description: TODO
		* @param @param queryName
		* @param @param values
		* @param @param startRow
		* @param @param pageSize
		* @param @return
		* @param @throws DataAccessException
		* @return List
		* @throws
		 */
		public List findByNamedHqlPage(final String queryName, final Object[] values, final Page page) throws DataAccessException, SQLException {
			
			if(null == page){
				return findByNamedHqlNoPage(queryName, values);
			}
			
			return getHibernateTemplate().executeFind(
					new HibernateCallback() {
						public List doInHibernate(Session session)
								throws HibernateException {
							Query queryObject = session.getNamedQuery(queryName);
							if (values != null) {
								for (int i = 0; i < values.length; i++) {
									queryObject.setParameter(i, values[i]);
								}
							}
							//得到总数
							ScrollableResults rs = queryObject.scroll();
							rs.last();
							int totalrow = rs.getRowNumber() +1;
							page.setTotalAndPage(totalrow);
							
							//分页查询
							queryObject.setFirstResult(page.startRow());
							queryObject.setMaxResults(page.getNumPerPage());
							
							return queryObject.list();
						}
					});
		}

		public List findByHqlQueryPage(final String hql,final String groupAndSort, final Object[] objs,
				final Page page) {
			if(null == page){
				return findByHqlQueryNoPage(hql, groupAndSort, objs);
			}
			return (List) getHibernateTemplate().executeWithNativeSession(new HibernateCallback() {
				public List doInHibernate(Session session) throws HibernateException {
					
					Query queryObject = session.createQuery(hql + ((null == groupAndSort) ? "" : groupAndSort));
					
					
					if (objs != null) {
						for (int i = 0; i < objs.length; i++) {
							queryObject.setParameter(i, objs[i]);
						}
					}
					
					//得到总数
					ScrollableResults rs = queryObject.scroll();
					rs.last();
					int totalrow = rs.getRowNumber() +1;
					page.setTotalAndPage(totalrow);
					
					//分页查询
					queryObject.setFirstResult(page.startRow());
					queryObject.setMaxResults(page.getNumPerPage());
					
					
					return queryObject.list();
				}
			});
		}

		public List findByHqlQueryNoPage(final String hql,final String groupAndSort, final Object[] objs) {
			return (List) getHibernateTemplate().executeWithNativeSession(new HibernateCallback() {
				public List doInHibernate(Session session) throws HibernateException {
					
					Query queryObject = session.createQuery(hql + ((null == groupAndSort) ? "" : groupAndSort));
					
					
					if (objs != null) {
						for (int i = 0; i < objs.length; i++) {
							queryObject.setParameter(i, objs[i]);
						}
					}
					
//					//得到总数
//					ScrollableResults rs = queryObject.scroll();
//					rs.last();
//					int totalrow = rs.getRowNumber() +1;
//					page.setTotalAndPage(totalrow);
//					
//					//分页查询
//					queryObject.setFirstResult(page.startRow());
//					queryObject.setMaxResults(page.getNumPerPage());
					
					
					return queryObject.list();
				}
			});
		}
//		public List findByHqlQueryNameParaPage(final String hql, final String groupAndSort,
//				final String[] paraName,final Object[] objs,final Page page) {
//			
//			if (paraName.length != objs.length) {
//				throw new IllegalArgumentException("Length of paramNames array must match length of values array");
//			}
//			return getHibernateTemplate().executeWithNativeSession(new HibernateCallback<List>() {
//				public List doInHibernate(Session session) throws HibernateException {
//					Query queryObject = session.createQuery(hql + ((null == groupAndSort) ? "" : groupAndSort));
//				
//					if (objs != null) {
//						for (int i = 0; i < objs.length; i++) {
//							applyNamedParameterToQuery(queryObject, paraName[i], objs[i]);
//						}
//					}
//					
//					//得到总数
//					ScrollableResults rs = queryObject.scroll();
//					rs.last();
//					int totalrow = rs.getRowNumber() +1;
//					page.setTotalAndPage(totalrow);
//					
//					//分页查询
//					queryObject.setFirstResult(page.startRow());
//					queryObject.setMaxResults(page.getNumPerPage());
//					
//					return queryObject.list();
//				}
//			});
//		}
		
		protected void applyNamedParameterToQuery(Query queryObject, String paramName, Object value)
				throws HibernateException {

			if (value instanceof Collection) {
				queryObject.setParameterList(paramName, (Collection) value);
			}
			else if (value instanceof Object[]) {
				queryObject.setParameterList(paramName, (Object[]) value);
			}
			else {
				queryObject.setParameter(paramName, value);
			}
		}
	}
	
	
}
