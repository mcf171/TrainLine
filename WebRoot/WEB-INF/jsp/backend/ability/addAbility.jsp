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
		
		$("#addAbility").click(function(){
			
			
			var abilityName = $("#abilityName").val();
			var abilityURL = $("#abilityURL").val();
			var abilityLevel = $("#abilityLevel").val();
			
			var firstLevel, secondLevel;
			 
			var dataInfo = "ability.abilityName=" + abilityName + "&ability.abilityURL=" + abilityURL + "&ability.abilityLevel=" + abilityLevel;
			
			switch(abilityLevel){
			
			case "3" : 
				secondLevel = $("#secondLevel").val();
				dataInfo +="&ability.parentAbility.abilityId=" + secondLevel;
				break;
			case "2" : 
				firstLevel = $("#firstLevel").val();
				dataInfo +="&ability.parentAbility.abilityId="  + firstLevel;
				break;
			}
			
			$.ajax({
				
				type:"post",
				data:dataInfo,
				url:"${basePath}admin/addAbility.action",
				success:function(){
					
					loadHTML('${basePath}admin/getAbilityManagerPage.action');
				}
		});

	
		});

		var optionString = "";
		<c:forEach items="${firstLevel}" var="item">			
			optionString += "<option name='companyName' value='" + ${item.abilityId} + "'>" + "${item.abilityName}" +"</option>";
			flag = true;
			
		</c:forEach>
	
		$("#firstLevel").append(optionString);
	});
	function getAbilityLevel(){
		
		var abilityLevel = $("#abilityLevel").val();
		
		switch(abilityLevel){
		case "1" : $("#first").fadeOut(); $("#second").fadeOut();$("#third").fadeOut();break;
		case "2" : $("#first").fadeIn(); $("#second").fadeOut();$("#third").fadeOut();break;
		case "3" : 
			
			$("#first").fadeIn(); $("#second").fadeIn();$("#third").fadeOut();break;
		}
	}

	
	function getAbilityList(abilityLevel){
		
		var postInfo = "ability.abilityLevel" + abilityLevel;
		
		$.ajax({
			data:postInfo,
			type:"post",
			url:"${basePath}admin/getAbilityLevel.action",
			success: function(msg){
				
				
			}
		});
	}
</script>

<div class="row-fluid">
		<div class="row-fluid line-margin">
			<span class="help-inline"><b>基本信息：</b></span>
		</div>
		<div class="row-fluid line-margin">
			<span class="help-inline">权限名称：</span>
			<input type="text" class=" span2" placeholder="请输入内容" name="ability.abilityName"  id="abilityName"/>
		</div>
		<div class="row-fluid line-margin">
			<span class="help-inline">权限URL：</span>
			<input type="text" class=" span2" placeholder="请输入内容" name="ability.abilityName"   id = "abilityURL"/>
		</div>
		<div class="row-fluid line-margin">
			<span class="help-inline">权限深度：</span>
			<select  class="input-small " id="abilityLevel" onchange="getAbilityLevel()" id="abilityLevel">
				<option>1</option>
				<option>2</option>
				<option>3</option>
			</select>
		</div>
	
		
		<div class="row-fluid line-margin">
			<span class="help-inline"><b>父权限选择：</b></span>
		</div>
		<div class="row-fluid line-margin hide" id="first">
			<span class="help-inline">一级权限：</span>
			<select class="input-small " id="firstLevel" onchange="getAbilityList(1)">
			</select>
		
		</div>
		<div class="row-fluid line-margin hide"  id = 'second'>
			<span class="help-inline">二级权限：</span>
			<select class="input-small " id="secondLevel" >
			</select>
			
		</div>
		<div class="row-fluid line-margin hide" id="third">
			<span class="help-inline">三级权限：</span>
			<select class="input-small " id="positionName" >
			</select>
			<font color="red" class="hide" id="noPosition">*暂无职位</font>
		</div>
	
		
		<div class="row-fluid line-margin">
			<button class="btn span1 offset1 " type="submit" id="addAbility">
				确定
			</button>
			<button class="btn span1 offset1" type="button" id="cancle">
				取消
			</button>
		</div>

</div>