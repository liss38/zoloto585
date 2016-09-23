//если согласны с условием договора показываем кнопку регистрации
$(document).ready(function() {
	$('#agree').change(function() {
		if ($(this).prop('checked')) {
			$('#coc').show();
		} else {
			$('#coc').hide();
		}
	});
});
$(document).ready(function() {
	$('input[name=phone]').mask('+7(999) 99-99-999');
	var validate = {
        rules:{
            fn:{ 		required: true, minlength: 3 },
            sn:{ 		required: true, minlength: 3 },
            email:{ 	required: true, email: true, minlength: 4 },
            phone:{ 	required: true, minlength: 11},
            confirm:{ 	required: true},
        },
        messages:{
            fn:{ required: "Фаимилия обязательна для заполнения", minlength: "Должно быть минимум 3 символа"},
            sn:{ required: "Имя обязательно для заполнения", minlength: "Должно быть минимум 3 символа"},
            email:{ required: "Email обязателен для заполнения", minlength: "Должно быть минимум 4 символа"},
            phone:{ required: "Телефон обязателен для заполнения", minlength: "Должно быть минимум 11 символов"},
            confirm:{ 	required: "Подтвердите соглашение с правилами"},
        },
        onfocusout: false,
	    onkeyup: false,
	    onclick: false,
	    onsubmit: false
    };
    

	var form_reg = $('#reg');
	var form_confirm = $('#reg_confirm');
	
	$(document).on('#coc', 'click',  function(){
		form_reg.submit();
		return false;
	});
	
	$(form_reg).on('submit', function(e) {
		e.preventDefault();

		form_reg.validate(validate);
		if( form_reg.valid() ){
			$.ajax({
				url: '/my-account/sms.php',
				type: 'POST',
				data: form_reg.serialize(),
				success: function(json) {
					if (json.success) {
						form_reg.slideUp();
						form_confirm.slideDown(400, function () {
							$('#Confirm_promokey').focus();
						});
					}
					console.log(json);
				}
			});
		}
		return false;
	});
	// делаем проверку кода, если все ок регистрируем пользователя
	$(form_confirm).on('submit', function(e) {
		// Prevent form submission
		e.preventDefault();
		if( $('#Confirm_promokey').val().length == 4 &&  form_reg.valid() ) {
			$.ajax({
				url: 'sms.php?check_sms=1&code=' + $('#Confirm_promokey').val(),
				type: 'POST',
				data: form_reg.serialize(),
				success: function(json) {
					if (json.success) {
// 						form_confirm.html($('<h3></h3>', { text: 'Благодарим Вас за регистрацию в Бонусной программе лояльности.', 'class': 'text-success' }));
						form_confirm.html('<h3 class="text-success">Благодарим Вас за регистрацию в Бонусной программе лояльности.</h3>');
						$.ajax({
							url: form_reg.attr('action'),
							type: 'POST',
							data: form_reg.serialize(),
							success: function(result) {
								console.log(result);
							}
						});
					}else{
						$('Confirm_promokey').addClass('error');
					}
				}
			});
		}
	});

});