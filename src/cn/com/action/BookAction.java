package cn.com.action;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import cn.com.base.BaseActionSupport;
import cn.com.model.Book;
import cn.com.model.User;
import cn.com.service.IBookService;

public class BookAction extends BaseActionSupport{

	private Map<String, Object> dataMap;
			
	private IBookService bookService; 

	public BookAction(){
		
		dataMap = new HashMap<String, Object>();
		
	}
	
	public String getBookList(){
		
		User user = (User) session.get("user");
		
		List<Book> list = bookService.getBookList();
		
		dataMap.put("bookList", list);
		
		return SUCCESS;
	}

	public Map<String, Object> getDataMap() {
		return dataMap;
	}

	public void setDataMap(Map<String, Object> dataMap) {
		this.dataMap = dataMap;
	}

	public IBookService getBookService() {
		return bookService;
	}

	public void setBookService(IBookService bookService) {
		this.bookService = bookService;
	}

	
	
	
}
