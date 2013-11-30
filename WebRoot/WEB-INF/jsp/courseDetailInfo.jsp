<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="content-type" content="text/html; charset=UTF-8" />
<link rel="stylesheet" type="text/css" href="${basePath}styles/bootstrap.css" />
<link rel="stylesheet" type="text/css" href="${basePath}styles/global.css" />
<link rel="stylesheet" type="text/css" href="${basePath}styles/index.css" />
<script type="text/javascript" src="${basePath}scripts/jquery.js"></script>
<script type="text/javascript" src="${basePath}scripts/bootstrap.js"></script>
<script type="text/javascript" src="${basePath}scripts/global.js"></script>
<script type="text/javascript" src="${basePath}scripts/global.js"></script>
<title>课程详细信息</title>
<script type="text/javascript">
$(document).ready(function ()
{
$.ajax({
	type:"post",
	url:"${basePath}course_catalogueDetail.action",
	dataType:"json",
	data:"courseId=${courseId}",
	success:function(json){
	if(json.ctList!=null && json.ctList.length>0)
	{
	var ctlgList = json.ctList;
	addDiv1(ctlgList);
	}else
	{
	  addDiv2()
	}
	},
	error:function()
	{
	
	}
	});

});

function addDiv1(ctlgList)
{
	var div="";
	for(var i=0;i<ctlgList.length;i++)
	{
	var catalogue = ctlgList[i];
	div+="<tr><td>"+catalogue.catalogueName+"</td><td>"+catalogue.catalogueNumber+"</td><td>"+catalogue.uploading+"</td><td>"+catalogue.uploadingPerson+"</td></tr>"
	}
	$("#tbody").append(div);
}

function addDiv2()
{
var div ="<tr><td colspan='4'>还没有添加章节信息哦</td></tr>";
$("#tbody").append(div);
}
</script>
</head>
<body>

<table id="table" class="table">
<thead id="thead">
<tr>
<td colspan="4"><h3>课程详细信息</h3></td>
</tr>
<tr>
<td><b>章节名称</b></td><td><b>章节编号</b></td><td><b>上传时间</b></td><td><b>上传人</b></td>
</tr>
</thead>
<tbody id="tbody">
<tr>
</tr>
</tbody>
</table>
</body>
</html>

