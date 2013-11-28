
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
<script type="text/javascript" src="${basePath}scripts/datepicker.js"></script>

<script type="text/javascript">
	var mmg;
	var mmg1;
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
		url: '${basePath}course_findAllCourse.action',
		height: 410,
		autoLoad: true,
		checkCol: true,
		indexCol:true,
		root:'cList',
		fullWithRows: true,
		cols: [
     { title: '课程名', sortable: true, width:100, name:'courseName' },
     { title: '讲师', sortable: true, width: 100, name: 'courseSpeaker' },
      { title: '课程内容', sortable: true, width: 200, name: 'courseIntro' },
       {
         title: '操作',
         width: 100,
         renderer: function (val, item, row)
         {
         return '<input type="hidden" id="'+item.courseId+'" value="' + item.courseId + '" />' +
             '<a href="#" onclick="addToClass('+item.courseId+')" role="button" class="btn" data-toggle="modal">添加</a>';
         }

       }
		],
		plugins: [
			$('#page').mmPaginator({})
		]
	});
	
	
	mmg1 = $('#grid1').mmGrid({
		url: '${basePath}course_findAllCourse.action',
		height: 410,
		autoLoad: true,
		checkCol: true,
		indexCol:true,
		root:'cList',
		fullWithRows: true,
		cols: [
     { title: '课程名', sortable: true, width: 100, name:'courseName' },
     { title: '讲师', sortable: true, width: 100, name: 'courseSpeaker' },
      { title: '课程内容', sortable: true, width: 200, name: 'courseIntro' },
       {
         title: '操作',
         width: 100,
         renderer: function (val, item, row)
         {
         return '<input type="hidden" id="'+item.courseId+'" value="' + item.courseId + '" />' +
             '<a href="#" onclick="deleteFromClass('+item.courseId+')" role="button" class="btn" data-toggle="modal">删除</a>';
         }

       }
		],
		plugins: [
			$('#page1').mmPaginator({})
		]
	});
});
</script>
</head>
<style>
.edit {
	width: 700px;
	margin-top: 10px;
	margin-left: 60px;
}

#editor {
	max-height: 150px;
	height: 180px;
	background-color: white;
	border-collapse: separate;
	border: 1px solid rgb(204, 204, 204);
	padding: 4px;
	box-sizing: content-box;
	-webkit-box-shadow: rgba(0, 0, 0, 0.0745098) 0px 1px 1px 0px inset;
	box-shadow: rgba(0, 0, 0, 0.0745098) 0px 1px 1px 0px inset;
	border-top-right-radius: 3px;
	border-bottom-right-radius: 3px;
	border-bottom-left-radius: 3px;
	border-top-left-radius: 3px;
	overflow: scroll;
	outline: none;
}
</style>
<body>
	<div class="container-fluid">
		<div class="row-fluid">
			<div id="content" class="span10">
				<div class="row word_style">可增加课程</div>
				<div class="row-fluid">
					<form id="condition" class="span12 form-inline no-margin"
						action="javascript:void(0)" method="post">
						<div class="row-fluid line-margin">
							<span class="help-inline"><b>查询过滤：</b>课程</span> <input
								type="text" class="span2" placeholder="输入课程名"
								id="courseName_input" /> <span class="help-inline">姓名</span> <input
								type="text" class="span2" placeholder="请输入讲师名"
								id="courseSpeaker_input" /> <span class="help-inline">内容</span>
							<input type="text" class="span2" placeholder="请输入课程关键字"
								id="courseKey_input" />
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
				<div class="row word_style">
					<div class="row-fluid">
						<table id="grid"></table>
						<button type="submit" class="btn">
							<i class="icon-ok"></i>批量增加
						</button>
						<div id="page" class="pull-right"></div>
					</div>
				</div>
			</div>
		</div>
		<hr>
		<div class="row-fluid" style="margin-top: 40px">
			<div id="content" class="span10">
				<div class="row word_style">已增加课程</div>
				<div class="row word_style">
					<div class="row-fluid line-margin">
						<span class="help-inline"> <b>过滤：</b> </span> <select
							class="input-medium">
							<option>所有</option>
							<option>类型1</option>
							<option>类型2</option>
							<option>类型3</option>
						</select> 内容： <input type="text" class="span4 input-medium"
							placeholder="请输入关键字">
						<button type="submit" class="btn">查询</button>
					</div>
				</div>
				<div class="row word_style">
					<div class="row-fluid ">
						<table id="grid1"></table>
						<button type="submit" class="btn">
							<i class="icon-ok"></i>批量删除
						</button>
						<div id="page1" class="pull-right"></div>
					</div>
				</div>
			</div>
		</div>
	</div>

</body>
</html>