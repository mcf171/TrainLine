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
				
				mmGridTable = $('#grid').mmGrid(
						{
							url : '${basePath}admin/getAllRoles.action',
							height : 410,
							autoLoad : true,
							checkCol : true,
							multiSelect : true,
							fullWidthRows : true,
							root : 'list',
							cols : [
									{
										title : '角色名称',
										sortable : true,
										name : 'roleName'
									},
									{
										title : '操作',
										renderer : function(val, item, row) {
											onclick = "#";
											return  '<a href="javascript:loadHTML(\'${basePath}admin/getModifyRolePage.action?role.roleId=' +item.roleId + '\')")">修改</a> '
													+ '&nbsp'
													+ '<a href="javascript:showConfirm(' +item.roleId + ')" >删除</a>';
										}
									} ],
							plugins : [ $('#page').mmPaginator({}) ]
						});
				
	$("#showAll").click(function(){
		mmGridTable.load();
	});
				

	$("#search").click(function(){
		var roleId = $("#roleId").val();
		var roleName = $("#roleName").val();
		var realName = $("#realName").val();
					
		mmGridTable.load({
			"role.roleId" : roleId,
			"role.roleName" : roleName,
			"role.personalinformation.realName" : realName
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
	
	dataInfo = "role.roleId="+ id;
	$.ajax({
		
		type:"post",
		url:"${basePath}admin/deleteRole.action",
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
				onclick="loadHTML('${basePath}admin/getAddRolePage.action')">
				<i class="icon-plus"></i>新增
			</button>
			
		</div>
		<div class="row-fluid line-margin">
			<span class="help-inline"><b>基本过滤：</b>用戶ID：</span> 
			<input type="text" class="span2" placeholder="请输入相应内容" id="roleId"/> 
			<span class="help-inline">用戶名：</span>
			<input type="text" class="span2" placeholder="请输入相应内容" id="roleName"/>
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

