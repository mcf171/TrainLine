
    <link rel="stylesheet" type="text/css" href="${basePath}styles/mmgrid.css" />
    <link rel="stylesheet" type="text/css" href="${basePath}styles/mmpaginator.css" />
    <link rel="stylesheet" type="text/css" href="${basePath}themes/mmgrid/mmgrid.css" />
    <link rel="stylesheet" type="text/css" href="${basePath}themes/mmgrid/mmpaginator.css" />
    <script type="text/javascript" src="${basePath}scripts/mmgrid.js"></script>
    <script type="text/javascript" src="${basePath}scripts/mmpaginator.js"></script>
    <script type="text/javascript" src="${basePath}scripts/datepicker.js"></script>

<script type="text/javascript">
var mmGridTable;
var questionnaireID;

$(document).ready(function ()
{
	$('#time-to').css('background', 'none').datepicker();
	$('#time-from').css('background', 'none').datepicker();

	mmGridTable = $('#grid').mmGrid({
		url:'${basePath}admin/findAllQuestionnare.action',
		height: 410,
		autoLoad: true,
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
     },
     {
     title: '操作',width: 150,renderer: function (val, item, row) 
       {        
        return '<input type="hidden" value="' + item.questionnaireId + '" /><a href="javascript:void(0)" onclick="readQ('+item.questionnaireId+')">阅读</a> '+
        '<a href="javascript:void(0)" onclick="updateQ('+item.questionnaireId+')" role="button" class="btn" data-toggle="modal">修改</a>'+
        '<a href="javascript:void(0)" onclick="deleteQ('+item.questionnaireId+')" role="button" class="btn" data-toggle="modal">删除</a>';
       }
       }
       ],
		plugins: [
			$('#page').mmPaginator({})
		]
	});
	
	$("#searchQuestionaireBtn").click(function(){
		mmGridTable.load({
			page:1,"questionnaire.questionnaireTitle":$("#questionnaireTitleID").val(),
		"questionnaire.questionnaireAuthor":$("#questionnaireAuthorID").val(),
		"questionnaire.questionnaireNumber":$("#questionnaireNumberID").val(),
		});
	});
	
	$("#showAll").click(function(){
		
		mmGridTable.load({
			page:1,
			limit:10
		});
	});
	

	$("#bookURLChoose").change(function(){
		var boj = $("#bookURL");
		boj.text($("#bookURLChoose").val());

	});
	
	$("#fileURLChoose").change(function(){
		var boj = $("#fileURL");
		boj.text($("#fileURLChoose").val());

	});
	
	$("#batchButton").click(function(){
		$("#modal2").modal();
	});
	
	$("#batchRubricButton").click(function(){
		$("#modal3").modal();
	});
	
	$("#sureDeleteBtn").click(function(){
	
	$.ajax({
		type : "POST",
		url : "${basePath}admin/deleteQuestionaire.action?questionnaire.questionnaireId="+questionnaireID,
		dataType : "json",
		success : function(json) {
			$("#myModal1").modal('hide');
			mmGridTable.load({page:1});
		},
		error : function() {
			alert("操作失败,请重试!");
			return false;
		}
	});
	});
	
	$("#updateqBtn").click(function(){
	$("#myModal0").modal('hide');
	var questionnaireId= $("#questionnaireIdIID").val();
	var questionnaireTitle =$("#questionnaireTitleIID").val();
	var questionnaireAuthor=$("#questionnaireAuthorIID").val();
	var questionnaireNumber=$("#questionnaireNumberIID").val();
	var open = $("#openIID").val();
	$.ajax({
			type : "POST",
			url : "${basePath}admin/updateQuestion.action",
			data:"questionnaire.questionnaireId="+questionnaireId+
			"&questionnaire.questionnaireTitle="+questionnaireTitle+
			"&questionnaire.questionnaireAuthor="+questionnaireAuthor+
			"&questionnaire.questionnaireNumber="+questionnaireNumber+
			"&questionnaire.open="+open,
			dataType : "json",
			success : function(json) {
				mmGridTable.load();
			},
			error : function() {
				alert("操作失败,请重试!");
				return false;
			}
			});
	});
	
});

function readQ(questionnaireId){
	$.ajax({
		type : "POST",
		url : "${basePath}admin/showQuestionnaire.action?questionnaire.questionnaireId="+questionnaireId,
		success : function(json) {
			
			$("#read").html(json);
		},
		error : function() {
			alert("操作失败,请重试!");
			return false;
		}
		});
	
}

function updateQ(questionnaireId){
	
	loadHTML("${basePath}admin/getUpdateQuestionnairePage.action?questionnaire.questionnaireId="+questionnaireId);
}

