package cn.com.dao;

import java.util.List;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.hibernate.LockMode;
import org.springframework.context.ApplicationContext;
import org.springframework.orm.hibernate3.support.HibernateDaoSupport;

import cn.com.model.Catalogue;

/**
 * A data access object (DAO) providing persistence and search support for
 * Catalogue entities. Transaction control of the save(), update() and delete()
 * operations can directly support Spring container-managed transactions or they
 * can be augmented to handle user-managed Spring transactions. Each of these
 * methods provides additional information for how to configure it for the
 * desired type of transaction control.
 * 
 * @see cn.com.model.Catalogue
 * @author MyEclipse Persistence Tools
 */
public class CatalogueDAO extends HibernateDaoSupport {
	private static final Log log = LogFactory.getLog(CatalogueDAO.class);
	// property constants
	public static final String CATALOGUE_NAME = "catalogueName";
	public static final String CATALOGUE_NUMBER = "catalogueNumber";
	public static final String UPLOADING_PERSON = "uploadingPerson";

	protected void initDao() {
		// do nothing
	}

	public Integer save(Catalogue transientInstance) {
			return (Integer) getHibernateTemplate().save(transientInstance);
	
	}

	public void delete(Catalogue persistentInstance) {
		log.debug("deleting Catalogue instance");
		try {
			getHibernateTemplate().delete(persistentInstance);
			log.debug("delete successful");
		} catch (RuntimeException re) {
			log.error("delete failed", re);
			throw re;
		}
	}

	public Catalogue findById(java.lang.Integer id) {
		log.debug("getting Catalogue instance with id: " + id);
		try {
			Catalogue instance = (Catalogue) getHibernateTemplate().get(
					"cn.com.model.Catalogue", id);
			return instance;
		} catch (RuntimeException re) {
			log.error("get failed", re);
			throw re;
		}
	}

	public List findByExample(Catalogue instance) {
		log.debug("finding Catalogue instance by example");
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
		log.debug("finding Catalogue instance with property: " + propertyName
				+ ", value: " + value);
		try {
			String queryString = "from Catalogue as model where model."
					+ propertyName + "= ?";
			return getHibernateTemplate().find(queryString, value);
		} catch (RuntimeException re) {
			log.error("find by property name failed", re);
			throw re;
		}
	}

	public List findByCatalogueName(Object catalogueName) {
		return findByProperty(CATALOGUE_NAME, catalogueName);
	}

	public List findByCatalogueNumber(Object catalogueNumber) {
		return findByProperty(CATALOGUE_NUMBER, catalogueNumber);
	}

	public List findByUploadingPerson(Object uploadingPerson) {
		return findByProperty(UPLOADING_PERSON, uploadingPerson);
	}

	public List findAll() {
		log.debug("finding all Catalogue instances");
		try {
			String queryString = "from Catalogue";
			return getHibernateTemplate().find(queryString);
		} catch (RuntimeException re) {
			log.error("find all failed", re);
			throw re;
		}
	}

	public Catalogue merge(Catalogue detachedInstance) {
		log.debug("merging Catalogue instance");
		try {
			Catalogue result = (Catalogue) getHibernateTemplate().merge(
					detachedInstance);
			log.debug("merge successful");
			return result;
		} catch (RuntimeException re) {
			log.error("merge failed", re);
			throw re;
		}
	}

	public void attachDirty(Catalogue instance) {
		log.debug("attaching dirty Catalogue instance");
		try {
			getHibernateTemplate().saveOrUpdate(instance);
			log.debug("attach successful");
		} catch (RuntimeException re) {
			log.error("attach failed", re);
			throw re;
		}
	}

	public void attachClean(Catalogue instance) {
		log.debug("attaching clean Catalogue instance");
		try {
			getHibernateTemplate().lock(instance, LockMode.NONE);
			log.debug("attach successful");
		} catch (RuntimeException re) {
			log.error("attach failed", re);
			throw re;
		}
	}

	public static CatalogueDAO getFromApplicationContext(ApplicationContext ctx) {
		return (CatalogueDAO) ctx.getBean("CatalogueDAO");
	}
}