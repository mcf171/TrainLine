package cn.com.dao.impl;

import java.sql.Timestamp;
import java.util.List;
import java.util.Set;
import org.hibernate.LockMode;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.orm.hibernate3.support.HibernateDaoSupport;

import cn.com.model.Train;

/**
 	* A data access object (DAO) providing persistence and search support for Train entities.
 			* Transaction control of the save(), update() and delete() operations 
		can directly support Spring container-managed transactions or they can be augmented	to handle user-managed Spring transactions. 
		Each of these methods provides additional information for how to configure it for the desired type of transaction control. 	
	 * @see cn.com.model.Train
  * @author MyEclipse Persistence Tools 
 */

public class TrainDAO extends HibernateDaoSupport  {
	     private static final Logger log = LoggerFactory.getLogger(TrainDAO.class);
		//property constants
	public static final String TRAIN_NAME = "trainName";
	public static final String TRAIN_WAY = "trainWay";
	public static final String TRAIN_PLACE = "trainPlace";
	public static final String TRAIN_CONTENT = "trainContent";
	public static final String TRAIN_COUNT_HOUR = "trainCountHour";
	public static final String TRAIN_TYPE = "trainType";
	public static final String TRAIN_TELEGRAM_CODE = "trainTelegramCode";
	public static final String TRAIN_TRAIN_AGENCY = "trainTrainAgency";



	protected void initDao() {
		//do nothing
	}
    
    public void save(Train transientInstance) {
        log.debug("saving Train instance");
        try {
            getHibernateTemplate().save(transientInstance);
            log.debug("save successful");
        } catch (RuntimeException re) {
            log.error("save failed", re);
            throw re;
        }
    }
    
	public void delete(Train persistentInstance) {
        log.debug("deleting Train instance");
        try {
            getHibernateTemplate().delete(persistentInstance);
            log.debug("delete successful");
        } catch (RuntimeException re) {
            log.error("delete failed", re);
            throw re;
        }
    }
    
    public Train findById( java.lang.Integer id) {
        log.debug("getting Train instance with id: " + id);
        try {
            Train instance = (Train) getHibernateTemplate()
                    .get("cn.com.model.Train", id);
            return instance;
        } catch (RuntimeException re) {
            log.error("get failed", re);
            throw re;
        }
    }
    
    
    public List findByExample(Train instance) {
        log.debug("finding Train instance by example");
        try {
            List results = getHibernateTemplate().findByExample(instance);
            log.debug("find by example successful, result size: " + results.size());
            return results;
        } catch (RuntimeException re) {
            log.error("find by example failed", re);
            throw re;
        }
    }    
    
    public List findByProperty(String propertyName, Object value) {
      log.debug("finding Train instance with property: " + propertyName
            + ", value: " + value);
      try {
         String queryString = "from Train as model where model." 
         						+ propertyName + "= ?";
		 return getHibernateTemplate().find(queryString, value);
      } catch (RuntimeException re) {
         log.error("find by property name failed", re);
         throw re;
      }
	}

	public List findByTrainName(Object trainName
	) {
		return findByProperty(TRAIN_NAME, trainName
		);
	}
	
	public List findByTrainWay(Object trainWay
	) {
		return findByProperty(TRAIN_WAY, trainWay
		);
	}
	
	public List findByTrainPlace(Object trainPlace
	) {
		return findByProperty(TRAIN_PLACE, trainPlace
		);
	}
	
	public List findByTrainContent(Object trainContent
	) {
		return findByProperty(TRAIN_CONTENT, trainContent
		);
	}
	
	public List findByTrainCountHour(Object trainCountHour
	) {
		return findByProperty(TRAIN_COUNT_HOUR, trainCountHour
		);
	}
	
	public List findByTrainType(Object trainType
	) {
		return findByProperty(TRAIN_TYPE, trainType
		);
	}
	
	public List findByTrainTelegramCode(Object trainTelegramCode
	) {
		return findByProperty(TRAIN_TELEGRAM_CODE, trainTelegramCode
		);
	}
	
	public List findByTrainTrainAgency(Object trainTrainAgency
	) {
		return findByProperty(TRAIN_TRAIN_AGENCY, trainTrainAgency
		);
	}
	

	public List findAll() {
		log.debug("finding all Train instances");
		try {
			String queryString = "from Train";
		 	return getHibernateTemplate().find(queryString);
		} catch (RuntimeException re) {
			log.error("find all failed", re);
			throw re;
		}
	}
	
    public Train merge(Train detachedInstance) {
        log.debug("merging Train instance");
        try {
            Train result = (Train) getHibernateTemplate()
                    .merge(detachedInstance);
            log.debug("merge successful");
            return result;
        } catch (RuntimeException re) {
            log.error("merge failed", re);
            throw re;
        }
    }

    public void attachDirty(Train instance) {
        log.debug("attaching dirty Train instance");
        try {
            getHibernateTemplate().saveOrUpdate(instance);
            log.debug("attach successful");
        } catch (RuntimeException re) {
            log.error("attach failed", re);
            throw re;
        }
    }
    
    public void attachClean(Train instance) {
        log.debug("attaching clean Train instance");
        try {
            getHibernateTemplate().lock(instance, LockMode.NONE);
            log.debug("attach successful");
        } catch (RuntimeException re) {
            log.error("attach failed", re);
            throw re;
        }
    }

	public static TrainDAO getFromApplicationContext(ApplicationContext ctx) {
    	return (TrainDAO) ctx.getBean("TrainDAO");
	}
}