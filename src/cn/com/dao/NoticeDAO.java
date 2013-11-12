package cn.com.dao;

import java.sql.Timestamp;
import java.util.List;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.hibernate.LockMode;
import org.springframework.context.ApplicationContext;
import org.springframework.orm.hibernate3.support.HibernateDaoSupport;

/**
 * A data access object (DAO) providing persistence and search support for
 * Notice entities. Transaction control of the save(), update() and delete()
 * operations can directly support Spring container-managed transactions or they
 * can be augmented to handle user-managed Spring transactions. Each of these
 * methods provides additional information for how to configure it for the
 * desired type of transaction control.
 * 
 * @see cn.com.model.Notice
 * @author MyEclipse Persistence Tools
 */
public class NoticeDAO extends HibernateDaoSupport {
	private static final Log log = LogFactory.getLog(NoticeDAO.class);
	// property constants
	public static final String NOTICE_TITLE = "noticeTitle";
	public static final String NOTICE_AUTHOR = "noticeAuthor";
	public static final String WEIGHT = "weight";
	public static final String NOTICE_CONTENT = "noticeContent";

	protected void initDao() {
		// do nothing
	}

	public void save(Notice transientInstance) {
		log.debug("saving Notice instance");
		try {
			getHibernateTemplate().save(transientInstance);
			log.debug("save successful");
		} catch (RuntimeException re) {
			log.error("save failed", re);
			throw re;
		}
	}

	public void delete(Notice persistentInstance) {
		log.debug("deleting Notice instance");
		try {
			getHibernateTemplate().delete(persistentInstance);
			log.debug("delete successful");
		} catch (RuntimeException re) {
			log.error("delete failed", re);
			throw re;
		}
	}

	public Notice findById(java.lang.Integer id) {
		log.debug("getting Notice instance with id: " + id);
		try {
			Notice instance = (Notice) getHibernateTemplate().get(
					"cn.com.model.Notice", id);
			return instance;
		} catch (RuntimeException re) {
			log.error("get failed", re);
			throw re;
		}
	}

	public List findByExample(Notice instance) {
		log.debug("finding Notice instance by example");
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
		log.debug("finding Notice instance with property: " + propertyName
				+ ", value: " + value);
		try {
			String queryString = "from Notice as model where model."
					+ propertyName + "= ?";
			return getHibernateTemplate().find(queryString, value);
		} catch (RuntimeException re) {
			log.error("find by property name failed", re);
			throw re;
		}
	}

	public List findByNoticeTitle(Object noticeTitle) {
		return findByProperty(NOTICE_TITLE, noticeTitle);
	}

	public List findByNoticeAuthor(Object noticeAuthor) {
		return findByProperty(NOTICE_AUTHOR, noticeAuthor);
	}

	public List findByWeight(Object weight) {
		return findByProperty(WEIGHT, weight);
	}

	public List findByNoticeContent(Object noticeContent) {
		return findByProperty(NOTICE_CONTENT, noticeContent);
	}

	public List findAll() {
		log.debug("finding all Notice instances");
		try {
			String queryString = "from Notice";
			return getHibernateTemplate().find(queryString);
		} catch (RuntimeException re) {
			log.error("find all failed", re);
			throw re;
		}
	}

	public Notice merge(Notice detachedInstance) {
		log.debug("merging Notice instance");
		try {
			Notice result = (Notice) getHibernateTemplate().merge(
					detachedInstance);
			log.debug("merge successful");
			return result;
		} catch (RuntimeException re) {
			log.error("merge failed", re);
			throw re;
		}
	}

	public void attachDirty(Notice instance) {
		log.debug("attaching dirty Notice instance");
		try {
			getHibernateTemplate().saveOrUpdate(instance);
			log.debug("attach successful");
		} catch (RuntimeException re) {
			log.error("attach failed", re);
			throw re;
		}
	}

	public void attachClean(Notice instance) {
		log.debug("attaching clean Notice instance");
		try {
			getHibernateTemplate().lock(instance, LockMode.NONE);
			log.debug("attach successful");
		} catch (RuntimeException re) {
			log.error("attach failed", re);
			throw re;
		}
	}

	public static NoticeDAO getFromApplicationContext(ApplicationContext ctx) {
		return (NoticeDAO) ctx.getBean("NoticeDAO");
	}
}