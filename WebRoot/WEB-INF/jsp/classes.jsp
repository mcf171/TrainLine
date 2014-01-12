<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
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
<link rel="stylesheet" type="text/css" href="themes/mmgrid/mmpaginator.css" />
<script type="text/javascript" src="scripts/jquery.js"></script>
<script type="text/javascript" src="scripts/bootstrap.js"></script>
<script type="text/javascript" src="scripts/mousewheel.js"></script>
<script type="text/javascript" src="scripts/global.js"></script>
<script type="text/javascript" src="scripts/mmgrid.js"></script>
<script type="text/javascript" src="scripts/mmpaginator.js"></script>
<title>学习中心</title>
<script type="text/javascript">
//<![CDATA[
$(document).ready(function ()
{
	$('#course-switcher a[href="#selected"]').click(function ()
	{
		$('#list-selected, #filter-selected, #button-remove').removeClass('hidden');
		$('#list-available, #filter-available, #button-select').addClass('hidden');
	});

	$('#course-switcher a[href="#available"]').click(function ()
	{
		$('#list-selected, #filter-selected, #button-remove').addClass('hidden');
		$('#list-available, #filter-available, #button-select').removeClass('hidden');
	});

	$('#grid-available').mmGrid({
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
						 '<a target="_blank" href="${basePath}getCourseStudyPage.action?course.courseId=' + item.courseId + '">学习</a>';
				}
			}
		],
		plugins: [
			$('#page-available').mmPaginator({})
		]
	});
});
//]]>
</script>
</head>
<body>
<div class="container-fluid">
	<div class="row-fluid">
		<div class="span12">
			<div class="row-fluid resources">
				<form class="span12 form-inline no-margin">
					<ul id="course-switcher" class="row-fluid nav nav-pills line-margin">
						<li class="active"><a href="#available" data-toggle="tab">我的课程</a></li>
					</ul>
					<hr class="seperator" />
					<div id="filter-available">
						
						<div class="row-fluid">
							<div class="span2">我的课程</div>
							<div class="span10 form-inline">
								<label class="checkbox"><input type="checkbox" name="required" checked="checked" />已选</label>
								&#12288;&nbsp;
								<label class="checkbox"><input type="checkbox" name="optional" checked="checked" />可选</label>
							</div>
						</div>
						<div class="row-fluid">
							<div class="span2">课程类型</div>
							<div class="span10 form-inline">
								<label class="checkbox"><input type="checkbox" name="required" checked="checked" />必修课</label>
								&nbsp;
								<label class="checkbox"><input type="checkbox" name="optional" checked="checked" />选修课</label>
							</div>
						</div>
						<div class="row-fluid">
							<div class="span2">课程状态</div>
							<div class="span10 form-inline">
								<label class="checkbox"><input type="checkbox" name="finished" checked="checked" />学习中</label>
								&nbsp;
								<label class="checkbox"><input type="checkbox" name="pending" checked="checked" />已完成</label>
							</div>
						</div>
					</div>
					<hr class="seperator top-margin" />
					<div class="row-fluid">
						<div id="button-select" class="span2 first-button">
							<button class="btn"><i class="icon-ok"></i>&nbsp;批量提交</button>
						</div>
						<div id="button-remove" class="span2 first-button hidden">
							<button class="btn"><i class="icon-remove"></i>&nbsp;批量退选</button>
						</div>
						<div id="search-keyword" class="span6">
							<div class="row-fluid">
								<input
									type="text"
									name="keyword"
									class="span12 input-medium search-query"
									placeholder="请输入关键字"
								/>
							</div>
						</div>
						<div class="span2">
							<div class="row-fluid">
								<button class="span12 btn">
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
			<div id="list-selected" class="row-fluid hidden">
				<div class="span12">
					<table id="grid-selected"></table>
					<div id="page-selected" class="pull-right"></div>
				</div>
			</div>
		</div>
	</div>
</div>

</body>
</html>
