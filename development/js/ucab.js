/*
	ucab-navi.js
*/
;$(function () {
	// связи между кнопкой, табом и контентом для каждого раздела
	var ucabNaviDependences = [
			['ucab-bonuses-link',    'ucab-bonuses',    'ucab-bonuses-tab'],
			['ucab-favorites-link',  'ucab-favorites',  'ucab-favorites-tab'],
			['ucab-profile-link',    'ucab-profile',    'ucab-profile-tab'],
			['ucab-subscribes-link', 'ucab-subscribes', 'ucab-subscribes-tab']
		];

	function ucabSectionToggle(id) {
		var needValue = 0,
			needArray = [];

		$('.ucab-navi__link').removeClass('ucab-navi__link--active');
		$('.ucab-group').removeClass('ucab-group--active');
		$('.ucab-tab').removeClass('ucab-tab--active');

		ucabNaviDependences.forEach(function (item, i, arr) {
			item.filter(function (item) {
				if(item === id) needValue = i;
			});
		});

		console.log(ucabNaviDependences[needValue]);

		needArray[0] = '#' + ucabNaviDependences[needValue][0];
		needArray[1] = '#' + ucabNaviDependences[needValue][1];
		needArray[2] = '#' + ucabNaviDependences[needValue][2];

		$(needArray[0]).addClass('ucab-navi__link--active');
		$(needArray[1]).addClass('ucab-group--active');
		$(needArray[2]).addClass('ucab-tab--active');
	}



	$(document).on('click', '.ucab-navi__link', function () {
		ucabSectionToggle($(this).attr('id'));
	});


	$(document).on('click', '.ucab-tab', function () {
		ucabSectionToggle($(this).attr('id'));
	});
});




/*
	ucab-.js
*/
;$(function () {
	$(".profile-user-data-store").fancySelect();
});