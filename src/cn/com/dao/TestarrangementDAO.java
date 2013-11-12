package cn.com.dao;

import java.util.List;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.hibernate.LockMode;
import org.springframework.context.ApplicationContext;
import org.springframework.orm.hibernate3.support.HibernateDaoSupport;

import cn.com.model.Testarrangement;

/**
 * A data access object (DAO) providing persistence and search support for
 * Testarrangement entities. Transaction control of the save(), update() and
 * delete() operations can directly support Spring container-managed
 * transactions or they can be augmented to handle user-managed Spring
 * transactions. Each of these methods provides additional information for how
 * to configure it for the desired type of transaction control.
 * 
 * @see cn.com.model.Testarrangement
 * @author MyEclipse Persistence Tools
 */
public class TestarrangementDAO extends HibernateDaoSupport {
	private static final Log log = LogFactory.getLog(TestarrangementDAO.class);
	// property constants
	public static final String USER_ID = "userId";
	public static final String TEST_ARRANGEMENT_PLACE = "testArrangementPlace";
	public static final String TEST_SUM_PERSON = "testSumPerson";
	public static final String TEST_PERSON_OF_HIERARCHY = "testPersonOfHierarchy";
	public static final String PASS_MARK = "passMark";
	public static final String TEST_STATE = "testState";

	protected void initDao() {
		// do nothing
	}

	public void save(Testarrangement transientInstance) {
		log.debug("saving Testarrangement instance");
		try {
			getHibernateTemplate().save(transientInstance);
			log.debug("save successful");
		} catch (RuntimeException re) {
			log.error("save failed", re);
			throw re;
		}
	}

	public void delete(Testarrangement persistentInstance) {
		log.debug("deleting Testarrangement instance");
		try {
			getHibernateTemplate().delete(persistentInstance);
			log.debug("delete successful");
		} catch (RuntimeException re) {
			log.error("delete failed", re);
			throw re;
		}
	}

	public Testarrangement findById(java.lang.Integer id) {
		log.debug("getting Testarrangement instance with id: " + id);
		try {
			Testarrangement instance = (Testarrangement) getHibernateTemplate()
					.get("cn.com.model.Testarrangement", id);
			return instance;
		} catch (RuntimeException re) {
			log.error("get failed", re);
			throw re;
		}
	}

	public List findByExample(Testarrangement instance) {
		log.debug("finding Testarrangement instance by example");
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
		log.debug("finding Testarrangement instance with property: "
				+ propertyName + ", value: " + value);
		try {
			String queryString = "from Testarrangement as model where model."
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

	public List findByTestArrangementPlace(Object testArrangementPlace) {
		return findByProperty(TEST_ARRANGEMENT_PLACE, testArrangementPlace);
	}

	public List findByTestSumPerson(Object testSumPerson) {
		return findByProperty(TEST_SUM_PERSON, testSumPerson);
	}

	public List findByTestPersonOfHierarchy(Object testPersonOfHierarchy) {
		return findByProperty(TEST_PERSON_OF_HIERARCHY, testPersonOfHierarchy);
	}

	public List findByPassMark(Object passMark) {
		return findByProperty(PASS_MARK, passMark);
	}

	public List findByTestState(Object testState) {
		return findByProperty(TEST_STATE, testState);
	}

	public List findAll() {
		log.debug("finding all Testarrangement instances");
		try {
			String queryString = "from Testarrangement";
			return getHibernateTemplate().find(queryString);
		} catch (RuntimeException re) {
			log.error("find all failed", re);
			throw re;
		}
	}

	public Testarrangement merge(Testarrangement detachedInstance) {
		log.debug("merging Testarrangement instance");
		try {
			Testarrangement result = (Testarrangement) getHibernateTemplate()
					.merge(detachedInstance);
			log.debug("merge successful");
			return result;
		} catch (RuntimeException re) {
			log.error("merge failed", re);
			throw re;
		}
	}

	public void attachDirty(Testarrangement instance) {
		log.debug("attaching dirty Testarrangement instance");
		try {
			getHibernateTemplate().saveOrUpdate(instance);
			log.debug("attach successful");
		} catch (RuntimeException re) {
			log.error("attach failed", re);
			throw re;
		}
	}

	public void attachClean(Testarrangement instance) {
		log.debug("attaching clean Testarrangement instance");
		try {
			getHibernateTemplate().lock(instance, LockMode.NONE);
			log.debug("attach successful");
		} catch (RuntimeException re) {
			log.error("attach failed", re);
			throw re;
		}
	}

	public static TestarrangementDAO getFromApplicationContext(
			ApplicationContext ctx) {
		return (TestarrangementDAO) ctx.getBean("TestarrangementDAO");
	}
}