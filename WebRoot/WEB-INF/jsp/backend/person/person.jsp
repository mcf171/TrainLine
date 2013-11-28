<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<link rel="stylesheet" type="text/css"
	href="${basePath}styles/mmgrid.css" />
<link rel="stylesheet" type="text/css"
	href="${basePath}styles/mmpaginator.css" />
<link rel="stylesheet" type="text/css"
	href="${basePath}themes/mmgrid/mmgrid.css" />
<link rel="stylesheet" type="text/css"
	href="${basePath}themes/mmgrid/mmpaginator.css" />
<script type="text/javascript" src="${basePath}scripts/mmgrid.js"></script>
<script type="text/javascript" src="${basePath}scripts/mmpaginator.js"></script>

<script type="text/javascript">
	//         
	var mmGirdTable;
	$(document).ready(
			function() {
				test = "ready";
				mmGirdTable = $('#grid').mmGrid(
						{
							url : '${basePath}getPersonList.action',
							height : 410,
							autoLoad : true,
							checkCol : true,
							multiSelect : true,
							fullWidthRows : true,
							root : 'human',
							cols : [
									{
										title : '用户ID',
										sortable : true,
										name : 'userId'
									},
									{
										title : '用户名',
										sortable : true,
										name : 'userName'
									},
									{
										title : '密码',
										sortable : true,
										name : 'userPassword'
									},
									{
										title : '真实姓名',
										sortable : true,
										renderer: function (val, item, row)
										{
											var temp = item.personalinformation;
											console.log(item.personalinformation == null);
											if(item.personalinformation == null){
												return "缺乏真实姓名";
											}else{
												
												return item.personalinformation.realName;
											}
										
										}
									},
									{
										title : '操作',
										renderer : function(val, item, row) {
											onclick = "#";
											return '<a href="#">查看</a> '
													+ '&nbsp'
													+ '<a href="#" >修改</a> '
													+ '&nbsp'
													+ '<a href="#" >删除</a> ';
										}
									} ],
							plugins : [ $('#page').mmPaginator({}) ]
						});
			});
	//
</script>

<div class="row-fluid">
	<div class="span12">
		<div class="span12">
			<button class="btn"
				onclick="loadHTML('${basePath}addPersonPage.action')">
				<i class="icon-plus"></i>新增
			</button>
		</div>
		<div class="row-fluid line-margin">
			<span class="help-inline"><b>基本过滤：</b>用戶ID：</span> 
			<input type="text" class="span2" placeholder="请输入相应内容" /> 
			<span class="help-inline">用戶名：</span>
			<input type="text" class="span2" placeholder="请输入相应内容" />
			<span class="help-inline">真实姓名：</span> 
			<input type="text" class="span2" placeholder="请输入相应内容" />
			<div class="row-fluid line-margin">
				<button class="btn ">
					<i class="icon-search"></i>查询
				</button>
				<button class="btn" type="reset">
					<i class="icon-remove"></i>清除条件
				</button>
				<button class="btn " id="showAll">
					<i class="icon-align-justify"></i>显示所有
				</button>
			</div>
		</div>
		<div>
			<div class="row-fluid">
				<div class="span12">
					<table id="grid"></table>
					<div id="page" class="pull-right"></div>
				</div>
			</div>
		</div>
	</div>

</div>

