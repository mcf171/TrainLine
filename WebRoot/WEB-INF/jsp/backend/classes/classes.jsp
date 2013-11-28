
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
var trainingClassID;
$(document).ready(function ()
		{
			$('#time-to').css('background', 'none').datepicker();
			$('#time-from').css('background', 'none').datepicker();

			mmg = $('#grid').mmGrid({
				url: '${basePath}trainingClass_findAllTrainingClass.action',
				height: 410,
				cache:true,
				autoLoad: true,
				checkCol: true,
				multiSelect: true,
				indexCol:true,
				root:'tcList',
				fullWithRows: false,
				cols: [
					{ title: '班级ID', sortable: true, width: 110, name: 'trainingClassId' },	
					{ title: '班级名称', sortable: true, width: 150, name: 'trainingClassName' },
					{ title: '状态 ', sortable: true, width: 130, name: 'trainingClassStatus' },
								{
						title: '操作',
						width: 210,
						renderer: function (val, item, row)
						{
						return '<input type="hidden" value="' + item.trainingClassId + '" />'+
						'<a href="#" role="button" class="btn">查看</a> '+
		        '<a href="#myModal0" onclick="updateClasss('+item.trainingClassId+')" role="button" class="btn" data-toggle="modal">修改</a>'+
		        '<a href="#myModal1" onclick="deleteClasss('+item.trainingClassId+')" role="button" class="btn" data-toggle="modal">删除</a>';
						}
					}
				],
				plugins: [
					$('#page').mmPaginator({})
				]
			});
			
			$("#searchBtn").click(function(){
				mmg.load({"trainingclass.trainingClassId":$("#trainingClassIdIID").val(),
					"trainingclass.trainingClassName":$("#trainingClassNameIID").val(),
					"trainingclass.trainingClassStatus":$("#trainingClassStatusIID").val()});
			});
			
			$("#sureDeleteBtn").click(function (){
				$("#myModal1").modal('hide');
				$.ajax({
					type : "POST",
					url : "${basePath}trainingClass_deleteClass.action?trainingclass.trainingClassId="+trainingClassID,
					dataType : "json",
					success : function(json) {
					mmg.load({page:1});
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
					mmg.load({page:1});
					},
					error : function() {
						alert("操作失败,请重试!");
						return false;
					}
				});
			});
		});
		function updateClasss(trainingClassId){
			trainingClassID =trainingClassId;
			$("#classIID").val(trainingClassId);
			$("#classNameIID").val();
		}
		
		function deleteClasss(trainingClassId)
		{
			trainingClassID =trainingClassId;
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
		<div class="row-fluid">
			<div id="content" class="span10">
				<div class="row-fluid " style="margin-left: -13px">
					<button class="btn" type="button"
						onclick="loadHTML('${basePath}trainingClass_intoAddClassPage.action')">
						<i class="icon-plus"></i>添加
					</button>
					<button class="btn" type="button">
						<i class="icon-arrow-up"></i>批量导入
					</button>
				</div>
				<div class="row word_style">
					<form id="condition" class="span12 form-inline no-margin"
						action="javascript:void(0)" method="post">
						<div class="row-fluid line-margin">
							<span class="help-inline"> <b>基本过滤：</b><br> <b>班级编号</b>
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
</body>
</html>