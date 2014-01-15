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

function idLoadHTML(id,url){
	$('#'+id).load(url);
}

function loadFrame(page)
{
	var temp = $('#container');
	$('#container').attr('src', page);
}

function deleteTFromDate(value){
	
	str1 =value.substring(0,value.indexOf('T'));
	str2 = value.substring(value.indexOf('T')+1);;
	return str1+ " " + str2;
}