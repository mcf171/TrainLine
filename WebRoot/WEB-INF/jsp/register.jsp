<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="/struts-tags"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>

<!DOCTYPE html>
<html>
	<head>
		<title>register.html</title>

		<script type="text/javascript" src="scripts/bootstrap.js"></script>
		<script type="text/javascript" src="scripts/jquery.js"></script>
		<link rel="stylesheet" href="styles/bootstrap.css" type="text/css"></link>
		<style type="text/css">
		#model-header{
		background: blue;
		color: white;
		}
		</style>
	</head>

	<body>
		<div class="modal">
			<div class="modal-header" id="model-header">
				<h3>
					中铁四局注册界面
				</h3>
			</div>
			<div class="modal-body">
				<form class="form-horizontal" action="register.action" method="post">
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
							<input type="password" id="inputPassword" placeholder="密码" name="user.userPassward"required>
						</div>
					</div>
					<div class="control-group">
						<label class="control-label" for="inputPassword2">
							确认密 码
						</label>
						<div class="controls">
							<input type="password" id="inputPassword2" placeholder="确认密码" required>
						</div>
					</div>
					<div class="control-group">
						<div class="controls">
							<button type="submit" class="btn btn-primary">
								注册
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	</body>
</html>
