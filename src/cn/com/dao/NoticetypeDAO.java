package cn.com.dao;

import java.util.List;


import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.hibernate.LockMode;
import org.springframework.context.ApplicationContext;
import org.springframework.orm.hibernate3.support.HibernateDaoSupport;

import cn.com.model.Noticetype;


import cn.com.model.Noticetype;

/**
 * A data access object (DAO) providing persistence and search support for
 * Noticetype entities. Transaction control of the save(), update() and delete()
 * operations can directly support Spring container-managed transactions or they
 * can be augmented to handle user-managed Spring transactions. Each of these
 * methods provides additional information for how to configure it for the
 * desired type of transaction control.
 * 
 * @see cn.com.model.Noticetype
 * @author MyEclipse Persistence Tools
 */
public class NoticetypeDAO extends HibernateDaoSupport {
	private static final Log log = LogFactory.getLog(NoticetypeDAO.class);
	// property constants
	public static final String NOTICE_TYPE_NAME = "noticeTypeName";

	protected void initDao() {
		// do nothing
	}

	public void save(Noticetype transientInstance) {
		log.debug("saving Noticetype instance");
		try {
			getHibernateTemplate().save(transientInstance);
			log.debug("save successful");
		} catch (RuntimeException re) {
			log.error("save failed", re);
			throw re;
		}
	}

	public void delete(Noticetype persistentInstance) {
		log.debug("deleting Noticetype instance");
		try {
			getHibernateTemplate().delete(persistentInstance);
			log.debug("delete successful");
		} catch (RuntimeException re) {
			log.error("delete failed", re);
			throw re;
		}
	}

	public Noticetype findById(java.lang.Integer id) {
		log.debug("getting Noticetype instance with id: " + id);
		try {
			Noticetype instance = (Noticetype) getHibernateTemplate().get(
					"cn.com.model.Noticetype", id);
			return instance;
		} catch (RuntimeException re) {
			log.error("get failed", re);
			throw re;
		}
	}

	public List findByExample(Noticetype instance) {
		log.debug("finding Noticetype instance by example");
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
		log.debug("finding Noticetype instance with property: " + propertyName
				+ ", value: " + value);
		try {
			String queryString = "from Noticetype as model where model."
					+ propertyName + "= ?";
			return getHibernateTemplate().find(queryString, value);
		} catch (RuntimeException re) {
			log.error("find by property name failed", re);
			throw re;
		}
	}

	public List findByNoticeTypeName(Object noticeTypeName) {
		return findByProperty(NOTICE_TYPE_NAME, noticeTypeName);
	}

	public List findAll() {
		log.debug("finding all Noticetype instances");
		try {
			String queryString = "from Noticetype";
			return getHibernateTemplate().find(queryString);
		} catch (RuntimeException re) {
			log.error("find all failed", re);
			throw re;
		}
	}

	public Noticetype merge(Noticetype detachedInstance) {
		log.debug("merging Noticetype instance");
		try {
			Noticetype result = (Noticetype) getHibernateTemplate().merge(
					detachedInstance);
			log.debug("merge successful");
			return result;
		} catch (RuntimeException re) {
			log.error("merge failed", re);
			throw re;
		}
	}

	public void attachDirty(Noticetype instance) {
		log.debug("attaching dirty Noticetype instance");
		try {
			getHibernateTemplate().saveOrUpdate(instance);
			log.debug("attach successful");
		} catch (RuntimeException re) {
			log.error("attach failed", re);
			throw re;
		}
	}

	public void attachClean(Noticetype instance) {
		log.debug("attaching clean Noticetype instance");
		try {
			getHibernateTemplate().lock(instance, LockMode.NONE);
			log.debug("attach successful");
		} catch (RuntimeException re) {
			log.error("attach failed", re);
			throw re;
		}
	}

	public static NoticetypeDAO getFromApplicationContext(ApplicationContext ctx) {
		return (NoticetypeDAO) ctx.getBean("NoticetypeDAO");
	}
}
