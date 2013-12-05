<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="content-type" content="text/html; charset=UTF-8" />
<link rel="stylesheet" type="text/css" href="styles/bootstrap.css" />
<link rel="stylesheet" type="text/css" href="styles/global.css" />
<link rel="stylesheet" type="text/css" href="styles/mmgrid.css" />
<link rel="stylesheet" type="text/css" href="styles/mmpaginator.css" />
<link rel="stylesheet" type="text/css" href="themes/mmgrid/mmgrid.css" />
<link rel="stylesheet" type="text/css"
	href="themes/mmgrid/mmpaginator.css" />
<script type="text/javascript" src="scripts/jquery.js"></script>
<script type="text/javascript" src="scripts/bootstrap.js"></script>
<script type="text/javascript" src="scripts/mousewheel.js"></script>
<script type="text/javascript" src="scripts/global.js"></script>
<script type="text/javascript" src="scripts/mmgrid.js"></script>
<script type="text/javascript" src="scripts/mmpaginator.js"></script>
<title>学习中心</title>
<script type="text/javascript">
	var tapNumber =1;
var mmg1;
var mmg2;
var mmg3;
var mmg4;
$(document).ready(function ()
{
	$('#course-switcher a[href="#kecheng"]').click(function ()
	{
		$('#list-kecheng, #filter-kecheng, #button-remove').removeClass('hidden');
		$('#list-available, #filter-available, #button-select').addClass('hidden');
		$('#list-jiaoxue, #filter-jiaoxue, #button-select').addClass('hidden');
		$('#list-cuotiji, #filter-cuotiji, #button-select').addClass('hidden');
	});

	$('#course-switcher a[href="#available"]').click(function ()
	{
		$('#list-kecheng, #filter-kecheng, #button-remove').addClass('hidden');
		$('#list-available, #filter-available, #button-select').removeClass('hidden');
		$('#list-jiaoxue, #filter-jiaoxue, #button-select').addClass('hidden');
		$('#list-cuotiji, #filter-cuotiji, #button-select').addClass('hidden');
	});

	$('#course-switcher a[href="#jiaoxue"]').click(function ()
			{
				$('#list-kecheng, #filter-kecheng, #button-remove').addClass('hidden');
				$('#list-available, #filter-available, #button-select').addClass('hidden');
				$('#list-jiaoxue, #filter-jiaoxue, #button-select').removeClass('hidden');
				$('#list-cuotiji, #filter-cuotiji, #button-select').addClass('hidden');
			});
	
	$('#course-switcher a[href="#cuotiji"]').click(function ()
			{
				$('#list-kecheng, #filter-kecheng, #button-remove').addClass('hidden');
				$('#list-available, #filter-available, #button-select').addClass('hidden');
				$('#list-jiaoxue, #filter-jiaoxue, #button-select').addClass('hidden');
				$('#list-cuotiji, #filter-cuotiji, #button-select').removeClass('hidden');
			});
	

	mmg1 = $('#grid-available').mmGrid({
		url: '${basePath}course_fbfindCourse.action',
		height: 230,
		root:'cList',
		autoLoad: true,
		checkCol: true,
		multiSelect: true,
		fullWidthRows: true,
		cols: [
			{ title: '课程编号', sortable: true,  name: 'courseId' },
			{ title: '课程名称', sortable: true,  name: 'courseName' },
			{ title: '讲师', sortable: true,  name: 'courseSpeaker' },
			{ title: '课程介绍', sortable: true,  name: 'courseIntro' },
			{
				title: '课程状态',
				sortable: true,
				
				renderer: function (val,item,row)
				{
					return item.isSelect==1 ? '已选' : '未选';
				}
			},
			{
				title: '操作',
				
				renderer: function (val, item, row)
				{
					return '<input type="hidden" value="' + item.courseId + '" />' +
						'<button id="courseDetaiID" onclick="detail('+item.courseId+')" class="btn"><a href="#" >详细信息</a></button>&nbsp;&nbsp;' +
						(item.isSelect==0 ?  '<a href="#">选课</a>' : '<a href="study.jsp" target="_blank">学习</a>');
				}
			}
		],
		plugins: [
			$('#page-selected').mmPaginator({})
		]
	});
	
	
	
	mmg2 = $('#grid-kecheng').mmGrid({
		url: '${basePath}course_fbFindMyCourse.action',
		height: 230,
		root:'cList',
		autoLoad: true,
		checkCol: true,
		multiSelect: true,
		fullWidthRows: true,
		cols: [
			{ title: '课程编号', sortable: true,  name: 'courseId' },
			{ title: '课程名称', sortable: true,  name: 'courseName' },
			{ title: '讲师', sortable: true,  name: 'courseSpeaker' },
			{ title: '课程介绍', sortable: true,  name: 'courseIntro' },
			{ title: '课程介绍', sortable: true,  
				renderer: function (val,item,row)
				{
					switch(item.courseKind){
					
					case 1: return "二分屏";break;
					case 2: return "三分屏";break;
					}
					
				}	
			},
			{
				title: '课程状态',
				sortable: true,
				
				renderer: function (val,item,row)
				{
					return item.isSelect==1 ? '已选' : '未选';
				}
			},
			{
				title: '操作',
				
				renderer: function (val, item, row)
				{
					
					return '<input type="hidden" value="' + item.courseId + '" />' +
						'<a target="_blank" href="${basePath}getCourseStudyPage.action?course.courseId=' + item.courseId + '">学习</a>&nbsp;&nbsp;' +
						(item.isSelect==1 ?  '<a href="#">退选</a>' : '<a href="study.jsp" target="_blank">学习</a>');
				}
			}
		],
		plugins: [
			$('#page-selected').mmPaginator({})
		]
	});
	
	mmg3 = $('#grid-jiaoxue').mmGrid({
		url: '${basePath}course_fbFindExampleCourse.action',
		height: 230,
		root:'cList',
		autoLoad: true,
		checkCol: true,
		multiSelect: true,
		fullWidthRows: true,
		cols: [
			{ title: '课程编号', sortable: true,  name: 'courseId' },
			{ title: '课程名称', sortable: true,  name: 'courseName' },
			{ title: '讲师', sortable: true,  name: 'courseSpeaker' },
			{ title: '课程介绍', sortable: true,  name: 'courseIntro' },
			{
				title: '课程状态',
				sortable: true,
				
				renderer: function (val,item,row)
				{
					return item.isSelect==1 ? '已选' : '未选';
				}
			},
			{
				title: '操作',
				
				renderer: function (val, item, row)
				{
					return '<input type="hidden" value="' + item.courseId + '" />' +
						'<a href="#">详细信息</a>&nbsp;&nbsp;' +
						'<a href="study.jsp" target="_blank">学习</a>';
				}
			}
		],
		plugins: [
			$('#page-selected').mmPaginator({})
		]
	});
	
	mmg4 = $('#grid-cuotiji').mmGrid({
		url: '${basePath}course_fbfindCourse.action',
		height: 230,
		root:'cList',
		autoLoad: true,
		checkCol: true,
		multiSelect: true,
		fullWidthRows: true,
		cols: [
			{ title: '课程编号', sortable: true,  name: 'courseId' },
			{ title: '课程名称', sortable: true,  name: 'courseName' },
			{ title: '讲师', sortable: true,  name: 'courseSpeaker' },
			{ title: '课程介绍', sortable: true,  name: 'courseIntro' },
			{
				title: '课程状态',
				sortable: true,
				
				renderer: function (val,item,row)
				{
					return item.isSelect==1 ? '已选' : '未选';
				}
			},
			{
				title: '操作',
				
				renderer: function (val, item, row)
				{
					return '<input type="hidden" value="' + item.courseId + '" />' +
						'<a href="#">详细信息</a>&nbsp;&nbsp;' +
						(item.isSelect==0 ?  '<a href="#">选课</a>' : '<a href="study.jsp" target="_blank">学习</a>');
				}
			}
		],
		plugins: [
			$('#page-selected').mmPaginator({})
		]
	});
	
	
	$("#selectCourseCeneterIID").click(function ()
	{
	 tapNumber = 1;
	});
	$("#myCoyurseIID").click(function ()
	{
	tapNumber = 2;
	});
	$("#exampleTeachIID").click(function ()
	{
	tapNumber = 3;
	});
	$("#wrongQuestionIID").click(function ()
	{
	tapNumber = 4;
	});
	
	$("#searchbtn").click(function (){
	var keyWords = $("#searchKey").val();
	
	if(tapNumber==1)
	{
	 	var positionName = $("#positionIID").val();
	    var courseType =  $("#courseTypeIID").val();
	    mmg1.load({keyWords:keyWords,positionName:positionName,courseType:courseType});
	}
	if(tapNumber==2)
	{
	mmg2.load({"course.courseName":$("#courseNameIID2").val(),
	"course.courseSpeaker":$("#teacherIID2").val(),"course.courseIntro":keyWords});
	}
	if(tapNumber==3)
	{
	mmg3.load({"course.courseName":$("#courseNameIID3").val(),
	"course.courseSpeaker":$("#teacherIID3").val(),"course.courseIntro":keyWords});
	}
	if(tapNumber==4)
	{
		//mmg4.load({});
	}
	});
});

	function detail(courseId)
	{
	loadHTML('${basePath}course_intoDetailCourseInfo.action?courseId='+courseId);
	}
