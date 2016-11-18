/*
var popupTitleValid = null;
var popupContentValid = null;
var countdownID;

$(function () {
    // ====================
    // == index_popup.js ==
    // ====================

    var secondsCount = 7;

    $('.index-popup__countdown').text(secondsCount);

    function popupAnimate(swither) {
        $('.step2Button').removeClass('opacity');
        $('.error').removeClass('error');
        if (swither) {
            $('#index-popup-form').css({'display': 'block'});
            $('#index-popup-text').css({'display': 'none'});
            $('#get-book-user-name').val('');
            $('#get-book-user-email').val('');

            $('.index-popup__countdown').text(secondsCount);

            $('.index-popup__overlay').animate({opacity: 'show'}, 600);
            $('.index-popup__wrap').animate({opacity: 'show'}, 750);
        }
        else {
            $('.index-popup__overlay').animate({opacity: 'hide'}, 750);
            $('.index-popup__wrap').animate({opacity: 'hide'}, 500);
            clearInterval(countdownID);
        }
    }

    function popupClear() {
        $('#index-popup-form').css({'display': 'block'});
        $('#index-popup-text').css({'display': 'none'});
        $('#get-book-user-name').attr('value', '');
        $('#get-book-user-email').attr('value', '');
    }

    // по нажатию на "Х" попап закрывается
    $('.index-popup__close').on('click', function () {
        popupAnimate(0);
        // popupClear();
    });

    $(document).on('click', function (el) {
        var $el = $(el.target);
        if ($el.hasClass('js-kupons-book-modal')) {
            el.preventDefault();
            popupAnimate(1);
        }
        if ($el.hasClass('index-popup__overlay')) {
            popupAnimate(0);
            // popupClear();
        }
    });


    // ФОН ДЛЯ ПОПАПА
    // В html-исходнике для каждого элемента с class="index-popup__bg-wrap"
    // берёт значение атрибута src(кaртинка и путь к ней),
    // и заменяет через style="background-image: ..."
    // сами img удаляются
    $('.index-popup__bg-wrap').each(function (i, el) {
        $(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
        $(this).find('img').remove();
    });


    // переход по нажатию кнопки "отправить" между шагами попапа
    $('#index-popup-form').find('.form__button').on('click', function (event) {
        event.preventDefault();

        $('.error').removeClass('error');
        if (!popupTitleValid) {
            popupTitleValid = $(".popupTitle").html();
            popupContentValid = $(".popupContent").html();
        }

        if ($('.step2Button').hasClass('opacity'))return;

        var userName = $.trim($('#get-book-user-name').val()),
            userEmail = $.trim($('#get-book-user-email').val()),
            formOK = false,
            nameOK = false,
            emailOK = false,
            emailRegExp = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;

        // проверка данных введённых с формы
        if (userName.length >= 2) nameOK = true;
        if (userEmail.search(emailRegExp) !== -1) emailOK = true;

        if(!nameOK){
            $('#get-book-user-name').parent().addClass("error");
        }

        if(!emailOK){
            $('#get-book-user-email').parent().addClass("error");
        }

        formOK = nameOK && emailOK;

        if (formOK) {
            $('.step2Button').addClass('opacity');

            $.post("ajax.php", {act: 'sendEmail', name: userName, email: userEmail}, function (data) {
                data = data.trim();
                if (data == '1') {
                    $(".popupTitle").html('ОШИБКА!');
                    $(".popupContent").html("<p class='index-popup__text_p'><span class='index-popup__text_warning'>Внимание:</span> Указанный email адрес уже был зарегистрирован ранее.</p>");
                } else {
                    $(".popupTitle").html(popupTitleValid);
                    $(".popupContent").html(popupContentValid);
                }

                $('#index-popup-form').hide();
                $('#index-popup-text').show();

                // обратный отсчёт посекундно
                var start = +$('.index-popup__countdown').text(),
                    $span = $('.index-popup__countdown');

                function countdown() {
                    $span.text(start--);
                    if (start < 0) {
                        clearInterval(countdownID);
                        popupAnimate(0);
                    }
                }

                countdownID = setInterval(countdown, 1000);
            });
        }
    });
});

// первоначальное скрытие всех частей попапа
$(document).ready(function () {
    $('.index-popup__overlay').css('display', 'none');
    $('.index-popup__wrap').css('display', 'none');
    $('#index-popup-text').css({'display': 'none'});
});
*/