<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<link href="${basePath}styles/font-awesome.css" rel="stylesheet"></link>
<link rel="stylesheet" type="text/css"  href="${basePath}styles/mmgrid.css" />
<link rel="stylesheet" type="text/css" href="${basePath}styles/mmpaginator.css" />
<link rel="stylesheet" type="text/css" href="${basePath}themes/mmgrid/mmgrid.css" />
<link rel="stylesheet" type="text/css" href="${basePath}themes/mmgrid/mmpaginator.css" />
<script type="text/javascript" src="${basePath}scripts/jquery.js"></script>
<script type="text/javascript" src="${basePath}scripts/mmgrid.js"></script>
<script type="text/javascript" src="${basePath}scripts/mmpaginator.js"></script>


<div class="row-fluid">
		<div class="row-fluid line-margin">
			<span class="help-inline"><b>基本信息：</b></span>
		</div>
		<div class="row-fluid line-margin">
			<span class="help-inline">角色名称：</span>
			<input type="text" class=" span2" placeholder="请输入内容" name="user.userName" id="roleName"  value="${role.roleName}"/>
			
		</div>
		
		<div class="container-fluid">
		<div class="row-fluid word_style" id="trainClassname">
		</div>
		
		<script type="text/javascript">
	var mmg;
	var mmg1;

$(document).ready(function ()
{
	

	$("#finish").click(function(){
		
		var roleName = $("#roleName").val();
		var dataInfo =  "";
		
		var abilityIds="";
		mmg1.select(function(item,index){
			
			abilityIds += "&abilityIds=" + item.abilityId;
		});
		
		dataInfo += "role.roleId=${role.roleId}&role.roleName=" + roleName + abilityIds;
		
		$.ajax({
			
			type:"post",
			data:dataInfo,
			url:"${basePath}admin/modifyRole.action",
			success:function(){
				loadHTML("${basePath}admin/getRoleManagerPage.action");
			}
		});
	});
	
//按条件查询
	$("#searchBtn").click(function(){
	mmg.load({page:1,"course.courseName":$("#courseName_input").val(),
	"course.courseSpeaker":$("#courseSpeaker_input").val(),"course.courseIntro":$("#courseKey_input").val()});
	});
	

	mmg = $('#grid').mmGrid(
			{
				url : '${basePath}admin/getAllAbilitys.action',
				height : 410,
				autoLoad : true,
				checkCol : true,
				multiSelect : true,
				fullWidthRows : true,
				root : 'list',
				cols : [
						{
							title : '模块',
							sortable : true,
							name : 'abilityName'
						},
						{
							title : '链接',
							sortable : true,
							name : 'abilityURL'
						},
						{
							title : '父模块',
							renderer : function(val, item, row) {
								
								var name = "";
								name = item.parentAbility == null ? "" : item.parentAbility.abilityName;
								return  name;
							}
						},
						{
							title : '深度',
							sortable : true,
							name : 'abilityLevel'
						}],
				plugins : [ $('#page').mmPaginator({}) ]
			});
	
	
	
	mmg1 = $('#grid1').mmGrid(
			{
				
				height : 410,
				autoLoad : true,
				checkCol : true,
				multiSelect : true,
				fullWidthRows : true,
			
				cols : [
						{
							title : '模块',
							sortable : true,
							name : 'abilityName'
						},
						{
							title : '链接',
							sortable : true,
							name : 'abilityURL'
						},
						{
							title : '父模块',
							renderer : function(val, item, row) {
								
								var name = "";
								name = item.parentAbility == null ? "" : item.parentAbility.abilityName;
								return  name;
							}
						},
						{
							title : '深度',
							sortable : true,
							name : 'abilityLevel'
						} ],
				plugins : [ $('#page1').mmPaginator({}) ]
			});
});

function addToClass(abilityId)
	{

		
	 
						var dataArray = mmg.selectedRows();
						var selectRow = mmg.selectedRowsIndex();
						
	
							
							mmg.removeRow(selectRow);

						mmg1.addRow(dataArray);
						
				
	}
	
	//删除已选课程
	function deleteFromClass(abilityId)
	{
	
					var dataArray = mmg1.selectedRows();
					var selectRow = mmg1.selectedRowsIndex();
					
	
						
						mmg1.removeRow(selectRow);

					mmg.addRow(dataArray);

	}
</script>
		
		
		<div class="row-fluid">
			<div id="content" class="span10">
				<div class="row line_margin">增加权限</div>
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
				<div class="row-fluid word_style">
					<div class="row-fluid">
						<table id="grid"></table>
						<button type="submit" class="btn" id="batchAdd" onclick="addToClass()">
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
				<div class="row-fluid word_style">已增加权限</div>
			
				<div class="row-fluid word_style">
					<div class="row-fluid ">
						<table id="grid1"></table>
						<button type="submit" class="btn" id="batchDelete" onclick="deleteFromClass()">
							<i class="icon-ok"></i>批量删除
						</button>
						<div id="page1" class="pull-right"></div>
					</div>
				</div>
			</div>
		</div>
		
		<div class="row-fluid" style="margin-top: 40px">
						<button type="button" class="btn" id="finish">
							<i class="icon-ok"></i>完成
						</button>
		</div>
	</div>

</div>