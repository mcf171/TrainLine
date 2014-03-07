package cn.com.service;

import java.util.List;

import cn.com.dao.PeiXunRenYuanBaoMingBiaoDAO;
import cn.com.model.PeiXunRenYuanBaoMingBiao;

public class ReportService {

	private PeiXunRenYuanBaoMingBiaoDAO peiXunRenYuanBaoMingBiaoDAO;

	
	/**
	 * 通过Id获取培训人员报名
	 * @author Apache
	 * @time 2014-3-2 12:30
	 * @param peiXunRenYuanBaoMingBiaoId
	 * @return
	 */
	public PeiXunRenYuanBaoMingBiao getPeiXunRenYuanBaoMingBiaoById(int peiXunRenYuanBaoMingBiaoId){
		
		PeiXunRenYuanBaoMingBiao peiXunRenYuanBaoMingBiao = peiXunRenYuanBaoMingBiaoDAO.findById(peiXunRenYuanBaoMingBiaoId);
		return peiXunRenYuanBaoMingBiao;
	}
	/**
	 * 增加培训人员报名表
	 * @author Apache
	 * @time 2014-3-2 11:00
	 * @param peiXunRenYuanBaoMingBiao
	 */
	public void addPeiXunRenYuanBaoMingBiao(PeiXunRenYuanBaoMingBiao peiXunRenYuanBaoMingBiao){
		
		try {
		
			peiXunRenYuanBaoMingBiaoDAO.save(peiXunRenYuanBaoMingBiao);
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
			throw new RuntimeException();
		}
		
	}
	
	/**
	 * 获取所有培训人员报名表
	 * @author Apache
	 * @time 2014-3-2 11:19
	 * @return
	 */
	public List getPeiXunRenYuanBaoMingBiaoList(){
		
		return peiXunRenYuanBaoMingBiaoDAO.findAll();
	}
	
	/**
	 * 删除培训人员报名表
	 * @author Apache
	 * @time 2014-3-2 12:12
	 * @param peiXunRenYuanBaoMingBiao
	 */
	public void deletePeiXunRenYuanBaoMingBiao(PeiXunRenYuanBaoMingBiao peiXunRenYuanBaoMingBiao){
		
		peiXunRenYuanBaoMingBiaoDAO.delete(peiXunRenYuanBaoMingBiao);
	}
	
	/**
	 * 更新培训人员报名表
	 * @author Apache
	 * @time 2014-3-2 12:15
	 * @param peiXunRenYuanBaoMingBiao
	 */
	public void updatePeiXunRenYuanBaoMingBiao(PeiXunRenYuanBaoMingBiao peiXunRenYuanBaoMingBiao){
		
		peiXunRenYuanBaoMingBiaoDAO.merge(peiXunRenYuanBaoMingBiao);
	}
	public PeiXunRenYuanBaoMingBiaoDAO getPeiXunRenYuanBaoMingBiaoDAO() {
		return peiXunRenYuanBaoMingBiaoDAO;
	}

	public void setPeiXunRenYuanBaoMingBiaoDAO(
			PeiXunRenYuanBaoMingBiaoDAO peiXunRenYuanBaoMingBiaoDAO) {
		this.peiXunRenYuanBaoMingBiaoDAO = peiXunRenYuanBaoMingBiaoDAO;
	}
	
	
	
}
