<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<link rel="stylesheet" type="text/css" href="${basePath}styles/mmgrid.css" />
<link rel="stylesheet" type="text/css" href="${basePath}styles/mmpaginator.css" />
<link rel="stylesheet" type="text/css" href="${basePath}themes/mmgrid/mmgrid.css" />
<link rel="stylesheet" type="text/css" href="${basePath}themes/mmgrid/mmpaginator.css" />
<script type="text/javascript" src="${basePath}scripts/mmgrid.js"></script>
<script type="text/javascript" src="${basePath}scripts/mmpaginator.js"></script>

<!-- <div class="row-fluid line-margin">
	<div class="span12">
		<img src="report/peixunbanbaoming.png" usemap="#Map2"/>
	</div>
</div> -->

<script type="text/javascript">
//<![CDATA[
           var mmGridTable;
$(document).ready(function ()
{
	mmGridTable = $('#grid').mmGrid({
		url: '${basePath}admin/getPeiXUnRenYuanBaoMingBiaoList.action',
		height: 410,
		root:'list',
		autoLoad: true,
		checkCol: true,
		multiSelect: true,
		fullWithRows: true,
		indexCol:true,
		cols: [
			{ title: '工作单位', sortable: true, width: 100, name: 'workPlace' },
			{ title: '姓名', sortable: true, width: 130, name: 'name' },
			{ title: '身份证', sortable: true, width: 100, name: 'idCard' },
			{ title: '文化程度', sortable: true, width: 100, name: 'education' },
			{ title: '参加工作', sortable: true, width: 120, name: 'workHistory' },
			{ title: '本职业(工种)年限', sortable: true, width: 120, name: 'workTime' },
			{ title: '鉴定工种', sortable: true, width: 120, name: 'identifyKinds' },
			{ title: '鉴定等级', sortable: true, width: 120, name: 'identifyLevel' },
			{ title: '原证书号码', sortable: true, width: 120, name: 'oldNumber' },
			{ title: '户口所在地', sortable: true, width: 120, name: 'homePlace' },
			{ title: '缴纳社保所在地', sortable: true, width: 120, name: 'moneyPlace' },
			{ title: '联系电话', sortable: true, width: 120, name: 'phone' },
			{ title: '备注', sortable: true, width: 120, name: 'postScript' },
			{ title: '操作', sortable: true, width: 120,
				
				renderer: function (val, item, row)
				{
					var returnString ="";
					var returnString = "<a href='javascript:void(0)' onclick='modifyReport(" + item.id + ")'>修改</a>" + " <a href='javascript:void(0)' onclick='deleteReport(" + item.id + ")'>删除</a>"
					return returnString;
				}
			}
			
		],
		plugins: [
			$('#page').mmPaginator({})
		]
	});
});


function modifyReport(id){
	
	loadHTML("${basePath}admin/getModifyPeiXunRenYuanBaoMingBiaoPage.action?peiXunRenYuanBaoMingBiao.id="+id);
}
var deleteId;
function deleteReport(id){
	deleteId = id;
	$("#myModal").modal();
}

function deleteConfirm(){
	
	dataInfo = "peiXunRenYuanBaoMingBiao.id="+deleteId;
	$.ajax({
		type:'post',
		url:'${basePath}admin/deletePeiXunRenYuanBaoMingBiao.action',
		data:dataInfo,
		success:function(msg){
			$("#myModal").modal('hide');
			mmGridTable.removeRow(mmGridTable.selectedRowsIndex());	
			
		}
	});
}
//]]>
</script>


<div class="row-fluid">
	    <div class="row-fluid">
            	<div class="span12">
            		<form id="condition" class="span12 form-inline no-margin">
            		<div class="span12">
						<button class="btn" onclick="loadHTML('${basePath}admin/getAddPeiXunRenYuanBaoMingBiaoPage.action')"><i class="icon-plus"></i>&nbsp;新增</button>
					</div>	
            			<div class="row-fluid line-margin">
			               <span class="help-inline"><b>基本过滤：</b>类型：</span>
			               <select class="input-small">
				               <option>所有</option>
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
			                <input type="text" class="span2" placeholder="请输入内容" />
		               </div>
		               <div>
		               		<div class="row-fluid line-margin"> 
		               			<div class="span7">
		               			</div>
		               			<div class="span5">
			                     	<button class="btn "><i class="icon-search"></i>查询</button>
			                     	<button class="btn" type="reset"><i class="icon-remove"></i>清除条件</button>
		               			</div>
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
<button class="btn btn-primary" onclick="deleteConfirm()">确认</button>
</div>
</div>
	
