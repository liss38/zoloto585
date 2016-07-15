jQuery(document).ready(function ($) {
	
	$(".bx_filter_select_block .drop").click(function(){
		$(this).toggleClass("active");
	})
	
	$('#phone_question').inputmask("(999)999-99-99");
	$('#phone_question_mob').inputmask("(999)999-99-99");

	var validate_question = {
        rules:{
            name:{ 		required: true, minlength: 3 },
            phone:{ 	required: true, minlength: 11 },
            email:{ 	required: true, email: true},
            message:{ 	required: true},
        },
        messages:{
            name:{ required: "Имя обязательно ", minlength: "Должно быть минимум 3 символа"},
            phone:{ required: "Телефон обязателен ", minlength: "Должно быть минимум 11 символов"},
            email:{ required: "Email обязателен ", email: "Укажите правильно e-mail"},
            message:{ required: "Поле не должно быть пустым"},
        },
        highlight: function(element) {
            $(element).addClass('red_error');
        },
        unhighlight: function(element) {
            $(element).removeClass('red_error');
        },
        errorPlacement: function(error, element) {
		    element.attr("placeholder", error.text());
		},
        onfocusout: function(element) {
            this.element(element);
        },
	    onkeyup: false,
	    onclick: false,
	    onsubmit: false
    };

    var form_question = $('#form-question');
    var form_question_mob = $('#form-question_mob');

	form_question.validate(validate_question);
	form_question_mob.validate(validate_question);

    $(form_question).on('submit', function(e) {
		e.preventDefault();
		if( form_question.valid() ){
			var name =    $('#name_question').val();
			var email =   $('#email_question').val();
			var phone =   '+7' + $('#phone_question').val();
			var message = $('#message_question').val();
			var city =    $('#region_feedback').val();

	        $.ajax({
	            url: "/tools/send_mail.php",
	            type: "post",
	            dataType: "html",
	            data: {
	                name: name,
	                email: email,
	                phone: phone,
	                city: city,
	                message: message
	            },
	            success: function (ans) {
					$('#form-question').hide();
					$('.zag_big').show();
	            }
	        });
			$('.btn_question').attr("disabled", true);
	        $('.btn_question').html('Отправка ...');
		}
		return false;
	});

	$(form_question_mob).on('submit', function(e) {
		e.preventDefault();
		if( form_question_mob.valid() ){
			var name =    $('#name_question_mob').val();
			var email =   $('#email_question_mob').val();
			var phone =   '+7' + $('#phone_question_mob').val();
			var message = $('#message_question_mob').val();
			var city =    $('#region_feedback').val();

	        $.ajax({
	            url: "/tools/send_mail.php",
	            type: "post",
	            dataType: "html",
	            data: {
	                name: name,
	                email: email,
	                phone: phone,
	                city: city,
	                message: message
	            },
	            success: function (ans) {
					$('#form-question_mob').addClass('hide');
					$('.zag_mob').show();
					setTimeout(resetFormMob, 7000);
	            }
	        });
	        $('.btn_question').attr("disabled", true);
	        $('.btn_question').html('Отправка ...');
		}
		return false;
	});

	$('.question-popup').magnificPopup({
        type: 'inline',
        preloader: false,
        modal: false,
        focus: false,
        callbacks: {
		    open: function() {
		    	console.log('open');
		    },
		    close: function() {
		    	$('#form-question').trigger( 'reset' );
		    	$('#form-question').show();
		    	$('.zag_big').hide();
		    	$('.btn_question').attr("disabled", false);
				$('.btn_question').html('Отправить вопрос');
		    }
		}
    });

});
function resetFormMob(){
	$('#form-question_mob').trigger( 'reset' );
	$('#form-question_mob').removeClass('hide');
	$('.zag_mob').hide();
	$('.btn_question').attr("disabled", false);
	$('.btn_question').html('Отправить вопрос');
}
jQuery(document).ready(function ($) {

    $(document).on('click', '#select_city', function(){
        $('#modal_form').animate({opacity: 0, top: '45%'}, 200, function(){
            $(this).css('display', 'none');
            $('#overlay').fadeOut(400);
        });
        $.cookie("city", $('.jq-selectbox__select-text').text(), { expires : 365, path: '/' });
        if($('#region_id').length){
            $('#region_id option:contains("'+$('.jq-selectbox__select-text').text()+'")').attr('selected', 'selected');
            $('#region_id').trigger('change');
        } 
        set_city();
        return false;
    });
    $(document).on('click', '.choose-city-m a[data-city]', function(){
        $.cookie('city', $(this).data('city'), { expires: 365, path: '/' });
        if($('#region_id').length){
            $('#region_id option:contains("'+$(this).data('city')+'")').attr('selected', 'selected');
            $('#region_id').trigger('change');
        } 
        set_city();
        $('.container').toggleClass("open-sidebar");
        return false;
    });

    $(document).on('click', '#choose-city a', function(event){
        event.preventDefault();
        $('#overlay').fadeIn(400, function(){
            $('#modal_form')
            .css('display', 'block')
            .animate({opacity: 1, top: '50%'}, 200);
        });
        return false;
    });
    $(document).on('click', '#modal_close, #overlay', function(){
        $('#modal_form')
        .animate({opacity: 0, top: '45%'}, 200,
            function(){
                $(this).css('display', 'none');
                $('#overlay').fadeOut(400);
            });
    });

    $("#carousel_section").owlCarousel({
        autoPlay: false,
        items: 4, //10 items above 1000px browser width
        itemsDesktop: [750, 3], //5 items between 1000px and 901px
        itemsDesktopSmall: [500, 2], // betweem 900px and 601px
        itemsTablet: [300, 2], //2 items between 600 and 0
        itemsMobile: false, // itemsMobile disabled - inherit from itemsTablet option
        navigation: false,
        pagination: true
    });

    $("#carousel_special_col").owlCarousel({
            autoPlay: false,
        items: 5, //10 items above 1000px browser width
        itemsDesktop: [900, 3], //5 items between 1000px and 901px
        itemsDesktopSmall: [500, 2], // betweem 900px and 601px
        itemsTablet: [400, 3], //2 items between 600 and 0
        itemsMobile: false, // itemsMobile disabled - inherit from itemsTablet option
        navigation: true,
        pagination: false
    });
    $('.catalog-item-control__remove').on("click", function () {
        $.ajax({
            url: "/favorites/add.php",
            type: "post",
            dataType: "text",
            data: {id: $(this).data('attr'), action: 'remove'},
            success: function (ans) {
                $('#fav_count').html(ans);
            }
        });
    });
    
/////////////////////////////////////////////
    $('span.catalog-item-control__add').on("click", function () {
        if ($(this).hasClass('act')) {
            $(this,'[data-role=fav]').removeClass('act');
            $('.img-block .mark_fav').removeClass('act');
            $.ajax({
                url: "/favorites/add.php",
                type: "post",
                dataType: "text",
                data: {id: $(this).parent().data('id'), action: 'remove'},
                success: function (ans) {
                    $('[data-role=fav] span').html('Добавить <br> в избранное');
                    $('#fav_count').html(ans);
                }
            });
        } else {
            $(this,'[data-role=fav]').addClass('act');
            $('.img-block .mark_fav').addClass('act');
            $.ajax({
                url: "/favorites/add.php",
                type: "post",
                dataType: "text",
                data: {id: $(this).parent().data('id'), action: 'add'},
                success: function (ans) {
                    $('[data-role=fav] span').html('Добавлено <br> в избранное');
                    $('#fav_count').html(ans);
                }
            });
        }
        return false;
    });

    //     compare add/delete button
    $(document).on("click", '.catalog-item-control__comparison', function () {
        var role = $(this).data('role');
        var id = $(this).parent().data('id');
        if (!$(this).hasClass('act')) {
            $(this,'[data-role=compare]').addClass('act');
            $('.img-block .mark_compare').addClass('act');
            $('.box_marks .'+id +'').addClass('act');
            $.get("/ajax/list_compare.php",{
                action: "ADD_TO_COMPARE_LIST", id: id},
                function(data) {
                    $("#compare_list_count").html(data);
                    $('[data-role=compare] span').html('Добавлено <br> в сравнение');
                }
            );
        } else {
            $(this,'[data-role=compare]').removeClass('act');
            $('.img-block .mark_compare').removeClass('act');
            $('.box_marks .'+id +'').removeClass('act');
            $.get("/ajax/list_compare.php",{
                action: "DELETE_FROM_COMPARE_LIST", id: id},
                function(data) {
                    $("#compare_list_count").html(data);
                    $('[data-role=compare] span').html('Добавить <br> в сравнение');
                }
            );
        }
        return false;
    });
/////////////////////////////////////////////

    $('span.mark_fav,[data-role=fav]').on("click", function () {
        if ($(this).hasClass('act')) {
            $(this,'[data-role=fav]').removeClass('act');
            $('.img-block .mark_fav').removeClass('act');
            // $('a.' + class_name[1]).find('.num').text(parseInt(count) - 1);
            $.ajax({
                url: "/favorites/add.php",
                type: "post",
                dataType: "text",
                data: {id: $(this).parent().parent().data('id'), action: 'remove'},
                success: function (ans) {
                    // $('[href=favorites]').html('<img alt="" src="/images/star.png">  избранное '+ans);
                    $('[data-role=fav] span').html('Добавить <br> в избранное');
                    $('#fav_count').html(ans);
                }
            });
        } else {
            $(this,'[data-role=fav]').addClass('act');
            $('.img-block .mark_fav').addClass('act');
            // $('a.' + class_name[1]).find('.num').html(parseInt(count) + 1);
            $.ajax({
                url: "/favorites/add.php",
                type: "post",
                dataType: "text",
                data: {id: $(this).parent().parent().data('id'), action: 'add'},
                success: function (ans) {
                    // $('[href~=favorites]').html('<img alt="" src="/images/star.png">     избранное '+ans);
                    $('[data-role=fav] span').html('Добавлено <br> в избранное');
                    $('#fav_count').html(ans);
                }
            });
        }
        return false;
    });

    //     compare add/delete button
    $('span.mark_compare,[data-role=compare]').on("click", function () {
        var role = $(this).data('role');
        var id = $(this).parent().parent().data('id');
        if (!$(this).hasClass('act')) {
            $(this,'[data-role=compare]').addClass('act');
            $('.img-block .mark_compare').addClass('act');
            $('.box_marks .'+id +'').addClass('act');
            $.get("/ajax/list_compare.php",{
                action: "ADD_TO_COMPARE_LIST", id: id},
                function(data) {
                    $("#compare_list_count").html(data);
                    $('[data-role=compare] span').html('Добавлено <br> в сравнение');
                }
            );
        } else {
            $(this,'[data-role=compare]').removeClass('act');
            $('.img-block .mark_compare').removeClass('act');
            $('.box_marks .'+id +'').removeClass('act');
            $.get("/ajax/list_compare.php",{
                action: "DELETE_FROM_COMPARE_LIST", id: id},
                function(data) {
                    $("#compare_list_count").html(data);
                    $('[data-role=compare] span').html('Добавить <br> в сравнение');
                }
            );
        }
        return false;
    });

    $('#dispatches_in').find('.btn').on("click", function () {
        var input = $('#dispatches_in').find('input').val();
        if (input != '') {
            $.ajax({
                url: "/tools/email_rass.php",
                type: "post",
                dataType: "html",
                data: {type: 'in', email: input},
                success: function (ans) {
                    // $('.main_cat').find('.catalog_list').html($(ans).find('.catalog_list').html());
                }
            });
        }
    });

    $('#dispatches_out').find('.btn').on("click", function () {
        var input = $('#dispatches_in').find('input').val();
        $.ajax({
            url: "/tools/email_rass.php",
            type: "post",
            dataType: "html",
            data: {type: 'out', email: input},
            success: function (ans) {
                //  $('.main_cat').find('.catalog_list').html($(ans).find('.catalog_list').html());
            }
        });
    });
    $('#question').find('.popup_close').on("click", function () {
        location.reload();
    });
	$('#perfect_scroll_bar, #perfect_scroll').perfectScrollbar();

	$(document).on( 'change', '.select-size', function(){
		var minRing  = $('#arrFilter_16_MIN :selected').val();
		var minBraslet  = $('#arrFilter_21_MIN :selected').val();
		var minCepi  = $('#arrFilter_20_MIN :selected').val();

		var optionRing = $('select #arrFilter_16_MAX');
		var optionBraslet = $('select #arrFilter_21_MAX');
		var optionCepi = $('select #arrFilter_20_MAX');

		optionRing.each(function(index){
			if ($(this).val() <= minRing-1){
				$(this).hide();
			}
			else{
				$(this).show();
			}
		});
		optionBraslet.each(function(index){
			if ($(this).val() <= minBraslet-1){
				$(this).hide();
			}
			else{
				$(this).show();
			}
		});
		optionCepi.each(function(index){
			if ($(this).val() <= minCepi-1){
				$(this).hide();
			}
			else{
				$(this).show();
			}
		});
	});


	$('.more_mat').on( 'click', function(){
		$(this).toggleClass('open');
		$(this).parent().find('.hidden-check').slideToggle();
	});
	$('.more_vst').on( 'click', function(){
		$(this).toggleClass('open');
		$(this).parent().find('.hidden-check').slideToggle();
	});

    $('.bx_filter_input_checkbox').find('input').on( 'click', function () {
        $(this).siblings().toggleClass("active");
    });
    $('.bx_filter_block #10').on( 'click', function () {
        $(this).toggleClass("active");
        $('.bx_filter_block #30').removeClass("active");
        $('.bx_filter_block #50').removeClass("active");
    });
    $('.bx_filter_block #30').on( 'click', function () {
        $(this).toggleClass("active");
        $('.bx_filter_block #10').removeClass("active");
        $('.bx_filter_block #50').removeClass("active");
    });
    $('.bx_filter_block #50').on( 'click', function () {
        $(this).toggleClass("active");
        $('.bx_filter_block #10').removeClass("active");
        $('.bx_filter_block #30').removeClass("active");
    });
    //multilevel menu
    $(".nav > li:has('div')").each(function () {
        $(this).find("a:first").addClass("multilevel");
    });

    $(document).on( 'click', '.drop_select .select_inp' , function(){
        $('.down_select').slideToggle();
    });

    //mobile search
    $(document).on( "click", ".search_m", function () {
        $(".search_mobile").slideToggle();
    });

    $('.select_drop').fancySelect();
    //$(".select_drop").selectmenu();


    $(document).on( "click", ".toggle h3", function () {
        $(this).parent().toggleClass("open");
    });

    $(document).on( "click", ".dop h2", function () {
        $(".dop_inp").slideToggle();
        $(this).toggleClass('active');
    });

    var d = new Date();
    var day = d.getDate();
    var month = d.getMonth();
    var year = d.getFullYear() - 14;
    $("#birth_date").datepicker({
        defaultDate: "-15y",
        yearRange: "1915:2002",
        changeMonth: true,
        changeYear: true,
        numberOfMonths: 1,
        dateFormat: "dd/mm/yy",
        maxDate: new Date(year, month, day),
        onClose: function (selectedDate) {
            $("#to_date").datepicker("option", "minDate", selectedDate);
        }
    });
    $("#doc_date").datepicker({
        yearRange: "1915:2016",
        changeMonth: true,
        changeYear: true,
        numberOfMonths: 1,
        dateFormat: "dd/mm/yy",
        onClose: function (selectedDate) {
            $("#to_date").datepicker("option", "minDate", selectedDate);
        }
    });

    $('.popup-modal').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#username',
        modal: true
    });

    $(document).on('click', '.popup_close', function (e) {
        e.preventDefault();
        $.magnificPopup.close();
    });

    //inp file
    $(document).on('click', ".file span, .file input[type='text']", function () {
        $(this).parent().parent().children("input[type='file']").trigger("click");
    });

    $(document).on('change', ".file input[type='file']", function () {
        $(this).parent().find("input[type='text']").val($(this).val().split('\\').pop());
    });
    $(document).on('click', ".show", function () {
        var $show_box = $(this).parent().find(".show_box");
        $show_box.focus();
        $(this).toggleClass("hide");
        $show_box.toggleClass('open').slideToggle();
    });
    $('#reg_form').find('#phone').inputmask("+7(999)999-99-99");
    var check1 = 0;
    var check2 = 0;
    var check3 = 0;
    var check4 = 0;
    var check5 = 0;
    var check6 = 0;
    var check7 = 0;
    var check8 = 0;
	var check11 = 0;
    $('#reg_form').find('#name').blur(function () {
        if ($(this).val() != '') {
            $(this).removeClass('red_place');
            $(this).attr('placeholder', '');
            check5 = 1;
        } else {
            $(this).addClass('red_place');
            $(this).attr('placeholder', 'Это поле не должно быть пустым');
            check5 = 0;
        }
    });
    $('#reg_form').find('#surname').blur(function () {
        if ($(this).val() != '') {
            $(this).removeClass('red_place');
            $(this).attr('placeholder', '');
            check8 = 1;
        } else {
            $(this).addClass('red_place');
            $(this).attr('placeholder', 'Это поле не должно быть пустым');
            check8 = 0;
        }
    });
    $('#reg_form').find('#phone').blur(function () {
        if ($(this).val() != '') {
            $(this).removeClass('red_place');
            $(this).attr('placeholder', '');
            check6 = 1;
        } else {
            $(this).addClass('red_place');
            $(this).attr('placeholder', 'Это поле не должно быть пустым');
            check6 = 0;
        }
    });
    $('#reg_form').find('#email').blur(function () {
        if ($(this).val() != '') {
            var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
            if (pattern.test($(this).val())) {
                $(this).removeClass('red_place');
                $(this).attr('placeholder', '');
                check7 = 1;
            } else {
                $(this).addClass('red_place');
                $(this).val('');
                $(this).attr('placeholder', 'Неверный формат почты');
                check7 = 0;
            }
        } else {
            $(this).addClass('red_place');
            $(this).attr('placeholder', 'Это поле не должно быть пустым');
            check7 = 0;
        }
    });
    $('#message').blur(function () {
        if ($(this).val() != '') {
            $(this).removeClass('red_place');
            $(this).attr('placeholder', '');
            check4 = 1;
        } else {
            $(this).addClass('red_place');
            $(this).attr('placeholder', 'Это поле не должно быть пустым');
            check4 = 0;
        }
    });

    setInterval(function () {
        if (check5 == 1 && check6 == 1 && check7 == 1 && check8 == 1) {
            $('#reg_form').find('.btn').removeAttr('disabled');
        }
        else {
            $('#reg_form').find('.btn').attr('disabled', true);
        }
    }, 1000);

	$( ".smartfilter" ).delegate( "input", "change", function() {
    	if( $('.bx_filter_popup_result#modef').is(':visible') ){
    		$('.bx_filter_container_modef #loader').remove();
    	}
	});
});

