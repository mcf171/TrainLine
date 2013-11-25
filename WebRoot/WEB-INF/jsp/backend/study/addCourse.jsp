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
	
	
	
	$("#addCourseAndSrcBtn").click(function(){
	 $.ajax({
				type : "POST",
				url : "${basePath}course_addCourse.action",
				data:"course.courseName="+$("#courseNameInput").val()+"&course.courseIntro="+$("#courseDescInput").val(),
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
	});

});

	
</script>
<div class="row-fluid line-margin">
	<div class="span12">
		<div>
			<span></span>
		</div>

		<form role="form" class="form-horizontal" action="javascript:void(0)" 
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

			
			<div class="control-group offset2" id="btn">
				<button type="submit" class="btn btn-default" id="addCourseAndSrcBtn">添加</button>
			</div>
		</form>

	</div>
</div>
