package cn.com.dao;

import java.sql.Timestamp;
import java.util.List;
import org.hibernate.LockMode;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.orm.hibernate3.support.HibernateDaoSupport;

import cn.com.model.Personalinformation;

/**
 * A data access object (DAO) providing persistence and search support for
 * Personalinformation entities. Transaction control of the save(), update() and
 * delete() operations can directly support Spring container-managed
 * transactions or they can be augmented to handle user-managed Spring
 * transactions. Each of these methods provides additional information for how
 * to configure it for the desired type of transaction control.
 * 
 * @see cn.com.model.Personalinformation
 * @author MyEclipse Persistence Tools
 */

public class PersonalinformationDAO extends HibernateDaoSupport {
	private static final Logger log = LoggerFactory
			.getLogger(PersonalinformationDAO.class);
	// property constants
	public static final String USER_ID = "userId";
	public static final String REAL_NAME = "realName";
	public static final String PICTURE_PATH = "picturePath";
	public static final String IDNUMBER = "idnumber";
	public static final String SEX = "sex";
	public static final String AGE = "age";
	public static final String NATIONALITY = "nationality";
	public static final String NATIVE_PLACE = "nativePlace";
	public static final String BIRTHPLACE = "birthplace";
	public static final String DOMICILE_PLACE = "domicilePlace";
	public static final String MARRIAGE_STATUS = "marriageStatus";
	public static final String POLITICS_STATUS = "politicsStatus";
	public static final String WORKING_AGE = "workingAge";
	public static final String HOME_ADDRESS = "homeAddress";
	public static final String TEL_PHONE = "telPhone";
	public static final String QQ = "qq";
	public static final String EMAIL = "email";
	public static final String PERSON_TYPE = "personType";
	public static final String NOW_WORK_POSITION = "nowWorkPosition";
	public static final String PERFORM_WORK = "performWork";
	public static final String PERFORM_WORK_PLATE = "performWorkPlate";
	public static final String WORK_DUTY = "workDuty";
	public static final String PERSONNEL_REDUCTION_PATH = "personnelReductionPath";
	public static final String TEAM = "team";

	protected void initDao() {
		// do nothing
	}

	public void save(Personalinformation transientInstance) {
		log.debug("saving Personalinformation instance");
		try {
			getHibernateTemplate().save(transientInstance);
			log.debug("save successful");
		} catch (RuntimeException re) {
			log.error("save failed", re);
			throw re;
		}
	}

	public void delete(Personalinformation persistentInstance) {
		log.debug("deleting Personalinformation instance");
		try {
			getHibernateTemplate().delete(persistentInstance);
			log.debug("delete successful");
		} catch (RuntimeException re) {
			log.error("delete failed", re);
			throw re;
		}
	}

	public Personalinformation findById(java.lang.Integer id) {
		log.debug("getting Personalinformation instance with id: " + id);
		try {
			Personalinformation instance = (Personalinformation) getHibernateTemplate()
					.get("cn.com.model.Personalinformation", id);
			return instance;
		} catch (RuntimeException re) {
			log.error("get failed", re);
			throw re;
		}
	}

	public List findByExample(Personalinformation instance) {
		log.debug("finding Personalinformation instance by example");
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
		log.debug("finding Personalinformation instance with property: "
				+ propertyName + ", value: " + value);
		try {
			String queryString = "from Personalinformation as model where model."
					+ propertyName + "= ?";
			return getHibernateTemplate().find(queryString, value);
		} catch (RuntimeException re) {
			log.error("find by property name failed", re);
			throw re;
		}
	}

	public List<Personalinformation> findByUserId(Object userId) {
		return findByProperty(USER_ID, userId);
	}

	public List<Personalinformation> findByRealName(Object realName) {
		return findByProperty(REAL_NAME, realName);
	}

	public List<Personalinformation> findByPicturePath(Object picturePath) {
		return findByProperty(PICTURE_PATH, picturePath);
	}

