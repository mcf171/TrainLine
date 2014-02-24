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
	console.log("1");
	var boj = $("#resourcePath");
	boj.text($("#resourceURLChoose").val());
	$("#modifyResource").val(1);
});

$("#cancle").click(function(){
	loadHTML('${basePath}admin/showBackendDocResourcePage.action');
});


function callback(msg){
	alert("增加成功");
	loadHTML('${basePath}admin/showBackendDocResourcePage.action');
}
//-->
</script>
	<div class="row-fluid">
	
	<form action="${basePath}admin/addResource.action"  enctype="multipart/form-data" method="post" target="hidden_frame">
	<input type="hidden"  value="${resource.resourceType}" name="resource.resourceType"/>
		<div class="row-fluid line-margin">
			<span class="help-inline">资源名称：</span>
			<input type="text" class=" span2" placeholder="请输入图书名称" name="resource.resourceName" value="${resource.resourceName}"/>
		</div>
		<div class="row-fluid line-margin">
			<span class="help-inline">资源URL：</span>

			
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