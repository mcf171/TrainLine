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
		$('#list-jiangzuo, #filter-jiangzuo, #button-jiangzuo').addClass('hidden');
		$('#list-available, #filter-available, #button-select').addClass('hidden');
	});

	$('#course-switcher a[href="#available"]').click(function ()
	{
		$('#list-selected, #filter-selected, #button-remove').addClass('hidden');
		$('#list-jiangzuo, #filter-jiangzuo, #button-jiangzuo').addClass('hidden');
		$('#list-available, #filter-available, #button-select').removeClass('hidden');
	});
	
	$('#course-switcher a[href="#jiangzuo"]').click(function ()
			{
				$('#list-selected, #filter-selected, #button-remove').addClass('hidden');
				$('#list-available, #filter-available, #button-select').addClass('hidden');
				$('#list-jiangzuo, #filter-jiangzuo, #button-jiangzuo').removeClass('hidden');
			});

	$('#grid-available').mmGrid({
		url: '${basePath}getNormalDangJianKeCheng.action',
		height: 230,
		root:'list',
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
			$('#page-available').mmPaginator({})
		]
	});

	$('#grid-selected').mmGrid({
		url: '${basePath}getDangkeLiberaryList.action',
		height: 410,
		autoLoad: true,
		fullWithRows: true,
		root:'liberary',
		cols: [
				{ title: '图书名称', sortable: true, width: 210, name: 'bookName' },
				{ title: '图书简介', sortable: true, width: 250, name: 'bookContent' },
				{ title: '图书类别', sortable: true, width: 210, 
					renderer: function (val, item, row)
					{
					return item.bookType.bookTypeName;
					}
				},	
				{ title: '图书编号', sortable: true, width: 210, name: 'bookClassIndex' },
				{
					title: '操作',
					width: 100,
					renderer: function (val, item, row)
					{
						return '<a href="readBook.action?book.bookId=' + item.bookId + '"  target="_blank">阅读</a> '; 
					}
				}
			],
		plugins: [
			$('#page-selected').mmPaginator({})
		]
	});
	
	$('#grid-jiangzuo').mmGrid({
		url: '${basePath}getNormalDangJianKeCheng.action',
		height: 410,
		root:'list',
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
						<li class="active"><a href="#available" data-toggle="tab">党建课程</a></li>
						<li><a href="#selected" data-toggle="tab">党建图书</a></li>
						<li><a href="#jiangzuo" data-toggle="tab">党建讲座</a></li>
					</ul>
					<hr class="seperator" />
					<div id="filter-available">
						<div class="row-fluid line-margin">
							<span class="help-inline"><b>岗位过滤：</b>我的岗位</span>
							<select class="input-medium">
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
							<span class="help-inline"><b>课程过滤：</b>课程类型</span>
							<select class="input-medium">
								<option>所有</option>
								<option>财务类</option>
								<option>工程经济类</option>
							</select>
							<span class="help-inline">课程状态</span>
							<select class="input-medium">
								<option>所有</option>
								<option>已选</option>
								<option>未选</option>
							</select>
						</div>
					</div>
					<div id="filter-selected" class="hidden">
						<div class="row-fluid line-margin">
			               <span class="help-inline"><b>基本过滤：</b>图书名称：</span>
			               <input
			               			id="bookName"
									type="text"
									name="keyword"
									class="span2 "
									placeholder="请输入内容"
								/>
			                <span class="help-inline">图书简介：</span> <input
									id="bookContent"
									type="text"
									name="keyword"
									class="span2 "
									placeholder="请输入内容"
								/>
			                <span class="help-inline">图书类别：</span>
			                <select class="input-small" id="bookType">
				               
			                </select>
			                <span class="help-inline">图书编号：</span>
			                <input id="bookClassIndex" type="text" class="span2" placeholder="请输入相应内容" />
			                <div class="row-fluid line-margin">
			                     <button class="btn " id="search"><i class="icon-search"></i>查询</button>
			                     <button class="btn" type="reset"><i class="icon-remove"></i>清除</button>
			                     <button class="btn " id="showAll"><i class="icon-align-justify"></i>显示所有</button>
		               		</div>
		               </div>
					</div>
					
					<div id="filter-jiangzuo" class="hidden">
						<div class="row-fluid line-margin">
			               <span class="help-inline"><b>基本过滤：</b>图书名称：</span>
			               <input
			               			id="bookName"
									type="text"
									name="keyword"
									class="span2 "
									placeholder="请输入内容"
								/>
			                <span class="help-inline">图书简介：</span> <input
									id="bookContent"
									type="text"
									name="keyword"
									class="span2 "
									placeholder="请输入内容"
								/>
			                <span class="help-inline">图书类别：</span>
			                <select class="input-small" id="bookType">
				               
			                </select>
			                <span class="help-inline">图书编号：</span>
			                <input id="bookClassIndex" type="text" class="span2" placeholder="请输入相应内容" />
			                <div class="row-fluid line-margin">
			                     <button class="btn " id="search"><i class="icon-search"></i>查询</button>
			                     <button class="btn" type="reset"><i class="icon-remove"></i>清除</button>
			                     <button class="btn " id="showAll"><i class="icon-align-justify"></i>显示所有</button>
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
			<div id="list-jiangzuo" class="row-fluid hidden">
				<div class="span12">
					<table id="grid-jiangzuo"></table>
					<div id="page-selected" class="pull-right"></div>
				</div>
			</div>
		</div>
	</div>
</div>

</body>
</html>
