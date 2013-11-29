<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

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
$(document).ready(function ()
{
	$('#time-to').css('background', 'none').datepicker();
	$('#time-from').css('background', 'none').datepicker();

	$('#grid').mmGrid({
		url:'${basePath}showNoticeAction.action',
		height: 410,
		autoLoad: true,
		fullWithRows: true,
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
					return item.noticeType.noticeTypeName;	
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
					      <b>基本过滤：</b>
					    </span>
					    <select class="input-medium">
					    <option>类型1</option>
					    <option>类型2</option>
					    <option>类型3</option>
					    <option>类型4</option>
					    </select>
					    <select class="input-medium">
					    <option>编号1</option>
					    <option>编号 2</option>
					    <option>编号3</option>
					    <option>编号4</option>				
					    </select>
					    <input type="text" class="span4 input-medium" placeholder="请输入关键字">
			    </div>            
			    <div style="margin-top:10px">
					     <span class="help-inline">
					     <b>高级过滤：</b>					 
					     </span>
					     <input type="text" class="span2 input-medium" placeholder="开始时间">
					     <span class="help-inline">至</span>
					     <input type="text" class="span2  input-medium" placeholder="结束时间">
					     <button type="submit" class="btn">查询</button>
					     <button type="submit" class="btn">清楚条件</button>
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