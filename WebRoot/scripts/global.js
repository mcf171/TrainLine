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