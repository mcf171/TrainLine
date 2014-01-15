package cn.com.dao;

import java.sql.SQLException;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;

import org.hibernate.HibernateException;
import org.hibernate.LockMode;
import org.hibernate.Query;
import org.hibernate.Session;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.orm.hibernate3.HibernateCallback;
import org.springframework.orm.hibernate3.support.HibernateDaoSupport;

import cn.com.model.Notice;

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
	private static final Logger log = LoggerFactory.getLogger(NoticeDAO.class);
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

	public List findByNoticeTime(Timestamp fromTime,Timestamp toTime){
		String queryString = "from Notice where 1 = 1 and noticeTime between ? and ?";
		List<Object> params = new ArrayList<Object>();
		params.add(fromTime);
		params.add(toTime);
		List <Notice> NoticeList = getHibernateTemplate().find(queryString, params.toArray());
		return NoticeList;
	}
	/**
	 * 返回通过Notice Example的查询结果，并按照发布时间降序排序
	 * author: Apache
	 * modifyTime:2014-1-13 10:30
	 * @notice 需要查询的Notice
	 * @return 返回通过Notice Example的查询结果，并按照发布时间降序排序
	 */
	public List findByNoticeExample(Notice notice){
		String queryString = "from Notice where 1 = 1 ";
		List<Object> params = new ArrayList<Object>();
		if(notice.getNoticeId()!=null&&notice.getNoticeId()!=0){
			queryString+="and noticeId=? ";
			params.add(notice.getNoticeId());
		}
		if(notice.getNoticetype().getNoticeTypeId()!=0){
			queryString+="and noticeTypeId=? ";
			params.add(notice.getNoticetype().getNoticeTypeId());	
		}
		if(notice.getNoticeContent()!=null){
			queryString+="and noticeContent like ? ";
			params.add("%"+notice.getNoticeContent() + "%");
		}
		queryString += " order by noticeTime desc";
		//getHibernateTemplate().executeFind(action)
		List <Notice> NoticeList = getHibernateTemplate().find(queryString, params.toArray());
		return NoticeList;
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
	/**
	 * 返回通过Notice Example的查询结果并根据分页，并按照发布时间降序排序
	 * author: Apache
	 * modifyTime:2014-1-13 10:30
	 * @notice 需要查询的Notice
	 * @offset 起始点
	 * @length 页号
	 * @return 返回通过Notice Example的查询结果，并按照发布时间降序排序
	 */
	public List findByNoticeExample(Notice notice,int offset, int length){
		String queryString = "from Notice where 1 = 1 ";
		List<Object> params = new ArrayList<Object>();
		if(notice.getNoticeId()!=null&&notice.getNoticeId()!=0){
			queryString+="and noticeId=? ";
			params.add(notice.getNoticeId());
		}
		if(notice.getNoticetype().getNoticeTypeId()!=0){
			queryString+="and noticeTypeId=? ";
			params.add(notice.getNoticetype().getNoticeTypeId());	
		}
		if(notice.getNoticeContent()!=null){
			queryString+="and noticeContent like ? ";
			params.add("%"+notice.getNoticeContent() + "%");
		}
		queryString += " order by noticeTime desc";
		//getHibernateTemplate().executeFind(action)
		List <Notice> NoticeList = getNoticeByExampleByPage(queryString,offset,length, params);
		return NoticeList;
		
	}
	/**
	 * 通过Notice 返回总共有多少条
	 * @param notice
	 * @return 返回总共有多少记录数
	 */
	public int getCount(Notice notice){
		int count = 0;
		List list = this.findByNoticeExample(notice);
		count = list.size();
		return count;
	}
	/**
	 * 返回通过hql的查询结果并根据分页，并按照发布时间降序排序
	 * author: Apache
	 * modifyTime:2014-1-15 11:00
	 * @hql 需要查询的hql
	 * @offset 起始点
	 * @length 页号
	 * @return 返回通过Notice Example的查询结果
	 */
	public List getNoticeByExampleByPage(final String hql, final int offset,     
		    final int length,final List<Object> params) {     
		   List list = getHibernateTemplate().executeFind(new HibernateCallback() {     
		    public Object doInHibernate(Session session)     
		      throws HibernateException, SQLException {     
		     Query query = session.createQuery(hql);     
		     
		     for(int i = 0; i< params.size(); i++){
		    	 
		    	 if(params.get(i) instanceof Integer){
		    		 query.setInteger(i,(Integer) params.get(i));
		    	 }else if (params.get(i) instanceof Double){
		    		 query.setDouble(i,(Double) params.get(i));
		    	 }else if(params.get(i) instanceof String ){
		    		 query.setString(i,(String) params.get(i));
		    	 }
		     }
		     
		     query.setFirstResult(offset);     
		     query.setMaxResults(length);     
		     List list = query.list();     
		     return list;     
		    }     
		   });     
		   return list;     
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