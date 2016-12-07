<?php

global $APPLICATION;
//print_r($APPLICATION);
//exit;
//echo isset($APPLICATION);
//exit;
include "helper.php";
include($_SERVER["DOCUMENT_ROOT"] . "/bitrix/header.php");
/*
$APPLICATION->SetAdditionalCSS("/action/kupon_na_million/styles/fancybox/jquery.fancybox.css?v=2.1.5");
$APPLICATION->SetAdditionalCSS("/action/kupon_na_million/styles/fonts.css");
$APPLICATION->SetAdditionalCSS("/action/kupon_na_million/styles/forms.min.css");
$APPLICATION->SetAdditionalCSS("/action/kupon_na_million/styles/index_popup.min.css");
$APPLICATION->SetAdditionalCSS("/action/kupon_na_million/styles/style_new.css");
$APPLICATION->SetAdditionalCSS("/action/kupon_na_million/styles/george.css");
<link href="styles/kupon_na_milliion.list.css" type="text/css" rel="stylesheet">
*/
$APPLICATION->SetTitle("Купон на миллион. Получение купонной книжки. Акция в Ювелирной сети 585GOLD");

$path = $_SERVER["DOCUMENT_ROOT"] . '/action/kupon_na_million/styles/kupon_na_million.list.css';
//include($path);
//echo $path.is_file($path)."|".$data;

//exit;

?>
<link href="styles/kupon_na_million.list.css" type="text/css" rel="stylesheet">
<section class="landing-slider-counter-wrapper">
    <div id="main-sl" class="owl-carousel owl-theme index-sl">
        <div class="item" style="background-color: #da1f28;">
            <div class="slide" onclick="">
                <img class="sl-mob" src="images/12_1.jpg" alt=""/>
                <img class="sl-desc" src="images/12.jpg" alt=""/>
            </div>

            <div class="landing-countdown_onslider">
                <div class="landing-countdown__inner">
                    <div class="landing-countdown__wrap-position">
                        <div class="landing-countdown__wrap">
                            <p class="landing-countdown__title">До конца акции</p>

                            <div class="wrap">
                                <div class="countdown clearfix">
                                    <div class="bloc-time days" data-init-value="15">
                                        <div class="figure days days-1">
                                            <span class="top">6</span>
           						        		<span class="top-back">
           						          			<span>6</span>
           						        		</span>
                                            <span class="bottom">6</span>
           						        		<span class="bottom-back">
           						          			<span>6</span>
           						        		</span>
                                        </div>
                                        <div class="figure days days-2">
                                            <span class="top">4</span>
           					        			<span class="top-back">
           					          				<span>4</span>
           					        			</span>
                                            <span class="bottom">4</span>
           					        			<span class="bottom-back">
           					          				<span>4</span>
           					       				</span>
                                        </div>
                                        <span class="count-title">Дней</span>
                                    </div>
                                    <div class="bloc-time hours" data-init-value="0">
                                        <div class="figure hours hours-1">
                                            <span class="top">2</span>
           						        		<span class="top-back">
           						          			<span>2</span>
           						        		</span>
                                            <span class="bottom">2</span>
           						        		<span class="bottom-back">
           						          			<span>2</span>
           						        		</span>
                                        </div>
                                        <div class="figure hours hours-2">
                                            <span class="top">4</span>
           					        			<span class="top-back">
           					          				<span>4</span>
           					        			</span>
                                            <span class="bottom">4</span>
           					        			<span class="bottom-back">
           					          				<span>4</span>
           					       				</span>
                                        </div>
                                        <span class="count-title">Часов</span>
                                    </div>
                                    <div class="bloc-time min" data-init-value="0">
                                        <div class="figure min min-1">
                                            <span class="top">0</span>
           					        			<span class="top-back">
           					          				<span>0</span>
           					        			</span>
                                            <span class="bottom">0</span>
           					        			<span class="bottom-back">
           					          				<span>0</span>
           						        		</span>
                                        </div>

                                        <div class="figure min min-2">
                                            <span class="top">0</span>
           						        		<span class="top-back">
           						          			<span>0</span>
           						        		</span>
                                            <span class="bottom">0</span>
           						        		<span class="bottom-back">
           						          			<span>0</span>
           						        		</span>
                                        </div>
                                        <span class="count-title">Минут</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <p class="landing-countdown__terms"><span class="landing-countdown-terms__dates">с 1 сентября по 31 декабря 2016 г.</span>
                        </p>

                        <a href="#" class="b-button  countdown-get-book  js-kupons-book-modal">получить купонную
                            книжку</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="item" style="background-color: #df212d">
            <div class="slide" onclick="" style="background-color: #df212d;">
                <img class="sl-mob" src="images/13_1.jpg" alt=""/>
                <img class="sl-desc" src="images/13.png" alt=""/>
            </div>
        </div>
    </div>