$(window).scroll(function () {
    var scrt = $(document).scrollTop();
    if (scrt < 700)
        $('#back-top-wrapper').removeClass('visible-desktop');
    else
        $('#back-top-wrapper').addClass('visible-desktop');
});

jQuery(document).ready(function ($) {
    var col = $('.items-compare .item').length;
    var height = $('.items-compare .item').height();
    $('.items-compare .scroll-inner').width(col * 205);
    $('.items-compare .scroll-inner').height(height);



    if ($(window).width() <= '749')
    {

        $('.katalog-menu > ul > li > a').click(function(event) {
            event.preventDefault();
            $(this).parent().siblings().find('a').removeClass('active');
            $(this).parent().siblings().find('.sub-menu').slideUp(500);
            $(this).parent().find('.kat-main').removeClass('active');
            $(this).parent().find('ul').slideUp();
            $(this).toggleClass('active');
            $(this).parent().find('.sub-menu').slideToggle(500);
        });

        $('.katalog-menu .sub-menu .kategory .kat-main').click(function(event) {
            event.preventDefault();
            $(this).toggleClass('active');
            $(this).parent().find('ul').slideToggle(500);
        });
    }
    else
    {
        $(function()
        {
            var width = $('.header-links').width();
            var subMenu = width - 338;
            $('.sub-menu').width(subMenu);
            // console.log(width);
        });

        $(window).resize(function() {
            var width = $('.header-links').width();
            var subMenu = width - 338;
            $('.sub-menu').width(subMenu);
            // console.log(width);
        });
    }

    $('.choose-city-m > a').click(function(event) {
        event.preventDefault();
        $(this).parent().find('ul').slideToggle(500);
    });
});



