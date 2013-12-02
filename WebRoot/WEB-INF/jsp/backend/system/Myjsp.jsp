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
	<script type="text/javascript" src="${basePath}scripts/mmgrid.js"></script>
	<script type="text/javascript" src="${basePath}scripts/mmpaginator.js"></script>
	<script type="text/javascript" src="${basePath}scripts/Chart.js"></script>
	<script type="text/javascript" src="scripts/global.js"></script>
	<script type="text/javascript">
      //window.onload = setInterval(loadHTML('${basePath}systemaction.action'), 100);
	  var x = [
	  '${system[0].cpuLiyonglv}',
	  '${system[1].cpuLiyonglv}',
	  '${system[2].cpuLiyonglv}',
	  '${system[3].cpuLiyonglv}',
	  '${system[4].cpuLiyonglv}',
	  '${system[5].cpuLiyonglv}',
	  '${system[6].cpuLiyonglv}'];
	  var y = [
	  parseInt(x[0].split("。")[0]),
	  parseInt(x[1].split("。")[0]),
	  parseInt(x[2].split("。")[0]),
	  parseInt(x[3].split("。")[0]),
	  parseInt(x[4].split("。")[0]),
	  parseInt(x[5].split("。")[0]),
	  parseInt(x[6].split("。")[0])];
	  var ctx = document.getElementById("myChart").getContext("2d");
	  var data = {
		labels : ["60秒","50秒","40秒","30秒","20秒","10秒","0"],
		datasets : [
			{
				fillColor : "#E0EEEE",
				strokeColor : "#8A2BE2",
		        pointColor : "rgba(220,220,220,1)",
			    pointStrokeColor : "#fff",
				data : [y[0],y[1],y[2],y[3],y[4],y[5],y[6]]
			}
		]
	};
	  var myNewChart = new Chart(ctx).Line(data);	
</script>
	

  </head>
  
  <body >
     <div class="row-fluid line-margin">
		<div class="span6">
			<h3>CPU</h3>
			<div class="pull-right"></div>
			<div>使用率</div>
			<canvas id="myChart" width="500" height="200"></canvas>
		</div>
		<div class="span4 row-fluid line-margin" style="margin-top:100px"class="page-header">
			<div class="span6">
			    <table>
			      <tr>
			         <td><strong>厂商:</strong></td>
			         <td>${system[1].vendor}</td>
			      </tr>
			      <tr>
			         <td><strong>型号:</strong></td>
			         <td>${system[1].model}</td>
			      </tr>
			      <tr>
			         <td><strong>利用率:</strong></td>
			         <td id="test">${system[3].cpuLiyonglv}</td>
			         </td>
			      </tr>
			      <tr>
			         <td><strong>速度:</strong></td>
			         <td>${system[1].mhz } mhz</td>
			      </tr>		
			       <tr>
			         <td><strong>插槽:</strong></td>
			         <td>${system[1].sockets}</td>
			      </tr>
			      <tr>
			         <td><strong>内核:</strong></td>
			         <td> ${system[1].coreCount} </td>
			      </tr>			      
			      <tr>
			         <td><strong>缓存大小:</strong></td>
			         <td>${system[1].cacheSize }</td>
			      </tr>	     		   
			    </table>
			</div>
		</div>
	 </div>
  </body> 
</html>
