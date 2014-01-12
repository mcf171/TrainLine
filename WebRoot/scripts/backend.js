function init_tree(sidebar, content, options)
{
	return $(sidebar)
		.jstree(options)
		.delegate('.jstree-leaf > a', 'click', function (event)
		{
			event.preventDefault();
			event.stopPropagation();
			$(content).load($(this).attr('href'));
			$(sidebar).find('.jstree-leaf > a').removeClass('blacked');
			$(this).addClass('blacked');
		})
		.delegate('li[class*="jstree-"] > a', 'click', function (event)
		{
			event.preventDefault();
			event.stopPropagation();
			$(sidebar).jstree('toggle_node', this);
		});
}

function init_spinner(selector, min, max)
{
	return $(selector)
		.empty().val(min)
		.addClass('input-append')
		.addClass('input-prepend')
		.append(
			'<button class="btn"><b>-</b></button>' +
			'<input type="text" value="0" />' +
			'<button class="btn"><b>+</b></button>'
		).find('input')
			.css('text-align', 'right')
			.keyup(function (event)
			{
				if ($(this).val() == '')
					$(this).val(min);
			}).keypress(function (event)
			{
				event.preventDefault();
				if (event.which == 43)
					$(this).next().click();
				else if (event.which == 45)
					$(this).prev().click();
				else if (event.which >= 0x30 && event.which <= 0x39)
					$(this).val(Math.max(min, Math.min(max, parseInt($(this).val() + String.fromCharCode(event.which)))));
			}).mousewheel(function (event, delta, deltaX, deltaY)
			{
				event.preventDefault();
				if (deltaY > 0)
					$(this).next().click();
				else
					$(this).prev().click();
			}).change(function (event)
			{
				if (isNaN(parseInt($(this).val())))
					$(this).val(min);
				else
					$(this).val(parseInt($(this).val()));
			}).prev()
				.click(function (event)
				{
					event.preventDefault();
					$(this).next().val(Math.max(min, parseInt($(this).next().val()) - 1));
				})
			.end()
			.next()
				.click(function (event)
				{
					event.preventDefault();
					$(this).prev().val(Math.min(max, parseInt($(this).prev().val()) + 1));
				})
			.end();
}

$(document).ready(function ()
{
	$.jstree._themes = 'themes/jstree/';

	init_tree('#sidebar', '#content', {
		plugins: [
			'themes',
			'html_data'
		]
	});
});