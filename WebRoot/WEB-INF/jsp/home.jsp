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
<script>
$(document).ready(function(){
	
	var htmlContent1="",htmlContent2="",htmlContent3="";
	var index1=1,index2=1,index3=1;
	<c:forEach items="${resourceList}" var="item">
	
	<c:if test="${item.resourceType==1}">
		htmlContent1 = htmlContent1+'<div class="row-fluid"><div class="span12" >';
		switch(index1){
		case 1: htmlContent1 = htmlContent1+'<div class="badge badge-important">'+index1+'</div>';break;
		case 2: htmlContent1 = htmlContent1+'<div class="badge badge-success">'+index1+'</div>';break;
		case 3: htmlContent1 = htmlContent1+'<div class="badge badge-info">'+index1+'</div>';break;
		default : htmlContent1 = htmlContent1+'<div class="badge">'+index1+'</div>';
		}
		htmlContent1 = htmlContent1 +'<a href="${basePath}getFile/${item.resourcePath}">${item.resourceName }</a>';
		htmlContent1 = htmlContent1 +'<span class="time muted">${item.downloundCount}</span></div></div>';
		index1 ++;
	</c:if>
	<c:if test="${item.resourceType==2}">
	htmlContent2 = htmlContent2+'<div class="row-fluid"><div class="span12" >';
	switch(index2){
	case 1: htmlContent2 = htmlContent2+'<div class="badge badge-important">'+index2+'</div>';break;
	case 2: htmlContent2 = htmlContent2+'<div class="badge badge-success">'+index2+'</div>';break;
	case 3: htmlContent2 = htmlContent2+'<div class="badge badge-info">'+index2+'</div>';break;
	default : htmlContent2 = htmlContent2+'<div class="badge">'+index2+'</div>';
	}
	htmlContent2 = htmlContent2 +'<a href="${basePath}getFile/${item.resourcePath}">${item.resourceName }</a>';
	htmlContent2 = htmlContent2 +'<span class="time muted">${item.downloundCount}</span></div></div>';
	index2 ++;
	</c:if>
	
	<c:if test="${item.resourceType==3}">
	htmlContent3 = htmlContent3+'<div class="row-fluid"><div class="span12" >';
	switch(index3){
	case 1: htmlContent3 = htmlContent3+'<div class="badge badge-important">'+index3+'</div>';break;
	case 2: htmlContent3 = htmlContent3+'<div class="badge badge-success">'+index3+'</div>';break;
	case 3: htmlContent3 = htmlContent3+'<div class="badge badge-info">'+index3+'</div>';break;
	default : htmlContent3 = htmlContent3+'<div class="badge">'+index3+'</div>';
	}
	htmlContent3 = htmlContent3 +'<a href="${basePath}getFile/${item.resourcePath}">${item.resourceName }</a>';
	htmlContent3 = htmlContent3 +'<span class="time muted">${item.downloundCount}</span></div></div>';
	index3 ++;
	</c:if>
	</c:forEach>
	$("#resource1").html(htmlContent1);
	$("#resource2").html(htmlContent2);
	$("#resource3").html(htmlContent3);

	
	$("#classnotice").fadeIn(500);
	$("#testnotice").fadeIn(600);
	$("#resource").fadeIn(700);
});

function changeResource(obj){
	var value = parseInt(obj.value);
	switch(value){
	case	1: 
		$("#resource1").removeClass('hidden');
		$("#resource2").addClass('hidden');
		$("#resource3").addClass('hidden');
		break;
	case	2: 
		$("#resource2").removeClass('hidden');
		$("#resource1").addClass('hidden');
		$("#resource3").addClass('hidden');
		break;
	case	3: 
		$("#resource3").removeClass('hidden');
		$("#resource1").addClass('hidden');
		$("#resource2").addClass('hidden');
		break;
	}
	console.log(obj.value);
}
</script>

</head>
<body>
<div class="container-fluid" id="content">
	<div class="row-fluid">
		<div class="span8">
			<div class="row-fluid resources fixed-box hide"   id="classnotice">
				<div class="span12">
					<div class="row-fluid">
						<div class="span12">
							<b>课程公告</b>
							<a href="javascript:loadHTML('${basePath}getAllNormalKechengGongGao.action?notice.noticetype.noticeTypeId=1')" class="more">更多</a>
						</div>
					</div>
					<hr class="seperator" />
				<c:if test="${noticeList4!=null }">				 
							  <c:forEach var="item" items="${noticeList4 }">
							   <div class="row-fluid">
								<div class="span12">
									<i class="icon-info-sign"></i>
									<a href="javascript:loadHTML('${basePath}getNoticeContent.action?notice.noticeId=${item.noticeId}&notice.noticetype.noticeTypeId=${item.noticetype.noticeTypeId}')">${item.noticeTitle}</a>
								</div>
							</div>
							  </c:forEach>
							</c:if>			
				</div>
			</div>
			<div class="row-fluid resources fixed-box hide"   id="testnotice">
				<div class="span12">
					<div class="row-fluid">
						<div class="span12">
							<b>考试公告</b>
							<a  href="javascript:loadHTML('${basePath}getAllNormalKaoShiGongGao.action?notice.noticetype.noticeTypeId=2')" class="more">更多</a>
						</div>
					</div>
					<hr class="seperator" />
					<c:if test="${noticeList5!=null }">
							  <c:forEach var="item" items="${noticeList5 }">
							   <div class="row-fluid">
								<div class="span12">
									<i class="icon-info-sign"></i>
									<a href="javascript:loadHTML('${basePath}getNoticeContent.action?notice.noticeId=${item.noticeId}&notice.noticetype.noticeTypeId=${item.noticetype.noticeTypeId}')">${item.noticeTitle}</a>
								</div>
							</div>
							  </c:forEach>
							</c:if>			
					
				</div>
			</div>
		</div>
		<div class="span4">
			<div class="row-fluid resources hide" id="resource">
				<div class="span12">
					<div class="row-fluid">
						<div class="span12">
							<b>热门资源排行</b>
							  
							<a target="_blank" href="#" class="more">更多</a>
							 <select class="input-small more" onchange="changeResource(this)">
					              <option value="1">视频资源</option>
					              <option value="2">文档资源</option>
					              <option value="3"> 其他资源</option>
					            </select>
						</div>
					</div>
					<hr class="seperator" />
					<div id="resource1">
				
					</div>
					<div id="resource2" class="hidden">
				
					</div>
					<div id="resource3" class="hidden">
				
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
</body>
</html>
