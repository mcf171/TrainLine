package cn.com.action;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpSession;

import org.hyperic.sigar.CpuInfo;
import org.hyperic.sigar.CpuPerc;
import org.hyperic.sigar.Sigar;
import org.hyperic.sigar.SigarException;

import cn.com.model.MySystem;

import com.opensymphony.xwork2.ActionSupport;

public class GetSysImfoAction extends ActionSupport{
        
    private List<MySystem> system = new ArrayList<MySystem>();
	
	public String getSystemPage() throws Exception { 
		System.out.println("测试");
		return SUCCESS;
	}
	
	public List<MySystem> getSystem() {
		return system;
	}

	public void setSystem(List<MySystem> system) {
		this.system = system;
	}

	public  String cpu() throws SigarException {
        
        /*
         * 获取使用sigar需要将sigar包导入的位置！
         */
        //String str=System.getProperty("java.library.path");
        for(int j=0;j<=6;j++){
        	Sigar sigar = new Sigar();
        	 CpuInfo infos[] = sigar.getCpuInfoList();
             CpuPerc cpuList[] = null;
             cpuList = sigar.getCpuPercList();
             CpuPerc myCpu = cpuList[0];
             MySystem mysystem = new MySystem();
             mysystem.setCoreCount(infos.length);
             mysystem.setCpuLiyonglv( CpuPerc.format(myCpu.getUser()));
             System.out.println(CpuPerc.format(cpuList[0].getUser()));
             this.system.add(mysystem);
        }

       
        return "cpu";
    }
	
	

	

	
}
