// =======================
// = ФИЛЬТР ДЛЯ КАТАЛОГА =
// =======================
;$(function() { // фильтр для каталога
	$('.js-filter-group-scroll-pane').jScrollPane({
		autoReinitialise : true,
		verticalDragMinHeight: 9,
		verticalDragMaxHeight: 9,
		horizontalDragMinWidth: 9,
		horizontalDragMaxWidth: 9
	});

	// открытие закрытие фильтра
	$('#catalog-filter-change-button').on('click', function (event) {
		event.preventDefault();
		$('.filter').hasClass('filter--closed') ? $('.filter').removeClass('filter--closed') : $('.filter').addClass('filter--closed');
	});

	// кнопка reset фильтра
	$('#catalog-filter-reset-button').on('click', function (event) {
		
	});

	// кнопка submit фильтра
	$('#catalog-filter-submit-button').on('click', function (event) {
		event.preventDefault();

		// 
		// отправка значений с формы фильтра на сервер
		// 

		$('.filter').addClass('filter--closed');
	});

	// кнопка с выбранным тегом поиска
	$('.filter-tags__tab').on('click', function (event) {
		$(this).remove();
	});
});
// 
// 
// 