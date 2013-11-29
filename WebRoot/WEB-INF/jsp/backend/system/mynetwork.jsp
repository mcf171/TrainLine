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
		labels : ["60秒","0"],
		datasets : [
			{
				fillColor : "#FAEBD7",
				strokeColor : "#EE9A00",
		        pointColor : "rgba(220,220,220,1)",
			    pointStrokeColor : "#fff",
				data : [0,40,30,120,290,300,400,400,400,420,30,20,30,0]
			}
		]
	};
	  var myNewChart = new Chart(ctx).Line(data);
  
</script>
	

  </head>
  
  <body>
     <div class="row-fluid line-margin">
		<div class="span12">
			<h3>WI-FI</h3>
			<div>吞吐量(kbps)</div>
			<canvas id="myChart" width="500" height="200"></canvas>
		</div>
		<div class="row-fluid line-margin" class="page-header">
			<div class="span4">
			    <table>
			      <tr>
			         <td>发送</td>
			      </tr>
			      <tr>
			         <td><strong>8.0 Kbps</strong></td>
			      </tr>	
			      <tr>
			         <td>接收</td>
			      </tr>
			      <tr>
			         <td>24.0 Kbps</td>
			      </tr>		     
			    </table>
			</div>
			<div class="span4"> 
			    <table>
			      <tr>
			         <td>适配器名称:</td>
			         <td>WI-FI</td>
			      </tr>
			      <tr>
			         <td>SSID:</td>
			         <td>ChinaNet-LbE7</td>
			      </tr>
			      <tr>
			         <td>连接类型:</td>
			         <td>802.11n</td>
			      </tr>
			      <tr>
			         <td>IPv4地址:</td>
			         <td>10.96.99.228</td>
			      </tr>
			      <tr>
			         <td>Ipv6地址:</td>
			         <td>2001:250:4400:d000::797c</td>
			      </tr>
			    </table>
			</div>
		</div>
	 </div>
  </body> 
</html>
