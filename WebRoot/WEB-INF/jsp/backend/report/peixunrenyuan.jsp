<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<link rel="stylesheet" type="text/css" href="${basePath}styles/mmgrid.css" />
<link rel="stylesheet" type="text/css" href="${basePath}styles/mmpaginator.css" />
<link rel="stylesheet" type="text/css" href="${basePath}themes/mmgrid/mmgrid.css" />
<link rel="stylesheet" type="text/css" href="${basePath}themes/mmgrid/mmpaginator.css" />
<script type="text/javascript" src="${basePath}scripts/mmgrid.js"></script>
<script type="text/javascript" src="${basePath}scripts/mmpaginator.js"></script>
<!-- 
<div class="row-fluid line-margin">
	<div class="span12">
		<img src="report/peixunrenyuan.png" usemap="#Map2"/>
	</div>
</div> -->

<script type="text/javascript">
//<![CDATA[
$(document).ready(function ()
{
	$('#grid').mmGrid({
		url: '/api/peixunrenyuan',
		height: 410,
		root:'list',
		autoLoad: true,
		checkCol: true,
		multiSelect: true,
		fullWithRows: true,
		cols: [
			{ title: '序号', sortable: true, width: 100, name: '' },	
			{ title: '工作单位', sortable: true, width: 100, name: '' },
			{ title: '姓名', sortable: true, width: 110, name: '' },
			{ title: '身份证号码', sortable: true, width: 110, name: '' },
			{ title: '文化程度', sortable: true, width: 110, name: '' },
			{ title: '参加工作', sortable: true, width: 110, name: '' },
			{ title: '本职业（工种）年限', sortable: true, width: 200, name: '' }
		],
		plugins: [
			$('#page').mmPaginator({})
		]
	});
});
//]]>
</script>


<div class="row-fluid">
	    <div class="row-fluid">
            	<div class="span12">
            		<form id="condition" class="span12 form-inline no-margin">
            			<div class="row-fluid line-margin">
			               <span class="help-inline"><b>基本过滤：</b>类型：</span>
			               <select class="input-small">
				               <option>所有</option>
				               <option></option>
				               <option></option>
				               <option></option>
				               <option></option>
				               <option></option>
			                </select>
			                <span class="help-inline">编号：</span>
			                <select class="input-small">
				               <option></option>
				               <option></option>
				               <option></option>
				               <option></option>
			                </select>
			                <input type="text" class="span2" placeholder="请输入内容" />
		               </div>
		               <div>
		               		<div class="row-fluid line-margin"> 
		               			<div class="span7">
		               			</div>
		               			<div class="span5">
			                     	<button class="btn "><i class="icon-search"></i>查询</button>
			                     	<button class="btn" type="reset"><i class="icon-remove"></i>清除条件</button>
		               			</div>
		               		</div>
		               		<div class="row-fluid">
	                             <div class="span12">
								    <table id="grid"></table>
								 <div id="page" class="pull-right"></div>
						    	</div>
                            </div>
		               </div>
		            </form>
            	</div>
            </div>
</div>
	
