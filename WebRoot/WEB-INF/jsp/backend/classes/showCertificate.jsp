
<div class="container-fluid">
		<div class="row-fluid">
		<form action="#"  enctype="multipart/form-data" method="post" class="form-horizontal">
				<div class="control-group">
					<label class="control-label">证书名：</label>
					<div class="controls"><span class=" span2 uneditable-input" id="bookURL" style="width: 206px;">${credential.credentialName}</span></div>
				</div>
				<div class="control-group">
					<label class="control-label">证书有效期：</label>
					<div class="controls"><span class=" span2 uneditable-input" id="bookURL" style="width: 206px;">${credential.credentialvalidity}年</span></div>
				</div>
				<div class="control-group">
					<label class="control-label">证书发放单位：</label>
					<div class="controls"><span class=" span2 uneditable-input" id="bookURL" style="width: 206px;">${credential.credentiaGrantUnit}</span></div>
				</div>
				<div class="control-group">
					<label class="control-label">证书照片：</label>
					<div class="controls">
						<img alt="证书照片" src="${credential.credentiaPath}">
					</div>
				</div>
           		<div class="control-group">
					<div class="controls"><button type="button" class="btn" onclick="confirm()">确定</button></div>
					</div>
			</table>
			</form>
		</div>
		
</div>
<script>
	function confirm(){
		loadHTML("${basePath}admin/intoCertificatePage.action");
	}
</script>