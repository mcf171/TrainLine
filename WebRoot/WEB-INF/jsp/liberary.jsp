<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<link rel="stylesheet" type="text/css" href="${basePath}styles/bootstrap.css" />
<link rel="stylesheet" type="text/css" href="${basePath}styles/global.css" />
<link rel="stylesheet" type="text/css" href="${basePath}styles/mmgrid.css" />
<link rel="stylesheet" type="text/css" href="${basePath}styles/mmpaginator.css" />
<link rel="stylesheet" type="text/css" href="${basePath}themes/mmgrid/mmgrid.css" />
<link rel="stylesheet" type="text/css" href="${basePath}themes/mmgrid/mmpaginator.css" />
<script type="text/javascript" src="${basePath}scripts/jquery.js"></script>
<script type="text/javascript" src="${basePath}scripts/bootstrap.js"></script>
<script type="text/javascript" src="${basePath}scripts/mousewheel.js"></script>
<script type="text/javascript" src="${basePath}scripts/global.js"></script>
<script type="text/javascript" src="${basePath}scripts/mmgrid.js"></script>
<script type="text/javascript" src="${basePath}scripts/mmpaginator.js"></script>
<title>图书馆</title>
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
		url:  '${basePath}getInsideLiberaryList.action',
		height: 280,
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
					outHTML = '<a href="readBook.action?book.bookId=' + item.bookId + '"  target="_blank">阅读</a> '; 
					console.log(outHTML);
					return  outHTML;
					
				}
			}
		],
		plugins: [
			$('#page').mmPaginator({})
		]
	});
	
	$('#grid-selected').mmGrid({
		url:  '${basePath}getOutSideLiberaryList.action',
		height: 280,
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
						outHTML = '<a href="readBook.action?book.bookId=' + item.bookId + '"  target="_blank">阅读</a> '; 
						console.log(outHTML);
						return  outHTML;
						
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
        <ul id="course-switcher" class="row-fluid nav nav-pills line-margin">
						
						<li class="active"><a href="#available" data-toggle="tab">内部图书</a></li>
						<li ><a href="#selected"  data-toggle="tab">外部图书</a></li>
					</ul>
        <div >
          <div class="row-fluid">
            <div class="span12"> <b>过滤选项</b> </div>
          </div>
          <hr class="seperator" />
          
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
      	  
        
        
      </div>
      <div class="row-fluid">
				<div id="grid-container" class="span12">
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
  </div>
</div>
</body>
</html>