</section>

<div class="section  action-rules-tabs">
    <div class=" section__inner  action-rules-tabs__inner" id="action-rules-tabs-area">
        <a class="action-rules-tabs__item  bx-pager-link active" data-slide-index="0">1. ЗАРЕГИСТРИРУЙСЯ</a>
        <a class="action-rules-tabs__item  bx-pager-link" data-slide-index="1">2. ПОЛУЧИ КУПОНЫ</a>
        <a class="action-rules-tabs__item  bx-pager-link" data-slide-index="2">3. ПОКУПАЙ СО СКИДКОЙ</a>
        <a class="action-rules-tabs__item  bx-pager-link" data-slide-index="3">4. ВЫИГРАЙ МИЛЛИОН</a>
    </div>
</div>


<div class="section  action-rules">
    <div class="section__inner  action-rules__inner">
        <div class="action-rules-slider-prev" id="action-rules-slider-prev"></div>
        <div class="action-rules-slider-next" id="action-rules-slider-next"></div>
        <div class="medium-slider-wrapper">
            <div class="action-rules-slider">
                <article class="landing-slide-content  action-rule">
                    <div class="action-rule-img">
                        <img src="images/1_registr.png" alt="text" width="200" height="115">
                    </div>
                    <div class="action-rule-text">
	                    <p>
		                    Экономь на покупке украшений еще больше! Получи электронную купонную книжку "Купон на
		                    миллион" <br> с промокодами на скидки при бронировании товаров в интернет магазине zoloto585.ru.
		                    Для этого зарегистрируйся <br> в Акции, заполнив в форму анкеты своё имя и адрес электронной
		                    почты.
	                    </p>
                        <a href="#" class="b-button  action-rule-button  js-kupons-book-modal">Зарегистрироваться</a>
                    </div>
                </article>

                <article class="landing-slide-content  action-rule">
                    <div class="action-rule-img">
                        <img src="images/2kuponi.png" alt="text" width="200" height="115">
                    </div>
                    <div class="action-rule-text">
                        <p>
	                        Электронная купонная книжка "Купон на миллион" высылается Участникам настоящей Акции на
	                        электронную почту, указанную при регистрации. Каждый промокод купонной книжки дает скидку на
	                        определенные товары интернет магазина zoloto585.ru.
                        </p>
                        <a href="#" class="b-button  action-rule-button  js-kupons-book-modal">Зарегистрироваться</a>
                    </div>
                </article>

                <article class="landing-slide-content  action-rule">
                    <div class="action-rule-img">
                        <img src="images/3sale.png" alt="text" width="200" height="115">
                    </div>
                    <div class="action-rule-text">
	                    <p>
		                    Промокод дает возможность получить скидку к интернет-цене при бронировании товара на
		                    zoloto585.ru. Скидки <br> по промокодам не суммируются. Предложение действует на ограниченный
		                    перечень изделий. Количество изделий, участвующих в акции, ограничено.
	                    </p>
                        <a href="#" class="b-button  action-rule-button  js-kupons-book-modal">Зарегистрироваться</a>
                    </div>
                </article>

                <article class="landing-slide-content  action-rule">
                    <div class="action-rule-img">
                        <img src="images/4million.png" alt="text" width="200" height="115">
                    </div>
                    <div class="action-rule-text">
	                    <p>
		                    Каждый покупатель, бронирующий товар с применением промокодов, может стать участником Акции
		                    «Купон <br> на  миллион» и получить гарантированные подарки и возможность выиграть один миллион
		                    рублей. Для участия <br> в розыгрыше главного приза необходимо совершить не менее трёх покупок с
		                    применением разных купонов.
	                    </p>
                        <a href="#" class="b-button  action-rule-button  js-kupons-book-modal">Зарегистрироваться</a>
                    </div>
                </article>
            </div>
        </div>
    </div>
