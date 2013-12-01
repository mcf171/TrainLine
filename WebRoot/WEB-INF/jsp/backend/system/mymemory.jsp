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
				strokeColor : "#EE7AE9",
		        pointColor : "rgba(220,220,220,1)",
			    pointStrokeColor : "#fff",
				data : [2,3,3.6,2.1,3.0,3.6]
			}
		]
	};
	  var myNewChart = new Chart(ctx).Line(data);
  
</script>
	

  </head>
  
  <body>
     <div class="row-fluid line-margin">
		<div class="span6">
			<h3>内存</h3>
			<div>内存使用量</div>
			<canvas id="myChart" width="500" height="200"></canvas>
		</div>
		<div class="span4 row-fluid line-margin" style="margin-top:100px"class="page-header">
			<div class="span10">
			    <table>
			      <tr>
			         <td><strong>内 存 总 量 :</strong></td>
			         <td>${system[0].totalMemory} M</td>
			      </tr>
			      <tr>
			         <td><strong>内存使用量:</strong></td>
			         <td>${system[0].usedmemory} M</td>
			      </tr>
			      <tr>
			         <td><strong>内存剩余量:</strong></td>
			         <td id="test">${system[0].freeMemory} M</td>
			         </td>
			      </tr>
			      <tr>
			         <td><strong>内存使用率:</strong></td>
			         <td>${system[0].usedPercent} %</td>
			      </tr>		
			       <tr>
			         <td><strong>内存生育率:</strong></td>
			         <td>${system[0].freePercent} %</td>
			      </tr>    		   
			    </table>
			</div>
		</div>
	 </div>
  </body> 
</html>
