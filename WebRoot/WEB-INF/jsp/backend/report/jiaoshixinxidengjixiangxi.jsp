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

<div class="row-fluid line-margin">
	<div class="span1"></div>
	<div class="span11">
		<table>
			<caption class="caption">
				<b>教师信息登记表</b>
			</caption>
			<tr>
				<td>姓名</td>
				<td><input type="text" />
				</td>
				<td class="tdWidth">性别</td>
				<td><input type="text" />
				</td>
				<td>出生年月</td>
				<td><input type="text" />
				</td>
				<td rowspan="4">照片<input type="text"
					/></td>
			</tr>
			<tr>
				<td>学历（学校）</td>
				<td><input type="text" />
				</td>
				<td>职称</td>
				<td><input type="text" />
				</td>
				<td>政治面貌</td>
				<td><input type="text" />
				</td>
			</tr>
			<tr>
				<td>毕业院校（专业）</td>
				<td colspan="3"><input type="text"
					/></td>
				<td>参加工作时间</td>
				<td><input type="text" />
				</td>
			</tr>
			<tr>
				<td>身份证号码</td>
				<td colspan="3"><input type="text"
					/></td>
				<td>健康状况</td>
				<td><input type="text" />
				</td>
			</tr>
			<tr>
				<td>工作单位</td>
				<td colspan="3"><input type="text"
					/></td>
				<td colspan="2">专业年限</td>
				<td><input type="text" />
				</td>
			</tr>
			<tr>
				<td rowspan="2">个人联系方式</td>
				<td>固定电话</td>
				<td colspan="2"><input type="text"
					/></td>
				<td>手机</td>
				<td colspan="2"><input type="text"
					/></td>
			</tr>
			<tr>
				<td>电子邮箱</td>
				<td colspan="5"><input type="text"
					/></td>
			</tr>
			<tr>
				<td>工作简历</td>
				<td colspan="6"><input type="text"
					/></td>
			</tr>
			<tr>
				<td>教学及学术特长</td>
				<td colspan="6"><input type="text"
					/></td>
			</tr>
			<tr>
				<td>主讲课程</td>
				<td colspan="6"><input type="text"
					/></td>
			</tr>
			<tr>
				<td colspan="7" rowspan="10"><textarea>毕业证及称职证书扫描件</textarea>
				</td>
			</tr>
		</table>
		<div>&nbsp;</div>
	</div>
</div>
