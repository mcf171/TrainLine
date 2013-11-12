package cn.com.dao;

import java.sql.Timestamp;
import java.util.List;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.hibernate.LockMode;
import org.springframework.context.ApplicationContext;
import org.springframework.orm.hibernate3.support.HibernateDaoSupport;

/**
 * A data access object (DAO) providing persistence and search support for
 * Questionarrangement entities. Transaction control of the save(), update() and
 * delete() operations can directly support Spring container-managed
 * transactions or they can be augmented to handle user-managed Spring
 * transactions. Each of these methods provides additional information for how
 * to configure it for the desired type of transaction control.
 * 
 * @see cn.com.model.Questionarrangement
 * @author MyEclipse Persistence Tools
 */
public class QuestionarrangementDAO extends HibernateDaoSupport {
	private static final Log log = LogFactory
			.getLog(QuestionarrangementDAO.class);
	// property constants
	public static final String QUESTION_ARRANGEMENT_NAME = "questionArrangementName";
	public static final String QUESTION_ARRANGEMENT_STATE = "questionArrangementState";
	public static final String QUESTION_ARRANGEMENT_INTRO = "questionArrangementIntro";

	protected void initDao() {
		// do nothing
	}

	public void save(Questionarrangement transientInstance) {
		log.debug("saving Questionarrangement instance");
		try {
			getHibernateTemplate().save(transientInstance);
			log.debug("save successful");
		} catch (RuntimeException re) {
			log.error("save failed", re);
			throw re;
		}
	}

	public void delete(Questionarrangement persistentInstance) {
		log.debug("deleting Questionarrangement instance");
		try {
			getHibernateTemplate().delete(persistentInstance);
			log.debug("delete successful");
		} catch (RuntimeException re) {
			log.error("delete failed", re);
			throw re;
		}
	}

	public Questionarrangement findById(java.lang.Integer id) {
		log.debug("getting Questionarrangement instance with id: " + id);
		try {
			Questionarrangement instance = (Questionarrangement) getHibernateTemplate()
					.get("cn.com.model.Questionarrangement", id);
			return instance;
		} catch (RuntimeException re) {
			log.error("get failed", re);
			throw re;
		}
	}

	public List findByExample(Questionarrangement instance) {
		log.debug("finding Questionarrangement instance by example");
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
		log.debug("finding Questionarrangement instance with property: "
				+ propertyName + ", value: " + value);
		try {
			String queryString = "from Questionarrangement as model where model."
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
		log.debug("finding all Questionarrangement instances");
		try {
			String queryString = "from Questionarrangement";
			return getHibernateTemplate().find(queryString);
		} catch (RuntimeException re) {
			log.error("find all failed", re);
			throw re;
		}
	}

	public Questionarrangement merge(Questionarrangement detachedInstance) {
		log.debug("merging Questionarrangement instance");
		try {
			Questionarrangement result = (Questionarrangement) getHibernateTemplate()
					.merge(detachedInstance);
			log.debug("merge successful");
			return result;
		} catch (RuntimeException re) {
			log.error("merge failed", re);
			throw re;
		}
	}

	public void attachDirty(Questionarrangement instance) {
		log.debug("attaching dirty Questionarrangement instance");
		try {
			getHibernateTemplate().saveOrUpdate(instance);
			log.debug("attach successful");
		} catch (RuntimeException re) {
			log.error("attach failed", re);
			throw re;
		}
	}

	public void attachClean(Questionarrangement instance) {
		log.debug("attaching clean Questionarrangement instance");
		try {
			getHibernateTemplate().lock(instance, LockMode.NONE);
			log.debug("attach successful");
		} catch (RuntimeException re) {
			log.error("attach failed", re);
			throw re;
		}
	}

	public static QuestionarrangementDAO getFromApplicationContext(
			ApplicationContext ctx) {
		return (QuestionarrangementDAO) ctx.getBean("QuestionarrangementDAO");
	}
}