package cn.com.dao;

import java.util.List;
import org.hibernate.LockMode;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.orm.hibernate3.support.HibernateDaoSupport;

import cn.com.model.Mailaccessory;

/**
 * A data access object (DAO) providing persistence and search support for
 * Mailaccessory entities. Transaction control of the save(), update() and
 * delete() operations can directly support Spring container-managed
 * transactions or they can be augmented to handle user-managed Spring
 * transactions. Each of these methods provides additional information for how
 * to configure it for the desired type of transaction control.
 * 
 * @see cn.com.model.Mailaccessory
 * @author MyEclipse Persistence Tools
 */

public class MailaccessoryDAO extends HibernateDaoSupport {
	private static final Logger log = LoggerFactory
			.getLogger(MailaccessoryDAO.class);
	// property constants
	public static final String MAIL_ACCESSORY_NAME = "mailAccessoryName";
	public static final String MAIL_ACCESSORY_PATH = "mailAccessoryPath";

	protected void initDao() {
		// do nothing
	}

	public void save(Mailaccessory transientInstance) {
		log.debug("saving Mailaccessory instance");
		try {
			getHibernateTemplate().save(transientInstance);
			log.debug("save successful");
		} catch (RuntimeException re) {
			log.error("save failed", re);
			throw re;
		}
	}

	public void delete(Mailaccessory persistentInstance) {
		log.debug("deleting Mailaccessory instance");
		try {
			getHibernateTemplate().delete(persistentInstance);
			log.debug("delete successful");
		} catch (RuntimeException re) {
			log.error("delete failed", re);
			throw re;
		}
	}

	public Mailaccessory findById(java.lang.Integer id) {
		log.debug("getting Mailaccessory instance with id: " + id);
		try {
			Mailaccessory instance = (Mailaccessory) getHibernateTemplate()
					.get("cn.com.model.Mailaccessory", id);
			return instance;
		} catch (RuntimeException re) {
			log.error("get failed", re);
			throw re;
		}
	}

	public List findByExample(Mailaccessory instance) {
		log.debug("finding Mailaccessory instance by example");
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
		log.debug("finding Mailaccessory instance with property: "
				+ propertyName + ", value: " + value);
		try {
			String queryString = "from Mailaccessory as model where model."
					+ propertyName + "= ?";
			return getHibernateTemplate().find(queryString, value);
		} catch (RuntimeException re) {
			log.error("find by property name failed", re);
			throw re;
		}
	}

	public List findByMailAccessoryName(Object mailAccessoryName) {
		return findByProperty(MAIL_ACCESSORY_NAME, mailAccessoryName);
	}

	public List findByMailAccessoryPath(Object mailAccessoryPath) {
		return findByProperty(MAIL_ACCESSORY_PATH, mailAccessoryPath);
	}

	public List findAll() {
		log.debug("finding all Mailaccessory instances");
		try {
			String queryString = "from Mailaccessory";
			return getHibernateTemplate().find(queryString);
		} catch (RuntimeException re) {
			log.error("find all failed", re);
			throw re;
		}
	}

	public Mailaccessory merge(Mailaccessory detachedInstance) {
		log.debug("merging Mailaccessory instance");
		try {
			Mailaccessory result = (Mailaccessory) getHibernateTemplate()
					.merge(detachedInstance);
			log.debug("merge successful");
			return result;
		} catch (RuntimeException re) {
			log.error("merge failed", re);
			throw re;
		}
	}

	public void attachDirty(Mailaccessory instance) {
		log.debug("attaching dirty Mailaccessory instance");
		try {
			getHibernateTemplate().saveOrUpdate(instance);
			log.debug("attach successful");
		} catch (RuntimeException re) {
			log.error("attach failed", re);
			throw re;
		}
	}

	public void attachClean(Mailaccessory instance) {
		log.debug("attaching clean Mailaccessory instance");
		try {
			getHibernateTemplate().lock(instance, LockMode.NONE);
			log.debug("attach successful");
		} catch (RuntimeException re) {
			log.error("attach failed", re);
			throw re;
		}
	}

	public static MailaccessoryDAO getFromApplicationContext(
			ApplicationContext ctx) {
		return (MailaccessoryDAO) ctx.getBean("MailaccessoryDAO");
	}
}