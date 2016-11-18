/** 
 * Работа с избранными товарами 
 */
function toggleFavorite(itemId, object, successHandlerAdd, successHandlerDelete) {
    arRequest = {
        url: "/favorites/ajaxHandler.php",
        type: "post",
        dataType: "text",
        context: object,
        data: {
            id: itemId
        }
    };
    $(object).toggleClass('act');
    //
    if ($(object).hasClass('act')) {
        arRequest.data.action = 'add';
        arRequest.success = successHandlerAdd;
    } else {
        arRequest.data.action = 'delete';
        arRequest.success = successHandlerDelete;
    }
    $.ajax(arRequest);
}


function markFavorites() {
    var topCntContainer = $('#top-favirites-cnt');
    $.post('/favorites/ajaxHandler.php', {'action': 'list'}, function(data){
    	try {
    		var oFavorites = $.parseJSON(data);    		
    		topCntContainer.text(oFavorites.length);
    		$.each(oFavorites, function(k, itemId) {
    			var item = $('#favorites_item_' + itemId);
	    		if (item.length) {
	    			$('.catalog-item-control__add', item)
	    				.addClass('act')
	    				.attr('title', 'Убрать из избранного');	    				
    			}
    		});
    	} catch (e) {
			topCntContainer.text(0);
    	}

    	$('.catalog-item-control__add').show();
    });    
}

/**
 * В крточке товара метод вызывается дважды
 * Один раз при загрузке страницы, другой раз в компоненте catalog.bigdata.products
 * Чтобы навесить обработчики на загруженные рекомендации
 * Поэтому сначала снимаем обработчичи через off
 */
function initFavoritesActions()
{	
	var topCntContainer = $('#top-favirites-cnt');
	$('span.catalog-item-control__add').off('click').on("click", function() {
	    itemId = $(this).parent().data('id');
	    toggleFavorite(itemId, this, function(result) {
	        $(this).attr('title', 'Убрать из избранного').addClass('act');
	        topCntContainer.html(result);
	    }, function(result) {
	        $(this).attr('title', 'Добавить в избранное').removeClass('act');
	        topCntContainer.html(result);
	    });
	    return false;
	});

	$('.catalog-item-control__remove').off('click').on("click", function() {
	    itemId = $(this).parent().data('id');
	    itemId = $(this).parent().data('id');
	    toggleFavorite(itemId, this, null, function(result) {
	        $(this).parent().parent().remove();
	        topCntContainer.html(result);
	        if ($('.favorites .catalog_list .catalog-item').length == 0) {
	            $('.favorites .no_faves').show();
	            $('.favorites .no_faves').html('<p>К сожалению, вы пока не отметили ни один товар.</p><p>Мы будем очень рады, если вы посетите наш каталог и выберете что-нибудь интересное.</p>');
	        }
	    });
	});

	markFavorites();
}

if (window.frameCacheVars !== undefined) {    
    BX.addCustomEvent('onFrameDataReceived' , function(json) {    	        
        initFavoritesActions();
    });
} else {
    BX.ready(function() {
    	initFavoritesActions();
    });
}