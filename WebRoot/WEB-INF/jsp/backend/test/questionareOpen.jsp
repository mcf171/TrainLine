<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<link rel="stylesheet" type="text/css" href="${basePath}styles/mmgrid.css" />
<link rel="stylesheet" type="text/css" href="${basePath}styles/mmpaginator.css" />
<link rel="stylesheet" type="text/css" href="${basePath}themes/mmgrid/mmgrid.css" />
<link rel="stylesheet" type="text/css" href="${basePath}themes/mmgrid/mmpaginator.css" />
<script type="text/javascript" src="${basePath}scripts/mmgrid.js"></script>
<script type="text/javascript" src="${basePath}scripts/mmpaginator.js"></script>
<script type="text/javascript">
//<![CDATA[
           var mmGridTable;
function callback(msg){
	if(msg=="true"){
		$("#porcess").animate({width:'100%'});
		$("#porcess2").animate({width:'100%'});
		$("#modal2").modal("hide");
		$("#modal3").modal("hide");
		mmGridTable.load();
	}else{
		alert("文件格式错误");
	}
	
}
						function checkForm(){
							
							$("#porcess").animate({width:'90%'});
						}
						function checkForm2(){
							
							$("#porcess2").animate({width:'90%'});
						}
//]]>
$(document).ready(function ()
{
	

	$("#bookURLChoose").change(function(){
		var boj = $("#bookURL");
		boj.text($("#bookURLChoose").val());

	});
	
	
	$("#batchButton").click(function(){
		$("#modal2").modal();
	});
	
	
	mmGridTable = $('#grid').mmGrid({
		url: '${basePath}admin/findOpenTestPaper.action',
		height: 410,
		autoLoad: true,
		checkCol: true,
		multiSelect: true,
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
			},
			
			{
				title: '操作',
				width: 70,
				renderer: function (val, item, row)
				{
					switch (item.testPaperState)
					{
						case 1: return '<a href="javascript:loadHTML(\'${basePath}admin/modifyTestPaper.action?testPaper.testPaperId=' + item.testPaperId + '&testPaper.testPaperState=2\')">保留试卷</a>';
						case 2: return '<a href="javascript:loadHTML(\'${basePath}admin/modifyTestPaper.action?testPaper.testPaperId=' + item.testPaperId + '&testPaper.testPaperState=1\')">发布试卷</a> <a href="javascript:loadHTML(\'${basePath}admin/modifyTestPaper.action?testPaper.testPaperId=' + item.testPaperId + '&testPaper.testPaperState=3\')">回收试卷</a>';
						case 3: return '<a href="javascript:loadHTML(\'${basePath}admin/modifyTestPaper.action?testPaper.testPaperId=' + item.testPaperId + '&testPaper.testPaperState=2\')">保留试卷</a> <a href="javascript:loadHTML(\'${basePath}admin/deleteTestPaper.action?testPaper.testPaperId=' + item.testPaperId + '\')">删除试卷</a>';
						
					}
				}
			}
			
		],
		plugins: [
			$('#page').mmPaginator({})
		]
	});
});
//]]>
</script>
<div class="row-fluid line-margin">
	<div class="span12">
		<button class="btn" onclick="loadHTML('${basePath}admin/getAddTestPaperPage.action')"><i class="icon-share" ></i>&nbsp;添加</button>
		<button class="btn" type="button" id="batchButton">
			<i class="icon-arrow-up"></i>
				批量导入试卷
			</button>
			
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




<div id="modal2" class="modal hide fade" tabindex="-1" role="dialog"
	aria-labelledby="myModalLabel" aria-hidden="true">
	<form action="${basePath}admin/testPaper/batchUpload.action"  enctype="multipart/form-data"  onsubmit="checkForm()" target="hidden_frame" method="post">
	<div class="modal-header">
		<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
		<h3 id="myModalLabel">批量上传</h3>
	</div>
	<div class="modal-body">
	<div class="row-fluid line-margin">
			<span class="help-inline">文件选择：<a href="${basePath}getFile/upload/template/batchAddTestPaper.xls" >试卷基本信息模板下载</a></span>
			</div>
		<div class="row-fluid line-margin">
           	<span class=" span2 uneditable-input" id="bookURL" ></span>
           	<input type="file" id="bookURLChoose" style="width: 65px;" name="upload" class=" span2 " placeholder="请选择上传图书">

		</div>
		
		<div class="row-fluid">
						    <div class="progress progress-striped active">
							    <div class="bar" style="width:0;" id="porcess"></div>
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