</script>
</head>
<body>
	<div class="container-fluid" id="content">
		<div class="row-fluid">
			<div class="span12">
				<div class="row-fluid resources">
					<form class="span12 form-inline no-margin">
						<ul id="course-switcher"
							class="row-fluid nav nav-pills line-margin">
							<li class="active"><a href="#available" data-toggle="tab"
								id="selectCourseCeneterIID">选课中心</a>
							</li>
							<li><a href="#kecheng" data-toggle="tab" id="myCoyurseIID">我的课程</a>
							</li>
							<li><a href="#jiaoxue" data-toggle="tab"
								id="exampleTeachIID">案例教学</a>
							</li>
							<li><a href="#cuotiji" data-toggle="tab"
								id="wrongQuestionIID">错题集</a>
							</li>
						</ul>
						<hr class="seperator" />
						<div id="filter-available">
							<div class="row-fluid line-margin">
								<span class="help-inline"><b>岗位过滤：</b>我的岗位</span> <select
									class="input-medium" id="positionIID">
									<option>项目经理</option>
									<option>项目书记</option>
									<option>工程部长</option>
									<option>安置部长</option>
									<option>工经部长</option>
									<option>物资部长</option>
									<option>测量员</option>
									<option>实验室主任</option>
									<option>安全员</option>
									<option>测量主管</option>
								</select>
							</div>
							<div class="row-fluid line-margin">
								<span class="help-inline"><b>课程过滤：</b>课程类型</span> <select
									class="input-medium" id="courseTypeIID">
									<option>所有</option>
									<option>财务类</option>
									<option>经济类</option>
								</select>
							</div>
						</div>
						<div id="filter-kecheng" class="hidden">
							<div class="row-fluid">
								<label>课&nbsp;&nbsp;程&nbsp;&nbsp;名</label> <input type="text"
									name="required" id="courseNameIID2" placeholder="请输入课程名" />
							</div>
							<div class="row-fluid">
								<label>课程讲师</label> <input type="text" name="required"
									id="teacherIID2" placeholder="请输入讲师名" />
							</div>
						</div>
						<div id="filter-jiaoxue" class="hidden">
							<div class="row-fluid">
								<label>课&nbsp;&nbsp;程&nbsp;&nbsp;名</label> <input type="text"
									name="required" id="courseNameIID3" placeholder="请输入课程名" />
							</div>
							<div class="row-fluid">
								<label>课程讲师</label> <input type="text" name="required"
									id="teacherIID3" placeholder="请输入讲师名" />
							</div>
						</div>
						<div id="filter-cuotiji" class="hidden">
							<div class="row-fluid">
								<div class="span2">错题集</div>
								<div class="span10 form-inline">
									<label class="checkbox"><input type="checkbox"
										name="required" checked="checked" />已选</label> &#12288;&nbsp; <label
										class="checkbox"><input type="checkbox"
										name="optional" checked="checked" />可选</label>
								</div>
							</div>
							<div class="row-fluid">
								<div class="span2">课程类型</div>
								<div class="span10 form-inline">
									<label class="checkbox"><input type="checkbox"
										name="required" checked="checked" />必修课</label> &nbsp; <label
										class="checkbox"><input type="checkbox"
										name="optional" checked="checked" />选修课</label>
								</div>
							</div>
							<div class="row-fluid">
								<div class="span2">课程状态</div>
								<div class="span10 form-inline">
									<label class="checkbox"><input type="checkbox"
										name="finished" checked="checked" />学习中</label> &nbsp; <label
										class="checkbox"><input type="checkbox" name="pending"
										checked="checked" />已完成</label>
								</div>
							</div>
						</div>
						<hr class="seperator top-margin" />
						<div class="row-fluid">
							<div id="button-select" class="span2 first-button">
								<button class="btn">
									<i class="icon-ok"></i>&nbsp;批量提交
								</button>
							</div>
							<div id="button-remove" class="span2 first-button hidden">

								<button class="btn">
									<i class="icon-remove"></i>&nbsp;批量退选
								</button>
							</div>
							<div id="search-keyword" class="span6">
								<div class="row-fluid">
									<input type="text" name="keyword"
										class="span12 input-medium search-query" id="searchKey"
										placeholder="请输入关键字" />
								</div>
							</div>
							<div class="span2">
								<div class="row-fluid">
									<button class="span12 btn" id="searchbtn" type="button">
										<i class="icon-search"></i>&nbsp;搜索
									</button>
								</div>
							</div>
						</div>
					</form>
				</div>

				<div id="list-available" class="row-fluid">
					<div class="span12">
						<table id="grid-available"></table>
						<div id="page-available" class="pull-right"></div>
					</div>
				</div>

				<div id="list-kecheng" class="row-fluid hidden">
					<div class="span12">
						<table id="grid-kecheng"></table>
						<div id="page-kecheng" class="pull-right"></div>
					</div>
				</div>
				<div id="list-jiaoxue" class="row-fluid hidden">
					<div class="span12">
						<table id="grid-jiaoxue"></table>

						<div id="page-selected" class="pull-right"></div>
					</div>
				</div>
				<div id="list-cuotiji" class="row-fluid hidden">
					<div class="span12">
						<table id="grid-cuotiji"></table>

						<div id="page-selected" class="pull-right"></div>
					</div>
				</div>


			</div>
		</div>
	</div>

</body>
</html>
