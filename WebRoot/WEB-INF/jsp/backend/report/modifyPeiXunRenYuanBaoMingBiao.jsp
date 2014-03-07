<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<form action="${basePaht}admin/modifyPeiXunRenYuanBaoMingBiao.action" class="form-horizontal" target="hidden_frame">
<input type="hidden" name="peiXunRenYuanBaoMingBiao.id" class="span4  input-medium box"  id="noticeTitle" value="${peiXunRenYuanBaoMingBiao.id}">
  <div class="container-fluid">
	<div class="row-fluid">
		<div id="content" class="span10">
		    <div class="row"  class="control-group"><label class="control-label" >工作单位：</label><div class="controls">
	            <input type="text" name="peiXunRenYuanBaoMingBiao.workPlace" class="span4  input-medium box"  id="noticeTitle" value="${peiXunRenYuanBaoMingBiao.workPlace}">
	            </div>
           </div>
           <div class="row"  class="control-group"><label class="control-label" >姓名：</label><div class="controls">
            <input type="text" name="peiXunRenYuanBaoMingBiao.name" class="span4  input-medium box"  id="noticeTitle" value="${peiXunRenYuanBaoMingBiao.name}">
            </div>
           </div>
           <div class="row"  class="control-group"><label class="control-label" >身份证号码：</label><div class="controls">
            <input type="text" name="peiXunRenYuanBaoMingBiao.idCard" class="span4  input-medium box"  id="idCard" value="${peiXunRenYuanBaoMingBiao.idCard}">
            </div>
           </div>
           <div class="row"  class="control-group"><label class="control-label" >文化程度：</label><div class="controls">
            <input type="text" name="peiXunRenYuanBaoMingBiao.education" class="span4  input-medium box"  id="education" value="${peiXunRenYuanBaoMingBiao.education}">
            </div>
           </div>
           <div class="row"  class="control-group"><label class="control-label" >参加工作：</label><div class="controls">
            <input type="text" name="peiXunRenYuanBaoMingBiao.workHistory" class="span4  input-medium box"  id="workHistory" value="${peiXunRenYuanBaoMingBiao.workHistory}">
            </div>
           </div>
           <div class="row"  class="control-group"><label class="control-label" >本职业（工种）年限：</label><div class="controls">
            <input type="text" name="peiXunRenYuanBaoMingBiao.workTime" class="span4  input-medium box"  id="workTime" value="${peiXunRenYuanBaoMingBiao.workTime}">
            </div>
           </div>
           <div class="row"  class="control-group"><label class="control-label" >鉴定工种：</label><div class="controls">
            <input type="text" name="peiXunRenYuanBaoMingBiao.identifyKinds" class="span4  input-medium box"  id="identifyKinds" value="${peiXunRenYuanBaoMingBiao.identifyKinds}">
            </div>
           </div>
           <div class="row"  class="control-group"><label class="control-label" >鉴定等级：</label><div class="controls">
            <input type="text" name="peiXunRenYuanBaoMingBiao.identifyLevel" class="span4  input-medium box"  id="identifyLevel" value="${peiXunRenYuanBaoMingBiao.identifyLevel}">
            </div>
           </div>
           <div class="row"  class="control-group"><label class="control-label" >原证书号码：</label><div class="controls">
            <input type="text" name="peiXunRenYuanBaoMingBiao.oldNumber" class="span4  input-medium box"  id="oldNumber" value="${peiXunRenYuanBaoMingBiao.oldNumber}"></div>
           </div>
           <div class="row"  class="control-group"><label class="control-label" >户口所在地：</label><div class="controls">
            <input type="text" name="peiXunRenYuanBaoMingBiao.homePlace" class="span4  input-medium box"  id="homePlace" value="${peiXunRenYuanBaoMingBiao.homePlace}"></div>
           </div>
           <div class="row"  class="control-group"><label class="control-label" >缴纳社保所在地：</label><div class="controls">
            <input type="text" name="peiXunRenYuanBaoMingBiao.moneyPlace" class="span4  input-medium box"  id="moneyPlace" value="${peiXunRenYuanBaoMingBiao.moneyPlace}"></div>
           </div>
           <div class="row"  class="control-group"><label class="control-label" >联系电话：</label><div class="controls">
            <input type="text" name="peiXunRenYuanBaoMingBiao.phone" class="span4  input-medium box"  id="phone" value="${peiXunRenYuanBaoMingBiao.phone}"></div>
           </div>
           <div class="row"  class="control-group"><label class="control-label" >备注：</label><div class="controls">
            <input type="text" name="peiXunRenYuanBaoMingBiao.postScript" class="span4  input-medium box"  id="postScript" value="${peiXunRenYuanBaoMingBiao.postScript}"></div>
           </div>
           
           <div class="row" align="center">
             <button class="btn " type="submit" id="submit"><b>修改</b></button>
             <button class="btn" type="reset" id="reset"><b>重置</b></button>
           </div>
		</div>
    </div>
  </div>
  
  </form>
  <script type="text/javascript">
<!--
function callback(){
	
	loadHTML("${basePath}admin/getPeiXunRenYuanBaoMingBiaoPage.action");
}
//-->
</script>
<iframe name='hidden_frame' id="hidden_frame" style='display:none'></iframe>
