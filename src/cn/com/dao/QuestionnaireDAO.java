package cn.com.dao;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import java.util.Set;

import org.hibernate.HibernateException;
import org.hibernate.LockMode;
import org.hibernate.Query;
import org.hibernate.Session;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.orm.hibernate3.HibernateCallback;
import org.springframework.orm.hibernate3.support.HibernateDaoSupport;

import cn.com.model.Questionnaire;
import cn.com.model.User;
import cn.com.util.DAOUtil;

/**
 * A data access object (DAO) providing persistence and search support for
 * Questionnaire entities. Transaction control of the save(), update() and
 * delete() operations can directly support Spring container-managed
 * transactions or they can be augmented to handle user-managed Spring
 * transactions. Each of these methods provides additional information for how
 * to configure it for the desired type of transaction control.
 * 
 * @see cn.com.model.Questionnaire
 * @author MyEclipse Persistence Tools
 */

public class QuestionnaireDAO extends HibernateDaoSupport {
	private static final Logger log = LoggerFactory
			.getLogger(QuestionnaireDAO.class);
	// property constants
	public static final String QUESTIONNAIRE_TITLE = "questionnaireTitle";
	public static final String QUESTIONNAIRE_AUTHOR = "questionnaireAuthor";
	public static final String QUESTIONNAIRE_NUMBER = "questionnaireNumber";
	public static final String OPEN = "open";

	protected void initDao() {
		// do nothing
	}

	public int save(Questionnaire transientInstance) {
		log.debug("saving Questionnaire instance");
		int questionnaireId;
		try {
			questionnaireId = (Integer) getHibernateTemplate().save(transientInstance);
			log.debug("save successful");
		} catch (RuntimeException re) {
			log.error("save failed", re);
			throw re;
		}
		return questionnaireId;
	}

	public void delete(Questionnaire persistentInstance) {
		log.debug("deleting Questionnaire instance");
		try {
			this.getHibernateTemplate().delete(persistentInstance);
			log.debug("delete successful");
		} catch (RuntimeException re) {
			log.error("delete failed", re);
			throw re;
		}
	}

	public Questionnaire findById(java.lang.Integer id) {
		log.debug("getting Questionnaire instance with id: " + id);
		try {
			Questionnaire instance = (Questionnaire) getHibernateTemplate()
					.get("cn.com.model.Questionnaire", id);
			return instance;
		} catch (RuntimeException re) {
			log.error("get failed", re);
			throw re;
		}
	}

	public List findByExample(Questionnaire instance) {
		log.debug("finding Questionnaire instance by example");
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
		log.debug("finding Questionnaire instance with property: "
				+ propertyName + ", value: " + value);
		try {
			String queryString = "from Questionnaire as model where model."
					+ propertyName + "= ?";
			return getHibernateTemplate().find(queryString, value);
		} catch (RuntimeException re) {
			log.error("find by property name failed", re);
			throw re;
		}
	}

	public List findByQuestionnaireTitle(Object questionnaireTitle) {
		return findByProperty(QUESTIONNAIRE_TITLE, questionnaireTitle);
	}

	public List findByQuestionnaireAuthor(Object questionnaireAuthor) {
		return findByProperty(QUESTIONNAIRE_AUTHOR, questionnaireAuthor);
	}

	public List findByQuestionnaireNumber(Object questionnaireNumber) {
		return findByProperty(QUESTIONNAIRE_NUMBER, questionnaireNumber);
	}

	public List findByOpen(Object open) {
		return findByProperty(OPEN, open);
	}

	public List findAll() {
		log.debug("finding all Questionnaire instances");
		try {
			String queryString = "from Questionnaire";
			return getHibernateTemplate().find(queryString);
		} catch (RuntimeException re) {
			log.error("find all failed", re);
			throw re;
		}
	}

	public Questionnaire merge(Questionnaire detachedInstance) {
		log.debug("merging Questionnaire instance");
		try {
			Questionnaire result = (Questionnaire) getHibernateTemplate()
					.merge(detachedInstance);
			log.debug("merge successful");
			return result;
		} catch (RuntimeException re) {
			log.error("merge failed", re);
			throw re;
		}
	}

	public void attachDirty(Questionnaire instance) {
		log.debug("attaching dirty Questionnaire instance");
		try {
			getHibernateTemplate().saveOrUpdate(instance);
			log.debug("attach successful");
		} catch (RuntimeException re) {
			log.error("attach failed", re);
			throw re;
		}
	}

	public void attachClean(Questionnaire instance) {
		log.debug("attaching clean Questionnaire instance");
		try {
			getHibernateTemplate().lock(instance, LockMode.NONE);
			log.debug("attach successful");
		} catch (RuntimeException re) {
			log.error("attach failed", re);
			throw re;
		}
	}

	public static QuestionnaireDAO getFromApplicationContext(
			ApplicationContext ctx) {
		return (QuestionnaireDAO) ctx.getBean("QuestionnaireDAO");
	}

	/**
	 * Questionnare，通过模糊查询
	 * @author 2014-3-10 12:14
	 * @param questionnaire
	 * @return
	 */
	public List<Questionnaire> findByExampleFuzzy(Questionnaire questionnaire) {
		
		List<Object> params = new ArrayList<Object>();
		
		String queryString = getParamList(params ,questionnaire);
		
		List<Questionnaire> userList = getHibernateTemplate().find(queryString,params.toArray());
		
		return userList;
	}

	/**
	 * 通过分页查询Questionnaire
	 * @author Apache
	 * @time 2014-3-10 12:15
	 * @param firstResults
	 * @param maxResults
	 * @param questionnaire
	 * @return
	 */
	public List<Questionnaire> findByPage(final int firstResults,final int maxResults,final Questionnaire questionnaire) {
		// TODO Auto-generated method stub

		List<Questionnaire> list= this.getHibernateTemplate().executeFind(new HibernateCallback<List<Questionnaire>>() {

			public List<Questionnaire> doInHibernate(Session session)
					throws HibernateException, SQLException {
				// TODO Auto-generated method stub
				
				List<Object> params = new ArrayList<Object>();
				
				String queryString = getParamList(params ,questionnaire);
				
					Query query  = session.createQuery(queryString);
					query = DAOUtil.setParam(query, params);
					query.setFirstResult(firstResults);
					query.setMaxResults(maxResults);
					
				return query.list();
			}
			
		});
		
		return list;
	}


	/**
	 * 初始化参数List以及返回Query字符串
	 * @author Apache
	 * @time 2014-3-8
	 * @param params 已经new 的List
	 * @param user
	 * @return
	 */
	public String getParamList(List<Object> params, Questionnaire questionnaire){
		
		String hql ="from Questionnaire where 1=1 ";
	
		if(questionnaire != null){
		
			
			if(questionnaire.getQuestionnaireNumber()!=null){
				hql+=" and questionnaireNumber like '%"+questionnaire.getQuestionnaireNumber()+"%' ";
			}
			if(questionnaire.getQuestionnaireTitle()!=null)
			{
				hql+=" and questionnaireTitle like '%"+questionnaire.getQuestionnaireTitle()+"%' ";
			}
			if(questionnaire.getQuestionnaireAuthor()!=null)
			{
				hql +=" and questionnaireAuthor like '%"+questionnaire.getQuestionnaireAuthor()+"%' ";
			}
			if(questionnaire.getOpen()!=null){
				hql +=" and open = "+questionnaire.getOpen();
			}
		}
		return hql;
	}
	
}
