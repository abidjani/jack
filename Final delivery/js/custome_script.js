
$(document).ready(function(){
		$('.fa-bars').click(function(){
			$(this).hide() && $('.close_icon').show();
		});
		$('.close_icon').click(function(){
			$(this).hide() && $('.fa-bars').show();
		});
	});

$(window).on('scroll', function () {
		var menu_area = $('.navbar');
		if ($(window).scrollTop() > 70) {
			menu_area.addClass('sticky_navigation');
		} else {
			menu_area.removeClass('sticky_navigation');

		}
	});
//Get the button:
$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide') && $('.fa-bars').show() && $('.close_icon').hide();
})

$('.nav-link').click(function () {
        $('body').css('padding-top', '0');
});


window.onhashchange = function () {
    $('body').css('padding-top', '30px');
};






