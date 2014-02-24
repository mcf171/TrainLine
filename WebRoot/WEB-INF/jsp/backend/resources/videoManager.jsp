<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
	
    <link rel="stylesheet" type="text/css" href="${basePath}styles/mmgrid.css" />
    <link rel="stylesheet" type="text/css" href="${basePath}styles/mmpaginator.css" />
    <link rel="stylesheet" type="text/css" href="${basePath}themes/mmgrid/mmgrid.css" />
    <link rel="stylesheet" type="text/css" href="${basePath}themes/mmgrid/mmpaginator.css" />
    
    
    <script type="text/javascript" src="${basePath}scripts/mmgrid.js"></script>
    <script type="text/javascript" src="${basePath}scripts/mmpaginator.js"></script>
    <script type="text/javascript" src="${basePath}scripts/datepicker.js"></script>
	<script type="text/javascript">
//<![CDATA[
           var mmGirdTable;
$(document).ready(function ()
{
	$('#time-to').css('background', 'none').datepicker();
	$('#time-from').css('background', 'none').datepicker();
	test="ready"
	mmGirdTable = $('#grid').mmGrid({
		url: '${basePath}admin/getBackendShiPingResource.action',
		height: 410,
		autoLoad: true,
		fullWidthRows: true,
		root:'list',
		cols: [
				{ title: '视频名称', sortable: true,  name: 'resourceName' },
				{ title: '视频位置', sortable: true, name: 'resourcePath' },
				{ title: '下载次数', sortable: true, name: 'downloundCount' },
				{
					title: '操作',
					width: 100,
					renderer: function (val, item, row)
					{
					
						return '<a href="javascript:updateDoc(' +item.resourceId + ')">修改</a> ' + '&nbsp' + '<a href="javascript:showConfirm(' +item.resourceId + ')" >删除</a> ';
					}
				}
			],
		plugins: [
			$('#page').mmPaginator({})
		]
	});
	
	var optionString = "";
		<c:forEach items="${resourceList}" var="item">
				optionString += "<option name='resourceTypeName' value='" + ${item.resourceId} + "'>" + "${item.resourceName}" +"</option>"
		</c:forEach>
	
	$("#resourceType").append(optionString);
	$("#showAll").click(function(){
		mmGirdTable.load();
	});
	$("#search").click(function(){
		var resourceName = $("#resourceName").val();
		var resourceClassIndex = $("#resourceClassIndex").val();
		var resourceType = $("#resourceType").val();
		//mmGirdTable.load([{"resource.resourceName":resourceName },{"resource.resourceContent":checkValue}]);
		mmGirdTable.load(
				{"resource.resourceName":resourceName,
				 "resource.resourcePath":resourcePath,
				 "resource.resourceType":resourceType
				}
				);
	});
});

function updateDoc(id){
	
	loadHTML('${basePath}admin/getUpdateResoucePage.action?resource.resourceId='+id);
}

var resourceId;
function showConfirm(id){
	
	resourceId = id;
	$("#myModal").modal();
}

function deletDoc(){
	
	var dataInfo = "resource.resourceId=" +resourceId; 
	$.ajax({
		type:"post",
		url:"${basePath}admin/deleteResource.action",
		data:dataInfo,
		success:function(msg){
			$("#myModal").modal("hide");
			 mmGirdTable.removeRow(mmGirdTable.selectedRowsIndex());
		}
	});
}

//]]>
</script>
	
            <div class="row-fluid ">
	            
            </div>
            <div class="row-fluid">
            	<div class="span12">
            		
            		<div class="span12">
						<button class="btn" onclick="loadHTML('${basePath}admin/getAddResourcePage.action?resource.resourceType=1')"><i class="icon-plus"></i>&nbsp;添加</button>
					</div>			
            			<div class="row-fluid line-margin">
			               <span class="help-inline"><b>基本过滤：</b>类型</span>
			                <select class="input-small" id="resourceType">
				               
			                </select>
			                 <span class="help-inline">编号：</span>
			                <select class="input-small" id="resourceType">
				               
			                </select>
			               <input
			               			id="resourceName"
									type="text"
									name="keyword"
									class="span2 "
									placeholder="请输入内容"
								/>
			         
			              
			                <div class="row-fluid line-margin">
			                     <button class="btn " id="search"><i class="icon-search"></i>查询</button>
			                     
		               		</div>
		               </div>
		               <div>
		               		
		               		<div class="row-fluid">
	                             <div class="span12">
								    <table id="grid"></table>
								 <div id="page" class="pull-right"></div>
						    	</div>
                            </div>
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
<button class="btn btn-primary" onclick="deletDoc()">确认</button>
</div>
</div>	