$(function(){
    if($('.items-compare').length) {
    	var element = $('.items-compare').jScrollPane({
            showArrows: true
        });
        var api = element.data('jsp');

    	var rtime;
    	var timeout = false;
    	var delta = 400;
    	$(window).resize(function() {
    	    rtime = new Date();
    	    if (timeout === false) {
    	        timeout = true;
    	        setTimeout(resizeend, delta);
    	    }
    	});

    	function resizeend() {
    	    if (new Date() - rtime < delta) {
    	        setTimeout(resizeend, delta);
    	    } else {
    	        timeout = false;
    	        api.reinitialise();
    	        $('.jspContainer').height(634);
    	    }
    	}
        $('.item td a.delete').on('click', function(){
            var id = $(this).parents('.item').attr('id');
            $.get("/ajax/list_compare.php",{
                action: "DELETE_FROM_COMPARE_LIST", id: id},
                function(data) {
                    $('#' + id + '').remove();
                    var col = $('.items-compare .item').length;
                    $('.scroll-inner').width(col * 205);
                    api.reinitialise();
                    $("#compare_list_count").html(data);
                    if(data == 0){
    	                var html = '<div class="no-item">Не выбраны товары для сравнения. Отметьте<span></span> на нужном вам украшении.<a href="/catalog/" class="btn btn_red">Добавить</a></div>';
    	                $('#compare-page').html(html);
                    }
                }
            );
        });
    }
});


