package cn.com.util;

import java.util.List;

import org.hibernate.Query;
/***
 * DAO层辅助Util
 * @author Apache
 * @time 2014-3-8 22:18
 */
public class DAOUtil {

	private int page;
	private int limit;
	private int firstResult;
	private int maxResult;
	
	/**
	 * 获取第一个记录位置
	 * @author Apache
	 * @time 2014-3-8 22:17
	 * @return
	 */
	public int getFirstResult(){
		
		firstResult = (page-1)*limit;
		return firstResult; 
	}
	
	/**
	 * 获取最后一个位置
	 * @author Apache
	 * @time 2014-3-8 22:17
	 * @return
	 */
	public int getMaxResult(){
		
		maxResult = firstResult + limit - 1;
		maxResult = maxResult < 0 ? 0 : maxResult;
		return maxResult;
	}
	

	public DAOUtil(int page, int limit) {
		super();
		this.page = page;
		this.limit = limit;
		firstResult = (page-1)*limit;
		maxResult = firstResult + limit - 1;
	}
	
	

	public DAOUtil() {
		super();
	}

	public static Query setParam(Query query, List<Object> params){
		
		int index = 0;
		for(Object param : params){
			
			if(param instanceof Double){
			
				query.setDouble(index, (Double) param);
			}else if(param instanceof Integer){
				
				query.setInteger(index, (Integer) param);
			}else if(param instanceof String){
				
				query.setString(index, (String) param);
			}
			index ++;
		}
		
		return query;
	}

	public int getPage() {
		return page;
	}

	public void setPage(int page) {
		this.page = page;
	}

	public int getLimit() {
		return limit;
	}

	public void setLimit(int limit) {
		this.limit = limit;
	}
	
	
}
