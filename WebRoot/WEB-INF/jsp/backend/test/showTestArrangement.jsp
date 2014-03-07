<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
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

<script type="text/javascript" src="${basePath}scripts/examination.js"></script>
<script type="text/javascript" src="${basePath}scripts/datepicker.js"></script>
<script type="text/javascript" src="${basePath}scripts/addTestArrangement.js"></script>
<script type="text/javascript">
	//        
	var mmGirdTable;
	var rowDatas = new Array();;
	<c:forEach items="${testArrangement.testGrades}" var="item">

	var rowData = {"userId":"${item.user.userId}","userName":"${item.user.userName}","grade":"${item.grade}"};
	rowDatas.push(rowData);
	
	</c:forEach>
	
	$(document).ready(function() {
		mmClass = $('#grid2').mmGrid({
			items:rowDatas,
			height: 280,
			autoLoad: true,
			checkCol: true,
			fullWidthRows: true,
			root:'trainList',
			cols: [
				{ title: '用户编号', sortable: true,name: 'userId' },
				{ title: '用户名称', sortable: true,name: 'userName' },
				{ title: '用户成绩', sortable: true,name:'grade'
					
				},	
				{ title: '操作', sortable: true, 
					renderer: function (val, item, row)
					{
						var testState = parseInt("${testArrangement.testState}");
						switch(testState){
						case 1: return "等待考试结束";break;
						case 2: return "阅卷";break;
						case 3: return "查看试卷";break;
						}
					}	
				}
			],
			plugins: [
				$('#page').mmPaginator({})
			]
		});

	
	
	$("#submit").click(function(){
		
		loadHTML("${basePath}admin/getBackendTestArrangementPage.action");
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
					<span class="help-inline">考试地点：</span> <input type="text"
						class=" span2" id="testPlace" placeholder="请输入试卷名称"
						name="testquestion.testQuestionName"  value="${testArrangement.testArrangementPlace}"/>
				</div>
				<div class="row-fluid">
					<span class="help-inline">应到人数：</span> <input type="text"
						class=" span2" id="testShouldNumber" placeholder="请输入数量"
						name="testquestion.testQuestionName"  value="${testArrangement.testSumPerson}"/>
				</div>
				<div class="row-fluid">
					<span class="help-inline">通过分数：</span> <input type="text"
						class=" span2" id="testPassScore" placeholder="请输入分数"
						name="testquestion.testQuestionName"  vale="${testArrangement.passMark }"/>
				</div>
				<div class="row-fluid">
					<span class="help-inline">开始时间：</span> 
					<span id="courseName" class="input-xlarge uneditable-input"><fmt:formatDate value="${testArrangement.testStartTime}" type="both"/></span>
				</div>
				<div class="row-fluid">
					<span class="help-inline">结束时间：</span>
					<span id="courseName" class="input-xlarge uneditable-input"><fmt:formatDate value="${testArrangement.attributestStartTimete51}" type="both"/></span>
				</div>
				<hr class="seperator top-margin">
				<div class="row word_style">
				<div class="row-fluid line-margin">
					<span class="help-inline"> <b>试卷编号：</b> </span>
					<span id="courseName" class="input-xlarge uneditable-input">${testArrangement.testpaper.testPaperName}</span>
				</div>
					
				</div>
				<div class="row-fluid line-margin">
					<span class="help-inline"> <b>班级编号：</b> </span>
					<span id="courseName" class="input-xlarge uneditable-input">${testArrangement.trainingclass.trainingClassName}</span>
				</div>
				<hr class="seperator top-margin">
				<div class="row-fluid line-margin">
					<span class="help-inline"> <b>交卷情况：</b> </span>
				</div>
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
						<table id="grid2"></table>
						<button type="button" class="btn" id="submit">
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
