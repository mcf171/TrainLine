package cn.com.action;

import java.util.ArrayList;
import java.util.List;

import org.hyperic.sigar.CpuInfo;
import org.hyperic.sigar.CpuPerc;
import org.hyperic.sigar.FileSystem;
import org.hyperic.sigar.FileSystemUsage;
import org.hyperic.sigar.Mem;
import org.hyperic.sigar.NetInterfaceConfig;
import org.hyperic.sigar.Sigar;
import org.hyperic.sigar.SigarException;

import cn.com.model.MySystem;

import com.opensymphony.xwork2.ActionSupport;

public class GetSysImfoAction extends ActionSupport{
        
    private List<MySystem> system = new ArrayList<MySystem>();
	
	public String getSystemPage() throws Exception { 
		System.out.println("测试");
		String str=System.getProperty("java.library.path");
		System.out.println(str);
		return SUCCESS;
	}
	
	public List<MySystem> getSystem() {
		return system;
	}

	public void setSystem(List<MySystem> system) {
		this.system = system;
	}

	/*
	 * 获取cpu的相关信息
	 */
	public  String cpu() throws Exception {
        
       
        //String str=System.getProperty("java.library.path");
        for(int j=0;j<=6;j++){
        	 Sigar sigar = new Sigar();
        	 CpuInfo infos[] = sigar.getCpuInfoList();
             CpuPerc cpuList[] = null;
             cpuList = sigar.getCpuPercList();
             CpuPerc myCpu = cpuList[0];
             MySystem mysystem = new MySystem();
             mysystem.setCoreCount(infos.length);
             mysystem.setCacheSize(infos[0].getCacheSize());
             mysystem.setModel(infos[0].getModel());
             mysystem.setVendor(infos[0].getVendor());
             mysystem.setMhz(infos[0].getMhz());
             mysystem.setSockets(infos[0].getTotalSockets());
             mysystem.setCpuLiyonglv( CpuPerc.format(myCpu.getCombined()));
             this.system.add(mysystem);
        }

       
        return "cpu";
    }
	
	/*
	 * 获得内存的相关信息
	 */
	public String memory() throws SigarException{
		Sigar sigar = new Sigar();
		for(int j=0;j<=6;j++){
			Mem memory = sigar.getMem();
			MySystem mysystem = new MySystem();
			mysystem.setTotalMemory(memory.getTotal()/1048576L);
			mysystem.setUsedmemory(memory.getUsed()/1048576L);
			mysystem.setFreeMemory(memory.getFree()/1048576L);
			mysystem.setUsedPercent(Math.round(memory.getUsedPercent())); 
			mysystem.setFreePercent(Math.round(memory.getFreePercent()));
			mysystem.setFlags(memory.getActualUsed());
			this.system.add(mysystem);			
		}
		return "memory";
	}
	
	/*
	 * 获取文件系统的相关信息
	 */
	public String disk() throws Exception{
		Sigar sigar = new Sigar();
		FileSystem fslist[] = sigar.getFileSystemList();
		try {
				
			for (int i = 0; i < fslist.length; i++) {
				FileSystem fs = fslist[i];
				MySystem mysystem = new MySystem();
				mysystem.setDevName(fs.getDevName());
				mysystem.setDirName(fs.getDirName());
				mysystem.setSysTypeName(fs.getSysTypeName());
				mysystem.setTypeName(fs.getTypeName());
				mysystem.setFlags(fs.getFlags());
				
	            switch (fs.getType()) {
	            case 0: // TYPE_UNKNOWN ：未知
	                break;
	            case 1: // TYPE_NONE
	                break;
	            case 2: // 本地硬盘
	            	FileSystemUsage usage = new FileSystemUsage();
		            usage = sigar.getFileSystemUsage(fs.getDirName());
	                // 文件系统总大小
	                mysystem.setTotalDisk(usage.getTotal()/1048576L);
	                // 文件系统剩余大小
	                mysystem.setFreeDisk(usage.getFree()/1048576L);
	                // 文件系统可用大小
	                mysystem.setAvailDisk(usage.getAvail()/1048576L);
	                // 文件系统已经使用量
	                mysystem.setUsedDisk(usage.getUsed());
	                double usePercent = usage.getUsePercent() * 100D;
	                // 文件系统资源的利用率
	                mysystem.setUserPercent(usePercent);
	                this.system.add(mysystem);
	                break;
	            case 3:// TYPE_NETWORK ：网络
	                break;
	            case 4:// TYPE_RAM_DISK ：闪存
	                break;
	            case 5:// TYPE_CDROM ：光驱
	                break;
	            case 6:// TYPE_SWAP ：页面交换
	                break;
	            }
				
			}
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
			
		}
		return "disk";
	}

	/*
	 * 获取网络的相关信息
	 */
	public String net() throws Exception{
		Sigar sigar = null;
        sigar = new Sigar();
        String[] ifaces = sigar.getNetInterfaceList();
        for (int i = 0; i < ifaces.length; i++) {
        	MySystem mysystem = new MySystem();
            NetInterfaceConfig cfg = sigar.getNetInterfaceConfig(ifaces[i]);
           // if (NetFlags.LOOPBACK_ADDRESS.equals(cfg.getAddress()) || (cfg.getFlags() & NetFlags.IFF_LOOPBACK) != 0
            //        || NetFlags.NULL_HWADDR.equals(cfg.getHwaddr())) {
             //   continue;
           // }
            mysystem.setDeviceName(ifaces[i]);
            mysystem.setAddress(cfg.getAddress());
            mysystem.setBroadCast(cfg.getBroadcast());
            mysystem.setHwAddr(cfg.getHwaddr());
            mysystem.setNetMsk(cfg.getNetmask());
            mysystem.setDescription(cfg.getDescription());
            this.system.add(mysystem);
        }
		return "net";
	}

	
}
