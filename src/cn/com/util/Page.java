package cn.com.util;

import java.io.Serializable;


/**
 * @description 分页查询实体
 */
public class Page implements Serializable{

	private int allRows; // 一共有多少行记录
	private int numPerPage; // 一页显示多少行
	private int allPages; // 一共有多少页
	private int allRowsnum;
	
	private int first;
	private int last;
	private int up;
	private int down;
	private int pageNum;	//当前页
	


	public int getAllRows() {
		return allRows;
	}

	public void setAllRows(int allRows) {
		this.allRows = allRows;
	}

	public int getPageNum() {
		return pageNum;
	}

	public void setPageNum(int pageNum) {
		this.pageNum = pageNum;
	}

	public int getAllPages() {
		return allPages;
	}

	public void setAllPages(int allPages) {
		this.allPages = allPages;
	}


	public int getNumPerPage() {
		return numPerPage;
	}

	public void setNumPerPage(int numPerPage) {
		this.numPerPage = numPerPage;
	}

	public int getRownum() {
		return allRowsnum;
	}

	public void setRownum(int allRowsnum) {
		this.allRowsnum = allRowsnum;
	}
	
	//起始行
	public int startRow(){
		return (pageNum  -1)* numPerPage;
	}
	
	//设置 总页数和 当前也
	public void setTotalAndPage(int total){
		allRows = total;
		allPages = currentPage(total);
	}
	
	private int currentPage(int total){
		return (total % numPerPage == 0) ? (total / numPerPage)  : (total / numPerPage) + 1; 		
	}

	public int getFirst() {
		return first;
	}

	public void setFirst(int first) {
		this.first = first;
	}

	public int getLast() {
		return last;
	}

	public void setLast(int last) {
		this.last = last;
	}

	public int getUp() {
		return up;
	}

	public void setUp(int up) {
		this.up = up;
	}

	public int getDown() {
		return down;
	}

	public void setDown(int down) {
		this.down = down;
	}

	public int getCountPage() {
		return allPages;
	}

	public void setCountPage(int allPages) {
		this.allPages = allPages;
	}

	public int getNow() {
		return pageNum;
	}

	public void setNow(int pageNum) {
		this.pageNum = pageNum;
	}

	public int getRow() {
		return allRows;
	}

	public void setRow(int allRows) {
		this.allRows = allRows;
	}

	public int getSize() {
		return numPerPage;
	}

	public void setSize(int numPerPage) {
		this.numPerPage = numPerPage;
	}
	/**
	 * 初始化Page
	 * author:Apache
	 * modifyTime:2014/1/15 11:16
	 * @param page 当前页
	 * @param countRow 总记录数
	 * @param numPerPage 每页显示数
	 */
	public Page(int page, int countRow,int numPerPage) {
		this.allRows = countRow;
		this.pageNum = page;
		this.numPerPage = numPerPage;
		// 总页数的计算
		if (countRow % numPerPage == 0) {
			allPages = countRow / numPerPage;
		} else {
			allPages = countRow / numPerPage + 1;
		}

		// 判断上一页
		if (pageNum > 1) {
			up = pageNum - 1;
		} else {
			up = 1;
		}

		// 判断下一页
		if (pageNum < allPages) {
			down = pageNum + 1;
		} else {
			down = allPages;
		}

		first = 1;
		last = allPages;
		// 从第几条数据开始查询
//		allRows = (pageNum - 1) * numPerPage;
	}

	public Page() {
		super();
		// TODO Auto-generated constructor stub
	}
	
}
