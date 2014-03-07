<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

    <script type="text/javascript" src="${basePath}scripts/jquery.js"></script>
    <script type="text/javascript">
<!--
window.UEDITOR_HOME_URL="/TrainLine/ueditor/";
//-->
</script>
    <script type="text/javascript" charset="utf-8"
	src="${basePath}ueditor/ueditor.config.js"></script>
	
<script type="text/javascript" charset="utf-8"
	src="${basePath}ueditor/ueditor.all.js"> </script>
<!--建议手动加在语言，避免在ie下有时因为加载语言失败导致编辑器加载失败-->
<!--这里加载的语言文件会覆盖你在配置项目里添加的语言类型，比如你在配置项目里配置的是英文，这里加载的中文，那最后就是中文-->
<script type="text/javascript" charset="utf-8"
	src="${basePath}ueditor/lang/zh-cn/zh-cn.js"></script>
    


  <div class="container-fluid">
	<div class="row-fluid">
		<div id="content" class="span10">
		    <div class="row" >
                                          消息名称：
            <input type="text" name="notice.noticeTitle" class="span4  input-medium box"  id="noticeTitle" value="${notice.noticeTitle}">
           </div>
           <div class="row">             
			 消息类型：			 
			  <select class="input-medium box" name="notice.noticetype.noticeTypeId" id="noticeType">
			    <c:if test="${typeList!=null}">
					      <c:forEach var="item" items="${typeList}">
					         <option value="${item.noticeTypeId}">${item.noticeTypeName}</option>
					      </c:forEach>
					    </c:if>		
			   </select>	                               
           </div>
           <div class="row ">
                                    是否置顶：
              <select class="input-medium" name="notice.weight" id="weight">
			   <option value="1">是</option>
			   <option value="2">否</option>			
			   </select>	
           </div>
           <div class="row">
                                    消息内容：
                                  
           </div>
           <div class="row-fluid">
           <script id="editor" type="text/plain" style="width:100%;height:400px;">
						${notice.noticeContent}
			</script>
          <script type="text/javascript" >
          
  			  UE.getEditor('editor');
 		   </script>
           </div>
           <div class="row" align="center">
             <button class="btn " type="submit" id="submit"><b>添加</b></button>
             <button class="btn" type="reset" id="reset"><b>重置</b></button>
           </div>
		</div>
    </div>
  </div>
<script>
$("#submit").click(function(){
	
	var noticeId = "${notice.noticeId}";
	var noticeType = $("#noticeType").val();
	var weight = $("#weight").val();
	var noticeTilte = $("#noticeTitle");
	var noticeContent = UE.getEditor('editor').getContent();
	var dataInfo =  "notice.noticeId="+noticeId + "&notice.noticeTitle=" + noticeTitle + "&notice.noticetyp.noticeTypeId="+ noticeType + "&notice.weight=" + weight +"&notice.noticeContent="+ noticeContent;
	
	$.ajax({
		
		type:'post',
		url:'${basePath}admin/modifyNotice.action',
		data:dataInfo,
		success:function(msg){
			loadHTML("${basePath}manageMessageAction.action");
		}
	});
})
</script>
