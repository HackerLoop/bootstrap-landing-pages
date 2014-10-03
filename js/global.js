/* resize .full-image class when the windows height change */
$(document).ready(function() {
	
	$('.full-image').css({'height':(($(window).height()))+'px'});

	$(window).resize(function(){
		$('.full-image').css({'height':(($(window).height()))+'px'});
	});
});