$(function()
{
    $('.items-compare').bind(
        'jsp-scroll-x',
        function(event, scrollPositionX, isAtLeft, isAtRight)
        {

            if(isAtLeft == false)
            {
                $('.items-compare').addClass('shadow-l');
            }else{
	            $('.items-compare').removeClass('shadow-l');
            }
            if(isAtRight == false)
            {
                $('.items-compare').addClass('shadow-r');
            }else{
	            $('.items-compare').removeClass('shadow-r');
            }

        }
    )
    $('.items-compare').bind(
			'jsp-initialised',
			function(event, isScrollable)
			{
				if(isScrollable == false){
					$('.items-compare').removeClass('shadow-l');
					$('.items-compare').removeClass('shadow-r');
				}
			}
		)
});

(function($) {
    var _dataFn = $.fn.data;
    $.fn.data = function(key, val) {
        if (typeof val !== 'undefined') {
            $.expr.attrHandle[key] = function(elem) {
                return $(elem).attr(key) || $(elem).data(key);
            };
        }
        return _dataFn.apply(this, arguments);
    };
})(jQuery);


function getval(sel) {
    var size_val = sel.value;
    var class_item = $(sel).data('id');
    $('.' + class_item + '').hide().removeClass('bal');
    $('[data-weight_product = ' + size_val + ']').show();
    $('[data-price_retail = ' + size_val + ']').show();
    $('[data-price_bonus_card = ' + size_val + ']').show().addClass('bal');
    var price = ($('.bal').data('bonus')/100)*9;
    var b = Math.round(price);
    $(this).html(b);
}

