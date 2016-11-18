// 
// 
// 
// 
// 
// 
// 
// 
// 
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

	$(document).on('click', '.top-geo__button', function () {
		topGeoModal(true);
	});

	$(document).on('click', '.top-geo-modal__close', function () {
		topGeoModal(false);
	});

	$(document).on('click', '.top-geo-modal', function (event) {
		if($(event.target).hasClass('top-geo-modal')) topGeoModal(false);
	});

	$(document).on('click', '.top-geo-form__button', function (event) {
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