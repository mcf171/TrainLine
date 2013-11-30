
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
	var mmg1;
$(document).ready(function ()
{
	$('#time-to').css('background', 'none').datepicker();
	$('#time-from').css('background', 'none').datepicker();
	
		$.ajax({
					type : "POST",
					url : "${basePath}trainingClass_getClassCase.action",
					dataType : "json",
					success : function(json) {
					if(json.classcase!=null)
					{
					var classcase = json.classcase;
					
					var div="<div class='row-fluid'>培训班级ID:"+classcase.classCaseId+"</div>"
				   +"<div class='row-fluid'>实到人数:"+classcase.personOfHierarchy+"</div>"
				   +"<div class='row-fluid'>总人数:"+classcase.personOfSum+"</div>"
				   +"<div class='row-fluid'>开班时间:"+classcase.classStartTime+"</div>"
			       +"<div class='row-fluid'>闭班时间:"+classcase.classEndtTime+"</div>"
			       +"<div class='row-fluid'>班级介绍:"+classcase.classContent+"</div>"
			       +"<div class='row-fluid'>培训学时:"+classcase.trainHour+"</div>"
			       +"<div class='row-fluid'>培训渠道:"+classcase.trainChannel+"</div>"
			       +"<div class='row-fluid'>培训方式:"+classcase.trainWay+"</div>"
			       +"<div class='row-fluid'>培训协议编号:"+classcase.trainAgreementNunber+"</div>"
			       +"<div class='row-fluid'>培训类型:"+classcase.trainType+"</div>"
			       +"<div class='row-fluid'>培训类别:"+classcase.trainCategory+"</div>"
			       +"<div class='row-fluid'>培训原由:"+classcase.trainReason+"</div>"
			      +"<div class='row-fluid'>培训地点:"+classcase.trainAddress+"</div>"
	             +"<div class='row-fluid'>培训机构:"+classcase.trainUnit+"</div>"
	              +"<div class='row-fluid'>培训机构类别:"+classcase.trainUnitType+"</div>"
	               +"<div class='row-fluid'>表彰情况:"+classcase.awarding+"</div>"
                 +"<div class='row-fluid'>表彰情况:"+classcase.recognition+"</div>"
                 +"<div class='row-fluid'>是否出境:"+classcase.exitCountry+"</div>"
                 +"<div class='row-fluid'>培训费:"+classcase.trainCost+"</div>"
                 +"<div class='row-fluid'>教材费用:"+classcase.accreditationFees+"</div>"
                 +"<div class='row-fluid'>其他费用:"+classcase.travelExpense+"</div>"
                 +"<div class='row-fluid'>其他费用:"+classcase.otherCost+"</div>"
                 +"<div class='row-fluid'>备注:"+classcase.classCaseComment+"</div>";
					}
					$("#classCaseDiv").append(div);
					},
					error : function() {
						return false;
					}
				});
});
</script>
</head>
<style>

</style>
<body>
	<div class="container-fluid">
		<div class="row-fluid">
			<div id="content" class="span10">
				<div class="row-fluid" id="classCaseDiv">
				
				</div>
			</div>
		</div>
	</div>

</body>
</html>