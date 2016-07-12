$(function() {
	$('.js-filter-group-scroll-pane').jScrollPane({
		autoReinitialise : true,
		verticalDragMinHeight: 9,
		verticalDragMaxHeight: 9,
		horizontalDragMinWidth: 9,
		horizontalDragMaxWidth: 9
	});


	/*$('.scroll-pane').jScrollPane(
		{
			autoReinitialise : true,
			verticalDragMinHeight: 9,
			verticalDragMaxHeight: 9,
			horizontalDragMinWidth: 9,
			horizontalDragMaxWidth: 9
		}
	);*/
	var $selects = $('select.select_easydropdown');
						
	$selects.easyDropDown({
		cutOff: 10,
		wrapperClass: 'my-dropdown-class',
		onChange: function(selected){
			// do something
	}
	});
	
});