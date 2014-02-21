
<link rel="stylesheet" type="text/css"
	href="${basePath}styles/mmgrid.css" />
<link rel="stylesheet" type="text/css"
	href="${basePath}styles/mmpaginator.css" />
<link rel="stylesheet" type="text/css"
	href="${basePath}themes/mmgrid/mmgrid.css" />
<link rel="stylesheet" type="text/css"
	href="${basePath}themes/mmgrid/mmpaginator.css" />

<script type="text/javascript" src="${basePath}scripts/mmgrid.js"></script>
<script type="text/javascript" src="${basePath}scripts/mmpaginator.js"></script>
<script type="text/javascript" src="${basePath}scripts/datepicker.js"></script>

<script type="text/javascript">
var mmg;
var credentialID;

$(document).ready(function ()
		{
		 $('#credentiaStartTimeIID').css('background', 'none').datepicker();
		
			mmg = $('#grid').mmGrid({
				url: '${basePath}admin/findAllCredential.action',
				autoLoad: true,
				root:'cList',
				fullWidthRows: true,
				cols: [
					{ title: '证书ID', sortable: true, name: 'credentialId' },	
					{ title: '证书名称', sortable: true, name: 'credentialName' },
					{ title: '证书期限', sortable: true, name: 'credentialvalidity' },
					{ title: '发放时间', sortable: true, name: 'credentiaStartTime1' },
					{ title: '授予单位', sortable: true, name: 'credentiaGrantUnit' },
					{
						title: '操作',
						width: 150,
						renderer: function (val, item, row)
						{
						return '<input type="hidden" value="' + item.credentialId + '" />'+
						 '<a href="javascript:void(0)" onclick="searchCertificate('+item.credentialId+')" class="btn">查看</a>'+
		        '<a href="javascript:void(0)" onclick="updateCertificate('+item.credentialId+')" role="button" class="btn" data-toggle="modal">修改</a>'+
		        '<a href="javascript:void(0)" onclick="deleteCertificate('+item.credentialId+')" role="button" class="btn" data-toggle="modal">删除</a>';
						}
					}
				],
				plugins: [
					$('#page').mmPaginator({})
				]
			});
			
			$("#sureDeleteBtn").click(function(){
			$("#myModal1").modal('hide');
				$.ajax({
					type : "POST",
					url : "${basePath}admin/deleteCredential.action",
					data:"credential.credentialId="+credentialID,
					dataType : "json",
					success : function(json) {
					mmg.load();
					},
					error : function() {
						alert("操作失败,请重试!");
						return false;
					}
				});
			});
			
			
			$("#searchBtn").click(function(){
			mmg.load({"credential.credentialId":$("#credentialIdIID").val(),
			"credential.credentialName":$("#credentialNameIID").val(),
			"credential.credentiaStartTime":$("#credentiaStartTimeIID").val(),
			"credential.credentiaGrantUnit":$("#credentiaGrantUnitIID").val()
			});
			});
		});	
			
		function searchCertificate(credentialId){
			
			loadHTML("${basePath}admin/showCredential.action?credential.credentialId="+credentialId);
		}	
		function updateCertificate (credentialId)
		{
			loadHTML("${basePath}admin/getUpadteCredentialPage.action?credential.credentialId="+credentialId);
		}
		function deleteCertificate(credentialId)
		{
			$("#myModal1").modal();
		 credentialID = credentialId;
		}
</script>
</head>

<body>
	<div class="container-fluid">
		<div class="row-fluid">
			<div id="content" class="span12">
				<div class="row-fluid " style="margin-left: -13px">
					<button class="btn" type="button"
						onclick="loadHTML('${basePath}admin/getAddCertificatePage.action')">
						<i class="icon-plus"></i>添加
					</button>
				</div>
				<div class="row word_style">
					<form id="condition" class="span12 form-inline no-margin"
						action="javascript:void(0)" method="post">
						<div class="row-fluid line-margin">
							<span class="help-inline"> <b>基本过滤：</b><br> <b>证书ID</b>
								<input type="text" id="credentialIdIID"
								class="span3 input-medium" style="width:100px;"
								placeholder="请输入证书ID"> <b>证书名称</b> <input type="text"
								id="credentialNameIID" class="span3 input-medium"
								style="width:170px;" placeholder="请输入证书名称"> <br> <b>发放时间</b>
								<input id="credentiaStartTimeIID" type="text" class="span2"
								placeholder="发行时间" data-date-format="yyyy-mm-dd" />
								<b>授予单位</b> <input type="text" id="credentiaGrantUnitIID"
								class="span3 input-medium" style="width:170px;"
								placeholder="请输入发行单位"> &nbsp;&nbsp;&nbsp;&nbsp;
								<button class="btn " id="searchBtn">
									<i class="icon-search"></i>查询
								</button> &nbsp;&nbsp;
								<button class="btn" type="reset"
									onclick="$('#condition')[0].reset();return false;">
									<i class="icon-remove"></i>清除
								</button>
							</span>
						</div>
					</form>
				</div>


				<div class="row word_style">
					<div class="row-fluid " style="margin-top:5px">
						<table id="grid"></table>
						<button type="submit" class="btn">
							<i class="icon-ok"></i>批量删除
						</button>
						<div id="page" class="pull-right"></div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div id="myModal0" class="modal hide fade" tabindex="-1" role="dialog"
		aria-labelledby="myModalLabel" aria-hidden="true">
		<div class="modal-header">
			<button type="button" class="close" data-dismiss="modal"
				aria-hidden="true">×</button>
			<h3 id="myModalLabel">修改</h3>
		</div>
		<div class="modal-body">
			<label>班级ID</label> <input type="text" id="classIID" disabled="true">
			<label>班级名称</label> <input type="text" id="classNameIID"> <label>状态</label>
			<select class="input-medium" style="width:70px;" id="classStatusIID">
				<option value="1">1</option>
				<option value="0">0</option>
			</select>
		</div>
		<div class="modal-footer">
			<button class="btn" data-dismiss="modal" aria-hidden="true">关闭</button>
			<button class="btn btn-primary" id="updateBtn">修改</button>
		</div>
	</div>

	<div id="myModal1" class="modal hide fade" tabindex="-1" role="dialog"
		aria-labelledby="myModalLabel" aria-hidden="true">
		<div class="modal-header">
			<button type="button" class="close" data-dismiss="modal"
				aria-hidden="true">×</button>
			<h3 id="myModalLabel">温馨提示</h3>
		</div>
		<div class="modal-body">
			<p>确定删除吗？</p>
		</div>
		<div class="modal-footer">
			<button class="btn" data-dismiss="modal" aria-hidden="true">关闭</button>
			<button class="btn btn-primary" id="sureDeleteBtn">确定</button>
		</div>
	</div>
</body>
</html>