	public List<Personalinformation> findByIdnumber(Object idnumber) {
		return findByProperty(IDNUMBER, idnumber);
	}

	public List findBySex(Object sex) {
		return findByProperty(SEX, sex);
	}

	public List findByAge(Object age) {
		return findByProperty(AGE, age);
	}

	public List findByNationality(Object nationality) {
		return findByProperty(NATIONALITY, nationality);
	}

	public List findByNativePlace(Object nativePlace) {
		return findByProperty(NATIVE_PLACE, nativePlace);
	}

	public List findByBirthplace(Object birthplace) {
		return findByProperty(BIRTHPLACE, birthplace);
	}

	public List findByDomicilePlace(Object domicilePlace) {
		return findByProperty(DOMICILE_PLACE, domicilePlace);
	}

	public List findByMarriageStatus(Object marriageStatus) {
		return findByProperty(MARRIAGE_STATUS, marriageStatus);
	}

	public List findByPoliticsStatus(Object politicsStatus) {
		return findByProperty(POLITICS_STATUS, politicsStatus);
	}

	public List findByWorkingAge(Object workingAge) {
		return findByProperty(WORKING_AGE, workingAge);
	}

	public List findByHomeAddress(Object homeAddress) {
		return findByProperty(HOME_ADDRESS, homeAddress);
	}

	public List findByTelPhone(Object telPhone) {
		return findByProperty(TEL_PHONE, telPhone);
	}

	public List findByQq(Object qq) {
		return findByProperty(QQ, qq);
	}

	public List findByEmail(Object email) {
		return findByProperty(EMAIL, email);
	}

	public List findByPersonType(Object personType) {
		return findByProperty(PERSON_TYPE, personType);
	}

	public List findByNowWorkPosition(Object nowWorkPosition) {
		return findByProperty(NOW_WORK_POSITION, nowWorkPosition);
	}

	public List findByPerformWork(Object performWork) {
		return findByProperty(PERFORM_WORK, performWork);
	}

	public List findByPerformWorkPlate(Object performWorkPlate) {
		return findByProperty(PERFORM_WORK_PLATE, performWorkPlate);
	}

	public List findByWorkDuty(Object workDuty) {
		return findByProperty(WORK_DUTY, workDuty);
	}

	public List findByPersonnelReductionPath(Object personnelReductionPath) {
		return findByProperty(PERSONNEL_REDUCTION_PATH, personnelReductionPath);
	}

	public List findByTeam(Object team) {
		return findByProperty(TEAM, team);
	}

	public List findAll() {
		log.debug("finding all Personalinformation instances");
		try {
			String queryString = "from Personalinformation";
			return getHibernateTemplate().find(queryString);
		} catch (RuntimeException re) {
			log.error("find all failed", re);
			throw re;
		}
	}

	public Personalinformation merge(Personalinformation detachedInstance) {
		log.debug("merging Personalinformation instance");
		try {
			Personalinformation result = (Personalinformation) getHibernateTemplate()
					.merge(detachedInstance);
			log.debug("merge successful");
			return result;
		} catch (RuntimeException re) {
			log.error("merge failed", re);
			throw re;
		}
	}

	public void attachDirty(Personalinformation instance) {
		log.debug("attaching dirty Personalinformation instance");
		try {
			getHibernateTemplate().saveOrUpdate(instance);
			log.debug("attach successful");
		} catch (RuntimeException re) {
			log.error("attach failed", re);
			throw re;
		}
	}

	public void attachClean(Personalinformation instance) {
		log.debug("attaching clean Personalinformation instance");
		try {
			getHibernateTemplate().lock(instance, LockMode.NONE);
			log.debug("attach successful");
		} catch (RuntimeException re) {
			log.error("attach failed", re);
			throw re;
		}
	}

	public static PersonalinformationDAO getFromApplicationContext(
			ApplicationContext ctx) {
		return (PersonalinformationDAO) ctx.getBean("PersonalinformationDAO");
	}
}