<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<link rel="stylesheet" href="${basePath}styles/edit.css" type="text/css"></link>
<link href="${basePath}styles/font-awesome.css" rel="stylesheet"></link>

<div class="row-fluid">
	<form action="#"  enctype="multipart/form-data" method="post">
		<div class="row-fluid line-margin">
			<span class="help-inline">部门名称：</span>
			<input type="text" class=" span2" placeholder="请输入人员名称" name="" />
		</div>
		<div class="row-fluid line-margin">
			<span class="help-inline">部门等级：</span>
			<select class="input-small " name="">
				<option>0</option>
				<option>1</option>
				<option>2</option>
				<option>3</option>
				<option>4</option>
			</select>
		</div>
		<div class="row-fluid line-margin">
			<span class="help-inline">部门简称：</span>
			<input type="text" class=" span2" placeholder="请输入人员名称" name="" />
		</div>
		<div class="row-fluid line-margin">
			<span class="help-inline">业务板块：</span>
			<input type="text" class=" span2" placeholder="请输入人员名称" name="" />
		</div>
		<div class="row-fluid line-margin">
			<span class="help-inline">部门编码：</span>
			<input type="text" class=" span2" placeholder="请输入人员名称" name="" />
		</div>
		<div class="row-fluid line-margin">
			<span class="help-inline">籍贯：</span>
			<input type="text" class=" span2" placeholder="请输入人员名称" name="" />
		</div>
		<div class="row-fluid line-margin">
			<span class="help-inline">公司名称：</span>
			<select class="input-small " name="">
			</select>
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