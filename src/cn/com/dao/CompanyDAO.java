package cn.com.dao;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import org.hibernate.HibernateException;
import org.hibernate.LockMode;
import org.hibernate.Query;
import org.hibernate.Session;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.orm.hibernate3.HibernateCallback;
import org.springframework.orm.hibernate3.support.HibernateDaoSupport;

import cn.com.model.Book;
import cn.com.model.Company;
import cn.com.model.Company;
import cn.com.util.DAOUtil;

/**
 * A data access object (DAO) providing persistence and search support for
 * Company entities. Transaction control of the save(), update() and delete()
 * operations can directly support Spring container-managed transactions or they
 * can be augmented to handle company-managed Spring transactions. Each of these
 * methods provides additional information for how to configure it for the
 * desired type of transaction control.
 * 
 * @see cn.com.model.Company
 * @author MyEclipse Persistence Tools
 */

public class CompanyDAO extends HibernateDaoSupport {
	private static final Logger log = LoggerFactory.getLogger(CompanyDAO.class);
	// property constants
	public static final String COMPANY_NAME = "companyName";
	public static final String COMPANYSTATUS = "companystatus";
	public static final String COMPANY_INTRO = "companyIntro";
	public static final String COMPANY_SHORT_NAME = "companyShortName";

	protected void initDao() {
		// do nothing
	}

	public void save(Company transientInstance) {
		log.debug("saving Company instance");
		try {
			getHibernateTemplate().save(transientInstance);
			log.debug("save successful");
		} catch (RuntimeException re) {
			log.error("save failed", re);
			throw re;
		}
	}

	public void delete(Company persistentInstance) {
		log.debug("deleting Company instance");
		try {
			getHibernateTemplate().delete(persistentInstance);
			log.debug("delete successful");
		} catch (RuntimeException re) {
			log.error("delete failed", re);
			throw re;
		}
	}

	public Company findById(java.lang.Integer id) {
		log.debug("getting Company instance with id: " + id);
		try {
			Company instance = (Company) getHibernateTemplate().get(
					"cn.com.model.Company", id);
			return instance;
		} catch (RuntimeException re) {
			log.error("get failed", re);
			throw re;
		}
	}

	public List findByExample(Company instance) {
		log.debug("finding Company instance by example");
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

	public List findByProperty(String propertyName, Object value) {
		log.debug("finding Company instance with property: " + propertyName
				+ ", value: " + value);
		try {
			String queryString = "from Company as model where model."
					+ propertyName + "= ?";
			return getHibernateTemplate().find(queryString, value);
		} catch (RuntimeException re) {
			log.error("find by property name failed", re);
			throw re;
		}
	}

	public List<Company> findByCompanyName(Object companyName) {
		return findByProperty(COMPANY_NAME, companyName);
	}

	public List<Company> findByCompanystatus(Object companystatus) {
		return findByProperty(COMPANYSTATUS, companystatus);
	}

	public List<Company> findByCompanyIntro(Object companyIntro) {
		return findByProperty(COMPANY_INTRO, companyIntro);
	}

	public List<Company> findByCompanyShortName(Object companyShortName) {
		return findByProperty(COMPANY_SHORT_NAME, companyShortName);
	}

	public List<Company> findAll() {
		log.debug("finding all Company instances");
		try {
			String queryString = "from Company";
			return getHibernateTemplate().find(queryString);
		} catch (RuntimeException re) {
			log.error("find all failed", re);
			throw re;
		}
	}

	public Company merge(Company detachedInstance) {
		log.debug("merging Company instance");
		try {
			Company result = (Company) getHibernateTemplate().merge(
					detachedInstance);
			log.debug("merge successful");
			return result;
		} catch (RuntimeException re) {
			log.error("merge failed", re);
			throw re;
		}
	}

	public void attachDirty(Company instance) {
		log.debug("attaching dirty Company instance");
		try {
			getHibernateTemplate().saveOrUpdate(instance);
			log.debug("attach successful");
		} catch (RuntimeException re) {
			log.error("attach failed", re);
			throw re;
		}
	}

	public void attachClean(Company instance) {
		log.debug("attaching clean Company instance");
		try {
			getHibernateTemplate().lock(instance, LockMode.NONE);
			log.debug("attach successful");
		} catch (RuntimeException re) {
			log.error("attach failed", re);
			throw re;
		}
	}

	public static CompanyDAO getFromApplicationContext(ApplicationContext ctx) {
		return (CompanyDAO) ctx.getBean("CompanyDAO");
	}
	
	/**
	 * 模糊查询Company
	 * @author Apache
	 * @time 2014-3-9 12:47
	 * @param company
	 * @return
	 */


	public List<Company> findByPage(final int firstResults, final int maxResults,
			final Company company) {
		// TODO Auto-generated method stub

		List<Company> list= this.getHibernateTemplate().executeFind(new HibernateCallback<List<Company>>() {

			public List<Company> doInHibernate(Session session)
					throws HibernateException, SQLException {
				// TODO Auto-generated method stub
				
				List<Object> params = new ArrayList<Object>();
				
				String queryString = getParamList(params ,company);
				
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
	 * 模糊查询Company
	 * @author Apache
	 * @time 2014-3-9 12:47
	 * @param company
	 * @return
	 */
	public List<Company> findByExampleFuzzy(Company company){
		
		List<Object> params = new ArrayList<Object>();
		
		String queryString = getParamList(params ,company);
		
		List<Company> userList = getHibernateTemplate().find(queryString,params.toArray());
		
		return userList;
	}
	
	/**
	 * 初始化参数List以及返回Query字符串
	 * @author Apache
	 * @time 2014-3-8
	 * @param params 已经new 的List
	 * @param company
	 * @return
	 */
	public String getParamList(List<Object> params, Company company){
		
		String queryString = "from Company where 1=1 ";
		
		if(company !=null){
		
			if (company.getCompanyId() != null) {
				
				queryString += "and companyId = ?";
				params.add(company.getCompanyId());
			}
			
			if (company.getCompanyIntro() != null) {
	
				queryString += "and companyIntro like ?";
				params.add("%" + company.getCompanyIntro() + "%");
			}
			
			if (company.getCompanyName() != null) {
	
				queryString += "and companyName like ?";
				params.add("%" + company.getCompanyName() + "%");
			}
			
			if (company.getCompanyShortName() != null) {
	
				queryString += "and companyShortName like ?";
				params.add("%" + company.getCompanyShortName() + "%");
			}
			
			if (company.getCompanystatus() != null && company.getCompanystatus() != -1) {
	
				queryString += "and companystatus like ?";
				params.add(company.getCompanystatus());
			}
		}
		return queryString;
	}
}