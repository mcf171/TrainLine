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

<script>

var trainingClassId;
$(document).ready(function (){
		$.ajax({
					type : "POST",
					url : "${basePath}admin/findAllCredential.action",
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
					url : "${basePath}admin/addClass.action",
					data:"trainingClass.trainingClassName="+$("#classNmaeIID").val()+"&trainingClass.credential.credentialId="+$("#credentialIID").val(),
					dataType : "json",
					success : function(json) {
						trainingClassId = json.trainingClassId;
						loadHTML('${basepath}admin/getAddClassPage2.action?trainingClass.trainingClassId='+trainingClassId);
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
		<button class="btn btn-large btn-primary offset1" id="addClassBtn" ><i class="icon-ok"></i>下一步</button>
	</div>
</div>

