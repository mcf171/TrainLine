
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
var mmGridTable;
var trainingClassID;
$(document).ready(function ()
		{
			$('#time-to').css('background', 'none').datepicker();
			$('#time-from').css('background', 'none').datepicker();

			mmGridTable = $('#grid').mmGrid({
				url: '${basePath}admin/findAllTrainingClass.action',
				cache:true,
				autoLoad: true,
				checkCol: true,
				multiSelect: true,
				//indexCol:true,
				root:'tcList',
				fullWidthRows: true,
				cols: [
					{ title: '班级ID', sortable: true,  name: 'trainingClassId' },	
					{ title: '班级名称', sortable: true, name: 'trainingClassName' },
					{ title: '状态 ', sortable: true,  name: 'trainingClassStatus' },
								{
						title: '操作',
						width: 250,
						renderer: function (val, item, row)
						{
						return '<input type="hidden" value="' + item.trainingClassId + '" />'+
		        '<a href="javascript:void(0)" onclick="updateClasss('+item.trainingClassId+')" role="button" class="btn" data-toggle="modal">修改</a>'+
		        '<a href="javascript:void(0)" onclick="deleteClasss('+item.trainingClassId+')" role="button" class="btn" data-toggle="modal">删除</a>'+
		        '<a href="#" onclick="browseClassCase('+item.trainingClassId+')" role="button" class="btn">详细信息</a>';
						}
					}
				],
				plugins: [
					$('#page').mmPaginator({})
				]
			});
			
			$("#searchBtn").click(function(){
				mmGridTable.load({"trainingclass.trainingClassId":$("#trainingClassIdIID").val(),
					"trainingclass.trainingClassName":$("#trainingClassNameIID").val(),
					"trainingclass.trainingClassStatus":$("#trainingClassStatusIID").val()});
			});
			

			$("#fileURLChoose").change(function(){
				var boj = $("#fileURL");
				boj.text($("#fileURLChoose").val());

			});
			
			$("#batchButton").click(function(){
				$("#modal3").modal();
			});
			
			$("#sureDeleteBtn").click(function (){
				$("#myModal1").modal('hide');
				$.ajax({
					type : "POST",
					url : "${basePath}admin/deleteClass.action?",
					data:"trainingClass.trainingClassId="+trainingClassID,
					dataType : "json",
					success : function(json) {
					mmGridTable.load({page:1});
					},
					error : function() {
						alert("操作失败,请重试!");
						return false;
					}
				});
			});
			
			$("#updateBtn").click(function(){
				$("#myModal0").modal('hide');
				$.ajax({
					type : "POST",
					url : "${basePath}trainingClass_updateClass.action",
					data:"trainingclass.trainingClassId="+$("#classIID").val()+
					"&trainingclass.trainingClassName="+$("#classNameIID").val()+
					"&trainingclass.trainingClassStatus="+$("#classStatusIID").val(),
					dataType : "json",
					success : function(json) {
					mmGridTable.load({page:1});
					},
					error : function() {
						alert("操作失败,请重试!");
						return false;
					}
				});
			});
		});
		function updateClasss(trainingClassId){
			loadHTML('${basePath}admin/getUpdateClassPage2.action?trainingClass.trainingClassId='+trainingClassId);
		}
		
		function deleteClasss(trainingClassId)
		{
			$("#myModal1").modal();
			trainingClassID =trainingClassId;
		}

		
		function browseClassCase(trainingClassId)
		{
		 loadHTML('${basepath}admin/showTrainingClassInfoPage.action?trainingClass.trainingClassId='+trainingClassId);
		}
</script>
</head>

