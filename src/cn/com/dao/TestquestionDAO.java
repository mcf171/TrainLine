package cn.com.dao;

import java.util.List;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.hibernate.LockMode;
import org.springframework.context.ApplicationContext;
import org.springframework.orm.hibernate3.support.HibernateDaoSupport;

import cn.com.model.Testquestion;

/**
 * A data access object (DAO) providing persistence and search support for
 * Testquestion entities. Transaction control of the save(), update() and
 * delete() operations can directly support Spring container-managed
 * transactions or they can be augmented to handle user-managed Spring
 * transactions. Each of these methods provides additional information for how
 * to configure it for the desired type of transaction control.
 * 
 * @see cn.com.model.Testquestion
 * @author MyEclipse Persistence Tools
 */
public class TestquestionDAO extends HibernateDaoSupport {
	private static final Log log = LogFactory.getLog(TestquestionDAO.class);
	// property constants
	public static final String TEST_QUESTION_NAME = "testQuestionName";
	public static final String DEGREE_OF_DIFFICULTY = "degreeOfDifficulty";
	public static final String SCORE = "score";
	public static final String TEST_TYPE = "testType";
	public static final String TEST_ANSWER_INTRODUCE = "testAnswerIntroduce";
	public static final String STANDARD_ANSWER = "standardAnswer";

	protected void initDao() {
		// do nothing
	}

	public void save(Testquestion transientInstance) {
		log.debug("saving Testquestion instance");
		try {
			getHibernateTemplate().save(transientInstance);
			log.debug("save successful");
		} catch (RuntimeException re) {
			log.error("save failed", re);
			throw re;
		}
	}

	public void delete(Testquestion persistentInstance) {
		log.debug("deleting Testquestion instance");
		try {
			getHibernateTemplate().delete(persistentInstance);
			log.debug("delete successful");
		} catch (RuntimeException re) {
			log.error("delete failed", re);
			throw re;
		}
	}

	public Testquestion findById(java.lang.Integer id) {
		log.debug("getting Testquestion instance with id: " + id);
		try {
			Testquestion instance = (Testquestion) getHibernateTemplate().get(
					"cn.com.model.Testquestion", id);
			return instance;
		} catch (RuntimeException re) {
			log.error("get failed", re);
			throw re;
		}
	}

	public List findByExample(Testquestion instance) {
		log.debug("finding Testquestion instance by example");
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
		log.debug("finding Testquestion instance with property: "
				+ propertyName + ", value: " + value);
		try {
			String queryString = "from Testquestion as model where model."
					+ propertyName + "= ?";
			return getHibernateTemplate().find(queryString, value);
		} catch (RuntimeException re) {
			log.error("find by property name failed", re);
			throw re;
		}
	}

	public List findByTestQuestionName(Object testQuestionName) {
		return findByProperty(TEST_QUESTION_NAME, testQuestionName);
	}

	public List findByDegreeOfDifficulty(Object degreeOfDifficulty) {
		return findByProperty(DEGREE_OF_DIFFICULTY, degreeOfDifficulty);
	}

	public List findByScore(Object score) {
		return findByProperty(SCORE, score);
	}

	public List findByTestType(Object testType) {
		return findByProperty(TEST_TYPE, testType);
	}

	public List findByTestAnswerIntroduce(Object testAnswerIntroduce) {
		return findByProperty(TEST_ANSWER_INTRODUCE, testAnswerIntroduce);
	}

	public List findByStandardAnswer(Object standardAnswer) {
		return findByProperty(STANDARD_ANSWER, standardAnswer);
	}

	public List findAll() {
		log.debug("finding all Testquestion instances");
		try {
			String queryString = "from Testquestion";
			return getHibernateTemplate().find(queryString);
		} catch (RuntimeException re) {
			log.error("find all failed", re);
			throw re;
		}
	}

	public Testquestion merge(Testquestion detachedInstance) {
		log.debug("merging Testquestion instance");
		try {
			Testquestion result = (Testquestion) getHibernateTemplate().merge(
					detachedInstance);
			log.debug("merge successful");
			return result;
		} catch (RuntimeException re) {
			log.error("merge failed", re);
			throw re;
		}
	}

	public void attachDirty(Testquestion instance) {
		log.debug("attaching dirty Testquestion instance");
		try {
			getHibernateTemplate().saveOrUpdate(instance);
			log.debug("attach successful");
		} catch (RuntimeException re) {
			log.error("attach failed", re);
			throw re;
		}
	}

	public void attachClean(Testquestion instance) {
		log.debug("attaching clean Testquestion instance");
		try {
			getHibernateTemplate().lock(instance, LockMode.NONE);
			log.debug("attach successful");
		} catch (RuntimeException re) {
			log.error("attach failed", re);
			throw re;
		}
	}

	public static TestquestionDAO getFromApplicationContext(
			ApplicationContext ctx) {
		return (TestquestionDAO) ctx.getBean("TestquestionDAO");
	}
}