</div>


<div class="section  kupons">
    <div class="section__inner  kupons__inner">
        <h1 class="kupons-header">Получи 6 купонов<br><span>на самые выгодные покупки</span></h1>

        <div class="kupons-list">
            <div class="kupons-item">
                <div class="kupons-item-img">
                    <img src="images/slides/1.jpg" alt="kupon" width="490" height="314">
                </div>
                <h3 class="kupons-item-title">

                </h3>

                <div class="kupons-item-description">
                    <div class="kupons-item-text">
                        <p>Купон номиналом 10 000 рублей клиент может погасить полностью, оплатив им до 40% от стоимости
                            покупаемого изделия из товарных категорий «Изделия с драгоценными камнями» и «Изделия с
                            полудрагоценными камнями» на сумму от 25 000 р. Купон погашается по схеме: один купон - одна
                            покупка. Частичное погашение купона невозможно. Купон действителен с 01.09.2016 по
                            12.01.2017.</p>
                    </div>
                    <a href="#" class="b-button  kupons-button  js-kupons-book-modal">получить купонную книжку</a>
                </div>
            </div>


            <div class="kupons-item">
                <div class="kupons-item-img">
                    <img src="images/slides/2.jpg" alt="kupon" width="490" height="314">
                </div>
                <h3 class="kupons-item-title">

                </h3>

                <div class="kupons-item-description">
                    <div class="kupons-item-text">
                        <p>Купон номиналом 3 000 рублей клиент может погасить полностью, оплатив им до 30% от стоимости
                            покупаемого изделия из товарных категорий «Изделия с драгоценными камнями» и «Изделия с
                            полудрагоценными камнями» на сумму от 10 000 р. Купон погашается по схеме: один купон - одна
                            покупка. Частичное погашение купона невозможно. Купон действителен с 01.09.2016 по
                            12.01.2017.</p>
                    </div>
                    <a href="#" class="b-button  kupons-button  js-kupons-book-modal">получить купонную книжку</a>
                </div>
            </div>


            <div class="kupons-item">
                <div class="kupons-item-img">
                    <img src="images/slides/5.jpg" alt="kupon" width="490" height="314">
                </div>
                <h3 class="kupons-item-title">

                </h3>

                <div class="kupons-item-description">
                    <div class="kupons-item-text">
                        <p>Купон номиналом 1 000 рублей клиент может погасить полностью, оплатив им до 25% от стоимости
                            покупаемого изделия с фианитами из товарных категорий «Изделия с фианитами» и «Серебро»
                            (категория Спец. Серебро в акции не участвует) на сумму от 4000р. Купон погашается по
                            схеме: один купон - одна покупка. Частичное погашение купона невозможно. Купон действителен
                            с 01.09.2016 по 12.01.2017.
                        </p>
                    </div>
                    <a href="#" class="b-button  kupons-button  js-kupons-book-modal">получить купонную книжку</a>
                </div>
            </div>

            <div class="kupons-item">
                <div class="kupons-item-img">
                    <img src="images/slides/6.jpg" alt="kupon" width="490" height="314">
                </div>
                <h3 class="kupons-item-title">

                </h3>

                <div class="kupons-item-description">
                    <div class="kupons-item-text">
                        <p>Купон номиналом 1 000 рублей клиент может погасить полностью, оплатив им до 40% от стоимости покупаемого изделия из товарной категории «Серебро» на сумму от 2500р. Купон погашается по схеме: один купон - одна покупка. Частичное погашение купона невозможно. Купон действителен с 01.09.2016 по 12.01.2017</p>
                    </div>
                    <a href="#" class="b-button  kupons-button  js-kupons-book-modal">получить купонную книжку</a>
                </div>
            </div>

            <div class="kupons-item">
                <div class="kupons-item-img">
                    <img src="images/slides/7.jpg" alt="kupon" width="490" height="314">
                </div>
                <h3 class="kupons-item-title">

                </h3>

                <div class="kupons-item-description">
                    <div class="kupons-item-text">
                        <p>Купон номиналом 2 000 рублей клиент может погасить полностью, оплатив им до 30% от стоимости
                            покупаемого изделия из товарной категории «Цепи и Браслеты» (золото 585 пробы) на сумму от 6
                            700 р. Купон погашается по схеме: один купон - одна покупка. Частичное погашение купона
                            невозможно. Купон действителен с 01.09.2016 по 12.01.2017.</p>
                    </div>
                    <a href="#" class="b-button  kupons-button  js-kupons-book-modal">получить купонную книжку</a>
                </div>
            </div>

            <div class="kupons-item">
                <div class="kupons-item-img">
                    <img src="images/slides/10.jpg" alt="kupon" width="490" height="314">
                </div>
                <h3 class="kupons-item-title">

                </h3>

                <div class="kupons-item-description">
                    <div class="kupons-item-text">
                        <p>Купон номиналом 100 рублей клиент может погасить полностью, оплатив им до 30% от стоимости
                            покупаемого изделия из товарной категории «Бижутерия» на сумму от 350 р. Купон погашается по
                            схеме: один купон - одна покупка. Частичное погашение купона невозможно. Купон действителен
                            с 01.09.2016 по 12.01.2017.</p>
                    </div>
                    <a href="#" class="b-button  kupons-button  js-kupons-book-modal">получить купонную книжку</a>
                </div>
            </div>
        </div>


        <a href="#" class="b-button  kupons-get-book  js-kupons-book-modal">получить купонную книжку</a>
    </div>
