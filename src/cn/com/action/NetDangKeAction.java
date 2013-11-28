package cn.com.action;

import java.io.File;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import cn.com.base.BaseActionSupport;
import cn.com.model.Book;
import cn.com.model.Booktype;
import cn.com.service.LiberaryService;
import cn.com.util.BookStateConstant;
import cn.com.util.UploadUtil;
//test
public class NetDangKeAction extends BaseActionSupport{
	
	
	public String showNetDangKePage(){
		
		return this.SUCCESS;
	}
}
