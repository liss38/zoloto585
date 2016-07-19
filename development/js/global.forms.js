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
});