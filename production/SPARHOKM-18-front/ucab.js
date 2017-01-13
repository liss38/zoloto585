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
});






// "ЛИЧНЫЙ КАБИНЕТ", вкладка "БОНУСЫ"
// добавление номера бонусной карты
// выслать номер карты по смс
;$(function () {
	//добавить карту
	$(document).on('submit', '.bonuses-card-add-form', function (event) {
		event.preventDefault();

		var num = $('.bonuses-card-add-input').val(),
			$num = $('.bonuses-card-add-input'),
			$errorDiv = $('.bonuses-card-add-error'),
			errors = {
				'card-exist': 'карта уже привязана к пользователю',
				'card-not-find': 'карта не найдена',
				'not-auth': 'не авторизован',
			};

		if(num.length > 0) {
			$.getJSON("/cabinet/add_card.php", {numbk: num}, function (data) {
				if (data.success == 1) {
					location.reload();
				} else {
					//card-exist - карта уже привязана к пользователю
					//card-not-find - карта не найдена
					//not-auth - не авторизован
					
					$errorDiv.addClass('bonuses-card-add-error--active');
					
					$errorDiv.text('');
					$errorDiv.text(errors[data.error]);
					
					$num.addClass('h-error-border');
					
					// console.log(errors[data.error]);
				}
			});
		}
	});


	//выслать карту
	$(document).on('click', '.bonuses-card-identifier__sms-button', function () {
		$.getJSON("/cabinet/get_card.php", function (data) {
			if (data.success == 1) {
				console.log("смс отправлена");
			} else {
				//empty-phone - не указан телефон в профиле
				//card-not-find - карта не найдена
				//not-auth - не авторизован
				console.log('++++');
				console.log(data.error);
			}
		});
	});
});







// "ЛИЧНЫЙ КАБИНЕТ", вкладка "ПРОФИЛЬ"
//подстановка логина при редактированни профиля
;$(function () {
	$(document).on('submit', '.profile-info-form', function (event) {
		var profileInfo = [
				$('#profile-user-data-surname'),
				$('#profile-user-data-name'),
				$('#profile-user-data-middlename'),
				$('#profile-user-data-birth'),
				$('#profile-user-data-mobile'),
				$('#profile-user-data-email')
			];

		// event.preventDefault();


		// обязательные для заполнения поля в Профиле Кабинета
		profileInfo.forEach(function (item, index, array) {
			item.val().length > 0 ? 
				item.parent('.profile-field-row').removeClass('check-field--invalid').addClass('check-field--valid') : item.parent('.profile-field-row').removeClass('check-field--valid').addClass('check-field--invalid');
		});


		// проверка полей на корректность данных по маске
		// ... 


		// если хотя бы одно из обязательных полей не корректно заполнено отмена отправки формы
		if($('.check-field--invalid').length > 0) return false;

		var email = $('[name=EMAIL]').val();


		if (email.length>0)
			$('[name=LOGIN]').val(email);
		else
			$('[name=LOGIN]').val("login");

		return true;
	});
});







// "ЛИЧНЫЙ КАБИНЕТ", вкладка "БОНУСЫ"
// бегунок уровня скидки
;$(function () {

	// $('.bonuses-discount-level-progress-line__rhomb').attr('data-discount-level', '2'); // ## для тестирования, потом эту строку удалить

	var discountLevelMax = 10;
	var dataDiscountLevel = +$('.bonuses-discount-level-progress-line__rhomb').attr('data-discount-level'); //data-discount-level

	$('.bonuses-discount-level-progress-line__rhomb').css({'left' : dataDiscountLevel / discountLevelMax * 100 + '%'});
});







// "ЛИЧНЫЙ КАБИНЕТ", РЕГИСТРАЦИЯ
//подстановка полей при регистрации
;$(function () {

	$(document).on('submit', '.ucab-regform', function (event) {
		var $email = $('#ucab-regform-email'),
			$password = $('#ucab-regform-password');

		// удаление пустых символов
		// ... 


		// проверка на пустоту
		if($email.val().length < 1 || $password.val().length < 1) {
			$email.val().length > 0 ? $email.parent('.form-textline').removeClass('h-error-border') : $email.parent('.form-textline').addClass('h-error-border');
			$password.val().length > 0 ? $password.parent('.form-textline').removeClass('h-error-border') : $password.parent('.form-textline').addClass('h-error-border');

			return false;
		}


		// проверка данных по маске(телефон, номер карты, email)
		// ... 


		var email = $('[name="REGISTER[EMAIL]"]').val();
		var password = $('[name="REGISTER[PASSWORD]"]').val();

		if (email.length>0)
			$('[name="REGISTER[LOGIN]"]').val(email);
		else
			$('[name="REGISTER[LOGIN]"]').val("login");

		if (password.length>0)
			$('[name="REGISTER[CONFIRM_PASSWORD]"]').val(password);
		else
			$('[name="REGISTER[CONFIRM_PASSWORD]"]').val("123");

		return true;
	});
});







// "ЛИЧНЫЙ КАБИНЕТ", АВТОРИЗАЦИЯ
// авторизация(по карте, по email, по телефону)
;$(function () {
	$(document).on('submit', '.ucab-login-form', function (event) {
		var $password = $(this).find('input[type=password]'),
			$login = $(this).find('input[type=text]');


		// удаление пустых символов
		// ... 


		// проверка на пустоту
		if($password.val().length < 1 || $login.val().length < 1) {
			$password.val().length < 1 ? $password.addClass('h-error-border') : $password.removeClass('h-error-border');
			$login.val().length < 1 ? $login.addClass('h-error-border') : $login.removeClass('h-error-border');

			return false;
		}


		// проверка данных по маске(телефон, номер карты, email)
		// ... 
	});
});





// проверка по маске полей
;$(function () {
	function getCharCodeOnKeyPress(event) {
		// IE
		if(event.which == null) {
			if(event.keyCode < 32) return null;
			return String.fromCharCode(event.keyCode);
		}

		// Other
		if(event.which != 0 && event.charCode != 0) {
			if(event.which < 32) return null;
			return String.fromCharCode(event.which);
		}
	}

	$(document).on('keypress', '.js-mask-number', function (event) {
		// Ctrl/Alt/Cmd
		if(event.altKey || event.ctrlKey || event.metaKey) return;

		var chr = getCharCodeOnKeyPress(event);

		if(chr == null) return;

		if(chr < '0' || chr > '9') return false;

	});
});


// ;$(function () {});
// ;$(function () {});
// ;$(function () {});
// ;$(function () {});