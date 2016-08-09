// ====================
// = ПОДБОР УКРАШЕНИЯ =
// ====================
;$(function () {
	var tab = 'index-filter__header',
		$tab = $('.' + tab),
		active = tab + '--active',

		filter = 'filter-mini',
		$filter = $('.' + filter),
		opened = filter + '--opened';

	$tab.on('click', function () {
		if($filter.hasClass(opened)) {
			$filter.removeClass(opened);
			$tab.removeClass(active);
		}
		else {
			$filter.addClass(opened);
			$tab.addClass(active);
		}
	});
});
// 
// 
// 