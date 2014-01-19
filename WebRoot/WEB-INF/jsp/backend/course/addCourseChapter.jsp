<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="content-type" content="text/html; charset=UTF-8" />
<link rel="stylesheet" type="text/css"
	href="${basePath}styles/bootstrap.css" />
<link rel="stylesheet" type="text/css"
	href="${basePath}styles/global.css" />
<link rel="stylesheet" type="text/css"
	href="${basePath}styles/backend.css" />
<script type="text/javascript" src="${basePath}scripts/jquery.js"></script>
<script type="text/javascript" src="${basePath}scripts/jstree.js"></script>
<script type="text/javascript" src="${basePath}scripts/bootstrap.js"></script>
<script type="text/javascript" src="${basePath}scripts/mousewheel.js"></script>
<script type="text/javascript" src="${basePath}scripts/global.js"></script>
<script type="text/javascript" src="${basePath}scripts/backend.js"></script>

<link rel="stylesheet" type="text/css" href="${basePath}styles/mmgrid.css" />
<link rel="stylesheet" type="text/css" href="${basePath}styles/global.css" />
<link rel="stylesheet" type="text/css"
	href="${basePath}styles/mmpaginator.css" />
<link rel="stylesheet" type="text/css"
	href="${basePath}themes/mmgrid/mmgrid.css" />
<link rel="stylesheet" type="text/css"
	href="${basePath}themes/mmgrid/mmpaginator.css" />
<script type="text/javascript" src="${basePath}scripts/mmgrid.js"></script>
<script type="text/javascript" src="${basePath}scripts/mmpaginator.js"></script>
<title>添加章节页面</title>
<script type="text/javascript">
	$(document).ready(
					function() {
						$("#addSrcBtn").click(
										function() {
											var div = "<div class='control-group offset2'><input type='file' name='upload'></div>";
											$("#chResourceDiv").append(div);
										});

						$("$resetbtn").click(function showPage() {
							alert(1);
							//loadHtml('${basePath}course_intoCoursePage.action');
						});

					});
	function deleteCatalogue(obj){
		catalogueId = obj.value;
		console.log(catalogueId);
		$.ajax({
			type:"post",
			url:"${basePath}admin/deleteCatalogue.action",
			data:"catalogue.catalogueId="+catalogueId,
			success:function(msg){
				
			}
		});
	}
</script>
</head>


<div class="container-fluid">
	<div class="row-fluid">
		<div id="sidebar" class="span2 tree-container">
			<ul>
				<li class="jstree-open"><a href="#">问卷管理</a>
					<ul>
						<li class="jstree-leaf"><a class="blacked"
							href="${basePath}questionnaire_intoQuestionnairePage.action">显示问卷</a>
						</li>
						<li class="jstree-leaf"><a
							href="questionnaire/manage-add1.html">增加问卷</a>
						</li>
						<li class="jstree-leaf"><a href="#">问卷安排</a>
						</li>
					</ul></li>
				<li class="jstree-open"><a href="#">学习管理</a>
					<ul>
						<li class="jstree-leaf"><a
							href="${basePath}course_intoCoursePage.action">课程管理</a>
						</li>
					</ul></li>

				<li class="jstree-open"><a href="#">学习成效管理</a>
					<ul>
						<li class="jstree-leaf"><a
							href="${basePath}note_showNotePage.action">笔记总览</a>
						</li>
					</ul></li>

			</ul>
		</div>
		<div id="content" class="span10">
			<div class="row-fluid">
				<div class="span12 resources">
				<c:if test="${!empty list}">
						<div>
							<span>已存在的章节</span>
							<hr class="seperator"/>
						</div>
						<c:forEach items="${list}" var="item" varStatus="index">
							<div>
								<i class="icon-list"></i><span>章节名称：${item.catalogueName }</span> <i class="icon-stop"></i> <span>权重为：${item.cataloguaWeight}</span>
								<button type="button" class="btn btn-default" onclick="deleteCatalogue(this)" value="${item.catalogueId}">删除</button>
							</div>
							<hr class="seperator"/>
						</c:forEach>
					</c:if>
					</div>
			</div>
			<div class="row-fluid">
				<div class="span12 resources">
					
					<form role="form" class="form-horizontal"
						action="${basePath}admin/addRescourse.action?courseId=${requestScope.courseId}"
						enctype="multipart/form-data" method="post">
						<div class="control-group">
							<input type="hidden" name="courseId" value="${courseId}"/>
							<div class="control-group">
								<label class="control-label">课程章节:</label><br>
							</div>

							<div class="control-group">
								<label class="control-label" for="chNameInput">章节名称:</label>
								<div class="controls">
									<input type="text" id="chNameInput" name="catalogue.catalogueName"
										placeholder="请输入章节名称" required>
								</div>
							</div>
							
							<div class="control-group">
								<label class="control-label" for="chNameInput">章节编号:</label>
								<div class="controls">
									<input type="text" id="chNameInput" name="catalogue.catalogueNumber"
										placeholder="请输入章节编号" required>
								</div>
							</div>
							
							<div class="control-group">
								<label class="control-label" for="chNameInput">章节权重:</label>
								<div class="controls">
									<input type="number" id="chNameInput" name="catalogue.cataloguaWeight"
										placeholder="请输入章节权重" required min="1" max="10" >
								</div>
							</div>


							<div id="chResourceDiv">
								<div class="control-group">
									<label class="control-label" for="chSrcInput">章节资源:</label>
									<div class="control-group">

										<input type="file" id="chSrcInput" name="upload"
											placeholder="请输入章节资源" required> <input type="file"
											id="chSrcInput" name="upload" placeholder="请输入章节资源" required>
												<c:if test="${course.courseKind==2}">
													<input type="file" id="chSrcInput" name="upload"
														placeholder="请输入章节资源" required>
												</c:if> <br>
									</div>
								</div>
							</div>
							<div class="control-group">
								<label class="control-label">继续添加新章节：</label>
								<div class="control-group">是：<input type="radio"name="continueAdd" value="yes" checked="checked" /> 否：<input type="radio" name="continueAdd" value="no" /></div><br>
							</div>

							<div class="control-group offset2">
								<button type="submit" class="btn btn-default"
									id="addCourseAndSrcBtn">添加</button>
								<button type="button" align="right" class="btn btn-default"
									id="resetbtn">取消</button>
							</div>
					</form>

				</div>
			</div>
		</div>
	</div>
</div>


<div class="row-fluid line-margin"></div>
</html>
