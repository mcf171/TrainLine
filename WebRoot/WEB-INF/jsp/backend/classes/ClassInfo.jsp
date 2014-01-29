<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<link rel="stylesheet" type="text/css"
	href="${basePath}styles/mmgrid.css" />
<link rel="stylesheet" type="text/css"
	href="${basePath}styles/mmpaginator.css" />
<link rel="stylesheet" type="text/css"
	href="${basePath}themes/mmgrid/mmgrid.css" />
<link rel="stylesheet" type="text/css"
	href="${basePath}themes/mmgrid/mmpaginator.css" />

<script type="text/javascript" src="${basePath}scripts/mmgrid.js"></script>
<script type="text/javascript" src="${basePath}scripts/mmpaginator.js"></script>
<script type="text/javascript" src="${basePath}scripts/datepicker.js"></script>

<script type="text/javascript">
	var mmg;
	var mmg1;
$(document).ready(function ()
{
	$("#goback").click(function(){
		
		loadHTML("${basePath}admin/getClassListPage.action");
	});
	$('#time-to').css('background', 'none').datepicker();
	$('#time-from').css('background', 'none').datepicker();
	
	var localData = new Array();
	
	<c:forEach items="${trainingClass.courses}" var="item">
		temp = {"courseName":"${item.courseName}","courseSpeaker":"${item.courseSpeaker}","courseIntro":"${item.courseIntro}"};
		localData.push(temp);
	</c:forEach>
	mmg = $('#grid').mmGrid({
		//url: '${basePath}admin/findAllCourse.action',
		height: 410,
		autoLoad: true,
		checkCol: true,
		items:localData,
		//indexCol:true,
		//root:'cList',
		fullWidthRows: true,
		cols: [
     { title: '课程名', sortable: true,  name:'courseName' },
     { title: '讲师', sortable: true, name: 'courseSpeaker' },
      { title: '课程内容', sortable: true, name: 'courseIntro' },
       
		],
		plugins: [
			$('#page').mmPaginator({})
		]
	});
	
	mmg1 = $('#grid1').mmGrid({
		url: '${basePath}admin/getTrainingClassClassCase.action?trainingClass.trainingClassId=${trainingClass.trainingClassId}',
		height: 410,
		autoLoad: true,
		checkCol: true,
		//indexCol:true,
		root:'list',
		fullWidthRows: true,
		cols: [
     { title: '实到人数', sortable: true, name:'personOfHierarchy' },
     { title: '总人数', sortable: true,  name: 'personOfSum' },
     { title: '班级介绍', sortable: true,  name: 'classContent' },
     { title: '培训学时', sortable: true,  name: 'trainHour' },
      { title: '开班时间', sortable: true, 
	
    	 renderer: function (val, item, row)
         {
    			str1 = item.classStartTime.substring(0,item.classStartTime.indexOf('T'));
				str2 = item.classStartTime.substring(item.classStartTime.indexOf('T')+1);;
				return str1+ " " + str2;
         }
      }, { title: '闭班时间', sortable: true, 
    		
     	 renderer: function (val, item, row)
          {
     			str1 = item.classEndtTime.substring(0,item.classEndtTime.indexOf('T'));
 				str2 = item.classEndtTime.substring(item.classEndtTime.indexOf('T')+1);;
 				return str1+ " " + str2;
          }
       },
       {
         title: '操作',
         width: 100,
         renderer: function (val, item, row)
         {
         return '<input type="hidden" id="'+item.courseId+'" value="' + item.courseId + '" />' +
             '<a href="#" onclick="deleteClassCase('+item.classCaseId+')" role="button" class="btn">删除</a>';
         }

       }
		],
		plugins: [
			$('#page1').mmPaginator({})
		]
	});

});

function deleteClassCase(classCaseId){
	
	$.ajax({
		type:"post",
		url:"${basePath}admin/deleteClassCase.action",
		data:"trainingClass.trainingClassId=${trainingClass.trainingClassId}&classCase.classCaseId="+classCaseId,
		success:function(msg){
			
			var selectRow = mmg1.selectedRowsIndex();
			
			for(i=0;i<selectRow.length;i++){
				
				mmg1.removeRow(selectRow[i]);
			}
		}
	});
}

</script>

	<div class="container-fluid">
		<div class="row word_style" id="trainClassname">
		</div>
		<div class="row-fluid">
			<table class="table table-striped">
	  			<tr><td>班级名称：</td><td><span class="input-xlarge uneditable-input">${trainingClass.trainingClassName}</span></td></tr>
				<tr><td>班级状态：</td><td><span class="input-xlarge uneditable-input">
			<c:choose>
				<c:when test="${trainingClass.trainingClassStatus == 1}">还未开班</c:when>
				<c:when test="${trainingClass.trainingClassStatus == 2}">正在开班</c:when>
				<c:when test="${trainingClass.trainingClassStatus == 3}">结束教学</c:when>
			</c:choose>
			</span></td></tr>			
			</table>
		</div>
		
		<hr>
		<div class="row-fluid" style="margin-top: 40px">
			<div id="content" class="span10">
				<div class="row word_style">已增加课程</div>
			
				<div class="row word_style">
					<div class="row-fluid ">
						<table id="grid"></table>
						
						<div id="page" class="pull-right"></div>
					</div>
				</div>
			</div>
		</div>
		
		<div class="row-fluid" style="margin-top: 40px">
			<div id="content" class="span10">
				<div class="row word_style">班级情况</div>
			
				<div class="row word_style">
					<div class="row-fluid ">
						<table id="grid1"></table>
						<button type="submit" class="btn" id="goback">
							<i class="icon-ok"></i>确定
						</button>
						<div id="page1" class="pull-right"></div>
					</div>
				</div>
			</div>
		</div>
		
		
	</div>

