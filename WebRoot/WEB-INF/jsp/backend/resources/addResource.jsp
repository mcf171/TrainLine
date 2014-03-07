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
	$("#porcess").animate({width:'100%'});
	alert("增加成功");
	var resourceType = parseInt("${resource.resourceType}");
	switch(resourceType){
	case 1:loadHTML('${basePath}admin/showBackendVideoResourcePage.action');break;
	case 2:loadHTML('${basePath}admin/showBackendDocResourcePage.action'); break; 
	case 3:loadHTML('${basePath}admin/showBackendDongTaiResourcePage.action'); break;
	}
	
}


//-->
</script>
	<div class="row-fluid">
	
	<form action="${basePath}admin/addResource.action"  enctype="multipart/form-data" method="post" target="hidden_frame"  onsubmit="checkForm()">
	<input type="hidden"  value="${resource.resourceType}" name="resource.resourceType"/>
		<div class="row-fluid line-margin">
			<span class="help-inline">资源名称：</span>
			<input type="text" class=" span2" placeholder="请输入图书名称" name="resource.resourceName" value="${resource.resourceName}" required="required"/>
		</div>
		<div class="row-fluid line-margin">
			<span class="help-inline">资源URL：</span>

			
           	<span class=" span2 uneditable-input" id="resourcePath" >${resource.resourcePath}</span>
           	<input type="file" id="resourceURLChoose" style="width: 65px;" name="upload" class=" span2 " placeholder="请选择上传" required="required">
		</div>
		
		
		<div class="row-fluid line-margin">
			<button class="btn span1 offset1 " type="submit">
				确定
			</button>
			<button class="btn span1 offset1" type="button" id="cancle">
				取消
			</button>
		</div>
		<div class="row-fluid">
						    <div class="progress progress-striped active">
							    <div class="bar" style="width:0;" id="porcess"></div>
							    </div>
					</div>
					<script>
						function checkForm(){
							
							$("#porcess").animate({width:'90%'});
						}
					</script>
		</form>
		
		<iframe name='hidden_frame' id="hidden_frame" style='display:none'></iframe>