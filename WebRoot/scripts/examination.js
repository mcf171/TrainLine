var testquestionId,basePath;
function showConfirm(obj1,obj2){
	
	testquestionId = obj1;
	basePath = obj2;
	$('#myModal').modal();
}
function deleteBook(){
	$.ajax({
		  type: "post",
		  url: basePath+"admin/deleteTestquestion.action",
		  data:"testquestion.testQuestionId=" + testquestionId,
		  success: function(msg){
			 
			  $('#myModal').modal('hide')
			  mmGirdTable.removeRow(mmGirdTable.selectedRowsIndex());
		  }
		});
	
}