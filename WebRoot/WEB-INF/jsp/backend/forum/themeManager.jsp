<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
	
    <link rel="stylesheet" type="text/css" href="${basePath}styles/mmgrid.css" />
    <link rel="stylesheet" type="text/css" href="${basePath}styles/mmpaginator.css" />
    <link rel="stylesheet" type="text/css" href="${basePath}themes/mmgrid/mmgrid.css" />
    <link rel="stylesheet" type="text/css" href="${basePath}themes/mmgrid/mmpaginator.css" />
    
    
    <script type="text/javascript" src="${basePath}scripts/mmgrid.js"></script>
    <script type="text/javascript" src="${basePath}scripts/mmpaginator.js"></script>
    <script type="text/javascript" src="${basePath}scripts/datepicker.js"></script>
	<script type="text/javascript" src="${basePath}scripts/library.js"></script>
	<script type="text/javascript">
//<![CDATA[
           var mmGirdTable;
$(document).ready(function ()
{
	$('#time-to').css('background', 'none').datepicker();
	$('#time-from').css('background', 'none').datepicker();
	test="ready";
	mmGirdTable = $('#grid').mmGrid({
		url: '${basePath}getBackenThemeList.action',
		height: 410,
		autoLoad: true,
		fullWidthRows: true,
		root:'themelist',
		cols: [
				{ title: '话题名称', sortable: true,  name: 'themeName' },
				{ title: '话题编号', sortable: true, name: 'themeId' },
				{
					title: '操作',
					width: 100,
					renderer: function (val, item, row)
					{
						
						return '<a href="javascript:loadHTML(\'${basePath}modifyTheme.action?themeId=' +item.themeId + '\')">修改</a> ' + '&nbsp' + '<a href="javascript:showConfirm(' +item.themeId + ',' +'\'${basePath}\''+')" >删除</a> ';
					}
				}
			],
		plugins: [
			$('#page').mmPaginator({})
		]
	});
	
	$("#showAll").click(function(){
		mmGirdTable.load();
	});
	$("#search").click(function(){
		var bookName = $("#bookName").val();
		var bookContent = $("#bookContent").val();
		var bookClassIndex = $("#bookClassIndex").val();
		var bookType = $("#bookType").val();
		//mmGirdTable.load([{"book.bookName":bookName },{"book.bookContent":checkValue}]);
		mmGirdTable.load(
				{"book.bookName":bookName,
				"book.bookContent":bookContent,
				"book.bookType.bookTypeId":bookType,
				"book.bookClassIndex":bookClassIndex
				}
				);
	});
});


//]]>
</script>
	
            <div class="row-fluid ">
	            
            </div>
            <div class="row-fluid">
            	<div class="span12">
            		
            		<div class="span12">
						<button class="btn" onclick="loadHTML('${basePath}addTheme.action')"><i class="icon-plus"></i>&nbsp;新增</button>
					</div>			
            			<div class="row-fluid line-margin">
			               <span class="help-inline"><b>基本过滤：</b>主题名称：</span>
			               <input
			               			id="themeName"
									type="text"
									name="keyword"
									class="span2 "
									placeholder="请输入内容"
								/>
			                <span class="help-inline">主题编号：</span> <input
									id="themeId"
									type="text"
									name="keyword"
									class="span2 "
									placeholder="请输入内容"
								/>
			             			    
			                <div class="row-fluid line-margin">
			                     <button class="btn " id="search"><i class="icon-search"></i>查询</button>
			                     <button class="btn" type="reset"><i class="icon-remove"></i>清除</button>
			                     <button class="btn " id="showAll"><i class="icon-align-justify"></i>显示所有</button>
		               		</div>
		               </div>
		               <div>
		               		
		               		<div class="row-fluid">
	                             <div class="span12">
								    <table id="grid"></table>
								 <div id="page" class="pull-right"></div>
						    	</div>
                            </div>
		               </div>
		            
            	</div>
            </div>
<div id="myModal" class="modal hide fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
<div class="modal-header">
<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
<h3 id="myModalLabel">确认删除</h3>
</div>
<div class="modal-body">
<p>是否真的删除？</p>
</div>
<div class="modal-footer">
<button class="btn" data-dismiss="modal" aria-hidden="true">取消</button>
<button class="btn btn-primary" onclick="deleteBook()">确认</button>
</div>
</div>