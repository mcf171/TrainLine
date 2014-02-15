<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>

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
				
				<div>
<i class="icon-file"></i>
<span>题目简介：1</span>
</div>
<div>
<i class="icon-list"></i>
<span>题型：单选题</span>
<i class="icon-stop"></i>
<span>权重为：1</span>
<button class="btn btn-default" value="20" onclick="deleteQuestionnaireRubric(this)" type="button">删除</button>
</div>
<hr class="seperator">
				
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


