package cn.com.dao;

import java.sql.Timestamp;
import java.util.List;
import java.util.Set;
import org.hibernate.LockMode;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.orm.hibernate3.support.HibernateDaoSupport;

import cn.com.model.Classcase;

/**
 * A data access object (DAO) providing persistence and search support for
 * Classcase entities. Transaction control of the save(), update() and delete()
 * operations can directly support Spring container-managed transactions or they
 * can be augmented to handle user-managed Spring transactions. Each of these
 * methods provides additional information for how to configure it for the
 * desired type of transaction control.
 * 
 * @see cn.com.model.Classcase
 * @author MyEclipse Persistence Tools
 */

public class ClasscaseDAO extends HibernateDaoSupport {
	private static final Logger log = LoggerFactory
			.getLogger(ClasscaseDAO.class);
	// property constants
	public static final String PERSON_OF_HIERARCHY = "personOfHierarchy";
	public static final String PERSON_OF_SUM = "personOfSum";
	public static final String CLASS_CONTENT = "classContent";
	public static final String TRAIN_HOUR = "trainHour";
	public static final String TRAIN_CHANNEL = "trainChannel";
	public static final String TRAIN_WAY = "trainWay";
	public static final String TRAIN_AGREEMENT_NUNBER = "trainAgreementNunber";
	public static final String TRAIN_TYPE = "trainType";
	public static final String TRAIN_CATEGORY = "trainCategory";
	public static final String TRAIN_REASON = "trainReason";
	public static final String TRAIN_ADDRESS = "trainAddress";
	public static final String TRAIN_UNIT = "trainUnit";
	public static final String TRAIN_UNIT_TYPE = "trainUnitType";
	public static final String AWARDING = "awarding";
	public static final String RECOGNITION = "recognition";
	public static final String EXIT_COUNTRY = "exitCountry";
	public static final String TRAIN_COST = "trainCost";
	public static final String ACCREDITATION_FEES = "accreditationFees";
	public static final String TRAVEL_EXPENSE = "travelExpense";
	public static final String OTHER_COST = "otherCost";
	public static final String CLASS_CASE_COMMENT = "classCaseComment";

	protected void initDao() {
		// do nothing
	}

	public void save(Classcase transientInstance) {
		log.debug("saving Classcase instance");
		try {
			getHibernateTemplate().save(transientInstance);
			log.debug("save successful");
		} catch (RuntimeException re) {
			log.error("save failed", re);
			throw re;
		}
	}

	public void delete(Classcase persistentInstance) {
		log.debug("deleting Classcase instance");
		try {
			getHibernateTemplate().delete(persistentInstance);
			log.debug("delete successful");
		} catch (RuntimeException re) {
			log.error("delete failed", re);
			throw re;
		}
	}

	public Classcase findById(java.lang.Integer id) {
		log.debug("getting Classcase instance with id: " + id);
		try {
			Classcase instance = (Classcase) getHibernateTemplate().get(
					"cn.com.model.Classcase", id);
			return instance;
		} catch (RuntimeException re) {
			log.error("get failed", re);
			throw re;
		}
	}

	public List findByExample(Classcase instance) {
		log.debug("finding Classcase instance by example");
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
		log.debug("finding Classcase instance with property: " + propertyName
				+ ", value: " + value);
		try {
			String queryString = "from Classcase as model where model."
					+ propertyName + "= ?";
			return getHibernateTemplate().find(queryString, value);
		} catch (RuntimeException re) {
			log.error("find by property name failed", re);
			throw re;
		}
	}

	public List findByPersonOfHierarchy(Object personOfHierarchy) {
		return findByProperty(PERSON_OF_HIERARCHY, personOfHierarchy);
	}

	public List findByPersonOfSum(Object personOfSum) {
		return findByProperty(PERSON_OF_SUM, personOfSum);
	}

	public List findByClassContent(Object classContent) {
		return findByProperty(CLASS_CONTENT, classContent);
	}

	public List findByTrainHour(Object trainHour) {
		return findByProperty(TRAIN_HOUR, trainHour);
	}

	public List findByTrainChannel(Object trainChannel) {
		return findByProperty(TRAIN_CHANNEL, trainChannel);
	}

	public List findByTrainWay(Object trainWay) {
		return findByProperty(TRAIN_WAY, trainWay);
	}

	public List findByTrainAgreementNunber(Object trainAgreementNunber) {
		return findByProperty(TRAIN_AGREEMENT_NUNBER, trainAgreementNunber);
	}

	public List findByTrainType(Object trainType) {
		return findByProperty(TRAIN_TYPE, trainType);
	}

	public List findByTrainCategory(Object trainCategory) {
		return findByProperty(TRAIN_CATEGORY, trainCategory);
	}

	public List findByTrainReason(Object trainReason) {
		return findByProperty(TRAIN_REASON, trainReason);
	}

	public List findByTrainAddress(Object trainAddress) {
		return findByProperty(TRAIN_ADDRESS, trainAddress);
	}

	public List findByTrainUnit(Object trainUnit) {
		return findByProperty(TRAIN_UNIT, trainUnit);
	}

	public List findByTrainUnitType(Object trainUnitType) {
		return findByProperty(TRAIN_UNIT_TYPE, trainUnitType);
	}

	public List findByAwarding(Object awarding) {
		return findByProperty(AWARDING, awarding);
	}

	public List findByRecognition(Object recognition) {
		return findByProperty(RECOGNITION, recognition);
	}

	public List findByExitCountry(Object exitCountry) {
		return findByProperty(EXIT_COUNTRY, exitCountry);
	}

	public List findByTrainCost(Object trainCost) {
		return findByProperty(TRAIN_COST, trainCost);
	}

	public List findByAccreditationFees(Object accreditationFees) {
		return findByProperty(ACCREDITATION_FEES, accreditationFees);
	}

	public List findByTravelExpense(Object travelExpense) {
		return findByProperty(TRAVEL_EXPENSE, travelExpense);
	}

	public List findByOtherCost(Object otherCost) {
		return findByProperty(OTHER_COST, otherCost);
	}

	public List findByClassCaseComment(Object classCaseComment) {
		return findByProperty(CLASS_CASE_COMMENT, classCaseComment);
	}

	public List findAll() {
		log.debug("finding all Classcase instances");
		try {
			String queryString = "from Classcase";
			return getHibernateTemplate().find(queryString);
		} catch (RuntimeException re) {
			log.error("find all failed", re);
			throw re;
		}
	}

	public Classcase merge(Classcase detachedInstance) {
		log.debug("merging Classcase instance");
		try {
			Classcase result = (Classcase) getHibernateTemplate().merge(
					detachedInstance);
			log.debug("merge successful");
			return result;
		} catch (RuntimeException re) {
			log.error("merge failed", re);
			throw re;
		}
	}

	public void attachDirty(Classcase instance) {
		log.debug("attaching dirty Classcase instance");
		try {
			getHibernateTemplate().saveOrUpdate(instance);
			log.debug("attach successful");
		} catch (RuntimeException re) {
			log.error("attach failed", re);
			throw re;
		}
	}

	public void attachClean(Classcase instance) {
		log.debug("attaching clean Classcase instance");
		try {
			getHibernateTemplate().lock(instance, LockMode.NONE);
			log.debug("attach successful");
		} catch (RuntimeException re) {
			log.error("attach failed", re);
			throw re;
		}
	}

	public static ClasscaseDAO getFromApplicationContext(ApplicationContext ctx) {
		return (ClasscaseDAO) ctx.getBean("ClasscaseDAO");
	}
}