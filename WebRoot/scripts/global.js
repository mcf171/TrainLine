$(document).ready(function ()
{
	$.ajaxSetup({
		type: 'post',
		cache: false
	});
});

function hiddenClass(divClass){
	
	$('.'+divClass).hide();
}
function loadHTML(name){
	$('#content').load(name);
}

function deleteTFromDate(value){
	
	str1 =value.substring(0,value.indexOf('T'));
	str2 = value.substring(value.indexOf('T')+1);;
	return str1+ " " + str2;
}