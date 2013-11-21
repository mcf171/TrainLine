<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
	
	
	

    <link rel="stylesheet" href="${basePath}styles/edit.css" type="text/css"></link>
<link href="${basePath}styles/font-awesome.css" rel="stylesheet"></link>
    
	<script type="text/javascript" src="${basePath}scripts/library.js"></script>

<script src="${basePath}scripts/bootstrap-wysiwyg.js"></script>
<script src="${basePath}scripts/jquery.hotkeys.js"></script>
<script type="text/javascript" src="${basePath}scripts/flexpaper_flash.js"></script>
<script type="text/javascript" src="${basePath}scripts/edit.js"></script>

	<div class="row-fluid">
	
		<div class="row-fluid line-margin">
			<span class="help-inline">图书名称：</span>
			<input type="text" class=" span2" placeholder="请输入问卷名" />
		</div>
		
		<div class="row-fluid line-margin">
			<span class="help-inline">图书简介：</span>
			<input type="text" class=" span2" placeholder="请输入问卷名" />
		</div>
		<div class="row-fluid line-margin">
			<span class="help-inline">图书编号：</span>
			<input type="text" class=" span2" placeholder="请输入问卷名" />
		</div>
		<div class="row-fluid line-margin">
			<span class="help-inline">图书类别：</span>
			<select class="input-small ">
				<option>
					公开
				</option>
				<option>
					不公开
				</option>
			</select>
		</div>
		<div class="row-fluid line-margin">
			<span class="help-inline">是 否 置 顶:</span>
			<select class="input-small">
				<option>
					是
				</option>
				<option>
					否
				</option>
			</select>
		</div>
		<div class="row-fluid line-margin">
			<span class="help-inline">难 &nbsp; &nbsp; &nbsp; &nbsp;度：</span>
			<select class="input-small ">
				<option>
					一颗星
				</option>
				<option>
					二颗星
				</option>
				<option>
					三颗星
				</option>
				<option>
					四颗星
				</option>
				<option>
					五颗星
				</option>
			</select>
		</div>
		<div class="row-fluid line-margin">
			<span>问卷内容：</span><br/>
			<div class="span6 offset1">
		<div class="hero-unit">

	<div id="alerts"></div>
    <div class="btn-toolbar" data-role="editor-toolbar" data-target="#editor">
      <div class="btn-group">
        <a class="btn dropdown-toggle" data-toggle="dropdown" title="Font"><i class="icon-font"></i><b class="caret"></b></a>
          <ul class="dropdown-menu">
          </ul>
        </div>
      <div class="btn-group">
        <a class="btn dropdown-toggle" data-toggle="dropdown" title="Font Size"><i class="icon-text-height"></i>&nbsp;<b class="caret"></b></a>
          <ul class="dropdown-menu">
          <li><a data-edit="fontSize 5"><font size="5">Huge</font></a></li>
          <li><a data-edit="fontSize 3"><font size="3">Normal</font></a></li>
          <li><a data-edit="fontSize 1"><font size="1">Small</font></a></li>
          </ul>
      </div>
      <div class="btn-group">
        <a class="btn" data-edit="bold" title="Bold (Ctrl/Cmd+B)"><i class="icon-bold"></i></a>
        <a class="btn" data-edit="italic" title="Italic (Ctrl/Cmd+I)"><i class="icon-italic"></i></a>
        <a class="btn" data-edit="strikethrough" title="Strikethrough"><i class="icon-strikethrough"></i></a>
        <a class="btn" data-edit="underline" title="Underline (Ctrl/Cmd+U)"><i class="icon-underline"></i></a>
      </div>
      <div class="btn-group">
        <a class="btn" data-edit="insertunorderedlist" title="Bullet list"><i class="icon-list-ul"></i></a>
        <a class="btn" data-edit="insertorderedlist" title="Number list"><i class="icon-list-ol"></i></a>
        <a class="btn" data-edit="outdent" title="Reduce indent (Shift+Tab)"><i class="icon-indent-left"></i></a>
        <a class="btn" data-edit="indent" title="Indent (Tab)"><i class="icon-indent-right"></i></a>
      </div>
      <div class="btn-group">
        <a class="btn" data-edit="justifyleft" title="Align Left (Ctrl/Cmd+L)"><i class="icon-align-left"></i></a>
        <a class="btn" data-edit="justifycenter" title="Center (Ctrl/Cmd+E)"><i class="icon-align-center"></i></a>
        <a class="btn" data-edit="justifyright" title="Align Right (Ctrl/Cmd+R)"><i class="icon-align-right"></i></a>
        <a class="btn" data-edit="justifyfull" title="Justify (Ctrl/Cmd+J)"><i class="icon-align-justify"></i></a>
      </div>
      <div class="btn-group">
		  <a class="btn dropdown-toggle" data-toggle="dropdown" title="Hyperlink"><i class="icon-link"></i></a>
		    <div class="dropdown-menu input-append">
			    <input class="span2" placeholder="URL" type="text" data-edit="createLink"/>
			    <button class="btn" type="button">Add</button>
        </div>
        <a class="btn" data-edit="unlink" title="Remove Hyperlink"><i class="icon-cut"></i></a>

      </div>
      
      <div class="btn-group">
        <a class="btn" title="Insert picture (or just drag & drop)" id="pictureBtn"><i class="icon-picture"></i></a>
        <input type="file" data-role="magic-overlay" data-target="#pictureBtn" data-edit="insertImage" />
      </div>
      <div class="btn-group">
        <a class="btn" data-edit="undo" title="Undo (Ctrl/Cmd+Z)"><i class="icon-undo"></i></a>
        <a class="btn" data-edit="redo" title="Redo (Ctrl/Cmd+Y)"><i class="icon-repeat"></i></a>
      </div>
     
    </div>

    <div id="editor">
      Go ahead&hellip;
	    </div>
	  </div>
	</div>
		</div>
		<div class="row-fluid line-margin">
			<button class="btn span1 offset1 " onclick="window.location.href='questionnaire/addQuiz.html'">
				下一步
			</button>
			<button class="btn span1 offset1">
				重置
			</button>
		</div>