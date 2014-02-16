<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="content-type" content="text/html; charset=UTF-8" />
<link rel="stylesheet" type="text/css" href="${basePath}styles/bootstrap.css" />
<link rel="stylesheet" type="text/css" href="${basePath}styles/global.css" />
<link rel="stylesheet" type="text/css" href="${basePath}styles/backend.css" />
<script type="text/javascript" src="${basePath}scripts/jquery.js"></script>
<script type="text/javascript" src="${basePath}scripts/jstree.js"></script>
<script type="text/javascript" src="${basePath}scripts/bootstrap.js"></script>
<script type="text/javascript" src="${basePath}scripts/mousewheel.js"></script>
<script type="text/javascript" src="${basePath}scripts/global.js"></script>
<script type="text/javascript" src="${basePath}scripts/backend.js"></script>
<title>报表管理</title>
</head>
<body>
<div class="container-fluid">
	<div class="row-fluid">
		<div id="sidebar" class="span2 tree-container">
			<ul>
				<li class="jstree-open">
					<a href="#">培训报表</a>
					<ul>
						<li class="jstree-leaf"><a href="${basePath}admin/getPeiXunRenYuanBaoMingBiaoPage.action">培训人员报名表</a></li>
						<li class="jstree-leaf"><a href="${basePath}admin/getGangWeiPeiXunBanBeiAnBiaoPage.action">岗位培训办班备案表（报建设厅）</a></li>
						<li class="jstree-leaf"><a href="${basePath}admin/getNianDuPeiJiXunJiHuaShiShiQingKuang.action">年度培训计划及实施情况记录表</a></li>
						<li class="jstree-leaf"><a href="${basePath}admin/getNianDuPeiXunWanChengQingKuangPage.action">年度培训完成情况报表（报股份公司、国资委）</a></li>
						<li class="jstree-leaf"><a href="${basePath}admin/getPeiXunBanBaoMingPage.action">培训班报名表（如三类安全员）</a></li>
						<li class="jstree-leaf"><a href="${basePath}admin/getPeiXunRiChengAnPaiPage.action">培训日程安排表</a></li>
					</ul>
				</li>
				<li class="jstree-open">
					<a href="#">技师报表</a>
					<ul>
						<li class="jstree-leaf"><a href="${basePath}admin/getGaoJiJishuPingShenPage.action">高级技师评审表</a></li>
						<li class="jstree-leaf"><a href="${basePath}admin/getJiShiPingShenPage.action">技师评审表A4</a></li>
						<li class="jstree-leaf"><a href="${basePath}admin/getZhiYeJiNengJianDing.action">职业技能鉴定申请表</a></li>
					</ul>
				</li>
				<li class="jstree-open">
					<a href="#">五大员报表</a>
					<ul>
						<li class="jstree-leaf"><a href="${basePath}admin/getWuDaYuanBaoMingDengJiPage.action">五大员报名登记表（报建设厅）</a></li>
						<li class="jstree-leaf"><a href="${basePath}admin/getWuDayuanQuZhengKaoShengHuaMingCePage.action">五大员取证考生花名册（报建设厅）</a></li>
					</ul>
				</li>
				<li class="jstree-open">
					<a href="#">教师报表</a>
					<ul>
						<li class="jstree-leaf"><a href="${basePath}admin/getJiaoShiGongZuoQingKuangPage.action">教师工作情况表（报建设厅）</a></li>
						<li class="jstree-leaf"><a href="${basePath}admin/getJiaoShiXinXiDengJiPage.action">教师信息登记表（报建设厅）</a></li>
					</ul>
				</li>
			</ul>
		</div>
		<div id="content" class="span10">
		</div>
	</div>
</div>
</body>
</html>
