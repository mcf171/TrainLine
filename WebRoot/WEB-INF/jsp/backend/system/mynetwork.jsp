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
		<div class="span6">
			<h3>WI-FI</h3>
			<div>吞吐量(kbps)</div>
			<canvas id="myChart" width="500" height="200"></canvas>
		</div>
		<div class="span6 row-fluid line-margin" style="margin-top:100px"class="page-header">
		    <table>
		       <tr>
		         <td><strong>设  备  名: </strong><br></td>
		         <td>  ${system[9].deviceName }  </td>		         		         		         		         
		       </tr>	       
		      <!-- <c:forEach var="item" items="${system}"> --> 
		         <tr>
		             <td><strong>IP 地  址: </strong></td>
		             <td>  ${system[9].address }  </td>		             		             		             
		         </tr>
		      <!--  </c:forEach> -->
		      <tr>
		         <td><strong>子网掩码: </strong></td>
		         <td>  ${system[9].netMsk }  </td>
		      </tr>
		         <td><Strong>Mac地址: </Strong></td>
		         <td>  ${system[9].hwAddr }  </td>
		      <tr>
		      </tr>
		         <td><Strong>广播地址: </Strong></td>
		         <td>  ${system[9].broadCast }  </td>
		      <tr>
		         <td><Strong>网络描述: </Strong></td>
		         <td>  ${system[9].description }  </td>
		      </tr>
		    </table>
		</div>
	 </div>
  </body> 
</html>
