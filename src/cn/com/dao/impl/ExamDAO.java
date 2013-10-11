package cn.com.dao.impl;

import java.sql.Timestamp;
import java.util.List;
import java.util.Set;
import org.hibernate.LockMode;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.orm.hibernate3.support.HibernateDaoSupport;

import cn.com.model.Exam;

/**
 	* A data access object (DAO) providing persistence and search support for Exam entities.
 			* Transaction control of the save(), update() and delete() operations 
		can directly support Spring container-managed transactions or they can be augmented	to handle user-managed Spring transactions. 
		Each of these methods provides additional information for how to configure it for the desired type of transaction control. 	
	 * @see cn.com.model.Exam
  * @author MyEclipse Persistence Tools 
 */

public class ExamDAO extends HibernateDaoSupport  {
	     private static final Logger log = LoggerFactory.getLogger(ExamDAO.class);
		//property constants
	public static final String EXAM_NAME = "examName";



	protected void initDao() {
		//do nothing
	}
    
    public void save(Exam transientInstance) {
        log.debug("saving Exam instance");
        try {
            getHibernateTemplate().save(transientInstance);
            log.debug("save successful");
        } catch (RuntimeException re) {
            log.error("save failed", re);
            throw re;
        }
    }
    
	public void delete(Exam persistentInstance) {
        log.debug("deleting Exam instance");
        try {
            getHibernateTemplate().delete(persistentInstance);
            log.debug("delete successful");
        } catch (RuntimeException re) {
            log.error("delete failed", re);
            throw re;
        }
    }
    
    public Exam findById( java.lang.Integer id) {
        log.debug("getting Exam instance with id: " + id);
        try {
            Exam instance = (Exam) getHibernateTemplate()
                    .get("cn.com.model.Exam", id);
            return instance;
        } catch (RuntimeException re) {
            log.error("get failed", re);
            throw re;
        }
    }
    
    
    public List findByExample(Exam instance) {
        log.debug("finding Exam instance by example");
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
      log.debug("finding Exam instance with property: " + propertyName
            + ", value: " + value);
      try {
         String queryString = "from Exam as model where model." 
         						+ propertyName + "= ?";
		 return getHibernateTemplate().find(queryString, value);
      } catch (RuntimeException re) {
         log.error("find by property name failed", re);
         throw re;
      }
	}

	public List findByExamName(Object examName
	) {
		return findByProperty(EXAM_NAME, examName
		);
	}
	

	public List findAll() {
		log.debug("finding all Exam instances");
		try {
			String queryString = "from Exam";
		 	return getHibernateTemplate().find(queryString);
		} catch (RuntimeException re) {
			log.error("find all failed", re);
			throw re;
		}
	}
	
    public Exam merge(Exam detachedInstance) {
        log.debug("merging Exam instance");
        try {
            Exam result = (Exam) getHibernateTemplate()
                    .merge(detachedInstance);
            log.debug("merge successful");
            return result;
        } catch (RuntimeException re) {
            log.error("merge failed", re);
            throw re;
        }
    }

    public void attachDirty(Exam instance) {
        log.debug("attaching dirty Exam instance");
        try {
            getHibernateTemplate().saveOrUpdate(instance);
            log.debug("attach successful");
        } catch (RuntimeException re) {
            log.error("attach failed", re);
            throw re;
        }
    }
    
    public void attachClean(Exam instance) {
        log.debug("attaching clean Exam instance");
        try {
            getHibernateTemplate().lock(instance, LockMode.NONE);
            log.debug("attach successful");
        } catch (RuntimeException re) {
            log.error("attach failed", re);
            throw re;
        }
    }

	public static ExamDAO getFromApplicationContext(ApplicationContext ctx) {
    	return (ExamDAO) ctx.getBean("ExamDAO");
	}
}