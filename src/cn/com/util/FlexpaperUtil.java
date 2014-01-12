package cn.com.util;

import java.io.BufferedReader;
import java.io.File;
import java.io.IOException;
import java.io.InputStreamReader;

public class FlexpaperUtil {
	
	public static boolean converterPDFToSWF(String physicalPath,String pdfName, String swfName){
		
		boolean flag = false;
		
		pdfName = physicalPath + "upload\\" + pdfName;
		swfName = physicalPath + "upload\\" + swfName;
		
		 File pdfFile = new File(pdfName);
         if(pdfFile.exists()) {
            
             //如果PDF文件不存在则退出
        	 //f:/swftools/pdf2swf -t f:/1.pdf -s languagedir=f:/xpdf-chinese-simplified -s flashoversion=9 -o f:/test.swf
        	 String swfToolsPath = physicalPath + "swftools/pdf2swf";
        	 String xpdf_chinese_simplified = physicalPath + "/xpdf-chinese-simplified";
        	 String cmd = swfToolsPath +" -t " + pdfName + " -s languagedir=" + xpdf_chinese_simplified + " -s flashoversion=9 -o " + swfName + " -T 9";
             executeCmdFlash(cmd);
             flag = true;
         }
		return flag;
	}
	
public static boolean converterPDFToSWF(String physicalPath,String pdfName){
		
		String swfName = pdfName.substring(0,pdfName.indexOf(".")) + ".swf";
		
		return  converterPDFToSWF(physicalPath, pdfName, swfName);
	}
	/**
     * 运行可执行文件
     *
     * @param cmd
     * @return String
     */
    public static synchronized void executeCmdFlash(String cmd) {

    	try{
    		//Process pro=Runtime.getRuntime().exec("f:/swftools/pdf2swf -t f:/1.pdf -s languagedir=f:/xpdf-chinese-simplified -s flashoversion=9 -o f:/test.swf");
    		Process pro=Runtime.getRuntime().exec(cmd);
    		    BufferedReader br = new BufferedReader(new InputStreamReader(pro .getInputStream()));
    		     String msg = null; 
    		    while ((msg = br.readLine()) != null) {      System.out.println(msg);     } 
    		   } catch (IOException exception) {
    			   exception.printStackTrace();
    		   }
    }
}
