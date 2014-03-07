<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<link rel="stylesheet" type="text/css" href="${basePath}styles/datepicker.css" />
<link rel="stylesheet" type="text/css" href="${basePath}styles/mmgrid.css" />
<link rel="stylesheet" type="text/css" href="${basePath}styles/mmpaginator.css" />
<link rel="stylesheet" type="text/css"
	href="${basePath}themes/mmgrid/mmgrid.css" />
<link rel="stylesheet" type="text/css"
	href="${basePath}themes/mmgrid/mmpaginator.css" />
<script type="text/javascript" src="${basePath}scripts/datepicker.js"></script>
<script type="text/javascript" src="${basePath}scripts/mmgrid.js"></script>
<script type="text/javascript" src="${basePath}scripts/mmpaginator.js"></script>
<script type="text/javascript" src="${basePath}scripts/bootstrap.js"></script>

<script type="text/javascript">
//<!--

var mmg;

$(document).ready(function(){
	
	var optionString = "";
	var companyNameValue = "${position.department.company.companyId }";
	flag = false;
	$("#noCompany").fadeIn();
	<c:forEach items="${allCompanyList}" var="item">
		var itemCompanyId = ${item.companyId};
		if(companyNameValue == itemCompanyId){
			optionString += "<option name='companyName' value='" + itemCompanyId + "' selected='selected'>" + "${item.companyName}" +"</option>";
		}else{
			optionString += "<option name='companyName' value='" + itemCompanyId + "'>" + "${item.companyName}" +"</option>";
		}
		flag = true;
		$("#noCompany").fadeOut();
	</c:forEach>

	$("#companyName").append(optionString);
	

	mmg = $('#grid').mmGrid({
		url: '${basePath}admin/findAllCourse.action',
		height: 410,
		autoLoad: true,
		root:'cList',
		checkCol: true,
		multiSelect: true,
		fullWidthRows: true,
		cols: [
	 {title: '课程ID', sortable: true, width: 70, name: 'courseId' },
     { title: '课程名', sortable: true, width: 80, name:'courseName' },
     { title: '讲师', sortable: true, width: 90, name: 'courseSpeaker' },
      { title: '课程内容', sortable: true, width: 210, name: 'courseIntro' },
      {title:'状态',sortable:true,width:100,
      renderer:function (val,item,row){
    	  switch(item.courseState){
			
			case 1:return "选课中心";
			case 2:return "案例教学";
			case 3:return "党建课程";
			case 4:return "党建讲座";
			}
			
      }
      }
		]
	});
	
	
	getDepartmentNameByCompanyId();	
});


function checkSubmit(){

	var departmentName = $("#departmentName").val();
	var positionName = $("#positionName").val();

	var dataArray = mmg.selectedRows();
	var selectCourseId = "";
	for(i = 0; i< dataArray.length; i++ ){
		
		selectCourseId += "&courseIds=" + dataArray[i].courseId;
	}
	var dataInfo = "position.positionId=${position.positionId}&position.positionName=" + positionName + "&position.department.departmentId=" + departmentName + selectCourseId;
	
	if(flag){
		
	$.ajax({
		
		type:"post",
		url:"${admin}admin/modifyPosition.action",
		data:dataInfo,
		success:function(msg){
			loadHTML("${basePath}admin/showBackendPositionPage.action");
		}
	});

	}else{
		
		alert("存在非法项");
	}
	
};
var flag = false;
$("#cancle").click(function(){

	loadHTML('${basePath}admin/showBackendPositionPage.action');
});

$("#companyName").change(function(){
	$("#departmentName").find("option").remove();
	
	$.ajax({
		url:'getDepartmentList.action',
		data:'department.company.companyId=' + this.value,
		success:function(msg){	
			var optionString = "";
			for(var i=0;i<msg.human.length;i++){
				optionString += "<option name='departmentName' value='" + msg.human[i].departmentId + "'>" + msg.human[i].departmentName +"</option>";
			}
			$("#departmentName").append(optionString);
			flag = true;
		},
		error:function(msg){
			$("#noDepartment").fadeIn();
			flag = false;
		}
		
	});
});


function getDepartmentNameByCompanyId() {
	var value = $("#companyName").val();
	var departmentNameValue = ${position.department.departmentId};
	$("#departmentName").find("option").remove();
		$.ajax({
					url : 'getDepartmentList.action',
					data : 'department.company.companyId=' + value,
					success : function(msg) {
						var optionString = "";
						$("#noDepartment").fadeIn();
						flag = false;
						for ( var i = 0; i < msg.human.length; i++) {	
							optionString += "<option name='departmentName' value='" + msg.human[i].departmentId + "'>"
								+ msg.human[i].departmentName + "</option>";
							flag = true;
							$("#noDepartment").fadeOut();
						}
						$("#departmentName").append(optionString);
					},
					error:function(msg){
						$("#noDepartment").fadeIn();
						flag = false;
					}
					
		});
}


//-->
</script>


<div class="row-fluid">
		
		<div class="row-fluid line-margin">
			<span class="help-inline">职位名：</span>
			<input type="text" class=" span2" placeholder="请输入内容" id="positionName"name="position.positionName" value="${position.positionName}"/>
		</div>
		<div class="row-fluid line-margin">
			<span class="help-inline">公司名称：</span>
			<select class="input-small " id="companyName">
			</select>
			<font color="red" class="hide" id="noCompany">*暂无公司</font>
		</div>
		<div class="row-fluid line-margin">
			<span class="help-inline">部门名称：</span>
			<select class="input-small " id="departmentName" name="position.department.departmentId">
			</select>
			<font color="red" class="hide" id="noDepartment">*暂无部门</font>
		</div>
		<div class="row-fluid">
			<div class="span12">
				<table id="grid"></table>
				<div id="page" class="pull-right"></div>
			</div>
		</div>
		<div class="row-fluid line-margin">
			<button class="btn span1" type="submit" onclick="checkSubmit()">
				确定
			</button>
			<button class="btn span1" type="button" id="cancle">
				取消
			</button>
		</div>
</div>