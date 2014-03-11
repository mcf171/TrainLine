<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<script type="text/javascript" src="${basePath}scripts/jquery.js"></script>
<script type="text/javascript">
<!--
$("#submit").click(function(){
	
	loadHTML("${basePath}admin/intoQuestionnairePage.action");
});

var questionnaireId;
$("#add").click(function(){
	
	var questionnaireTitle = $("#questionnaireTitle").val();
	var questionnaireNumber = $("#questionnaireNumber").val();
	var questionnaireAuthor = $("#questionnaireAuthor").val();
	if(questionnaireTitle!="" && questionnaireNumber!= "" && questionnaireAuthor!=null){
		$.ajax({
			type:"post",
			url:"${basePath}admin/addQuestionnaire.action",
			data:"questionnaire.questionnaireTitle="+questionnaireTitle+"&questionnaire.questionnaireNumber=" + questionnaireNumber + "&questionnaire.questionnaireAuthor="+questionnaireAuthor,
			success:function(msg){
				
				$("#success").fadeIn();
				$("#fail").fadeOut();
			},
			error:function(){
				
				$("#fail").fadeIn();
				$("#success").fadeOut();
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
					<span class="help-inline"><b>问卷基本信息：</b> </span>
				</div>
				<div class="row-fluid">
					<span class="help-inline">问卷标题：</span> <input type="text"
						class=" span2" id="questionnaireTitle" placeholder="请输入问卷标题"
						name="testquestion.testQuestionName" />
						<font color="green" class="hide" id="success">*增加成功</font>
						<font color="red" class="hide" id="fail">*增加失败</font>
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
				
				<div class="row-fluid " style="margin-top:5px">
						<button type="submit" class="btn" id="add">
							<i class="icon-ok"></i>增加
						</button>
					</div>
				<hr class="seperator top-margin">
				
				<script>
		var indexNumber = 1;
		var testType = 1;
		
		$("#confirm").click(function (){
			
			var questionnaireChooses="";
			if(questionnaireId==""|| questionnaireId == null){
				
				alert("请先增加问卷");
				return;
			}
			var questionnaireRubricWeight = $("#questionnaireRubricWeight").val();
			var questionnaireRubricIntroduce = $("#questionnaireRubricIntroduce").val();
			
			var reg = new RegExp("^[0-9]*$");
			
			if(!reg.test(questionnaireRubricWeight)){
				
				$("#weight").fadeOut();
				$("#introduce").fadeOut();
				$("#weightNumber").fadeIn();
				
				return ;
			}
			
			if(questionnaireRubricWeight!="" && questionnaireRubricIntroduce!=""){
				
				switch(testType){
					
				case 1:
					$(".danxuan").each(function(){
						questionnaireChooses +=  "&questionnaireChooses="+$(this).val();
					});
					break;
				case 2:
					$(".duoxuan").each(function(){
						questionnaireChooses +=  "&questionnaireChooses="+$(this).val();
					});
					break;
				case 3:
					questionnaireChooses = "&questionnaireChooses="+$("#questionnaireRubricContent").val();
				};
				$.ajax({
					type:"post",
					url:"${basePath}admin/addQuestionnaireRubric.action",
					data:"questionnaireRubric.questionnaire.questionnaireId="+questionnaireId+"&questionnaireRubric.questionnaireRubricType="+testType+"&questionnaireRubric.questionnaireRubricWeight=" + questionnaireRubricWeight +"&questionnaireRubric.questionnaireRubricIntroduce=" + questionnaireRubricIntroduce+questionnaireChooses,
					success:function(msg){
						
						var questionnaireRubricId = msg.questionnaireRubricId;
						$("#addedQuestionnaireRubric").removeClass("hidden");
						switch(testType){
							case 1: testTypeName ="单选题";break;
							case 2: testTypeName = "多选题";break;
							case 3: testTypeName = "主观题";break;
						}
						htmlContent = '<div id="questionnaireRubric' + questionnaireRubricId + '"><div><i class="icon-file"></i><span>题目简介：'+questionnaireRubricIntroduce+'</span> </div><div><i class="icon-list"></i><span>题型：'+testTypeName+'</span> <i class="icon-stop"></i> <span>权重为：'+questionnaireRubricWeight+
						'</span><button type="button" class="btn btn-default" onclick="deleteQuestionnaireRubric(this)" value="' + questionnaireRubricId + '">删除</button>'+
						'</div>'+
						'<hr class="seperator"/></div>';
						$("#questionnaireRubricList").append(htmlContent);
					}
				});
		
			}else{
				
				$("#weight").fadeIn();
				$("#introduce").fadeIn();
				$("#weightNumber").fadeOut();
			}
		});
		
		function deleteQuestionnaireRubric(obj){
			
			var questionnaireRubricId = obj.value;
			$.ajax({
				type:"post",
				url:"${basePath}admin/deleteQuestionnaireRubric.action",
				data:"questionnaireRubric.questionnaireRubricId="+questionnaireRubricId,
				success:function(msg){
					console.log(questionnaireRubricId);
						$("#questionnaireRubric"+questionnaireRubricId).fadeOut();
						console.log($("#questionnaireRubric"+questionnaireRubricId));
						console.log(questionnaireRubricId);	
				} 
			});
		}
		$(document).ready( function(){
			
		
			$("#deleteChoose").click(function(){
				
				$(".choose:last").remove();
				indexNumber --;
			});
			
			$("#testType").change(function(){
				
				testType = parseInt(this.value);
				
				switch(testType){
				
				case 1:
					$("#danxuan").removeClass("hidden");
					$("#duoxuan").addClass("hidden");
					$("#xuanxiangxinxi").removeClass("hidden");
					$("#zhuguanti").addClass("hidden");
					break;
				case 2:
					$("#duoxuan").removeClass("hidden");
					$("#danxuan").addClass("hidden");
					$("#zhuguanti").addClass("hidden");
					$("#xuanxiangxinxi").removeClass("hidden");
					break;
				case 3:
					$("#xuanxiangxinxi").addClass("hidden");
					$("#zhuguanti").removeClass("hidden");
					break;
				}
			});
			
			$("#addChoose").click(function(){
				
				
				if(indexNumber <=5){
				var chooseBianhao;
				switch(indexNumber){
					
				case 1: chooseBianhao = 'E'; break;
				case 2: chooseBianhao = 'F'; break;
				case 3: chooseBianhao = 'G'; break;
				case 4: chooseBianhao = 'H'; break;
				default: chooseBianhao = 'I';
				
				}
				indexNumber ++;
				switch(testType){
				
				case 1:
				htmlContent = '<div class="control-group choose">' +
											'<label class="control-label" >' + chooseBianhao + '：</label>'+
												'<div class="controls">'+
													'<input type="text" class="danxuan" placeholder="请输入人员名称" name="" /> '+
												'</div>'+
										'</div>';break;
				case 2:
					htmlContent = '<div class="control-group choose">' +
					'<label class="control-label" >' + chooseBianhao + '：</label>'+
						'<div class="controls">'+
							'<input type="text" class="duoxuan" placeholder="请输入人员名称" name="" /> '+
						'</div>'+
				'</div>';break;
				}
				$("#lastChoose").before(htmlContent);	
				
				}else{
					
					alert('增加选项过多');
				}
				
			});
			
		
			
		});

	</script>

	<div class="row-fluid hidden" id="addedQuestionnaireRubric">
				<div class="span12 resources" id="questionnaireRubricList">
						<div>
							<span>已添加的题目</span>
							<hr class="seperator"/>
						</div>
							
					</div>
			</div>

<div class="resources">
<form action="#" class="form-horizontal">
	<div class="row-fluid line-margin">
		<span class="help-inline"><b>试题基本信息：</b>
		</span>
	</div> 

	<div class="control-group">
		<label class="control-label" >试题简介：</label>
		<div class="controls">
			<input type="text" id="questionnaireRubricIntroduce"/><font color="red" id="introduce" class="hide">*必须填写</font>
		</div>
	</div>

	<div class="control-group">
		<label class="control-label" >试题类型：</label>
		<div class="controls">
			<select class="input-medium" name="testquestion.testType" id="testType">
			<option value="1">单选题</option>
			<option value="2">多选题</option>
			<option value="3">主观题</option>
			</select>
		</div>
	</div>
	<div class="control-group">
		<label class="control-label" >试题权重：</label>
		<div class="controls">
			<input type="text" id="questionnaireRubricWeight"/><font color="red" id ="weight" class="hide">*必须填写</font><font class="hide" color="red" id="weightNumber">*为数字</font>
		</div>
	</div>
	
	<div id="zhuguanti" class=" hidden">
		<div class="row-fluid line-margin">
			<span class="help-inline"><b>题目信息：</b>
			</span>
		</div>
		<div class="control-group">
				<label class="control-label" >题目</label>
				<div class="controls">
					<input type="text"
					class=" " placeholder="请输入问题" name="zhuguanti" id="questionnaireRubricContent"/>
				</div>
			</div>
	</div>
	
	<div id="xuanxiangxinxi">
		<div class="row-fluid line-margin">
			<span class="help-inline"><b>选项信息：</b>
			</span>
		</div>
		
		<div id="danxuan" >
		
			<div class="control-group">
				<label class="control-label" >A：</label>
				<div class="controls">
					<input type="text"
					class="danxuan" placeholder="请输入人员名称" name="danxuantestAnswerIntroduce" />
					
				</div>
			</div>
			<div class="control-group">
				<label class="control-label" >B：</label>
				<div class="controls">
					<input type="text"
					class="danxuan" placeholder="请输入人员名称" name="danxuantestAnswerIntroduce" />
				</div>
			</div>
			<div class="control-group">
				<label class="control-label" >C：</label>
				<div class="controls">
					<input type="text"
					class="danxuan" placeholder="请输入人员名称" name="danxuantestAnswerIntroduce" />
				</div>
			</div>
			<div class="control-group" >
				<label class="control-label" >D：</label>
				<div class="controls">
					<input type="text"
					class="danxuan" placeholder="请输入人员名称" name="danxuantestAnswerIntroduce" />
				</div>
			</div>
		
		</div>
		
		<div id="duoxuan" class="hidden">
		
			<div class="control-group">
				<label class="control-label" >A：</label>
				<div class="controls">
					<input type="text"
					class="duoxuan" placeholder="请输入人员名称" name="duoxuantestAnswerIntroduce" />
				</div>
			</div>
			<div class="control-group">
				<label class="control-label" >B：</label>
				<div class="controls">
					<input type="text"
					class="duoxuan" placeholder="请输入人员名称" name="duoxuantestAnswerIntroduce" />
				</div>
			</div>
			<div class="control-group">
				<label class="control-label" >C：</label>
				<div class="controls">
					<input type="text"
					class="duoxuan" placeholder="请输入人员名称" name="duoxuantestAnswerIntroduce" />
				</div>
			</div>
			<div class="control-group" >
				<label class="control-label" >D：</label>
				<div class="controls">
					<input type="text"
					class="duoxuan" placeholder="请输入人员名称" name="duoxuantestAnswerIntroduce" />
				</div>
			</div>
		
		</div>
	
		<div class="control-group" id="lastChoose">
	
			<div class="controls">
				<button type="button" class="btn" id="addChoose"><i class="icon-plus"></i>增加选项</button> 
				<button type="button" class="btn" id="deleteChoose"><i class="icon-plus"></i>删除选项</button> 
			</div>
			
		</div>
	
	</div>
	
	<div class="control-group">

		<div class="controls">
			<button type="button" class="btn" id="confirm"><i class="icon-ok"></i>确定</button> 
		</div>
	</div>
	
	
</form>
</div>
				
				
				<div class="row word_style">
					<div class="row-fluid " style="margin-top:5px">
						<button type="submit" class="btn" id="submit">
							<i class="icon-ok"></i>确认
						</button>
					</div>
				</div>
				
			</div>
		</div>
	</div>


