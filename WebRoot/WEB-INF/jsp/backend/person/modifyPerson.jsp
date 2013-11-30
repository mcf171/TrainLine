<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<link rel="stylesheet" href="${basePath}styles/edit.css" type="text/css"></link>
<link href="${basePath}styles/font-awesome.css" rel="stylesheet"></link>
<link rel="stylesheet" type="text/css"  href="${basePath}styles/mmgrid.css" />
<link rel="stylesheet" type="text/css" href="${basePath}styles/mmpaginator.css" />
<link rel="stylesheet" type="text/css" href="${basePath}themes/mmgrid/mmgrid.css" />
<link rel="stylesheet" type="text/css" href="${basePath}themes/mmgrid/mmpaginator.css" />
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
				title : '用户ID',
				sortable : true,
				width : 150,
				name : ''
			}, {
				title : '用户名',
				sortable : true,
				width : 150,
				name : ''
			}, {
				title : '密码',
				sortable : true,
				width : 150,
				name : ''
			}, {
				title : '真实姓名',
				sortable : true,
				width : 150,
				name : ''
			}],
			plugins : [ $('#page').mmPaginator({}) ]
		});
	});
	//
</script>

<div class="row-fluid">
	<form action="#"  enctype="multipart/form-data" method="post">
		<div class="row-fluid line-margin">
			<span class="help-inline"><b>基本信息：</b></span>
		</div>
		<div class="row-fluid line-margin">
			<span class="help-inline">人员名称：</span>
			<input type="text" class=" span2" placeholder="请输入人员名称" name="" />
		</div>
		<div class="row-fluid line-margin">
			<span class="help-inline">人员性别：</span>
			<select class="input-small " name="">
				<option>男</option>
				<option>女</option>
			</select>
		</div>
		<div class="row-fluid line-margin">
			<span class="help-inline">人员籍贯：</span>
			<input type="text" class=" span2" placeholder="请输入籍贯" name=""/>
		</div>
		<div class="row-fluid line-margin">
			<span class="help-inline">备注：</span>
			<textarea class=" span2" placeholder="请输入内容" name=""/>
		</div>
		<div class="row-fluid line-margin">
			<span class="help-inline"><b>可增加职位：</b></span>
		</div>
		<div class="row-fluid line-margin">
			<span class="help-inline">公司：</span>
			<select class="input-small " name="">
			</select>
		</div>
		<div class="row-fluid line-margin">
			<span class="help-inline">部门：</span>
			<select class="input-small " name="">
			</select>
		</div>
		<div class="row-fluid line-margin">
			<span class="help-inline">职位：</span>
			<select class="input-small " name="">
			</select>
		</div>
		<div class="row-fluid line-margin">
			<button class="btn span1 " type="submit">
				添加
			</button>
			<button class="btn span1" type="button" id="cancle">
				取消
			</button>
		</div>
		<div class="row-fluid line-margin">
			<span class="help-inline"><b>已增加职位：</b></span>
		</div>
		<div class="row-fluid">
			<div class="span7">
				<table id="grid"></table>
				<div id="page" class="pull-right"></div>
			</div>
		</div>
		<div class="row-fluid line-margin">
			<button class="btn span1 offset1 " type="submit">
				确定
			</button>
			<button class="btn span1 offset1" type="button" id="cancle">
				取消
			</button>
		</div>
	</form>
</div>