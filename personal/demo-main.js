var menuOpen = false;

function showHideMenuItems (event) {
	event.stopPropagation();
	let menuItems = $('.main li > a:not(:first-child)');

	if(menuOpen) {
		//menuItems.css('display','none');
		menuItems.removeClass('open');
		$('.main li > a > span').removeClass('rotated');
		menuOpen = false;
	}

	else {
		//menuItems.css('display','inline');
		menuItems.addClass('open');
		$('.main li > a > span').addClass('rotated');
		menuOpen = true;
	}
};

function hideMenuItems () {
	let menuItems = $('.main li > a:not(:first-child)');
	//menuItems.css('display','none');
	menuItems.removeClass('open');

	$('.main li > a > span').removeClass('rotated');
	menuOpen = false;
};

window.onload = function () {
	$('.main li > a:first-child').on('click',showHideMenuItems);
	$(document).on('click', hideMenuItems);

};
