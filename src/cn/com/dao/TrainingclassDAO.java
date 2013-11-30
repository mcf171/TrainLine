package cn.com.dao;

import java.util.ArrayList;
import java.util.List;

import java.util.Set;
import org.hibernate.LockMode;
import org.hibernate.Session;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.orm.hibernate3.support.HibernateDaoSupport;

import sun.text.resources.FormatData;

import cn.com.model.Classandcourse;
import cn.com.model.Classcase;
import cn.com.model.Course;
import cn.com.model.Trainingclass;

/**
 * A data access object (DAO) providing persistence and search support for
 * Trainingclass entities. Transaction control of the save(), update() and
 * delete() operations can directly support Spring container-managed
 * transactions or they can be augmented to handle user-managed Spring
 * transactions. Each of these methods provides additional information for how
 * to configure it for the desired type of transaction control.
 * 
 * @see cn.com.model.Trainingclass
 * @author MyEclipse Persistence Tools
 */

public class TrainingclassDAO extends HibernateDaoSupport {
	private static final Logger log = LoggerFactory
			.getLogger(TrainingclassDAO.class);
	// property constants
	public static final String TRAINING_CLASS_NAME = "trainingClassName";
	public static final String TRAINING_CLASS_STATUS = "trainingClassStatus";

	protected void initDao() {
		// do nothing
	}

	public Integer save(Trainingclass transientInstance) {
			Session session  = getHibernateTemplate().getSessionFactory().openSession();
			Integer id = (Integer) session.save(transientInstance);
		return id;
	}

	public void delete(Trainingclass persistentInstance) {
		log.debug("deleting Trainingclass instance");
		try {
			Session session = getHibernateTemplate().getSessionFactory().openSession();
			session.delete(persistentInstance);
			session.flush();
			log.debug("delete successful");
		} catch (RuntimeException re) {
			log.error("delete failed", re);
			throw re;
		}
	}

	public Trainingclass findById(java.lang.Integer id) {
		log.debug("getting Trainingclass instance with id: " + id);
		try {
			Trainingclass instance = (Trainingclass) getHibernateTemplate()
					.get("cn.com.model.Trainingclass", id);
			return instance;
		} catch (RuntimeException re) {
			log.error("get failed", re);
			throw re;
		}
	}

	public List findByExample(Trainingclass instance) {
		log.debug("finding Trainingclass instance by example");
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
		log.debug("finding Trainingclass instance with property: "
				+ propertyName + ", value: " + value);
		try {
			String queryString = "from Trainingclass as model where model."
					+ propertyName + "= ?";
			return getHibernateTemplate().find(queryString, value);
		} catch (RuntimeException re) {
			log.error("find by property name failed", re);
			throw re;
		}
	}

	public List findByTrainingClassName(Object trainingClassName) {
		return findByProperty(TRAINING_CLASS_NAME, trainingClassName);
	}

	public List findByTrainingClassStatus(Object trainingClassStatus) {
		return findByProperty(TRAINING_CLASS_STATUS, trainingClassStatus);
	}

	public List findAll() {
		log.debug("finding all Trainingclass instances");
		try {
			String queryString = "from Trainingclass";
			return getHibernateTemplate().find(queryString);
		} catch (RuntimeException re) {
			log.error("find all failed", re);
			throw re;
		}
	}

	public Trainingclass merge(Trainingclass detachedInstance) {
		log.debug("merging Trainingclass instance");
		try {
			Trainingclass result = (Trainingclass) getHibernateTemplate()
					.merge(detachedInstance);
			log.debug("merge successful");
			return result;
		} catch (RuntimeException re) {
			log.error("merge failed", re);
			throw re;
		}
	}

	public void attachDirty(Trainingclass instance) {
		log.debug("attaching dirty Trainingclass instance");
		try {
			getHibernateTemplate().saveOrUpdate(instance);
			getHibernateTemplate().flush();
			log.debug("attach successful");
		} catch (RuntimeException re) {
			log.error("attach failed", re);
			throw re;
		}
	}

	public void attachClean(Trainingclass instance) {
		log.debug("attaching clean Trainingclass instance");
		try {
			getHibernateTemplate().lock(instance, LockMode.NONE);
			log.debug("attach successful");
		} catch (RuntimeException re) {
			log.error("attach failed", re);
			throw re;
		}
	}

	public static TrainingclassDAO getFromApplicationContext(
			ApplicationContext ctx) {
		return (TrainingclassDAO) ctx.getBean("TrainingclassDAO");
	}

	public List<Trainingclass> findByConditions(Trainingclass trainingclass) {
		String hql ="from Trainingclass where 1=1 ";
		if(trainingclass.getTrainingClassId()!=null)
		{
			hql+=" and trainingClassId = "+trainingclass.getTrainingClassId();
		}
		if(trainingclass.getTrainingClassName()!=null)
		{
			hql +=" and trainingClassName like '%"+trainingclass.getTrainingClassName()+"%' ";
		}
		if(trainingclass.getTrainingClassStatus()!=null){
			hql +=" and trainingClassStatus = "+trainingclass.getTrainingClassStatus();
		}
		List<Trainingclass> list = getHibernateTemplate().find(hql);
		getHibernateTemplate().flush();
		return list;
	}

	public void update(Trainingclass trainingclass) {
		attachDirty(trainingclass);
	}

	public void saveClassAndCourse(Classandcourse classandcourse) {
		getHibernateTemplate().save(classandcourse);
		getHibernateTemplate().flush();
	}

	public List<Course> getCourseByClassId(Integer classId) {
		String hql ="from Classandcourse where trainingClassId = "+classId+" ";
		List<Classandcourse> list = getHibernateTemplate().find(hql);
		Course course =null;
		List<Course> courseslist = new ArrayList<Course>();
		
		if(list!=null&&list.size()!=0)
		{
			for (int i = 0; i < list.size(); i++) {
				course = getHibernateTemplate().get(Course.class, list.get(i).getId().getCourseId());
				courseslist.add(course);
			}
			
		}
		return  courseslist;
	}

	public void delCourseFClass(Classandcourse classandcourse) {
		getHibernateTemplate().delete(classandcourse);
		getHibernateTemplate().flush();
	}

	public Classcase getClassCaseById(Integer classId) {
		String hql ="from Classcase where trainingClassId = "+ classId;
		List<Classcase> list =getHibernateTemplate().find(hql);
		Classcase classcase = null;
		if(list.size()==1)
		{
			classcase = list.get(0);
			return classcase;
		}
		return null;
	}
}
