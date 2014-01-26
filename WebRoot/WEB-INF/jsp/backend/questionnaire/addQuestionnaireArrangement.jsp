<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>

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

<script type="text/javascript" src="${basePath}scripts/examination.js"></script>
<script type="text/javascript" src="${basePath}scripts/datepicker.js"></script>
<script type="text/javascript" src="${basePath}scripts/addTestArrangement.js"></script>
<script type="text/javascript">
	//        
	
	var mmGirdTable;
	$(document).ready(function() {
		$("#userChoose").change(function(){
			var valueTest = parseInt($("#userChoose").val()); 
			switch(valueTest){
			case 2: $("#userList").fadeOut();break;
			case 1: $("#userList").fadeIn();break;
			}
		});
		/*
		$( "#hours" ).slider({
			range: "min",
			value: 37,
			min: 1,
			max: 700,
			slide: function( event, ui ) {
			$( "#amount" ).val( "$" + ui.value );
			}
			});
			$( "#amount" ).val( "$" + $( "#slider-range-min" ).slider( "value" ) ); 
		*/
		$('#time-to').css('background', 'none').datepicker();
		$('#time-from').css('background', 'none').datepicker();

		mmGirdTable = $('#grid').mmGrid({
			url:'${basePath}admin/findAllQuestionnare.action',
			height: 410,
			autoLoad: true,
			checkCol: true,
			root:'qList',
			fullWidthRows: true,
			cols: [
	     { title: 'ID', sortable: true, width: 40, name: 'questionnaireId' },  
	     { title: '问卷标题', sortable: true, width: 110, name:'questionnaireTitle' },
	     { title: '发起人', sortable: true, width: 100, name:'questionnaireAuthor' },
	     { title: '问卷编号', sortable: true, width: 110, name:'questionnaireNumber' },
	     { title: '是否公开', sortable: true, width: 110, 
	       renderer: function (val, item, row) {
	       return item.open==1? '开卷':'闭卷';
	       }
	     }
	       ],
			plugins: [
				$('#page').mmPaginator({})
			]
		});
		
	//
		mmClass = $('#grid2').mmGrid({
			url: '${basePath}admin/getAllUser.action',
			height: 280,
			autoLoad: true,
			checkCol: true,
			fullWidthRows: true,
			root:'list',
			multiSelect: true,
			cols: [
				{ title: '用户名', sortable: true, width: 150, name: 'userName' }
				
			],
			plugins: [
				$('#pageUser').mmPaginator({})
			]
		});

	
	
	$("#submit").click(
					function() {

						arrayPaper = mmGirdTable.selectedRowsIndex();
						arrayClass = mmClass.selectedRowsIndex();
						questionArrangementIntro = "&questionnaireArrangement.questionArrangementIntro="+$("#questionArrangementIntro").val();
						
						questionArrangementName ="questionnaireArrangement.questionArrangementName="+ $("#questionArrangementName").val();
						
						testStartTime = "&questionnaireArrangement.questionArrangementBeginTime=" +$("#time-from").val()+ " "+$("#startTimeHour").val()+":"+$("#startTimeMinutes").val()+":"+"00";
						testEndTime = "&questionnaireArrangement.questionArrangementOverTime=" +$("#time-to").val()+ " "+$("#endTimeHour").val()+":"+$("#endTimeMinutes").val()+":"+"00";
						//	alert(testPaperName)

							//alert(mmGirdTable.row(array[i]).testQuestionId);
						questionnaireId = "&questionnaireArrangement.questionnaire.questionnaireId="+ mmGirdTable.row(arrayPaper[0]).questionnaireId;
						
						var valueTest = parseInt($("#userChoose").val()); 
						userId="";
						if(valueTest == 1){
							for(i = 0; i < arrayClass.length; i++){
							
								userId = "&userId=" + mmClass.row(arrayClass[i]).userId; 
							}
						}
						dataConfirm = questionArrangementName + testStartTime + testEndTime + questionnaireId + userId + questionArrangementIntro;
						$.ajax({
									type : "post",
									url : "${basePath}admin/addQuestionnaireArrangement.action",
									data : dataConfirm,
									success : function(msg) {
										/*
										 $('#myModal').modal('hide')
										 mmGirdTable.removeRow(mmGirdTable.selectedRowsIndex());
										 */
										alert("增加成功");
										loadHTML("${basePath}admin/getQuestionnaireArrangementListPage.action");
									}
								});
					});
	});
</script>
</head>

