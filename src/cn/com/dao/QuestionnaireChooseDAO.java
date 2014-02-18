package cn.com.dao;

import java.util.List;
import org.hibernate.LockMode;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.orm.hibernate3.support.HibernateDaoSupport;

import cn.com.model.QuestionnaireChoose;

/**
 * A data access object (DAO) providing persistence and search support for
 * QuestionnaireChoose entities. Transaction control of the save(), update() and
 * delete() operations can directly support Spring container-managed
 * transactions or they can be augmented to handle user-managed Spring
 * transactions. Each of these methods provides additional information for how
 * to configure it for the desired type of transaction control.
 * 
 * @see cn.com.model.QuestionnaireChoose
 * @author MyEclipse Persistence Tools
 */

public class QuestionnaireChooseDAO extends HibernateDaoSupport {
	private static final Logger log = LoggerFactory
			.getLogger(QuestionnaireChooseDAO.class);
	// property constants

	protected void initDao() {
		// do nothing
	}

	public int save(QuestionnaireChoose transientInstance) {
		log.debug("saving QuestionnaireChoose instance");
		int questionnaireRubricId;
		try {
			questionnaireRubricId = (Integer) getHibernateTemplate().save(transientInstance);
			log.debug("save successful");
		} catch (RuntimeException re) {
			log.error("save failed", re);
			throw re;
		}
		
		return questionnaireRubricId;
	}

	public void delete(QuestionnaireChoose persistentInstance) {
		log.debug("deleting QuestionnaireChoose instance");
		try {
			getHibernateTemplate().delete(persistentInstance);
			log.debug("delete successful");
		} catch (RuntimeException re) {
			log.error("delete failed", re);
			throw re;
		}
	}
	
	public void update(QuestionnaireChoose item){
		
		getHibernateTemplate().update(item);
	}

	public QuestionnaireChoose findById(java.lang.Integer id) {
		log.debug("getting QuestionnaireChoose instance with id: " + id);
		try {
			QuestionnaireChoose instance = (QuestionnaireChoose) getHibernateTemplate()
					.get("cn.com.model.QuestionnaireChoose", id);
			return instance;
		} catch (RuntimeException re) {
			log.error("get failed", re);
			throw re;
		}
	}

	public List findByExample(QuestionnaireChoose instance) {
		log.debug("finding QuestionnaireChoose instance by example");
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
		log.debug("finding QuestionnaireChoose instance with property: "
				+ propertyName + ", value: " + value);
		try {
			String queryString = "from QuestionnaireChoose as model where model."
					+ propertyName + "= ?";
			return getHibernateTemplate().find(queryString, value);
		} catch (RuntimeException re) {
			log.error("find by property name failed", re);
			throw re;
		}
	}


	public List findAll() {
		log.debug("finding all QuestionnaireChoose instances");
		try {
			String queryString = "from QuestionnaireChoose";
			return getHibernateTemplate().find(queryString);
		} catch (RuntimeException re) {
			log.error("find all failed", re);
			throw re;
		}
	}

	public QuestionnaireChoose merge(QuestionnaireChoose detachedInstance) {
		log.debug("merging QuestionnaireChoose instance");
		try {
			QuestionnaireChoose result = (QuestionnaireChoose) getHibernateTemplate()
					.merge(detachedInstance);
			log.debug("merge successful");
			return result;
		} catch (RuntimeException re) {
			log.error("merge failed", re);
			throw re;
		}
	}

	public void attachDirty(QuestionnaireChoose instance) {
		log.debug("attaching dirty QuestionnaireChoose instance");
		try {
			getHibernateTemplate().saveOrUpdate(instance);
			log.debug("attach successful");
		} catch (RuntimeException re) {
			log.error("attach failed", re);
			throw re;
		}
	}

	public void attachClean(QuestionnaireChoose instance) {
		log.debug("attaching clean QuestionnaireChoose instance");
		try {
			getHibernateTemplate().lock(instance, LockMode.NONE);
			log.debug("attach successful");
		} catch (RuntimeException re) {
			log.error("attach failed", re);
			throw re;
		}
	}

	public static QuestionnaireChooseDAO getFromApplicationContext(
			ApplicationContext ctx) {
		return (QuestionnaireChooseDAO) ctx.getBean("QuestionnaireChooseDAO");
	}
}