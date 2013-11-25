package cn.com.dao;

import java.sql.Timestamp;
import java.util.List;
import java.util.Set;
import org.hibernate.LockMode;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.orm.hibernate3.support.HibernateDaoSupport;

import cn.com.model.Tiezi;

/**
 * A data access object (DAO) providing persistence and search support for Tiezi
 * entities. Transaction control of the save(), update() and delete() operations
 * can directly support Spring container-managed transactions or they can be
 * augmented to handle user-managed Spring transactions. Each of these methods
 * provides additional information for how to configure it for the desired type
 * of transaction control.
 * 
 * @see cn.com.model.Tiezi
 * @author MyEclipse Persistence Tools
 */

public class TieziDAO extends HibernateDaoSupport {
	private static final Logger log = LoggerFactory.getLogger(TieziDAO.class);
	// property constants
	public static final String USER_ID = "userId";
	public static final String TIEZI_CONTENT = "tieziContent";
	public static final String TIEZI_TITLE = "tieziTitle";

	protected void initDao() {
		// do nothing
	}

	public void save(Tiezi transientInstance) {
		log.debug("saving Tiezi instance");
		try {
			getHibernateTemplate().save(transientInstance);
			log.debug("save successful");
		} catch (RuntimeException re) {
			log.error("save failed", re);
			throw re;
		}
	}

	public void delete(Tiezi persistentInstance) {
		log.debug("deleting Tiezi instance");
		try {
			getHibernateTemplate().delete(persistentInstance);
			log.debug("delete successful");
		} catch (RuntimeException re) {
			log.error("delete failed", re);
			throw re;
		}
	}

	public Tiezi findById(java.lang.Integer id) {
		log.debug("getting Tiezi instance with id: " + id);
		try {
			Tiezi instance = (Tiezi) getHibernateTemplate().get(
					"cn.com.model.Tiezi", id);
			return instance;
		} catch (RuntimeException re) {
			log.error("get failed", re);
			throw re;
		}
	}

	public List findByExample(Tiezi instance) {
		log.debug("finding Tiezi instance by example");
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
		log.debug("finding Tiezi instance with property: " + propertyName
				+ ", value: " + value);
		try {
			String queryString = "from Tiezi as model where model."
					+ propertyName + "= ?";
			return getHibernateTemplate().find(queryString, value);
		} catch (RuntimeException re) {
			log.error("find by property name failed", re);
			throw re;
		}
	}

	public List findByUserId(Object userId) {
		return findByProperty(USER_ID, userId);
	}

	public List findByTieziContent(Object tieziContent) {
		return findByProperty(TIEZI_CONTENT, tieziContent);
	}

	public List findByTieziTitle(Object tieziTitle) {
		return findByProperty(TIEZI_TITLE, tieziTitle);
	}

	public List findAll() {
		log.debug("finding all Tiezi instances");
		try {
			String queryString = "from Tiezi";
			return getHibernateTemplate().find(queryString);
		} catch (RuntimeException re) {
			log.error("find all failed", re);
			throw re;
		}
	}

	public Tiezi merge(Tiezi detachedInstance) {
		log.debug("merging Tiezi instance");
		try {
			Tiezi result = (Tiezi) getHibernateTemplate().merge(
					detachedInstance);
			log.debug("merge successful");
			return result;
		} catch (RuntimeException re) {
			log.error("merge failed", re);
			throw re;
		}
	}

	public void attachDirty(Tiezi instance) {
		log.debug("attaching dirty Tiezi instance");
		try {
			getHibernateTemplate().saveOrUpdate(instance);
			log.debug("attach successful");
		} catch (RuntimeException re) {
			log.error("attach failed", re);
			throw re;
		}
	}

	public void attachClean(Tiezi instance) {
		log.debug("attaching clean Tiezi instance");
		try {
			getHibernateTemplate().lock(instance, LockMode.NONE);
			log.debug("attach successful");
		} catch (RuntimeException re) {
			log.error("attach failed", re);
			throw re;
		}
	}

	public static TieziDAO getFromApplicationContext(ApplicationContext ctx) {
		return (TieziDAO) ctx.getBean("TieziDAO");
	}
}