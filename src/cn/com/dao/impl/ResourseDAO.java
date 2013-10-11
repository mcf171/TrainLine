package cn.com.dao.impl;

import java.util.List;
import org.hibernate.LockMode;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.orm.hibernate3.support.HibernateDaoSupport;

import cn.com.model.Resourse;

/**
 * A data access object (DAO) providing persistence and search support for
 * Resourse entities. Transaction control of the save(), update() and delete()
 * operations can directly support Spring container-managed transactions or they
 * can be augmented to handle user-managed Spring transactions. Each of these
 * methods provides additional information for how to configure it for the
 * desired type of transaction control.
 * 
 * @see cn.com.model.Resourse
 * @author MyEclipse Persistence Tools
 */

public class ResourseDAO extends HibernateDaoSupport {
	private static final Logger log = LoggerFactory
			.getLogger(ResourseDAO.class);
	// property constants
	public static final String RESOURSE_NAME = "resourseName";
	public static final String RESOURSE_CONTENT = "resourseContent";
	public static final String RESOURSE_PERSON = "resoursePerson";
	public static final String DOWNLOUND_COUNT = "downloundCount";

	protected void initDao() {
		// do nothing
	}

	public void save(Resourse transientInstance) {
		log.debug("saving Resourse instance");
		try {
			getHibernateTemplate().save(transientInstance);
			log.debug("save successful");
		} catch (RuntimeException re) {
			log.error("save failed", re);
			throw re;
		}
	}

	public void delete(Resourse persistentInstance) {
		log.debug("deleting Resourse instance");
		try {
			getHibernateTemplate().delete(persistentInstance);
			log.debug("delete successful");
		} catch (RuntimeException re) {
			log.error("delete failed", re);
			throw re;
		}
	}

	public Resourse findById(java.lang.Integer id) {
		log.debug("getting Resourse instance with id: " + id);
		try {
			Resourse instance = (Resourse) getHibernateTemplate().get(
					"cn.com.model.Resourse", id);
			return instance;
		} catch (RuntimeException re) {
			log.error("get failed", re);
			throw re;
		}
	}

	public List findByExample(Resourse instance) {
		log.debug("finding Resourse instance by example");
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
		log.debug("finding Resourse instance with property: " + propertyName
				+ ", value: " + value);
		try {
			String queryString = "from Resourse as model where model."
					+ propertyName + "= ?";
			return getHibernateTemplate().find(queryString, value);
		} catch (RuntimeException re) {
			log.error("find by property name failed", re);
			throw re;
		}
	}

	public List findByResourseName(Object resourseName) {
		return findByProperty(RESOURSE_NAME, resourseName);
	}

	public List findByResourseContent(Object resourseContent) {
		return findByProperty(RESOURSE_CONTENT, resourseContent);
	}

	public List findByResoursePerson(Object resoursePerson) {
		return findByProperty(RESOURSE_PERSON, resoursePerson);
	}

	public List findByDownloundCount(Object downloundCount) {
		return findByProperty(DOWNLOUND_COUNT, downloundCount);
	}

	public List findAll() {
		log.debug("finding all Resourse instances");
		try {
			String queryString = "from Resourse order by downloundCount desc";
			return getHibernateTemplate().find(queryString);
		} catch (RuntimeException re) {
			log.error("find all failed", re);
			throw re;
		}
	}

	public Resourse merge(Resourse detachedInstance) {
		log.debug("merging Resourse instance");
		try {
			Resourse result = (Resourse) getHibernateTemplate().merge(
					detachedInstance);
			log.debug("merge successful");
			return result;
		} catch (RuntimeException re) {
			log.error("merge failed", re);
			throw re;
		}
	}

	public void attachDirty(Resourse instance) {
		log.debug("attaching dirty Resourse instance");
		try {
			getHibernateTemplate().saveOrUpdate(instance);
			log.debug("attach successful");
		} catch (RuntimeException re) {
			log.error("attach failed", re);
			throw re;
		}
	}

	public void attachClean(Resourse instance) {
		log.debug("attaching clean Resourse instance");
		try {
			getHibernateTemplate().lock(instance, LockMode.NONE);
			log.debug("attach successful");
		} catch (RuntimeException re) {
			log.error("attach failed", re);
			throw re;
		}
	}

	public static ResourseDAO getFromApplicationContext(ApplicationContext ctx) {
		return (ResourseDAO) ctx.getBean("ResourseDAO");
	}
}