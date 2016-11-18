
$(function() {
	$('.js-scroll-pane').jScrollPane(
		{
			autoReinitialise : true,
			verticalDragMinHeight: 9,
			verticalDragMaxHeight: 9,
			horizontalDragMinWidth: 9,
			horizontalDragMaxWidth: 9
		}
	);

	$("#js-Check, #js-Check-2, #js-Check-3").on('keypress', function() {
	    var that = this;
	
	    setTimeout(function() {
	        var res = /[^а-я ]/g.exec(that.value);
	        that.value = that.value.replace(res, '');
	    }, 0);
	});
	$('.js-landing_tab').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('.js-landing_tab').removeClass('active');
		$('.js-landing_tab_content').removeClass('current');

		$(this).addClass('active');
		$("#"+tab_id).addClass('current');
		
	})
});