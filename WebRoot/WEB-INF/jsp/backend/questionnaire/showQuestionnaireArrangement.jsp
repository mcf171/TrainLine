<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>

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
	$(document).ready(function() {
		
		/*
		$( "#hours" ).slider({
			range: "min",
			value: 37,
			min: 1,
			max: 700,
			slide: function( event, ui ) {
			$( "#amount" ).val( "$" + ui.value );
			}
			});
			$( "#amount" ).val( "$" + $( "#slider-range-min" ).slider( "value" ) ); 
		*/
		$('#time-to').css('background', 'none').datepicker();
		$('#time-from').css('background', 'none').datepicker();
		
		$("#getQuestionnaireRubricResult").click(function(){
			
			loadHTML("${basePath}admin/getQuestionnaireRubricResult.action");
		});
		
		$("#goback").click(function(){
			
			loadHTML("${basePath}admin/getQuestionnaireArrangementListPage.action");
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
					<span class="help-inline">问卷安排名：</span> <span class="input-xlarge uneditable-input">${questionnaireArrangement.questionArrangementName}</span>
				</div>
				<div class="row-fluid">
					<span class="help-inline">问卷目的：</span>  <span class="input-xlarge uneditable-input">${questionnaireArrangement.questionArrangementIntro}</span>
				</div>
				
				<div class="row-fluid">
					<span class="help-inline">开始时间：</span> 
					 <span class="input-xlarge uneditable-input"><fmt:formatDate value="${questionnaireArrangement.questionArrangementBeginTime}"  type="both"/></span>
				</div>
				<div class="row-fluid">
					<span class="help-inline">结束时间：</span> 
					 <span class="input-xlarge uneditable-input"><fmt:formatDate value="${questionnaireArrangement.questionArrangementOverTime }"  type="both"/></span>
				</div>
				<hr class="seperator top-margin">
				<div class="row-fluid">
					<span class="help-inline">问卷信息：</span> 
				</div>
				<div class="row-fluid">
					<span class="help-inline">问卷题目：</span>
					<span class="input-xlarge uneditable-input">${questionnaireArrangement.questionnaire.questionnaireTitle}</span> 
				</div>
				<div class="row-fluid">
					<span class="help-inline">问卷作者：</span>
					<span class="input-xlarge uneditable-input">${questionnaireArrangement.questionnaire.questionnaireAuthor}</span> 
				</div>
				
				<hr class="seperator top-margin">
				
				<div class="row word_style">
					<span class="help-inline">问卷结果查看：</span>
					<button type="button" class="btn" id="getQuestionnaireRubricResult">
							<i class="icon-ok"></i>确认
						</button> 
				</div>
				</div>
				<button type="button" class="btn" id="goback">
							<i class="icon-ok"></i>返回列表
						</button>
			</div>
		</div>
	</div>