<body>
	<div class="container-fluid">
		<div class="row-fluid">
			<div id="content" class="span12">
				<div class="row-fluid  line-margin" style="margin-left: -13px">
					<button class="btn" type="button"
						onclick="loadHTML('${basePath}admin/getAddClassPage1.action')">
						<i class="icon-plus"></i>添加
					</button>
					<button class="btn" type="button" id="batchButton">
						<i class="icon-arrow-up"></i>批量导入
					</button>
				</div>
				<div class="row word_style">
					<form id="condition" class="span12 form-inline no-margin"
						action="javascript:void(0)" method="post">
						<div class="row-fluid line-margin">
							<span class="help-inline"> <b>基本过滤：</b><b>班级编号</b>
								<input type="text" id="trainingClassIdIID" class="span3 input-medium"
								style="width:100px;" placeholder="请输入班级编号"> <b>班级名称</b>
								<input type="text" id="trainingClassNameIID" class="span3 input-medium"
								style="width:170px;" placeholder="请输入班级名称">  <b>状态</b> <select
								class="input-medium" style="width:70px;" id="trainingClassStatusIID">
								<option value="1">1</option>
								<option value="0">0</option>
							</select>&nbsp;&nbsp;&nbsp;&nbsp;
							<button class="btn " id="searchBtn">
								<i class="icon-search"></i>查询
							</button>
							&nbsp;&nbsp;
							<button class="btn" type="reset"
								onclick="$('#condition')[0].reset();return false;">
								<i class="icon-remove"></i>清除
							</button></span>
						</div>
					</form>
				</div>

<div class="row word_style">
					<div class="row-fluid " style="margin-top:5px">
						<table id="grid"></table>
						<button type="submit" class="btn">
							<i class="icon-ok"></i>批量删除
						</button>
						<div id="page" class="pull-right"></div>
					</div>
				</div>
				
			</div>
		</div>
	</div>

<div id="myModal0" class="modal hide fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
<div class="modal-header">
<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
<h3 id="myModalLabel">修改</h3>
</div>
	<div class="modal-body">
		<label>班级ID</label>
		 <input type="text" id="classIID" disabled="true">
		 <label>班级名称</label>
		 <input type="text" id="classNameIID">
		 <label>状态</label>
		 <select class="input-medium" style="width:70px;" id="classStatusIID">
				<option value="1">1</option>
				<option value="0">0</option>
		</select>
	</div>
	<div class="modal-footer">
		<button class="btn" data-dismiss="modal" aria-hidden="true">关闭</button>
		<button class="btn btn-primary" id="updateBtn">修改</button>
	</div>
</div>

<div id="myModal1" class="modal hide fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
<div class="modal-header">
<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
<h3 id="myModalLabel">温馨提示</h3>
</div>
	<div class="modal-body">
		<p>确定删除吗？</p>
	</div>
	<div class="modal-footer">
		<button class="btn" data-dismiss="modal" aria-hidden="true">关闭</button>
		<button class="btn btn-primary" id="sureDeleteBtn">确定</button>
	</div>
</div>


<div id="modal3" class="modal hide fade" tabindex="-1" role="dialog"
	aria-labelledby="myModalLabel" aria-hidden="true">
	<form action="${basePath}admin/trainingClass/batchUpload.action"  enctype="multipart/form-data"  onsubmit="checkForm2()" target="hidden_frame" method="post">
	<div class="modal-header">
		<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
		<h3 id="myModalLabel">批量上传</h3>
	</div>
	<div class="modal-body">
	<div class="row-fluid line-margin">
			<span class="help-inline">文件选择：<a href="${basePath}getFile/upload/template/batchAddTrainingClass.xls" >模板下载</a></span>
			</div>
		<div class="row-fluid line-margin">
           	<span class=" span2 uneditable-input" id="fileURL" ></span>
           	<input type="file" id="fileURLChoose" style="width: 65px;" name="upload" class=" span2 " placeholder="请选择上传图书">

		</div>
		
		<div class="row-fluid">
						    <div class="progress progress-striped active">
							    <div class="bar" style="width:0;" id="porcess2"></div>
							    </div>
					</div>
	</div>
	<div class="modal-footer">
		
		<button class="btn" data-dismiss="modal" aria-hidden="true">取消</button>
		<button type="submit" class="btn btn-primary" >确认</button>
	</div>
	</form>
</div>

<iframe name='hidden_frame' id="hidden_frame" style='display:none'></iframe>
<script>

function callback(msg){
	if(msg=="true"){
		$("#porcess2").animate({width:'100%'});
		$("#modal3").modal("hide");
		mmGridTable.load();
	}else{
		alert("文件格式错误");
	}
	
}
						function checkForm2(){
							
							$("#porcess2").animate({width:'90%'});
						}
					</script>

</body>
</html>