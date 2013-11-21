package cn.com.dao;

import java.util.List;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.hibernate.LockMode;
import org.hibernate.Query;
import org.hibernate.Session;
import org.springframework.context.ApplicationContext;
import org.springframework.orm.hibernate3.support.HibernateDaoSupport;

import cn.com.model.Note;


import cn.com.model.Note;

/**
 * A data access object (DAO) providing persistence and search support for Note
 * entities. Transaction control of the save(), update() and delete() operations
 * can directly support Spring container-managed transactions or they can be
 * augmented to handle user-managed Spring transactions. Each of these methods
 * provides additional information for how to configure it for the desired type
 * of transaction control.
 * 
 * @see cn.com.model.Note
 * @author MyEclipse Persistence Tools
 */
public class NoteDAO extends HibernateDaoSupport {
	private static final Log log = LogFactory.getLog(NoteDAO.class);
	// property constants
	public static final String USER_ID = "userId";
	public static final String NOTE_CONTENT = "noteContent";

	protected void initDao() {
		// do nothing
	}

	public void save(Note transientInstance) {
		log.debug("saving Note instance");
		try {
			getHibernateTemplate().save(transientInstance);
			log.debug("save successful");
		} catch (RuntimeException re) {
			log.error("save failed", re);
			throw re;
		}
	}

	public void delete(Note note) {
		
			Session session = getHibernateTemplate().getSessionFactory().openSession();
			try {
				session.delete(note);
				session.flush();
		}catch (Exception e) {
		 e.printStackTrace();
		}
	}

	public Note findById(java.lang.Integer id) {
		log.debug("getting Note instance with id: " + id);
		try {
			Note instance = (Note) getHibernateTemplate().get(
					"cn.com.model.Note",id);
			return instance;
		} catch (RuntimeException re) {
			log.error("get failed", re);
			throw re;
		}
	}
	
	
	public List findByConditions(Note note){
		Session session = getHibernateTemplate().getSessionFactory().openSession();
		String hql ="from Note where 1=1 ";
		if(note.getUserId()!=null && !(note.getUserId().equals("")))
		{
			hql+="and userId = "+note.getUserId()+"  ";
		}
		
		if(note.getCatalogue()!=null){
			hql+=" and catalogue.catalogueId = "+note.getCatalogue().getCatalogueId()+" ";	
		}
		
		if(note.getNoteContent()!=null && !(note.getNoteContent().equals("")))
		{
			hql+=" and  noteContent like '%"+note.getNoteContent()+"%' ";
		}
		List<Note>  list= getHibernateTemplate().find(hql);
		System.out.println("*******************"+list.size()+"*********************");
		return list;
	}

	public List findByExample(Note instance) {
		log.debug("finding Note instance by example");
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
		log.debug("finding Note instance with property: " + propertyName
				+ ", value: " + value);
		try {
			String queryString = "from Note as model where model."
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

	public List findByNoteContent(Object noteContent) {
		return findByProperty(NOTE_CONTENT, noteContent);
	}

	public List findAll() {
		log.debug("finding all Note instances");
		try {
			String queryString = "from Note";
			return getHibernateTemplate().find(queryString);
		} catch (RuntimeException re) {
			log.error("find all failed", re);
			throw re;
		}
	}

	public Note merge(Note detachedInstance) {
		log.debug("merging Note instance");
		try {
			Note result = (Note) getHibernateTemplate().merge(detachedInstance);
			log.debug("merge successful");
			return result;
		} catch (RuntimeException re) {
			log.error("merge failed", re);
			throw re;
		}
	}

	public void attachDirty(Note instance) {
		log.debug("attaching dirty Note instance");
		try {
			getHibernateTemplate().saveOrUpdate(instance);
			log.debug("attach successful");
		} catch (RuntimeException re) {
			log.error("attach failed", re);
			throw re;
		}
	}

	public void attachClean(Note instance) {
		log.debug("attaching clean Note instance");
		try {
			getHibernateTemplate().lock(instance, LockMode.NONE);
			log.debug("attach successful");
		} catch (RuntimeException re) {
			log.error("attach failed", re);
			throw re;
		}
	}

	public static NoteDAO getFromApplicationContext(ApplicationContext ctx) {
		return (NoteDAO) ctx.getBean("NoteDAO");
	}

}
