package cn.com.dao;

import java.sql.Timestamp;
import java.util.List;
import org.hibernate.LockMode;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.orm.hibernate3.support.HibernateDaoSupport;

import cn.com.model.Tcomment;

/**
 * A data access object (DAO) providing persistence and search support for
 * Tcomment entities. Transaction control of the save(), update() and delete()
 * operations can directly support Spring container-managed transactions or they
 * can be augmented to handle user-managed Spring transactions. Each of these
 * methods provides additional information for how to configure it for the
 * desired type of transaction control.
 * 
 * @see cn.com.model.Tcomment
 * @author MyEclipse Persistence Tools
 */

public class TcommentDAO extends HibernateDaoSupport {
	private static final Logger log = LoggerFactory
			.getLogger(TcommentDAO.class);
	// property constants
	public static final String TCOMMENT_CONTENT = "tcommentContent";
	public static final String TCOMMENT_EVALUATE = "tcommentEvaluate";

	protected void initDao() {
		// do nothing
	}

	public void save(Tcomment transientInstance) {
		log.debug("saving Tcomment instance");
		try {
			getHibernateTemplate().save(transientInstance);
			log.debug("save successful");
		} catch (RuntimeException re) {
			log.error("save failed", re);
			throw re;
		}
	}

	public void delete(Tcomment persistentInstance) {
		log.debug("deleting Tcomment instance");
		try {
			getHibernateTemplate().delete(persistentInstance);
			log.debug("delete successful");
		} catch (RuntimeException re) {
			log.error("delete failed", re);
			throw re;
		}
	}

	public Tcomment findById(java.lang.Integer id) {
		log.debug("getting Tcomment instance with id: " + id);
		try {
			Tcomment instance = (Tcomment) getHibernateTemplate().get(
					"cn.com.model.Tcomment", id);
			return instance;
		} catch (RuntimeException re) {
			log.error("get failed", re);
			throw re;
		}
	}

	public List findByExample(Tcomment instance) {
		log.debug("finding Tcomment instance by example");
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
		log.debug("finding Tcomment instance with property: " + propertyName
				+ ", value: " + value);
		try {
			String queryString = "from Tcomment as model where model."
					+ propertyName + "= ?";
			return getHibernateTemplate().find(queryString, value);
		} catch (RuntimeException re) {
			log.error("find by property name failed", re);
			throw re;
		}
	}

	public List findByTcommentContent(Object tcommentContent) {
		return findByProperty(TCOMMENT_CONTENT, tcommentContent);
	}

	public List findByTcommentEvaluate(Object tcommentEvaluate) {
		return findByProperty(TCOMMENT_EVALUATE, tcommentEvaluate);
	}

	public List findAll() {
		log.debug("finding all Tcomment instances");
		try {
			String queryString = "from Tcomment";
			return getHibernateTemplate().find(queryString);
		} catch (RuntimeException re) {
			log.error("find all failed", re);
			throw re;
		}
	}

	public Tcomment merge(Tcomment detachedInstance) {
		log.debug("merging Tcomment instance");
		try {
			Tcomment result = (Tcomment) getHibernateTemplate().merge(
					detachedInstance);
			log.debug("merge successful");
			return result;
		} catch (RuntimeException re) {
			log.error("merge failed", re);
			throw re;
		}
	}

	public void attachDirty(Tcomment instance) {
		log.debug("attaching dirty Tcomment instance");
		try {
			getHibernateTemplate().saveOrUpdate(instance);
			log.debug("attach successful");
		} catch (RuntimeException re) {
			log.error("attach failed", re);
			throw re;
		}
	}

	public void attachClean(Tcomment instance) {
		log.debug("attaching clean Tcomment instance");
		try {
			getHibernateTemplate().lock(instance, LockMode.NONE);
			log.debug("attach successful");
		} catch (RuntimeException re) {
			log.error("attach failed", re);
			throw re;
		}
	}

	public static TcommentDAO getFromApplicationContext(ApplicationContext ctx) {
		return (TcommentDAO) ctx.getBean("TcommentDAO");
	}
}