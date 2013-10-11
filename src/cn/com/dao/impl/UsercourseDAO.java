package cn.com.dao.impl;

import java.util.List;
import org.hibernate.LockMode;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.orm.hibernate3.support.HibernateDaoSupport;

import cn.com.model.Usercourse;
import cn.com.model.UsercourseId;

/**
 	* A data access object (DAO) providing persistence and search support for Usercourse entities.
 			* Transaction control of the save(), update() and delete() operations 
		can directly support Spring container-managed transactions or they can be augmented	to handle user-managed Spring transactions. 
		Each of these methods provides additional information for how to configure it for the desired type of transaction control. 	
	 * @see cn.com.model.Usercourse
  * @author MyEclipse Persistence Tools 
 */

public class UsercourseDAO extends HibernateDaoSupport  {
	     private static final Logger log = LoggerFactory.getLogger(UsercourseDAO.class);
		//property constants



	protected void initDao() {
		//do nothing
	}
    
    public void save(Usercourse transientInstance) {
        log.debug("saving Usercourse instance");
        try {
            getHibernateTemplate().save(transientInstance);
            log.debug("save successful");
        } catch (RuntimeException re) {
            log.error("save failed", re);
            throw re;
        }
    }
    
	public void delete(Usercourse persistentInstance) {
        log.debug("deleting Usercourse instance");
        try {
            getHibernateTemplate().delete(persistentInstance);
            log.debug("delete successful");
        } catch (RuntimeException re) {
            log.error("delete failed", re);
            throw re;
        }
    }
    
    public Usercourse findById( cn.com.model.UsercourseId id) {
        log.debug("getting Usercourse instance with id: " + id);
        try {
            Usercourse instance = (Usercourse) getHibernateTemplate()
                    .get("cn.com.model.Usercourse", id);
            return instance;
        } catch (RuntimeException re) {
            log.error("get failed", re);
            throw re;
        }
    }
    
    
    public List findByExample(Usercourse instance) {
        log.debug("finding Usercourse instance by example");
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
      log.debug("finding Usercourse instance with property: " + propertyName
            + ", value: " + value);
      try {
         String queryString = "from Usercourse as model where model." 
         						+ propertyName + "= ?";
		 return getHibernateTemplate().find(queryString, value);
      } catch (RuntimeException re) {
         log.error("find by property name failed", re);
         throw re;
      }
	}


	public List findAll() {
		log.debug("finding all Usercourse instances");
		try {
			String queryString = "from Usercourse";
		 	return getHibernateTemplate().find(queryString);
		} catch (RuntimeException re) {
			log.error("find all failed", re);
			throw re;
		}
	}
	
    public Usercourse merge(Usercourse detachedInstance) {
        log.debug("merging Usercourse instance");
        try {
            Usercourse result = (Usercourse) getHibernateTemplate()
                    .merge(detachedInstance);
            log.debug("merge successful");
            return result;
        } catch (RuntimeException re) {
            log.error("merge failed", re);
            throw re;
        }
    }

    public void attachDirty(Usercourse instance) {
        log.debug("attaching dirty Usercourse instance");
        try {
            getHibernateTemplate().saveOrUpdate(instance);
            log.debug("attach successful");
        } catch (RuntimeException re) {
            log.error("attach failed", re);
            throw re;
        }
    }
    
    public void attachClean(Usercourse instance) {
        log.debug("attaching clean Usercourse instance");
        try {
            getHibernateTemplate().lock(instance, LockMode.NONE);
            log.debug("attach successful");
        } catch (RuntimeException re) {
            log.error("attach failed", re);
            throw re;
        }
    }

	public static UsercourseDAO getFromApplicationContext(ApplicationContext ctx) {
    	return (UsercourseDAO) ctx.getBean("UsercourseDAO");
	}
}