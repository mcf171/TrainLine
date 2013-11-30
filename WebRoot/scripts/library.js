var bookId,basePath;
function showConfirm(obj1,obj2){
	
	bookId = obj1;
	basePath = obj2;
	$('#myModal').modal();
}
function deleteBook(){
	$.ajax({
		  type: "post",
		  url: basePath+"deleteBook.action",
		  data:"book.bookId=" + bookId,
		  success: function(msg){
			 
			  $('#myModal').modal('hide')
			  mmGirdTable.removeRow(mmGirdTable.selectedRowsIndex());
		  }
		});
	
}