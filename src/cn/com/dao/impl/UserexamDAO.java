package cn.com.dao.impl;

import java.util.List;
import org.hibernate.LockMode;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.orm.hibernate3.support.HibernateDaoSupport;

import cn.com.model.Userexam;
import cn.com.model.UserexamId;

/**
 	* A data access object (DAO) providing persistence and search support for Userexam entities.
 			* Transaction control of the save(), update() and delete() operations 
		can directly support Spring container-managed transactions or they can be augmented	to handle user-managed Spring transactions. 
		Each of these methods provides additional information for how to configure it for the desired type of transaction control. 	
	 * @see cn.com.model.Userexam
  * @author MyEclipse Persistence Tools 
 */

public class UserexamDAO extends HibernateDaoSupport  {
	     private static final Logger log = LoggerFactory.getLogger(UserexamDAO.class);
		//property constants



	protected void initDao() {
		//do nothing
	}
    
    public void save(Userexam transientInstance) {
        log.debug("saving Userexam instance");
        try {
            getHibernateTemplate().save(transientInstance);
            log.debug("save successful");
        } catch (RuntimeException re) {
            log.error("save failed", re);
            throw re;
        }
    }
    
	public void delete(Userexam persistentInstance) {
        log.debug("deleting Userexam instance");
        try {
            getHibernateTemplate().delete(persistentInstance);
            log.debug("delete successful");
        } catch (RuntimeException re) {
            log.error("delete failed", re);
            throw re;
        }
    }
    
    public Userexam findById( cn.com.model.UserexamId id) {
        log.debug("getting Userexam instance with id: " + id);
        try {
            Userexam instance = (Userexam) getHibernateTemplate()
                    .get("cn.com.model.Userexam", id);
            return instance;
        } catch (RuntimeException re) {
            log.error("get failed", re);
            throw re;
        }
    }
    
    
    public List findByExample(Userexam instance) {
        log.debug("finding Userexam instance by example");
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
      log.debug("finding Userexam instance with property: " + propertyName
            + ", value: " + value);
      try {
         String queryString = "from Userexam as model where model." 
         						+ propertyName + "= ?";
		 return getHibernateTemplate().find(queryString, value);
      } catch (RuntimeException re) {
         log.error("find by property name failed", re);
         throw re;
      }
	}


	public List findAll() {
		log.debug("finding all Userexam instances");
		try {
			String queryString = "from Userexam";
		 	return getHibernateTemplate().find(queryString);
		} catch (RuntimeException re) {
			log.error("find all failed", re);
			throw re;
		}
	}
	
    public Userexam merge(Userexam detachedInstance) {
        log.debug("merging Userexam instance");
        try {
            Userexam result = (Userexam) getHibernateTemplate()
                    .merge(detachedInstance);
            log.debug("merge successful");
            return result;
        } catch (RuntimeException re) {
            log.error("merge failed", re);
            throw re;
        }
    }

    public void attachDirty(Userexam instance) {
        log.debug("attaching dirty Userexam instance");
        try {
            getHibernateTemplate().saveOrUpdate(instance);
            log.debug("attach successful");
        } catch (RuntimeException re) {
            log.error("attach failed", re);
            throw re;
        }
    }
    
    public void attachClean(Userexam instance) {
        log.debug("attaching clean Userexam instance");
        try {
            getHibernateTemplate().lock(instance, LockMode.NONE);
            log.debug("attach successful");
        } catch (RuntimeException re) {
            log.error("attach failed", re);
            throw re;
        }
    }

	public static UserexamDAO getFromApplicationContext(ApplicationContext ctx) {
    	return (UserexamDAO) ctx.getBean("UserexamDAO");
	}
}