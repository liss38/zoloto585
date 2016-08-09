// =======================
// = ПОПАП ВЫБОРА ГОРОДА =
// =======================
;$(function () {
	function topGeoModal(a) {
		if(a) {
			$('.top-geo-modal').addClass('top-geo-modal--active');
			$('.top-geo-modal__inner').addClass('top-geo-modal__inner--active');
		}
		else if(!a) {
			$('.top-geo-modal').removeClass('top-geo-modal--active');
			$('.top-geo-modal__inner').removeClass('top-geo-modal__inner--active');
		}
	}

	$('.top-geo__button').on('click', function () {
		topGeoModal(true);
	});

	$('.top-geo-modal__close').on('click', function () {
		topGeoModal(false);
	});

	$(document).on('click', function (event) {
		if($(event.target).hasClass('top-geo-modal')) topGeoModal(false);
	});

	$('.top-geo-form__button').on('click', function (event) {
		event.preventDefault();

		var selectKey = $('.top-geo-form__option').find('.form__field-select').val(), // ключ либо идентификатор города
			selectValue = $('.top-geo-form__option').find('.form__field-select').find('option:selected').text(); // текстовое значание - название города

		//
		// код взаимодейтвия с сервером для установки выбранного города
		//

		$.cookie('city', selectKey, { expires: 365, path: '/' });
		set_city();
		$('.top-geo__button>span').text(selectValue); // устанавлмвает в рзамтке в шапке название выбранного города
		topGeoModal(false); // закрывает окно
	});
});
// 
// 
// 