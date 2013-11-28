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
<title>主页</title>
<script type="text/javascript">
//<![CDATA[
var PAGES = {
	page_0: 'homeList.action',
	page_1: '${basePath}course_intoStudyCenter.action',
	page_2:'exam.jsp',
	page_3: 'dangjian.jsp',
	page_4: 'education.jsp',
	page_5: 'showNormalLiberaryListPage.action'
};

function load_page(page)
{
 	temp = PAGES[page];
	$('#container').attr('src', temp);
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
	<img src="images/logo.jpg" class="header-item"></img>
	<div class="header-item header-title">
		网络培训平台
	</div>
</div>
<div class="navbar">
	<div class="navbar-inner">
		<div class="row-fluid menu-container">
			<ul class="span12 nav nav-pills header-menu">
				<li id="page_0" class="span1 header-menu-item active"><a href="#">首页</a></li>
				<li id="page_1" class="span2 header-menu-item"><a href="#">学习中心</a></li>
				<li id="page_2" class="span2 header-menu-item"><a href="#">考试中心</a></li>
				<li id="page_3" class="span2 header-menu-item"><a href="#">网上党校</a></li>
				<li id="page_4" class="span2 header-menu-item"><a href="#">培训班</a></li>
				<li id="page_5" class="span2 header-menu-item"><a href="#">图书馆</a></li>
				<li id="page_6" class="span1 header-menu-item"><a href="forum/index.html" target="_blank">社区</a></li>
			</ul>
		</div>
	</div>
</div>
<div class="row-fluid">
	<iframe id="container" scrolling="no" frameborder="0" class="span10 offset1">
	</iframe>
</div>
<div class="push"></div>
<div class="importantInfo">
	<a href="#" onclick="hiddenClass('importantInfo')"><img src="images/importantInfo.png"/></a>
</div>
<div class="footer">
	<div class="row-fluid">
		<div class="span4">
			<span class="offset1">${user.userName}</span>
		</div>
		<div class="pull-right">
			<c:if test="${user.userState== 1}">
			<a href="getBackendIndex.action" target="_blank">后台管理</a>
			&nbsp;
			</c:if>
			<a href="userInfo.html" target="_blank">个人中心</a>
			&nbsp;
			<a href="${basePath}email/index.html">收件箱</a>
		</div>
	</div>
</div>
</body>
</html>

