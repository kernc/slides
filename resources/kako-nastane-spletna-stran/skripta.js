$('p').hide();
setTimeout(function () {
	$('h1').animate({
		'font-size': '100px'
	}, function () {
		$('p').each(function () {
			$(this).slideDown('slow');
		});
	});
}, 500);
