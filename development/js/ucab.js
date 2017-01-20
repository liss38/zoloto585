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
					$errorDiv.addClass('bonuses-card-add-error--active');
					$errorDiv.text('');
					$errorDiv.text(errors[data.error]);
					$num.addClass('h-error-border');
				}
			});
		}
	});


	//выслать карту
	$(document).on('click', '.bonuses-card-identifier__sms-button', function () {
		var success = false,
			$errorDiv = $('.bonuses-card-add-error'),
			errors = {
				'empty-phone': 'не указан телефон в профиле',
				'card-not-find': 'карта не найдена',
				'not-auth': 'не авторизован',
			};

		$.getJSON("/cabinet/get_card.php", function (data) {
			if (data.success == 1) {
				$errorDiv.addClass('bonuses-card-add-error--active');
				$errorDiv.text('смс отправлена');
			} else {
				$errorDiv.addClass('bonuses-card-add-error--active');
				$errorDiv.text(errors[data.error]);
			}
		});
	});


	// скрывает окно с ошибкой
	$(document).on('click', '.bonuses-card-add-error', function () {
		if($(this).hasClass('bonuses-card-add-error--active')) $(this).removeClass('bonuses-card-add-error--active');
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







// "ЛИЧНЫЙ КАБИНЕТ", РЕГИСТРАЦИЯ
//подстановка полей при регистрации
;$(function () {

	$(document).on('submit', '.ucab-regform', function (event) {
		var $login = $('#ucab-regform-email'),
			$password = $('#ucab-regform-password'),
			$agreement = $('#ucab-regform-proof');
			testLogin = false,
			testPassword = false,
			testAgreement = false;


		// проверка данных по маске(телефон, номер карты, email)
		if($login.val().length < 1) {
			$login.parent('.form-textline').addClass('h-error-border');
			testLogin = false;
		} else {
			$login.parent('.form-textline').removeClass('h-error-border');
			testLogin = true;
		}

		if($password.val().length < 1) {
			$password.parent('.form-textline').addClass('h-error-border');
			testPassword = false;
		} else {
			$password.parent('.form-textline').removeClass('h-error-border');
			testPassword = true;
		}

		if(!/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test($login.val())) {
			$login.parent('.form-textline').addClass('h-error-border');
			testLogin = false;
		} else {
			$login.parent('.form-textline').removeClass('h-error-border');
			testLogin = true;
		}

		if($agreement.prop('checked')) {
			testAgreement = true;
		} else {
			testAgreement = false;
		}

		console.log('login - ' + testLogin);
		console.log('password - ' + testPassword);
		console.log('agreement - ' + testAgreement);

		// if(!(testLogin && testPassword && testAgreement)) return false;


		var email = $('[name="REGISTER[EMAIL]"]').val();
		var password = $('[name="REGISTER[PASSWORD]"]').val();

		if(email && password) {
			if (email.length>0)
				$('[name="REGISTER[LOGIN]"]').val(email);
			else
				$('[name="REGISTER[LOGIN]"]').val("login");

			if (password.length>0)
				$('[name="REGISTER[CONFIRM_PASSWORD]"]').val(password);
			else
				$('[name="REGISTER[CONFIRM_PASSWORD]"]').val("123");
		}

		// return false;
		return testLogin && testPassword && testAgreement;
	});
});







// "ЛИЧНЫЙ КАБИНЕТ", АВТОРИЗАЦИЯ
// авторизация(по карте, по email, по телефону)
;$(function () {
	$(document).on('submit', '.ucab-login-form', function (event) {
		var $password = $(this).find('input[type=password]'),
			$login = $(this).find('input[type=text]'),
			typeAuth = $(this).find('[name="TYPE_AUTH"]').val(),
			testLogin = false,
			testPassword = false;


		// проверка данных по маске(телефон, номер карты, email)
		if(typeAuth === 'PHONE') {
			if($login.val().length < 1) {
				$login.addClass('h-error-border');
				testLogin = false;
			} else {
				$login.removeClass('h-error-border');
				testLogin = true;
			}

			if($password.val().length < 1) {
				$password.addClass('h-error-border');
				testPassword = false;
			} else {
				$password.removeClass('h-error-border');
				testPassword = true;
			}

			if(!/^(8|\+7)[0-9]{10}/.test($login.val())) {
				$login.addClass('h-error-border');
				testLogin = false;
			} else {
				$login.removeClass('h-error-border');
				testLogin = true;
			}

			/*console.log('typeAuth - ' + typeAuth);
			console.log('login - ' + testLogin);
			console.log('password - ' + testPassword);*/

			return testLogin && testPassword;
		}

		else if(typeAuth === 'EMAIL') {
			if($login.val().length < 1) {
				$login.addClass('h-error-border');
				testLogin = false;
			} else {
				$login.removeClass('h-error-border');
				testLogin = true;
			}

			if($password.val().length < 1) {
				$password.addClass('h-error-border');
				testPassword = false;
			} else {
				$password.removeClass('h-error-border');
				testPassword = true;
			}

			if(!/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test($login.val())) {
				$login.addClass('h-error-border');
				testLogin = false;
			} else {
				$login.removeClass('h-error-border');
				testLogin = true;
			}

			/*console.log('typeAuth - ' + typeAuth);
			console.log('login - ' + testLogin);
			console.log('password - ' + testPassword);*/

			return testLogin && testPassword;
		}

		else if(typeAuth === 'CARD') {
			if($login.val().length < 1) {
				$login.addClass('h-error-border');
				testLogin = false;
			} else {
				$login.removeClass('h-error-border');
				testLogin = true;
			}

			if($password.val().length < 1) {
				$password.addClass('h-error-border');
				testPassword = false;
			} else {
				$password.removeClass('h-error-border');
				testPassword = true;
			}

			if(!/^\d+$/.test($login.val())) {
				$login.addClass('h-error-border');
				testLogin = false;
			} else {
				$login.removeClass('h-error-border');
				testLogin = true;
			}

			/*console.log('typeAuth - ' + typeAuth);
			console.log('login - ' + testLogin);
			console.log('password - ' + testPassword);*/

			return testLogin && testPassword;
		}
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