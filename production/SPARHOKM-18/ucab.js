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

        console.log(dependences[needValue]);

        needArray[0] = '#' + dependences[needValue][0];
        needArray[1] = '#' + dependences[needValue][1];
        needArray[2] = '#' + dependences[needValue][2];

        $(needArray[0]).addClass('ucab-navi__link--active');
        $(needArray[1]).addClass('ucab-group--active');
        $(needArray[2]).addClass('ucab-tab--active');
    }



    $(document).on('click', '.ucab-navi__link', function () {
        ucabSectionToggle($(this).attr('id'), ucabNaviDependences);
        console.log('ucab-navi__link');
    });

    $(document).on('click', '.ucab-tab', function () {
        ucabSectionToggle($(this).attr('id'), ucabNaviDependences);
    });


    $(".profile-user-data-store").fancySelect();

    //подстановка полей при регистрации
    $(".ucab-regblock form").on("submit",function(){
        var email = $('[name="REGISTER[EMAIL]"]').val();
        var password = $('[name="REGISTER[PASSWORD]"]').val();

        if (email.length>0)
            $('[name="REGISTER[LOGIN]"]').val(email);
        else
            $('[name="REGISTER[LOGIN]"]').val("login");

        if (password.length>0)
            $('[name="REGISTER[CONFIRM_PASSWORD]"]').val(password);
        else
            $('[name="REGISTER[CONFIRM_PASSWORD]"]').val("123");

        return true;
    });

    //подстановка логина при редактированни профиля
    $("form.profile-info-form").on("submit",function(){
        var email = $('[name=EMAIL]').val();

        if (email.length>0)
            $('[name=LOGIN]').val(email);
        else
            $('[name=LOGIN]').val("login");

        return true;
    });

    //добавить карту
    $("#add-card").on("click",function () {
        var num = $(".bonuses-card-identifier__input").val();

        if(num.length)
        {
            $.getJSON("/cabinet/add_card.php", {numbk: num}, function (data) {
                if (data.success == 1) {
                    location.reload();
                }
                else {
                    //card-exist - карта уже привязана к пользователю
                    //card-not-find - карта не найдена
                    //not-auth - не авторизован
                    alert(data.error);
                }
            });
        }
    })


    //выслать карту
    $(".bonuses-card-identifier__sms-button").on("click",function () {
        $.getJSON("/cabinet/get_card.php", function (data) {
            if (data.success == 1) {
               alert("смс отправлена");
            }
            else {
                //empty-phone - не указан телефон в профиле
                //card-not-find - карта не найдена
                //not-auth - не авторизован
                alert(data.error);
            }
        });
    })


    // бегунок уровня скидки
    var dataDiscountLevel = $('.bonuses-discount-level-progress-line__rhomb').attr('data-discount-level'); //data-discount-level
    console.log('dataDiscountLevel = ' + dataDiscountLevel);
});