
    <link rel="stylesheet" type="text/css" href="${basePath}styles/mmgrid.css" />
    <link rel="stylesheet" type="text/css" href="${basePath}styles/mmpaginator.css" />
    <link rel="stylesheet" type="text/css" href="${basePath}themes/mmgrid/mmgrid.css" />
    <link rel="stylesheet" type="text/css" href="${basePath}themes/mmgrid/mmpaginator.css" />
    <script type="text/javascript" src="${basePath}scripts/mmgrid.js"></script>
    <script type="text/javascript" src="${basePath}scripts/mmpaginator.js"></script>
    <script type="text/javascript" src="${basePath}scripts/datepicker.js"></script>

<script type="text/javascript">
$(document).ready(function ()
{
	$('#time-to').css('background', 'none').datepicker();
	$('#time-from').css('background', 'none').datepicker();

	$('#grid').mmGrid({
		url:'http://127.0.0.1:8080/TrainLine/questionnaire_findAllQuestionnare.action',
		height: 410,
		autoLoad: true,
		root:'qList',
		fullWithRows: true,
		cols: [
     { title: 'ID', sortable: true, width: 100, name: 'questionnaireId' },  
     { title: '问卷标题', sortable: true, width: 100, name:'questionnaireTitle' },
     { title: '发起人', sortable: true, width: 110, name:'questionnaireAuthor' },
     { title: '问卷编号', sortable: true, width: 110, name:'questionnaireNumber' },
     { title: '是否公开', sortable: true, width: 110, 
       renderer: function (val, item, row) {
       return item.open=1? '公开':'不公开';
       }
     },
     {
     title: '操作',width: 100,renderer: function (val, item, row) 
       {        
        return '<input type="hidden" value="' + item.questionnaireId + '" /><a href="read.jsp" target="_blank">阅读</a> ';
       }
       }
       ],
		plugins: [
			$('#page').mmPaginator({})
		]
	});
	
});
</script>
	
            <div class="row-fluid ">
	            
            </div>
            <div class="row-fluid">
            	<div class="span12">
            		<form id="condition" class="span12 form-inline no-margin">
            			<div class="row-fluid line-margin">
			               <span class="help-inline"><b>基本过滤：</b>类型：</span>
			               <select class="input-small">
				               <option></option>
				               <option></option>
				               <option></option>
				               <option></option>
				               <option></option>
				               <option></option>
			                </select>
			                <span class="help-inline">编号：</span>
			                <select class="input-small">
				               <option></option>
				               <option></option>
				               <option></option>
				               <option></option>
			                </select>
			                <span class="help-inline">内容：</span>
			                <input type="text" class="span2" placeholder="请输入相应内容" />
		               </div>
		               <div>
		               		<div class="row-fluid line-margin">
		               			<span class="help-inline"><b>高级过滤：</b></span>
		               			<input 
				                 	type="text"
									id="time-from"
									class="span2"
									placeholder="开始时间"
									data-date-format="yyyy-mm-dd"
			                     />
			                     <span class="help-inline">至</span>
			                     <input 
				                 	type="text"
									id="time-to"
									class="span2"
									placeholder="结束时间"
									data-date-format="yyyy-mm-dd"
			                     />
			                     <button class="btn "><i class="icon-search"></i>查询</button>
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