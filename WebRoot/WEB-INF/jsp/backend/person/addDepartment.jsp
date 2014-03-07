<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<link rel="stylesheet" href="${basePath}styles/edit.css" type="text/css"></link>
<link href="${basePath}styles/font-awesome.css" rel="stylesheet"></link>

<script type="text/javascript">
//<!--

var flag = false;
$(document).ready(function(){
	

	var optionString = "";
	flag = false;
	$("#noCompany").fadeIn();
	<c:forEach items="${allCompanyList}" var="item">
			optionString += "<option name='companyName' value='" + ${item.companyId} + "'>" + "${item.companyName}" +"</option>";
			flag = true;
			$("#noCompany").fadeOut();
	</c:forEach>

	$("#companyName").append(optionString);

});

$("#cancle").click(function(){
	loadHTML('${basePath}admin/showBackendDepartmentPage.action');
})

function callback(msg){
	alert("增加成功");
	loadHTML('${basePath}admin/showBackendDepartmentPage.action');
}

function checkSubmit(){
	
	if(flag){
		
	}else{
		
		alert("存在非法项");
		return flag;
	}
	
}
//-->
</script>

<div class="row-fluid">
	<form action="${basePath}admin/addDepartment.action"  enctype="multipart/form-data" method="post" target="hidden_frame"  onsubmit="return checkSubmit()">
		<div class="row-fluid line-margin">
			<span class="help-inline">部门名称：</span>
			<input type="text" class=" span2" placeholder="请输入内容" name="department.departmentName" required="required"/>
		</div>
		<div class="row-fluid line-margin">
			<span class="help-inline">部门等级：</span>
			<select class="input-small " name="department.departmentstatus">
				<option>0</option>
				<option>1</option>
				<option>2</option>
				<option>3</option>
				<option>4</option>
			</select>
		</div>
		<div class="row-fluid line-margin">
			<span class="help-inline">部门简称：</span>
			<input type="text" class=" span2" placeholder="请输入内容" name="department.departmentShortName" required="required"/>
		</div>
		<div class="row-fluid line-margin">
			<span class="help-inline">业务板块：</span>
			<input type="text" class=" span2" placeholder="请输入内容" name="department.businessUnits" required="required"/>
		</div>
		<div class="row-fluid line-margin">
			<span class="help-inline">部门编码：</span>
			<input type="text" class=" span2" placeholder="请输入内容" name="department.departmentCoding" required="required"/>
		</div>
		<div class="row-fluid line-margin">
			<span class="help-inline">籍贯：</span>
			<input type="text" class=" span2" placeholder="请输入内容" name="department.country" required="required"/>
		</div>
		<div class="row-fluid line-margin">
			<span class="help-inline">公司名称：</span>
			<select class="input-small " id="companyName" name="department.company.companyId" >
			</select>
			<font color="red" class="hide" id="noCompany">*暂无公司</font>
		</div>
		<div class="row-fluid line-margin">
			<button class="btn span1 " type="submit">
				确定
			</button>
			<button class="btn span1 " type="button" id="cancle">
				取消
			</button>
		</div>
	</form>
	<iframe name='hidden_frame' id="hidden_frame" style='display:none'></iframe>
</div>