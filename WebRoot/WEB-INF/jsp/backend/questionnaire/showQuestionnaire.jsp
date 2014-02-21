<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<script type="text/javascript">
<!--
$("#submit").click(function(){
	
	loadHTML("${basePath}admin/intoQuestionnairePage.action");
});
//-->
</script>

	<div class="container-fluid" id="content">
		<div class="row-fluid">
			<div  class="span12">
				<div class="row-fluid line-margin">
					<span class="help-inline"><b>基本信息：</b> </span>
				</div>
				<div class="row-fluid">
					<span class="help-inline">问卷标题：</span> <span class="input-xlarge uneditable-input">${questionnaire.questionnaireTitle}</span>
				</div>
				
				<div class="row-fluid">
					<span class="help-inline">问卷发起人：</span> <span class="input-xlarge uneditable-input">${questionnaire.questionnaireAuthor}</span>
				</div>
				
				<div class="row-fluid">
					<span class="help-inline">问卷编号：</span> <span class="input-xlarge uneditable-input">${questionnaire.questionnaireNumber}</span>
				</div>
				
				<hr class="seperator top-margin">
				
				<div class="row-fluid">
					<span class="help-inline">问卷题目：</span>
					<hr class="seperator"> 
				</div>
				<c:if test="${empty questionnaire.questionnairerubrics }">
						<div class="row-fluid">
							暂无选项
						</div>
					<hr class="seperator"/>
				</c:if>
				<c:forEach items="${questionnaire.questionnairerubrics}" var="questionnaireRubric">
				<div id="questionnaireRubric${questionnaireRubric.questionnaireRubricId}">
				<div>
					<i class="icon-file"></i>
					<span>题目简介：${questionnaireRubric.questionnaireRubricIntroduce}</span> 
				</div>
				<div>
					<i class="icon-list"></i>
					<span>题型：
						<c:choose>
							<c:when test="${questionnaireRubric.questionnaireRubricType==1 }">单选题</c:when>
							<c:when test="${questionnaireRubric.questionnaireRubricType==2 }">多选题</c:when>
							<c:when test="${questionnaireRubric.questionnaireRubricType==3 }">主观题</c:when>
						</c:choose>
					</span> 
					<i class="icon-stop"></i> 
					<span>权重为：${questionnaireRubric.questionnaireRubricWeight}</span>
					<button type="button" class="btn btn-default" onclick="deleteQuestionnaireRubric(this)" value="${questionnaireRubric.questionnaireRubricId}">删除</button>
				</div>
				<hr class="seperator"/></div>	
					</c:forEach>
				
				<div class="row word_style">
					<div class="row-fluid " style="margin-top:5px">
						<table id="grid2"></table>
						<button type="submit" class="btn" id="submit">
							<i class="icon-ok"></i>确认
						</button>
					</div>
				</div>
				
			</div>
		</div>
	</div>


