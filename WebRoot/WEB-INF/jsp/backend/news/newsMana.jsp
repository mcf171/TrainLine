<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'newsMana.jsp' starting page</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">


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

	mmGirdTable=$('#grid').mmGrid({
		url:'${basePath}showNoticeAction.action',
		height: 'auto',
		autoLoad: true,
		nowrap:true,
		fullWidthRows: true,
		root:'noticeList',
		cols: [
			{ title: '消息编号', sortable: true, name: 'noticeId' },	
			{ 
			  title: '公告类型', 
			  renderer:function(val,item,row){
			    return item.noticetype.noticeTypeName;
			  }
			  },
			{ title: '公告标题', sortable: true, name: 'noticeTitle' },
			{ title: '公告时间', sortable: true, name: 'noticeTime' },
			{ title: '发布人', sortable: true,  name: 'noticeAuthor' },
			{ title: '公告内容', sortable: true, name: 'noticeContent' },
			{ 
			    title: '操作',sortable: true, 
			    renderer: function (val, item, row)
					{
					return item.noticetype.noticeTypeName;	
					}
			     }
		],
		plugins: [
			$('#page').mmPaginator({})
		]
	});
});
$("#checkAll").click(function(){
   $("#noticeTypeSearch").val(-1);
   $("#noticeIdSearch").val("");
   $("#noticeContent").val("");	
   $("#time-from").val("");	
   $("#time-to").val("");	
});
$("#baseCheck").click(function(){
    var noticeType =  parseInt($("#noticeTypeSearch").val());
    var noticeId =parseInt($("#noticeIdSearch").val());
    var noticeContent = $("#noticeContent").val();
    if(isNaN(noticeId)){
        noticeId=0;
    }
    if(isNaN(noticeType)){
       noticeType=0;
    }
    if(noticeType==-1){
       noticeType=0;
    }
    mmGirdTable.load(
    {
       "notice.noticeId":noticeId,
       "notice.noticetype.noticeTypeId":noticeType,
       "notice.noticeContent":noticeContent
    }
    );
    
});
var flag = 0;
$("#timeCheck").click(function(){
var fromTime = $("#time-from").val();
alert(fromTime);
var toTime = $("#time-to").val();
alert(toTime);
if((fromTime!="")&&(toTime!="")){
   flag=1;
   mmGirdTable.load(
    {
       "fromTime":fromTime,
       "toTime":toTime,
       "flag":flag
    }
    );
}
});
//]]>
</script>
  </head>
  <style>
 
  .edit{
      
      width:700px;
      margin-top:10px;
      margin-left:60px;
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
	border-top-right-radius: 3px; border-bottom-right-radius: 3px;
	border-bottom-left-radius: 3px; border-top-left-radius: 3px;
	overflow: scroll;
	outline: none;
}
</style>
<body>
<div class="container-fluid">
	<div class="row-fluid">
	<div id="content" class="span10">
		   	
           <div class="row word_style"> 
              <div class="row-fluid line-margin">
					    <span class="help-inline">
					      <b>类型过滤：</b>
					    </span>
					    <select class="input-medium" id="noticeTypeSearch">
					    <option value="-1">所有</option>	
					    <c:if test="${noticeTypeList!=null}">
					      <c:forEach var="noticeType" items="${noticeTypeList}">
					         <option value="${noticeType.noticeTypeId}">${noticeType.noticeTypeName}</option>
					      </c:forEach>
					    </c:if>
					    </select>
					    <b>编号过滤：</b>
					    <input id="noticeIdSearch" class="span2 " type="text" placeholder="请输入内容" name="keyword">
					    <b>内容过滤：</b>
					    <input id="noticeContent" class="span2 " type="text" placeholder="请输入内容" name="keyword">
					    <button type="submit" class="btn" id="baseCheck">查询</button>
			    </div>            
			    <div style="margin-top:10px">
					     <span class="help-inline">
					     <b>高级过滤：</b>					 
					     </span>
					     <input type="text" id="time-from" name="fromTime" class="span2" readonly="readonly" placeholder="开始时间">
					     <span class="help-inline">至</span>
					     <input type="text" id="time-to" name="toTime" class="span2" readonly="readonly" placeholder="结束时间">
					     <button type="submit" class="btn" id="timeCheck">查询</button>
					     <button type="submit" id="checkAll" class="btn">清楚条件</button>
			    </div>                     
           </div>
          <div class="row word_style">
             <div class="row-fluid ">	       
		       <table id="grid"></table>
		       <div id="page" class="pull-right"></div>
             </div>
         </div>			
		</div>
						</div>
					</div>

</body>
</html>