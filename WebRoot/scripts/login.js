
function validCodeConfirm(inputObj){
	
	name = inputObj.value;
	if(name!=""){
	$.ajax({
		   type: "POST",
		   url: "validCode.action",
		   data: "valideValue="+name,
		   success: function(msg){
			   
			   flag = true == msg.infor ? true : false;
			   
			   if(flag){
				   
				   
			   }else{
				   
				   alert("验证码错误");
			   }
			  
		   }
		}); 
	}
}

function refreshValidCode(){
	randomNumber = Math.random();
	validCodeImg = $("#validCode");
	validCodeImg.attr("src","validationCode.action?randNumber="+randomNumber);
}

$(document).ready(function (){
	
	var bkWidth = $(document).width();
	var bkHeight = $(document).height();
	
	$("#lay_bg").css("width",bkWidth);
	$("#lay_bg").css("height",bkHeight);
	
	$("#lay_bg_img").css("width",bkWidth);
	$("#lay_bg_img").css("height",bkHeight);
});