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
<script type="text/javascript" src="${basePath}scripts/human.js"></script>



<script type="text/javascript">
	//         
	var mmGridTable;
	$(document).ready(function() {
		test = "ready";
		mmGridTable = $('#grid').mmGrid({
			url : '${basePath}admin/getDepartmentList.action',
			height : 410,
			autoLoad : true,
			checkCol : true,
			multiSelect : true,
			fullWidthRows : true,
			root:'human',
			cols : [ {
				title : '部门ID',
				sortable : true,
				name : 'departmentId'
			}, {
				title : '部门名',
				sortable : true,
				name : 'departmentName'
			}, {
				title : '公司名',
				sortable : true,
				renderer: function (val, item, row)
				{
					var temp = item.company;
					console.log(item.company == null);
					if(item.company == null){
						return "缺乏所属公司名";
					}else{
						
						return item.company.companyName;
					}
				
				}
			}, {
				title : '部门等级',
				sortable : true,
				name : 'departmentstatus'
			}, {
				title : '部门简称',
				sortable : true,
				name : 'departmentShortName'
			}, {
				title : '业务板块',
				sortable : true,
				name : 'businessUnits'
			},{
				title : '部门编码',
				sortable : true,
				name : 'departmentCoding'
			},{
				title : '籍贯',
				sortable : true,
				name : 'country'
			},{
				title : '操作',
				renderer : function(val, item, row) {
					onclick = "#";
					return '<a href="javascript:loadHTML(\'${basePath}admin/modifyDepartmentPage.action?department.departmentId=' +item.departmentId + '\')")">修改</a> '
							+ '&nbsp'
							+ '<a href="javascript:showConfirm(' +item.departmentId + ',' +'\'${basePath}admin/\''+')" >删除</a> ';
				}
			} ],
			plugins : [ $('#page').mmPaginator({}) ]
		});
	
		$("#showAll").click(function(){
			mmGridTable.load();
		});
		$("#bookURLChoose").change(function(){
			var boj = $("#bookURL");
			boj.text($("#bookURLChoose").val());
			$("#hiddenBookURL").val($("#bookURLChoose").val());

		});
		$("#batchButton").click(function(){
			$("#modal2").modal();
		});
		
		$("#search").click(function(){
			var departmentId = $("#departmentId").val();
			var departmentName = $("#departmentName").val();
			var departmentstatus = $("#departmentstatus").val();
			var companyName = $("#companyName").val();
			
			mmGridTable.load({
				"department.departmentId" : departmentId,
				"department.departmentName" : departmentName,
				"department.departmentstatus" : departmentstatus,
				"department.company.companyName" : companyName
			});
		});
	});

	function deleteDepartment(){
		$.ajax({
			  type: "post",
			  url: "${basePath}admin/deleteDepartment.action",
			  data:"department.departmentId=" + id,
			  success: function(msg){
				  $('#myModal').modal('hide');
				  mmGridTable.removeRow(mmGridTable.selectedRowsIndex());
			  }
			});
	}

	//
</script>

<div class="row-fluid">
	<div class="span12">
		<button class="btn" onclick="loadHTML('${basePath}admin/addDepartmentPage.action')">
			<i class="icon-plus"></i>新增
		</button>
		<button class="btn" type="button" id="batchButton">
			<i class="icon-arrow-up"></i>
				批量导入
			</button>
	</div>
	<div class="row-fluid">
		<div class="span12">
			<form id="condition" class="span12 form-inline no-margin">
				<div class="row-fluid line-margin">
					<span class="help-inline"><b>基本过滤：</b>部门ID：</span> 
					<input type="text" class="span2" placeholder="请输入相应内容" id="departmentId"/>
					 <span class="help-inline">部门名：</span> 
					 <input type="text" class="span2" placeholder="请输入相应内容" id="departmentName" />
					 <span class="help-inline">部门等级：</span> 
					 <select class="input-small" id="departmentstatus">
					 	<option value="-1">-1</option>
						<option value="0">0</option>
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
					</select>
					<span class="help-inline">公司名：</span> 
					 <input type="text" class="span2" placeholder="请输入相应内容" id="companyName"/>
				</div>
				<div>
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
					<div class="row-fluid">
						<div class="span12">
							<table id="grid"></table>
							<div id="page" class="pull-right"></div>
						</div>
					</div>
				</div>
			</form>
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
		<button class="btn btn-primary" onclick="deleteDepartment()">确认</button>
	</div>
</div>


<div id="modal2" class="modal hide fade" tabindex="-1" role="dialog"
	aria-labelledby="myModalLabel" aria-hidden="true">
	<form action="${basePath}admin/human/batchUploadDepartment.action"  enctype="multipart/form-data"  onsubmit="checkForm()" target="hidden_frame" method="post">
	<div class="modal-header">
		<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
		<h3 id="myModalLabel">批量上传</h3>
	</div>
	<div class="modal-body">
	<div class="row-fluid line-margin">
			<span class="help-inline">文件选择：<a href="${basePath}getFile/upload/template/batchAddDepartment.xls" >模板下载</a></span>
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