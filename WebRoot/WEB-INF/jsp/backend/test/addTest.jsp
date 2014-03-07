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
	var mmGirdTable;
	$(document).ready(function() {
		$('#time-to').css('background', 'none').datepicker();
		$('#time-from').css('background', 'none').datepicker();

		mmGirdTable = $('#grid').mmGrid({
			url : '${basePath}admin/getQuestions.action',
			height : 410,
			autoLoad : true,
			checkCol : true,
			multiSelect : true,
			fullWidthRows : true,
			root : 'testquestionList',
			cols : [ {
				title : '题目编号',
				sortable : true,
				name : 'testQuestionId'
			}, {
				title : '课程ID',
				sortable : true,
				renderer : function(val, item, row) {
					//onclick="loadHTML('${basePath}addBookPage.action?book.bookState=1')"
					return item.course.courseId;
				}
			}, {
				title : '课程名称',
				sortable : true,
				renderer : function(val, item, row) {
					//onclick="loadHTML('${basePath}addBookPage.action?book.bookState=1')"
					return item.course.courseName;
				}
			}, {
				title : '题目名 ',
				sortable : true,
				name : 'testQuestionName'
			}, {
				title : '题目难度 ',
				sortable : true,
				name : 'degreeOfDifficulty'
			}, {
				title : '分数 ',
				sortable : true,
				name : 'score'
			}, {
				title : '类型 ',
				sortable : true,
				renderer : function(val, item, row) {
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
			} ],
			plugins : [ $('#page').mmPaginator({}) ]
		});
	});
	//
	var array
	$("#submit").click(function() {

		array = mmGirdTable.selectedRowsIndex();
		testPaperName = $("#testPaperName").val();
		
		if(testPaperName == ""){
			
			$("#name").fadeIn();
			return 
		}
		if(array.length == 0){
			alert("你必须选择至少一个试题");
			return ;
		}
		
	//	alert(testPaperName);
		testQuestion="";
		
		var i;
		for(i = 0 ; i < array.length; i++){
			
			//alert(mmGirdTable.row(array[i]).testQuestionId);
			testQuestion += "&testQuestions=" +mmGirdTable.row(array[i]).testQuestionId; 
		}
		
		$.ajax({
			  type: "post",
			  url: "${basePath}admin/addTestPaper.action",
			  data:"testPaper.testPaperName=" + testPaperName +testQuestion,
			  success: function(msg){
				 /*
				  $('#myModal').modal('hide')
				  mmGirdTable.removeRow(mmGirdTable.selectedRowsIndex());
				 */
				 alert("增加成功");
				 loadHTML("${basePath}admin/getOpenTestPaperPage.action");
			  }
			});
	});
</script>
</head>

<body>
	<div class="container-fluid">
		<div class="row-fluid">
			<div id="content" class="span12">
				<div class="row-fluid line-margin">
					<span class="help-inline"><b>基本信息：</b> </span>
				</div>
				<div class="row-fluid">
					<span class="help-inline">试题名：</span> <input type="text"
						class=" span2"  id= "testPaperName" placeholder="请输入试卷名称"
						name="testquestion.testQuestionName" /><font color="red" class="hide" id="name">*必须填写</font>
				</div>
				<hr class="seperator top-margin">
				<div class="row word_style">
					<div class="row-fluid line-margin">
						<span class="help-inline"> <b>过滤：</b> <b>类型</b> </span> <select
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
						<button type="submit" class="btn" id="submit">
							<i class="icon-ok"></i>确认
						</button>
						<div id="page" class="pull-right"></div>
					</div>
				</div>
			</div>
		</div>
	</div>

	
</body>
</html>
