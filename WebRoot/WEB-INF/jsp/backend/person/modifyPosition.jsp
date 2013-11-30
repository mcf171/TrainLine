<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<link rel="stylesheet" href="${basePath}styles/edit.css" type="text/css"></link>
<link href="${basePath}styles/font-awesome.css" rel="stylesheet"></link>
<script type="text/javascript" src="${basePath}scripts/jquery.js"></script>

<script type="text/javascript">
//<!--
$(document).ready(function(){
	var optionString = "";
	var companyNameValue = ${position.department.company.companyId };
	<c:forEach items="${allCompanyList}" var="item">
		var itemCompanyId = ${item.companyId};
		if(companyNameValue == itemCompanyId){
			optionString += "<option name='companyName' value='" + itemCompanyId + "' selected='selected'>" + "${item.companyName}" +"</option>";
		}else{
			optionString += "<option name='companyName' value='" + itemCompanyId + "'>" + "${item.companyName}" +"</option>";
		}
			
	</c:forEach>

	$("#companyName").append(optionString);
	
	getDepartmentNameByCompanyId();	
});


$("#cancle").click(function(){

	loadHTML('${basePath}showBackendPositionPage.action');
});

$("#companyName").change(function(){
	$("#departmentName").find("option").remove();
	
	$.ajax({
		url:'getDepartmentList.action',
		data:'department.company.companyId=' + this.value,
		success:function(msg){	
			var optionString = "";
			for(var i=0;i<msg.human.length;i++){
				optionString += "<option name='departmentName' value='" + msg.human[i].departmentId + "'>" + msg.human[i].departmentName +"</option>";
			}
			$("#departmentName").append(optionString);
		}					
	});
});


function getDepartmentNameByCompanyId() {
	var value = $("#companyName").val();
	var departmentNameValue = ${position.department.departmentId};
	$("#departmentName").find("option").remove();
		$.ajax({
					url : 'getDepartmentList.action',
					data : 'department.company.companyId=' + value,
					success : function(msg) {
						var optionString = "";
						for ( var i = 0; i < msg.human.length; i++) {
							if(departmentNameValue == msg.human[i].departmentId){
								optionString += "<option name='departmentName' value='" + msg.human[i].departmentId + "' selected = 'selected'>"
								+ msg.human[i].departmentName + "</option>";
							}
							optionString += "<option name='departmentName' value='" + msg.human[i].departmentId + "'>"
									+ msg.human[i].departmentName + "</option>";
						}
						$("#departmentName").append(optionString);
					}
		});
}
//-->
</script>


<div class="row-fluid">
	<form action="modifyPosition.action"  enctype="multipart/form-data" method="post">
		<div class="row-fluid line-margin">
			<span class="help-inline">职位ID：</span>
			<input type="text" class=" span2" placeholder="请输入职位名称" name="position.positionId" value="${position.positionId}"/>
		</div>
		<div class="row-fluid line-margin">
			<span class="help-inline">职位名：</span>
			<input type="text" class=" span2" placeholder="请输入职位名称" name="position.positionName" value="${position.positionName}"/>
		</div>
		<div class="row-fluid line-margin">
			<span class="help-inline">公司名称：</span>
			<select class="input-small " id="companyName">
			</select>
		</div>
		<div class="row-fluid line-margin">
			<span class="help-inline">部门名称：</span>
			<select class="input-small " id="departmentName" name="position.department.departmentId">
			</select>
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