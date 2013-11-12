package cn.com.dao;

import java.util.List;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.hibernate.LockMode;
import org.springframework.context.ApplicationContext;
import org.springframework.orm.hibernate3.support.HibernateDaoSupport;

import cn.com.model.Questionnairerubric;

/**
 * A data access object (DAO) providing persistence and search support for
 * Questionnairerubric entities. Transaction control of the save(), update() and
 * delete() operations can directly support Spring container-managed
 * transactions or they can be augmented to handle user-managed Spring
 * transactions. Each of these methods provides additional information for how
 * to configure it for the desired type of transaction control.
 * 
 * @see cn.com.model.Questionnairerubric
 * @author MyEclipse Persistence Tools
 */
public class QuestionnairerubricDAO extends HibernateDaoSupport {
	private static final Log log = LogFactory
			.getLog(QuestionnairerubricDAO.class);
	// property constants
	public static final String QUESTIONNAIRE_RUBRIC_TYPE = "questionnaireRubricType";
	public static final String QUESTIONNAIRE_RUBRIC_CONTENT = "questionnaireRubricContent";

	protected void initDao() {
		// do nothing
	}

	public void save(Questionnairerubric transientInstance) {
		log.debug("saving Questionnairerubric instance");
		try {
			getHibernateTemplate().save(transientInstance);
			log.debug("save successful");
		} catch (RuntimeException re) {
			log.error("save failed", re);
			throw re;
		}
	}

	public void delete(Questionnairerubric persistentInstance) {
		log.debug("deleting Questionnairerubric instance");
		try {
			getHibernateTemplate().delete(persistentInstance);
			log.debug("delete successful");
		} catch (RuntimeException re) {
			log.error("delete failed", re);
			throw re;
		}
	}

	public Questionnairerubric findById(java.lang.Integer id) {
		log.debug("getting Questionnairerubric instance with id: " + id);
		try {
			Questionnairerubric instance = (Questionnairerubric) getHibernateTemplate()
					.get("cn.com.model.Questionnairerubric", id);
			return instance;
		} catch (RuntimeException re) {
			log.error("get failed", re);
			throw re;
		}
	}

	public List findByExample(Questionnairerubric instance) {
		log.debug("finding Questionnairerubric instance by example");
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
		log.debug("finding Questionnairerubric instance with property: "
				+ propertyName + ", value: " + value);
		try {
			String queryString = "from Questionnairerubric as model where model."
					+ propertyName + "= ?";
			return getHibernateTemplate().find(queryString, value);
		} catch (RuntimeException re) {
			log.error("find by property name failed", re);
			throw re;
		}
	}

	public List findByQuestionnaireRubricType(Object questionnaireRubricType) {
		return findByProperty(QUESTIONNAIRE_RUBRIC_TYPE,
				questionnaireRubricType);
	}

	public List findByQuestionnaireRubricContent(
			Object questionnaireRubricContent) {
		return findByProperty(QUESTIONNAIRE_RUBRIC_CONTENT,
				questionnaireRubricContent);
	}

	public List findAll() {
		log.debug("finding all Questionnairerubric instances");
		try {
			String queryString = "from Questionnairerubric";
			return getHibernateTemplate().find(queryString);
		} catch (RuntimeException re) {
			log.error("find all failed", re);
			throw re;
		}
	}

	public Questionnairerubric merge(Questionnairerubric detachedInstance) {
		log.debug("merging Questionnairerubric instance");
		try {
			Questionnairerubric result = (Questionnairerubric) getHibernateTemplate()
					.merge(detachedInstance);
			log.debug("merge successful");
			return result;
		} catch (RuntimeException re) {
			log.error("merge failed", re);
			throw re;
		}
	}

	public void attachDirty(Questionnairerubric instance) {
		log.debug("attaching dirty Questionnairerubric instance");
		try {
			getHibernateTemplate().saveOrUpdate(instance);
			log.debug("attach successful");
		} catch (RuntimeException re) {
			log.error("attach failed", re);
			throw re;
		}
	}

	public void attachClean(Questionnairerubric instance) {
		log.debug("attaching clean Questionnairerubric instance");
		try {
			getHibernateTemplate().lock(instance, LockMode.NONE);
			log.debug("attach successful");
		} catch (RuntimeException re) {
			log.error("attach failed", re);
			throw re;
		}
	}

	public static QuestionnairerubricDAO getFromApplicationContext(
			ApplicationContext ctx) {
		return (QuestionnairerubricDAO) ctx.getBean("QuestionnairerubricDAO");
	}
}