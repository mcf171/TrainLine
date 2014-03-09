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
	var mmGridTable;
	$(document).ready(
			function() {
				test = "ready";
				mmGridTable = $('#grid').mmGrid(
						{
							url : '${basePath}admin/getPersonList.action',
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
										title:'用户级别',sortable:true,name:'userState',
										renderer: function (val, item, row){
											userState  = parseInt(item.userState);
											var returnString;
											switch(userState){
											case 1: returnString = "超级管理员";break;
											case 2: returnString = "教师"; break;
											case 3: returnString = "学员"; break;
											default: returnString = "身份未知";
											}
											return returnString;
										}
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
											return  '<a href="javascript:loadHTML(\'${basePath}admin/modifyPersonPage.action?user.userId=' +item.userId + '\')")">修改</a> '
													+ '&nbsp'
													+ '<a href="javascript:showConfirm(' +item.userId + ')" >删除</a>';
										}
									} ],
							plugins : [ $('#page').mmPaginator({}) ]
						});
				
	$("#showAll").click(function(){
		mmGridTable.load();
	});
				

	$("#search").click(function(){
		var userId = $("#userId").val();
		var userName = $("#userName").val();
		var realName = $("#realName").val();
					
		mmGridTable.load({
			"user.userId" : userId,
			"user.userName" : userName,
			"user.personalinformation.realName" : realName
		});
	});
	
	$("#bookURLChoose").change(function(){
		var boj = $("#bookURL");
		boj.text($("#bookURLChoose").val());
		$("#hiddenBookURL").val($("#bookURLChoose").val());

	});
	
	$("#batchButton").click(function(){
		$("#modal2").modal();
	});
});

var id;
function showConfirm(obj1){
	
	id = obj1;
	$('#myModal').modal();
}

function deletePerson(){
	
	dataInfo = "user.userId="+ id;
	$.ajax({
		
		type:"post",
		url:"${basePath}admin/user/deleteUser.action",
		data:dataInfo,
		success:function(){
			mmGridTable.removeRow(mmGridTable.selectedRowsIndex());
			$("#myModal").modal("hide");
		},
		error:function(){
			alert("删除失败");
		}
	});
}
	//
</script>

<div class="row-fluid">
	<div class="span12">
		<div class="span12">
			<button class="btn"
				onclick="loadHTML('${basePath}admin/addPersonPage.action')">
				<i class="icon-plus"></i>新增
			</button>
			<button class="btn" type="button" id="batchButton">
			<i class="icon-arrow-up"></i>
				批量导入
			</button>
		</div>
		<div class="row-fluid line-margin">
			<span class="help-inline"><b>基本过滤：</b>用戶ID：</span> 
			<input type="text" class="span2" placeholder="请输入相应内容" id="userId"/> 
			<span class="help-inline">用戶名：</span>
			<input type="text" class="span2" placeholder="请输入相应内容" id="userName"/>
			<span class="help-inline">真实姓名：</span> 
			<input type="text" class="span2" placeholder="请输入相应内容" id="realName"/>
			<div class="row-fluid line-margin">
				<button class="btn " type="button" id="search">
					<i class="icon-search"></i>查询
				</button>
				<button class="btn" type="reset">
					<i class="icon-remove"></i>清除条件
				</button>
				<button class="btn " id="showAll" type="button">
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
<div id="myModal" class="modal hide fade" tabindex="-1" role="dialog"
	aria-labelledby="myModalLabel" aria-hidden="true">
	<div class="modal-header">
		<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
		<h3 id="myModalLabel">确认删除</h3>
	</div>
	<div class="modal-body">
		<p>是否真的删除？</p>
	</div>
	<div class="modal-footer">
		<button class="btn" data-dismiss="modal" aria-hidden="true">取消</button>
		<button class="btn btn-primary" onclick="deletePerson()">确认</button>
	</div>
</div>

<div id="modal2" class="modal hide fade" tabindex="-1" role="dialog"
	aria-labelledby="myModalLabel" aria-hidden="true">
	<form action="${basePath}admin/user/batchUploadUser.action"  enctype="multipart/form-data"  onsubmit="checkForm()" target="hidden_frame" method="post">
	<div class="modal-header">
		<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
		<h3 id="myModalLabel">批量上传</h3>
	</div>
	<div class="modal-body">
	<div class="row-fluid line-margin">
			<span class="help-inline">文件选择：</span>
			</div>
		<div class="row-fluid line-margin">
			
           	<span class=" span2 uneditable-input" id="bookURL" ></span>
           	<input type="file" id="bookURLChoose" style="width: 65px;" name="upload" class=" span2 " placeholder="请选择上传图书">

		</div>
		
		<div class="row-fluid">
						    <div class="progress progress-striped active">
							    <div class="bar" style="width:0;" id="porcess"></div>
							    </div>
					</div>
	</div>
	<div class="modal-footer">
		<button class="btn" data-dismiss="modal" aria-hidden="true">取消</button>
		<button type="submit" class="btn btn-primary" >确认</button>
	</div>
	</form>
</div>

<iframe name='hidden_frame' id="hidden_frame" style='display:none'></iframe>
<script>

function callback(msg){
	if(msg=="true"){
		$("#porcess").animate({width:'100%'});
		$("#modal2").modal("hide");
		mmGridTable.load();
	}else{
		alert("文件格式错误");
	}
	
}
						function checkForm(){
							
							$("#porcess").animate({width:'90%'});
						}
					</script>
