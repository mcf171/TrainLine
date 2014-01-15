<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="c"  uri="http://java.sun.com/jsp/jstl/core" %>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<link rel="stylesheet" type="text/css" href="styles/bootstrap.css" />
<link rel="stylesheet" href="styles/font-awesome.min.css">
<link rel="stylesheet" type="text/css" href="styles/global.css" />
<script type="text/javascript" src="scripts/jquery.js"></script>
<script type="text/javascript" src="scripts/bootstrap.js"></script>
<script type="text/javascript" src="scripts/global.js"></script>
<title>主页</title>
</head>
<body>
<div class="container-fluid" id="content">
  <div class="row-fluid">
    <div class="span9 resources">
      <div class="row-fluid ">
        <ul class="breadcrumb">
          <li class="active">您现在的位置： </li>
          <li><a href="homeList.action">首页</a> <span class="divider">/</span></li>
          <li class="active">${notice.noticetype.noticeTypeName}</li>
        </ul>
      </div>
      <div class="row-fluid ">
        <h2 class="text-center">${notice.noticeTitle}</h2>
      </div>
      <div>
        <h6 class="text-center">时间：<fmt:formatDate value="${notice.noticeTime}" type="both" />;  通知人：${notice.noticeAuthor} </h6>
      </div>
      <hr class="seperator"/>
      <div class="row-fluid">
        <p>${notice.noticeContent}</p>
      </div>
      <hr class="seperator"/>
      <div class="row-fluid"> 上一篇：
      <c:if test="${!empty preNotice}">
      <a href="javascript:loadHTML('${basePath}getNoticeContent.action?notice.noticeId=${preNotice.noticeId}&notice.noticetype.noticeTypeId=${preNotice.noticetype.noticeTypeId}')">${preNotice.noticeTitle}</a> 
      </c:if>
      <c:if test="${empty preNotice}">
      <a href="javascript:void(0)">没有了</a> 
      </c:if>
      </div>
      <div class="row-fluid"> 下一篇：
	<c:if test="${!empty lastNotice}">
      <a href="javascript:loadHTML('${basePath}getNoticeContent.action?notice.noticeId=${lastNotice.noticeId}&notice.noticetype.noticeTypeId=${lastNotice.noticetype.noticeTypeId}')">${lastNotice.noticeTitle}</a> 
      </c:if>
      <c:if test="${empty lastNotice}">
      <a href="javascript:void(0)">没有了</a> 
      </c:if>
	</div>
    </div>
    <div class="span3 resources">
      <div class="row-fluid ">
        <ul class="breadcrumb">
          <li class="active"><i class="icon-folder-open"></i> ${notice.noticetype.noticeTypeName}</li>
        </ul>
      </div>
      <div class="row-fluid ">
        <ul class="shortInfo">
        <!-- 
          <li> <div class="pull-left"><a href="#">And many more with Custom CSS</a></div><span class="label label-important pull-left">重要</span></li>
          <li> <div class="pull-left"><a href="#">And many more with Custom CSS</a></div><span class="label label-important pull-left">重要</span></li>
           -->
           <c:forEach items="${list}" var="item">
           		<li> <div class="pull-left"><a href="javascript:loadHTML('${basePath}getNoticeContent.action?notice.noticeId=${item.noticeId}&notice.noticetype.noticeTypeId=${item.noticetype.noticeTypeId}')">${item.noticeTitle}</a></div></li>
           </c:forEach>
        </ul>
      </div>
    </div>
  </div>
</div>
</body>
</html>