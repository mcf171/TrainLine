var id,basePath;
function showConfirm(obj1,obj2){
	
	id = obj1;
	basePath = obj2;
	$('#myModal').modal();
}

function deleteCompany(){
	$.ajax({
		  type: "post",
		  url: basePath+"deleteCompany.action",
		  data:"company.companyId=" + id,
		  success: function(msg){
			  $('#myModal').modal('hide')
			  mmGirdTable.removeRow(mmGirdTable.selectedRowsIndex());
		  }
		});
	
}

function deleteDepartment(){
	$.ajax({
		  type: "post",
		  url: basePath+"deleteDepartment.action",
		  data:"department.departmentId=" + id,
		  success: function(msg){
			  $('#myModal').modal('hide');
			  mmGirdTable.removeRow(mmGirdTable.selectedRowsIndex());
		  }
		});
}

function deletePosition(){
	$.ajax({
		  type: "post",
		  url: basePath+"deletePosition.action",
		  data:"position.positionId=" + id,
		  success: function(msg){
			  $('#myModal').modal('hide');
			  mmGirdTable.removeRow(mmGirdTable.selectedRowsIndex());
		  }
		});
}

function deletePerson(){
	$.ajax({
		  type: "post",
		  url: basePath+"deletePerson.action",
		  data:"user.userId=" + id,
		  success: function(msg){
			  $('#myModal').modal('hide');
			  mmGirdTable.removeRow(mmGirdTable.selectedRowsIndex());
		  }
		});
}
