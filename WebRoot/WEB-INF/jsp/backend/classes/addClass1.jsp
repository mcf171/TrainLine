<link rel="stylesheet" type="text/css" href="${basePath}styles/mmgrid.css" />
<link rel="stylesheet" type="text/css" href="${basePath}styles/mmpaginator.css" />
<link rel="stylesheet" type="text/css"
	href="${basePath}themes/mmgrid/mmgrid.css" />
<link rel="stylesheet" type="text/css"
	href="${basePath}themes/mmgrid/mmpaginator.css" />
<script type="text/javascript" src="${basePath}scripts/mmgrid.js"></script>
<script type="text/javascript" src="${basePath}scripts/mmpaginator.js"></script>
<script type="text/javascript" src="${basePath}scripts/bootstrap.js"></script>
<script type="text/javascript" src="${basePath}scripts/jquery.js"></script>
<script type="text/javascript" src="${basePath}scripts/jstree.js"></script>
<script type="text/javascript" src="${basePath}scripts/bootstrap.js"></script>
<script type="text/javascript" src="${basePath}scripts/mousewheel.js"></script>
<script type="text/javascript" src="${basePath}scripts/global.js"></script>
<script type="text/javascript" src="${basePath}scripts/backend.js"></script>
<style>
.edit {
	width: 700px;
	margin-top: 10px;
	margin-left: 60px;
}

#editor {
	max-height: 150px;
	height: 180px;
	background-color: white;
	border-collapse: separate;
	border: 1px solid rgb(204, 204, 204);
	padding: 4px;
	box-sizing: content-box;
	-webkit-box-shadow: rgba(0, 0, 0, 0.0745098) 0px 1px 1px 0px inset;
	box-shadow: rgba(0, 0, 0, 0.0745098) 0px 1px 1px 0px inset;
	border-top-right-radius: 3px;
	border-bottom-right-radius: 3px;
	border-bottom-left-radius: 3px;
	border-top-left-radius: 3px;
	overflow: scroll;
	outline: none;
}
</style>
<script>

$(document).ready(function (){
		$.ajax({
					type : "POST",
					url : "${basePath}credential_findAllCredential.action",
					dataType : "json",
					success : function(json) {
					if(json.cList!=null)
					{
					addTypeName(json.cList)
					}
					},
					error : function() {
						return false;
					}
				});
				
	 function addTypeName(list)
		{
		$("#credentialIID > option").remove();
		var option ="<option>请选择</option>";
		for(var i=0;i<list.length;i++)
		{
		var credential  =list[i];
		option+="<option value="+credential.credentialId+">"+credential.credentialName+"</option>";
		}
		
		$("#credentialIID").append(option);
		}
		
		
		$("#addClassBtn").click(function(){
		$.ajax({
					type : "POST",
					url : "${basePath}trainingClass_addClass.action",
					data:"trainingclass.trainingClassName="+$("#classNmaeIID").val()+"&trainingclass.credentialId="+$("#credentialIID").val(),
					dataType : "json",
					success : function(json) {
					},
					error : function() {
						return false;
					}
				});
		});
		});
		
</script>
<div class="container-fluid">
	<div class="row-fluid" style="margin-left: -18px">
		班级名称 <input type="text" id="classNmaeIID" class="span4  input-medium box">
	</div>
	<div class="row">
	      班级证书: <select class="input-medium box" id="credentialIID">
		</select>
	</div>
	<div class="row">
		<button class="btn btn-large btn-primary offset3"><i class="icon-edit"></i>重置</button>
		<button class="btn btn-large btn-primary offset1" id="addClassBtn" onclick="loadHTML('${basepath}trainingClass_intoAddClassPage2.action')"><i class="icon-ok"></i>下一步</button>
	</div>
</div>

