<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<link href="${basePath}styles/font-awesome.css" rel="stylesheet"></link>
<link rel="stylesheet" type="text/css"  href="${basePath}styles/mmgrid.css" />
<link rel="stylesheet" type="text/css" href="${basePath}styles/mmpaginator.css" />
<link rel="stylesheet" type="text/css" href="${basePath}themes/mmgrid/mmgrid.css" />
<link rel="stylesheet" type="text/css" href="${basePath}themes/mmgrid/mmpaginator.css" />
<script type="text/javascript" src="${basePath}scripts/mmgrid.js"></script>
<script type="text/javascript" src="${basePath}scripts/mmpaginator.js"></script>



<script type="text/javascript">
	//         
	var mmGridTable;
	$(document).ready(function() {
		
		var rowDatas = new Array();
		
		<c:forEach items="${user.positions}" var="item">

		var rowData = {"positionId":"${item.positionId}","companyName":"${item.department.company.companyName}","departmentName":"${item.department.departmentName}","positionName":"${item.positionName}"};
		rowDatas.push(rowData);
		
		</c:forEach>
		
		console.log(rowDatas);
		
		mmGridTable = $('#grid').mmGrid({
			items:rowDatas,
			height : 410,
			autoLoad : true,
			checkCol : true,
			multiSelect : true,
			fullWidthRows : true,
			cols : [
					{
						title : '编号',
						sortable : true,
						name : 'positionId'
					},
			        {
				title : '公司',
				sortable : true,
				name : 'companyName'
			}, {
				title : '部门',
				sortable : true,
				name : 'departmentName'
			}, {
				title : '职位',
				sortable : true,
				name : 'positionName'
			},
			{
				title:'操作',
				renderer: function (val, item, row){
					
					return '<a href="javascript:deleteDepartment()">删除</a>';
				}
			}
			]
		});
		
		var optionString = "";
		$("#companyName").find("option").remove();
		<c:forEach items="${allCompanyList}" var="item">			
			optionString += "<option name='companyName' value='" + ${item.companyId} + "'>" + "${item.companyName}" +"</option>";
		</c:forEach>

		$("#companyName").append(optionString);
		
		getDepartmentNameByCompanyId();
		
	});
	
	function getDepartmentNameByCompanyId() {
		var value = $("#companyName").val();
		$("#departmentName").find("option").remove();
			$.ajax({
					 url : '${basePath}admin/getDepartmentList.action',
					data : 'department.company.companyId=' + value,
					success : function(msg) {
						var optionString = "";
						for ( var i = 0; i < msg.human.length; i++) {	
							optionString += "<option name='departmentName' value='" + msg.human[i].departmentId + "'>"
								+ msg.human[i].departmentName + "</option>";
						}
						$("#departmentName").append(optionString);
					}
			});
			
			setTimeout(function(){
				var departmentId = $("#departmentName").val();
				$("#positionName").find("option").remove();
				$.ajax({
					 url : '${basePath}admin/getPositionList.action',
					data : 'position.department.departmentId=' + departmentId,
					success : function(msg) {
						var optionString = "";
						for ( var i = 0; i < msg.human.length; i++) {	
							optionString += "<option name='positionName' value='" + msg.human[i].positionId + "'>"
								+ msg.human[i].positionName + "</option>";
						}
						$("#positionName").append(optionString);
					}
			});
		}, 600);
	}
	
	function getPositionNameByDepartmentId(){
		var departmentId = $("#departmentName").val();
		$("#positionName").find("option").remove();
		$.ajax({
			 url : '${basePath}admin/getPositionList.action',
			data : 'position.department.departmentId=' + departmentId,
			success : function(msg) {
				var optionString = "";
				for ( var i = 0; i < msg.human.length; i++) {	
					optionString += "<option name='positionName' value='" + msg.human[i].positionId + "'>"
						+ msg.human[i].positionName + "</option>";
				}
				$("#positionName").append(optionString);
			}
	});
	}
	
$("#addPosition").click(function(){
		
		var companyName=$("#companyName").find("option:selected").text();  //获取Select选择的Text
		var departmentName=$("#departmentName").find("option:selected").text();  //获取Select选择的Text
		var positionName=$("#positionName").find("option:selected").text();  //获取Select选择的Text
		var positionId=$("#positionName").val();  //获取Select选择的Value
		var rowData = {"positionId":positionId,"companyName":companyName,"departmentName":departmentName,"positionName":positionName};
		mmGridTable.addRow(rowData);
	});

	$("#addPeroson").click(function addPeroson(){
		
		var userName = $("#userName").val();
		var userPassword = $("#userPassword").val();
		var realName = $("#realName").val();
		var userState = $("#userState").val();
		var sex = $("#sex").val();
		
		var roleIds = ""
			mmg1.select(function(item,index){
				
				roleIds += "&roleIds=" + item.roleId;
			});
			
			
		
		dataInfo = "user.userId=${user.userId}&user.userName="+userName+"&user.userPassword=" + userPassword + "&user.personalinformation.realName=" + realName + "&user.personalinformation.sex=" + sex +"&user.userState=" + userState + positionIds+ roleIds;
		
		$.ajax({
			type:"post",
			data : dataInfo,
			url:"${basePath}admin/modifyPerson.action",
			success:function(msg){
				loadHTML("${basePath}admin/showBackendPersonPage.action");
			}
		});
	});
	
	function deleteDepartment(){
		
		mmGridTable.removeRow(mmGridTable.selectedRowsIndex());
	}
	//
