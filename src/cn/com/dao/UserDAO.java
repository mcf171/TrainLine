package cn.com.dao;

import java.util.ArrayList;
import java.util.List;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.hibernate.LockMode;
import org.springframework.context.ApplicationContext;
import org.springframework.orm.hibernate3.support.HibernateDaoSupport;

import cn.com.model.Company;
import cn.com.model.User;

/**
 * A data access object (DAO) providing persistence and search support for User
 * entities. Transaction control of the save(), update() and delete() operations
 * can directly support Spring container-managed transactions or they can be
 * augmented to handle user-managed Spring transactions. Each of these methods
 * provides additional information for how to configure it for the desired type
 * of transaction control.
 * 
 * @see cn.com.model.User
 * @author MyEclipse Persistence Tools
 */
public class UserDAO extends HibernateDaoSupport {
	private static final Log log = LogFactory.getLog(UserDAO.class);
	// property constants
	public static final String USER_NAME = "userName";
	public static final String USER_CONTENT = "userContent";
	public static final String USER_TYPE_ID = "userTypeId";
	public static final String USER_CLASS_INDEX = "userClassIndex";

	protected void initDao() {
		// do nothing
	}

	public void save(User transientInstance) {
			getHibernateTemplate().save(transientInstance);
	}

	public void delete(User persistentInstance) {
		log.debug("deleting User instance");
		try {
			getHibernateTemplate().delete(persistentInstance);
			log.debug("delete successful");
		} catch (RuntimeException re) {
			log.error("delete failed", re);
			throw re;
		}
	}

	public User findById(java.lang.Integer id) {
		log.debug("getting User instance with id: " + id);
		try {
			User instance = (User) getHibernateTemplate().get(
					"cn.com.model.User", id);
			return instance;
		} catch (RuntimeException re) {
			log.error("get failed", re);
			throw re;
		}
	}

	public List findByExample(User instance) {
		log.debug("finding User instance by example");
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
		log.debug("finding User instance with property: " + propertyName
				+ ", value: " + value);
		try {
			String queryString = "from User as model where model."
					+ propertyName + "= ?";
			return getHibernateTemplate().find(queryString, value);
		} catch (RuntimeException re) {
			log.error("find by property name failed", re);
			throw re;
		}
	}

	public List findByUserName(Object userName) {
		return findByProperty(USER_NAME, userName);
	}

	public List findByUserContent(Object userContent) {
		return findByProperty(USER_CONTENT, userContent);
	}

	public List findByUserTypeId(Object userTypeId) {
		return findByProperty(USER_TYPE_ID, userTypeId);
	}

	public List findByUserClassIndex(Object userClassIndex) {
		return findByProperty(USER_CLASS_INDEX, userClassIndex);
	}

	public List<User> findAll() {
		log.debug("finding all User instances");
		try {
			String queryString = "from User";
			return getHibernateTemplate().find(queryString);
		} catch (RuntimeException re) {
			log.error("find all failed", re);
			throw re;
		}
	}

	public User merge(User detachedInstance) {
		log.debug("merging User instance");
		try {
			User result = (User) getHibernateTemplate().merge(detachedInstance);
			log.debug("merge successful");
			return result;
		} catch (RuntimeException re) {
			log.error("merge failed", re);
			throw re;
		}
	}

	public void attachDirty(User instance) {
		log.debug("attaching dirty User instance");
		try {
			getHibernateTemplate().saveOrUpdate(instance);
			log.debug("attach successful");
		} catch (RuntimeException re) {
			log.error("attach failed", re);
			throw re;
		}
	}

	public void attachClean(User instance) {
		log.debug("attaching clean User instance");
		try {
			getHibernateTemplate().lock(instance, LockMode.NONE);
			log.debug("attach successful");
		} catch (RuntimeException re) {
			log.error("attach failed", re);
			throw re;
		}
	}

	public static UserDAO getFromApplicationContext(ApplicationContext ctx) {
		return (UserDAO) ctx.getBean("UserDAO");
	}
	
	public List<User> findByExampleFuzzy(User user){
		
		String queryString = "from User where 1=1 ";
		
		List<Object> params = new ArrayList<Object>();
		
		if (user.getUserId() != null) {

			queryString += "and userId = ?";
			params.add(user.getUserId());
		}
		
		if (user.getUserName() != null) {

			queryString += "and userName like ?";
			params.add("%" + user.getUserName() + "%");
		}
		
		if (user.getUserPassword() != null) {

			queryString += "and passWord like ?";
			params.add("%" + user.getUserPassword() + "%");
		}
		
		if (user.getPersonalinformation().getPersonalInformationId() != null) {

			queryString += "and personalInformationId like ?";
			params.add("%" + user.getPersonalinformation().getPersonalInformationId() + "%");
		}
		
		List<User> userList = getHibernateTemplate().find(queryString,params.toArray());
		
		return userList;
	}
}