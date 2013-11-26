<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
	
    <link rel="stylesheet" type="text/css" href="${basePath}styles/mmgrid.css" />
    <link rel="stylesheet" type="text/css" href="${basePath}styles/mmpaginator.css" />
    <link rel="stylesheet" type="text/css" href="${basePath}themes/mmgrid/mmgrid.css" />
    <link rel="stylesheet" type="text/css" href="${basePath}themes/mmgrid/mmpaginator.css" />
    
    <script type="text/javascript" src="${basePath}scripts/mmgrid.js"></script>
    <script type="text/javascript" src="${basePath}scripts/mmpaginator.js"></script>
    <script type="text/javascript" src="${basePath}scripts/datepicker.js"></script>

	<script type="text/javascript">
//<![CDATA[
$(document).ready(function ()
{
	$('#time-to').css('background', 'none').datepicker();
	$('#time-from').css('background', 'none').datepicker();

	$('#grid').mmGrid({
		url: '/api/questionnaire',
		height: 410,
		autoLoad: true,
		multiSelect: true,
		fullWithRows: true,
		cols: [
			   { title: '主题名称', sortable: true,  name: 'themeName' },
				{ title: '主题编号', sortable: true, name: 'themeId' },
				{
					title: '操作',
					width: 100,
					renderer: function (val, item, row)
					{
						return '<a href="#?book.bookId=' +item.bookId + '" target="_blank">修改</a> ' + '&nbsp' + '<a href="#?book.bookId=' +item.bookId + '" target="_blank">删除</a> ';
					}
				}
		],
		plugins: [
			$('#page').mmPaginator({})
		]
	});
});
//]]>
</script>
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
<div class="container-fluid">
	<div class="row-fluid">
	<div id="content" class="span10">
		   	 <div class="row-fluid " style="margin-left: -13px" >
              <button class="btn" type="button" onclick="loadHTML('classes/addClass1.html')"><i class="icon-plus"></i>添加</button>                
             </div>
           <div class="row word_style"> 
             <div class="row-fluid line-margin">
		               			<span class="help-inline"><b>基本过滤：</b><b>主题名称</b></span>
		               			<input 
				                 	type="text"
									id="time-from"
									class="span2"
									placeholder="主题名称"
			                     />
			                     <span class="help-inline"><b>主题编号</b></span>
			                     <input 
				                 	type="text"
									id="time-to"
									class="span2"
									placeholder="主题编号"
			                     />
			                     <button class="btn "><i class="icon-search"></i>查询</button>
			                     <button class="btn" type="reset"><i class="icon-remove"></i>清除</button>
		               		</div>                          
           </div>
          <div class="row word_style">
             <div class="row-fluid " style="margin-top:5px">	       
		       <table id="grid"></table>
		      <button type="submit" class="btn"><i class="icon-ok"></i>批量删除</button>
		       <div id="page" class="pull-right"></div>
             </div>
         </div>			
		</div>
						</div>
					</div>

</body>
</html>
