
    <link rel="stylesheet" type="text/css" href="${basePath}styles/mmgrid.css" />
    <link rel="stylesheet" type="text/css" href="${basePath}styles/mmpaginator.css" />
    <link rel="stylesheet" type="text/css" href="${basePath}themes/mmgrid/mmgrid.css" />
    <link rel="stylesheet" type="text/css" href="${basePath}themes/mmgrid/mmpaginator.css" />
    <script type="text/javascript" src="${basePath}scripts/mmgrid.js"></script>
    <script type="text/javascript" src="${basePath}scripts/mmpaginator.js"></script>
    <script type="text/javascript" src="${basePath}scripts/datepicker.js"></script>

<script type="text/javascript">
var mmg;
var questionnaireArrangementId;
$(document).ready(function ()
{
	
	$('#time-to').css('background', 'none').datepicker();
	$('#time-from').css('background', 'none').datepicker();

	mmg = $('#grid').mmGrid({
		url:'${basePath}admin/getQuestionnaireArrangementList.action',
		height: 410,
		autoLoad: true,
		root:'list',
		fullWidthRows: true,
		cols: [
     { title: 'ID', sortable: true, width: 40, name: 'questionArrangementId' },  
     { title: '问卷安排名称', sortable: true, width: 110, name:'questionArrangementName' },
     { title: '问卷简介', sortable: true, width: 100, name:'questionArrangementIntro' },
     { title: '开始时间', sortable: true, 
			renderer: function (val, item, row)
			{
				str1 = item.questionArrangementBeginTime.substring(0,item.questionArrangementBeginTime.indexOf('T'));
				str2 = item.questionArrangementBeginTime.substring(item.questionArrangementBeginTime.indexOf('T')+1);;
				return str1+ " " + str2;
			}		
		},	
		{ title: '结束时间', sortable: true, 
			renderer: function (val, item, row)
			{
				str1 = item.questionArrangementOverTime.substring(0,item.questionArrangementOverTime.indexOf('T'));
				str2 = item.questionArrangementOverTime.substring(item.questionArrangementOverTime.indexOf('T')+1);;
				return str1+ " " + str2;
			}		
		},
		{
		title:'问卷状态' ,sortable:true,
		renderer:function(val, item, row){
			
			switch(item.questionArrangementState){
				
			case 1: return "尚未开始";break;
			case 2: return "正在进行";break;
			case 3: return "已经结束";break;
			
			}
		}
		},
     {
     title: '操作',width: 150,renderer: function (val, item, row) 
       {        
        return '<input type="hidden" value="' + item.questionnaireArrangementId + '" /><a href="read.jsp" target="_blank">查看</a> '+
        '<a href="#myModal0" onclick="updateQ('+item.questionnaireArrangementId+')" role="button" class="btn" data-toggle="modal">修改</a>'+
        '<a href="javascript:void(0)" onclick="deleteQ('+item.questionnaireArrangementId+')" role="button" class="btn" data-toggle="modal">删除</a>';
       }
       }
       ],
		plugins: [
			$('#page').mmPaginator({})
		]
	});
	
	$("#searchQuestionaireBtn").click(function(){
		mmg.load({page:1,"questionnaireArrangement.questionnaireTitle":$("#questionnaireTitleID").val(),
		"questionnaireArrangement.questionnaireAuthor":$("#questionnaireAuthorID").val(),
		"questionnaireArrangement.questionnaireNumber":$("#questionnaireNumberID").val(),
		"questionnaireArrangement.open":$("#openID").val()});
	});
	
	$("#sureDeleteBtn").click(function(){
	$("#myModal1").modal('hide');
	$.ajax({
		type : "POST",
		url : "${basePath}admin/deleteQuestionnaireArrangement.action",
		data:"questionnaireArrangement.questionnaireArrangementId="+questionnaireArrangementId,
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
	
	$("#updateqBtn").click(function(){
	$("#myModal0").modal('hide');
	var questionnaireArrangementId= $("#questionnaireArrangementIdIID").val();
	var questionnaireTitle =$("#questionnaireTitleIID").val();
	var questionnaireAuthor=$("#questionnaireAuthorIID").val();
	var questionnaireNumber=$("#questionnaireNumberIID").val();
	var open = $("#openIID").val();
	$.ajax({
			type : "POST",
			url : "${basePath}admin/updateQuestion.action",
			data:"questionnaireArrangement.questionnaireArrangementId="+questionnaireArrangementId+
			"&questionnaireArrangement.questionnaireTitle="+questionnaireTitle+
			"&questionnaireArrangement.questionnaireAuthor="+questionnaireAuthor+
			"&questionnaireArrangement.questionnaireNumber="+questionnaireNumber+
			"&questionnaireArrangement.open="+open,
			dataType : "json",
			success : function(json) {
				mmg.load();
			},
			error : function() {
				alert("操作失败,请重试!");
				return false;
			}
			});
	});
	
});



function deleteQ(temp){
//为全局变量赋值
questionnaireArrangementId = temp;
$("#myModal1").modal();
}


</script>
	
            <div class="row-fluid line-margin"><button class="btn" onclick="loadHTML('${basePath}admin/getAddQuestionnaireArrangementPage.action')"><i class="icon-ok"></i>添加</button></div>
            <div class="row-fluid">
            	<div class="span12">
            		<form id="condition" class="span12 form-inline no-margin" action="javascript:void(0)">
            			<div class="row-fluid line-margin">
			               <span class="help-inline"><b>基本过滤：</b>
			                <span class="help-inline">标题：</span>
			                <input type="text" style="width:150px;" class="span2" id="questionnaireTitleID" placeholder="请输入问卷标题" />
			                 <span class="help-inline">发起人：</span>
			                <input type="text" class="span2" style="width:150px;" id="questionnaireAuthorID" placeholder="请输入发起人名字" />
		               </div>
		               <div>
		               		<div class="row-fluid line-margin"><b>高级过滤：</b>
		               	    <span class="help-inline">问卷编号：</span>
			                <input type="text" class="span2" id="questionnaireNumberID" placeholder="请输入问卷编号" />
			                          状&nbsp;&nbsp;&nbsp;&nbsp;态：</span>
			               <select class="input-small" style="width:150px;" id="openID">
			               <option value="1">开卷</option>
				           <option value="0">闭卷</option>
			                </select>&nbsp;&nbsp;&nbsp;&nbsp;
			                     <button class="btn " id="searchQuestionaireBtn"><i class="icon-search"></i>查询</button>&nbsp;&nbsp;
			                     <button class="btn" type="reset"><i class="icon-remove"></i>清除</button>
		               		</div>
		               		<div class="row-fluid">
	                             <div class="span12">
								    <table id="grid"></table>
								 <div id="page" class="pull-right"></div>
						    	</div>
                            </div>
		               </div>
		            </form>
            	</div>
            </div>


<div id="myModal1" class="modal hide fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
<div class="modal-header">
<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
<h3 id="myModalLabel">确认删除</h3>
</div>
<div class="modal-body">
<p>是否真的删除？</p>
</div>
<div class="modal-footer">
<button class="btn" data-dismiss="modal" aria-hidden="true">取消</button>
<button class="btn btn-primary" id="sureDeleteBtn">确认</button>
</div>
</div>