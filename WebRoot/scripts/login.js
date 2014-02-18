
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
$(window).resize(function (){

	var bkWidth = $(document).width();
	var bkHeight = $(document).height();
	
	$("#lay_bg").css("width",bkWidth);
	$("#lay_bg").css("height",bkHeight);
	
	$("#lay_bg_img").css("width",bkWidth);
	$("#lay_bg_img").css("height",bkHeight);
}); 
$(document).ready(function(){
	var bkWidth = $(document).width();
	var bkHeight = $(document).height();
	
	$("#lay_bg").css("width",bkWidth);
	$("#lay_bg").css("height",bkHeight);
	
	$("#lay_bg_img").css("width",bkWidth);
	$("#lay_bg_img").css("height",bkHeight);
	
	var bkNumber = Math.floor(Math.random()*5);
	bkNumber = bkNumber+1;
	$("#lay_bg_img").attr("src","images/bk"+bkNumber+".jpg");
	$("#lay_bg").fadeIn("slow");
});
function checkNull(){
	
	var  userName = $("#userName").val();
	var userPassword = $("#userPassword").val();
	var validateCode = $("#validateCode").val();
	
	if(userName == "")
	{
		$.scojs_message('用户名不能为空', $.scojs_message.TYPE_ERROR);
		return false;
	}
	if(userPassword =""){
		$.scojs_message('密码不能为空', $.scojs_message.TYPE_ERROR);
		return false;
	}
	if(validateCode = "")
	{
		$.scojs_message('验证码不能为空', $.scojs_message.TYPE_ERROR);
		return false;
	}
	return true;
}