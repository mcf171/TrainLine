<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

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

						$("#resetbtn").click(function showPage() {
							
							loadHTML('${basePath}admin/intoCoursePage.action');
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
				$("#catalogue"+catalogueId).fadeOut();
			}
		});
	}
</script>
</head>


<div class="container-fluid">
	<div class="row-fluid">
		
		<div id="content" class="span10">
			<div class="row-fluid">
				<div class="span12 resources">
				<c:if test="${!empty list}">
						<div>
							<span>已存在的章节</span>
							<hr class="seperator"/>
						</div>
						<c:forEach items="${list}" var="item" varStatus="index">
							<div id="catalogue${item.catalogueId}">
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
					<script>
						function addChapter(){
							
							var catalogueWeight = $("#catalogueWeight").val();
							
							var reg = new RegExp("^[0-9]+$");
							console.log(catalogueWeight);
							if(!reg.test(catalogueWeight)){
								
								alert("权重请输入数字");
								return false;
							}
							$("#porcess").animate({width:'90%'});
						}
					</script>
					<form role="form" class="form-horizontal"
						action="${basePath}admin/addRescourse.action"
						enctype="multipart/form-data" method="post" target="hidden_frame" onsubmit="return addChapter()">
						
						<div class="control-group">
							<input type="hidden" name="catalogue.course.courseId" value="${courseId}"/>
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
									<input type="text"  name="catalogue.cataloguaWeight"
										placeholder="请输入章节权重" required id="catalogueWeight">
								</div>
							</div>


							<div id="chResourceDiv">
								<div class="control-group">
									<label class="control-label" for="chSrcInput">章节资源:</label>
									<div class="control-group">

										<input type="file" id="chSrcInput" name="upload"
											placeholder="请输入章节资源" required> 
											<c:if test="${course.courseKind==2}">
											<input type="file"
											id="chSrcInput" name="upload" placeholder="请输入章节资源" required>
											</c:if>
												 <br>
									</div>
								</div>
							</div>
							<div class="control-group">
								<label class="control-label">继续添加新章节：</label>
								<div class="control-group">是：<input type="radio"name="continueAdd" value="yes" checked="checked"  id="1"/> 否：<input type="radio" name="continueAdd" value="no" /></div><br>
							</div>

							<div class="control-group offset2">
								<button type="submit" class="btn btn-default"
									id="addCourseAndSrcBtn">添加</button>
								<button type="button" align="right" class="btn btn-default"
									id="resetbtn">取消</button>
							</div>
					</form>
					
					<div class="row-fluid">
						    <div class="progress progress-striped active">
							    <div class="bar" style="width:0;" id="porcess"></div>
							    </div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<script type="text/javascript">
<!--
function callback(msg){
	
	
	if(msg=="true"){
		var flag = false;
		$("input[type=radio]").each(function(){
			
			if($(this).prop("checked")){
				flag = $(this).attr("id") == 1 ? true : false;
			}
		});
		$("#porcess").animate({width:'100%'});
		if(flag){
			
			loadHTML("${basePath}admin/intoaddChapterPage.action?courseId=${courseId}&course.courseKind=${course.courseKind}");
		}else{
			
			loadHTML("${basePath}admin/intoCoursePage.action");
		}
		
	}else{
		alert("文件类型错误：只允许doc、ppt、pdf");
	}
	
}
//-->
</script>
<iframe name='hidden_frame' id="hidden_frame" style='display:none'></iframe>

<div class="row-fluid line-margin"></div>
