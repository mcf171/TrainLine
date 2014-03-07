<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<link rel="stylesheet" type="text/css" href="${basePath}styles/bootstrap.css" />
<link rel="stylesheet" type="text/css" href="${basePath}styles/global.css" />
<link rel="stylesheet" type="text/css" href="${basePath}styles/index.css" />
<script type="text/javascript" src="${basePath}scripts/jquery.js"></script>
<script type="text/javascript" src="${basePath}scripts/bootstrap.js"></script>
<script type="text/javascript" src="${basePath}scripts/global.js"></script>
<title>邮箱</title>
<script>
	$(document).ready(function(){
		loadHTML("${basePath}getWriteEmailPage.action");
	});
	
	function getWriter(){
		
		loadHTML("${basePath}getWriteEmailPage.action");
	}
	
	function getSendMail(){
		
		loadHTML("${basePath}getSendEmail.action");
	}
	function getReciveMail(){
	
	loadHTML("${basePath}getReciveEmail.action");
	}
</script>
</head>
<body>
<div class="row-fluid">
	<img src="images/logo.jpg" class="header-item"></img>
	<div class="header-item header-title">
		网络培训平台
	</div>
</div>
<div class="row-fluid" >
<div class="row-fluid" style="margin-top: 20px; ">
	<div class=" row-fluid span2 resources offset1">
    	<div class=" row-fluid span12">
        <i class="icon-pencil"></i><a href="javascript:void(0)" onclick="getWriter()"> 写信</a>
        </div>
        <div class=" row-fluid span12">
        <i class="icon-folder-open"></i> <a href="javascript:void(0)" onclick="getSendMail()">发件箱</a>
        </div>
        <div class=" row-fluid span12">
        <i class="icon-folder-close"></i> <a href="javascript:void(0)" onclick="getReciveMail()">收件箱</a>
        </div>
    </div>
    <div class="span8 row-fluid resources" id="content">
    	
    </div>
</div>
</div>

</body>
</html>
