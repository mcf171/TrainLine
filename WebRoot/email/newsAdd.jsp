<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

    <script type="text/javascript" src="../jquery.js"></script>
    <script type="text/javascript" charset="utf-8"
	src="../ueditor/ueditor.config.js"></script>
<script type="text/javascript" charset="utf-8"
	src="../ueditor/ueditor.all.min.js"> </script>
<!--建议手动加在语言，避免在ie下有时因为加载语言失败导致编辑器加载失败-->
<!--这里加载的语言文件会覆盖你在配置项目里添加的语言类型，比如你在配置项目里配置的是英文，这里加载的中文，那最后就是中文-->
<script type="text/javascript" charset="utf-8"
	src="../ueditor/lang/zh-cn/zh-cn.js"></script>
    
<input type="hidden" value="9" id="catalogueId" />
	<div id="content">
		




	<!-- 
     <div class="span4 ">
   
      <video id="1" class="video-js vjs-default-skin" controls preload="none" width="418" height="464"
	      poster="mp4/1.png"
	      data-setup="{}">
        <source src="mp4/1.mp4" type='video/mp4' />
      </video>

    </div>
           -->
	<div class="container-fluid top-margin">
		<div class="row-fluid">


			<div class="span6 offset1">
				<script id="editor" type="text/plain" style="width:100%;height:400px;">
						
			</script>
				<div>
					<button type="button" class="btn pull-right" onclick="addNote()">保存</button>
				</div>
			</div>
			<div class="span4 ">
				<div class="accordion" id="accordion2">
					

						<div class="accordion-group">
							<div class="accordion-heading"
								ondblclick="changeCatalogue(3,)">
								<a class="accordion-toggle" data-toggle="collapse"
									data-parent="#accordion2" href="#collapseOne">数据备份很方便
								</a>
							</div>
							<div id="collapseOne" class="accordion-body collapse in">
								

							</div>
						</div>

					

						<div class="accordion-group">
							<div class="accordion-heading"
								ondblclick="changeCatalogue(3,)">
								<a class="accordion-toggle" data-toggle="collapse"
									data-parent="#accordion2" href="#collapseOne">大概如果
								</a>
							</div>
							<div id="collapseOne" class="accordion-body collapse in">
								

							</div>
						</div>

					
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
