<link rel="stylesheet" type="text/css" href="${basePath}styles/datepicker.css" />
<link rel="stylesheet" type="text/css" href="${basePath}styles/mmgrid.css" />
<link rel="stylesheet" type="text/css" href="${basePath}styles/mmpaginator.css" />
<link rel="stylesheet" type="text/css"
	href="${basePath}themes/mmgrid/mmgrid.css" />
<link rel="stylesheet" type="text/css"
	href="${basePath}themes/mmgrid/mmpaginator.css" />
<script type="text/javascript" src="${basePath}scripts/datepicker.js"></script>
<script type="text/javascript" src="${basePath}scripts/mmgrid.js"></script>
<script type="text/javascript" src="${basePath}scripts/mmpaginator.js"></script>
<script type="text/javascript" src="${basePath}scripts/bootstrap.js"></script>
<script type="text/javascript">
var mmg;
var courseID;

function pretest(id){
	
	loadHTML("${basePath}admin/preTestCourse.action?course.courseId="+id);
}

$(document).ready(function ()
{
	$('#time-to').css('background', 'none').datepicker();
	$('#time-from').css('background', 'none').datepicker();

	//按条件查询
	$("#searchBtn").click(function(){
	mmg.load({page:1,"course.courseName":$("#courseName_input").val(),
	"course.courseSpeaker":$("#courseSpeaker_input").val(),"course.courseIntro":$("#courseKey_input").val()});
	});
	
	mmg = $('#grid').mmGrid({
		url: '${basePath}admin/findAllCourse.action',
		height: 410,
		autoLoad: true,
		indexCol:true,
		root:'cList',
		fullWidthRows: true,
		cols: [
	 {title: '课程ID', sortable: true, width: 70, name: 'courseId' },
     { title: '课程名', sortable: true, width: 80, name:'courseName' },
     { title: '讲师', sortable: true, width: 90, name: 'courseSpeaker' },
      { title: '课程内容', sortable: true, width: 210, name: 'courseIntro' },
      {title:'状态',sortable:true,width:100,
      renderer:function (val,item,row){
    	  switch(item.courseState){
			
			case 1:return "选课中心";
			case 2:return "案例教学";
			case 3:return "党建课程";
			case 4:return "党建讲座";
			}
			
      }
      },
       {
         title: '操作',
         width: 180,
         renderer: function (val, item, row)
         {
         return '<input type="hidden" id="'+item.courseId+'" value="' + item.courseId + '" />' +
             '<a href="${basePath}admin/preTestCourse.action?course.courseId=' + item.courseId + '" target="_blank">预览</a>&nbsp;&nbsp;'+
             '<a href="javascript:void(0)" onclick="updateCourse('+item.courseId+')" role="button" class="btn" data-toggle="modal">修改</a>&nbsp;&nbsp;'+
             '<a href="javascript:void(0)" onclick="clickCourse('+item.courseId+')" role="button" class="btn" data-toggle="modal">删除</a>';
         }

       }
		],
		plugins: [
			$('#page').mmPaginator({})
		]
	});


	$("#sureDeleteBtn").click(function(){
	$('#myModal1').modal('hide');
	 $.ajax({
				type : "POST",
				url : "${basePath}admin/deleteCourse.action?course.courseId="+courseID,
				dataType : "json",
				success : function(json) {
				mmg.load();
				},
				error : function() {
					alert("操作失败,请重试!");
					return false;
				}
			});
	});
	
	
	$("#updateBtn").click(function(){
	$('#myModal0').modal('hide');
	var courseId= $("#courseIdIID").val();
	var courseName =$("#courseNameIID").val();
	var courseSpeaker=$("#courseSpeakerIID").val();
	var courseIntro=$("#courseIntroIID").val();
	var courseState=$("#courseStateIID").val();
		$.ajax({
			type : "POST",
			url : "${basePath}admin/updateCourse.action",
			data:"course.courseId="+courseId+"&course.courseName="+courseName+
			"&course.courseSpeaker="+courseSpeaker+"&course.courseIntro="+courseIntro+
			"&course.courseState="+courseState,
			dataType : "json",
			success : function(json) {
				mmg.load();
			},
			error : function() {
				alert("操作失败,请重试!");
				return false;
			}
			});
	});
});

function updateCourse(courseId){
	courseID=courseId;
	$("#myModal0").modal();
	$.ajax({
			type : "POST",
			url : "${basePath}admin/getCourseById.action?course.courseId="+courseId,
			dataType : "json",
			success : function(json) {
				if(json.course!=null)
				{
				var course1 =json.course;
				setAttr(course1);
				}
			},
			error : function() {
				alert("操作失败,请重试!");
				return false;
			}
			});
	
}

function setAttr(course)
{
	$("#courseIdIID").val(course.courseId);
	$("#courseNameIID").val(course.courseName);
	$("#courseSpeakerIID").val(course.courseSpeaker);
	$("#courseIntroIID").val(course.courseIntro);
}

function clickCourse(courseId)
	{
	courseID=courseId;
	$("#myModal1").modal();
	}
</script>
<div class="row-fluid">
	<form id="condition" class="span12 form-inline no-margin" action="javascript:void(0)"
		method="post">
		<div class="row-fluid line-margin"><button class="btn" onclick="loadHTML('${basePath}admin/intoAddcoursePage.action')"><i class="icon-ok"></i>添加</button></div>
		<div class="row-fluid line-margin">
			<span class="help-inline"><b>查询过滤：</b>课程</span> <input type="text"
				class="span2" placeholder="输入课程名" id="courseName_input" /> <span class="help-inline">姓名</span>
			<input type="text" class="span2" placeholder="请输入讲师名" id="courseSpeaker_input"/> <span
				class="help-inline">内容</span> <input type="text" class="span2"
				placeholder="请输入课程关键字" id="courseKey_input" />
		</div>
		<div class="row-fluid line-margin">
		
			<div class="pull-right">
				<button class="btn" id="searchBtn">
					<i class="icon-search"></i>&nbsp;查询
				</button>
				<button class="btn"
					onclick="$('#condition')[0].reset();return false;">
					<i class="icon-remove"></i>&nbsp;清除条件
				</button>
			</div>
		</div>
	</form>
</div>
<div class="row-fluid">
	<div class="span12">
		<table id="grid"></table>
		<div id="page" class="pull-right"></div>
	</div>
</div>


<div id="myModal0" style="width:350px;" class="modal hide fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
<div class="modal-header">
<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
<h3 id="myModalLabel">修改!</h3>
</div>
	<div class="modal-body">
		 <label>课程ID</label>
		 <input type="text" id="courseIdIID" disabled="true">
		  <label>课程名</label>
		 <input type="text"  id="courseNameIID" name="courseName">
		  <label >讲师</label>
		 <input type="text" id="courseSpeakerIID" name="courseSpeaker">
		  <label>课程内容描述</label>
		 <textarea rows="3" cols="5" id="courseIntroIID" name="courseIntro"></textarea>
		  
	</div>
	<div class="modal-footer">
		<button class="btn" data-dismiss="modal" aria-hidden="true">关闭</button>
		<button class="btn btn-primary" id="updateBtn">修改</button>
	</div>
</div>

<div id="myModal1" class="modal hide fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
<div class="modal-header">
<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
<h3 id="myModalLabel">温馨提示</h3>
</div>
	<div class="modal-body">
		<p>确定删除吗？</p>
	</div>
	<div class="modal-footer">
		<button class="btn" data-dismiss="modal" aria-hidden="true">关闭</button>
		<button class="btn btn-primary" id="sureDeleteBtn">确定</button>
	</div>
</div>