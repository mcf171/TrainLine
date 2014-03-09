<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

  <link rel="stylesheet" type="text/css" href="${basePath}styles/mmgrid.css" />
<link rel="stylesheet" type="text/css" href="${basePath}styles/mmpaginator.css" />
<link rel="stylesheet" type="text/css"
	href="${basePath}themes/mmgrid/mmgrid.css" />
<link rel="stylesheet" type="text/css"
	href="${basePath}themes/mmgrid/mmpaginator.css" />
<link rel="stylesheet" type="text/css" href="${basePath}styles/report.css" />
<script type="text/javascript" src="${basePath}scripts/mmgrid.js"></script>
<script type="text/javascript" src="${basePath}scripts/mmpaginator.js"></script>

<!-- <div class="row-fluid line-margin">
	<div class="span12">
		<img src="gaojipingshenxiangxi.png" usemap="#Map2"/>
	</div>
</div> -->

<div class="row-fluid line-margin">
	<div class="span1"></div>
	<div class="span11">
		<h1 class="firstTitle">高级技师任职资格评审表</h1>
		<table class="NoBorderTable">
			<tr>
				<td class="borderNone tdWidth textCenter">姓</td>
				<td class="borderNone tdWidth textRight">名：</td>
				<td class="bottomBorder"><input type="text" /></td>
			</tr>
			<tr>
				<td class="borderNone textCenter">单</td>
				<td class="borderNone textRight">位：</td>
				<td class="bottomBorder"><input type="text" /></td>
			</tr>
			<tr>
				<td class="borderNone textRight">职&nbsp;业</td>
				<td class="borderNone textLeft">(工种)：</td>
				<td class="bottomBorder"><input type="text" /></td>
			</tr>
		</table>
		<br />
		<div class="div1">
			<span>中铁四局集团有限公司</span><br />
		</div>
		<div class="div2">
			<h2 class="textCenter">填表说明</h2>
			<br /> <span>一、本表用电脑打印，字体、字号、格式要按照统一标准填写。</span><br />
			<br /> <span>二、填表内容要真实、具体、不得弄虚作假。</span><br /> <br /> <span>三、本表一式二份，经局高技能人才评审委员会评审批准后，存入本人档案一份；集团公司一份。</span><br />
			<br />
		</div>
		<div class="div3">
			<table>
				<caption>高技能人才评价申报表</caption>
				<tr>
					<td>姓名</td>
					<td><input type="text" /></td>
					<td class="tdWidth">性别</td>
					<td><input type="text" /></td>
					<td>出生年月</td>
					<td><input type="text" /></td>
					<td rowspan="4" colspan="2"><textarea style="width: 91px; height: 47px;" draggable="false"></textarea></td>
				</tr>
				<tr>
					<td>籍贯</td>
					<td><input type="text" /></td>
					<td>最高学历（学位）</td>
					<td><input type="text" /></td>
					<td>政治面貌</td>
					<td><input type="text" /></td>
				</tr>
				<tr>
					<td rowspan="2">参加工作时间</td>
					<td rowspan="2"><input type="text" /></td>
					<td rowspan="2">本工种年龄</td>
					<td>累计：<input type="text" />年</td>
					<td rowspan="2">专业技术职称</td>
					<td rowspan="2"><input type="text" /></td>
				</tr>
				<tr>
					<td>连续：<input type="text" />年</td>
				</tr>
				<tr>
					<td rowspan="2">申报工种及等级</td>
					<td rowspan="2"><input type="text" /></td>
					<td rowspan="2">现工种及等级</td>
					<td rowspan="2"><input type="text" /></td>
					<td>身份证号码</td>
					<td><input type="text" /></td>
					<td rowspan="2">联系电话</td>
					<td rowspan="2"><input type="text" /></td>
				</tr>
				<tr>
					<td>原职业资格证号码</td>
					<td><input type="text" /></td>
				</tr>
				<tr>
					<td>个人学习、工作简历</td>
					<td colspan="7">
	<textarea style="margin: 0px 0px 10px; width: 711px; height: 71px;"></textarea>
	</td>
				</tr>
				<tr>
					<td rowspan="3">子、分公司人力资源部门意见</td>
					<td colspan="7" class="borderNone">
				<textarea style="margin: 0px 0px 10px; height: 35px; width: 717px;"></textarea>
</td>
				</tr>
				<tr>
					<td colspan="7" class="gaizhang">（公章）</td>
				</tr>
				<tr>
					<td colspan="7" class="bottomBorder textCenter"><input
						type="text">年 <input type="text">月<input
						type="text">日</td>
				</tr>
				<tr>
					<td rowspan="3">集团公司人力资源部门审查意见</td>
					<td colspan="7" class="borderNone">
	<textarea style="margin: 0px 0px 10px; width: 711px; height: 71px;"></textarea>
</td>
				</tr>
				<tr>
					<td colspan="7" class="gaizhang">（公章）</td>
				</tr>
				<tr>
					<td colspan="7" class="bottomBorder textCenter"><input
						type="text">年 <input type="text">月<input type="text">日</td>
				</tr>
			</table>
		</div>
	</div>
</div>
<style>
<!--
input[type="text"], input[type="password"], input[type="datetime"], input[type="datetime-local"], input[type="time"], input[type="week"], input[type="number"], input[type="email"], input[type="url"], input[type="search"], input[type="tel"], input[type="color"], .uneditable-input {
    border: medium none;
    box-shadow: none;
    width: 6%;
}
-->
</style>

