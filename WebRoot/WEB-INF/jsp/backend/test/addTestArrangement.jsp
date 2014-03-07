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
			url: '${basePath}admin/findOpenTestPaper.action',
			height: 410,
			autoLoad: true,
			checkCol: true,
			
			fullWidthRows: true,
			root:'list',
			cols: [
				{ title: '试卷编号', sortable: true, width: 150, name: 'testPaperId' },
				{ title: '试卷名称', sortable: true, width: 210, name: 'testPaperName' },
				{ title: '试卷状态', sortable: true, width: 120,
					
					renderer: function (val, item, row)
					{
						switch (item.testPaperState)
						{
							case 1: return '发布';
							case 2: return '保留';
							case 3: return '回收';
							
						}
					}
				}
				
			],
			plugins: [
				$('#page').mmPaginator({})
			]
		});
	//
		mmClass = $('#grid2').mmGrid({
			url: '${basePath}getNormalTrainClassList.action',
			height: 280,
			autoLoad: true,
			checkCol: true,
			fullWithRows: true,
			root:'trainList',
			cols: [
				{ title: '班级编号', sortable: true, width: 150, name: 'trainingClassId' },
				{ title: '班级名称', sortable: true, width: 150, name: 'trainingClassName' },
				{ title: '培训内容', sortable: true, width: 150, 
					renderer: function (val, item, row)
					{
						if(item.classCases[0]!=null){
						return item.classCases[0].classContent;
						}else{
							return "暂无培训内容";
						}
					}
				},
				{ title: '培训地点', sortable: true, width: 150, 
					renderer: function (val, item, row)
					{
						if(item.classCases[0]!=null){
						return item.classCases[0].trainAddress;
						}else{
							return "暂未培训地点";
						}
					}	
				},
				{ title: '学时', sortable: true, width: 100, 
					renderer: function (val, item, row)
					{
						if(item.classCases[0]!=null){
						return item.classCases[0].trainHour;
						}else{
							return "暂未学时";
						}
					}	
				},
				{ title: '培训机构', sortable: true, width: 150, 
					renderer: function (val, item, row)
					{
						if(item.classCases[0]!=null){
						return item.classCases[0].trainUnit;
						}else{
							return "暂未培训机构";
						}
					}	
				},
				{ title: '开始时间', sortable: true, width: 180,
					renderer: function (val, item, row)
					{
						if(item.classCases[0]!=null){
						return item.classCases[0].classStartTime;
						}else{
							return "暂未确定开始时间";
						}
					}
				},	
				{ title: '结束时间', sortable: true, width: 180, 
					renderer: function (val, item, row)
					{
						if(item.classCases[0]!=null){
						return item.classCases[0].classEndtTime;
						}else{
							return "暂未确定结束时间";
						}
					}	
				}
			],
			plugins: [
				$('#page').mmPaginator({})
			]
		});

	
	
	var array;
	$("#submit").click(
					function() {

						arrayPaper = mmGirdTable.selectedRowsIndex();
						arrayClass = mmClass.selectedRowsIndex();
						
				if(arrayPaper.length==0||arrayClass.length==0){
							
							alert("必须选择一个试卷和班级");
							return ;
						}
						
						testPlace ="testArrangement.testArrangementPlace="+ $("#testPlace").val();
						testShouldNumber = "&testArrangement.testSumPerson=" + $("#testShouldNumber").val();
						testPassScore ="&testArrangement.passMark=" +$("#testPassScore").val();
						testStartTime = "&testArrangement.testStartTime=" +$("#time-from").val()+ " "+$("#startTimeHour").val()+":"+$("#startTimeMinutes").val()+":"+"00";
						testEndTime = "&testArrangement.attributestStartTimete51=" +$("#time-to").val()+ " "+$("#endTimeHour").val()+":"+$("#endTimeMinutes").val()+":"+"00";
						//	alert(testPaperName)
			
						var reg = new RegExp("^[0-9]*$");
						if($("#testPlace").val() == ""){
							
							$("#place").fadeIn();
							$("#people").fadeOut();
							$("#score").fadeOut();
							$("#time1").fadeOut();
							$("#time2").fadeOut();
							return ;
						}
						if(!reg.test($("#testShouldNumber").val())){
							
							$("#people").fadeIn();
							$("#place").fadeOut();
							$("#score").fadeOut();
							$("#time1").fadeOut();
							$("#time2").fadeOut();
							return ;
						}
						if(!reg.test($("#testPassScore").val())){
							
							$("#score").fadeIn();
							$("#people").fadeOut();
							$("#place").fadeOut();
							$("#time1").fadeOut();
							$("#time2").fadeOut();
							return ;
							}
						if($("#time-from").val() == ""){
							
							$("#time1").fadeIn();
							$("#people").fadeOut();
							$("#score").fadeOut();
							$("#place").fadeOut();
							$("#time2").fadeOut();
							return;
						}
						if($("#time-to").val() == ""){
							
							$("#time2").fadeIn();
							$("#people").fadeOut();
							$("#score").fadeOut();
							$("#time1").fadeOut();
							$("#place").fadeOut();
							return ;
						}
							//alert(mmGirdTable.row(array[i]).testQuestionId);
						testPaperId = "&testPaperId="+ mmGirdTable.row(arrayPaper[0]).testPaperId;
						testClassId = "&trainClassId="+ mmClass.row(arrayClass[0]).trainingClassId;
						dataConfirm = testPlace + testShouldNumber + testPassScore + testStartTime + testEndTime + testPaperId + testClassId;
						console.log(dataConfirm);
						$.ajax({
									type : "post",
									url : "${basePath}admin/addTestArrangment.action",
									data : dataConfirm,
									success : function(msg) {
										/*
										 $('#myModal').modal('hide')
										 mmGirdTable.removeRow(mmGirdTable.selectedRowsIndex());
										 */
										alert("增加成功");
										loadHTML("${basePath}admin/getOpenTestPaperPage.action");
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
					<span class="help-inline">考试地点：</span> <input type="text"
						class=" span2" id="testPlace" placeholder="请输入试卷名称"
						name="testquestion.testQuestionName" />
						<font color="red" class="hide" id="place">*必须填写</font>
				</div>
				<div class="row-fluid">
					<span class="help-inline">应到人数：</span> <input type="text"
						class=" span2" id="testShouldNumber" placeholder="请输入数量"
						name="testquestion.testQuestionName" />
						<font color="red" class="hide" id="people">*必须填写数字</font>
				</div>
				<div class="row-fluid">
					<span class="help-inline">通过分数：</span> <input type="text"
						class=" span2" id="testPassScore" placeholder="请输入分数"
						name="testquestion.testQuestionName" />
						<font color="red" class="hide" id="score">*必须填写数字</font>
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
						<font color="red" class="hide" id="time1">*必须填写</font>
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
						<font color="red" class="hide" id="time2">*必须填写</font>
				</div>
				<hr class="seperator top-margin">
				<div class="row word_style">
				<div class="row-fluid line-margin">
					<span class="help-inline"> <b>选择试卷：</b> </span>
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
					<span class="help-inline"> <b>选择班级：</b> </span>
				</div>
				<div class="row word_style">
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
						<button type="submit" class="btn" id="submit">
							<i class="icon-ok"></i>确认
						</button>
						<div id="page" class="pull-right"></div>
					</div>
				</div>
				
			</div>
		</div>
	</div>


</body>
</html>
