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
<script type="text/javascript">
var mmg;
$(document).ready(function ()
{
	$('#time-to').css('background', 'none').datepicker();
	$('#time-from').css('background', 'none').datepicker();

	//按条件查询
	$("#searchBtn").click(function(){
	alert("search");
	mmg.load({page:1,"course.courseName":$("#courseName_input").val(),
	"course.courseSpeaker":$("#courseSpeaker_input").val(),"course.courseIntro":$("#courseKey_input").val()});
	});
	
	mmg = $('#grid').mmGrid({
		url: '${basePath}course_findAllCourse.action',
		height: 410,
		autoLoad: true,
		indexCol:true,
		root:'cList',
		fullWithRows: true,
		cols: [
	 {title: '课程ID', sortable: true, width: 70, name: 'courseId' },
     { title: '课程名', sortable: true, width: 80, name:'courseName' },
     { title: '讲师', sortable: true, width: 90, name: 'courseSpeaker' },
      { title: '课程内容', sortable: true, width: 210, name: 'courseIntro' },
      {title:'状态',sortable:true,width:100,
      renderer:function (val,item,row){
      return item.courseState=1?'是':'否';
      }
      },
       {
         title: '操作',
         width: 150,
         renderer: function (val, item, row)
         {
         return '<input type="hidden" id="'+item.courseId+'" value="' + item.courseId + '" />' +
             '<a href="#">查看</a>&nbsp;&nbsp;<a href="#">修改</a>&nbsp;&nbsp;<button class="btn" onclick="deleteCourse('+item.courseId+')">删除</button>';
         }

       }
		],
		plugins: [
			$('#page').mmPaginator({})
		]
	});

});

function deleteCourse(courseId)
	{
	 $.ajax({
						type : "POST",
						url : "${basePath}course_deleteCourse.action?courseId="+courseId,
						dataType : "json",
						success : function(json) {
						mmg.load({page:1});
						},
						error : function() {
							alert("操作失败,请重试!");
							return false;
						}
					});
	}
</script>
<div class="row-fluid">
	<form id="condition" class="span12 form-inline no-margin" action="javascript:void(0)"
		method="post">
		<div class="row-fluid line-margin"><button class="btn" onclick="loadHTML('${basePath}course_addCourse.action')"><i class="icon-ok"></i>添加</button></div>
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