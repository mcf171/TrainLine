<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
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
<link rel="stylesheet" type="text/css" href="${basePath}styles/backend.css" />
<script type="text/javascript" src="${basePath}scripts/jquery.js"></script>
<script type="text/javascript" src="${basePath}scripts/jstree.js"></script>
<script type="text/javascript" src="${basePath}scripts/bootstrap.js"></script>
<script type="text/javascript" src="${basePath}scripts/mousewheel.js"></script>
<script type="text/javascript" src="${basePath}scripts/global.js"></script>
<script type="text/javascript" src="${basePath}scripts/backend.js"></script>
<title>考试管理</title>
<script type="text/javascript">
//<![CDATA[
$(document).ready(function ()
{
	$('#content').load('${basePath}getQuestionsPage.action');
});
//]]>
</script>
</head>
<body>
<div class="container-fluid">
	<div class="row-fluid">
		<div id="sidebar" class="span2 tree-container">
			<ul>
				<li class="jstree-open">
					<a href="#">题库管理</a>
					<ul>
						<li class="jstree-leaf"><a class="blacked" href="${basePath}getQuestionsPage.action">题目管理</a></li>
					</ul>
				</li>
				<li class="jstree-open">
					<a href="#">试卷管理</a>
					<ul>
						<li class="jstree-leaf"><a href="test/questionareOpen.html">已公布</a></li>
						<li class="jstree-leaf"><a href="test/questionareKeep.html">保留</a></li>
						<li class="jstree-leaf"><a href="test/questionareRubble.html">回收站</a></li>
					</ul>
				</li>
				<li class="jstree-open">
					<a href="#">考试管理</a>
					<ul>
						<li class="jstree-leaf"><a href="test/questionare.html">考试查看</a></li>
					</ul>
				</li>
			</ul>
		</div>
		<div id="content" class="span10">
		</div>
	</div>
</div>
</body>
</html>