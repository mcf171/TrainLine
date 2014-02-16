<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<link rel="stylesheet" type="text/css" href="${basePath}styles/mmgrid.css" />
<link rel="stylesheet" type="text/css" href="${basePath}styles/mmpaginator.css" />
<link rel="stylesheet" type="text/css"
	href="${basePath}themes/mmgrid/mmgrid.css" />
<link rel="stylesheet" type="text/css"
	href="${basePath}themes/mmgrid/mmpaginator.css" />
<link rel="stylesheet" type="text/css" href="${basePath}styles/report.css" />
<script type="text/javascript" src="${basePath}scripts/mmgrid.js"></script>
<script type="text/javascript" src="${basePath}scripts/mmpaginator.js"></script>


<div class="row-fluid line-margin">
	<!-- <div class="span12">
		<img src="zhiyejinengjiandingxiangxi.png" usemap="#Map2"/>
	</div> -->
	<div class="span1"></div>
	<div class="span11">
		<table>
			<caption style="font-size: 20px">
				<b>职业技能鉴定申请表</b>
			</caption>
			<tr>
				<td>姓名</td>
				<td><input type="text" style="border:none;box-shadow:none;">
				</td>
				<td>性别</td>
				<td><input type="text" style="border:none;box-shadow:none;">
				</td>
				<td class="tdWidth">出生年月</td>
				<td><input type="text" style="border:none;box-shadow:none;">
				</td>
				<td rowspan="5" colspan="2"><input type="text"
					style="border:none;box-shadow:none;"></td>
			</tr>
			<tr>
				<td>文化程度</td>
				<td><input type="text" style="border:none;box-shadow:none;">
				</td>
				<td>民族</td>
				<td><input type="text" style="border:none;box-shadow:none;">
				</td>
				<td>本人身份</td>
				<td><input type="text" style="border:none;box-shadow:none;">
				</td>
			</tr>
			<tr>
				<td>身份证号码</td>
				<td colspan="5"><input type="text"
					style="border:none;box-shadow:none;"></td>
			</tr>
			<tr>
				<td>工作单位</td>
				<td colspan="2"><input type="text"
					style="border:none;box-shadow:none;"></td>
				<td>电话</td>
				<td colspan="2"><input type="text"
					style="border:none;box-shadow:none;"></td>
			</tr>
			<tr>
				<td>单位地址</td>
				<td colspan="2"><input type="text"
					style="border:none;box-shadow:none;"></td>
				<td>邮编</td>
				<td colspan="2"><input type="text"
					style="border:none;box-shadow:none;"></td>
			</tr>
			<tr>
				<td>参加工作时间</td>
				<td colspan="3"><input type="text"
					style="border:none;box-shadow:none;"></td>
				<td>原工种</td>
				<td colspan="3"><input type="text"
					style="border:none;box-shadow:none;"></td>
			</tr>
			<tr>
				<td>原技术等级</td>
				<td colspan="3"><input type="text"
					style="border:none;box-shadow:none;"></td>
				<td colspan="2">原证书编号</td>
				<td colspan="2"><input type="text"
					style="border:none;box-shadow:none;"></td>
			</tr>
			<tr>
				<td>申报工种</td>
				<td><input type="text" style="border:none;box-shadow:none;">
				</td>
				<td>申报工种年龄</td>
				<td colspan="2"><input type="text"
					style="border:none;box-shadow:none;"></td>
				<td>申报等级</td>
				<td colspan="2"><input type="text"
					style="border:none;box-shadow:none;"></td>
			</tr>
			<tr>
				<td>个人工作简历</td>
				<td colspan="7"><input type="text"
					style="border:none;box-shadow:none;"></td>
			</tr>
			<tr>
				<td rowspan="8">鉴定机构</td>
				<td>鉴定工种</td>
				<td colspan="2"><input type="text"
					style="border:none;box-shadow:none;"></td>
				<td rowspan="5">单位或培训机构</td>
				<td rowspan="3" colspan="3"><textarea
						style="border:none;box-shadow:none;width:90%;height:90%"></textarea>
				</td>
			</tr>
			<tr>
				<td>鉴定等级</td>
				<td colspan="2"><input type="text"
					style="border:none;box-shadow:none;"></td>
			</tr>
			<tr>
				<td>理论成绩</td>
				<td colspan="2"><input type="text"
					style="border:none;box-shadow:none;"></td>
			</tr>
			<tr>
				<td>实作成绩</td>
				<td colspan="2"><input type="text"
					style="border:none;box-shadow:none;"></td>
				<td colspan="3" style="border:none;text-align:center">盖章</td>
			</tr>
			<tr>
				<td>答辩成绩</td>
				<td colspan="2"><input type="text"
					style="border:none;box-shadow:none;"></td>
				<td colspan="3"><input type="text"
					style="border:none;box-shadow:none;width:60px">年<input
					type="text" style="border:none;box-shadow:none;width:30px;">月<input
					type="text" style="border:none;box-shadow:none;width:30px;">日
				</td>
			</tr>
			<tr>
				<td rowspan="1" colspan="3" style="border:none"><textarea
						style="border:none;box-shadow:none;width:90%;height:90%"></textarea>
				</td>
				<td rowspan="3">职业技能鉴定部门</td>
				<td class="tdWidth" style="border: none">证书编号:</td>
				<td colspan="2" style="border: none"><textarea
						style="border:none;box-shadow:none;width:90%;height:90%"></textarea>
				</td>
			</tr>
			<tr>
				<td colspan="3" style="border:none;text-align:center">盖章</td>
				<td colspan="3" style="border:none;text-align:center">盖章</td>
			</tr>
			<tr>
				<td colspan="3" style="text-align:right;border-top: none"><input type="text"
					style="border:none;box-shadow:none;width:30px;">年 <input
					type="text" style="border:none;box-shadow:none;width:20px;">月
					<input type="text" style="border:none;box-shadow:none;width:20px;">日
				</td>
				<td colspan="3" style="text-align:right;border-top: none"><input type="text"
					style="border:none;box-shadow:none;width:30px;">年 <input
					type="text" style="border:none;box-shadow:none;width:20px;">月
					<input type="text" style="border:none;box-shadow:none;width:20px;">日
				</td>
			</tr>
			<tr>
				<td>填表单位:</td>
				<td colspan="3"><input type="text"
					style="border:none;box-shadow:none;"></td>
				<td>填表人：</td>
				<td><input type="text" style="border:none;box-shadow:none;">
				</td>
				<td>日期：</td>
				<td><input type="text"
					style="border:none;box-shadow:none;width:30px;">年 <input
					type="text" style="border:none;box-shadow:none;width:15px;">月
				</td>
			</tr>
		</table>
	</div>
</div>

	
	
	
