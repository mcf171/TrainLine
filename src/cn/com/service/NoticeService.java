package cn.com.service;

import java.sql.Timestamp;
import java.util.List;

import cn.com.dao.NoticeDAO;
import cn.com.dao.NoticetypeDAO;
import cn.com.model.Notice;
import cn.com.model.Noticetype;
import cn.com.util.Page;

public class NoticeService {
 
	private NoticeDAO noticeDAO;
	private NoticetypeDAO noticeTypeDAO;
	
	public NoticetypeDAO getNoticeTypeDAO() {
		return noticeTypeDAO;
	}

	public void setNoticeTypeDAO(NoticetypeDAO noticeTypeDAO) {
		this.noticeTypeDAO = noticeTypeDAO;
	}

	public NoticeDAO getNoticeDAO() {
		return noticeDAO;
	}

	public void setNoticeDAO(NoticeDAO noticeDAO) {
		this.noticeDAO = noticeDAO;
	}

	public List getAllNotice(){
		return noticeDAO.findAll();
	}
	
	public List getAllNoticeType(){
		return noticeTypeDAO.findAll();
	}
	public List findByNoticeExample(Notice notice){
		return noticeDAO.findByNoticeExample(notice);
	}
	
	/**
	 * 删除Notice
	 * @author Apache
	 * @time 2014-3-1 15:56
	 * @param notice
	 */
	public void delete(Notice notice){
		
		noticeDAO.delete(notice);
	}
	
	/**
	 * 更新Notice
	 * @author Apache
	 * @time 2014-3-1 15:57
	 * @param notice
	 */
	public void update(Notice notice){
		
		noticeDAO.merge(notice);
	}
	
	/**
	 * 获取前一个Notice
	 * author: Apache
	 * time:2014-1-13 10:00
	 * @notice 需要查询的Notice
	 * @return 查询Notice的前一个Notice，如果返回Null则不存在上一个Notice
	 */
	public Notice getPreNotice(Notice notice){
		
		Notice search = new Notice();
		search.setNoticetype(notice.getNoticetype());
		List<Notice> list = noticeDAO.findByNoticeExample(search);
		int index =list.indexOf(notice);
		
		search = index == 0 ? null : list.get(index-1);
		
		return search;
	}
	/**
	 * 获取下一个Notice
	 * author: Apache
	 * time:2014-1-13 10:00
	 * @notice 需要查询的Notice
	 * @return 查询Notice的下一个Notice，如果返回Null则不存在下一个Notice
	 */
	public Notice getLastNotice(Notice notice){
		
		Notice search = new Notice();
		search.setNoticetype(notice.getNoticetype());
		List<Notice> list = noticeDAO.findByNoticeExample(search);
		int index =list.indexOf(notice);
		
		search = index == list.size()-1 ? null : list.get(index+1);
		
		return search;
	}

	/**
	 * 获取前台课程公告通知
	 * @return
	 */
	public List<Notice> findNormalKeChengGongGao(){
		
		//return noticeDAO.findByProperty("noticetype.noticeTypeId", 1);
	
		Notice notice = new Notice();
		Noticetype noticeType = new Noticetype();
		noticeType.setNoticeTypeId(1);
		notice.setNoticetype(noticeType);
		return noticeDAO.findByNoticeExample(notice);
		
	}
	
	/**
	 * 获取前台考试公告通知
	 * @return
	 */
	public List<Notice> findNormalKaoShiGongGao(){
		
		//return noticeDAO.findByProperty("noticetype.noticeTypeId", 2);
		Notice notice = new Notice();
		Noticetype noticeType = new Noticetype();
		noticeType.setNoticeTypeId(2);
		notice.setNoticetype(noticeType);
		return noticeDAO.findByNoticeExample(notice);
	}
	
	public Page getNoticeByPage(List list,Notice notice,int  pageNum,int length){
		
		int count = noticeDAO.getCount(notice);
		Page page = new Page(pageNum, count, length);
		list.addAll(noticeDAO.findByNoticeExample(notice, page.startRow(), length));
		
		return page;
	}
	
	/**
	 * 通过获取Notice
	 * author: Apache
	 * time:2014-1-12 23:00
	 * @return
	 */
	public Notice getNoticeById(int noticeId){
		
		return noticeDAO.findById(noticeId);
	}
	
	public void addNotice(Notice notice){
		noticeDAO.save(notice);
	}
	
	public Noticetype findNoticetypeById(int id){
		return noticeTypeDAO.findById(id);
	}
	
	public List findByNoticeTime(Timestamp fromTime, Timestamp toTime){
		return noticeDAO.findByNoticeTime(fromTime, toTime);
	}
	
}
