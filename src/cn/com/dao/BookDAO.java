package cn.com.dao;

import java.util.ArrayList;
import java.util.List;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.hibernate.LockMode;
import org.springframework.context.ApplicationContext;
import org.springframework.orm.hibernate3.support.HibernateDaoSupport;

import cn.com.model.Book;

/**
 * A data access object (DAO) providing persistence and search support for Book
 * entities. Transaction control of the save(), update() and delete() operations
 * can directly support Spring container-managed transactions or they can be
 * augmented to handle user-managed Spring transactions. Each of these methods
 * provides additional information for how to configure it for the desired type
 * of transaction control.
 * 
 * @see cn.com.model.Book
 * @author MyEclipse Persistence Tools
 */
public class BookDAO extends HibernateDaoSupport {
	private static final Log log = LogFactory.getLog(BookDAO.class);
	// property constants
	public static final String BOOK_NAME = "bookName";
	public static final String BOOK_CONTENT = "bookContent";
	public static final String BOOK_TYPE_ID = "bookTypeId";
	public static final String BOOK_CLASS_INDEX = "bookClassIndex";

	protected void initDao() {
		// do nothing
	}

	public void save(Book transientInstance) {
		log.debug("saving Book instance");
		try {
			getHibernateTemplate().save(transientInstance);
			log.debug("save successful");
		} catch (RuntimeException re) {
			log.error("save failed", re);
			throw re;
		}
	}

	public void delete(Book persistentInstance) {
		log.debug("deleting Book instance");
		try {
			getHibernateTemplate().delete(persistentInstance);
			
			log.debug("delete successful");
		} catch (RuntimeException re) {
			log.error("delete failed", re);
			throw re;
		} finally{
			getHibernateTemplate().flush();
		}
	}

	public Book findById(java.lang.Integer id) {
		log.debug("getting Book instance with id: " + id);
		try {
			Book instance = (Book) getHibernateTemplate().get(
					"cn.com.model.Book", id);
			return instance;
		} catch (RuntimeException re) {
			log.error("get failed", re);
			throw re;
		}
	}

	public List findByExample(Book instance) {
		log.debug("finding Book instance by example");
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
		log.debug("finding Book instance with property: " + propertyName
				+ ", value: " + value);
		try {
			String queryString = "from Book as model where model."
					+ propertyName + "= ?";
			return getHibernateTemplate().find(queryString, value);
		} catch (RuntimeException re) {
			log.error("find by property name failed", re);
			throw re;
		}
	}

	public List findByBookName(Object bookName) {
		return findByProperty(BOOK_NAME, bookName);
	}

	public List findByBookContent(Object bookContent) {
		return findByProperty(BOOK_CONTENT, bookContent);
	}

	public List findByBookTypeId(Object bookTypeId) {
		return findByProperty(BOOK_TYPE_ID, bookTypeId);
	}

	public List findByBookClassIndex(Object bookClassIndex) {
		return findByProperty(BOOK_CLASS_INDEX, bookClassIndex);
	}

	public List findAll() {
		log.debug("finding all Book instances");
		try {
			String queryString = "from Book";
			return getHibernateTemplate().find(queryString);
		} catch (RuntimeException re) {
			log.error("find all failed", re);
			throw re;
		}
	}

	public Book merge(Book detachedInstance) {
		log.debug("merging Book instance");
		try {
			Book result = (Book) getHibernateTemplate().merge(detachedInstance);
			getHibernateTemplate().flush();
			log.debug("merge successful");
			return result;
		} catch (RuntimeException re) {
			log.error("merge failed", re);
			throw re;
		}
	}

	public void attachDirty(Book instance) {
		log.debug("attaching dirty Book instance");
		try {
			getHibernateTemplate().saveOrUpdate(instance);
			log.debug("attach successful");
		} catch (RuntimeException re) {
			log.error("attach failed", re);
			throw re;
		}
	}

	public void attachClean(Book instance) {
		log.debug("attaching clean Book instance");
		try {
			getHibernateTemplate().lock(instance, LockMode.NONE);
			log.debug("attach successful");
		} catch (RuntimeException re) {
			log.error("attach failed", re);
			throw re;
		}
	}

	public static BookDAO getFromApplicationContext(ApplicationContext ctx) {
		return (BookDAO) ctx.getBean("BookDAO");
	}
	
	public  List findByExampleFuzzy(Book book) {
	
		String queryString = "from Book where 1=1 ";
		
		List<Object> params = new ArrayList<Object>();
		
		if(book.getBookState() != null){
				
			queryString += "and bookState = ? ";
			params.add(book.getBookState());
		}
		if(book.getBookContent()!=null){
			
			queryString +="and bookContent like ? ";
			params.add("%"+book.getBookContent() + "%");
		}
		
		if(book.getBookType()!=null){
			if(book.getBookType().getBookTypeId() !=null){
				
				queryString +="and bookTypeId = ? ";
				params.add(book.getBookType().getBookTypeId());
			}
		}
		if(book.getBookName()!=null){
			
			queryString +="and bookName like ? ";
			params.add("%"+book.getBookName() + "%");
		}
		if(book.getBookClassIndex()!= null){
			
			queryString += "and bookClassIndex like ?";
			params.add("%"+book.getBookClassIndex() + "%");
		}
		List<Book> list = getHibernateTemplate().find(queryString, params.toArray());
		
		return list;
	}
}