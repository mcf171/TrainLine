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
			url : '${basePath}admin/human/getCompanyList.action',
			height : 410,
			autoLoad : true,
			checkCol : true,
			multiSelect : true,
			fullWidthRows : true,
			root:'human',
			cols : [ {
				title : '公司ID',
				sortable : true,
				name : 'companyId'
			}, {
				title : '公司名',
				sortable : true,
				name : 'companyName'
			}, {
				title : '公司等级',
				sortable : true,
				name : 'companystatus'
			}, {
				title : '公司介绍',
				sortable : true,
				name : 'companyIntro'
			}, {
				title : '公司简称',
				sortable : true,
				name : 'companyShortName'
			},{
				title : '操作',
				renderer : function(val, item, row) {
					onclick = "#";
					return '<a href="javascript:loadHTML(\'${basePath}admin/modifyCompanyPage.action?company.companyId=' +item.companyId + '\')")">修改</a> '
							+ '&nbsp'
							+ '<a href="javascript:showConfirm(' +item.companyId + ',' +'\'${basePath}admin/\''+')" >删除</a> ';
				}
			}],
			plugins : [ $('#page').mmPaginator({}) ]
		});
	
	$("#showAll").click(function(){
		mmGridTable.load();
	});
	$("#batchButton").click(function(){
		$("#modal2").modal();
	});
	$("#bookURLChoose").change(function(){
		var boj = $("#bookURL");
		boj.text($("#bookURLChoose").val());
		$("#hiddenBookURL").val($("#bookURLChoose").val());

	});
	
	$("#search").click(function(){
		var companyId = $("#companyId").val();
		var companyName = $("#companyName").val();
		var companystatus = $("#companystatus").val();
		
		mmGridTable.load({
				"company.companyId" : companyId,
				"company.companyName" : companyName,
				"company.companystatus" : companystatus
			});
	});
});
function deleteCompany(){
	$.ajax({
		  type: "post",
		  url: "${basePath}admin/deleteCompany.action",
		  data:"company.companyId=" + id,
		  success: function(msg){
			  $('#myModal').modal('hide')
			  mmGridTable.removeRow(mmGridTable.selectedRowsIndex());
		  }
		});
	
}
	//
</script>

<div class="row-fluid">
	<div class="span12">
		<button class="btn" onclick="loadHTML('${basePath}admin/addCompanyPage.action')">
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
					<span class="help-inline"><b>基本过滤：</b>公司ID：</span> 
					<input type="text" class="span2" id="companyId" placeholder="请输入相应内容" />
					 <span class="help-inline">公司名：</span> 
					 <input type="text" class="span2" id="companyName" placeholder="请输入相应内容" />
					 <span class="help-inline">公司等级：</span> 
					 <select class="input-small" id="companystatus">
					 	<option value="-1">-1</option>
						<option value="0">0</option>
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
					</select>
				</div>
				<div>
					<div class="row-fluid line-margin">
							<button class="btn" id="search" type="button">
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
		<button class="btn btn-primary" onclick="deleteCompany()">确认</button>
	</div>
</div>


<div id="modal2" class="modal hide fade" tabindex="-1" role="dialog"
	aria-labelledby="myModalLabel" aria-hidden="true">
	<form action="${basePath}admin/human/batchUploadCompany.action"  enctype="multipart/form-data"  onsubmit="checkForm()" target="hidden_frame" method="post">
	<div class="modal-header">
		<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
		<h3 id="myModalLabel">批量上传</h3>
	</div>
	<div class="modal-body">
	<div class="row-fluid line-margin">
			<span class="help-inline">文件选择：<a href="${basePath}getFile/upload/template/batchAddCompany.xls" >模板下载</a></span>
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
