<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<link rel="stylesheet" type="text/css" href="styles/bootstrap.css" />
<link rel="stylesheet" type="text/css" href="styles/global.css" />
<link rel="stylesheet" type="text/css" href="${basePath}styles/backend.css" />
<script type="text/javascript" src="scripts/jquery.js"></script>
<script type="text/javascript" src="scripts/bootstrap.js"></script>
<script type="text/javascript" src="scripts/global.js"></script>
<title>more</title>

</head>
<body>
<div class="container-fluid" id="content">
	<div class="row-fluid resources">
		<div class="span12">
			<div class="row-fluid">
				<h2>${type}</h2>
			</div>
					<hr class="seperator" />
				
				<c:forEach items="${list}" var="item">	
					<div class="row-fluid">
						<div class="pull-left"><i class="icon-info-sign"></i>
									&nbsp;<a href="javascript:loadHTML('${basePath}getNoticeContent.action?notice.noticeId=${item.noticeId}&notice.noticetype.noticeTypeId=${item.noticetype.noticeTypeId}')">${item.noticeContent}</a></div>
									
						<div class="pull-right offset1"><i class="icon-time"></i>&nbsp;公告时间：<fmt:formatDate value="${item.noticeTime }" type="date"/></div>
						<div class="pull-right"><i class="icon-tags"></i>&nbsp;公告人：${item.noticeAuthor}</div>
					</div>
					<hr/>
				</c:forEach>
				    <div class="pagination pagination-right">
				    <ul>
				    <li><a href="javascript:void(0)">总共：${page.allRows} 条记录</a></li>
				    <li><a href="javascript:void(0)">当前是：第 ${page.pageNum} 页</a></li>
				    <li><a  href="javascript:loadHTML('${basePath}${url}.action?notice.noticetype.noticeTypeId=${notice.noticetype.noticeTypeId}&pageNum=1')">&laquo;</a></li>
				    <c:if test="${page.allPages<=5}">
				    <c:forEach varStatus="item" begin="1" end="${page.allPages}">
				    	<li><a  href="javascript:loadHTML('${basePath}${url}.action?notice.noticetype.noticeTypeId=${notice.noticetype.noticeTypeId}&pageNum=${item.index}')">${item.index}</a></li>
				    </c:forEach>
				    </c:if>
				    <c:if test="${page.allPages>5}">
				    <c:forEach varStatus="item" begin="1" end="5">
				    	<li><a  href="javascript:loadHTML('${basePath}${url}.action?notice.noticetype.noticeTypeId=${notice.noticetype.noticeTypeId}&pageNum=${item.index}')">${item.index}</a></li>
				    </c:forEach>
				    	<li><a href="javascript:void(0)">..</a></li>
				    	<li><li><a  href="javascript:loadHTML('${basePath}${url}.action?notice.noticetype.noticeTypeId=${notice.noticetype.noticeTypeId}&pageNum=${page.allPages}')">${page.allPages}</a></li>
				    </c:if>
				    <li><a  href="javascript:loadHTML('${basePath}${url}.action?notice.noticetype.noticeTypeId=${notice.noticetype.noticeTypeId}&pageNum=${page.allPages}')">&raquo;</a></li>
				    </ul>
				    </div>
		</div>
	</div>
			
</div>
				
</body>
</html>
