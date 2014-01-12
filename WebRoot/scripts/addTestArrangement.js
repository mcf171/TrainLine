

$(document).ready(function ()
{
	$("#addStartTimeHour").click(function(){
		//alert(value);
		var value= $("#startTimeHour").val();
	
		value =  value == 23 ? 0 : parseInt(value)+1;
		
		//console.log(value);
		$("#startTimeHour").val(value);
	});
	$("#reduceStartTimeHour").click(function(){
		//alert(value);
		var value= $("#startTimeHour").val();
	
		value =  value == 0 ? 23 : parseInt(value)-1;
		
		//console.log(value);
		$("#startTimeHour").val(value);
	});
	$("#addStartTimeMinutes").click(function(){
		//alert(value);
		var value= $("#startTimeMinutes").val();
	
		value =  value == 59 ? 0 : parseInt(value)+1;
		
		//console.log(value);
		$("#startTimeMinutes").val(value);
	});
	$("#reduceStartTimeMinutes").click(function(){
		//alert(value);
		var value= $("#startTimeMinutes").val();
	
		value =  value == 0? 59 : parseInt(value)-1;
		
		//console.log(value);
		$("#startTimeMinutes").val(value);
	});
	
	
	$("#addEndTimeHour").click(function(){
		//alert(value);
		var value= $("#endTimeHour").val();
	
		value =  value == 23 ? 0 : parseInt(value)+1;
		
		//console.log(value);
		$("#endTimeHour").val(value);
	});
	$("#reduceEndTimeHour").click(function(){
		//alert(value);
		var value= $("#endTimeHour").val();
	
		value =  value == 0 ? 23 : parseInt(value)-1;
		
		//console.log(value);
		$("#endTimeHour").val(value);
	});
	$("#addEndTimeMinutes").click(function(){
		//alert(value);
		var value= $("#endTimeMinutes").val();
	
		value =  value == 59 ? 0 : parseInt(value)+1;
		
		//console.log(value);
		$("#endTimeMinutes").val(value);
	});
	$("#reduceEndTimeMinutes").click(function(){
		//alert(value);
		var value= $("#endTimeMinutes").val();
	
		value =  value == 0? 59 : parseInt(value)-1;
		
		//console.log(value);
		$("#endTimeMinutes").val(value);
	});
	
});