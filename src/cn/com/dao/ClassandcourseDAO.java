package cn.com.dao;

import java.util.List;
import org.hibernate.LockMode;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.orm.hibernate3.support.HibernateDaoSupport;

import cn.com.model.Classandcourse;
import cn.com.model.ClassandcourseId;

/**
 * A data access object (DAO) providing persistence and search support for
 * Classandcourse entities. Transaction control of the save(), update() and
 * delete() operations can directly support Spring container-managed
 * transactions or they can be augmented to handle user-managed Spring
 * transactions. Each of these methods provides additional information for how
 * to configure it for the desired type of transaction control.
 * 
 * @see cn.com.model.Classandcourse
 * @author MyEclipse Persistence Tools
 */

public class ClassandcourseDAO extends HibernateDaoSupport {
	private static final Logger log = LoggerFactory
			.getLogger(ClassandcourseDAO.class);

	// property constants

	protected void initDao() {
		// do nothing
	}

	public void save(Classandcourse transientInstance) {
		log.debug("saving Classandcourse instance");
		try {
			getHibernateTemplate().save(transientInstance);
			log.debug("save successful");
		} catch (RuntimeException re) {
			log.error("save failed", re);
			throw re;
		}
	}

	public void delete(Classandcourse persistentInstance) {
		log.debug("deleting Classandcourse instance");
		try {
			getHibernateTemplate().delete(persistentInstance);
			log.debug("delete successful");
		} catch (RuntimeException re) {
			log.error("delete failed", re);
			throw re;
		}
	}

	public Classandcourse findById(cn.com.model.ClassandcourseId id) {
		log.debug("getting Classandcourse instance with id: " + id);
		try {
			Classandcourse instance = (Classandcourse) getHibernateTemplate()
					.get("cn.com.model.Classandcourse", id);
			return instance;
		} catch (RuntimeException re) {
			log.error("get failed", re);
			throw re;
		}
	}

	public List findByExample(Classandcourse instance) {
		log.debug("finding Classandcourse instance by example");
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
		log.debug("finding Classandcourse instance with property: "
				+ propertyName + ", value: " + value);
		try {
			String queryString = "from Classandcourse as model where model."
					+ propertyName + "= ?";
			return getHibernateTemplate().find(queryString, value);
		} catch (RuntimeException re) {
			log.error("find by property name failed", re);
			throw re;
		}
	}

	public List findAll() {
		log.debug("finding all Classandcourse instances");
		try {
			String queryString = "from Classandcourse";
			return getHibernateTemplate().find(queryString);
		} catch (RuntimeException re) {
			log.error("find all failed", re);
			throw re;
		}
	}

	public Classandcourse merge(Classandcourse detachedInstance) {
		log.debug("merging Classandcourse instance");
		try {
			Classandcourse result = (Classandcourse) getHibernateTemplate()
					.merge(detachedInstance);
			log.debug("merge successful");
			return result;
		} catch (RuntimeException re) {
			log.error("merge failed", re);
			throw re;
		}
	}

	public void attachDirty(Classandcourse instance) {
		log.debug("attaching dirty Classandcourse instance");
		try {
			getHibernateTemplate().saveOrUpdate(instance);
			log.debug("attach successful");
		} catch (RuntimeException re) {
			log.error("attach failed", re);
			throw re;
		}
	}

	public void attachClean(Classandcourse instance) {
		log.debug("attaching clean Classandcourse instance");
		try {
			getHibernateTemplate().lock(instance, LockMode.NONE);
			log.debug("attach successful");
		} catch (RuntimeException re) {
			log.error("attach failed", re);
			throw re;
		}
	}

	public static ClassandcourseDAO getFromApplicationContext(
			ApplicationContext ctx) {
		return (ClassandcourseDAO) ctx.getBean("ClassandcourseDAO");
	}
}