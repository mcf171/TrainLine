<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
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
<title>主页</title>
</head>
<body>
<div class="container-fluid">
	<div class="row-fluid">
		<div class="span8">
			<div class="row-fluid resources fixed-box">
				<div class="span12">
					<div class="row-fluid">
						<div class="span12">
							<b>课程公告</b>
							<a target="_blank" href="#" class="more">更多</a>
						</div>
					</div>
					<hr class="seperator" />
				<c:if test="${noticeList4!=null }">				 
							  <c:forEach var="item" items="${noticeList4 }">
							   <div class="row-fluid">
								<div class="span12">
									<i class="icon-info-sign"></i>
									${item.noticeContent}
								</div>
							</div>
							  </c:forEach>
							</c:if>			
				</div>
			</div>
			<div class="row-fluid resources fixed-box">
				<div class="span12">
					<div class="row-fluid">
						<div class="span12">
							<b>考试公告</b>
							<a target="_blank" href="#" class="more">更多</a>
						</div>
					</div>
					<hr class="seperator" />
					<c:if test="${noticeList5!=null }">
							  <c:forEach var="item" items="${noticeList5 }">
							   <div class="row-fluid">
								<div class="span12">
									<i class="icon-info-sign"></i>
									${item.noticeContent}
								</div>
							</div>
							  </c:forEach>
							</c:if>			
					
				</div>
			</div>
		</div>
		<div class="span4">
			<div class="row-fluid resources">
				<div class="span12">
					<div class="row-fluid">
						<div class="span12">
							<b>热门资源排行</b>
							  
							<a target="_blank" href="#" class="more">更多</a>
							 <select class="input-small more">
              <option>视频资源</option>
              <option>文档资源</option>
              <option>动画资源</option>
            </select>
						</div>
					</div>
					<hr class="seperator" />
					
					<c:forEach items="${resourceList}" var="item"  varStatus="s">
					<div class="row-fluid">
						<div class="span12">
						   <c:choose> 
					        <c:when test="${s.count==1}"><div class="badge badge-important">${s.count}</div></c:when>
					        <c:when test="${s.count==2}"><div class="badge badge-success">${s.count}</div></c:when>
					        <c:when test="${s.count==3}"><div class="badge badge-info">${s.count}</div></c:when>
					        <c:otherwise><div class="badge">${s.count}</div></c:otherwise>
						   </c:choose>
						    <a href="#">${item.resourceName }</a>
							<span class="time muted">${item.downloundCount}</span>
						</div>
					</div>
					</c:forEach>
				</div>
			</div>
		</div>
	</div>
</div>
</body>
</html>
