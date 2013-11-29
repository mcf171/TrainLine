<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

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
		<div class="span12">
			<h3>磁盘</h3>
			<div>活动时间</div>
			<canvas id="myChart" width="500" height="200"></canvas>
			<div>磁盘传输速率(kb/秒)</div>
			<canvas id="myChart2" width="500" height="200"></canvas>
		</div>
		<div class="row-fluid line-margin" class="page-header">
			<div class="span4">
			    <table>
			      <tr>
			         <td>活动时间</td>
			         <td>平均响应时间</td>
			      </tr>
			      <tr>
			         <td><strong>23%</strong></td>
			         <td><strong>461毫秒</strong></td>
			      </tr>
			      <tr>
			         <td>读取速度</td>
			         <td>写入速度</td>
			      </tr>
			      <tr>
			         <td><strong>65.7KB/秒</strong></td>
			         <td><strong>132KB/秒</strong></td>
			      </tr>
			    </table>
			</div>
			<div class="span4"> 
			    <table>
			      <tr>
			         <td>已格式化:</td>
			         <td>298 GB</td>
			      </tr>
			      <tr>
			         <td>系统磁盘:</td>
			         <td>是</td>
			      </tr>
			      <tr>
			         <td>页面文件:</td>
			         <td>是</td>
			      </tr>
			    </table>
			</div>
		</div>
	 </div>
  </body> 
</html>