function set_city(){
    var city = $.cookie('city');
    $('.choose-city-m > a').text(city);
    $('#choose-city a span').text(city);
    $('select.select_city option:contains("'+city+'")').attr('selected', 'selected');
    var item = $('.catalog_detail'), id = item.data('id');

		if($(".pcard-store").length>0)
		{
			getOfferData();
		}
         if( $(".bron_yes").length>0)
         {
             bron_button();
         }


  	if( item.length > 0 && !!id ){
        $('#podbor_modal').addClass('non');
        $.ajax({
            url: "/about/address/get_city_availible.php",
            data: {id: id},
            type: "post",
            success: function(data){
                $('#podbor_popup').html(data);
            }
        }).done(function() {
            if( $(document).find('#perfect_scroll_bar tr').length ){
                $(document).find('.btn_prize,#podbor_modal').removeClass('non');
                $(document).find('.wait').addClass('non');
            }else{
                $(document).find('.btn_prize,#podbor_modal').addClass('non');
                $(document).find('.wait').removeClass('non');
            }
        });
    }else{
        $.ajax({
            url: "/bitrix/templates/.default/iblock/special_collection.php",
            data: {city: city},
            type: "get",
            success: function(data){
                $('.special_collection .wrp.inner_slider').html(data);
                $("#carousel_special_col").owlCarousel({
                    autoPlay: false,
                    items: 5, //10 items above 1000px browser width
                    itemsDesktop: [900, 3], //5 items between 1000px and 901px
                    itemsDesktopSmall: [500, 2], // betweem 900px and 601px
                    itemsTablet: [400, 3], //2 items between 600 and 0
                    itemsMobile: false, // itemsMobile disabled - inherit from itemsTablet option
                    navigation: true,
                    pagination: false
                });
            }
        });
    }
}


