<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<link rel="stylesheet" type="text/css" href="styles/bootstrap.css" />
<link rel="stylesheet" href="styles/font-awesome.min.css">
<link rel="stylesheet" type="text/css" href="styles/global.css" />
<script type="text/javascript" src="scripts/jquery.js"></script>
<script type="text/javascript" src="scripts/bootstrap.js"></script>
<script type="text/javascript" src="scripts/global.js"></script>
<title>主页</title>
</head>
<body>
<div class="container-fluid">
  <div class="row-fluid">
    <div class="span9 resources">
      <div class="row-fluid ">
        <ul class="breadcrumb">
          <li class="active">您现在的位置： </li>
          <li><a href="homeList.action">首页</a> <span class="divider">/</span></li>
          <li class="active">公告</li>
        </ul>
      </div>
      <div class="row-fluid ">
        <h2 class="text-center">公告</h2>
      </div>
      <div>
        <h6 class="text-center">时间：123-11;  通知人：我问 浏览数：40</h6>
      </div>
      <hr class="seperator"/>
      <div class="row-fluid">
        <p>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容 </p>
      </div>
      <hr class="seperator"/>
      <div class="row-fluid"> 上一篇：<a href="#">没有了</a> </div>
      <div class="row-fluid"> 下一篇：<a href="#">公共2</a> </div>
    </div>
    <div class="span3 resources">
      <div class="row-fluid ">
        <ul class="breadcrumb">
          <li class="active"><i class="icon-folder-open"></i> 最新公告</li>
        </ul>
      </div>
      <div class="row-fluid ">
        <ul class="shortInfo">
          <li> <div class="pull-left"><a href="#">And many more with Custom CSS</a></div><span class="label label-important pull-left">重要</span></li>
          <li> <div class="pull-left"><a href="#">And many more with Custom CSS</a></div><span class="label label-important pull-left">重要</span></li>
          <li> <div class="pull-left"><a href="#">And many more with Custom CSS</a></div></li>
          <li> <div class="pull-left"><a href="#">And many more with Custom CSS</a></div></li>
          <li> <div class="pull-left"><a href="#">And many more with Custom CSS</a></div></li>
          <li> <div class="pull-left"><a href="#">And many more with Custom CSS</a></div></li>
        </ul>
      </div>
    </div>
  </div>
</div>
</body>
</html>