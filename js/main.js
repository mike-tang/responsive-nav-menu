$(document).ready(function(){

	$(".nav-link-1").click(function(e) {
		e.preventDefault();
		var target = $(this).attr("href");
		var collapse = $('[data-collapse="'+target+'"]');
		collapse.toggle();
	})

});