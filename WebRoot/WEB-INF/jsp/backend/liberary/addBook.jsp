<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<link rel="stylesheet" href="${basePath}styles/edit.css" type="text/css"></link>
<link href="${basePath}styles/font-awesome.css" rel="stylesheet"></link>
    
<script type="text/javascript" src="${basePath}scripts/library.js"></script>


<script type="text/javascript">
//<!--
$(document).ready(function(){
	

var optionString = "";
<c:forEach items="${bookTypeList}" var="item">
		optionString += "<option name='bookTypeName' value='" + ${item.bookTypeId} + "'>" + "${item.bookTypeName}" +"</option>"
</c:forEach>

$("#bookType").append(optionString);

});
$("#bookURLChoose").change(function(){
	var boj = $("#bookURL");
	boj.text($("#bookURLChoose").val());
	$("#hiddenBookURL").val($("#bookURLChoose").val());

});

$("#cancle").click(function(){
	loadHTML('${basePath}showBackendInsideLiberaryListPage.action');
});


function callback(msg){
	if(msg=="true"){
		$("#porcess").animate({width:'100%'});
		loadHTML('showBackendInsideLiberaryListPage.action');	
	}else{
		alert("文件类型错误：只允许doc、ppt、pdf");
	}
	
}
//-->
</script>
	<div class="row-fluid">
	
	<form action="${basePath}addBook.action"  enctype="multipart/form-data" method="post" target="hidden_frame" onsubmit="checkForm()" onerror="alert(1)">
	<input type="hidden"  value="${book.bookState}" name="book.bookState"/>
		<div class="row-fluid line-margin">
			<span class="help-inline">图书名称：</span>
			<input type="text" class=" span2" placeholder="请输入图书名称" name="book.bookName" />
		</div>
		
		<div class="row-fluid line-margin">
			<span class="help-inline">图书简介：</span>
			<input type="text" class=" span2" placeholder="请输入图书简介" name="book.bookContent"/>
		</div>
		<div class="row-fluid line-margin">
			<span class="help-inline">图书编号：</span>
			<input type="text" class=" span2" placeholder="请输入图书编号" name="book.bookClassIndex"/>
		</div>
		<div class="row-fluid line-margin">
			<span class="help-inline">图书类别：</span>
			<select class="input-small " id="bookType" name="book.bookType.bookTypeId">
			</select>
		</div>
		<div class="row-fluid line-margin">
			<span class="help-inline">图书URL：</span>
			</div>
		<div class="row-fluid line-margin">
			
           	<span class=" span2 uneditable-input" id="bookURL" >${book.bookURL}</span>
           	<input type="file" id="bookURLChoose" style="width: 65px;" name="image" class=" span2 " placeholder="请选择上传图书">

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
		<iframe name='hidden_frame' id="hidden_frame" style='display:none'></iframe>
		