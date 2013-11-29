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
		<div class="span12">
			<h3>CPU</h3>
			<div class="pull-right"></div>
			<div>使用率</div>
			<canvas id="myChart" width="500" height="200"></canvas>
		</div>
		<div class="row-fluid line-margin" class="page-header">
			<div class="span4">
			    <table>
			      <tr>
			         <td>利用率</td>
			         <td>速度</td>
			      </tr>
			      <tr>
			         <td id="test">${system[0].cpuLiyonglv}</td>
			         <td><strong>1.3 GHz</strong></td>
			      </tr>
			      <tr>
			         <td>进程</td>
			         <td>线程</td>
			         <td>句柄</td>
			      </tr>
			      <tr>
			         <td><strong>74</strong></td>
			         <td><strong>1356</strong></td>
			         <td><strong>33396</strong></td>
			      </tr>
			      <tr>
			         <td>正常运行时间</td>
			      </tr>
			      <tr>
			         <td><strong>02:16:29</strong></td>
			      </tr>
			    </table>
			</div>
			<div class="span4"> 
			    <table>
			      <tr>
			         <td>最大速度:</td>
			         <td>2.13 GHz</td>
			      </tr>
			      <tr>
			         <td>插槽:</td>
			         <td>1</td>
			      </tr>
			      <tr>
			         <td>内核:</td>
			         <td> ${system[0].coreCount} </td>
			      </tr>
			      <tr>
			         <td>逻辑处理器:</td>
			         <td>4</td>
			      </tr>
			      <tr>
			         <td>虚拟化:</td>
			         <td>已启用</td>
			      </tr>
			      <tr>
			         <td>L1缓存:</td>
			         <td>128KB</td>
			      </tr>
			      <tr>
			         <td>L2缓存::</td>
			         <td>512KB</td>
			      </tr>
			      <tr>
			         <td>L3缓存:</td>
			         <td>3.0MB</td>
			      </tr>
			    </table>
			</div>
		</div>
	 </div>
  </body> 
</html>
