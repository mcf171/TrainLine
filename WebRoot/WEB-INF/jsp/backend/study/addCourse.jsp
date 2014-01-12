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
<script type="text/javascript">
var courseID ;

$(document).ready(function()
{
   function addBtn()
	{
	var btn = '<button class="btn btn-default" id="addChapter_Btn">去添加章节?</button>';
	$("#btn").append(btn);
	
	$("#addChapter_Btn").click(function(){
	 window.location.href = "${basePath}course_intoaddChapterPage.action?courseId="+courseID;
	});
	}
	
	
	/*
	$("#addCourseAndSrcBtn").click(function(){
	 $.ajax({
				type : "POST",
				url : "${basePath}course_addCourse.action",
				data:"course.courseName="+$("#courseNameInput").val()+"&course.courseIntro="+$("#courseDescInput").val()+"&course.courseSpeaker="+$("#courseSpeaker").val()+"&course.courseState"
				+$("#courseState").val(),
				dataType : "json",
				success : function(json) {
				courseID = json.courseId;
				addBtn();
				},
				error : function() {
					alert("操作失败,请重试!");
					return false;
				}
			});
	});*/

});

	
</script>
<div class="row-fluid line-margin">
	<div class="span12">
		<div>
			<span></span>
		</div>

		<form role="form" class="form-horizontal" action="${basePath}admin/addCourse.action" 
		method="post">
			<div class="control-group">
				<label class="control-label" for="courseNameInput">课程名称:</label>
				<div class="controls">
					<input type="text" id="courseNameInput" name="course.courseName" placeholder="请输入课程名">
				</div>
			</div>

			<div class="control-group">
				<label class="control-label" for="courseDescInput">课程描述:</label>
				<div class="controls">
					<textarea class="form-control" rows="3" name="course.courseIntro" id="courseDescInput"
						placeholder="请输入课程描述"></textarea>
				</div>
			</div>
			
			<div class="control-group">
				<label class="control-label" for="courseDescInput">讲课老师:</label>
				<div class="controls">
					<input class="form-control" type="text" name="course.courseSpeaker" id="courseSpeaker"
						placeholder="请输入课程描述"/>
				</div>
			</div>
			
			<div class="control-group">
				<label class="control-label" for="courseDescInput">课程类型:</label>
				<div class="controls">
					<select name="course.courseState" id="courseState">
					<option value="-1">-------------------</option>
					<option value="1">选课中心</option>
					<option value="2">案例教学</option>
					<option value="3">党建课程</option>
					<option value="4">党建讲座</option>
					</select>
				</div>
			</div>
			<div class="control-group">
				<label class="control-label" for="courseDescInput">课程类型:</label>
				<div class="controls">
					<input  type="radio"  name="course.courseKind" value="1"/>二分屏（文档或视频 + 学习心得）
					<input  type="radio"  name="course.courseKind" value="2"/>三分屏（文档 + 视频 + 学习心得）
				</div>
			</div>

			
			<div class="control-group offset2" id="btn">
				<button type="submit" class="btn btn-default" id="addCourseAndSrcBtn">添加</button>
			</div>
		</form>

	</div>
</div>
