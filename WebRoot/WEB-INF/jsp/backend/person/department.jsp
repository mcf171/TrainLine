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
	$(document).ready(function() {
		test = "ready";
		mmGirdTable = $('#grid').mmGrid({
			url : '${basePath}getDepartmentList.action',
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
		<button class="btn" onclick="loadHTML('${basePath}addDepartmentPage.action')">
			<i class="icon-plus"></i>新增
		</button>
	</div>
	<div class="row-fluid">
		<div class="span12">
			<form id="condition" class="span12 form-inline no-margin">
				<div class="row-fluid line-margin">
					<span class="help-inline"><b>基本过滤：</b>部门ID：</span> 
					<input type="text" class="span2" placeholder="请输入相应内容" />
					 <span class="help-inline">部门名：</span> 
					 <input type="text" class="span2" placeholder="请输入相应内容" />
					 <span class="help-inline">部门等级：</span> 
					 <select class="input-small">
						<option>0</option>
						<option>1</option>
						<option>2</option>
						<option>3</option>
						<option>4</option>
					</select>
					<span class="help-inline">公司名：</span> 
					 <input type="text" class="span2" placeholder="请输入相应内容" />
				</div>
				<div>
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
