package cn.com.dao;

import java.util.ArrayList;
import java.util.List;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.hibernate.LockMode;
import org.springframework.context.ApplicationContext;
import org.springframework.orm.hibernate3.support.HibernateDaoSupport;

import cn.com.model.Company;
import cn.com.model.Position;

/**
 * A data access object (DAO) providing persistence and search support for
 * Position entities. Transaction control of the save(), update() and delete()
 * operations can directly support Spring container-managed transactions or they
 * can be augmented to handle user-managed Spring transactions. Each of these
 * methods provides additional information for how to configure it for the
 * desired type of transaction control.
 * 
 * @see cn.com.dao1.Position
 * @author MyEclipse Persistence Tools
 */
public class PositionDAO extends HibernateDaoSupport {
	private static final Log log = LogFactory.getLog(PositionDAO.class);
	// property constants
	public static final String POSITION_NAME = "positionName";

	protected void initDao() {
		// do nothing
	}

	public void save(Position transientInstance) {
		log.debug("saving Position instance");
		try {
			getHibernateTemplate().save(transientInstance);
			log.debug("save successful");
		} catch (RuntimeException re) {
			log.error("save failed", re);
			throw re;
		}
	}

	public void delete(Position persistentInstance) {
		log.debug("deleting Position instance");
		try {
			getHibernateTemplate().clear();
			getHibernateTemplate().delete(persistentInstance);
			getHibernateTemplate().flush();
			log.debug("delete successful");
		} catch (RuntimeException re) {
			log.error("delete failed", re);
			throw re;
		}
	}

	public Position findById(java.lang.Integer id) {
		log.debug("getting Position instance with id: " + id);
		try {
			Position instance = (Position) getHibernateTemplate().get(
					"cn.com.model.Position", id);
			return instance;
		} catch (RuntimeException re) {
			log.error("get failed", re);
			throw re;
		}
	}

	public List findByExample(Position instance) {
		log.debug("finding Position instance by example");
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

	public List<Position> findByProperty(String propertyName, Object value) {
		log.debug("finding Position instance with property: " + propertyName
				+ ", value: " + value);
		try {
			String queryString = "from Position as model where model."
					+ propertyName + "= ?";
			return getHibernateTemplate().find(queryString, value);
		} catch (RuntimeException re) {
			log.error("find by property name failed", re);
			throw re;
		}
	}

	public List findByPositionName(Object positionName) {
		return findByProperty(POSITION_NAME, positionName);
	}

	public List<Position> findAll() {
		log.debug("finding all Position instances");
		try {
			String queryString = "from Position";
			return getHibernateTemplate().find(queryString);
		} catch (RuntimeException re) {
			log.error("find all failed", re);
			throw re;
		}
	}

	public Position merge(Position detachedInstance) {
		log.debug("merging Position instance");
		try {
			Position result = (Position) getHibernateTemplate().merge(
					detachedInstance);
			log.debug("merge successful");
			return result;
		} catch (RuntimeException re) {
			log.error("merge failed", re);
			throw re;
		}
	}

	public void attachDirty(Position instance) {
		log.debug("attaching dirty Position instance");
		try {
			getHibernateTemplate().saveOrUpdate(instance);
			log.debug("attach successful");
		} catch (RuntimeException re) {
			log.error("attach failed", re);
			throw re;
		}
	}

	public void attachClean(Position instance) {
		log.debug("attaching clean Position instance");
		try {
			getHibernateTemplate().lock(instance, LockMode.NONE);
			log.debug("attach successful");
		} catch (RuntimeException re) {
			log.error("attach failed", re);
			throw re;
		}
	}

	public static PositionDAO getFromApplicationContext(ApplicationContext ctx) {
		return (PositionDAO) ctx.getBean("PositionDAO");
	}
	
	public List<Position> findByExampleFuzzy(Position position){
		
		String queryString = "from Position where 1=1 ";
		List<Object> params = new ArrayList<Object>();
		
		if (position.getPositionId() != null) {
			
			queryString += "and positionId = ?";
			params.add(position.getPositionId());
		}
		
		if (position.getPositionName() != null) {

			queryString += "and positionName like ?";
			params.add("%" + position.getPositionName() + "%");
		}
		
		if (position.getDepartment().getDepartmentId() != null) {

			queryString += "and departmentId = ?";
			params.add( position.getDepartment().getDepartmentId() );
		}
		List<Position> positionList = getHibernateTemplate().find(queryString,params.toArray());
		
		return positionList;
	}
}