</script>

<div class="row-fluid">
<div class="row-fluid line-margin">
			<span class="help-inline"><b>基本信息：</b></span>
		</div>
		<div class="row-fluid line-margin">
			<span class="help-inline">人员名称：</span>
			<input type="text" class=" span2" placeholder="请输入内容" name="user.userName" id="userName" value="${user.userName}"/>
		</div>
		<div class="row-fluid line-margin">
			<span class="help-inline">密码：</span>
			<input type="password" class=" span2" placeholder="请输入内容" value="${user.userPassword}" value="1"  id="userPassword"/>
		</div>
		<div class="row-fluid line-margin">
			<span class="help-inline">真实姓名：</span>
			<input type="text" class=" span2" placeholder="请输入内容" value="${user.personalinformation.realName}" id="realName"/>
		</div>
		<div class="row-fluid line-margin">
			<span class="help-inline">人员性别：</span>
			<select class="input-small " name="user.personalinformation.sex" id="sex">
				<option>男</option>
				<option>女</option>
			</select>
		</div>
		
		<div class="row-fluid line-margin">
			<span class="help-inline">权限级别：</span>
			<select class="input-small " name="user.userState" id="userState">
				<option value="1">超级管理员</option>
				<option value="2">教师</option>
				<option value="3">学员</option>
			</select>
		</div>
		
		<div class="row-fluid line-margin">
			<span class="help-inline"><b>可增加职位：</b></span>
		</div>
		<div class="row-fluid line-margin">
			<span class="help-inline">公司：</span>
			<select class="input-small " id="companyName" onchange="getDepartmentNameByCompanyId() , getPositionNameByDepartmentId()">
			</select>
		</div>
		<div class="row-fluid line-margin">
			<span class="help-inline">部门：</span>
			<select class="input-small " id="departmentName" onchange="getPositionNameByDepartmentId()">
			</select>
		</div>
		<div class="row-fluid line-margin">
			<span class="help-inline">职位：</span>
			<select class="input-small " id="positionName" >
			</select>
		</div>
		<div class="row-fluid line-margin">
			<button class="btn span1 " type="button"  id="addPosition">
				添加
			</button>
		</div>
		<div class="row-fluid line-margin">
			<span class="help-inline"><b>已增加职位：</b></span>
		</div>
		<div class="row-fluid">
			<div class="span7">
				<table id="grid"></table>
				<div id="page" class="pull-right"></div>
			</div>
		</div>
		
		
			<script type="text/javascript">
	var mmg;
	var mmg1;

$(document).ready(function ()
{
	

	
//按条件查询
	$("#searchBtn").click(function(){
	mmg.load({page:1,"course.courseName":$("#courseName_input").val(),
	"course.courseSpeaker":$("#courseSpeaker_input").val(),"course.courseIntro":$("#courseKey_input").val()});
	});
	

	mmg = $('#grid1').mmGrid(
			{
				url : '${basePath}admin/getAllRoles.action',
				height : 410,
				autoLoad : true,
				checkCol : true,
				multiSelect : true,
				fullWidthRows : true,
				root : 'list',
				cols : [
						{
							title : '角色名称',
							sortable : true,
							name : 'roleName'
						} ],
				plugins : [ $('#page1').mmPaginator({}) ]
			});
	
	
	
	mmg1 = $('#grid2').mmGrid(
			{
				
				height : 410,
				autoLoad : true,
				checkCol : true,
				multiSelect : true,
				fullWidthRows : true,
			
				cols : [
						{
							title : '角色名称',
							sortable : true,
							name : 'roleName'
						}],
				plugins : [ $('#page2').mmPaginator({}) ]
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
				<div class="row line_margin">增加角色</div>
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
						<table id="grid1"></table>
						<button type="submit" class="btn" id="batchAdd" onclick="addToClass()">
							<i class="icon-ok"></i>批量增加
						</button>
						<div id="page1" class="pull-right"></div>
					</div>
				</div>
			</div>
		</div>
		<hr>
		<div class="row-fluid" style="margin-top: 40px">
			<div id="content" class="span10">
				<div class="row-fluid word_style">已增加角色</div>
			
				<div class="row-fluid word_style">
					<div class="row-fluid ">
						<table id="grid2"></table>
						<button type="submit" class="btn" id="batchDelete" onclick="deleteFromClass()">
							<i class="icon-ok"></i>批量删除
						</button>
						<div id="page2" class="pull-right"></div>
					</div>
				</div>
			</div>
		</div>
		
		<div class="row-fluid line-margin">
			<button class="btn span1 offset1 " type="submit" id="addPeroson">
				确定
			</button>
			<button class="btn span1 offset1" type="button" id="cancle">
				取消
			</button>
		</div>
</div>