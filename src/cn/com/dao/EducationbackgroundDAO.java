package cn.com.dao;

import java.sql.Timestamp;
import java.util.List;
import org.hibernate.LockMode;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.orm.hibernate3.support.HibernateDaoSupport;

import cn.com.model.Educationbackground;

/**
 * A data access object (DAO) providing persistence and search support for
 * Educationbackground entities. Transaction control of the save(), update() and
 * delete() operations can directly support Spring container-managed
 * transactions or they can be augmented to handle user-managed Spring
 * transactions. Each of these methods provides additional information for how
 * to configure it for the desired type of transaction control.
 * 
 * @see cn.com.model.Educationbackground
 * @author MyEclipse Persistence Tools
 */

public class EducationbackgroundDAO extends HibernateDaoSupport {
	private static final Logger log = LoggerFactory
			.getLogger(EducationbackgroundDAO.class);
	// property constants
	public static final String USER_ID = "userId";
	public static final String GRADUATE_SCHOOL = "graduateSchool";
	public static final String MAJOR = "major";
	public static final String MAJOR_DESCRIBEVT = "majorDescribevt";
	public static final String EDUCATIONLEVELS = "educationlevels";
	public static final String DEGREE = "degree";
	public static final String EDUCTIONAL_SYSTME = "eductionalSystme";
	public static final String LEARN_WAY = "learnWay";
	public static final String DEGREE_NUMBER = "degreeNumber";
	public static final String DEGREE_GRANT_COUNTRY = "degreeGrantCountry";
	public static final String EDUCATION_RESULT = "educationResult";
	public static final String EDUCATION_BACKGROUND_REMARK = "educationBackgroundRemark";
	public static final String HIGH_EDUCATION = "highEducation";
	public static final String FULL_TIME_EDUCTION = "fullTimeEduction";
	public static final String HIGH_EDUCATION_ON_JOB = "highEducationOnJob";
	public static final String OFFICE_EDUCATION = "officeEducation";

	protected void initDao() {
		// do nothing
	}

	public void save(Educationbackground transientInstance) {
		log.debug("saving Educationbackground instance");
		try {
			getHibernateTemplate().save(transientInstance);
			log.debug("save successful");
		} catch (RuntimeException re) {
			log.error("save failed", re);
			throw re;
		}
	}

	public void delete(Educationbackground persistentInstance) {
		log.debug("deleting Educationbackground instance");
		try {
			getHibernateTemplate().delete(persistentInstance);
			log.debug("delete successful");
		} catch (RuntimeException re) {
			log.error("delete failed", re);
			throw re;
		}
	}

	public Educationbackground findById(java.lang.Integer id) {
		log.debug("getting Educationbackground instance with id: " + id);
		try {
			Educationbackground instance = (Educationbackground) getHibernateTemplate()
					.get("cn.com.model.Educationbackground", id);
			return instance;
		} catch (RuntimeException re) {
			log.error("get failed", re);
			throw re;
		}
	}

	public List findByExample(Educationbackground instance) {
		log.debug("finding Educationbackground instance by example");
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
		log.debug("finding Educationbackground instance with property: "
				+ propertyName + ", value: " + value);
		try {
			String queryString = "from Educationbackground as model where model."
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

	public List findByGraduateSchool(Object graduateSchool) {
		return findByProperty(GRADUATE_SCHOOL, graduateSchool);
	}

	public List findByMajor(Object major) {
		return findByProperty(MAJOR, major);
	}

	public List findByMajorDescribevt(Object majorDescribevt) {
		return findByProperty(MAJOR_DESCRIBEVT, majorDescribevt);
	}

	public List findByEducationlevels(Object educationlevels) {
		return findByProperty(EDUCATIONLEVELS, educationlevels);
	}

	public List findByDegree(Object degree) {
		return findByProperty(DEGREE, degree);
	}

	public List findByEductionalSystme(Object eductionalSystme) {
		return findByProperty(EDUCTIONAL_SYSTME, eductionalSystme);
	}

	public List findByLearnWay(Object learnWay) {
		return findByProperty(LEARN_WAY, learnWay);
	}

	public List findByDegreeNumber(Object degreeNumber) {
		return findByProperty(DEGREE_NUMBER, degreeNumber);
	}

	public List findByDegreeGrantCountry(Object degreeGrantCountry) {
		return findByProperty(DEGREE_GRANT_COUNTRY, degreeGrantCountry);
	}

	public List findByEducationResult(Object educationResult) {
		return findByProperty(EDUCATION_RESULT, educationResult);
	}

	public List findByEducationBackgroundRemark(Object educationBackgroundRemark) {
		return findByProperty(EDUCATION_BACKGROUND_REMARK,
				educationBackgroundRemark);
	}

	public List findByHighEducation(Object highEducation) {
		return findByProperty(HIGH_EDUCATION, highEducation);
	}

	public List findByFullTimeEduction(Object fullTimeEduction) {
		return findByProperty(FULL_TIME_EDUCTION, fullTimeEduction);
	}

	public List findByHighEducationOnJob(Object highEducationOnJob) {
		return findByProperty(HIGH_EDUCATION_ON_JOB, highEducationOnJob);
	}

	public List findByOfficeEducation(Object officeEducation) {
		return findByProperty(OFFICE_EDUCATION, officeEducation);
	}

	public List findAll() {
		log.debug("finding all Educationbackground instances");
		try {
			String queryString = "from Educationbackground";
			return getHibernateTemplate().find(queryString);
		} catch (RuntimeException re) {
			log.error("find all failed", re);
			throw re;
		}
	}

	public Educationbackground merge(Educationbackground detachedInstance) {
		log.debug("merging Educationbackground instance");
		try {
			Educationbackground result = (Educationbackground) getHibernateTemplate()
					.merge(detachedInstance);
			log.debug("merge successful");
			return result;
		} catch (RuntimeException re) {
			log.error("merge failed", re);
			throw re;
		}
	}

	public void attachDirty(Educationbackground instance) {
		log.debug("attaching dirty Educationbackground instance");
		try {
			getHibernateTemplate().saveOrUpdate(instance);
			log.debug("attach successful");
		} catch (RuntimeException re) {
			log.error("attach failed", re);
			throw re;
		}
	}

	public void attachClean(Educationbackground instance) {
		log.debug("attaching clean Educationbackground instance");
		try {
			getHibernateTemplate().lock(instance, LockMode.NONE);
			log.debug("attach successful");
		} catch (RuntimeException re) {
			log.error("attach failed", re);
			throw re;
		}
	}

	public static EducationbackgroundDAO getFromApplicationContext(
			ApplicationContext ctx) {
		return (EducationbackgroundDAO) ctx.getBean("EducationbackgroundDAO");
	}
}