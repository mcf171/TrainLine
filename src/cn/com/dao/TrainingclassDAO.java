package cn.com.dao;

import java.util.List;
import java.util.Set;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.hibernate.LockMode;
import org.springframework.context.ApplicationContext;
import org.springframework.orm.hibernate3.support.HibernateDaoSupport;

import cn.com.model.Trainingclass;

/**
 * A data access object (DAO) providing persistence and search support for
 * Trainingclass entities. Transaction control of the save(), update() and
 * delete() operations can directly support Spring container-managed
 * transactions or they can be augmented to handle user-managed Spring
 * transactions. Each of these methods provides additional information for how
 * to configure it for the desired type of transaction control.
 * 
 * @see cn.com.model.Trainingclass
 * @author MyEclipse Persistence Tools
 */
public class TrainingclassDAO extends HibernateDaoSupport {
	private static final Log log = LogFactory.getLog(TrainingclassDAO.class);
	// property constants
	public static final String TRAINING_CLASS_NAME = "trainingClassName";
	public static final String TRAINING_CLASS_STATUS = "trainingClassStatus";

	protected void initDao() {
		// do nothing
	}

	public void save(Trainingclass transientInstance) {
		log.debug("saving Trainingclass instance");
		try {
			getHibernateTemplate().save(transientInstance);
			log.debug("save successful");
		} catch (RuntimeException re) {
			log.error("save failed", re);
			throw re;
		}
	}

	public void delete(Trainingclass persistentInstance) {
		log.debug("deleting Trainingclass instance");
		try {
			getHibernateTemplate().delete(persistentInstance);
			log.debug("delete successful");
		} catch (RuntimeException re) {
			log.error("delete failed", re);
			throw re;
		}
	}

	public Trainingclass findById(java.lang.Integer id) {
		log.debug("getting Trainingclass instance with id: " + id);
		try {
			Trainingclass instance = (Trainingclass) getHibernateTemplate()
					.get("cn.com.model.Trainingclass", id);
			return instance;
		} catch (RuntimeException re) {
			log.error("get failed", re);
			throw re;
		}
	}

	public List findByExample(Trainingclass instance) {
		log.debug("finding Trainingclass instance by example");
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
		log.debug("finding Trainingclass instance with property: "
				+ propertyName + ", value: " + value);
		try {
			String queryString = "from Trainingclass as model where model."
					+ propertyName + "= ?";
			return getHibernateTemplate().find(queryString, value);
		} catch (RuntimeException re) {
			log.error("find by property name failed", re);
			throw re;
		}
	}

	public List findByTrainingClassName(Object trainingClassName) {
		return findByProperty(TRAINING_CLASS_NAME, trainingClassName);
	}

	public List findByTrainingClassStatus(Object trainingClassStatus) {
		return findByProperty(TRAINING_CLASS_STATUS, trainingClassStatus);
	}

	public List findAll() {
		log.debug("finding all Trainingclass instances");
		try {
			String queryString = "from Trainingclass";
			return getHibernateTemplate().find(queryString);
		} catch (RuntimeException re) {
			log.error("find all failed", re);
			throw re;
		}
	}

	public Trainingclass merge(Trainingclass detachedInstance) {
		log.debug("merging Trainingclass instance");
		try {
			Trainingclass result = (Trainingclass) getHibernateTemplate()
					.merge(detachedInstance);
			log.debug("merge successful");
			return result;
		} catch (RuntimeException re) {
			log.error("merge failed", re);
			throw re;
		}
	}

	public void attachDirty(Trainingclass instance) {
		log.debug("attaching dirty Trainingclass instance");
		try {
			getHibernateTemplate().saveOrUpdate(instance);
			log.debug("attach successful");
		} catch (RuntimeException re) {
			log.error("attach failed", re);
			throw re;
		}
	}

	public void attachClean(Trainingclass instance) {
		log.debug("attaching clean Trainingclass instance");
		try {
			getHibernateTemplate().lock(instance, LockMode.NONE);
			log.debug("attach successful");
		} catch (RuntimeException re) {
			log.error("attach failed", re);
			throw re;
		}
	}

	public static TrainingclassDAO getFromApplicationContext(
			ApplicationContext ctx) {
		return (TrainingclassDAO) ctx.getBean("TrainingclassDAO");
	}
}