<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>

<link rel="stylesheet" type="text/css" href="${basePath}styles/mmgrid.css" />
<link rel="stylesheet" type="text/css" href="${basePath}styles/mmpaginator.css" />
<link rel="stylesheet" type="text/css" href="${basePath}themes/mmgrid/mmgrid.css" />
<link rel="stylesheet" type="text/css" href="${basePath}themes/mmgrid/mmpaginator.css" />
<script type="text/javascript" src="${basePath}scripts/mmgrid.js"></script>
<script type="text/javascript" src="${basePath}scripts/mmpaginator.js"></script>

<script type="text/javascript">
//<![CDATA[
var rowDatas = new Array();
<c:forEach items="${user.reviceMail}" var="item">
var rowData = {"mailId":"${item.mailId}","mailState":"${item.mailState}","userName":"${item.sendUser.userName}","mailContent":'${item.mailContent}',"mailTime":'<fmt:formatDate value="${item.mailTime}" type="both"/>'};
	rowDatas.push(rowData);
</c:forEach>           

$(document).ready(function ()
{
	mmGridTable = $('#grid').mmGrid({
		items:rowDatas,
		height: 280,
		nowrap:true,
		autoLoad: true,
		checkCol: true,
		multiSelect: true,
		root:'testArrangementList',
		fullWidthRows: true,
		cols: [
			{ title: '状态', sortable: true,
				renderer: function (val, item, row)
				{
					var mailState = parseInt(item.mailState);
					var returnString = "";
					switch(mailState)
					{
					case 1: returnString = "未读";break;
					case 2 : returnString ="已读";break;
					}
					return returnString;
				}		
			},
			{ title: '收件人', sortable: true, name:'userName'},
			{ title: '邮件内容', sortable: true, name:'mailContent'},
			{ title: '收件时间', sortable: true, name:'mailTime'},
			
			{
				title: '操作',
				width: 280,
				renderer: function (val, item, row)
				{
					return '<input type="hidden" value="' + item.id + '" />' +
					'<a href="javascript:void(0)" onclick="showMail(' + item.mailId + ')">查看</a>&nbsp;&nbsp;' +
						'<a href="javascript:void(0)" onclick="showConfirm(' + item.mailId +')">删除</a>';
				}
			}
		],
		plugins: [
			$('#page').mmPaginator({})
		]
	});
});

function showMail(mailId){
	loadHTML("${basePath}showMail.action?mail.mailId="+ mailId);
}

var mailId;
function showConfirm(id){
	
	mailId = id;
	$("#myModal").modal();
}

function deleteTestArrangement(){
	
	$("#myModal").modal("hide");
	dataInfo = "mail.mailId=" + mailId;
	$.ajax({
		
		type:"post",
		url:"${basePath}deleteMail.action",
		data:dataInfo,
		success:function(msg){
			mmGridTable.removeRow(mmGridTable.selectedRowsIndex());	
		}
	});
}
//]]>
</script>


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