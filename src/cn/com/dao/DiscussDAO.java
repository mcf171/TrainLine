package cn.com.dao;

import java.util.List;
import org.hibernate.LockMode;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.orm.hibernate3.support.HibernateDaoSupport;

import cn.com.model.Discuss;

/**
 * A data access object (DAO) providing persistence and search support for
 * Discuss entities. Transaction control of the save(), update() and delete()
 * operations can directly support Spring container-managed transactions or they
 * can be augmented to handle user-managed Spring transactions. Each of these
 * methods provides additional information for how to configure it for the
 * desired type of transaction control.
 * 
 * @see cn.com.model.Discuss
 * @author MyEclipse Persistence Tools
 */

public class DiscussDAO extends HibernateDaoSupport {
	private static final Logger log = LoggerFactory.getLogger(DiscussDAO.class);
	// property constants
	public static final String USER_ID = "userId";
	public static final String DISCUSS_CONTENT = "discussContent";

	protected void initDao() {
		// do nothing
	}

	public void save(Discuss transientInstance) {
		log.debug("saving Discuss instance");
		try {
			getHibernateTemplate().save(transientInstance);
			log.debug("save successful");
		} catch (RuntimeException re) {
			log.error("save failed", re);
			throw re;
		}
	}

	public void delete(Discuss persistentInstance) {
		log.debug("deleting Discuss instance");
		try {
			getHibernateTemplate().delete(persistentInstance);
			log.debug("delete successful");
		} catch (RuntimeException re) {
			log.error("delete failed", re);
			throw re;
		}
	}

	public Discuss findById(java.lang.Integer id) {
		log.debug("getting Discuss instance with id: " + id);
		try {
			Discuss instance = (Discuss) getHibernateTemplate().get(
					"cn.com.model.Discuss", id);
			return instance;
		} catch (RuntimeException re) {
			log.error("get failed", re);
			throw re;
		}
	}

	public List findByExample(Discuss instance) {
		log.debug("finding Discuss instance by example");
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
		log.debug("finding Discuss instance with property: " + propertyName
				+ ", value: " + value);
		try {
			String queryString = "from Discuss as model where model."
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

	public List findByDiscussContent(Object discussContent) {
		return findByProperty(DISCUSS_CONTENT, discussContent);
	}

	public List findAll() {
		log.debug("finding all Discuss instances");
		try {
			String queryString = "from Discuss";
			return getHibernateTemplate().find(queryString);
		} catch (RuntimeException re) {
			log.error("find all failed", re);
			throw re;
		}
	}

	public Discuss merge(Discuss detachedInstance) {
		log.debug("merging Discuss instance");
		try {
			Discuss result = (Discuss) getHibernateTemplate().merge(
					detachedInstance);
			log.debug("merge successful");
			return result;
		} catch (RuntimeException re) {
			log.error("merge failed", re);
			throw re;
		}
	}

	public void attachDirty(Discuss instance) {
		log.debug("attaching dirty Discuss instance");
		try {
			getHibernateTemplate().saveOrUpdate(instance);
			log.debug("attach successful");
		} catch (RuntimeException re) {
			log.error("attach failed", re);
			throw re;
		}
	}

	public void attachClean(Discuss instance) {
		log.debug("attaching clean Discuss instance");
		try {
			getHibernateTemplate().lock(instance, LockMode.NONE);
			log.debug("attach successful");
		} catch (RuntimeException re) {
			log.error("attach failed", re);
			throw re;
		}
	}

	public static DiscussDAO getFromApplicationContext(ApplicationContext ctx) {
		return (DiscussDAO) ctx.getBean("DiscussDAO");
	}
}