</div>


<div class="section  conditions">
    <div class="section__inner  conditions__inner">
        <h1 class="conditions-header">условия акции</h1>

        <p class="conditions-indent">Электронная купонная книжка "Купон на миллион" – содержит купоны с промокодами на
            скидку на определенные товары. Промокоды действительны для бронирования товаров в интернет магазине
            zoloto585.ru.</p>

        <p class="conditions-indent">Электронная купонная книжка высылается Участникам настоящей Акции на электронную
            почту. </p>

        <p class="conditions-indent">Купоны погашаются по схеме: один купон - одна покупка. Частичное погашение купонов
            невозможно. Купоны (номиналы купонов) при погашении не суммируются. </p>

	    <p class="conditions-indent"> Предложение действует на ограниченный перечень изделий. Акционные цены не действуют на часы, футляры и товары с фиксированной ценой (шок цена).
            Количество изделий, участвующих в акции, ограничено. </p>

	    <p class="conditions-indent">Каждый покупатель, бронирующий товар на сайте с применением промокодов, может
            стать участником Акции «Купон на миллион» и получить гарантированные подарки
            и возможность выиграть один миллион рублей. Для участия в розыгрыше главного приза необходимо совершить не
            менее трёх покупок с применением разных купонов из одной Купонной книжки. </p>


        <p class="conditions-indent">Каждому покупателю, бронирующему товар на сайте, при оплате и получении товара в
            розничном магазине Ювелирной сети 585GOLD высылается SMS-сообщение
            с уникальным кодом, который каждый участник может зарегистрировать в Акции «Купон на миллион» с 01.09.2016
            по 30.12.2016.
            Подробнее об Акции <a href="http://zoloto585.ru/promo/"><u>«Купон на миллион»</u></a>
        </p>

        <a href="http://zoloto585.ru/action/" title="Подробнее" class="b-button  conditions-button">Подробнее</a>
    </div>
