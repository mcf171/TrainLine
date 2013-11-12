package cn.com.dao;

import java.util.List;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.hibernate.LockMode;
import org.springframework.context.ApplicationContext;
import org.springframework.orm.hibernate3.support.HibernateDaoSupport;

import cn.com.model.Jobtechnicalgrade;

/**
 * A data access object (DAO) providing persistence and search support for
 * Jobtechnicalgrade entities. Transaction control of the save(), update() and
 * delete() operations can directly support Spring container-managed
 * transactions or they can be augmented to handle user-managed Spring
 * transactions. Each of these methods provides additional information for how
 * to configure it for the desired type of transaction control.
 * 
 * @see cn.com.model.Jobtechnicalgrade
 * @author MyEclipse Persistence Tools
 */
public class JobtechnicalgradeDAO extends HibernateDaoSupport {
	private static final Log log = LogFactory
			.getLog(JobtechnicalgradeDAO.class);
	// property constants
	public static final String USER_ID = "userId";
	public static final String TECHNICAL_GRADE = "technicalGrade";
	public static final String WORK_TYPE = "workType";
	public static final String WORKERPROFESSIONAL_CERTIFICATE = "workerprofessionalCertificate";
	public static final String EMPLOYMENT_TYPE = "employmentType";
	public static final String EMPLOYMENT_NUMBER = "employmentNumber";
	public static final String SPECIA_TYPE = "speciaType";
	public static final String WORK_COMMENT = "workComment";

	protected void initDao() {
		// do nothing
	}

	public void save(Jobtechnicalgrade transientInstance) {
		log.debug("saving Jobtechnicalgrade instance");
		try {
			getHibernateTemplate().save(transientInstance);
			log.debug("save successful");
		} catch (RuntimeException re) {
			log.error("save failed", re);
			throw re;
		}
	}

	public void delete(Jobtechnicalgrade persistentInstance) {
		log.debug("deleting Jobtechnicalgrade instance");
		try {
			getHibernateTemplate().delete(persistentInstance);
			log.debug("delete successful");
		} catch (RuntimeException re) {
			log.error("delete failed", re);
			throw re;
		}
	}

	public Jobtechnicalgrade findById(java.lang.Integer id) {
		log.debug("getting Jobtechnicalgrade instance with id: " + id);
		try {
			Jobtechnicalgrade instance = (Jobtechnicalgrade) getHibernateTemplate()
					.get("cn.com.model.Jobtechnicalgrade", id);
			return instance;
		} catch (RuntimeException re) {
			log.error("get failed", re);
			throw re;
		}
	}

	public List findByExample(Jobtechnicalgrade instance) {
		log.debug("finding Jobtechnicalgrade instance by example");
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
		log.debug("finding Jobtechnicalgrade instance with property: "
				+ propertyName + ", value: " + value);
		try {
			String queryString = "from Jobtechnicalgrade as model where model."
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

	public List findByTechnicalGrade(Object technicalGrade) {
		return findByProperty(TECHNICAL_GRADE, technicalGrade);
	}

	public List findByWorkType(Object workType) {
		return findByProperty(WORK_TYPE, workType);
	}

	public List findByWorkerprofessionalCertificate(
			Object workerprofessionalCertificate) {
		return findByProperty(WORKERPROFESSIONAL_CERTIFICATE,
				workerprofessionalCertificate);
	}

	public List findByEmploymentType(Object employmentType) {
		return findByProperty(EMPLOYMENT_TYPE, employmentType);
	}

	public List findByEmploymentNumber(Object employmentNumber) {
		return findByProperty(EMPLOYMENT_NUMBER, employmentNumber);
	}

	public List findBySpeciaType(Object speciaType) {
		return findByProperty(SPECIA_TYPE, speciaType);
	}

	public List findByWorkComment(Object workComment) {
		return findByProperty(WORK_COMMENT, workComment);
	}

	public List findAll() {
		log.debug("finding all Jobtechnicalgrade instances");
		try {
			String queryString = "from Jobtechnicalgrade";
			return getHibernateTemplate().find(queryString);
		} catch (RuntimeException re) {
			log.error("find all failed", re);
			throw re;
		}
	}

	public Jobtechnicalgrade merge(Jobtechnicalgrade detachedInstance) {
		log.debug("merging Jobtechnicalgrade instance");
		try {
			Jobtechnicalgrade result = (Jobtechnicalgrade) getHibernateTemplate()
					.merge(detachedInstance);
			log.debug("merge successful");
			return result;
		} catch (RuntimeException re) {
			log.error("merge failed", re);
			throw re;
		}
	}

	public void attachDirty(Jobtechnicalgrade instance) {
		log.debug("attaching dirty Jobtechnicalgrade instance");
		try {
			getHibernateTemplate().saveOrUpdate(instance);
			log.debug("attach successful");
		} catch (RuntimeException re) {
			log.error("attach failed", re);
			throw re;
		}
	}

	public void attachClean(Jobtechnicalgrade instance) {
		log.debug("attaching clean Jobtechnicalgrade instance");
		try {
			getHibernateTemplate().lock(instance, LockMode.NONE);
			log.debug("attach successful");
		} catch (RuntimeException re) {
			log.error("attach failed", re);
			throw re;
		}
	}

	public static JobtechnicalgradeDAO getFromApplicationContext(
			ApplicationContext ctx) {
		return (JobtechnicalgradeDAO) ctx.getBean("JobtechnicalgradeDAO");
	}
}