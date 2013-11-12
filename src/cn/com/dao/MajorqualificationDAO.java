package cn.com.dao;

import java.util.List;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.hibernate.LockMode;
import org.springframework.context.ApplicationContext;
import org.springframework.orm.hibernate3.support.HibernateDaoSupport;

import cn.com.model.Majorqualification;

/**
 * A data access object (DAO) providing persistence and search support for
 * Majorqualification entities. Transaction control of the save(), update() and
 * delete() operations can directly support Spring container-managed
 * transactions or they can be augmented to handle user-managed Spring
 * transactions. Each of these methods provides additional information for how
 * to configure it for the desired type of transaction control.
 * 
 * @see cn.com.model.Majorqualification
 * @author MyEclipse Persistence Tools
 */
public class MajorqualificationDAO extends HibernateDaoSupport {
	private static final Log log = LogFactory
			.getLog(MajorqualificationDAO.class);
	// property constants
	public static final String USER_ID = "userId";
	public static final String GRANT_WAY = "grantWay";
	public static final String QUALIFICATION_APPROVAL_DOCUMENT = "qualificationApprovalDocument";
	public static final String GRANT_QUALIFICATION_UNIT = "grantQualificationUnit";
	public static final String MAJOR_CERTIFICATE_NUMBER = "majorCertificateNumber";
	public static final String ENGAGE_UNIT = "engageUnit";
	public static final String EMPLOYMENT_APPROVAL_DOCUMENT = "employmentApprovalDocument";
	public static final String PROFESSIONAL_OFFICE = "professionalOffice";
	public static final String JUDGING_PANEL = "judgingPanel";
	public static final String MAJOR_COMMENT = "majorComment";

	protected void initDao() {
		// do nothing
	}

	public void save(Majorqualification transientInstance) {
		log.debug("saving Majorqualification instance");
		try {
			getHibernateTemplate().save(transientInstance);
			log.debug("save successful");
		} catch (RuntimeException re) {
			log.error("save failed", re);
			throw re;
		}
	}

	public void delete(Majorqualification persistentInstance) {
		log.debug("deleting Majorqualification instance");
		try {
			getHibernateTemplate().delete(persistentInstance);
			log.debug("delete successful");
		} catch (RuntimeException re) {
			log.error("delete failed", re);
			throw re;
		}
	}

	public Majorqualification findById(java.lang.Integer id) {
		log.debug("getting Majorqualification instance with id: " + id);
		try {
			Majorqualification instance = (Majorqualification) getHibernateTemplate()
					.get("cn.com.model.Majorqualification", id);
			return instance;
		} catch (RuntimeException re) {
			log.error("get failed", re);
			throw re;
		}
	}

	public List findByExample(Majorqualification instance) {
		log.debug("finding Majorqualification instance by example");
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
		log.debug("finding Majorqualification instance with property: "
				+ propertyName + ", value: " + value);
		try {
			String queryString = "from Majorqualification as model where model."
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

	public List findByGrantWay(Object grantWay) {
		return findByProperty(GRANT_WAY, grantWay);
	}

	public List findByQualificationApprovalDocument(
			Object qualificationApprovalDocument) {
		return findByProperty(QUALIFICATION_APPROVAL_DOCUMENT,
				qualificationApprovalDocument);
	}

	public List findByGrantQualificationUnit(Object grantQualificationUnit) {
		return findByProperty(GRANT_QUALIFICATION_UNIT, grantQualificationUnit);
	}

	public List findByMajorCertificateNumber(Object majorCertificateNumber) {
		return findByProperty(MAJOR_CERTIFICATE_NUMBER, majorCertificateNumber);
	}

	public List findByEngageUnit(Object engageUnit) {
		return findByProperty(ENGAGE_UNIT, engageUnit);
	}

	public List findByEmploymentApprovalDocument(
			Object employmentApprovalDocument) {
		return findByProperty(EMPLOYMENT_APPROVAL_DOCUMENT,
				employmentApprovalDocument);
	}

	public List findByProfessionalOffice(Object professionalOffice) {
		return findByProperty(PROFESSIONAL_OFFICE, professionalOffice);
	}

	public List findByJudgingPanel(Object judgingPanel) {
		return findByProperty(JUDGING_PANEL, judgingPanel);
	}

	public List findByMajorComment(Object majorComment) {
		return findByProperty(MAJOR_COMMENT, majorComment);
	}

	public List findAll() {
		log.debug("finding all Majorqualification instances");
		try {
			String queryString = "from Majorqualification";
			return getHibernateTemplate().find(queryString);
		} catch (RuntimeException re) {
			log.error("find all failed", re);
			throw re;
		}
	}

	public Majorqualification merge(Majorqualification detachedInstance) {
		log.debug("merging Majorqualification instance");
		try {
			Majorqualification result = (Majorqualification) getHibernateTemplate()
					.merge(detachedInstance);
			log.debug("merge successful");
			return result;
		} catch (RuntimeException re) {
			log.error("merge failed", re);
			throw re;
		}
	}

	public void attachDirty(Majorqualification instance) {
		log.debug("attaching dirty Majorqualification instance");
		try {
			getHibernateTemplate().saveOrUpdate(instance);
			log.debug("attach successful");
		} catch (RuntimeException re) {
			log.error("attach failed", re);
			throw re;
		}
	}

	public void attachClean(Majorqualification instance) {
		log.debug("attaching clean Majorqualification instance");
		try {
			getHibernateTemplate().lock(instance, LockMode.NONE);
			log.debug("attach successful");
		} catch (RuntimeException re) {
			log.error("attach failed", re);
			throw re;
		}
	}

	public static MajorqualificationDAO getFromApplicationContext(
			ApplicationContext ctx) {
		return (MajorqualificationDAO) ctx.getBean("MajorqualificationDAO");
	}
}