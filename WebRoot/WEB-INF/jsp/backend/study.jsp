<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
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
						<li class="jstree-leaf"><a class="blacked" href="questionnaire/manage-show.html">显示问卷</a></li>
						<li class="jstree-leaf"><a href="questionnaire/manage-add1.html">增加问卷</a></li>
						<li class="jstree-leaf"><a href="#">问卷安排</a></li>
					</ul>
				</li>
				<li class="jstree-open">
					<a href="#">学习管理</a>
					<ul>
						<li class="jstree-leaf"><a href="study/class-system.html">课程管理</a></li>
					</ul>
				</li>
				 
				<li class="jstree-open">
					<a href="#">学习成效管理</a>
					<ul>
						<li class="jstree-leaf"><a href="study/note-overview.html">笔记总览</a></li>
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
							<div class="row-fluid">
								<div class="span12">
									<i class="icon-info-sign"></i>
									现有 <span class="red-number">0</span> 门考试进行中
								</div>
							</div>
							<div class="row-fluid">
								<div class="span12">
									<i class="icon-info-sign"></i>
									共有 <span class="red-number">0</span> 份试卷待审批
								</div>
							</div>
							
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
							<div class="row-fluid">
								<div class="span12">
									<i class="icon-tasks"></i>
									<a target="_blank" href="#">撒看见地方和阿斯顿发还算监控废话</a>
									<span class="time muted">2013-08-13 23:55:19</span>
								</div>
							</div>
							<div class="row-fluid">
								<div class="span12">
									<i class="icon-tasks"></i>
									<a target="_blank" href="#">三剑客地方思考龙姐阿斯来快递费就算了</a>
									<span class="time muted">2013-08-13 23:55:19</span>
								</div>
							</div>
							<div class="row-fluid">
								<div class="span12">
									<i class="icon-tasks"></i>
									<a target="_blank" href="#">放到窝各个恶搞第三方个地方滚动送风格方</a>
									<span class="time muted">2013-08-13 23:55:19</span>
								</div>
							</div>
							<div class="row-fluid">
								<div class="span12">
									<i class="icon-tasks"></i>
									<a target="_blank" href="#">他各位让他改好的风格饿死如果打算</a>
									<span class="time muted">2013-08-13 23:55:19</span>
								</div>
							</div>
							<div class="row-fluid">
								<div class="span12">
									<i class="icon-tasks"></i>
									<a target="_blank" href="#">热饮就让他和大概第三方个阿动送风格的</a>
									<span class="time muted">2013-08-13 23:55:19</span>
								</div>
							</div>
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
							<div class="row-fluid">
								<div class="span12">
									<i class="icon-tasks"></i>
									<a target="_blank" href="#">撒看见地方和阿斯顿发还算监控废话</a>
								</div>
							</div>
							<div class="row-fluid">
								<div class="span12">
									<i class="icon-tasks"></i>
									<a target="_blank" href="#">三剑客地方思考龙姐阿斯来快递费就算了</a>
								</div>
							</div>
							<div class="row-fluid">
								<div class="span12">
									<i class="icon-tasks"></i>
									<a target="_blank" href="#">放到窝各个恶搞第三方个地方滚动送风格方</a>
								</div>
							</div>
							<div class="row-fluid">
								<div class="span12">
									<i class="icon-tasks"></i>
									<a target="_blank" href="#">他各位让他改好的风格饿死如果打算</a>
								</div>
							</div>
							<div class="row-fluid">
								<div class="span12">
									<i class="icon-tasks"></i>
									<a target="_blank" href="#">热饮就让他和大概第三方个阿动送风格的</a>
								</div>
							</div>
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
