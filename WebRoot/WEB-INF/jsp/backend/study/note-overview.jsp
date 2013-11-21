<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>
<link rel="stylesheet" type="text/css" href="${basePath}styles/datepicker.css" />
<link rel="stylesheet" type="text/css" href="${basePath}styles/mmgrid.css" />
<link rel="stylesheet" type="text/css" href="${basePath}styles/mmpaginator.css" />
<link rel="stylesheet" type="text/css"
	href="${basePath}themes/mmgrid/mmgrid.css" />
<link rel="stylesheet" type="text/css"
	href="${basePath}themes/mmgrid/mmpaginator.css" />
	<script type="text/javascript" src="${basePath}scripts/jquery.js"></script>
<script type="text/javascript" src="${basePath}scripts/datepicker.js"></script>
<script type="text/javascript" src="${basePath}scripts/mmgrid.js"></script>
<script type="text/javascript" src="${basePath}scripts/mmpaginator.js"></script>
<script type="text/javascript">
var mmg;

	$(document).ready(function() {
		
		$('#time-to').css('background', 'none').datepicker();
		$('#time-from').css('background', 'none').datepicker();
		search();
		
		//查询
		$("#searchNoteBtn").click(function() {
		var regx=/^[0-9]*/;
		var flag =false;
		if(!($("#userIdBtn").val()==null||$("#userIdBtn").val()=="") && regx.test($("#userIdBtn").val())==true)
		{
		flag = true;
		}
		
		if(!($("#catalogueIdBtn").val()==null ||$("#catalogueIdBtn").val()=="") && regx.test($("#catalogueIdBtn").val())==true)
		{
		flag = true;
		}
		
		if($("#contentBtn").val())
		{
		 flag = true;
		}
		
		if(flag==false)
		{
		alert("请输入查询条件!");
		return ;
		}
		 mmg.load({page: 1,userId:$("#userIdBtn").val(),catalogueId:$("#catalogueIdBtn").val(),noteContent:$("#contentBtn").val()});
		});
		
	function search() {
	mmg=$('#grid').mmGrid(
						{
							url : "${basePath}note_findAllNote.action",
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
											return '<input type="hidden" id="'+item.noteId+'" value="' + item.noteId + '" />'
													+ '<a href="#">查看</a>&nbsp;&nbsp;<button onclick="deletenote('+item.noteId+')" class="btn" id="'+item.noteId+'">删除</button>';
										}

									} ],
							plugins : [ $('#page').mmPaginator({}) ]
						});

	};
	

	});
	
	//删除一条记录
	function deletenote(noteid){
	$.ajax({
						type : "POST",
						url : "${basePath}note_deleteNote.action?noteId="+noteid,
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
		<div class="row-fluid line-margin">
			<span class="help-inline"><b>查询过滤：</b>课程目录ID</span> <input
				type="text" class="span2" name="note.catalogue.catalogueId" id="catalogueIdBtn"
				placeholder="请输入课程目录编号" /> <span class="help-inline">用户ID</span> <input
				type="text" class="span2" name="note.userId" id="userIdBtn" placeholder="请输入学员ID"  />
			<span class="help-inline">内容</span> <input type="text" class="span2" id="contentBtn"
				name="note.noteContent" placeholder="请输入笔记内容关键字"/>
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
		<div id="page" class="pull-right"></div>
	</div>
</div>