package cn.com.dao;

import java.util.List;


import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.hibernate.LockMode;
import org.hibernate.Session;
import org.springframework.context.ApplicationContext;
import org.springframework.orm.hibernate3.support.HibernateDaoSupport;

import cn.com.model.Catalogue;
import cn.com.model.Resource;
import cn.com.model.Resourseandcatelogue;
import cn.com.model.ResourseandcatelogueId;


/**
 * A data access object (DAO) providing persistence and search support for
 * Resourseandcatelogue entities. Transaction control of the save(), update()
 * and delete() operations can directly support Spring container-managed
 * transactions or they can be augmented to handle user-managed Spring
 * transactions. Each of these methods provides additional information for how
 * to configure it for the desired type of transaction control.
 * 
 * @see cn.com.model.Resourseandcatelogue
 * @author MyEclipse Persistence Tools
 */
public class ResourseandcatelogueDAO extends HibernateDaoSupport {
	private static final Log log = LogFactory
			.getLog(ResourseandcatelogueDAO.class);

	// property constants

	protected void initDao() {
		// do nothing
	}



	public void delete(Resourseandcatelogue persistentInstance) {
		log.debug("deleting Resourseandcatelogue instance");
		try {
			getHibernateTemplate().delete(persistentInstance);
			log.debug("delete successful");
		} catch (RuntimeException re) {
			log.error("delete failed", re);
			throw re;
		}
	}

	public Resourseandcatelogue findById(cn.com.model.ResourseandcatelogueId id) {
		log.debug("getting Resourseandcatelogue instance with id: " + id);
		try {
			Resourseandcatelogue instance = (Resourseandcatelogue) getHibernateTemplate()
					.get("cn.com.model.Resourseandcatelogue", id);
			return instance;
		} catch (RuntimeException re) {
			log.error("get failed", re);
			throw re;
		}
	}

	public List findByExample(Resourseandcatelogue instance) {
		log.debug("finding Resourseandcatelogue instance by example");
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
		log.debug("finding Resourseandcatelogue instance with property: "
				+ propertyName + ", value: " + value);
		try {
			String queryString = "from Resourseandcatelogue as model where model."
					+ propertyName + "= ?";
			return getHibernateTemplate().find(queryString, value);
		} catch (RuntimeException re) {
			log.error("find by property name failed", re);
			throw re;
		}
	}

	public List findAll() {
		log.debug("finding all Resourseandcatelogue instances");
		try {
			String queryString = "from Resourseandcatelogue";
			return getHibernateTemplate().find(queryString);
		} catch (RuntimeException re) {
			log.error("find all failed", re);
			throw re;
		}
	}

	public Resourseandcatelogue merge(Resourseandcatelogue detachedInstance) {
		log.debug("merging Resourseandcatelogue instance");
		try {
			Resourseandcatelogue result = (Resourseandcatelogue) getHibernateTemplate()
					.merge(detachedInstance);
			log.debug("merge successful");
			return result;
		} catch (RuntimeException re) {
			log.error("merge failed", re);
			throw re;
		}
	}

	public void attachDirty(Resourseandcatelogue instance) {
		log.debug("attaching dirty Resourseandcatelogue instance");
		try {
			getHibernateTemplate().saveOrUpdate(instance);
			log.debug("attach successful");
		} catch (RuntimeException re) {
			log.error("attach failed", re);
			throw re;
		}
	}

	public void attachClean(Resourseandcatelogue instance) {
		log.debug("attaching clean Resourseandcatelogue instance");
		try {
			getHibernateTemplate().lock(instance, LockMode.NONE);
			log.debug("attach successful");
		} catch (RuntimeException re) {
			log.error("attach failed", re);
			throw re;
		}
	}

	public static ResourseandcatelogueDAO getFromApplicationContext(
			ApplicationContext ctx) {
		return (ResourseandcatelogueDAO) ctx.getBean("ResourseandcatelogueDAO");
	}



	public void save(Resource r) {
	 Session session =getHibernateTemplate().getSessionFactory().openSession();
	 session.save(r);
	 session.flush();
	}
}
