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
	
	function callback(msg){
	alert("增加成功");
	loadHTML('${basePath}admin/showBackendPersonPage.action');
}
	var mmGridTable;
	$(document).ready(function() {
		mmGridTable = $('#grid').mmGrid({
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
			],
			plugins : [ $('#page').mmPaginator({}) ]
		});
		
		var optionString = "";

		flag = false;
		$("#noCompany").fadeIn();
		$("#companyName").find("option").remove();
		<c:forEach items="${allCompanyList}" var="item">			
			optionString += "<option name='companyName' value='" + ${item.companyId} + "'>" + "${item.companyName}" +"</option>";
			flag = true;
			$("#noCompany").fadeOut();
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

						flag = false;
						$("#noDepartment").fadeIn();
						for ( var i = 0; i < msg.human.length; i++) {	
							optionString += "<option name='departmentName' value='" + msg.human[i].departmentId + "'>"
								+ msg.human[i].departmentName + "</option>";

							flag = true;
							$("#noDepartment").fadeOut();
						}
						$("#departmentName").append(optionString);
					},
					error:function(msg){
						
						flag = false;
						$("#noDepartment").fadeIn();
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
						flag = false;
						$("noPosition").fadeIn();
						for ( var i = 0; i < msg.human.length; i++) {	
							optionString += "<option name='positionName' value='" + msg.human[i].positionId + "'>"
								+ msg.human[i].positionName + "</option>";
								flag  = true;
								$("noPosition").fadeOut();
						}
						$("#positionName").append(optionString);
					},
					error:function(){
						flag = false;
						$("#noPosition").fadeIn();
						
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
				flag = false;
				$("#noPosition").fadeIn();
				for ( var i = 0; i < msg.human.length; i++) {	
					optionString += "<option name='positionName' value='" + msg.human[i].positionId + "'>"
						+ msg.human[i].positionName + "</option>";
						flag  = true;
						$("#noPosition").fadeOut();
				}
				$("#positionName").append(optionString);
			},
			error:function(){
				flag = false;
				$("#noPosition").fadeIn();
				
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
	
		if(userName==""){
			
			$("#name").fadeIn();
			
			$("#password").fadeOut();
			flag = false;
		}
		if(userPassword==""){
			
			$("#password").fadeIn();
			$("#name").fadeOut();
			flag = false;
		}
		
		if(flag){
		var positionIds="";
		mmGridTable.select(function(item,index){
			
			positionIds += "&positionIds=" + item.positionId;
		});
		
		dataInfo = "user.userName="+userName+"&user.userPassword=" + userPassword + "&user.personalinformation.realName=" + realName + "&user.personalinformation.sex=" + sex +"&user.userState=" + userState + positionIds;
		
		$.ajax({
			type:"post",
			data : dataInfo,
			url:"${basePath}admin/addUser.action",
			success:function(msg){
				loadHTML("${basePath}admin/showBackendPersonPage.action");
			}
		});
		}else{
			alert("存在非法项");
			
		}
	});
	var  flag = false;
	function deleteDepartment(){
		
		mmGridTable.removeRow(mmGridTable.selectedRowsIndex());
	}
	
	function existUser(){
		
		var userName = $("#userName").val();
		dataInfo="user.userName=" + userName;
		$.ajax({
			
			type:"post",
			url:"${basePath}checkUser.action",
			data:dataInfo,
			success:function(msg){
				if(msg.flag){
					$("#exist").fadeIn();
					flag = false;
				}else{
					$("#exist").fadeOut();
					flag = true;
				}
			}
		});
	}
	//
</script>

<div class="row-fluid">
		<div class="row-fluid line-margin">
			<span class="help-inline"><b>基本信息：</b></span>
		</div>
		<div class="row-fluid line-margin">
			<span class="help-inline">人员名称：</span>
			<input type="text" class=" span2" placeholder="请输入内容" name="user.userName" id="userName" onchange="existUser()"/>
			<font colro="red" class="hide" id="name" color="red">*必须填写</font><font color="red" class="hide" id="exist">*用户名已经存在</font>
		</div>
		<div class="row-fluid line-margin">
			<span class="help-inline">密码：</span>
			<input type="text" class=" span2" placeholder="请输入内容" name="user.userPassword" value="1"  id="userPassword"/>
			<font colro="red" class="hide" id="password">*必须填写</font>
		</div>
		<div class="row-fluid line-margin">
			<span class="help-inline">真实姓名：</span>
			<input type="text" class=" span2" placeholder="请输入内容" name="user.personalinformation.realName" id="realName"/>
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
			<c:if test="${user.userState==1}">
				<option value="1">超级管理员</option>
				</c:if>
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
			<font color="red" class="hide" id="noCompany">*暂无公司</font>
		</div>
		<div class="row-fluid line-margin">
			<span class="help-inline">部门：</span>
			<select class="input-small " id="departmentName" onchange="getPositionNameByDepartmentId()">
			</select>
			<font color="red" class="hide" id="noDepartment">*暂无部门</font>
		</div>
		<div class="row-fluid line-margin">
			<span class="help-inline">职位：</span>
			<select class="input-small " id="positionName" >
			</select>
			<font color="red" class="hide" id="noPosition">*暂无职位</font>
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
		<div class="row-fluid line-margin">
			<button class="btn span1 offset1 " type="submit" id="addPeroson">
				确定
			</button>
			<button class="btn span1 offset1" type="button" id="cancle">
				取消
			</button>
		</div>

</div>