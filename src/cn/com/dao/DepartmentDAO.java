package cn.com.dao;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.hibernate.HibernateException;
import org.hibernate.LockMode;
import org.hibernate.Query;
import org.hibernate.Session;
import org.springframework.context.ApplicationContext;
import org.springframework.orm.hibernate3.HibernateCallback;
import org.springframework.orm.hibernate3.support.HibernateDaoSupport;

import cn.com.model.Company;
import cn.com.model.Department;
import cn.com.model.User;
import cn.com.util.DAOUtil;

/**
 * A data access object (DAO) providing persistence and search support for
 * Department entities. Transaction control of the save(), update() and delete()
 * operations can directly support Spring container-managed transactions or they
 * can be augmented to handle user-managed Spring transactions. Each of these
 * methods provides additional information for how to configure it for the
 * desired type of transaction control.
 * 
 * @see cn.com.model.Department
 * @author MyEclipse Persistence Tools
 */
public class DepartmentDAO extends HibernateDaoSupport {
	private static final Log log = LogFactory.getLog(DepartmentDAO.class);
	// property constants
	public static final String DEPARTMENT_NAME = "departmentName";
	public static final String DEPARTMENTSTATUS = "departmentstatus";
	public static final String DEPARTMENT_SHORT_NAME = "departmentShortName";
	public static final String BUSINESS_UNITS = "businessUnits";
	public static final String DEPARTMENT_CODING = "departmentCoding";
	public static final String COUNTRY = "country";

	protected void initDao() {
		// do nothing
	}

	public void save(Department transientInstance) {
		log.debug("saving Department instance");
		try {
			getHibernateTemplate().save(transientInstance);
			log.debug("save successful");
		} catch (RuntimeException re) {
			log.error("save failed", re);
			throw re;
		}
	}

	public void delete(Department persistentInstance) {
		log.debug("deleting Department instance");
		try {
			getHibernateTemplate().clear();
			getHibernateTemplate().delete(persistentInstance);
			getHibernateTemplate().flush();
			log.debug("delete successful");
		} catch (RuntimeException re) {
			
			log.error("delete failed", re);
			throw re;
		}
	}

	public Department findById(java.lang.Integer id) {
		log.debug("getting Department instance with id: " + id);
		try {
			Department instance = (Department) getHibernateTemplate().get(
					"cn.com.model.Department", id);
			return instance;
		} catch (RuntimeException re) {
			log.error("get failed", re);
			throw re;
		}
	}

	public List findByExample(Department instance) {
		log.debug("finding Department instance by example");
		try {
			List results = getHibernateTemplate().findByExample(instance);
			log.debug("find by example successful, result size: "
					+ results.size());
			return results;
		} catch (RuntimeException re) {
			log.error("find by example failed", re);
			throw re;
		}
	}

	public List<Department> findByProperty(String propertyName, Object value) {
		log.debug("finding Department instance with property: " + propertyName
				+ ", value: " + value);
		try {
			String queryString = "from Department as model where model."
					+ propertyName + "= ?";
			return getHibernateTemplate().find(queryString, value);
		} catch (RuntimeException re) {
			log.error("find by property name failed", re);
			throw re;
		}
	}


	public List<Department> findByDepartmentName(Object departmentName) {
		return findByProperty(DEPARTMENT_NAME, departmentName);
	}

	public List<Department> findByDepartmentstatus(Object departmentstatus) {
		return findByProperty(DEPARTMENTSTATUS, departmentstatus);
	}

	public List<Department> findByDepartmentShortName(Object departmentShortName) {
		return findByProperty(DEPARTMENT_SHORT_NAME, departmentShortName);
	}

	public List<Department> findByBusinessUnits(Object businessUnits) {
		return findByProperty(BUSINESS_UNITS, businessUnits);
	}

	public List<Department> findByDepartmentCoding(Object departmentCoding) {
		return findByProperty(DEPARTMENT_CODING, departmentCoding);
	}

	public List<Department> findByCountry(Object country) {
		return findByProperty(COUNTRY, country);
	}

