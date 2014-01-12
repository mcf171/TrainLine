<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>
<!DOCTYPE html>
<html>
	<head>
		<title>中铁四局集团远程培训及管理平台登陆</title>
<style type="text/css">
#model-header {
	background: blue;
	color: white;
}
#left {
position:absolute;
	left:20px;
	top:30px;
	width: 100px;
	height: 130px;
}

#right {
	position: absolute;
	left: 200px;
	top: 50px;
	width: 200px;
	height: 150px;
	font-size: x-large;
}
</style>

		<script type="text/javascript" src="scripts/bootstrap.js"></script>
		<script type="text/javascript" src="scripts/jquery.js"></script>
		<script type="text/javascript" src="scripts/login.js"></script>
		<script src="scripts/sco.modal.js"></script>
<script src="scripts/sco.message.js"></script>
		<link rel="stylesheet" href="styles/bootstrap.css" type="text/css"></link>
		<link rel="stylesheet" href="styles/login.css" type="text/css"></link>
		<link href="styles/scojs.css" rel="stylesheet" media="screen">
	</head>

	<body>
	<c:if test="${!empty request.error }">
	<script>
	 $.scojs_message('用户名或密码错误', $.scojs_message.TYPE_ERROR);
	 </script>
	</c:if>
<c:if test="${empty session.user }">
		<div class="modal">
			<div class="modal-header" id="model-header">
				<h3>
					中铁四局集团远程培训及管理平台登陆
				</h3>
			</div>
			<div class="modal-body">
				<form class="form-horizontal" action="login.action"  method="post">
					<div class="control-group">
						<label class="control-label" for="inputEmail">
							用户名
						</label>
						<div class="controls">
							<input type="text" id="inputEmail" placeholder="用户名" name="user.userName" required>
						</div>
					</div>
					<div class="control-group">
						<label class="control-label" for="inputPassword">
							密 码
						</label>
						<div class="controls">
							<input type="password" id="inputPassword" placeholder="密码" name="user.userPassword" required>
						</div>
					</div>
					<div class="control-group">
						<label class="control-label" for="inputEmail">
							验证码
						</label>
						<div class="controls">
							<input type="text" value="" name="validCode" onblur="validCodeConfirm(this)" style="width:106px"> <img id="validCode" src="validationCode.action" onclick="refreshValidCode();"/>
						</div>
					</div>
					<div class="control-group">
						<div class="controls">
								<input type="radio" name="userType">
								学生
								<input type="radio" name="userType">
								老师
								<input type="radio" name="userType">
								管理员
							<button type="submit" class="btn btn-primary">
								登录
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
		</c:if>
		<c:if test="${!empty session.user }">
		<div class="modal">
			<div class="modal-header" id="model-header">
				<h3>
					中铁四局登录
				</h3>
			</div>
			<div class="modal-body" style="height: 200px;">
				<div id="left">
					<img alt="headimage" src="images/qq.jpg">
				</div>
				<div id="right">
					${user.userName }，您好！！
					<br>
					<br>
					欢迎你！
					<br>
					<br>
					<button type="button" class="btn btn-primary"
						style="width: 150px; height: 30px;" onclick="window.location.href='${basePath}index.jsp'">
						进入系统...
					</button>
				</div>
			</div>
		</div>
		</c:if>
<div id="lay_bg" class="lay_background" style="width: 1366px; height: 216px;">
		<img id="lay_bg_img" class="backendgroundImg" alt="" src="${basePath}images/bk5.jpg" >
		</div>
	</body>
</html>

