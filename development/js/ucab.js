/*
	ucab.js
*/
;$(function () {
	// связи между кнопкой, табом и контентом для каждого раздела
	var ucabNaviDependences = [
			['ucab-bonuses-link',    'ucab-bonuses',    'ucab-bonuses-tab'],
			['ucab-favorites-link',  'ucab-favorites',  'ucab-favorites-tab'],
			['ucab-profile-link',    'ucab-profile',    'ucab-profile-tab'],
			['ucab-subscribes-link', 'ucab-subscribes', 'ucab-subscribes-tab'],
			['ulog-by-email-link',   'ulog-by-email',   'ulog-by-email-tab'],
			['ulog-by-phone-link',   'ulog-by-phone',   'ulog-by-phone-tab'],
			['ulog-by-card-link',    'ulog-by-card',    'ulog-by-card-tab']
		];

	function ucabSectionToggle(id, dependences) {
		var needValue = 0,
			needArray = [];

		$('.ucab-navi__link').removeClass('ucab-navi__link--active');
		$('.ucab-group').removeClass('ucab-group--active');
		$('.ucab-tab').removeClass('ucab-tab--active');

		dependences.forEach(function (item, i, arr) {
			item.filter(function (item) {
				if(item === id) needValue = i;
			});
		});

		// console.log(dependences[needValue]);

		needArray[0] = '#' + dependences[needValue][0];
		needArray[1] = '#' + dependences[needValue][1];
		needArray[2] = '#' + dependences[needValue][2];

		$(needArray[0]).addClass('ucab-navi__link--active');
		$(needArray[1]).addClass('ucab-group--active');
		$(needArray[2]).addClass('ucab-tab--active');
	}



	$(document).on('click', '.ucab-navi__link', function () {
		ucabSectionToggle($(this).attr('id'), ucabNaviDependences);
	});

	$(document).on('click', '.ucab-tab', function () {
		ucabSectionToggle($(this).attr('id'), ucabNaviDependences);
	});


	$(".profile-user-data-store").fancySelect();



	

	//добавить карту
	$("#add-card").on("click",function () {
		var num = $(".bonuses-card-identifier__input").val();

		if(num.length) {
			$.getJSON("/cabinet/add_card.php", {numbk: num}, function (data) {
				if (data.success == 1) {
					location.reload();
				} else {
					//card-exist - карта уже привязана к пользователю
					//card-not-find - карта не найдена
					//not-auth - не авторизован
					alert(data.error);
				}
			});
		}
	});


	//выслать карту
	$(".bonuses-card-identifier__sms-button").on("click",function () {
		$.getJSON("/cabinet/get_card.php", function (data) {
			if (data.success == 1) {
				alert("смс отправлена");
			} else {
				//empty-phone - не указан телефон в профиле
				//card-not-find - карта не найдена
				//not-auth - не авторизован
				alert(data.error);
			}
		});
	})


	
});



// "ЛИЧНЫЙ КАБИНЕТ", вкладка "ПРОФИЛЬ"
//подстановка логина при редактированни профиля
;$(function () {
	$(document).on('submit', '.profile-info-form', function (event) {
		/*var email = $('[name=EMAIL]').val();

		if (email.length>0)
			$('[name=LOGIN]').val(email);
		else
			$('[name=LOGIN]').val("login");

		return true;*/

		event.preventDefault();

		var profileInfo = [
				$('#profile-user-data-surname'),
				$('#profile-user-data-name'),
				$('#profile-user-data-middlename'),
				$('#profile-user-data-birth'),
				$('#profile-user-data-mobile'),
				$('#profile-user-data-email')
			];

		profileInfo.forEach(function (item, index, array) {
			item.val().length > 0 ? 
				item.parent('.profile-field-row').removeClass('check-field--invalid').addClass('check-field--valid') : 
				item.parent('.profile-field-row').removeClass('check-field--valid').addClass('check-field--invalid');
		});
	});
});




// "ЛИЧНЫЙ КАБИНЕТ", вкладка "БОНУСЫ"
// // бегунок уровня скидки
;$(function () {

	// $('.bonuses-discount-level-progress-line__rhomb').attr('data-discount-level', '9'); // ## для тестирования, потом эту строку удалить

	var discountLevelMax = 10;
	var dataDiscountLevel = +$('.bonuses-discount-level-progress-line__rhomb').attr('data-discount-level'); //data-discount-level

	$('.bonuses-discount-level-progress-line__rhomb').css({'left' : dataDiscountLevel / discountLevelMax * 100 + '%'});
});


// ucab-regform
//подстановка полей при регистрации
;$(function () {

	$(document).on('submit', '.ucab-regform', function (event) {
		/*var email = $('[name="REGISTER[EMAIL]"]').val();
		var password = $('[name="REGISTER[PASSWORD]"]').val();*/

		/*if (email.length>0)
			$('[name="REGISTER[LOGIN]"]').val(email);
		else
			$('[name="REGISTER[LOGIN]"]').val("login");

		if (password.length>0)
			$('[name="REGISTER[CONFIRM_PASSWORD]"]').val(password);
		else
			$('[name="REGISTER[CONFIRM_PASSWORD]"]').val("123");*/

		// return true;

		event.preventDefault();

		var $email = $('#ucab-regform-email'),
			$password = $('#ucab-regform-password');

		$email.val().length > 0 ? $email.parent('.form-textline').removeClass('h-error-border') : $email.parent('.form-textline').addClass('h-error-border');
		$password.val().length > 0 ? $password.parent('.form-textline').removeClass('h-error-border') : $password.parent('.form-textline').addClass('h-error-border');
	});
});




// "ЛИЧНЫЙ КАБИНЕТ", АВТОРИЗАЦИЯ
// авторизация(по карте, по email, по телефону)
;$(function () {
	$(document).on('submit', '.ucab-login-form', function (event) {
		event.preventDefault();

		var $password = $(this).find('input[type=password]'),
			$login = $(this).find('input[type=text]');

		$password.val().length < 1 ? $password.addClass('h-error-border') : $password.removeClass('h-error-border');
		$login.val().length < 1 ? $login.addClass('h-error-border') : $login.removeClass('h-error-border');


		// результат проверки пользователя на существование
		var authSuccess = $password.val() === '123' && $login.val() === '123'; // ##

		if(authSuccess) {
			// пользователь найден
			location.href = 'http://localhost/zoloto585/development/user-cabinet.html'; // если все ок, редирект на страницу кабинета
		} else {
			// пользователь не найден
			$('.ucab-login-field').find('input').removeClass('h-error-border');
			$login.addClass('h-error-border');
			$password.addClass('h-error-border');
		}
	});
});



// ;$(function () {});
// ;$(function () {});
// ;$(function () {});