package cn.com.dao;

import java.util.List;


import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.hibernate.LockMode;
import org.springframework.context.ApplicationContext;
import org.springframework.orm.hibernate3.support.HibernateDaoSupport;

import cn.com.model.Userandcourse;


import cn.com.model.Userandcourse;

/**
 * A data access object (DAO) providing persistence and search support for
 * Userandcourse entities. Transaction control of the save(), update() and
 * delete() operations can directly support Spring container-managed
 * transactions or they can be augmented to handle user-managed Spring
 * transactions. Each of these methods provides additional information for how
 * to configure it for the desired type of transaction control.
 * 
 * @see cn.com.model.Userandcourse
 * @author MyEclipse Persistence Tools
 */
public class UserandcourseDAO extends HibernateDaoSupport {
	private static final Log log = LogFactory.getLog(UserandcourseDAO.class);

	// property constants

	protected void initDao() {
		// do nothing
	}

	public void save(Userandcourse transientInstance) {
		log.debug("saving Userandcourse instance");
		try {
			getHibernateTemplate().save(transientInstance);
			log.debug("save successful");
		} catch (RuntimeException re) {
			log.error("save failed", re);
			throw re;
		}
	}

	public void delete(Userandcourse persistentInstance) {
		log.debug("deleting Userandcourse instance");
		try {
			getHibernateTemplate().delete(persistentInstance);
			log.debug("delete successful");
		} catch (RuntimeException re) {
			log.error("delete failed", re);
			throw re;
		}
	}

	public Userandcourse findById(cn.com.model.UserandcourseId id) {
		log.debug("getting Userandcourse instance with id: " + id);
		try {
			Userandcourse instance = (Userandcourse) getHibernateTemplate()
					.get("cn.com.model.Userandcourse", id);
			return instance;
		} catch (RuntimeException re) {
			log.error("get failed", re);
			throw re;
		}
	}

	public List findByExample(Userandcourse instance) {
		log.debug("finding Userandcourse instance by example");
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
		log.debug("finding Userandcourse instance with property: "
				+ propertyName + ", value: " + value);
		try {
			String queryString = "from Userandcourse as model where model."
					+ propertyName + "= ?";
			return getHibernateTemplate().find(queryString, value);
		} catch (RuntimeException re) {
			log.error("find by property name failed", re);
			throw re;
		}
	}

	public List findAll() {
		log.debug("finding all Userandcourse instances");
		try {
			String queryString = "from Userandcourse";
			return getHibernateTemplate().find(queryString);
		} catch (RuntimeException re) {
			log.error("find all failed", re);
			throw re;
		}
	}

	public Userandcourse merge(Userandcourse detachedInstance) {
		log.debug("merging Userandcourse instance");
		try {
			Userandcourse result = (Userandcourse) getHibernateTemplate()
					.merge(detachedInstance);
			log.debug("merge successful");
			return result;
		} catch (RuntimeException re) {
			log.error("merge failed", re);
			throw re;
		}
	}

	public void attachDirty(Userandcourse instance) {
		log.debug("attaching dirty Userandcourse instance");
		try {
			getHibernateTemplate().saveOrUpdate(instance);
			log.debug("attach successful");
		} catch (RuntimeException re) {
			log.error("attach failed", re);
			throw re;
		}
	}

	public void attachClean(Userandcourse instance) {
		log.debug("attaching clean Userandcourse instance");
		try {
			getHibernateTemplate().lock(instance, LockMode.NONE);
			log.debug("attach successful");
		} catch (RuntimeException re) {
			log.error("attach failed", re);
			throw re;
		}
	}

	public static UserandcourseDAO getFromApplicationContext(
			ApplicationContext ctx) {
		return (UserandcourseDAO) ctx.getBean("UserandcourseDAO");
	}
}
