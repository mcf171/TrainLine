<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>
<link rel="stylesheet" type="text/css" href="../../styles/datepicker.css" />
<link rel="stylesheet" type="text/css" href="../../styles/mmgrid.css" />
<link rel="stylesheet" type="text/css" href="../../styles/mmpaginator.css" />
<link rel="stylesheet" type="text/css"
	href="../../themes/mmgrid/mmgrid.css" />
<link rel="stylesheet" type="text/css"
	href="../../themes/mmgrid/mmpaginator.css" />
	<script type="text/javascript" src="../../scripts/jquery.js"></script>
<script type="text/javascript" src="../../scripts/datepicker.js"></script>
<script type="text/javascript" src="../../scripts/mmgrid.js"></script>
<script type="text/javascript" src="../../scripts/mmpaginator.js"></script>
<script type="text/javascript">
	$(document).ready(function() {
	var mmg;
		
		$('#time-to').css('background', 'none').datepicker();
		$('#time-from').css('background', 'none').datepicker();
		search();
		$("#searchNoteBtn").click(function() {
		 mmg.load({page: 1});
		});
		
	function search() {
	var btnObj =  $("#catalogueIdBtn").val();
	
	var urlPath = "http://127.0.0.1:8080/TrainLine/note_findAllNote.action"+"?catalogueId="+$("#catalogueIdBtn").val() +"&userId=" +$("#userIdBtn").val()+"&noteContent=" +$("contentBtn").val(); 
	mmg=$('#grid').mmGrid(
						{
							url : "http://127.0.0.1:8080/TrainLine/note_findAllNote.action"+"?catalogueId="+$("#catalogueIdBtn").val() +"&userId=" +$("#userIdBtn").val()+"&noteContent=" +$("contentBtn").val(),
							height : 410,
							autoLoad : true,
							root : 'nList',
							fullWithRows : true,
							cols : [
									{
										title : '笔记ID',
										sortable : true,
										width : 80,
										name : 'noteId'
									},
									{
										title : '课程目录ID',
										sortable : true,
										width : 80,
										name : 'catalogue.catalogueId'
									},
									{
										title : '笔记作者',
										sortable : true,
										width : 90,
										name : 'userId'
									},
									{
										title : '笔记内容',
										sortable : true,
										width : 250,
										name : 'noteContent'
									},
									{
										title : '操作',
										width : 120,
										renderer : function(val, item, row) {
											return '<input type="hidden" value="' + item.noteId + '" />'
													+ '<a href="#">查看</a>&nbsp;&nbsp;<a href="#">删除</a>';
										}

									} ],
							plugins : [ $('#page').mmPaginator({}) ]
						});

	}
	});

	
</script>
<div class="row-fluid">
	<form id="condition" class="span12 form-inline no-margin" action="javascript:void(0)"
		method="post">
		<div class="row-fluid line-margin">
			<span class="help-inline"><b>查询过滤：</b>课程目录ID</span> <input
				type="text" class="span2" name="note.catalogue.catalogueId" id="catalogueIdBtn"
				placeholder="请输入课程目录编号" value=""/> <span class="help-inline">用户ID</span> <input
				type="text" class="span2" name="note.userId" id="userIdBtn" placeholder="请输入用户ID" value="" />
			<span class="help-inline">内容</span> <input type="text" class="span2" id="contentBtn"
				name="note.noteContent" placeholder="请输入笔记内容" value=""/>
		</div>
		<div class="row-fluid line-margin">

			<div class="pull-right">
				<button class="btn" id="searchNoteBtn">
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
		<table id="grid1"></table>
		<div id="page" class="pull-right"></div>
	</div>
</div>