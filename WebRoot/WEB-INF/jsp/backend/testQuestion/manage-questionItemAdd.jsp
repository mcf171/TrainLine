<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<script type="text/javascript" src="${basePath}scripts/global.js"></script>
<script type="text/javascript" src="${basePath}scripts/jquery.js"></script>
<div id="content">
<script>

$(document).ready( function(){
	
	var indexNumber = 1;
	var testType = 1;
	
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
			break;
		case 2:
			$("#duoxuan").removeClass("hidden");
			$("#danxuan").addClass("hidden");
			$("#xuanxiangxinxi").removeClass("hidden");
			break;
		case 3:
			$("#xuanxiangxinxi").addClass("hidden");
			break;
		}
	});
	
	$("#addChoose").click(function(){
		
		
		
		if(indexNumber <=5){
		var chooseBianhao;
		var inputValue = indexNumber + 4;
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
											'<input type="text" class=" " placeholder="请输入人员名称" name="" /> '+
											'<input type="radio" class="standardAnswer" name="danxuanstandardAnswer" value="' + inputValue+ + '"> 正确答案'+
										'</div>'+
								'</div>';break;
		case 2:
			htmlContent = '<div class="control-group choose">' +
			'<label class="control-label" >' + chooseBianhao + '：</label>'+
				'<div class="controls">'+
					'<input type="text" class=" " placeholder="请输入人员名称" name="" /> '+
					'<input type="checkbox" class="standardAnswer" name="duoxuanstandardAnswer" value="' + inputValue + '"> 正确答案'+
				'</div>'+
		'</div>';break;
		}
		$("#lastChoose").before(htmlContent);	
		
		}else{
			
			alert('增加选项过多');
		}
		
	});
	
	$("#courseId").keyup(function(){
		var courseId = this.value;
		if(courseId !=""){
		$.ajax({
			  type: "post",
			  url: "${basePath}admin/getCourseById.action",
			  data:'course.courseId='+courseId,
			  success:function(msg){
				  if(msg.course !=null){
					  
				 	 $("#courseName").text(msg.course.courseName);
				 	$("#courseInfo").attr("color","green");
				 	 	$("#courseInfo").text("课程存在");

				  }else{
					  
					  $("#courseName").text("");
					  $("#courseInfo").attr("color","red");
					  $("#courseInfo").text("课程不存在");
				  }
			  }
		});
		} 
	});
	
});

function checkForm(){
	

	if($("#testName").val() == ""){
		$("#name").fadeIn();
		$("#score").fadeOut();
		$("#courseIds").fadeOut();
		return false;
	}
	var reg = new RegExp("^[0-9]+$");
	
	if(!reg.test($("#testScore").val())){
		$("#name").fadeOut();
		$("#score").fadeIn();
		$("#courseIds").fadeOut();
		return false;
	}
	if($("#courseId").val()==""){
		$("#name").fadeOut();
		$("#score").fadeOut();
		$("#courseIds").fadeIn();
		return false;
	}
}

</script>

