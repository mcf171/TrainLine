<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<link rel="stylesheet" href="${basePath}styles/edit.css" type="text/css"></link>
<link href="${basePath}styles/font-awesome.css" rel="stylesheet"></link>

<script type="text/javascript">
//<!--
$(document).ready(
	function() {
		var optionId = ${company.companystatus};
		$("#companystatus option[id='" + optionId + "']").attr("selected","selected");
});

$("#cancle").click(function(){
	loadHTML('${basePath}admin/showBackendCompanyPage.action');
})
//-->
</script>

<div class="row-fluid">
	<form action="${basePath}admin/modifyCompany.action"  enctype="multipart/form-data" method="post">
		<div class="row-fluid line-margin" style="display:none">
			<span class="help-inline">公司ID：</span>
			<input type="text" class=" span2" placeholder="请输入内容" name="company.companyId" value="${company.companyId}"/>
		</div>
		<div class="row-fluid line-margin">
			<span class="help-inline">公司名称：</span>
			<input type="text" class=" span2" placeholder="请输入内容" name="company.companyName" value="${company.companyName}"/>
		</div>
		<div class="row-fluid line-margin">
			<span class="help-inline">公司等级：</span>
			<select class="input-small " id="companystatus" name="company.companystatus" value="${company.companystatus}">
				<option id="0">0</option>
				<option id="1">1</option>
				<option id="2">2</option>
				<option id="3">3</option>
				<option id="4">4</option>
			</select>
		</div>
		<div class="row-fluid line-margin">
			<span class="help-inline">公司介绍：</span>
			<textarea class=" span2" placeholder="请输入公司介绍" id="companyIntro" name="company.companyIntro">${company.companyIntro}</textarea>
		</div>
		<div class="row-fluid line-margin">
			<span class="help-inline">公司简称：</span>
			<input type="text" class=" span2" placeholder="请输入公司简称" name="company.companyShortName" value="${company.companyShortName}"/>
		</div>
		<div class="row-fluid line-margin">
			<button class="btn span1" type="submit">
				确定
			</button>
			<button class="btn span1" type="button" id="cancle">
				取消
			</button>
		</div>
	</form>
</div>