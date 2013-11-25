package cn.com.util;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;

import org.apache.struts2.ServletActionContext;

public class UploadUtil {

	 // 封装上传文件域的属性
    private File flie;
    // 封装上传文件类型的属性
    private String flieContentType;
    // 封装上传文件名的属性
    private String flieFileName;
    // 接受依赖注入的属性
    private String savePath;
    
    private FileOutputStream fos ;
    private FileInputStream fis ;
    
    public void upload() throws Exception{
       
  
            // 建立文件输出流
            System.out.println(getSavePath());
            fos = new FileOutputStream(getServerSavePath() + "\\" + getFlieFileName());
            // 建立文件上传流
            fis = new FileInputStream(getFlie());
            byte[] buffer = new byte[1024];
            int len = 0;
            while ((len = fis.read(buffer)) > 0) {
                fos.write(buffer, 0, len);
            }
        
    }

    public String getSavePath() {
		
		return this.savePath;
	}
    
    public String getServerSavePath(){
    	
    	return  ServletActionContext.getServletContext().getRealPath(savePath);
    }

	public void setSavePath(String savePath) {
        this.savePath = savePath;
    }

    public File getFlie() {
        return flie;
    }

    public void setFlie(File flie) {
        this.flie = flie;
    }

    public String getFlieContentType() {
        return flieContentType;
    }

    public void setFlieContentType(String flieContentType) {
        this.flieContentType = flieContentType;
    }

    public String getFlieFileName() {
        return flieFileName;
    }

    public void setFlieFileName(String flieFileName) {
        this.flieFileName = flieFileName;
    }

    public void close() {
        if (fis != null) {
            try {
                fis.close();
            } catch (IOException e) {
                System.out.println("FileInputStream关闭失败");
                e.printStackTrace();
            }
        }
        if (fos != null) {
            try {
                fos.close();
            } catch (IOException e) {
                System.out.println("FileOutputStream关闭失败");
                e.printStackTrace();
            }
        }
    }

	public FileOutputStream getFos() {
		return fos;
	}

	public void setFos(FileOutputStream fos) {
		this.fos = fos;
	}

	public FileInputStream getFis() {
		return fis;
	}

	public void setFis(FileInputStream fis) {
		this.fis = fis;
	}

	
}
