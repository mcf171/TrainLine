<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
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
<script type="text/javascript"
	src="${basePath}scripts/addTestArrangement.js"></script>
<script type="text/javascript">
	//        

	var mmGirdTable;
	$(document)
			.ready(
					function() {

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

						$("#getQuestionnaireRubricResult")
								.click(
										function() {

											loadHTML("${basePath}admin/getQuestionnaireRubricResult.action");
										});

						$("#goback")
								.click(
										function() {

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
					<span class="help-inline">问卷安排名：</span> <span
						class="input-xlarge uneditable-input">${questionnaireArrangement.questionArrangementName}</span>
				</div>
				<div class="row-fluid">
					<span class="help-inline">问卷目的：</span> <span
						class="input-xlarge uneditable-input">${questionnaireArrangement.questionArrangementIntro}</span>
				</div>

				<div class="row-fluid">
					<span class="help-inline">开始时间：</span> <span
						class="input-xlarge uneditable-input"><fmt:formatDate
							value="${questionnaireArrangement.questionArrangementBeginTime}"
							type="both" />
					</span>
				</div>
				<div class="row-fluid">
					<span class="help-inline">结束时间：</span> <span
						class="input-xlarge uneditable-input"><fmt:formatDate
							value="${questionnaireArrangement.questionArrangementOverTime }"
							type="both" />
					</span>
				</div>
				<hr class="seperator top-margin">
				<div class="row-fluid">
					<span class="help-inline">问卷信息：</span>
				</div>
				<div class="row-fluid">
					<span class="help-inline">问卷题目：</span> <span
						class="input-xlarge uneditable-input">${questionnaireArrangement.questionnaire.questionnaireTitle}</span>
				</div>
				<div class="row-fluid">
					<span class="help-inline">问卷作者：</span> <span
						class="input-xlarge uneditable-input">${questionnaireArrangement.questionnaire.questionnaireAuthor}</span>
				</div>

				<hr class="seperator top-margin">
				
				<div class="row word_style">
					<span class="help-inline">问卷结果查看：</span>
					<hr class="sepertor" />
				
				<c:forEach var="questionnaireRubric" items="${questionnaireArrangement.questionnaire.questionnairerubrics}" varStatus="index">
				
				
					<div class="span10">
						<div class="row-fluid ">
							<div>${index.index }、${questionnaireRubric.questionnaireRubricIntroduce}</div>
						</div>
						<c:forEach var="questionnaireChoose" items="${questionnaireRubric.questionnaireChoose}" varStatus="index2">
						
							<div class="row  span2">
							
								<div>
								<c:choose>
									<c:when test="${index2.index == 0 }">A</c:when>
									<c:when test="${index2.index == 1 }">B</c:when>
									<c:when test="${index2.index == 2 }">C</c:when>
									<c:when test="${index2.index == 3 }">D</c:when>
									<c:when test="${index2.index == 4 }">E</c:when>
									<c:when test="${index2.index == 5 }">F</c:when>
									<c:when test="${index2.index == 6 }">G</c:when>
									<c:when test="${index2.index == 7 }">H</c:when>
									<c:when test="${index2.index == 8 }">I</c:when>
								</c:choose>
								：${questionnaireChoose.questionnaireChooseContent}
								</div>
								
								<div class="progress progress-striped active">
									
									<c:choose>
										<c:when test="${index2.index == 0 }"><div class="bar bar-warning" style="width: 100%;"></div></c:when>
										<c:when test="${index2.index == 1 }"><div class="bar bar-danger" style="width: 100%;"></div></c:when>
										<c:when test="${index2.index == 2 }"><div class="bar bar-info" style="width: 100%;"></div></c:when>
										<c:when test="${index2.index == 3 }"><div class="bar bar-success" style="width: 100%;"></div></c:when>
										<c:when test="${index2.index == 4 }"><div class="bar bar-warning" style="width: 100%;"></div></c:when>
										<c:when test="${index2.index == 5 }"><div class="bar bar-danger" style="width: 100%;"></div></c:when>
										<c:when test="${index2.index == 6 }"><div class="bar bar-info" style="width: 100%;"></div></c:when>
										<c:when test="${index2.index == 7 }"><div class="bar bar-success" style="width: 100%;"></div></c:when>
									</c:choose>
								</div>
							</div>
						
						</c:forEach>
						
						
					</div>
					<div class="row-fluid span5">
						<div class="row-fluid">
							<div>选项分布为:</div>
						</div>
						<div class="row-fluid">
							<div class="progress progress-striped active">
							<c:if test="${questionnaireRubric.questionnaireRubricType==1}">
							<c:forEach var="questionnaireChoose" items="${questionnaireRubric.questionnaireChoose}" varStatus="index3">
								
								<c:choose>
									<c:when test="${index3.index == 0 }"><div class="bar bar-warning" style="width:${100*questionnaireChoose.count/questionnaireArrangement.finishCount}%;">${100*questionnaireChoose.count/questionnaireArrangement.finishCount}%</div></c:when>
									<c:when test="${index3.index == 1 }"><div class="bar bar-danger" style="width:${100*questionnaireChoose.count/questionnaireArrangement.finishCount}%;">${100*questionnaireChoose.count/questionnaireArrangement.finishCount}%</div></c:when>
									<c:when test="${index3.index == 2 }"><div class="bar bar-info" style="width:${100*questionnaireChoose.count/questionnaireArrangement.finishCount}%;">${100*questionnaireChoose.count/questionnaireArrangement.finishCount}%</div></c:when>
									<c:when test="${index3.index == 3 }"><div class="bar bar-success" style="width:${100*questionnaireChoose.count/questionnaireArrangement.finishCount}%;">${100*questionnaireChoose.count/questionnaireArrangement.finishCount}%</div></c:when>
									<c:when test="${index3.index == 4 }"><div class="bar bar-warning" style="width:${100*questionnaireChoose.count/questionnaireArrangement.finishCount}%;">${100*questionnaireChoose.count/questionnaireArrangement.finishCount}%</div></c:when>
									<c:when test="${index3.index == 5 }"><div class="bar bar-danger" style="width:${100*questionnaireChoose.count/questionnaireArrangement.finishCount}%;">${100*questionnaireChoose.count/questionnaireArrangement.finishCount}%</div></c:when>
									<c:when test="${index3.index == 6 }"><div class="bar bar-info" style="width:${100*questionnaireChoose.count/questionnaireArrangement.finishCount}%;">${100*questionnaireChoose.count/questionnaireArrangement.finishCount}%</div></c:when>
									<c:when test="${index3.index == 7 }"><div class="bar bar-success" style="width:${100*questionnaireChoose.count/questionnaireArrangement.finishCount}%;">${100*questionnaireChoose.count/questionnaireArrangement.finishCount}%</div></c:when>
								</c:choose>
							
							</c:forEach>
							</c:if>
							
							<c:if test="${questionnaireRubric.questionnaireRubricType==2}">
							<c:set var="totalCount" value="0"></c:set>
							<c:forEach var="questionnaireChoose" items="${questionnaireRubric.questionnaireChoose}">
								<c:set var="totalCount" value="${totalCount+questionnaireChoose.count}"></c:set>
							</c:forEach>
							
							<c:forEach var="questionnaireChoose" items="${questionnaireRubric.questionnaireChoose}" varStatus="index4">
								<c:choose>
									<c:when test="${index4.index == 0 }"><div class="bar bar-warning" style="width:${100*questionnaireChoose.count/totalCount}%;">${100*questionnaireChoose.count/totalCount}%</div></c:when>
									<c:when test="${index4.index == 1 }"><div class="bar bar-danger" style="width:${100*questionnaireChoose.count/totalCount}%;">${100*questionnaireChoose.count/totalCount}%</div></c:when>
									<c:when test="${index4.index == 2 }"><div class="bar bar-info" style="width:${100*questionnaireChoose.count/totalCount}%;">${100*questionnaireChoose.count/totalCount}%</div></c:when>
									<c:when test="${index4.index == 3 }"><div class="bar bar-success" style="width:${100*questionnaireChoose.count/totalCount}%;">${100*questionnaireChoose.count/totalCount}%</div></c:when>
									<c:when test="${index4.index == 4 }"><div class="bar bar-warning" style="width:${100*questionnaireChoose.count/totalCount}%;">${100*questionnaireChoose.count/totalCount}%</div></c:when>
									<c:when test="${index4.index == 5 }"><div class="bar bar-danger" style="width:${100*questionnaireChoose.count/totalCount}%;">${100*questionnaireChoose.count/totalCount}%</div></c:when>
									<c:when test="${index4.index == 6 }"><div class="bar bar-info" style="width:${100*questionnaireChoose.count/totalCount}%;">${100*questionnaireChoose.count/totalCount}%</div></c:when>
									<c:when test="${index4.index == 7 }"><div class="bar bar-success" style="width:${100*questionnaireChoose.count/totalCount}%;">${100*questionnaireChoose.count/totalCount}%</div></c:when>
								</c:choose>
							
							</c:forEach>
							</c:if>
							
							
							</div>
						</div>
					</div>
					
					</c:forEach>
				</div>
			</div>
			<button type="button" class="btn" id="goback">
				<i class="icon-ok"></i>返回列表
			</button>
		</div>
	</div>
	</div>