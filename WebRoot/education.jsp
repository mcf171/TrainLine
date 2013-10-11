<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
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
<title>图书馆</title>
<script type="text/javascript">
//<![CDATA[
$(document).ready(function ()
{
	$(window).resize(function ()
	{
		;
	});

	$('#grid').mmGrid({
		url: '${basePath}trainList.action',
		height: 280,
		autoLoad: true,
		fullWithRows: true,
		root:'trainList',
		cols: [
			{ title: '课程名称', sortable: true, width: 150, name: 'trainName' },
			{ title: '培训内容', sortable: true, width: 150, name: 'trainContent' },
			{ title: '培训地点', sortable: true, width: 150, name: 'trainPlace' },
			{ title: '学时', sortable: true, width: 100, name: 'trainCountHour' },
			{ title: '电报号', sortable: true, width: 150, name: 'trainTelegramCode' },
			{ title: '培训机构', sortable: true, width: 150, name: 'trainTrainAgency' },
			{ title: '开始时间', sortable: true, width: 180, name: 'trainStartTime' },	
			{ title: '结束时间', sortable: true, width: 180, name: 'trainEndTime' },
			{
				width: 100,
				title: '课程类型',
				sortable: true,
				renderer: function (val, item, row)
				{
					return item.force ? '必修课' : '选修课'
				}
			},
			{
				title: '操作',
				width: 100,
				renderer: function (val, item, row)
				{
					return '<input type="hidden" value="' + item.id + '" /><a href="#">参加</a>';
				}
			}
		],
		plugins: [
			$('#page').mmPaginator({})
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
        <ul id="course-switcher" class="breadcrumb">
          <li class=""> <a data-toggle="tab" href="#available">班级计划</a> </li>
        </ul>
        <div >
          <div class="row-fluid">
            <div class="span12"> <b>过滤选项</b> </div>
          </div>
          <hr class="seperator" />
          <div class="form-inline line-margin"> <span class="help-inline"><b>查询过滤：</b>班级状态</span>
            <select class="input-small">
              <option>所有</option>
              <option>已完成</option>
              <option>未完成</option>
            </select>
          </div>
          <hr class="seperator top-margin" />
          <div class="row-fluid">
            <div class="span6 offset2">
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
                <button class="span12 btn"> <i class="icon-search"></i>&nbsp;搜索 </button>
              </div>
            </div>
          </div>
        </div>
      	  
        
        
      </div>
      <div class="row-fluid">
				<div id="grid-container" class="span12">
					<table id="grid"></table>
					<div id="page" class="pull-right"></div>
				</div>
			</div>
    </div>
  </div>
</div>
</body>
</html>
