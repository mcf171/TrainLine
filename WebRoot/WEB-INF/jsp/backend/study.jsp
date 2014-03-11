<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
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
<title>学习管理</title>
</head>
<body>
<div class="container-fluid">
	<div class="row-fluid">
		<div id="sidebar" class="span2 tree-container">
			<ul>
			<li class="jstree-open">
					<a href="#">问卷管理</a>
					<ul>
						<li class="jstree-leaf"><a class="blacked" href="${basePath}admin/intoQuestionnairePage.action">显示问卷</a></li>
						<li class="jstree-leaf"><a href="${basePath}admin/getQuestionnaireArrangementListPage.action">问卷安排</a></li>
					</ul>
				</li>
				<li class="jstree-open">
					<a href="#">学习管理</a>
					<ul>
						<li class="jstree-leaf"><a href="${basePath}admin/intoCoursePage.action">课程管理</a></li>
					</ul>
				</li>
				 
				<li class="jstree-open">
					<a href="#">学习成效管理</a>
					<ul>
						<li class="jstree-leaf"><a href="${basePath}admin/showNotePage.action">笔记总览</a></li>
					</ul>
				</li>
				
			</ul>
		</div>
		<div id="content" class="span10">
			<div class="row-fluid">
				<div class="span5">
					<div class="row-fluid resources fixed-box">
						<div class="span12">
							<div class="row-fluid">
								<div class="span12">
									<b>重要提示</b>
								</div>
							</div>
							<hr class="seperator" />
							<c:if test="${noticeList1!=null }">
							  <c:forEach var="item" items="${noticeList1 }">
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
				<div class="span5">
					<div class="row-fluid resources fixed-box">
						<div class="span12">
							<div class="row-fluid">
								<div class="span12">
									<b>管理员公告</b>
									<a target="_blank" href="#" class="more">更多</a>
								</div>
							</div>
							<hr class="seperator" />
							<c:if test="${noticeList2!=null }">
							  <c:forEach var="item" items="${noticeList2 }">
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
			</div>
			<div class="row-fluid">
				<div class="span5">
					<div class="row-fluid resources fixed-box">
						<div class="span12">
							<div class="row-fluid">
								<div class="span12">
									<b>规章制度</b>
									<a target="_blank" href="#" class="more">更多</a>
								</div>
							</div>
							<hr class="seperator" />
							<c:if test="${noticeList3!=null }">
							  <c:forEach var="item" items="${noticeList3 }">
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
				<div class="span5">
					<div class="row-fluid resources fixed-box">
						<div class="span12">
							<div class="row-fluid">
								<div class="span12">
									<b>跟踪</b>
								</div>
							</div>
							<hr class="seperator" />
							<div class="row-fluid">
								<div class="span12">
									<i class="icon-user"></i>
									系统当前有 <span class="red-number">0</span> 人在线
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
</body>
</html>