<form class="form-horizontal"  action="${basePath}admin/addTestquestion.action" method="post" target="hidden_frame" onsubmit="return checkForm();">

	<div class="row-fluid line-margin">
		<span class="help-inline"><b>基本信息：</b>
		</span>
	</div>
	<div class="control-group">
		<label class="control-label" >试题名：</label>
		<div class="controls">
			<input type="text"
			class=" span2" placeholder="请输入人员名称" name="testquestion.testQuestionName"  id="testName"/>
			<font color="red" class="hide" id="name">*必须填写</font>
		</div>
	</div>
	<div class="control-group">
		<label class="control-label" >试题难度：</label>
		<div class="controls">
			<select class="input-medium" name="testquestion.degreeOfDifficulty">
			<option value="1">1</option>
			<option value="2">2</option>
			<option value="3">3</option>
			<option value="4">4</option>
			<option value="5">5</option>
			</select>
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
		<label class="control-label" >分数：</label>
		<div class="controls">
			<input type="text"
			class=" span2" placeholder="请输入人员名称" name="testquestion.score" id="testScore"/>
			<font color="red" class="hide" id="score">*必须填写数字</font>
		</div>
	</div>
	
	<div class="control-group">
		<label class="control-label" >输入课程ID：</label>
		<div class="controls">
			<input type="text"
			class=" span2" placeholder="请输入人员名称" name="testquestion.course.courseId"  id="courseId" required="required" />
			<font color="green" id="courseInfo"></font>
			<font color="red" class="hide" id="courseIds">*必须填写</font>
		</div>
		
	</div>
	<div class="control-group">
		<label class="control-label" >课程名：</label>
		<div class="controls">
			
			<span class="input-xlarge uneditable-input" id="courseName">课程名</span>
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
					class=" " placeholder="请输入人员名称" name="danxuantestAnswerIntroduce" required="required"/>
					<input type="radio" class="standardAnswer" name="danxuanstandardAnswer" value="1" checked="checked"/> 正确答案
				</div>
			</div>
			<div class="control-group">
				<label class="control-label" >B：</label>
				<div class="controls">
					<input type="text"
					class=" " placeholder="请输入人员名称" name="danxuantestAnswerIntroduce" />
					<input type="radio" class="standardAnswer" name="danxuanstandardAnswer" value="2"/> 正确答案
				</div>
			</div>
			<div class="control-group">
				<label class="control-label" >C：</label>
				<div class="controls">
					<input type="text"
					class=" " placeholder="请输入人员名称" name="danxuantestAnswerIntroduce" />
					<input type="radio" class="standardAnswer" name="danxuanstandardAnswer" value="3"/> 正确答案
				</div>
			</div>
			<div class="control-group" >
				<label class="control-label" >D：</label>
				<div class="controls">
					<input type="text"
					class=" " placeholder="请输入人员名称" name="danxuantestAnswerIntroduce" />
					<input type="radio" class="standardAnswer" name="danxuanstandardAnswer" value="4"/> 正确答案
				</div>
			</div>
		
		</div>
		
		<div id="duoxuan" class="hidden">
		
			<div class="control-group">
				<label class="control-label" >A：</label>
				<div class="controls">
					<input type="text"
					class=" " placeholder="请输入人员名称" name="duoxuantestAnswerIntroduce" />
					<input type="checkbox" class="standardAnswer" name="duoxuanstandardAnswer" value="1" checked="checked"/> 正确答案
				</div>
			</div>
			<div class="control-group">
				<label class="control-label" >B：</label>
				<div class="controls">
					<input type="text"
					class=" " placeholder="请输入人员名称" name="duoxuantestAnswerIntroduce" />
					<input type="checkbox" class="standardAnswer" name="duoxuanstandardAnswer" value="2"/> 正确答案
				</div>
			</div>
			<div class="control-group">
				<label class="control-label" >C：</label>
				<div class="controls">
					<input type="text"
					class=" " placeholder="请输入人员名称" name="duoxuantestAnswerIntroduce" />
					<input type="checkbox" class="standardAnswer" name="duoxuanstandardAnswer" value="3"/> 正确答案
				</div>
			</div>
			<div class="control-group" >
				<label class="control-label" >D：</label>
				<div class="controls">
					<input type="text"
					class=" " placeholder="请输入人员名称" name="duoxuantestAnswerIntroduce" />
					<input type="checkbox" class="standardAnswer" name="duoxuanstandardAnswer" value="4"/> 正确答案
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
			<button type="submit" class="btn"><i class="icon-ok"></i>确定</button> <button type="submit" class="btn"><i class="icon-remove"></i>取消</button>
		</div>
	</div>
</form>
<script type="text/javascript">
<!--
function callback(){
	
	$("#content").load("${basePath}admin/getQuestionsPage.action");
}
//-->
</script>
<iframe name='hidden_frame' id="hidden_frame" style='display:none'></iframe>
</div>
