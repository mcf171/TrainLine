<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
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

	<script>
		$("#submit").click(function(){
			
			reciveUserName = $("#reciveUserName").val();
			mailTitle = $("#mailTitle").val();
			mailContent = UE.getEditor('editor').getContent();
			dataInfo = "reviceUser.userName=" + reciveUserName + "&mail.mailTitle=" + mailTitle + "&mail.mailContent=" + mailContent;
			
			$.ajax({
				
				type:"post",
				url:"${basePath}addMail.action",
				data:dataInfo,
				success:function(msg){
					loadHTML("${basePath}getSendEmail.action");
				}
			});
		});
		$(document).ready(function(){
			
			$("#reciveUserName").change(function(){
				
				var reciveUserName = $("#reciveUserName").val();
				if(reciveUserName!=""){
					dataInfo = "user.userName="+reciveUserName;
					$.ajax({
						
						type:"post",
						url:"${basePath}checkUser.action",
						data:dataInfo,
						success:function(msg){
							
							if(msg.flag){
								
								$("#exsits").fadeIn();
								$("#none").fadeOut();
							}else{
								$("#none").fadeIn();
								$("#exsits").fadeOut();
							}
						}
					});
				}
				
			});
		});
	</script>
<table>
        	<tr><td>收件人：</td><td><input type="text" class="input-xxlarge" id="reciveUserName"/> <span class="label label-important hide"  id="none">用户名不存在</span><span class="label label-success hide" id="exsits">可以发送</span></td></tr>
            <tr><td>主题：</td><td><input type="text" class="input-xxlarge" id="mailTitle"/></td></tr>
            <tr><td>正文：</td>
            <td>
            <script id="editor" type="text/plain" style="width:90%;height:400px;">
						${catalogue.note.noteContent}
			</script>
            </td></tr>
            <tr><td></td><td><input type="submit" class="btn btn-info" value="发送" id="submit"/> <input type="reset" class="btn btn-info" value="重置"/></td></tr>
        </table>
        
        <script type="text/javascript">

    //实例化编辑器
    //建议使用工厂方法getEditor创建和引用编辑器实例，如果在某个闭包下引用该编辑器，直接调用UE.getEditor('editor')就能拿到相关的实例
    UE.getEditor('editor');
    </script>
