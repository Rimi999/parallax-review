init()

function init () {
	navi()
}

function navi() {
	$('.header-wrapper .mo-navi-wrapper').slideUp(0)
	$('.header-wrapper .mo-menu').on('click', function() {
		$('.mo-navi-wrapper').slideToggle()
	})
}