<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
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
<title>后台</title>
<script type="text/javascript">
//<![CDATA[
var PAGES = {
	page_0: '${basePath}note_intoStudy.action',
	page_1: '${basePath}admin/getExaminations.action',
	page_2: '${basePath}trainingClass_intoClasspage.action',
	page_3: 'resource.jsp',
	page_4: '${basePath}showBackendHumanPage.action',
	page_5: '${basePath}newMessageAction.action',
	page_6: 'report.jsp',
	page_7: '${basePath}conductSystemaction.action',
	page_8: '${basePath}showBackendforumListPage.action',
	page_9:'${basePath}showBackendLiberaryListPage.action'
};

function load_page(page)
{
	$('#container').attr('src', PAGES[page]);
}

$(document).ready(function ()
{
	$('.header-menu-item > a').click(function ()
	{
		$('.header-menu-item').removeClass('active');
		$(this).parent().addClass('active');
		load_page($(this).parent().attr('id'));
	});

	load_page('page_0');
	setInterval(function ()
	{
		try
		{
			var h1 = $('#container').contents()[0].body.offsetHeight;
			var h2 = $('#container').contents()[0].body.scrollHeight;
			$('#container').height(h1 < h2 ? h1 : h2);
		} catch (e) {}
	}, 33);
});
//]]>
</script>
</head>
<body>
<div class="row-fluid">
	<img src="${basePath}images/logo.jpg" class="header-item"></img>
	<div class="header-item header-title">
		网络培训平台后端管理模块
	</div>
</div>
<div class="navbar">
	<div class="navbar-inner">
		<div class="row-fluid">
			<ul class="span12 nav nav-pills header-menu">
				<li id="page_0" class="header-menu-item active"><a href="#">学习管理</a></li>
				<li id="page_1" class="header-menu-item"><a href="#">考试管理</a></li>
				<li id="page_2" class="header-menu-item"><a href="#">班级管理</a></li>
				<li id="page_3" class="header-menu-item"><a href="#">资源管理</a></li>
				<li id="page_4" class="header-menu-item"><a href="#">人员管理</a></li>
				<li id="page_5" class="header-menu-item"><a href="#">消息管理</a></li>
				<li id="page_6" class="header-menu-item"><a href="#">报表管理</a></li>
				<li id="page_7" class="header-menu-item"><a href="#">系统管理</a></li>
				<li id="page_8" class="header-menu-item"><a href="#">社区管理</a></li>
				<li id="page_9" class="header-menu-item"><a href="#">图书馆管理</a></li>
			</ul>
		</div>
	</div>
</div>
<div class="row-fluid">
	<iframe id="container" scrolling="no" frameborder="0" class="span12">
	</iframe>
</div>
</body>
</html>

