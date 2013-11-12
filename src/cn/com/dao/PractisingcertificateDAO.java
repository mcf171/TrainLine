package cn.com.dao;

import java.util.List;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.hibernate.LockMode;
import org.springframework.context.ApplicationContext;
import org.springframework.orm.hibernate3.support.HibernateDaoSupport;

import cn.com.model.Practisingcertificate;

/**
 * A data access object (DAO) providing persistence and search support for
 * Practisingcertificate entities. Transaction control of the save(), update()
 * and delete() operations can directly support Spring container-managed
 * transactions or they can be augmented to handle user-managed Spring
 * transactions. Each of these methods provides additional information for how
 * to configure it for the desired type of transaction control.
 * 
 * @see cn.com.model.Practisingcertificate
 * @author MyEclipse Persistence Tools
 */
public class PractisingcertificateDAO extends HibernateDaoSupport {
	private static final Log log = LogFactory
			.getLog(PractisingcertificateDAO.class);
	// property constants
	public static final String USER_ID = "userId";
	public static final String PRACTISING_CERTIFICATE_NAME = "practisingCertificateName";
	public static final String PRACTISING_CERTIFICATE_NUMBER = "practisingCertificateNumber";
	public static final String PRACTISING_CERTIFICATE_REGISTER_UNIT = "practisingCertificateRegisterUnit";
	public static final String REGISTER_PRACTISING_CERTIFICATE_NUMBER = "registerPractisingCertificateNumber";
	public static final String PRACTISING_CERTIFICATE_REGISTER_MAGOR = "practisingCertificateRegisterMagor";
	public static final String PRACTISING_CERTIFICATECOMMENT = "practisingCertificatecomment";

	protected void initDao() {
		// do nothing
	}

	public void save(Practisingcertificate transientInstance) {
		log.debug("saving Practisingcertificate instance");
		try {
			getHibernateTemplate().save(transientInstance);
			log.debug("save successful");
		} catch (RuntimeException re) {
			log.error("save failed", re);
			throw re;
		}
	}

	public void delete(Practisingcertificate persistentInstance) {
		log.debug("deleting Practisingcertificate instance");
		try {
			getHibernateTemplate().delete(persistentInstance);
			log.debug("delete successful");
		} catch (RuntimeException re) {
			log.error("delete failed", re);
			throw re;
		}
	}

	public Practisingcertificate findById(java.lang.Integer id) {
		log.debug("getting Practisingcertificate instance with id: " + id);
		try {
			Practisingcertificate instance = (Practisingcertificate) getHibernateTemplate()
					.get("cn.com.model.Practisingcertificate", id);
			return instance;
		} catch (RuntimeException re) {
			log.error("get failed", re);
			throw re;
		}
	}

	public List findByExample(Practisingcertificate instance) {
		log.debug("finding Practisingcertificate instance by example");
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
		log.debug("finding Practisingcertificate instance with property: "
				+ propertyName + ", value: " + value);
		try {
			String queryString = "from Practisingcertificate as model where model."
					+ propertyName + "= ?";
			return getHibernateTemplate().find(queryString, value);
		} catch (RuntimeException re) {
			log.error("find by property name failed", re);
			throw re;
		}
	}

	public List findByUserId(Object userId) {
		return findByProperty(USER_ID, userId);
	}

	public List findByPractisingCertificateName(Object practisingCertificateName) {
		return findByProperty(PRACTISING_CERTIFICATE_NAME,
				practisingCertificateName);
	}

	public List findByPractisingCertificateNumber(
			Object practisingCertificateNumber) {
		return findByProperty(PRACTISING_CERTIFICATE_NUMBER,
				practisingCertificateNumber);
	}

	public List findByPractisingCertificateRegisterUnit(
			Object practisingCertificateRegisterUnit) {
		return findByProperty(PRACTISING_CERTIFICATE_REGISTER_UNIT,
				practisingCertificateRegisterUnit);
	}

	public List findByRegisterPractisingCertificateNumber(
			Object registerPractisingCertificateNumber) {
		return findByProperty(REGISTER_PRACTISING_CERTIFICATE_NUMBER,
				registerPractisingCertificateNumber);
	}

	public List findByPractisingCertificateRegisterMagor(
			Object practisingCertificateRegisterMagor) {
		return findByProperty(PRACTISING_CERTIFICATE_REGISTER_MAGOR,
				practisingCertificateRegisterMagor);
	}

	public List findByPractisingCertificatecomment(
			Object practisingCertificatecomment) {
		return findByProperty(PRACTISING_CERTIFICATECOMMENT,
				practisingCertificatecomment);
	}

	public List findAll() {
		log.debug("finding all Practisingcertificate instances");
		try {
			String queryString = "from Practisingcertificate";
			return getHibernateTemplate().find(queryString);
		} catch (RuntimeException re) {
			log.error("find all failed", re);
			throw re;
		}
	}

	public Practisingcertificate merge(Practisingcertificate detachedInstance) {
		log.debug("merging Practisingcertificate instance");
		try {
			Practisingcertificate result = (Practisingcertificate) getHibernateTemplate()
					.merge(detachedInstance);
			log.debug("merge successful");
			return result;
		} catch (RuntimeException re) {
			log.error("merge failed", re);
			throw re;
		}
	}

	public void attachDirty(Practisingcertificate instance) {
		log.debug("attaching dirty Practisingcertificate instance");
		try {
			getHibernateTemplate().saveOrUpdate(instance);
			log.debug("attach successful");
		} catch (RuntimeException re) {
			log.error("attach failed", re);
			throw re;
		}
	}

	public void attachClean(Practisingcertificate instance) {
		log.debug("attaching clean Practisingcertificate instance");
		try {
			getHibernateTemplate().lock(instance, LockMode.NONE);
			log.debug("attach successful");
		} catch (RuntimeException re) {
			log.error("attach failed", re);
			throw re;
		}
	}

	public static PractisingcertificateDAO getFromApplicationContext(
			ApplicationContext ctx) {
		return (PractisingcertificateDAO) ctx
				.getBean("PractisingcertificateDAO");
	}
}