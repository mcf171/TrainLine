<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<link rel="stylesheet" type="text/css" href="${basePath}styles/mmgrid.css" />
<link rel="stylesheet" type="text/css" href="${basePath}styles/mmpaginator.css" />
<link rel="stylesheet" type="text/css" href="${basePath}themes/mmgrid/mmgrid.css" />
<link rel="stylesheet" type="text/css" href="${basePath}themes/mmgrid/mmpaginator.css" />
<script type="text/javascript" src="${basePath}scripts/mmgrid.js"></script>
<script type="text/javascript" src="${basePath}scripts/mmpaginator.js"></script>

<script type="text/javascript">
//<![CDATA[
$(document).ready(function ()
{
	$('#grid').mmGrid({
		//url: '/api/peixunrenyuan',
		items:[],
		height: 410,
		autoLoad: true,
		checkCol: true,
		multiSelect: true,
		fullWidthRows: true,
		cols: [
			{ title: '序号',align:'center', sortable: true, name: '' },	
			{ title: '人员',align:'center', sortable: true, name: '' },
			{ title: '类别', align:'center',sortable: true, name: '' },
			{ title: '人次',align:'center', sortable: true, name: '' },
			{ title: '培训类型',align:'center', align:'center', cols:
				[ 
				  {title:'国家部委组织的境内培训', sortable: true, name: ''},
				  {title:'总公司组织的境内培训', sortable: true, name: ''}
				  ] 
			},
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
			                <input type="text" class="span2" placeholder="请输入相应内容" />
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
	
