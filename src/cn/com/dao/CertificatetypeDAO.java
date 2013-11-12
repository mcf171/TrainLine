package cn.com.dao;

import java.util.List;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.hibernate.LockMode;
import org.springframework.context.ApplicationContext;
import org.springframework.orm.hibernate3.support.HibernateDaoSupport;

import cn.com.model.Certificatetype;

/**
 * A data access object (DAO) providing persistence and search support for
 * Certificatetype entities. Transaction control of the save(), update() and
 * delete() operations can directly support Spring container-managed
 * transactions or they can be augmented to handle user-managed Spring
 * transactions. Each of these methods provides additional information for how
 * to configure it for the desired type of transaction control.
 * 
 * @see cn.com.model.Certificatetype
 * @author MyEclipse Persistence Tools
 */
public class CertificatetypeDAO extends HibernateDaoSupport {
	private static final Log log = LogFactory.getLog(CertificatetypeDAO.class);
	// property constants
	public static final String CERTIFICATE_TYPE_NAME = "certificateTypeName";

	protected void initDao() {
		// do nothing
	}

	public void save(Certificatetype transientInstance) {
		log.debug("saving Certificatetype instance");
		try {
			getHibernateTemplate().save(transientInstance);
			log.debug("save successful");
		} catch (RuntimeException re) {
			log.error("save failed", re);
			throw re;
		}
	}

	public void delete(Certificatetype persistentInstance) {
		log.debug("deleting Certificatetype instance");
		try {
			getHibernateTemplate().delete(persistentInstance);
			log.debug("delete successful");
		} catch (RuntimeException re) {
			log.error("delete failed", re);
			throw re;
		}
	}

	public Certificatetype findById(java.lang.Integer id) {
		log.debug("getting Certificatetype instance with id: " + id);
		try {
			Certificatetype instance = (Certificatetype) getHibernateTemplate()
					.get("cn.com.model.Certificatetype", id);
			return instance;
		} catch (RuntimeException re) {
			log.error("get failed", re);
			throw re;
		}
	}

	public List findByExample(Certificatetype instance) {
		log.debug("finding Certificatetype instance by example");
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
		log.debug("finding Certificatetype instance with property: "
				+ propertyName + ", value: " + value);
		try {
			String queryString = "from Certificatetype as model where model."
					+ propertyName + "= ?";
			return getHibernateTemplate().find(queryString, value);
		} catch (RuntimeException re) {
			log.error("find by property name failed", re);
			throw re;
		}
	}

	public List findByCertificateTypeName(Object certificateTypeName) {
		return findByProperty(CERTIFICATE_TYPE_NAME, certificateTypeName);
	}

	public List findAll() {
		log.debug("finding all Certificatetype instances");
		try {
			String queryString = "from Certificatetype";
			return getHibernateTemplate().find(queryString);
		} catch (RuntimeException re) {
			log.error("find all failed", re);
			throw re;
		}
	}

	public Certificatetype merge(Certificatetype detachedInstance) {
		log.debug("merging Certificatetype instance");
		try {
			Certificatetype result = (Certificatetype) getHibernateTemplate()
					.merge(detachedInstance);
			log.debug("merge successful");
			return result;
		} catch (RuntimeException re) {
			log.error("merge failed", re);
			throw re;
		}
	}

	public void attachDirty(Certificatetype instance) {
		log.debug("attaching dirty Certificatetype instance");
		try {
			getHibernateTemplate().saveOrUpdate(instance);
			log.debug("attach successful");
		} catch (RuntimeException re) {
			log.error("attach failed", re);
			throw re;
		}
	}

	public void attachClean(Certificatetype instance) {
		log.debug("attaching clean Certificatetype instance");
		try {
			getHibernateTemplate().lock(instance, LockMode.NONE);
			log.debug("attach successful");
		} catch (RuntimeException re) {
			log.error("attach failed", re);
			throw re;
		}
	}

	public static CertificatetypeDAO getFromApplicationContext(
			ApplicationContext ctx) {
		return (CertificatetypeDAO) ctx.getBean("CertificatetypeDAO");
	}
}