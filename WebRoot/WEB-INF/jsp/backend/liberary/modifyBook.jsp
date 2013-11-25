<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<link rel="stylesheet" href="${basePath}styles/edit.css" type="text/css"></link>
<link href="${basePath}styles/font-awesome.css" rel="stylesheet"></link>

<script type="text/javascript" src="${basePath}scripts/jquery.js"></script>    
<script type="text/javascript" src="${basePath}scripts/library.js"></script>


<script type="text/javascript">
//<!--
$(document).ready(function(){
	

var optionString = "";
<c:forEach items="${bookTypeList}" var="item">
		optionString += "<option name='bookTypeName' value='" + ${item.bookTypeId} + "'>" + "${item.bookTypeName}" +"</option>"
</c:forEach>

$("#bookType").append(optionString);
$("#bookURLChoose").change(function(){
	var boj = $("#bookURL");
	boj.text($("#bookURLChoose").val());
	$("#hiddenBookURL").val($("#bookURLChoose").val());
	$("#modifyBookURL").val("1");
});

$("#cancle").click(function(){
	loadHTML('${basePath}showBackendInsideLiberaryListPage.action');
});

});

function addBook(){

		$.ajax({
		 	 type: "post",
		 	 url: basePath+"addBook.action",
		 	 data:"book.bookId=" + bookId,
		  	success: function(msg){
			 
			  $('#myModal').modal('hide')
			  mmGirdTable.removeRow(mmGirdTable.selectedRowsIndex());
		  }
		});
}
//-->
</script>
	<div class="row-fluid">
	
	<form action="${basePath}modifyBook.action"  enctype="multipart/form-data" method="post">
	<input type="hidden"  value="0" name="modifyBookURL" id="modifyBookURL"/>
	<input type="hidden"   name="book.bookId"  value="${book.bookId}"/>
	<input type="hidden"   name="book.bookState"  value="${book.bookState}"/>
		<div class="row-fluid line-margin">
			<span class="help-inline">图书名称：</span>
			<input type="text" class=" span2" placeholder="请输入图书名称" name="book.bookName" value="${book.bookName}"/>
		</div>
		
		<div class="row-fluid line-margin">
			<span class="help-inline">图书简介：</span>
			<input type="text" class=" span2" placeholder="请输入图书简介" name="book.bookContent" value="${book.bookContent}"/>
		</div>
		<div class="row-fluid line-margin">
			<span class="help-inline">图书编号：</span>
			<input type="text" class=" span2" placeholder="请输入图书编号" name="book.bookClassIndex" value="${book.bookClassIndex}"/>
		</div>
		<div class="row-fluid line-margin">
			<span class="help-inline">图书类别：</span>
			<select class="input-small " id="bookType" name="book.bookType.bookTypeId" value="${book.bookType.bookTypeId}">
			</select>
		</div>
		<div class="row-fluid line-margin">
			<span class="help-inline">图书URL：</span>
			</div>
		<div class="row-fluid line-margin">
			<input type="hidden" name="book.bookURL" id="hiddenBookURL" value="${book.bookURL}">
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