function setAttr(questionnaire)
{
	$("#questionnaireIdIID").val(questionnaire.questionnaireId);
	$("#questionnaireTitleIID").val(questionnaire.questionnaireTitle);
	$("#questionnaireAuthorIID").val(questionnaire.questionnaireAuthor);
	$("#questionnaireNumberIID").val(questionnaire.questionnaireNumber);
}

function deleteQ(questionnaireId){
//为全局变量赋值
$("#myModal1").modal();
questionnaireID = questionnaireId;
}


</script>
	
            <div class="row-fluid " id="read">
            <div class="row-fluid line-margin">
	            <div class="span12">
			<button class="btn"
				onclick="loadHTML('${basePath}admin/getAddQuestionnairePage.action')">
				<i class="icon-plus"></i>新增
			</button>
			<button class="btn" type="button" id="batchButton">
			<i class="icon-arrow-up"></i>
				批量导入问卷
			</button>
			<button class="btn" type="button" id="batchRubricButton">
			<i class="icon-arrow-up"></i>
				批量导入问卷题目
			</button>
		</div>
          </div>
            <div class="row-fluid">
            	<div class="span12">
            		<form id="condition" class="span12 form-inline no-margin" action="javascript:void(0)">
            			<div class="row-fluid line-margin">
			               <span class="help-inline"><b>基本过滤：</b>
			                <span class="help-inline">标题：</span>
			                <input type="text" style="width:150px;" class="span2" id="questionnaireTitleID" placeholder="请输入问卷标题" />
			                 <span class="help-inline">发起人：</span>
			                <input type="text" class="span2" style="width:150px;" id="questionnaireAuthorID" placeholder="请输入发起人名字" />
		              
		               	    <span class="help-inline">问卷编号：</span>
			                <input type="text" class="span2" id="questionnaireNumberID" placeholder="请输入问卷编号" />
			              </div>
			              <div class="row-fluid line-margin">
			                     <button class="btn " id="searchQuestionaireBtn"><i class="icon-search"></i>查询</button>&nbsp;&nbsp;
			                     <button class="btn" type="reset"><i class="icon-remove"></i>清除</button>
			                     <button class="btn " id="showAll" type="button">
					<i class="icon-align-justify"></i>显示所有
				</button>
		               		</div>
		               		<div class="row-fluid">
	                             <div class="span12">
								    <table id="grid"></table>
								 <div id="page" class="pull-right"></div>
						    	</div>
                            </div>
		               </ddiv>
		            </form>
            	</div>
            </div>
          
<div id="myModal0" style="width:350px;" class="modal hide fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
<div class="modal-header">
<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
<h3 id="myModalLabel">修改!</h3>
</div>
	<div class="modal-body">
		 <label>问卷ID</label>
		 <input type="text" id="questionnaireIdIID" disabled="true">
		  <label>问卷标题</label>
		 <input type="text"  id="questionnaireTitleIID" name="questionnaireTitle">
		  <label >问卷发起人</label>
		 <input type="text" id="questionnaireAuthorIID" name="questionnaireAuthor">
		  <label>问卷编号</label>
		 <input type="text" id="questionnaireNumberIID" name="questionnaireNumber"></input>
		  <label>是否开卷</label>
		  <select name="open" id="openIID">
		 <option value="1">开卷</option>
		  <option value="0">闭卷</option>
		 </select>
	</div>
	<div class="modal-footer">
		<button class="btn" data-dismiss="modal" aria-hidden="true">关闭</button>
		<button class="btn btn-primary" id="updateqBtn">修改</button>
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
  </div>
  
  
<div id="modal2" class="modal hide fade" tabindex="-1" role="dialog"
	aria-labelledby="myModalLabel" aria-hidden="true">
	<form action="${basePath}admin/questionnaire/batchUpload.action"  enctype="multipart/form-data"  onsubmit="checkForm()" target="hidden_frame" method="post">
	<div class="modal-header">
		<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
		<h3 id="myModalLabel">批量上传</h3>
	</div>
	<div class="modal-body">
	<div class="row-fluid line-margin">
			<span class="help-inline">文件选择：<a href="${basePath}getFile/upload/template/batchAddQuestionnaire.xls" >问卷基本信息模板下载</a></span>
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


<div id="modal3" class="modal hide fade" tabindex="-1" role="dialog"
	aria-labelledby="myModalLabel" aria-hidden="true">
	<form action="${basePath}admin/questionnaireRubric/batchUpload.action"  enctype="multipart/form-data"  onsubmit="checkForm2()" target="hidden_frame" method="post">
	<div class="modal-header">
		<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
		<h3 id="myModalLabel">批量上传</h3>
	</div>
	<div class="modal-body">
	<div class="row-fluid line-margin">
			<span class="help-inline">文件选择：<a href="${basePath}getFile/upload/template/batchAddQuestionnaireRubric.xls" >问卷题目基本信息模板下载</a></span>
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
					</script>