<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>

<link rel="stylesheet" type="text/css"
	href="${basePath}styles/mmgrid.css" />
<link rel="stylesheet" type="text/css"
	href="${basePath}styles/mmpaginator.css" />
<link rel="stylesheet" type="text/css"
	href="${basePath}themes/mmgrid/mmgrid.css" />
<link rel="stylesheet" type="text/css"
	href="${basePath}themes/mmgrid/mmpaginator.css" />

<script type="text/javascript" src="${basePath}scripts/mmgrid.js"></script>
<script type="text/javascript" src="${basePath}scripts/mmpaginator.js"></script>
<script type="text/javascript" src="${basePath}scripts/datepicker.js"></script>
<script type="text/javascript" src="${basePath}scripts/examination.js"></script>

<script type="text/javascript">
	//         
	$(document)
			.ready(
					function() {
						$('#time-to').css('background', 'none').datepicker();
						$('#time-from').css('background', 'none').datepicker();

						mmGirdTable = $('#grid').mmGrid(
										{
											url : '${basePath}admin/getQuestions.action',
											height : 410,
											autoLoad : true,
											checkCol : true,
											multiSelect : true,
											fullWidthRows : true,
											root : 'testquestionList',
											cols : [
													{
														title : '题目编号',
														sortable : true,
														name : 'testQuestionId'
													},
													{
														title : '课程ID',
														sortable : true,
														renderer : function(
																val, item, row) {
															//onclick="loadHTML('${basePath}addBookPage.action?book.bookState=1')"
															if(item.course==null)
																return "课程不存在";
															return item.course.courseId;
														}
													},
													{
														title : '课程名称',
														sortable : true,
														renderer : function(
																val, item, row) {
															//onclick="loadHTML('${basePath}addBookPage.action?book.bookState=1')"
															if(item.course==null)
																return "课程不存在";
															return item.course.courseName;
														}
													},
													{
														title : '试题名 ',
														sortable : true,
														name : 'testQuestionName'
													},
													{
														title : '试题难度 ',
														sortable : true,
														name : 'degreeOfDifficulty'
													},
													{
														title : '总分 ',
														sortable : true,
														name : 'score'
													},
													{
														title : '类型 ',
														sortable : true,
														renderer : function(
																val, item, row) {
															//onclick="loadHTML('${basePath}addBookPage.action?book.bookState=1')"
															testType = parseInt(item.testType);

															switch (testType) {

															case 1:
																return "单选题";
															case 2:
																return "多选题";
															case 3:
																return "主观题";
															default:
																return "未知题型";
															}

														}
													},
													{
														title : '操作 ',
														sortable : true,

														renderer : function(
																val, item, row) {
															//onclick="loadHTML('${basePath}addBookPage.action?book.bookState=1')"
															return '<a href="javascript:loadHTML(\'${basePath}admin/getTestquestionById.action?testquestion.testQuestionId='
																	+ item.testQuestionId
																	+ '\')" > 查看</a> <a href="javascript:loadHTML(\'${basePath}admin/getTestquestionModifyPage.action?testquestion.testQuestionId='
																	+ item.testQuestionId
																	+ '\')" > 修改</a> <a href="javascript:showConfirm(' +item.testQuestionId + ',' +'\'${basePath}\''+')" >删除</a>';
														}
													} ],
											plugins : [ $('#page').mmPaginator(
													{}) ]
										});
					});
	//
</script>
</head>

<body>
	<div class="container-fluid">
		<div class="row-fluid">
			<div id="content" class="span12">
				<div class="row-fluid " style="margin-left: -13px">
					<button class="btn" type="button"
						onclick="loadHTML('${basePath}admin/getAddQuestionPage.action')">
						<i class="icon-plus"></i>添加
					</button>
					<button class="btn" type="button">
						<i class="icon-arrow-up"></i>批量导入
					</button>
				</div>
				<div class="row word_style">
					<div class="row-fluid line-margin">
						<span class="help-inline"> <b>基本过滤：</b> <b>类型</b> </span> <select
							class="input-medium">
							<option>类型1</option>
							<option>类型2</option>
							<option>类型3</option>
							<option>类型4</option>
						</select> <b>编号</b> <select class="input-medium">
							<option>编号1</option>
							<option>编号 2</option>
							<option>编号3</option>
							<option>编号4</option>
						</select> <input type="text" class="span3 input-medium"
							placeholder="请输入关键字">
					</div>
				</div>
				<div class="row word_style">
					<div class="row-fluid " style="margin-top:5px">
						<table id="grid"></table>
						<button type="submit" class="btn">
							<i class="icon-ok"></i>批量删除
						</button>
						<div id="page" class="pull-right"></div>
					</div>
				</div>
			</div>
		</div>
	</div>
	
<div id="myModal" class="modal hide fade" tabindex="-1" role="dialog"
	aria-labelledby="myModalLabel" aria-hidden="true">
	<div class="modal-header">
		<button type="button" class="close" data-dismiss="modal"
			aria-hidden="true">×</button>
		<h3 id="myModalLabel">确认删除</h3>
	</div>
	<div class="modal-body">
		<p>是否真的删除？</p>
	</div>
	<div class="modal-footer">
		<button class="btn" data-dismiss="modal" aria-hidden="true">取消</button>
		<button class="btn btn-primary" onclick="deleteBook()">确认</button>
	</div>
</div>
</body>
</html>
