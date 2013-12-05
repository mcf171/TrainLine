<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="content-type" content="text/html; charset=UTF-8" />
<link rel="stylesheet" type="text/css" href="${basePath}styles/bootstrap.css" />
<link rel="stylesheet" type="text/css" href="${basePath}styles/global.css" />
<link rel="stylesheet" type="text/css" href="${basePath}styles/backend.css" />

<script type="text/javascript" src="${basePath}scripts/jquery.js"></script>
<script type="text/javascript" src="${basePath}scripts/jstree.js"></script>
<script type="text/javascript" src="${basePath}scripts/bootstrap.js"></script>
<script type="text/javascript" src="${basePath}scripts/mousewheel.js"></script>
<script type="text/javascript" src="${basePath}scripts/global.js"></script>
<script type="text/javascript" src="${basePath}scripts/backend.js"></script>
<title>系统 管理</title>
</head>
<body>
<div class="container-fluid">
	<div class="row-fluid">
		<div id="sidebar" class="span2 tree-container">
			<ul>
				<li class="jstree-open">
					<a href="#">系统信息</a>
					<ul>
						<li class="jstree-leaf"><a href="${basePath}systemaction_cpu.action">CPU 状态</a></li>
						<li class="jstree-leaf"><a href="${basePath}systemaction_memory.action">内存状态</a></li>
						<li class="jstree-leaf"><a href="${basePath}systemaction_disk.action">磁盘状态</a></li>
						<li class="jstree-leaf"><a href="${basePath}systemaction_net.action">网络状态</a></li>
						<li class="jstree-leaf"><a href="${basePath}showPageAction.action">系统日志</a></li> 
					</ul>
				</li>
				
				<li class="jstree-open">
					<a href="#">站内信</a>
					<ul>
						<li class="jstree-leaf"><a href="system/mywrite.jsp">写信</a></li>
						<li class="jstree-leaf"><a href="system/shoujian.html">收件箱</a></li>
						<li class="jstree-leaf"><a href="system/fajian.html">发件箱</a></li>
						<li class="jstree-leaf"><a href="system/huishou.html">垃圾箱</a></li>
					</ul>
				</li>
				
			</ul>
		</div>
		<div id="content" class="span10">
		</div>
	</div>
</div>
</body>
</html>
