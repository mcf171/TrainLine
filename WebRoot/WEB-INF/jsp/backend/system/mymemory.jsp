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
		<div class="span12">
			<h3>内存</h3>
			<div>内存使用量</div>
			<canvas id="myChart" width="500" height="200"></canvas>
		</div>
		<div class="row-fluid line-margin" class="page-header">
			<div class="span4">
			    <table>
			      <tr>
			         <td>使用中</td>
			         <td>可用</td>
			      </tr>
			      <tr>
			         <td><strong>2.4 GB</strong></td>
			         <td><strong>1.4 GB</strong></td>
			      </tr>
			      <tr>
			         <td>已提交</td>
			         <td>已缓存</td>		        
			      </tr>
			      <tr>
			         <td><strong>3.0/7.7 GB</strong></td>
			         <td><strong>885 MB</strong></td>			         
			      </tr>
			      <tr>
			         <td>页面缓冲池</td>
			         <td>非页面缓冲池</td>
			      </tr>
			      <tr>
			         <td><strong>246 MB</strong></td>
			         <td><strong>82.2 MB</strong></td>
			      </tr>
			    </table>
			</div>
			<div class="span4"> 
			    <table>
			      <tr>
			         <td>速度:</td>
			         <td>1067 MHz</td>
			      </tr>
			      <tr>
			         <td>已使用的插槽:</td>
			         <td>2/2</td>
			      </tr>
			      <tr>
			         <td>组成要素:</td>
			         <td>SODIMM</td>
			      </tr>
			      <tr>
			         <td>为硬件保留的内存:</td>
			         <td>201MB</td>
			      </tr>
			    </table>
			</div>
		</div>
	 </div>
  </body> 
</html>
