package cn.com.dao;

import java.util.List;


import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.hibernate.LockMode;
import org.springframework.context.ApplicationContext;
import org.springframework.orm.hibernate3.support.HibernateDaoSupport;

import cn.com.model.Topicaccessory;


/**
 * A data access object (DAO) providing persistence and search support for
 * Topicaccessory entities. Transaction control of the save(), update() and
 * delete() operations can directly support Spring container-managed
 * transactions or they can be augmented to handle user-managed Spring
 * transactions. Each of these methods provides additional information for how
 * to configure it for the desired type of transaction control.
 * 
 * @see cn.com.model.Topicaccessory
 * @author MyEclipse Persistence Tools
 */
public class TopicaccessoryDAO extends HibernateDaoSupport {
	private static final Log log = LogFactory.getLog(TopicaccessoryDAO.class);
	// property constants
	public static final String TOPIC_ACCESSORY_PATH = "topicAccessoryPath";
	public static final String TOPIC_ACCESSORY_NAME = "topicAccessoryName";

	protected void initDao() {
		// do nothing
	}

	public void save(Topicaccessory transientInstance) {
		log.debug("saving Topicaccessory instance");
		try {
			getHibernateTemplate().save(transientInstance);
			log.debug("save successful");
		} catch (RuntimeException re) {
			log.error("save failed", re);
			throw re;
		}
	}

	public void delete(Topicaccessory persistentInstance) {
		log.debug("deleting Topicaccessory instance");
		try {
			getHibernateTemplate().delete(persistentInstance);
			log.debug("delete successful");
		} catch (RuntimeException re) {
			log.error("delete failed", re);
			throw re;
		}
	}

	public Topicaccessory findById(java.lang.Integer id) {
		log.debug("getting Topicaccessory instance with id: " + id);
		try {
			Topicaccessory instance = (Topicaccessory) getHibernateTemplate()
					.get("cn.com.model.Topicaccessory", id);
			return instance;
		} catch (RuntimeException re) {
			log.error("get failed", re);
			throw re;
		}
	}

	public List findByExample(Topicaccessory instance) {
		log.debug("finding Topicaccessory instance by example");
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
		log.debug("finding Topicaccessory instance with property: "
				+ propertyName + ", value: " + value);
		try {
			String queryString = "from Topicaccessory as model where model."
					+ propertyName + "= ?";
			return getHibernateTemplate().find(queryString, value);
		} catch (RuntimeException re) {
			log.error("find by property name failed", re);
			throw re;
		}
	}

	public List findByTopicAccessoryPath(Object topicAccessoryPath) {
		return findByProperty(TOPIC_ACCESSORY_PATH, topicAccessoryPath);
	}

	public List findByTopicAccessoryName(Object topicAccessoryName) {
		return findByProperty(TOPIC_ACCESSORY_NAME, topicAccessoryName);
	}

	public List findAll() {
		log.debug("finding all Topicaccessory instances");
		try {
			String queryString = "from Topicaccessory";
			return getHibernateTemplate().find(queryString);
		} catch (RuntimeException re) {
			log.error("find all failed", re);
			throw re;
		}
	}

	public Topicaccessory merge(Topicaccessory detachedInstance) {
		log.debug("merging Topicaccessory instance");
		try {
			Topicaccessory result = (Topicaccessory) getHibernateTemplate()
					.merge(detachedInstance);
			log.debug("merge successful");
			return result;
		} catch (RuntimeException re) {
			log.error("merge failed", re);
			throw re;
		}
	}

	public void attachDirty(Topicaccessory instance) {
		log.debug("attaching dirty Topicaccessory instance");
		try {
			getHibernateTemplate().saveOrUpdate(instance);
			log.debug("attach successful");
		} catch (RuntimeException re) {
			log.error("attach failed", re);
			throw re;
		}
	}

	public void attachClean(Topicaccessory instance) {
		log.debug("attaching clean Topicaccessory instance");
		try {
			getHibernateTemplate().lock(instance, LockMode.NONE);
			log.debug("attach successful");
		} catch (RuntimeException re) {
			log.error("attach failed", re);
			throw re;
		}
	}

	public static TopicaccessoryDAO getFromApplicationContext(
			ApplicationContext ctx) {
		return (TopicaccessoryDAO) ctx.getBean("TopicaccessoryDAO");
	}
}
