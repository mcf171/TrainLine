package cn.com.model;

public class MySystem {

	/*
	 * 关于cpu
	 * 
	 *利用率
	 *内核数
	 *供应厂商
	 *缓存大小
	 *类型
	 *运行速度
	 */
	private String cpuLiyonglv;
    private int coreCount;
	private String vendor;
	private long cacheSize;
	private String model;
	private int mhz;
	private  int sockets;
	
	/*
	 * 关于内存
	 * 
	 * 内存总量
	 * 当前内存使用量
	 * 当前内存剩余量
	 * 内存使用率
	 * 内存空闲率
	 * 
	 */
	private long totalMemory;
	private long usedmemory;
	private long freeMemory;
	private double usedPercent;
	private double freePercent;
	
	/*
	 * 关于文件系统(磁盘)
	 * 
	 * 盘符名称
	 * 盘符路径
	 * 盘符标志
	 * 盘符类型
	 * 盘符类型名
	 * 总大小
	 * 剩余容量
	 * 可用容量
	 * 已用容量
	 * 资源利用率
	 */
	
	private String devName;
	private String dirName;
	private long flags;
	private String sysTypeName;
	private String typeName;
	private long totalDisk;
	private long freeDisk;
	private long availDisk;
	private long usedDisk;
	private double userPercent;
	
	/*
	 * 关于网络
	 * 
	 * 网络设备名
	 * ip地址
	 * 子网掩码
	 * 网关广播地址
	 * MAC地址
	 */
	private String deviceName;
	private String address;
	private String netMsk;
	private String broadCast;
	private String hwAddr;
	private String description;
    
	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getDeviceName() {
		return deviceName;
	}

	public void setDeviceName(String deviceName) {
		this.deviceName = deviceName;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getNetMsk() {
		return netMsk;
	}

	public void setNetMsk(String netMsk) {
		this.netMsk = netMsk;
	}

	public String getBroadCast() {
		return broadCast;
	}

	public void setBroadCast(String broadCast) {
		this.broadCast = broadCast;
	}

	public String getHwAddr() {
		return hwAddr;
	}

	public void setHwAddr(String hwAddr) {
		this.hwAddr = hwAddr;
	}

	public long getTotalDisk() {
		return totalDisk;
	}

	public void setTotalDisk(long totalDisk) {
		this.totalDisk = totalDisk;
	}

	public long getFreeDisk() {
		return freeDisk;
	}

	public void setFreeDisk(long freeDisk) {
		this.freeDisk = freeDisk;
	}

	public long getAvailDisk() {
		return availDisk;
	}

	public void setAvailDisk(long availDisk) {
		this.availDisk = availDisk;
	}

	public long getUsedDisk() {
		return usedDisk;
	}

	public void setUsedDisk(long usedDisk) {
		this.usedDisk = usedDisk;
	}

	public double getUserPercent() {
		return userPercent;
	}

	public void setUserPercent(double userPercent) {
		this.userPercent = userPercent;
	}

	public int getSockets() {
		return sockets;
	}

	public long getTotalMemory() {
		return totalMemory;
	}

	public void setTotalMemory(long totalMemory) {
		this.totalMemory = totalMemory;
	}

	public long getUsedmemory() {
		return usedmemory;
	}

	public void setUsedmemory(long usedmemory) {
		this.usedmemory = usedmemory;
	}

	public long getFreeMemory() {
		return freeMemory;
	}

	public void setFreeMemory(long freeMemory) {
		this.freeMemory = freeMemory;
	}

	public double getUsedPercent() {
		return usedPercent;
	}

	public void setUsedPercent(double usedPercent) {
		this.usedPercent = usedPercent;
	}

	public double getFreePercent() {
		return freePercent;
	}

	public void setFreePercent(double freePercent) {
		this.freePercent = freePercent;
	}

	public String getDevName() {
		return devName;
	}

	public void setDevName(String devName) {
		this.devName = devName;
	}

	public String getDirName() {
		return dirName;
	}

	public void setDirName(String dirName) {
		this.dirName = dirName;
	}

	public long getFlags() {
		return flags;
	}

	public void setFlags(long flags) {
		this.flags = flags;
	}

	public String getSysTypeName() {
		return sysTypeName;
	}

	public void setSysTypeName(String sysTypeName) {
		this.sysTypeName = sysTypeName;
	}

	public String getTypeName() {
		return typeName;
	}

	public void setTypeName(String typeName) {
		this.typeName = typeName;
	}

	public void setSockets(int sockets) {
		this.sockets = sockets;
	}

	public int getMhz() {
		return mhz;
	}

	public void setMhz(int mhz) {
		this.mhz = mhz;
	}


	public String getVendor() {
		return vendor;
	}

	public void setVendor(String vendor) {
		this.vendor = vendor;
	}

	public long getCacheSize() {
		return cacheSize;
	}

	public void setCacheSize(long cacheSize) throws Exception {		
			this.cacheSize = cacheSize;
	}

	public String getModel() {
		return model;
	}

	public void setModel(String model) {
		this.model = model;
	}

	public int getCoreCount() {
		return coreCount;
	}

	public void setCoreCount(int coreCount) {
		this.coreCount = coreCount;
	}

	public String getCpuLiyonglv() {
		return cpuLiyonglv;
	}

	public void setCpuLiyonglv(String cpuLiyonglv) {
		this.cpuLiyonglv = cpuLiyonglv;
	}

	
	
}