<body>
	<div class="container-fluid">
		<div class="row-fluid">
			<div id="content" class="span12">
				<div class="row-fluid line-margin">
					<span class="help-inline"><b>基本信息：</b> </span>
				</div>
				<div class="row-fluid">
					<span class="help-inline">问卷安排名：</span> <input type="text"
						class=" span2" id="questionArrangementName" placeholder="请输入问卷安排名"
						name="testquestion.testQuestionName" />
				</div>
				<div class="row-fluid">
					<span class="help-inline">问卷目的：</span> <input type="text"
						class=" span2" id="questionArrangementIntro" placeholder="请输入问卷目的"
						name="testquestion.testQuestionName" />
				</div>
				
				<div class="row-fluid">
					<span class="help-inline">开始时间：</span> <input id="time-from"
						class="span2" type="text" data-date-format="yyyy-mm-dd"
						placeholder="单击选择开始时间" readonly="readonly"> 
						小时：<input type="text" readonly="readonly" id="startTimeHour" style="width:50px" value="0"/>
						<button type="submit" class="btn" id="addStartTimeHour">
							 +
						</button>
						<button type="submit" class="btn" id="reduceStartTimeHour">
							 -
						</button>
						分钟：<input type="text" readonly="readonly" id="startTimeMinutes" style="width:50px" value="0"/>
						<button type="submit" class="btn" id="addStartTimeMinutes">
							 +
						</button>
						<button type="submit" class="btn" id="reduceStartTimeMinutes">
							 -
						</button>
				</div>
				<div class="row-fluid">
					<span class="help-inline">结束时间：</span> </span> <input id="time-to" class="span2"
						type="text" data-date-format="yyyy-mm-dd" placeholder="单击选择结束时间" readonly="readonly">
						小时：<input type="text" readonly="readonly" id="endTimeHour" style="width:50px" value="0"/>
						<button type="submit" class="btn" id="addEndTimeHour">
							 +
						</button>
						<button type="submit" class="btn" id="reduceEndTimeHour">
							 -
						</button>
						分钟：<input type="text" readonly="readonly" id="endTimeMinutes" style="width:50px" value="0"/>
						<button type="submit" class="btn" id="addEndTimeMinutes">
							 +
						</button>
						<button type="submit" class="btn" id="reduceEndTimeMinutes">
							 -
						</button>
				</div>
				<hr class="seperator top-margin">
				<div class="row word_style">
				<div class="row-fluid line-margin">
					<span class="help-inline"> <b>选择问卷：</b> </span>
				</div>
					<div class="row-fluid line-margin">
						<span class="help-inline"> <b>过滤：</b> <b>类型</b> </span> <select
							class="input-medium">
							<option>类型1</option>
							<option>类型2</option>
							<option>类型3</option>
							<option>类型4</option>
						</select> <b>编号</b> <select class="input-medium">
							<option>编号1</option>
							<option>编号 2</option>
							<option>编号3</option>
							<option>编号4</option>
						</select> <input type="text" class="span3 input-medium"
							placeholder="请输入关键字">
					</div>
				</div>
				<div class="row word_style">
					<div class="row-fluid " style="margin-top:5px">
						<table id="grid"></table>
						
						<div id="page" class="pull-right"></div>
					</div>
				</div>
				<hr class="seperator top-margin">
				<div class="row-fluid line-margin">
					<span class="help-inline"> <b>选择用户：</b> </span>
					<select id="userChoose">
						<option value="1">发送部分人</option>
						<option value="2">发送所有人</option>
					</select>
				</div>
				<div id="userList">
				<div class="row word_style" >
					<div class="row-fluid line-margin">
						<span class="help-inline"> <b>过滤：</b> <b>类型</b> </span> <select
							class="input-medium">
							<option>类型1</option>
							<option>类型2</option>
							<option>类型3</option>
							<option>类型4</option>
						</select> <b>编号</b> <select class="input-medium">
							<option>编号1</option>
							<option>编号 2</option>
							<option>编号3</option>
							<option>编号4</option>
						</select> <input type="text" class="span3 input-medium"
							placeholder="请输入关键字">
					</div>
				</div>
				<div class="row word_style">
					<div class="row-fluid " style="margin-top:5px">
						<table id="grid2"></table>
						
						<div id="pageUser" class="pull-right"></div>
					</div>
				</div>
				</div>
				<button type="submit" class="btn" id="submit">
							<i class="icon-ok"></i>确认
						</button>
			</div>
		</div>
	</div>



