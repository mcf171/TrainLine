<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<link rel="stylesheet" href="${basePath}styles/edit.css" type="text/css"></link>
<link href="${basePath}styles/font-awesome.css" rel="stylesheet"></link>
    
<script type="text/javascript" src="${basePath}scripts/library.js"></script>


<script type="text/javascript">
//<!--
$(document).ready(function(){

$("#cancle").click(function(){
	loadHTML('${basePath}showBackendforumTheamListPage.action');
});
}

//-->
</script>
	<div class="row-fluid">
	
	<form action="${basePath}addThemeInto.action"  enctype="multipart/form-data" method="post">
		<div class="row-fluid line-margin">
			<span class="help-inline">主题名称：</span>
			<input type="text" class=" span2" placeholder="请输入主题名称" name="them.themeName" />
		</div>		
		<div class="row-fluid line-margin">
			<button class="btn span2 offset1 " type="submit">
				确定
			</button>
			<button class="btn span2 offset1" type="button" id="cancle">
				取消
			</button>
		</div>
		</form>