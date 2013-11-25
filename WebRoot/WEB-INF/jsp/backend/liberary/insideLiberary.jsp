<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
	
    <link rel="stylesheet" type="text/css" href="${basePath}styles/mmgrid.css" />
    <link rel="stylesheet" type="text/css" href="${basePath}styles/mmpaginator.css" />
    <link rel="stylesheet" type="text/css" href="${basePath}themes/mmgrid/mmgrid.css" />
    <link rel="stylesheet" type="text/css" href="${basePath}themes/mmgrid/mmpaginator.css" />
    
    <script type="text/javascript" src="${basePath}scripts/mmgrid.js"></script>
    <script type="text/javascript" src="${basePath}scripts/mmpaginator.js"></script>
    <script type="text/javascript" src="${basePath}scripts/datepicker.js"></script>

	<script type="text/javascript">
//<![CDATA[
$(document).ready(function ()
{
	$('#time-to').css('background', 'none').datepicker();
	$('#time-from').css('background', 'none').datepicker();

	mmGirdTable = $('#grid').mmGrid({
		url: '${basePath}getInsideLiberaryList.action',
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
						return '<a href="#?book.bookId=' +item.bookId + '" target="_blank">修改</a> ' + '&nbsp' + '<a href="#?book.bookId=' +item.bookId + '" target="_blank">删除</a> ';
					}
				}
			],
		plugins: [
			$('#page').mmPaginator({})
		]
	});
	
	var optionString = "";
		<c:forEach items="${bookTypeList}" var="item">
				optionString += "<option>" + "${item.bookTypeName}" +"</option>"
		</c:forEach>
	
	$("#option").append(optionString);
	
	
});
//]]>
</script>
	
            <div class="row-fluid ">
	            
            </div>
            <div class="row-fluid">
            	<div class="span12">
            		<form id="condition" class="span12 form-inline no-margin">
            		<div class="span12">
						<button class="btn"><i class="icon-plus"></i>&nbsp;新增</button>
					</div>			
            			<div class="row-fluid line-margin">
			               <span class="help-inline"><b>基本过滤：</b>图书名称：</span>
			               <input
									type="text"
									name="keyword"
									class="span2 "
									placeholder="请输入内容"
								/>
			                <span class="help-inline">图书简介：</span> <input
									type="text"
									name="keyword"
									class="span2 "
									placeholder="请输入内容"
								/>
			                <span class="help-inline">图书类别：</span>
			                <select class="input-small" id="option">
				               
			                </select>
			                <span class="help-inline">图书编号：</span>
			                <input type="text" class="span2" placeholder="请输入相应内容" />
			                <div class="row-fluid line-margin">
			                     <button class="btn "><i class="icon-search"></i>查询</button>
			                     <button class="btn" type="reset"><i class="icon-remove"></i>清除</button>
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
		            </form>
            	</div>
            </div>
