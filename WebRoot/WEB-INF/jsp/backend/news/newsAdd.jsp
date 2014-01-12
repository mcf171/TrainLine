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
    
    <title>My JSP 'newsAdd.jsp' starting page</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
	<link rel="stylesheet" type="text/css" href="${basePath}styles/mmgrid.css" />
    <link rel="stylesheet" type="text/css" href="${basePath}styles/mmpaginator.css" />
    <link rel="stylesheet" type="text/css" href="${basePath}themes/mmgrid/mmgrid.css" />
    <link rel="stylesheet" type="text/css" href="${basePath}themes/mmgrid/mmpaginator.css" />
    
    <script type="text/javascript" src="${basePath}scripts/mmgrid.js"></script>
    <script type="text/javascript" src="${basePath}scripts/mmpaginator.js"></script>
    <script type="text/javascript" src="${basePath}scripts/datepicker.js"></script>

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
<form action="${basePath}addNewsAction.action" enctype="multipart/form-data" method="post">

  <div class="container-fluid">
	<div class="row-fluid">
		<div id="content" class="span10">
		    <div class="row" >
                                          消息名称：
            <input type="text" name="notice.noticeTitle" class="span4  input-medium box"   >
           </div>
           <div class="row">             
			 消息类型：			 
			  <select class="input-medium box" name="notice.noticetype.noticeTypeId">
			    <c:if test="${typeList!=null}">
					      <c:forEach var="item" items="${typeList}">
					         <option value="${item.noticeTypeId}">${item.noticeTypeName}</option>
					      </c:forEach>
					    </c:if>		
			   </select>	                               
           </div>
           <div class="row ">
                                    是否置顶：
              <select class="input-medium" name="notice.weight">
			   <option value="1">是</option>
			   <option value="2">否</option>			
			   </select>	
           </div>
           <div class="row">
                                    消息内容：
              <textarea name="notice.noticeContent" rows="5" class="span6"></textarea>                       
           </div>
           <div class="row" align="center">
             <button class="btn " type="submit" id="submit"><b>添加</b></button>
             <button class="btn" type="reset" id="reset"><b>重置</b></button>
           </div>
		</div>
    </div>
  </div>
</form>
</body>
</html>