package cn.com.util;

import java.io.BufferedReader;
import java.io.File;
import java.io.IOException;
import java.io.InputStreamReader;

public class FlexpaperUtil {
	
	public static boolean converterPDFToSWF(String physicalPath,String savePath, String pdfName, String swfName) throws IOException{
		
		boolean flag = false;
		
		pdfName = physicalPath  + savePath + pdfName;
		swfName = physicalPath +savePath+ swfName;
		
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
	
	/**
	 * 增加doc 等Office 文档先转换为Pdf
	 * @author Apache
	 * @time 2014-3-7 23:37
	 * @param physicalPath
	 * @param pdfName
	 * @return
	 * @throws IOException 
	 */
public static boolean converterDocumentToSWF(String physicalPath, String savePath,String docName) throws IOException{

		boolean flag = false;
		String pdfName = "";
		String physicalSavePath = physicalPath+ savePath;
		if(!docName.contains(".pdf")){
		
		pdfName = docName.substring(0,docName.indexOf(".")) + ".pdf";
		ConvertDocumentToPDF.office2PDF(physicalSavePath, docName, pdfName);
		
	
	}else{
		
		pdfName = docName;
	}
	String swfName = pdfName.substring(0,docName.indexOf(".")) + ".swf";
	
	flag = converterPDFToSWF(physicalPath, savePath,pdfName, swfName);
	
	File file = new File(physicalPath + GlobalConstant.SAVEPATH_BOOk + docName);
	
	if(file.exists()){
		
		file.delete();
	}
	
	file = new File(physicalSavePath +  GlobalConstant.SAVEPATH_BOOk + pdfName);
	
	if(file.exists()){
		
		file.delete();
	}
	
		return  flag;
	}

	/**
     * 运行可执行文件
     *
     * @param cmd
     * @return String
	 * @throws IOException 
     */
    public static synchronized void executeCmdFlash(String cmd) throws IOException {

    		//Process pro=Runtime.getRuntime().exec("f:/swftools/pdf2swf -t f:/1.pdf -s languagedir=f:/xpdf-chinese-simplified -s flashoversion=9 -o f:/test.swf");
    		Process pro=Runtime.getRuntime().exec(cmd);
    		    BufferedReader br = new BufferedReader(new InputStreamReader(pro .getInputStream()));
    		     String msg = null; 
    		    while ((msg = br.readLine()) != null) {      System.out.println(msg);     } 
    }
}
