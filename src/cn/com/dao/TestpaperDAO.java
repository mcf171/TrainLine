package cn.com.dao;

import java.util.List;
import java.util.Set;
import org.hibernate.LockMode;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.orm.hibernate3.support.HibernateDaoSupport;

import cn.com.model.Testpaper;

/**
 * A data access object (DAO) providing persistence and search support for
 * Testpaper entities. Transaction control of the save(), update() and delete()
 * operations can directly support Spring container-managed transactions or they
 * can be augmented to handle user-managed Spring transactions. Each of these
 * methods provides additional information for how to configure it for the
 * desired type of transaction control.
 * 
 * @see cn.com.model.Testpaper
 * @author MyEclipse Persistence Tools
 */

public class TestpaperDAO extends HibernateDaoSupport {
	private static final Logger log = LoggerFactory
			.getLogger(TestpaperDAO.class);
	// property constants
	public static final String TEST_PAPER_NAME = "testPaperName";

	protected void initDao() {
		// do nothing
	}

	public void save(Testpaper transientInstance) {
		log.debug("saving Testpaper instance");
		try {
			getHibernateTemplate().save(transientInstance);
			log.debug("save successful");
		} catch (RuntimeException re) {
			log.error("save failed", re);
			throw re;
		}
	}

	public void delete(Testpaper persistentInstance) {
		log.debug("deleting Testpaper instance");
		try {
			getHibernateTemplate().delete(persistentInstance);
			log.debug("delete successful");
		} catch (RuntimeException re) {
			log.error("delete failed", re);
			throw re;
		}
	}

	public Testpaper findById(java.lang.Integer id) {
		log.debug("getting Testpaper instance with id: " + id);
		try {
			Testpaper instance = (Testpaper) getHibernateTemplate().get(
					"cn.com.model.Testpaper", id);
			return instance;
		} catch (RuntimeException re) {
			log.error("get failed", re);
			throw re;
		}
	}

	public List findByExample(Testpaper instance) {
		log.debug("finding Testpaper instance by example");
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
		log.debug("finding Testpaper instance with property: " + propertyName
				+ ", value: " + value);
		try {
			String queryString = "from Testpaper as model where model."
					+ propertyName + "= ?";
			return getHibernateTemplate().find(queryString, value);
		} catch (RuntimeException re) {
			log.error("find by property name failed", re);
			throw re;
		}
	}

	public List findByTestPaperName(Object testPaperName) {
		return findByProperty(TEST_PAPER_NAME, testPaperName);
	}

	public List findAll() {
		log.debug("finding all Testpaper instances");
		try {
			String queryString = "from Testpaper";
			return getHibernateTemplate().find(queryString);
		} catch (RuntimeException re) {
			log.error("find all failed", re);
			throw re;
		}
	}

	public Testpaper merge(Testpaper detachedInstance) {
		log.debug("merging Testpaper instance");
		try {
			
			Testpaper result = (Testpaper) getHibernateTemplate().merge(
					detachedInstance);
			log.debug("merge successful");
			return result;
		} catch (RuntimeException re) {
			log.error("merge failed", re);
			throw re;
		}
	}
	
	public void update(Testpaper detachedInstance) {
		log.debug("merging Testpaper instance");
		try {
			
			 getHibernateTemplate().update(
					detachedInstance);
			log.debug("merge successful");
			//return result;
		} catch (RuntimeException re) {
			log.error("merge failed", re);
			throw re;
		}
	}

	public void attachDirty(Testpaper instance) {
		log.debug("attaching dirty Testpaper instance");
		try {
			getHibernateTemplate().saveOrUpdate(instance);
			log.debug("attach successful");
		} catch (RuntimeException re) {
			log.error("attach failed", re);
			throw re;
		}
	}

	public void attachClean(Testpaper instance) {
		log.debug("attaching clean Testpaper instance");
		try {
			getHibernateTemplate().lock(instance, LockMode.NONE);
			log.debug("attach successful");
		} catch (RuntimeException re) {
			log.error("attach failed", re);
			throw re;
		}
	}

	public static TestpaperDAO getFromApplicationContext(ApplicationContext ctx) {
		return (TestpaperDAO) ctx.getBean("TestpaperDAO");
	}
}