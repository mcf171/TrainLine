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
		loadHTML("${basePath}getReciveEmail.action");
	});
</script>
<table>
        	<tr><td>收件人：</td><td><span class="input-xlarge uneditable-input">${mail.reciveUser.userName}</span></td></tr>
            <tr><td>主题：</td><td><span class="input-xlarge uneditable-input">${mail.mailTitle}</span></td></tr>
            <tr><td>正文：</td>
            <td>
            ${mail.mailContent }
            </td></tr>
            <tr><td></td><td><input type="submit" class="btn btn-info" value="返回" id="submit"/> </td></tr>
        </table>
        
     