	public List<Department> findAll() {
		log.debug("finding all Department instances");
		try {
			String queryString = "from Department";
			return getHibernateTemplate().find(queryString);
		} catch (RuntimeException re) {
			log.error("find all failed", re);
			throw re;
		}
	}

	public Department merge(Department detachedInstance) {
		log.debug("merging Department instance");
		try {
			Department result = (Department) getHibernateTemplate().merge(
					detachedInstance);
			log.debug("merge successful");
			return result;
		} catch (RuntimeException re) {
			log.error("merge failed", re);
			throw re;
		}
	}

	public void attachDirty(Department instance) {
		log.debug("attaching dirty Department instance");
		try {
			getHibernateTemplate().saveOrUpdate(instance);
			log.debug("attach successful");
		} catch (RuntimeException re) {
			log.error("attach failed", re);
			throw re;
		}
	}

	public void attachClean(Department instance) {
		log.debug("attaching clean Department instance");
		try {
			getHibernateTemplate().lock(instance, LockMode.NONE);
			log.debug("attach successful");
		} catch (RuntimeException re) {
			log.error("attach failed", re);
			throw re;
		}
	}

	public static DepartmentDAO getFromApplicationContext(ApplicationContext ctx) {
		return (DepartmentDAO) ctx.getBean("DepartmentDAO");
	}
	
	/**
	 * 模糊查询Department
	 * @author Apahce
	 * @time 2014-3-9 13:04
	 * @param department
	 * @return
	 */
	
	public List<Department> findByExampleFuzzy(Department department){
		
		List<Object> params = new ArrayList<Object>();
		
		String queryString = getParamList(params ,department);
		
		List<Department> userList = getHibernateTemplate().find(queryString,params.toArray());
		
		return userList;
	}

	public List<Department> findByPage(final int firstResults,final int maxResults,
			final Department department) {
		// TODO Auto-generated method stub

		List<Department> list= this.getHibernateTemplate().executeFind(new HibernateCallback<List<Department>>() {

			public List<Department> doInHibernate(Session session)
					throws HibernateException, SQLException {
				// TODO Auto-generated method stub
				
				List<Object> params = new ArrayList<Object>();
				
				String queryString = getParamList(params ,department);
				
					Query query  = session.createQuery(queryString);
					query = DAOUtil.setParam(query, params);
					query.setFirstResult(firstResults);
					query.setMaxResults(maxResults);
					
				return query.list();
			}
			
		});
		
		return list;
	}
	

	/**
	 * 初始化参数List以及返回Query字符串
	 * @author Apache
	 * @time 2014-3-8
	 * @param params 已经new 的List
	 * @param company
	 * @return
	 */
	public String getParamList(List<Object> params, Department department){

		String queryString = "from Department where 1=1 ";

		if(department != null){
			if(department.getDepartmentId() != null){
				queryString += "and departmentId = ?";
				params.add(department.getDepartmentId());
			}
			
			if(department.getCompany() != null){
				if(department.getCompany().getCompanyId() != null){
					queryString += "and companyId = ? ";
					params.add( department.getCompany().getCompanyId());
				}
			}
			
			if(department.getDepartmentName() != null){
				queryString += "and departmentName like ? ";
				params.add("%" + department.getDepartmentName() + "%");
			}
			
			if(department.getDepartmentstatus() != null && department.getDepartmentstatus() != -1){
				queryString += "and departmentstatus = ? ";
				params.add(department.getDepartmentstatus());
			}
			
			if(department.getDepartmentShortName() != null){
				queryString += "and departmentShortName like ? ";
				params.add("%" + department.getDepartmentShortName() + "%");
			}
			
			if(department.getBusinessUnits() != null){
				queryString += "and BusinessUnits like ? ";
				params.add("%" + department.getBusinessUnits() + "%");
			}
			
			if(department.getDepartmentCoding() != null){
				queryString += "and departmentCoding = ? ";
				params.add( department.getDepartmentCoding());
			}
			
			if(department.getCountry() != null){
				queryString += "and country like ? ";
				params.add("%" + department.getCountry() + "%");
			}
		}
		return queryString;
	}
}