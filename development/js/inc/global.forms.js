// ==============
// == forms.js ==
// ==============
;$(function () {
	$('.form').on('focusin', function (event) {
		var $_this = $(event.target);
		if($_this.hasClass('form__field-input')) $_this.parent().addClass('focus');
	});
	$('.form').on('focusout', function (event) {
		var $_this = $(event.target);
		if($_this.hasClass('form__field-input')) $_this.parent().removeClass('focus');
	});


	// кастомизированное текстовое поле input type="text" (form-textline.less)
	$('.form-textline').on('focusin', function (event) {
		$(this).addClass('form-textline--active');
	});
	$('.form-textline').on('focusout', function (event) {
		$(this).removeClass('form-textline--active');
	});
});
// 
// 
// 