<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<link rel="stylesheet" href="${basePath}styles/edit.css" type="text/css"></link>
<link href="${basePath}styles/font-awesome.css" rel="stylesheet"></link>
    
<script type="text/javascript" src="${basePath}scripts/library.js"></script>


<script type="text/javascript">
//<!--
$(document).ready(function(){

});
$("#resourceURLChoose").change(function(){
	var boj = $("#resourcePath");
	boj.text($("#resourceURLChoose").val());
	$("#modifyResource").val(1);
});

$("#cancle").click(function(){
	loadHTML('${basePath}admin/showBackendDocResourcePage.action');
});


function callback(msg){
	
	loadHTML('${basePath}admin/showBackendDocResourcePage.action');
}
//-->
</script>
	<div class="row-fluid">
	
	<form action="${basePath}admin/updateResource.action"  enctype="multipart/form-data" method="post" target="hidden_frame">
	<input type="hidden"  value="${resource.resourceType}" name="resource.resourceType"/>
	<input type="hidden"  value="${resource.resourceId}" name="resource.resourceId"/>
	<input type="hidden"  value="0" name="modifyResource" id="modifyResource"/>
		<div class="row-fluid line-margin">
			<span class="help-inline">资源名称：</span>
			<input type="text" class=" span2" placeholder="请输入图书名称" name="resource.resourceName" value="${resource.resourceName}"/>
		</div>
		
		<div class="row-fluid line-margin">
			<span class="help-inline">下载次数：</span>
			<input type="text" class=" span2" placeholder="请输入图书简介" name="resource.downloundCount"  value="${resource.downloundCount}"/>
		</div>
		<div class="row-fluid line-margin">
			<span class="help-inline">资源URL：</span>
			</div>
		<div class="row-fluid line-margin">
			
           	<span class=" span2 uneditable-input" id="resourcePath" >${resource.resourcePath}</span>
           	<input type="file" id="resourceURLChoose" style="width: 65px;" name="image" class=" span2 " placeholder="请选择上传图书">

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
		
		<iframe name='hidden_frame' id="hidden_frame" style='display:none'></iframe>