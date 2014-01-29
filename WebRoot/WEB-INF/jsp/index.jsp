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
	page_0: '${basePath}getHomeNotice.action',
	page_1: '${basePath}getStudyCenterPage.action',
	page_2:'${basePath}getNormalTestArrangementPage.action',
	page_3: '${basePath}showNetDangKePage.action',
	page_4: '${basePath}getNormalTrainClassPage.action',
	page_5: '${basePath}showNormalLiberaryListPage.action'
};

function load_page(page)
{
 	temp = PAGES[page];
	$('#container').load(temp);
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
		<div class="row-fluid">
			<ul class="span12 nav nav-pills header-menu">
				<li id="page_0" class="span1 header-menu-item active"><a href="#">首页</a></li>
				<li id="page_1" class="span2 header-menu-item"><a href="#">学习中心</a></li>
				<li id="page_2" class="span2 header-menu-item"><a href="#">考试中心</a></li>
				<li id="page_4" class="span2 header-menu-item"><a href="#">培训班</a></li>
				<li id="page_3" class="span2 header-menu-item"><a href="#">网上党校</a></li>
				<li id="page_5" class="span2 header-menu-item"><a href="#">图书馆</a></li>
				<li id="page_6" class="span1 header-menu-item"><a href="${rootPath}/jforum/jforum.page?module=user&action=validateLogin&username=${user.userName}&password=${user.userPassword }&login=%E7%99%BB%E5%85%A5" >社区</a></li>
			</ul>
		</div>
	</div>
</div>
<div class="row-fluid" id="content">
	<div id="container"></div>
</div>
<div class="push"></div>
<div class="importantInfo">
	<div class="span4">
			<div class="row-fluid resources">
				<div class="span12">
					<div class="row-fluid">
						<div class="span12">
							<b>通知</b>
							  
							<a href="javascript:hiddenClass('importantInfo')" class="more"><i class=" icon-remove"></i></a>
							<a target="_blank" href="#" class="more">更多</a> 
							
						</div>
					</div>
					<hr class="seperator" />
					
					<c:forEach items="${user.message}" var="item"  varStatus="s">
					<div class="row-fluid">
						<div class="span12">
						
					        ${s.count}、<a href="${basePath}${item.url}">${item.messageTitle }</a>
						</div>
					</div>
					</c:forEach>
				</div>
			</div>
		</div>
</div>
<div class="footer">
	<div class="row-fluid">
		<div class="span4">
			<span class="offset1">${user.userName}</span>
		</div>
		<div class="pull-right">
			<a href="${basePath}logout.action">注销</a>
			&nbsp;
			<c:if test="${user.userState== 1}">
			<a href="getBackendIndex.action" target="_blank">后台管理</a>
			&nbsp;
			</c:if>
			<a href="javascript:alert('正在建设中')" >个人中心</a>
			&nbsp;
			<a href="${basePath}email/index.html">收件箱</a>
		</div>
	</div>
</div>
</body>
</html>

