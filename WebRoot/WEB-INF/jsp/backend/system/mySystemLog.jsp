<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'mySystemLog.jsp' starting page</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
	<link rel="stylesheet" type="text/css" href="${basePath}styles/mmgrid.css" />
    <link rel="stylesheet" type="text/css" href="${basePath}styles/mmpaginator.css" />
    <link rel="stylesheet" type="text/css" href="${basePath}themes/mmgrid/mmgrid.css" />
    <link rel="stylesheet" type="text/css" href="${basePath}themes/mmgrid/mmpaginator.css" />
    <link rel="stylesheet" type="text/css" href="${basePath}styles/bootstrap.css" />
	<link rel="stylesheet" type="text/css" href="${basePath}styles/global.css" />
	<link rel="stylesheet" type="text/css" href="${basePath}styles/backend.css" />
	<script type="text/javascript" src="${basePath}scripts/jquery.js"></script>
	<script type="text/javascript" src="${basePath}scripts/jstree.js"></script>
	<script type="text/javascript" src="${basePath}scripts/mousewheel.js"></script>
	<script type="text/javascript" src="${basePath}scripts/mmgrid.js"></script>
    <script type="text/javascript" src="${basePath}scripts/mmpaginator.js"></script>
    <script type="text/javascript" src="${basePath}scripts/datepicker.js"></script>
    <script>
       var mmGirdTable;
$(document).ready(function ()
{
    
    $('#time-to').css('background', 'none').datepicker();
	$('#time-from').css('background', 'none').datepicker();
	test="ready";
	mmGirdTable = $('#grid').mmGrid({
		url: '${basePath}recordAction.action',
		height: 'auto',
		autoLoad: true,
		fullWidthRows: true,
		root:'recordList',
		cols: [
				{ title: '用户名', sortable: true,  name: 'userId' },
				{ title: '登录IP', sortable: true, name: 'ipaddress' },
				{ title: '上次登录时间', sortable: true,  name: 'onLineTime' },
				{ title: '下线时间',sortable:true, name:'downLineTime' },	
				{ title: '记录编号', sortable: true, name: 'recordId' },
				{ 
				  title: '操作',
				  renderer:function(val,item,rowIndex){
				    	return '<a href="javascript:loadHTML(\'${basePath}deleteRecordAction.action?userId='+item.userId+ '\')">删除</a>' ;
				  }        
				}
			],
			plugins: [
			$('#page').mmPaginator({})
		]
		
	});

	/*$("#showAll").click(function(){
		mmGirdTable.load();
	});*/
	var flag = 0;
	$("#userSearch").click(function(){
		var recordUser = parseInt($("#recordUser").val());
		if(isNaN(recordUser)){
		   recordUser = 0;
		}
		else{
		 flag=1;
		  mmGirdTable.load(
				{
				 "record.userId":recordUser,
				 "flag":flag
				}
				);
		}
		
	});
	$("#idSearch").click(function(){
		var recordId = parseInt($("#recordId").val());
		if(isNaN(recordId)){
		   recordId = 0;
		}
		else{
		  flag=2;
		  mmGirdTable.load(
				{
				"record.recordId":recordId,
				"flag":flag
				}
				);
		}
	});
	$("#searchAll").click(function(){
	    mmGirdTable.load();
	});
});
       
    </script>
    
  </head>
  
  <body>
    <div>
           <Strong style="margin-left:10px">用户编号:</Strong> &nbsp;
          <input type="text" id="recordUser" class="input-medium" placeholder="请输入用户编号">
          <Strong style="margin-left:10px">记录编号:</Strong> &nbsp;
          <input type="text" id = "recordId" class="input-medium" placeholder="请输入内容">
          <button class="btn " type="button" style="margin-right:0px;" id="userSearch"><i class="icon-search"></i><b>按用户编号查询</b></button>
          <button class="btn " id="idSearch" type="button"  style="margin-left:2px"><i class="icon-search"></i><b>按记录编号查询</b></button>
          <button class="btn " id="searchAll" type="button"  style="margin-left:2px"><i class="icon-remove"></i><b>查询所有</b></button>
    </div>          		
   <div class="row-fluid">
      <div class="span12">
        <table id="grid"></table>
        <div id="page" class="pull-right"></div>
      </div>
   </div>


    
</html>
