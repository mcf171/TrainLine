package cn.com.dao;

import java.util.List;

import org.springframework.context.ApplicationContext;
import org.springframework.orm.hibernate3.support.HibernateDaoSupport;

import cn.com.model.PeiXunRenYuanBaoMingBiao;

/**
 * A data access object (DAO) providing persistence and search support for PeiXunRenYuanBaoMingBiao
 * entities. Transaction control of the save(), update() and delete() operations
 * can directly support Spring container-managed transactions or they can be
 * augmented to handle user-managed Spring transactions. Each of these methods
 * provides additional information for how to configure it for the desired type
 * of transaction control.
 * 
 * @see cn.com.model.PeiXunRenYuanBaoMingBiao
 * @author MyEclipse Persistence Tools
 */
public class PeiXunRenYuanBaoMingBiaoDAO extends HibernateDaoSupport {
	

	protected void initDao() {
		// do nothing
	}

	public List findAll(){
		String queryString = "from PeiXunRenYuanBaoMingBiao";
		return getHibernateTemplate().find(queryString);
	}
	public void save(PeiXunRenYuanBaoMingBiao transientInstance) {
			getHibernateTemplate().save(transientInstance);
	}

	public void delete(PeiXunRenYuanBaoMingBiao persistentInstance) {
			getHibernateTemplate().delete(persistentInstance);
			getHibernateTemplate().flush();
	}

	public PeiXunRenYuanBaoMingBiao findById(java.lang.Integer id) {
			PeiXunRenYuanBaoMingBiao instance = (PeiXunRenYuanBaoMingBiao) getHibernateTemplate().get(
					"cn.com.model.PeiXunRenYuanBaoMingBiao", id);
			return instance;
	}

	public PeiXunRenYuanBaoMingBiao merge(PeiXunRenYuanBaoMingBiao detachedInstance) {
			PeiXunRenYuanBaoMingBiao result = (PeiXunRenYuanBaoMingBiao) getHibernateTemplate().merge(detachedInstance);
			getHibernateTemplate().flush();
			return result;
	}

	public static PeiXunRenYuanBaoMingBiaoDAO getFromApplicationContext(ApplicationContext ctx) {
		return (PeiXunRenYuanBaoMingBiaoDAO) ctx.getBean("PeiXunRenYuanBaoMingBiaoDAO");
	}
	
}