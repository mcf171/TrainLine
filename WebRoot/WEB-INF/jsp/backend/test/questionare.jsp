<link rel="stylesheet" type="text/css" href="${basePath}styles/mmgrid.css" />
<link rel="stylesheet" type="text/css" href="${basePath}styles/mmpaginator.css" />
<link rel="stylesheet" type="text/css" href="${basePath}themes/mmgrid/mmgrid.css" />
<link rel="stylesheet" type="text/css" href="${basePath}themes/mmgrid/mmpaginator.css" />
<script type="text/javascript" src="${basePath}scripts/mmgrid.js"></script>
<script type="text/javascript" src="${basePath}scripts/mmpaginator.js"></script>
<script type="text/javascript">
//<![CDATA[
$(document).ready(function ()
{
	mmGridTable = $('#grid').mmGrid({
		url: '${basePath}getTestArrangementList.action',
		height: 280,
		nowrap:true,
		autoLoad: true,
		checkCol: true,
		multiSelect: true,
		root:'testArrangementList',
		fullWidthRows: true,
		cols: [
			{ title: '班级名称', sortable: true, 
				renderer: function (val, item, row)
				{
					return item.trainingclass.trainingClassName;
				}	
			},
			{ title: '考试地点', sortable: true, 
				renderer: function (val, item, row)
				{
					return item.testArrangementPlace;
				}		
			},
			{ title: '开始时间', sortable: true, 
				renderer: function (val, item, row)
				{
					str1 = item.testStartTime.substring(0,item.testStartTime.indexOf('T'));
					str2 = item.testStartTime.substring(item.testStartTime.indexOf('T')+1);;
					return str1+ " " + str2;
				}		
			},	
			{ title: '结束时间', sortable: true, 
				renderer: function (val, item, row)
				{
					str1 = item.attributestStartTimete51.substring(0,item.attributestStartTimete51.indexOf('T'));
					str2 = item.attributestStartTimete51.substring(item.attributestStartTimete51.indexOf('T')+1);;
					return str1+ " " + str2;
				}		
			},
			{ title: '通过分数', sortable: true, 
				renderer: function (val, item, row)
				{
					return item.passMark;
				}		
			},
			{ title: '考试状态', sortable: true, 
				renderer: function (val, item, row)
				{
					switch(item.testState){
					
					case 1: return "尚未开始";break;
					case 2: return "正在考试";break;
					case 3: return "考试结束";break;
					case 4: return "阅卷结束";break;
					}
				}		
			},
			{
				title: '操作',
				width: 280,
				renderer: function (val, item, row)
				{
					return '<input type="hidden" value="' + item.id + '" />' +
						'<a href="javascript:void(0)" onclick="showTestArrangementPage(' + item.testArrangementId + ')">查看</a>&nbsp;&nbsp;' +
						'<a href="javascript:void(0)" onclick="updateTestArrangement(' + item.testArrangementId + ')">修改</a>&nbsp;&nbsp;' +
						'<a href="javascript:void(0)" onclick="showConfirm(' + item.testArrangementId +')">删除</a>';
				}
			}
		],
		plugins: [
			$('#page').mmPaginator({})
		]
	});
});

function showTestArrangementPage(testArrangementId){
	console.log(1);
	loadHTML("${basePath}admin/showTestArrangementPage.action?testArrangement.testArrangementId="+ testArrangementId);
}

function updateTestArrangement(testArrangementId){
	
	loadHTML("${basePath}admin/getUpdateTestArrangementPage.action?testArrangement.testArrangementId="+testArrangementId);
		
}
var testArrangementId;
function showConfirm(id){
	
	testArrangementId = id;
	$("#myModal").modal();
}

function deleteTestArrangement(){
	
	$("#myModal").modal("hide");
	dataInfo = "testArrangement.testArrangementId=" + testArrangementId;
	$.ajax({
		
		type:"post",
		url:"${basePath}admin/deleteTestArrangement.action",
		data:dataInfo,
		success:function(msg){
			mmGridTable.removeRow(mmGridTable.selectedRowsIndex());	
		}
	});
}
//]]>
</script>
<div class="row-fluid line-margin">
	<div class="span12">
		<button class="btn"><i class="icon-share"></i>&nbsp;发布</button>
		<button class="btn" onclick="javascript:loadHTML('${basePath}admin/getAddTestArrangementPage.action')"><i class="icon-share"></i>&nbsp;添加</button>
	</div>
</div>
<div class="row-fluid line-margin">
	<form id="condition" class="span12 form-inline no-margin">
		<span class="help-inline"><b>查询过滤：</b>问卷状态</span>
		<select class="input-small">
			<option>所有</option>
			<option>未发布</option>
			<option>已发布</option>
			<option>已完成</option>
			<option>已撤销</option>
			<option>已过期</option>
		</select>
		<span class="help-inline">问卷编号</span>
		<input type="text" class="span2" placeholder="请输入问卷编号" />
		<span class="help-inline">问卷名称</span>
		<input type="text" class="span2" placeholder="请输入问卷名称" />
		<div class="pull-right">
			<button class="btn"><i class="icon-search"></i>&nbsp;查询</button>
			<button class="btn" onclick="$('#condition')[0].reset();return false;">
				<i class="icon-remove"></i>&nbsp;清除条件
			</button>
		</div>
	</form>
</div>
<div class="row-fluid">
	<div class="span12">
		<table id="grid"></table>
		<div id="page" class="pull-right"></div>
	</div>
</div>

<div id="myModal" class="modal hide fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
<div class="modal-header">
<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
<h3 id="myModalLabel">确认删除</h3>
</div>
<div class="modal-body">
<p>是否真的删除？</p>
</div>
<div class="modal-footer">
<button class="btn" data-dismiss="modal" aria-hidden="true">取消</button>
<button class="btn btn-primary" onclick="deleteTestArrangement()">确认</button>
</div>
</div>