/*
	АКЦИЯ В КАТАЛОГЕ
*/
$(document).ready(function () {
	function setCaBannerBackground () {
		var caBannerImageMob = $('.ca-banner').data('ca-banner-image-mob'), // url картинки фона для мобильника
			caBannerImageDesktop = $('.ca-banner').data('ca-banner-image-desktop'); // url картинки фона для десктопа

		var width = parseInt($(window).width()); // текущая ширина экрана/браузера

		if(width < 623) $('.ca-banner').css('background-image', 'url(' + caBannerImageMob + ')'); // если ширина браузера меньше 600px, то в качестве фона делаем картинку 1
		else $('.ca-banner').css('background-image', 'url(' + caBannerImageDesktop + ')'); // иначе делаем фоном картинку два
	}

	// инициализируем функцию при загрузке страницы + каждый раз при "ресайзе" экрана/браузера
	setCaBannerBackground ();
	$(window).resize(function () { setCaBannerBackground (); });

	function setCaGoodsBackground () {
		var caGoodsBackground = $('.ca-goods').data('ca-goods-background'); // url картинки фона
		$('.ca-goods').css('background-image', 'url(' + caGoodsBackground + ')');
	}
	setCaGoodsBackground ();
});
/*END-of-АКЦИЯ В КАТАЛОГЕ*/