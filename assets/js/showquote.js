$(document).ready(function() {
   $('.context').hover(
		function () {
			$(this).children('.quote').fadeIn('slow');
		},
		function () {
			$(this).children('.quote').fadeOut('slow');
		}
	);
})
