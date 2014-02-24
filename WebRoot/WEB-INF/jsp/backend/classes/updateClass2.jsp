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
	
	$.ajax({
		type : "POST",
		url : "${basePath}admin/findAllCredential.action",
		dataType : "json",
		success : function(json) {
		if(json.cList!=null)
		{
		addTypeName(json.cList)
		}
		},
		error : function() {
			return false;
		}
	});
	
function addTypeName(list)
{
$("#credentialIID > option").remove();
var option ="<option>请选择</option>";
for(var i=0;i<list.length;i++)
{
var credential  =list[i];
option+="<option value="+credential.credentialId+">"+credential.credentialName+"</option>";
}

$("#credentialIID").append(option);
}
	
	$('#time-to').css('background', 'none').datepicker();
	$('#time-from').css('background', 'none').datepicker();

	$("#finish").click(function(){
		$.ajax({
			
			type:"post",
			url:"${basePath}admin/updateClass.action",
			data:"trainingClass.trainingClassId=${trainingClass.trainingClassId}&trainingClass.trainingClassName="+$("#classNmaeIID").val()+"&trainingClass.credential.credentialId="+$("#credentialIID").val(),
			success : function(json) {
				loadHTML("${basePath}admin/getClassListPage.action");
			}
		});
		
	});
	
//按条件查询
	$("#searchBtn").click(function(){
	mmg.load({page:1,"course.courseName":$("#courseName_input").val(),
	"course.courseSpeaker":$("#courseSpeaker_input").val(),"course.courseIntro":$("#courseKey_input").val()});
	});
	
	mmg = $('#grid').mmGrid({
		url: '${basePath}admin/findAllCourse.action',
		height: 410,
		autoLoad: true,
		checkCol: true,
		//indexCol:true,
		root:'cList',
		fullWidthRows: true,
		cols: [
     { title: '课程名', sortable: true, width:100, name:'courseName' },
     { title: '讲师', sortable: true, width: 100, name: 'courseSpeaker' },
      { title: '课程内容', sortable: true, width: 200, name: 'courseIntro' },
       {
         title: '操作',
         width: 100,
         renderer: function (val, item, row)
         {
         return '<input type="hidden" id="'+item.courseId+'" value="' + item.courseId + '" />' +
             '<a href="#" onclick="addToClass('+item.courseId+')" role="button" class="btn">添加</a>';
         }

       }
		],
		plugins: [
			$('#page').mmPaginator({})
		]
	});
	
	var dataArray = new Array();
	<c:forEach items="${trainingClass.courses}" var="item">
	temp={"courseName":"${item.courseName}","courseSpeaker":"${item.courseSpeaker}","courseIntro":"${item.courseIntro}"};
	dataArray.push(temp);
	</c:forEach>

	console.log(dataArray);
	mmg1 = $('#grid1').mmGrid({
		//url: '${basePath}admin/getCourseByExample.action',
		height: 410,
		autoLoad: true,
		checkCol: true,
		//indexCol:true,
		//root:'courseList',
		items:dataArray,
		fullWidthRows: true,
		cols: [
     { title: '课程名', sortable: true, width: 100, name:'courseName' },
     { title: '讲师', sortable: true, width: 100, name: 'courseSpeaker' },
      { title: '课程内容', sortable: true, width: 200, name: 'courseIntro' },
       {
         title: '操作',
         width: 100,
         renderer: function (val, item, row)
         {
         return '<input type="hidden" id="'+item.courseId+'" value="' + item.courseId + '" />' +
             '<a href="#" onclick="deleteFromClass('+item.courseId+')" role="button" class="btn" data-toggle="modal">删除</a>';
         }

       }
		],
		plugins: [
			$('#page1').mmPaginator({})
		]
	});
});

function addToClass(courseId)
	{
		
		
	 	$.ajax({
					type : "POST",
					url : "${basePath}admin/trainingClassAddCourse.action",
					data:"course.courseId="+courseId+"&trainingClass.trainingClassId="+trainingClassId,
					dataType : "json",
					success : function(json) {
						var dataArray = mmg.selectedRows();
						var selectRow = mmg.selectedRowsIndex();
						
						for(i=0;i<selectRow.length;i++){
							
							mmg.removeRow(selectRow[i]);
						}
						mmg1.addRow(dataArray);
						
					},
					error : function() {
						return false;
					}
				});
	}
	
	//删除已选课程
	function deleteFromClass(courseId)
	{
	$.ajax({
				type : "POST",
				url : "${basePath}admin/deleteCourseFromTrainingClass.action",
				data:"course.courseId="+courseId+"&trainingClass.trainingClassId="+trainingClassId,
				dataType : "json",
				success : function(json) {
					var dataArray = mmg1.selectedRows();
					var selectRow = mmg1.selectedRowsIndex();
					
					for(i=0;i<selectRow.length;i++){
						
						mmg1.removeRow(selectRow[i]);
					}
					mmg.addRow(dataArray);
				},
				error : function() {
					return false;
				}
				});
	}
</script>
</head>
<style>
.edit {
	width: 700px;
	margin-top: 10px;
	margin-left: 60px;
}

#editor {
	max-height: 150px;
	height: 180px;
	background-color: white;
	border-collapse: separate;
	border: 1px solid rgb(204, 204, 204);
	padding: 4px;
	box-sizing: content-box;
	-webkit-box-shadow: rgba(0, 0, 0, 0.0745098) 0px 1px 1px 0px inset;
	box-shadow: rgba(0, 0, 0, 0.0745098) 0px 1px 1px 0px inset;
	border-top-right-radius: 3px;
	border-bottom-right-radius: 3px;
	border-bottom-left-radius: 3px;
	border-top-left-radius: 3px;
	overflow: scroll;
	outline: none;
}
</style>
<body>
	<div class="container-fluid">
		<div class="row-fluid" style="margin-left: -18px">
		班级名称 <input type="text" id="classNmaeIID" class="span4  input-medium box" value="${trainingClass.trainingClassName}">
	</div>
	<div class="row">
	      班级证书: <select class="input-medium box" id="credentialIID">
		</select>
	</div>
	<hr class="seperator">
		<div class="row-fluid">
			<div id="content" class="span10">
				<div class="row word_style">可增加课程</div>
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
						</div>
						<div class="row-fluid line-margin">

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
				<div class="row word_style">
					<div class="row-fluid">
						<table id="grid"></table>
						<button type="submit" class="btn">
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
				<div class="row word_style">已增加课程</div>
			
				<div class="row word_style">
					<div class="row-fluid ">
						<table id="grid1"></table>
						<button type="submit" class="btn">
							<i class="icon-ok"></i>批量删除
						</button>
						<div id="page1" class="pull-right"></div>
					</div>
				</div>
			</div>
		</div>
		
		<div class="row-fluid" style="margin-top: 40px">
						<button type="button" class="btn" id="finish">
							<i class="icon-ok"></i>确认
						</button>
		</div>
	</div>

</body>
</html>