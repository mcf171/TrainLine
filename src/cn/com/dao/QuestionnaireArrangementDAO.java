package cn.com.dao;

import java.sql.Timestamp;
import java.util.List;
import org.hibernate.LockMode;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.orm.hibernate3.support.HibernateDaoSupport;

import cn.com.model.QuestionnaireArrangement;

/**
 * A data access object (DAO) providing persistence and search support for
 * Questionarrangement entities. Transaction control of the save(), update() and
 * delete() operations can directly support Spring container-managed
 * transactions or they can be augmented to handle user-managed Spring
 * transactions. Each of these methods provides additional information for how
 * to configure it for the desired type of transaction control.
 * 
 * @see cn.com.model.QuestionnaireArrangement
 * @author MyEclipse Persistence Tools
 */

public class QuestionnaireArrangementDAO extends HibernateDaoSupport {
	private static final Logger log = LoggerFactory
			.getLogger(QuestionnaireArrangementDAO.class);
	// property constants
	public static final String QUESTION_ARRANGEMENT_NAME = "questionArrangementName";
	public static final String QUESTION_ARRANGEMENT_STATE = "questionArrangementState";
	public static final String QUESTION_ARRANGEMENT_INTRO = "questionArrangementIntro";

	protected void initDao() {
		// do nothing
	}

	public int save(QuestionnaireArrangement transientInstance) {
		return	(Integer) getHibernateTemplate().save(transientInstance);
	}

	public void delete(QuestionnaireArrangement persistentInstance) {
		log.debug("deleting QuestionnaireArrangement instance");
		try {
			getHibernateTemplate().delete(persistentInstance);
			log.debug("delete successful");
		} catch (RuntimeException re) {
			log.error("delete failed", re);
			throw re;
		}
	}

	public QuestionnaireArrangement findById(java.lang.Integer id) {
		log.debug("getting QuestionnaireArrangement instance with id: " + id);
		try {
			QuestionnaireArrangement instance = (QuestionnaireArrangement) getHibernateTemplate()
					.get("cn.com.model.QuestionnaireArrangement", id);
			return instance;
		} catch (RuntimeException re) {
			log.error("get failed", re);
			throw re;
		}
	}

	public List findByExample(QuestionnaireArrangement instance) {
		log.debug("finding QuestionnaireArrangement instance by example");
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
		log.debug("finding QuestionnaireArrangement instance with property: "
				+ propertyName + ", value: " + value);
		try {
			String queryString = "from QuestionnaireArrangement as model where model."
					+ propertyName + "= ?";
			return getHibernateTemplate().find(queryString, value);
		} catch (RuntimeException re) {
			log.error("find by property name failed", re);
			throw re;
		}
	}

	public List findByQuestionArrangementName(Object questionArrangementName) {
		return findByProperty(QUESTION_ARRANGEMENT_NAME,
				questionArrangementName);
	}

	public List findByQuestionArrangementState(Object questionArrangementState) {
		return findByProperty(QUESTION_ARRANGEMENT_STATE,
				questionArrangementState);
	}

	public List findByQuestionArrangementIntro(Object questionArrangementIntro) {
		return findByProperty(QUESTION_ARRANGEMENT_INTRO,
				questionArrangementIntro);
	}

	public List findAll() {
		log.debug("finding all QuestionnaireArrangement instances");
		try {
			String queryString = "from QuestionnaireArrangement";
			return getHibernateTemplate().find(queryString);
		} catch (RuntimeException re) {
			log.error("find all failed", re);
			throw re;
		}
	}

	public QuestionnaireArrangement merge(QuestionnaireArrangement detachedInstance) {
		log.debug("merging QuestionnaireArrangement instance");
		try {
			QuestionnaireArrangement result = (QuestionnaireArrangement) getHibernateTemplate()
					.merge(detachedInstance);
			log.debug("merge successful");
			return result;
		} catch (RuntimeException re) {
			log.error("merge failed", re);
			throw re;
		}
	}

	public void attachDirty(QuestionnaireArrangement instance) {
		log.debug("attaching dirty QuestionnaireArrangement instance");
		try {
			getHibernateTemplate().saveOrUpdate(instance);
			log.debug("attach successful");
		} catch (RuntimeException re) {
			log.error("attach failed", re);
			throw re;
		}
	}

	public void attachClean(QuestionnaireArrangement instance) {
		log.debug("attaching clean QuestionnaireArrangement instance");
		try {
			getHibernateTemplate().lock(instance, LockMode.NONE);
			log.debug("attach successful");
		} catch (RuntimeException re) {
			log.error("attach failed", re);
			throw re;
		}
	}

	public static QuestionnaireArrangementDAO getFromApplicationContext(
			ApplicationContext ctx) {
		return (QuestionnaireArrangementDAO) ctx.getBean("QuestionnaireArrangementDAO");
	}
}