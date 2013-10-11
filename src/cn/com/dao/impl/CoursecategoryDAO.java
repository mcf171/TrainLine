package cn.com.dao.impl;

import java.util.List;
import org.hibernate.LockMode;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.orm.hibernate3.support.HibernateDaoSupport;

import cn.com.model.Coursecategory;

/**
 	* A data access object (DAO) providing persistence and search support for Coursecategory entities.
 			* Transaction control of the save(), update() and delete() operations 
		can directly support Spring container-managed transactions or they can be augmented	to handle user-managed Spring transactions. 
		Each of these methods provides additional information for how to configure it for the desired type of transaction control. 	
	 * @see cn.com.model.Coursecategory
  * @author MyEclipse Persistence Tools 
 */

public class CoursecategoryDAO extends HibernateDaoSupport  {
	     private static final Logger log = LoggerFactory.getLogger(CoursecategoryDAO.class);
		//property constants
	public static final String COURSE_CATEGORY_NAME = "courseCategoryName";



	protected void initDao() {
		//do nothing
	}
    
    public void save(Coursecategory transientInstance) {
        log.debug("saving Coursecategory instance");
        try {
            getHibernateTemplate().save(transientInstance);
            log.debug("save successful");
        } catch (RuntimeException re) {
            log.error("save failed", re);
            throw re;
        }
    }
    
	public void delete(Coursecategory persistentInstance) {
        log.debug("deleting Coursecategory instance");
        try {
            getHibernateTemplate().delete(persistentInstance);
            log.debug("delete successful");
        } catch (RuntimeException re) {
            log.error("delete failed", re);
            throw re;
        }
    }
    
    public Coursecategory findById( java.lang.Integer id) {
        log.debug("getting Coursecategory instance with id: " + id);
        try {
            Coursecategory instance = (Coursecategory) getHibernateTemplate()
                    .get("cn.com.model.Coursecategory", id);
            return instance;
        } catch (RuntimeException re) {
            log.error("get failed", re);
            throw re;
        }
    }
    
    
    public List findByExample(Coursecategory instance) {
        log.debug("finding Coursecategory instance by example");
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
      log.debug("finding Coursecategory instance with property: " + propertyName
            + ", value: " + value);
      try {
         String queryString = "from Coursecategory as model where model." 
         						+ propertyName + "= ?";
		 return getHibernateTemplate().find(queryString, value);
      } catch (RuntimeException re) {
         log.error("find by property name failed", re);
         throw re;
      }
	}

	public List findByCourseCategoryName(Object courseCategoryName
	) {
		return findByProperty(COURSE_CATEGORY_NAME, courseCategoryName
		);
	}
	

	public List findAll() {
		log.debug("finding all Coursecategory instances");
		try {
			String queryString = "from Coursecategory";
		 	return getHibernateTemplate().find(queryString);
		} catch (RuntimeException re) {
			log.error("find all failed", re);
			throw re;
		}
	}
	
    public Coursecategory merge(Coursecategory detachedInstance) {
        log.debug("merging Coursecategory instance");
        try {
            Coursecategory result = (Coursecategory) getHibernateTemplate()
                    .merge(detachedInstance);
            log.debug("merge successful");
            return result;
        } catch (RuntimeException re) {
            log.error("merge failed", re);
            throw re;
        }
    }

    public void attachDirty(Coursecategory instance) {
        log.debug("attaching dirty Coursecategory instance");
        try {
            getHibernateTemplate().saveOrUpdate(instance);
            log.debug("attach successful");
        } catch (RuntimeException re) {
            log.error("attach failed", re);
            throw re;
        }
    }
    
    public void attachClean(Coursecategory instance) {
        log.debug("attaching clean Coursecategory instance");
        try {
            getHibernateTemplate().lock(instance, LockMode.NONE);
            log.debug("attach successful");
        } catch (RuntimeException re) {
            log.error("attach failed", re);
            throw re;
        }
    }

	public static CoursecategoryDAO getFromApplicationContext(ApplicationContext ctx) {
    	return (CoursecategoryDAO) ctx.getBean("CoursecategoryDAO");
	}
}