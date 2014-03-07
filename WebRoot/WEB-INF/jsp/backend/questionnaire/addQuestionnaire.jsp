<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>

<script type="text/javascript">
<!--
$("#submit").click(function(){
	
	var questionnaireTitle = $("#questionnaireTitle").val();
	var questionnaireNumber = $("#questionnaireNumber").val();
	var questionnaireAuthor = $("#questionnaireAuthor").val();
	if(questionnaireTitle!="" && questionnaireNumber!= "" && questionnaireAuthor!=null){
		$.ajax({
			type:"post",
			url:"${basePath}admin/addQuestionnaire.action",
			data:"questionnaire.questionnaireTitle="+questionnaireTitle+"&questionnaire.questionnaireNumber=" + questionnaireNumber + "&questionnaire.questionnaireAuthor="+questionnaireAuthor,
			success:function(msg){
				$("#content").html(msg);
			}
		});
	}else{
		
		alert("所有字段必须填写");
	}
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
					<span class="help-inline">问卷标题：</span> <input type="text"
						class=" span2" id="questionnaireTitle" placeholder="请输入问卷标题"
						name="testquestion.testQuestionName" />
				</div>
				
				<div class="row-fluid">
					<span class="help-inline">问卷发起人：</span> <input type="text"
						class=" span2" id="questionnaireAuthor" placeholder="请输入问卷发起人"
						name="testquestion.testQuestionName" value="${user.userName}"/>
				</div>
				
				<div class="row-fluid">
					<span class="help-inline">问卷编号：</span> <input type="text"
						class=" span2" id="questionnaireNumber" placeholder="请输入问卷编号"
						name="testquestion.testQuestionName" />
				</div>
				
				<hr class="seperator top-margin">
				
				<div class="row word_style">
					<div class="row-fluid " style="margin-top:5px">
						<table id="grid2"></table>
						<button type="submit" class="btn" id="submit">
							<i class="icon-ok"></i>确认
						</button>
						<div id="page" class="pull-right"></div>
					</div>
				</div>
				
			</div>
		</div>
	</div>


