<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<link rel="stylesheet" href="${basePath}styles/edit.css" type="text/css"></link>
<link href="${basePath}styles/font-awesome.css" rel="stylesheet"></link>

<script type="text/javascript">
//<!--
$(document).ready(function(){
	var optionString = "";
	<c:forEach items="${allCompanyList}" var="item">
			optionString += "<option name='companyName' value='" + ${item.companyId} + "'>" + "${item.companyName}" +"</option>";
	</c:forEach>

	$("#companyName").append(optionString);

});


$("#cancle").click(function(){
	loadHTML('${basePath}showBackendInsideLiberaryListPage.action');
});

$("#companyName").change(function(){
	
	console.log(this.value);
	$.ajax({
		url:'getDepartmentList.action',
		
		data:'department.company.companyName=' + this.value,
		
		success:function(msg){	
			alert(msg.departmentName);
		}
					
	});
});

function showDepartmentName(){
	
}
//-->
</script>


<div class="row-fluid">
	<form action="addPosition.action"  enctype="multipart/form-data" method="post">
		<div class="row-fluid line-margin">
			<span class="help-inline">职位名：</span>
			<input type="text" class=" span2" placeholder="请输入人员名称" name="position.positionName" />
		</div>
		<div class="row-fluid line-margin">
			<span class="help-inline">公司名称：</span>
			<select class="input-small " id="companyName" name="position.company.companyName" onblur="showDepartmentName()">
			</select>
		</div>
		<div class="row-fluid line-margin">
			<span class="help-inline">部门名称：</span>
			<select class="input-small " name="position.department.departmentName">
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