</div>
</main>


<!-- ПОПАП, МОДАЛЬНОЕ ОКНО -->
<?/*?>
<div class="index-popup__overlay">
    <div class="index-popup__wrap">
        <div class="index-popup__close">x</div>

        <!-- первый шаг/окно -->
        <div id="index-popup-form" class="index-popup__content">

            <!-- картинки фона -->
            <div class="index-popup__bg-wrap index-popup__bg_w290">
                <img class="index-popup__bg" src="images/index-popup__bg-001_290x400.jpg" alt="">
            </div>
            <div class="index-popup__bg-wrap index-popup__bg_w680">
                <img class="index-popup__bg" src="images/index-popup__bg-001.jpg" alt="">
            </div>
            <!-- картинки фона;end -->

            <!-- форма -->
            <form class="form index-popup__form">
                <div class="form__row">
                    <div class="form__field">
                        <span class="form__field-ico field-icons-1"></span>
                        <input id="get-book-user-name" class="form__field-input" type="text"
                               placeholder="введите ваше имя">
                    </div>
                </div>
                <div class="form__row">
                    <div class="form__field">
                        <span class="form__field-ico field-icons-2"></span>
                        <input id="get-book-user-email" class="form__field-input" type="text"
                               placeholder="введите email">
                    </div>
                </div>
                <div class="form__row">
                    <input class="form__button step2Button" type="submit" value="Получить купонную книжку">
                </div>
            </form>
            <!-- форма;end -->

        </div>

        <!-- второй шаг/окно -->
        <div id="index-popup-text" class="index-popup__content">

            <!-- картинки фона -->
            <div class="index-popup__bg-wrap index-popup__bg_w290">
                <img class="index-popup__bg" src="images/index-popup__bg-003_290x400.jpg" alt="">
            </div>
            <div class="index-popup__bg-wrap index-popup__bg_w680">
                <img class="index-popup__bg" src="images/index-popup__bg-003.jpg" alt="">
            </div>
            <!-- картинки фона;end -->

            <!-- текст с информацией -->
            <div class="index-popup__text">
                <p class="index-popup__text_first popupTitle">Спасибо!</p>

                <div class="popupContent">
                    <p class="index-popup__text_p">Вы успешно ввели имя и e-mail.</p>

                    <p class="index-popup__text_p"><span class="index-popup__text_warning">Внимание:</span> Вам на
                        электронную почту отправлено письмо со ссылкой для подтверждения e-mail.</p>

                    <p class="index-popup__text_p">Перейдите по ссылке в письме, чтобы завершить регистрацию.</p>

                    <p class="index-popup__text_last">Окно закроется через <span class="index-popup__countdown">7</span>
                        секунд</p>
                </div>
            </div>
            <!-- текст с информацией;end -->
        </div>
    </div>
</div>
<?*/?>

