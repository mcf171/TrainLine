package cn.com.dao;

import java.util.List;

import org.springframework.orm.hibernate3.support.HibernateDaoSupport;

import cn.com.model.Book;
import cn.com.model.Message;

public class MessageDAO extends HibernateDaoSupport{

	public void save(Message transientInstance) {
			
		getHibernateTemplate().save(transientInstance);
		getHibernateTemplate().flush();
	}
	
	/**
	 * 通过Example查询Message
	 * author:Apache
	 * time:2014-1-31 23:06
	 * @param example
	 * @return
	 */
	public List<Message> findByExample(Message example){
		
		return getHibernateTemplate().findByExample(example);
	}
	
	/**
	 * 通过Message删除Message
	 * author:Apache
	 * time:2014-1-31 23:06
	 * @param message
	 */
	public void deleteMessage(Message message){
		
		this.getHibernateTemplate().clear();
		this.getHibernateTemplate().delete(message);
		this.getHibernateTemplate().flush();
	}
	
} 
