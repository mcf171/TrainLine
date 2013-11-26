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
	$(document).ready(function() {
		$('#grid').mmGrid({
			url : '/api/peixunrenyuan',
			height : 410,
			autoLoad : true,
			checkCol : true,
			multiSelect : true,
			fullWithRows : true,
			cols : [ {
				title : '公司ID',
				sortable : true,
				width : 200,
				name : ''
			}, {
				title : '公司名',
				sortable : true,
				width : 200,
				name : ''
			}, {
				title : '公司等级',
				sortable : true,
				width : 200,
				name : ''
			}, {
				title : '公司介绍',
				sortable : true,
				width : 200,
				name : ''
			}, {
				title : '公司简称',
				sortable : true,
				width : 200,
				name : ''
			}],
			plugins : [ $('#page').mmPaginator({}) ]
		});
	});
	//
</script>

<div class="row-fluid">
	<div class="span12">
		<button class="btn" onclick="loadHTML('${basePath}addCompany.jsp')">
			<i class="icon-plus"></i>新增
		</button>
	</div>
	<div class="row-fluid">
		<div class="span12">
			<form id="condition" class="span12 form-inline no-margin">
				<div class="row-fluid line-margin">
					<span class="help-inline"><b>基本过滤：</b>公司ID：</span> 
					<input type="text" class="span2" placeholder="请输入相应内容" />
					 <span class="help-inline">公司名：</span> 
					 <input type="text" class="span2" placeholder="请输入相应内容" />
					 <span class="help-inline">公司等级：</span> 
					 <select class="input-small">
						<option>0</option>
						<option>1</option>
						<option>2</option>
						<option>3</option>
						<option>4</option>
					</select>
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