<script>
    $(function () {
        $("#js-phone").mask("(000) 000 00 00");
        $('#js-checkTime').mask('00:00');
        $('#js-datepicker').mask('00.00.0000');

        var maxDate = $(".selector").datepicker("option", "maxDate");
        var minDate = $(".selector").datepicker("option", "minDate");

        $("#js-datepicker").datepicker({
            showWeek: true,
            firstDay: 1,
            showWeek: false,
            minDate: new Date(2016, +7, 1),
            maxDate: new Date(2016, +8, 10),
            beforeShow: function () {
                if (!$('.datepicker_wrapper').length) {
                    $('#ui-datepicker-div').wrap('<span class="datepicker_wrapper"></span>');
                }
            }
        });
        $("#js-datepicker").on("change", function () {

            var currentUserDateTime = new Date($(this).datepicker("getDate"));
            /* user choose date in datepicker */
            var future_date = new Date('2016/09/01');
            /* max action date */
            var past_date = new Date('2016/08/01');
            /* min action date */


            if (currentUserDateTime > future_date) {
                $(this).val('01.09.2016').parent().addClass('error');
                $('#js-datepicker').after('<div class="landing-step-textfield-error__message">Error</div>');
                if (!$('.landing-step-textfield-error__message')[0]) {
                    $('#js-datepicker').after('<div class="landing-step-textfield-error__message">Error</div>');
                }
            } else if (currentUserDateTime < past_date) {
                $(this).val('01.08.2016').parent().addClass('error');
                if (!$('.landing-step-textfield-error__message')[0]) {
                    $('#js-datepicker').after('<div class="landing-step-textfield-error__message">Error</div>');
                }
            } else {
                $(this).parent().removeClass('error');
                $('.landing-step-textfield-error__message').hide();
            }

        });

        $(".fancybox").fancybox({
            padding: 0,
            wrapCSS: 'fancybox-thanks',
            helpers: {
                overlay: {
                    locked: false
                }
            }
        });


        $('#main-sl').owlCarousel({
            navigation: true,
            slideSpeed: 300,
            paginationSpeed: 400,
            singleItem: true,
            autoHeight: true,
            addClassActive: true,
            autoPlay: true,
            afterInit: function (elem) {
                $('iframe').each(function () {
                    var url = $(this).attr("src");
                    $(this).attr("src", url + "?wmode=transparent&modestbranding=1&showinfo=0&controls=0&fs=0&rel=0");
                });


                $('#main-sl .owl-item iframe').each(function () {
                    var url = $(this).attr("src");
                    $(this).attr("src", url + "&autoplay=0");
                });

                $('#main-sl .owl-item.active iframe').each(function () {
                    var url = $(this).attr("src");
                    var play = "&autoplay=1";
                    var stop = "&autoplay=0";
                    var urlNew = url.replace(stop, play);
                    $(this).attr("src", urlNew);
                });

            },
            afterMove: function (elem) {
                var play = "&autoplay=1";
                var stop = "&autoplay=0";
                $('#main-sl .owl-item iframe').each(function () {
                    var url = $(this).attr("src");
                    var urlNew = url.replace(play, stop);
                    $(this).attr("src", urlNew);
                });
                $('#main-sl .owl-item.active iframe').each(function () {
                    var url = $(this).attr("src");
                    var urlNew = url.replace(stop, play);
                    $(this).attr("src", urlNew);
                });
                /* $(window).on("scroll", function() {
                 if ($(window).scrollTop() > $('.main-filter').offset().top)
                 {
                 $('#main-sl .owl-item iframe').each(function(){
                 var url = $(this).attr("src");
                 var urlNew = url.replace(play, stop);
                 $(this).attr("src",urlNew);
                 });
                 }
                 });*/
            }
        });
    });
</script>

<script src="js/jquery.bxslider.min.js"></script>
<script src="js/forms.js"></script>
<script src="js/action_rules_slider.js"></script>
<script src="js/action_popup.js"></script>

<script src="js/jquery.easydropdown.min.js"></script>
<script src="js/jquery.mask.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.19.0/TweenMax.min.js"></script>
<script src="js/countdown.js"></script>

<script type="text/javascript" src="js/carousel_owl.carousel.js"></script>
<script src="js/script.js"></script>
<!-- Add fancyBox main JS and CSS files -->
<script type="text/javascript" src="js/jquery.fancybox.pack.js?v=2.1.5"></script>

<script type="text/javascript" src="js/jquery.ui.datepicker-it.js"></script>


<?php include($_SERVER["DOCUMENT_ROOT"] . "/bitrix/footer.php"); ?>

