<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="content-type" content="text/html; charset=UTF-8" />
<link rel="stylesheet" type="text/css" href="styles/bootstrap.css" />
<link rel="stylesheet" type="text/css" href="styles/global.css" />
<link rel="stylesheet" href="styles/video-js.css" type="text/css" />
<link rel="stylesheet" href="styles/study.css" type="text/css"></link>
<link href="styles/font-awesome.css" rel="stylesheet"></link>
<script type="text/javascript" src="scripts/jquery.js"></script>
<script type="text/javascript" src="scripts/bootstrap.js"></script>
<script type="text/javascript" src="scripts/mousewheel.js"></script>
<script type="text/javascript" src="scripts/global.js"></script>
<script type="text/javascript" src="scripts/video.js"></script>
<script type="text/javascript" src="scripts/flexpaper_flash.js"></script>
<script type="text/javascript" src="scripts/study.js"></script>

<script type="text/javascript" charset="utf-8"
	src="${basePath}ueditor/ueditor.config.js"></script>
<script type="text/javascript" charset="utf-8"
	src="${basePath}ueditor/ueditor.all.min.js"> </script>
<!--建议手动加在语言，避免在ie下有时因为加载语言失败导致编辑器加载失败-->
<!--这里加载的语言文件会覆盖你在配置项目里添加的语言类型，比如你在配置项目里配置的是英文，这里加载的中文，那最后就是中文-->
<script type="text/javascript" charset="utf-8"
	src="${basePath}ueditor/lang/zh-cn/zh-cn.js"></script>


<title>学习中心</title>
</head>
<body style="background-color: #c0c0c0;">
	<input type="hidden" value="${catalogue.catalogueId}" id="catalogueId" />
	<div id="content">
		<c:forEach items="${catalogue.resource}" varStatus="index" var="item">
			<c:if test="${index.index%2==0 }">
				<div class="container-fluid top-margin">
					<div class="row-fluid">
						<div class="span6  offset1">
			</c:if>
			<c:if test="${index.index%2==1 }">
				<div class="span4">
			</c:if>
			<c:if test="${item.resourceType==1}">
				<a id="viewerPlaceHolder"
					style="width:100%;height:464px;display:block"></a>
				<script type="text/javascript">
	     		var fp = new FlexPaperViewer(	
						 'FlexPaperViewer',
						 'viewerPlaceHolder', { config : {
						 SwfFile : escape('${basePath}${item.resourcePath}'),
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
			</c:if>
			<c:if test="${item.resourceType==2}">
				<script language="JavaScript" type="text/javascript">
			AC_FL_RunContent(
				'codebase', 'http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0',
				'width', '100%',
				'height', '100%',
				'src', '${item.resourcePath}',
				'quality', 'high',
				'pluginspage', 'http://www.adobe.com/go/getflashplayer_cn',
				'align', 'middle',
				'play', 'true',
				'loop', 'true',
				'scale', 'showall',
				'wmode', 'transparent',
				'devicefont', 'false',
				'id', '${item.resourcePath}',
				'bgcolor', '#000000',
				'name', '${item.resourcePath}',
				'menu', 'true',
				'allowFullScreen', 'false',
				'allowScriptAccess','sameDomain',
				'movie', '${item.resourcePath}?loadedS=40&preloader_color=ff2500&preloader_background_color=B3B3B3&percentage_text_color=3299ff&ntname_txt=80&ntname_text_color=ff2500&ntnameS_txt=22&percentS_txt=60',
				'salign', ''
				); //end AC code
		</script>
			</c:if>
	</div>
	<c:if test="${index.index%2==1 }">
		</div>
		</div>
	</c:if>
	</c:forEach>




	<!-- 
     <div class="span4 ">
   
      <video id="1" class="video-js vjs-default-skin" controls preload="none" width="418" height="464"
	      poster="${basePath}mp4/1.png"
	      data-setup="{}">
        <source src="${basePath}mp4/1.mp4" type='video/mp4' />
      </video>

    </div>
           -->
	<div class="container-fluid top-margin">
		<div class="row-fluid">


			<div class="span6 offset1">
				<script id="editor" type="text/plain" style="width:100%;height:400px;">
						${catalogue.note.noteContent}
			</script>
				<div>
					<button type="button" class="btn pull-right" onclick="addNote()">保存</button>
				</div>
			</div>
			<div class="span4 ">
				<div class="accordion" id="accordion2">
					<c:forEach items="${course.catalogues}" var="item">

						<div class="accordion-group">
							<div class="accordion-heading"
								ondblclick="changeCatalogue(${course.courseId},${item.cataloguaWeight})">
								<a class="accordion-toggle" data-toggle="collapse"
									data-parent="#accordion2" href="#collapseOne">${item.catalogueName}
								</a>
							</div>
							<div id="collapseOne" class="accordion-body collapse in">
								<c:forEach items="${item.resource}" var="itemResource">
									<div class="accordion-inner">---${itemResource.resourceName}</div>
								</c:forEach>

							</div>
						</div>

					</c:forEach>
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
	</div>
</body>
</html>
