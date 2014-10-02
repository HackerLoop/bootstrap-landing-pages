
$(document).ready(function() {
	
	$('.full-image').css({'height':(($(window).height()))+'px'});

	$(window).resize(function(){
		$('.full-image').css({'height':(($(window).height()))+'px'});
	});
});