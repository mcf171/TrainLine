package cn.com.action;

import java.io.InputStream;

import org.apache.struts2.ServletActionContext;

import cn.com.base.BaseActionSupport;

public class FileDownload extends BaseActionSupport{

	private String fileName;
	
	public FileDownload() {
		super();
		// TODO Auto-generated constructor stub
	}

	public InputStream getDownloadFile (){
		
		InputStream is = null;
		
		try {
			
			 is = ServletActionContext.getServletContext().getResourceAsStream(fileName);

		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
			
		}
		
		return is;
	}

	@Override  
    public String execute() throws Exception {  
          
        return SUCCESS;  
    }  
	
	public String getFileName() {
		return fileName;
	}

	public void setFileName(String fileName) {
		this.fileName = fileName;
	}
	
	
}
