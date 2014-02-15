<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    
    <title>Email</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->

  </head>
  <link rel="stylesheet" type="text/css" href="${basePath}styles/bootstrap.css" />
<link rel="stylesheet" type="text/css" href="${basePath}styles/global.css" />
<script type="text/javascript" src="${basePath}scripts/jquery.js"></script>
<script type="text/javascript" src="${basePath}scripts/bootstrap.js"></script>
<script type="text/javascript" src="${basePath}scripts/global.js"></script>

<div class="row-fluid line-margin text-center">
	<div class="span12">
	<img src="${basePath}email/shoujian.png" usemap="#Map2"/>
		 <map name="Map2" id="Map2">
           <area shape="rect" coords="22,81,71,97" href="${basePath}getWriteEmailPage.action" />
          <area shape="rect" coords="24,109,74,128" href="${basePath}getCollectionPage.action" />
          <area shape="rect" coords="23,141,81,158" href="${basePath}getRelationShipaPage.action" />
          <area shape="rect" coords="23,190,75,207" href="${basePath}getCollectionPage.action" />
        </map>
	</div>
</div>
	
</html>
