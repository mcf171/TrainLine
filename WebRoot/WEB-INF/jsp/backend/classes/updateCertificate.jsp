<script type="text/javascript">
<!--
$("#bookURLChoose").change(function(){
	var boj = $("#bookURL");
	boj.text($("#bookURLChoose").val());
	$("#hiddenBookURL").val($("#bookURLChoose").val());

});
//-->
</script>
<div class="container-fluid">
		<div class="row-fluid">
		<form action="${basePath}admin/updateCredential.action"  enctype="multipart/form-data" method="post" class="form-horizontal" target="hidden_frame">
		<input  type="hidden" value="${credential.credentialId}" name="credential.credentialId"/>
				<div class="control-group">
					<label class="control-label">证书名：</label>
					<div class="controls"><input type="text" name="credential.credentialName" required="required" value="${credential.credentialName}"/></div>
				</div>
				<div class="control-group">
					<label class="control-label">证书有效期：</label>
					<div class="controls"><input type="text" name="credential.credentialvalidity" required="required" value="${credential.credentialvalidity}"/>年</div>
				</div>
				<div class="control-group">
					<label class="control-label">证书发放单位：</label>
					<div class="controls"><input type="text" name="credential.credentiaGrantUnit" required="required" value="${credential.credentiaGrantUnit}"/></div>
				</div>
				<div class="control-group">
					<label class="control-label">证书URL：</label>
					<div class="controls">
					<span class=" span2 uneditable-input" id="bookURL" style="width: 206px;">${credential.credentiaPath}</span>
           			<input type="file" id="bookURLChoose" style="width: 65px;" name="image" class=" span2 " placeholder="请选择上传图书" accept="image/*" value="${credential.credentiaPath}" ></div>
				</div>
				<div class="control-group">
					<label class="control-label"></label>
					<div class="controls">
					<img alt="证书照片" src="${basePath}${credential.credentiaPath}"></div>
				</div>
           		<div class="control-group">
					<div class="controls"><button type="submit" class="btn">确定</button><button type="button" class="btn" onclick="goback()">返回</button></div>
					</div>
			</table>
			</form>
		</div>
		<script type="text/javascript">
<!--

function goback(){
	loadHTML("${basePath}admin/intoCertificatePage.action");
}
function callback(){
	
	loadHTML("${basePath}admin/intoCertificatePage.action");
}
//-->
</script>
<iframe name='hidden_frame' id="hidden_frame" style='display:none'></iframe>
</div>