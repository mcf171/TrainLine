<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'mywrite.jsp' starting page</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
    <script type="text/javascript" src="scripts/bootstrap.js"></script>
    <link rel="stylesheet" type="text/css" href="styles/bootstrap.css" />
  </head>
  
  <body>
    <div class="row-fluid line-margin" style="margin-top:0px;margin-bottom:0px;background-color:#F0F8FF" >
      <div class="span10" >
        <form>
         <div>
            <span style="margin:10px;width:60px"><b>收件人</b></span> <input type="text" style="width:90%;margin-top:8px;height:25px;">
         </div>
         <div>
            <span style="margin-left:70px;"><a href="#">添加抄送</a></span>-<a href="#">添加密送</a>|<a href="#">分别发送</a>
         </div>
         <div>
            <span style="margin-left:20px;margin-right:15px;"><b>主题</b></span> <input type="text" style="width:90%;margin-top:8px;height:25px;">
         </div>
         <div>
            <span style="margin-left:70px;"><a href="#"><i class="icon-file"></i>添加附件</a></span>
         </div>
         <div>
            <span style="margin-left:20px;margin-right:15px;"><b>正文</b></span> 
            <textarea style="width:90%;height:300px"></textarea>
         </div>
         <div>
            <span style="margin-left:70px;">发送人:</span><span style="margin-left:10px">王珏</span>
         </div>
       </form>
      </div>
      <div class="span2 " >
         <div style="border-style:solid;border-color:#B9D3EE;margin-right:15px">
                <ul class="nav nav-tabs">
			    <li class="active">
			    <a href="#">通讯录</a>
			    </li>
			    <li><a href="#">信纸</a></li>
			    </ul>
			    <input  type="text" value="查找联系人..." style="height:25px;width:90%">
			    <span ><b>最近联系人</b></span>
			    <div style="background-color:white">
			    <ul style="margin-left:40px;list-style:none;">
			     <li>我自己的邮箱</li>
			     <li>谢老师</li>
			     <li>源头水尾</li>
			     <li>雪绒花</li>
			     <li></li>
			    </ul>
			    </div>
			    <span ><b>邮箱联系人</b></span>
			    <ul style="list-style:none">
			      <li></li>
			    </ul>
         </div>
      </div>
    </div>
    <div id="btn-group" style=" margin-top:0px;background-color:#B9D3EE;height:35px">
       <button class="btn "type="button" style="margin-left:10px">发送</button>
       <button class="btn "type="button" >已发送</button>   
       <button class="btn "type="button" >存草稿</button>    
       <button class="btn "type="button" >关闭</button>        
    </div>
  </body>
</html>
