<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="content-type" content="text/html; charset=UTF-8" />
<link rel="stylesheet" type="text/css" href="styles/bootstrap.css" />
<link rel="stylesheet" type="text/css" href="styles/global.css" />
<link rel="stylesheet" href="styles/video-js.css" type="text/css"/>
<link rel="stylesheet" href="styles/study.css" type="text/css"></link>
<link href="styles/font-awesome.css" rel="stylesheet"></link>
<script type="text/javascript" src="scripts/jquery.js"></script>
<script type="text/javascript" src="scripts/bootstrap.js"></script>
<script type="text/javascript" src="scripts/mousewheel.js"></script>
<script type="text/javascript" src="scripts/global.js"></script>
<script type="text/javascript" src="scripts/video.js"></script>
<script type="text/javascript" src="scripts/flexpaper_flash.js"></script>

<script type="text/javascript" charset="utf-8" src="${basePath}ueditor/ueditor.config.js"></script>
    <script type="text/javascript" charset="utf-8" src="${basePath}ueditor/ueditor.all.min.js"> </script>
    <!--建议手动加在语言，避免在ie下有时因为加载语言失败导致编辑器加载失败-->
    <!--这里加载的语言文件会覆盖你在配置项目里添加的语言类型，比如你在配置项目里配置的是英文，这里加载的中文，那最后就是中文-->
    <script type="text/javascript" charset="utf-8" src="${basePath}ueditor/lang/zh-cn/zh-cn.js"></script>


<title>学习中心</title>
</head>
<body style="background-color: #c0c0c0;">
<div class="container-fluid top-margin">
  <div class="row-fluid">
    
    <div class="span6  offset1">
    <a id="viewerPlaceHolder" style="width:100%;height:464px;display:block"></a>
    	    <script type="text/javascript">
	     		var fp = new FlexPaperViewer(	
						 'FlexPaperViewer',
						 'viewerPlaceHolder', { config : {
						 SwfFile : escape('${basePath}${book.bookURL}'),
						 Scale : 0.6, 
						 ZoomTransition : 'easeOut',
						 ZoomTime : 0.5,
						 ZoomInterval : 0.2,
						 FitPageOnLoad : true,
						 FitWidthOnLoad : false,
						 PrintEnabled : false,
						 FullScreenAsMaxWindow : false,
						 ProgressiveLoading : true,
						 MinZoomSize : 0.2,
						 MaxZoomSize : 5,
						 SearchMatchAll : false,
						 InitViewMode : 'Portrait',
						 
						 ViewModeToolsVisible : true,
						 ZoomToolsVisible : true,
						 NavToolsVisible : true,
						 CursorToolsVisible : true,
						 SearchToolsVisible : true,
  						
  						 localeChain: 'zh_CN'
						 }});
	        </script>
     </div>
     <div class="span4 ">
      <video id="1" class="video-js vjs-default-skin" controls preload="none" width="418" height="464"
	      poster="${basePath}mp4/1.png"
	      data-setup="{}">
        <source src="${basePath}mp4/1.mp4" type='video/mp4' />
      </video>
    </div>
  </div>
    </div>
    <div class="container-fluid top-margin">
  <div class="row-fluid">
  

	<div class="span6 offset1">
		<script id="editor" type="text/plain" style="width:100%;height:400px;"></script>
		<div><button type="button" class="btn pull-right" >保存</button></div>
	  </div>
	
	<div class="span4 ">
    <div class="accordion" id="accordion2">
      <div class="accordion-group">
        <div class="accordion-heading"> <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="#collapseOne"> 第一章 </a> </div>
        <div id="collapseOne" class="accordion-body collapse in">
          <div class="accordion-inner">---生或死 </div>
        </div>
      </div>
      <div class="accordion-group">
        <div class="accordion-heading"> <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="#collapseTwo"> 第二章 </a> </div>
        <div id="collapseTwo" class="accordion-body collapse">
          <div class="accordion-inner"> ---生存的意义 </div>
        </div>
      </div>
    </div>
  </div>
	</div>
</div>
<script type="text/javascript">

    //实例化编辑器
    //建议使用工厂方法getEditor创建和引用编辑器实例，如果在某个闭包下引用该编辑器，直接调用UE.getEditor('editor')就能拿到相关的实例
    UE.getEditor('editor');
    </script>
</body>
</html>
