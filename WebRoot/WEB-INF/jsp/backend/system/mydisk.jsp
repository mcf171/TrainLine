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
    
    <title>My JSP 'MyJsp.jsp' starting page</title>
    <meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
    <link rel="stylesheet" type="text/css" href="styles/mmgrid.css" />
	<link rel="stylesheet" type="text/css" href="styles/mmpaginator.css" />
	<link rel="stylesheet" type="text/css" href="themes/mmgrid/mmgrid.css" />
	<link rel="stylesheet" type="text/css" href="themes/mmgrid/mmpaginator.css" />
	<script type="text/javascript" src="scripts/mmgrid.js"></script>
	<script type="text/javascript" src="scripts/mmpaginator.js"></script>
	<script type="text/javascript" src="scripts/Chart.js"></script>
	<script type="text/javascript">
	  var ctx = document.getElementById("myChart").getContext("2d");
	  var data = {
		labels : ["60秒","50秒","40秒","30秒","20秒","10秒","0"],
		datasets : [
			{
				fillColor : "#E0EEEE",
				strokeColor : "#B4EEB4",
		        pointColor : "rgba(220,220,220,1)",
			    pointStrokeColor : "#fff",
				data : [23,30,37,40,20,30,50]
			}
		]
	};
	  var myNewChart = new Chart(ctx).Line(data);
    
    var ctx2 = document.getElementById("myChart2").getContext("2d");
	  var data2 = {
		labels : ["60秒","50秒","40秒","30秒","20秒","10秒","0"],
		datasets : [
			{
				fillColor : "#E0EEEE",
				strokeColor : "#B4EEB4",
		        pointColor : "rgba(220,220,220,1)",
			    pointStrokeColor : "#fff",
				data : [23,30,37,40,20,30,50]
			}
		]
	};
	  var myNewChart2 = new Chart(ctx2).Line(data2);
</script>
	

  </head>
  
  <body>
     <div class="row-fluid line-margin">
		<div class="span6">
			<h3>磁盘</h3>
			<div>活动时间</div>
			<canvas id="myChart" width="500" height="200"></canvas>
			<div>磁盘传输速率(kb/秒)</div>
			<canvas id="myChart2" width="500" height="200"></canvas>
		</div>
		<div class="span6 row-fluid line-margin" style="margin-top:100px"class="page-header">
		    <table>
		       <tr>
		         <th><strong>盘符名称</strong></th>
		         <th><strong>总容量</strong></th>
		         <th><strong>已用容量</strong></th>
		         <th><Strong>剩余容量</Strong></th>
		         <th><Strong>使用率</Strong></th>
		       </tr>	       
		       <c:forEach var="item" items="${system}">
		         <tr>
		             <td>${item.devName }</td>
		             <td>${item.totalDisk }</td>
		             <td>${item.freeDisk }</td>
		             <td>${item.usedDisk }</td>
		             <td>${item.userPercent }%</td>
		         </tr>
		       </c:forEach>
		    </table>
		</div>
		
	 </div>
  </body> 
</html>
