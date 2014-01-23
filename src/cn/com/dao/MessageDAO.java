package cn.com.dao;

import org.springframework.orm.hibernate3.support.HibernateDaoSupport;

import cn.com.model.Book;
import cn.com.model.Message;

public class MessageDAO extends HibernateDaoSupport{

	public void save(Message transientInstance) {
			
		getHibernateTemplate().save(transientInstance);
		getHibernateTemplate().flush();
	}
}
