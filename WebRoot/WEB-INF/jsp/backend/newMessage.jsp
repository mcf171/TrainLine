<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'newMessage.jsp' starting page</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<link rel="stylesheet" type="text/css" href="${basePath}styles/bootstrap.css" />
	<link rel="stylesheet" type="text/css" href="${basePath}styles/global.css" />
	<link rel="stylesheet" type="text/css" href="${basePath}styles/backend.css" />
	<script type="text/javascript" src="${basePath}scripts/jquery.js"></script>
	<script type="text/javascript" src="${basePath}scripts/jstree.js"></script>
	<script type="text/javascript" src="${basePath}scripts/bootstrap.js"></script>
	<script type="text/javascript" src="${basePath}scripts/mousewheel.js"></script>
	<script type="text/javascript" src="${basePath}scripts/global.js"></script>
	<script type="text/javascript" src="${basePath}scripts/backend.js"></script>
    <script type="text/javascript">

	$(document).ready(function ()
	{
	   $('#content').load('${basePath}manageMessageAction.action');
	});
</script>
  </head>
  
  <body>
    <div class="container-fluid">
		<div class="row-fluid">
			<div id="sidebar" class="span2 tree-container">
				<ul>
					<li class="jstree-open"><a href="#">消息管理</a>
						<ul>
							<li class="jstree-leaf"><a href="${basePath}manageMessageAction.action">消息管理</a>
							</li>
							<li class="jstree-leaf"><a href="${basePath}addMessageAction.action">消息添加</a>
							</li>
							
						</ul></li>
				</ul>
			</div>
            <div id="content" class="span10" >
   		</div>
		</div>
	</div>
  </body>
</html>
