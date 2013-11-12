package cn.com.dao;

import java.util.List;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.hibernate.LockMode;
import org.springframework.context.ApplicationContext;
import org.springframework.orm.hibernate3.support.HibernateDaoSupport;

import cn.com.model.Classanduser;

/**
 * A data access object (DAO) providing persistence and search support for
 * Classanduser entities. Transaction control of the save(), update() and
 * delete() operations can directly support Spring container-managed
 * transactions or they can be augmented to handle user-managed Spring
 * transactions. Each of these methods provides additional information for how
 * to configure it for the desired type of transaction control.
 * 
 * @see cn.com.model.Classanduser
 * @author MyEclipse Persistence Tools
 */
public class ClassanduserDAO extends HibernateDaoSupport {
	private static final Log log = LogFactory.getLog(ClassanduserDAO.class);

	// property constants

	protected void initDao() {
		// do nothing
	}

	public void save(Classanduser transientInstance) {
		log.debug("saving Classanduser instance");
		try {
			getHibernateTemplate().save(transientInstance);
			log.debug("save successful");
		} catch (RuntimeException re) {
			log.error("save failed", re);
			throw re;
		}
	}

	public void delete(Classanduser persistentInstance) {
		log.debug("deleting Classanduser instance");
		try {
			getHibernateTemplate().delete(persistentInstance);
			log.debug("delete successful");
		} catch (RuntimeException re) {
			log.error("delete failed", re);
			throw re;
		}
	}

	public Classanduser findById(cn.com.model.ClassanduserId id) {
		log.debug("getting Classanduser instance with id: " + id);
		try {
			Classanduser instance = (Classanduser) getHibernateTemplate().get(
					"cn.com.model.Classanduser", id);
			return instance;
		} catch (RuntimeException re) {
			log.error("get failed", re);
			throw re;
		}
	}

	public List findByExample(Classanduser instance) {
		log.debug("finding Classanduser instance by example");
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
		log.debug("finding Classanduser instance with property: "
				+ propertyName + ", value: " + value);
		try {
			String queryString = "from Classanduser as model where model."
					+ propertyName + "= ?";
			return getHibernateTemplate().find(queryString, value);
		} catch (RuntimeException re) {
			log.error("find by property name failed", re);
			throw re;
		}
	}

	public List findAll() {
		log.debug("finding all Classanduser instances");
		try {
			String queryString = "from Classanduser";
			return getHibernateTemplate().find(queryString);
		} catch (RuntimeException re) {
			log.error("find all failed", re);
			throw re;
		}
	}

	public Classanduser merge(Classanduser detachedInstance) {
		log.debug("merging Classanduser instance");
		try {
			Classanduser result = (Classanduser) getHibernateTemplate().merge(
					detachedInstance);
			log.debug("merge successful");
			return result;
		} catch (RuntimeException re) {
			log.error("merge failed", re);
			throw re;
		}
	}

	public void attachDirty(Classanduser instance) {
		log.debug("attaching dirty Classanduser instance");
		try {
			getHibernateTemplate().saveOrUpdate(instance);
			log.debug("attach successful");
		} catch (RuntimeException re) {
			log.error("attach failed", re);
			throw re;
		}
	}

	public void attachClean(Classanduser instance) {
		log.debug("attaching clean Classanduser instance");
		try {
			getHibernateTemplate().lock(instance, LockMode.NONE);
			log.debug("attach successful");
		} catch (RuntimeException re) {
			log.error("attach failed", re);
			throw re;
		}
	}

	public static ClassanduserDAO getFromApplicationContext(
			ApplicationContext ctx) {
		return (ClassanduserDAO) ctx.getBean("ClassanduserDAO");
	}
}