package cn.com.dao;

import java.util.List;
import org.hibernate.LockMode;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.orm.hibernate3.support.HibernateDaoSupport;

import cn.com.model.Tieziaccessory;

/**
 * A data access object (DAO) providing persistence and search support for
 * Tieziaccessory entities. Transaction control of the save(), update() and
 * delete() operations can directly support Spring container-managed
 * transactions or they can be augmented to handle user-managed Spring
 * transactions. Each of these methods provides additional information for how
 * to configure it for the desired type of transaction control.
 * 
 * @see cn.com.model.Tieziaccessory
 * @author MyEclipse Persistence Tools
 */

public class TieziaccessoryDAO extends HibernateDaoSupport {
	private static final Logger log = LoggerFactory
			.getLogger(TieziaccessoryDAO.class);
	// property constants
	public static final String TIEZ_ACCESSORY_PATH = "tiezAccessoryPath";
	public static final String TIEZ_ACCESSORY_NAME = "tiezAccessoryName";

	protected void initDao() {
		// do nothing
	}

	public void save(Tieziaccessory transientInstance) {
		log.debug("saving Tieziaccessory instance");
		try {
			getHibernateTemplate().save(transientInstance);
			log.debug("save successful");
		} catch (RuntimeException re) {
			log.error("save failed", re);
			throw re;
		}
	}

	public void delete(Tieziaccessory persistentInstance) {
		log.debug("deleting Tieziaccessory instance");
		try {
			getHibernateTemplate().delete(persistentInstance);
			log.debug("delete successful");
		} catch (RuntimeException re) {
			log.error("delete failed", re);
			throw re;
		}
	}

	public Tieziaccessory findById(java.lang.Integer id) {
		log.debug("getting Tieziaccessory instance with id: " + id);
		try {
			Tieziaccessory instance = (Tieziaccessory) getHibernateTemplate()
					.get("cn.com.model.Tieziaccessory", id);
			return instance;
		} catch (RuntimeException re) {
			log.error("get failed", re);
			throw re;
		}
	}

	public List findByExample(Tieziaccessory instance) {
		log.debug("finding Tieziaccessory instance by example");
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
		log.debug("finding Tieziaccessory instance with property: "
				+ propertyName + ", value: " + value);
		try {
			String queryString = "from Tieziaccessory as model where model."
					+ propertyName + "= ?";
			return getHibernateTemplate().find(queryString, value);
		} catch (RuntimeException re) {
			log.error("find by property name failed", re);
			throw re;
		}
	}

	public List findByTiezAccessoryPath(Object tiezAccessoryPath) {
		return findByProperty(TIEZ_ACCESSORY_PATH, tiezAccessoryPath);
	}

	public List findByTiezAccessoryName(Object tiezAccessoryName) {
		return findByProperty(TIEZ_ACCESSORY_NAME, tiezAccessoryName);
	}

	public List findAll() {
		log.debug("finding all Tieziaccessory instances");
		try {
			String queryString = "from Tieziaccessory";
			return getHibernateTemplate().find(queryString);
		} catch (RuntimeException re) {
			log.error("find all failed", re);
			throw re;
		}
	}

	public Tieziaccessory merge(Tieziaccessory detachedInstance) {
		log.debug("merging Tieziaccessory instance");
		try {
			Tieziaccessory result = (Tieziaccessory) getHibernateTemplate()
					.merge(detachedInstance);
			log.debug("merge successful");
			return result;
		} catch (RuntimeException re) {
			log.error("merge failed", re);
			throw re;
		}
	}

	public void attachDirty(Tieziaccessory instance) {
		log.debug("attaching dirty Tieziaccessory instance");
		try {
			getHibernateTemplate().saveOrUpdate(instance);
			log.debug("attach successful");
		} catch (RuntimeException re) {
			log.error("attach failed", re);
			throw re;
		}
	}

	public void attachClean(Tieziaccessory instance) {
		log.debug("attaching clean Tieziaccessory instance");
		try {
			getHibernateTemplate().lock(instance, LockMode.NONE);
			log.debug("attach successful");
		} catch (RuntimeException re) {
			log.error("attach failed", re);
			throw re;
		}
	}

	public static TieziaccessoryDAO getFromApplicationContext(
			ApplicationContext ctx) {
		return (TieziaccessoryDAO) ctx.getBean("TieziaccessoryDAO");
	}
}