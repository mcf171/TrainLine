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
		checkCol: true,
		multiSelect: true,
		fullWithRows: true,
		cols: [
			{ title: '名字', sortable: true, width: 100, name: 'name' },	
			{ title: '课程', sortable: true, width: 100, name: 'course' },
			{ title: '是否置顶 ', sortable: true, width: 100, name: '' },
						{
				title: '操作',
				width: 280,
				renderer: function (val, item, row)
				{
					return '<input type="hidden" value="' + item.id + '" />' +
						'<a href="#">查看</a>&nbsp;&nbsp;' +
						'<a href="#">复制</a>&nbsp;&nbsp;' +
						(item.status != 0 ? '' : '<a href="#">修改</a>&nbsp;&nbsp;') +
						(item.status != 2 ? '' : '<a href="#">查看结果</a>&nbsp;&nbsp;') +
						(item.status != 2 ? '' : '<a href="#">回应</a>&nbsp;&nbsp;') +
						(item.status != 0 ? '' : '<a href="#">发布</a>&nbsp;&nbsp;') +
						(item.status >= 3 ? '' : '<a href="#">撤销</a>');
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
					    <span class="help-inline">
					      <b>基本过滤：</b>
					      <b>类型</b>
					    </span>
					    <select class="input-medium">
					    <option>类型1</option>
					    <option>类型2</option>
					    <option>类型3</option>
					    <option>类型4</option>
					    </select>
					    <b>编号</b>
					    <select class="input-medium">
					    <option>编号1</option>
					    <option>编号 2</option>
					    <option>编号3</option>
					    <option>编号4</option>				
					    </select>
					    <input type="text" class="span3 input-medium" placeholder="请输入关键字">
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
