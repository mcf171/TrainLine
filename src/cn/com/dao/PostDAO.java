package cn.com.dao;

import java.sql.Timestamp;
import java.util.List;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.hibernate.LockMode;
import org.springframework.context.ApplicationContext;
import org.springframework.orm.hibernate3.support.HibernateDaoSupport;

import cn.com.model.Post;

/**
 * A data access object (DAO) providing persistence and search support for Post
 * entities. Transaction control of the save(), update() and delete() operations
 * can directly support Spring container-managed transactions or they can be
 * augmented to handle user-managed Spring transactions. Each of these methods
 * provides additional information for how to configure it for the desired type
 * of transaction control.
 * 
 * @see cn.com.model.Post
 * @author MyEclipse Persistence Tools
 */
public class PostDAO extends HibernateDaoSupport {
	private static final Log log = LogFactory.getLog(PostDAO.class);
	// property constants
	public static final String USER_ID = "userId";
	public static final String POST_TITLE = "postTitle";

	protected void initDao() {
		// do nothing
	}

	public void save(Post transientInstance) {
		log.debug("saving Post instance");
		try {
			getHibernateTemplate().save(transientInstance);
			log.debug("save successful");
		} catch (RuntimeException re) {
			log.error("save failed", re);
			throw re;
		}
	}

	public void delete(Post persistentInstance) {
		log.debug("deleting Post instance");
		try {
			getHibernateTemplate().delete(persistentInstance);
			log.debug("delete successful");
		} catch (RuntimeException re) {
			log.error("delete failed", re);
			throw re;
		}
	}

	public Post findById(java.lang.Integer id) {
		log.debug("getting Post instance with id: " + id);
		try {
			Post instance = (Post) getHibernateTemplate().get(
					"cn.com.model.Post", id);
			return instance;
		} catch (RuntimeException re) {
			log.error("get failed", re);
			throw re;
		}
	}

	public List findByExample(Post instance) {
		log.debug("finding Post instance by example");
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
		log.debug("finding Post instance with property: " + propertyName
				+ ", value: " + value);
		try {
			String queryString = "from Post as model where model."
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

	public List findByPostTitle(Object postTitle) {
		return findByProperty(POST_TITLE, postTitle);
	}

	public List findAll() {
		log.debug("finding all Post instances");
		try {
			String queryString = "from Post";
			return getHibernateTemplate().find(queryString);
		} catch (RuntimeException re) {
			log.error("find all failed", re);
			throw re;
		}
	}

	public Post merge(Post detachedInstance) {
		log.debug("merging Post instance");
		try {
			Post result = (Post) getHibernateTemplate().merge(detachedInstance);
			log.debug("merge successful");
			return result;
		} catch (RuntimeException re) {
			log.error("merge failed", re);
			throw re;
		}
	}

	public void attachDirty(Post instance) {
		log.debug("attaching dirty Post instance");
		try {
			getHibernateTemplate().saveOrUpdate(instance);
			log.debug("attach successful");
		} catch (RuntimeException re) {
			log.error("attach failed", re);
			throw re;
		}
	}

	public void attachClean(Post instance) {
		log.debug("attaching clean Post instance");
		try {
			getHibernateTemplate().lock(instance, LockMode.NONE);
			log.debug("attach successful");
		} catch (RuntimeException re) {
			log.error("attach failed", re);
			throw re;
		}
	}

	public static PostDAO getFromApplicationContext(ApplicationContext ctx) {
		return (PostDAO) ctx.getBean("PostDAO");
	}
}