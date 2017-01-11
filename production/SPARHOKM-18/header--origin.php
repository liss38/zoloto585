<?
session_start();
$dir = $APPLICATION->GetCurDir();
$findme   = 'catalog';
$pos = strpos($dir, $findme);
if ($pos !== false) {
    $LastModified_unix = strtotime(date("D, d M Y H:i:s", filectime($_SERVER['SCRIPT_FILENAME'])));
    $LastModified = gmdate("D, d M Y H:i:s \G\M\T", $LastModified_unix);
    $IfModifiedSince = false;

    if (isset($_ENV['HTTP_IF_MODIFIED_SINCE']))
        $IfModifiedSince = strtotime(substr($_ENV['HTTP_IF_MODIFIED_SINCE'], 5));

    if (isset($_SERVER['HTTP_IF_MODIFIED_SINCE']))
        $IfModifiedSince = strtotime(substr($_SERVER['HTTP_IF_MODIFIED_SINCE'], 5));

    if ($IfModifiedSince && $IfModifiedSince >= $LastModified_unix) {
        header($_SERVER['SERVER_PROTOCOL'] . ' 304 Not Modified');
        exit;
    }
    header('Last-Modified: ' . $LastModified);
}
?>
<html>
<head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# product: http://ogp.me/ns/product#">
	<meta charset="UTF-8" />
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<title><? $APPLICATION->ShowTitle() ?></title>
	<meta content="width=device-width, minimum-scale=1.0, maximum-scale=1.0" name="viewport">

	<?$APPLICATION->SetAdditionalCSS(SITE_TEMPLATE_PATH .'/css/main.css?v0');?>
	<?$APPLICATION->SetAdditionalCSS(SITE_TEMPLATE_PATH .'/css/fonts.css');?>
	<?$APPLICATION->SetAdditionalCSS(SITE_TEMPLATE_PATH .'/css/reset.css');?>
	<?$APPLICATION->SetAdditionalCSS(SITE_TEMPLATE_PATH .'/css/owl.carousel.css');?>
	<?$APPLICATION->SetAdditionalCSS(SITE_TEMPLATE_PATH .'/css/jquery-ui.css');?>
	<?$APPLICATION->SetAdditionalCSS(SITE_TEMPLATE_PATH .'/css/select.css');?>
	<?$APPLICATION->SetAdditionalCSS(SITE_TEMPLATE_PATH .'/css/base.css');?>
	<?$APPLICATION->SetAdditionalCSS(SITE_TEMPLATE_PATH .'/css/jquery.jscrollpane.css');?>
	<?$APPLICATION->SetAdditionalCSS(SITE_TEMPLATE_PATH .'/css/perfect-scrollbar.css');?>
	<?$APPLICATION->SetAdditionalCSS(SITE_TEMPLATE_PATH .'/css/my.css?v1');?>
	<?$APPLICATION->SetAdditionalCSS(SITE_TEMPLATE_PATH .'/css/responsive.css');?>
	<?$APPLICATION->SetAdditionalCSS(SITE_TEMPLATE_PATH .'/css/fonts/font.css');?>
	<?$APPLICATION->SetAdditionalCSS(SITE_TEMPLATE_PATH .'/css/jquery-ui.css');?>
	<?$APPLICATION->SetAdditionalCSS(SITE_TEMPLATE_PATH .'/css/jquery.jscrollpane.css');?>
	<?$APPLICATION->SetAdditionalCSS(SITE_TEMPLATE_PATH .'/css/magnific-popup.css');?>
	<?$APPLICATION->SetAdditionalCSS(SITE_TEMPLATE_PATH .'/css/footer.css?v1');?>
	<?$APPLICATION->SetAdditionalCSS(SITE_TEMPLATE_PATH .'/css/main.min.css');?>
	<?$APPLICATION->SetAdditionalCSS(SITE_TEMPLATE_PATH .'/css/pcard-motivate.css');?>
	<?$APPLICATION->SetAdditionalCSS(SITE_TEMPLATE_PATH .'/css/pcard_order_info.css');?>
	<?$APPLICATION->SetAdditionalCSS(SITE_TEMPLATE_PATH .'/css/msalnikov.min.css');?>
	<?$APPLICATION->SetAdditionalCSS(SITE_TEMPLATE_PATH .'/css/jquery.formstyler.css');?>
	<?$APPLICATION->SetAdditionalCSS(SITE_TEMPLATE_PATH .'/css/tmp.css');?>
	
	<?$APPLICATION->AddHeadScript(SITE_TEMPLATE_PATH .'/js/new.js');?>
	<?$APPLICATION->AddHeadScript(SITE_TEMPLATE_PATH .'/js/main.js');?>
	<?$APPLICATION->AddHeadScript(SITE_TEMPLATE_PATH .'/js/msalnikov.js');?>
	<?$APPLICATION->AddHeadScript(SITE_TEMPLATE_PATH .'/js/favorites.js');?>
	<?$APPLICATION->AddHeadScript(SITE_TEMPLATE_PATH .'/js/ucab.js');?>

	<!-- jqueryteam: пак из плагинов и jquery -->
	<script src="<?= SITE_TEMPLATE_PATH ?>/js/jqueryteam.min.js"></script>
	<script src="<?= SITE_TEMPLATE_PATH ?>/js/retailrocket.segmentator.js"></script>

    <? $APPLICATION->ShowHead(); /*CJSCore::Init();*/ ?>

    <?/*?>
    <script type="text/javascript" src="<?=SITE_TEMPLATE_PATH?>/js/html5shiv.js"></script>
    <script type="text/javascript" src="<?=SITE_TEMPLATE_PATH?>/js/selectivizr-min.js"></script>
    <script type="text/javascript" src="<?=SITE_TEMPLATE_PATH?>/js/css3-mediaqueries.js"></script>
    <?*/?>



    <!-- VK -->
    <script src="//vk.com/js/api/openapi.js" type="text/javascript"></script>
    <!-- YANDEX MAP -->
    <script src="//api-maps.yandex.ru/2.0-stable/?load=package.standard,package.geoObjects&lang=ru-RU" type="text/javascript"></script>    

    <script type="application/javascript">
        jQuery(document).ready(function ($) {
            <? foreach ($_GET as $key=>$param) { ?>            
            	$('input[name="<?=$key?>"]').parent().find('bx_filter_param_text').addClass('active');
            <? } ?>
        });
    </script>

</head>

<body class="<? if ($APPLICATION->GetCurPage(false) === '/'){echo 'main_page';}?>" >
<!-- Попап по сбору email -->
<?
/*
$dynamicArea = new \Bitrix\Main\Page\FrameStatic("zoloto585_email_popup");
$dynamicArea->startDynamicArea();
$APPLICATION->IncludeComponent('zoloto585:popup'); 
$dynamicArea->finishDynamicArea();
*/
 ?>

<!-- Google Tag Manager -->
<noscript>
    <iframe src="//www.googletagmanager.com/ns.html?id=GTM-5PHB8P" height="0" width="0" style="display:none;visibility:hidden"></iframe>
</noscript>
<script type="application/javascript">(function (w, d, s, l, i) {
        w[l] = w[l] || [];
        w[l].push({'gtm.start': new Date().getTime(), event: 'gtm.js'});
        var f = d.getElementsByTagName(s)[0],
            j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : '';
        j.async = true;
        j.src ='//www.googletagmanager.com/gtm.js?id=' + i + dl;
        f.parentNode.insertBefore(j, f);
    })(window, document, 'script', 'dataLayer', 'GTM-5PHB8P');</script>
<!-- End Google Tag Manager -->

<script type="text/javascript">
    (function (d, w, c) {
        (w[c] = w[c] || []).push(function () {
            try {
                w.yaCounter22737976 = new Ya.Metrika({id: 22737976,
                    webvisor: true,
                    clickmap: true,
                    trackLinks: true,
                    accurateTrackBounce: true});
            } catch (e) {
            }
        });

        var n = d.getElementsByTagName("script")[0],
            s = d.createElement("script"),
            f = function () {
                n.parentNode.insertBefore(s, n);
            };
        s.type = "text/javascript";
        s.async = true;
        s.src = (d.location.protocol == "https:" ? "https:" : "http:") + "//mc.yandex.ru/metrika/watch.js";

        if (w.opera == "[object Opera]") {
            d.addEventListener("DOMContentLoaded", f, false);
        } else {
            f();
        }
    })(document, window, "yandex_metrika_callbacks");
</script>
<noscript>
    <div><img src="//mc.yandex.ru/watch/22737976" style="position:absolute; left:-9999px;" alt="" /></div>
</noscript>
<?   
$dir = $APPLICATION->GetCurDir();
if($dir!='/about/address/'):
    ?>
    <script type="text/javascript">
        function targetis_all(){
            (function(h){function k(){var a=function(d,b){if(this instanceof AdriverCounter)d=a.items.length||1,a.items[d]=this,b.ph=d,b.custom&&(b.custom=a.toQueryString(b.custom,";")),a.request(a.toQueryString(b));else return a.items[d]};a.httplize=function(a){return(/^\/\//.test(a)?location.protocol:"")+a};a.loadScript=function(a){try{var b=g.getElementsByTagName("head")[0],c=g.createElement("script");c.setAttribute("type","text/javascript");c.setAttribute("charset","windows-1251");c.setAttribute("src",a.split("![rnd]").join(Math.round(1E6*Math.random())));c.onreadystatechange=function(){/loaded|complete/.test(this.readyState)&&(c.onload=null,b.removeChild(c))};c.onload=function(){b.removeChild(c)};b.insertBefore(c,b.firstChild)}catch(f){}};a.toQueryString=function(a,b,c){b=b||"&";c=c||"=";var f=[],e;for(e in a)a.hasOwnProperty(e)&&f.push(e+c+escape(a[e]));return f.join(b)};a.request=function(d){var b=a.toQueryString(a.defaults);a.loadScript(a.redirectHost+"/cgi-bin/erle.cgi?"+d+"&rnd=![rnd]"+(b?"&"+b:""))};a.items=[];a.defaults={tail256:document.referrer||"unknown"};a.redirectHost=a.httplize("//ad.adriver.ru");return a}var g=document;"undefined"===typeof AdriverCounter&&(AdriverCounter=k());new AdriverCounter(0,h)})
            ({"sid":209132,"bt":62,"custom":{"153":"user_id"}});
        };
        targetis_all();
    </script>
<?endif;?>
<script type="text/javascript">
    new Image().src = "//shop.gnezdo.ru/e/?dr="+escape(document.referrer)+"&du="+escape(document.URL)+"&ui=5587&"+Math.random();
</script>

<script src="http://content.targetix.net/Tags/55cdc525870a8eab788fae39.js"></script>
<? $APPLICATION->ShowPanel(); ?>
<div class="wrapper">
    <header>
		    <div class="section header-top header-top--position_fixed">
			    <div class="section__inner header-top__inner">
				    <div class="header-top__item  top-sandwich">
					    <div class="top-sandwich__button"><span class="top-sandwich__button-text">Скрыть каталог</span></div>
				    </div>
				    <div class="header-top__item  top-jewelry">
					    <a href="/" class="_active">ювелирная сеть</a>
					    <a href="//lombard.zoloto585.ru/">ломбарды</a>
				    </div>
				    <div class="header-top__item  top-shops">
					    <a href="/about/address/">адреса магазинов</a>
				    </div>

				    <div class="header-top__item  top-geo" id="top-geo-wrap">
						
						<?
                        $listCity = Zoloto585Store::getCities();
                        $dynamicArea = new \Bitrix\Main\Page\FrameStatic("zoloto585_city_select");
                        $dynamicArea->startDynamicArea();
                        ?>

					    <a id="choose-city" class="top-geo__button"><span><?=(!empty($_COOKIE["city"])) ? $_COOKIE["city"]:'Город не выбран'?></span></a>
					    <div class="top-geo-modal">
						    <div class="top-geo-modal__inner">
							    <div class="top-geo-modal__close">X</div>
							    <form class="form  top-geo-form">
								    <div class="top-geo-form__header">
									    ВЫБЕРИТЕ СВОЙ ГОРОД ИЗ СПИСКА
								    </div>								    
								    <div class="form__field  top-geo-form__option">
									    <span class="form__field-ico  form__field-ico--select-arrow  field-icons-4"></span>
                                        <select class="form__field-select">
										    <?foreach($listCity as $k_city=>$val_city):?>
											    <option value="<?=$val_city?>" <?=($val_city==$_COOKIE["city"]) ? 'selected="selected"':''?>>
												    <?=$val_city?>
											    </option>
										    <?endforeach;?>
									    </select>
								    </div>
								    <input class="form__button  top-geo-form__button" type="submit" value="Выбрать">
							    </form>
						    </div>
					    </div>
						<script>
						function chooseCity() {
						    $('#choose-city select').styler();
						    var city = $.cookie('city');						    
						    if(!!!city){
						       	ymaps.ready(function(){
									city = ymaps.geolocation.city;						            
						            if (!$('#top-geo-wrap select option[value="' + city + '"]').length) {
						                city = 'Москва';
						            }

									$('#top-geo-wrap select option').prop('selected', false);
						            $('#top-geo-wrap select option[value="' + city + '"]').prop('selected', true);

						            $('#choose-city').text(city).trigger('click');						            
						        });
						    }
						    $('#choose-city select').trigger('refresh');
						};
						
						chooseCity();						
						</script>

 						<? $dynamicArea->finishDynamicArea(); ?>

				    </div>

				    <div class="header-top__item  top-phone">
					    <a href="tel: +78005551585" class="top-phone__button">8 800 555 1 585</a>
				    </div>
				    <div class="header-top__item  top-favorites">		      						
						<a href="/favorites/" class="top-favorites__button count" id="top-favirites-cnt"></a>
				    </div>
				    <div class="header-top__item  top-bonuses">
					    <a href="#" class="top-bonuses__button">Бонус</a>
				    </div>
				    <div class="header-top__item  top-user">
					    <a href="/bonusnye_karty/check_balance.php" class="top-user__button">Мой профиль</a>
				    </div>
			    </div>
		    </div>	    

		    <div class="section header-middle">
			    <div class="section__inner header-middle__inner">
				    <a href="/" class="header-middle__logo">
					    <img src="<?= SITE_TEMPLATE_PATH ?>/images/logo.png">
				    </a>
				    <div class="header-middle__bar">
					    <a href="/action/" class="header-middle__button  header-middle__button--promo">Акции</a>
					    <a href="/catalog/skidka_70/" class="header-middle__button  header-middle__button--sale">Суперцена</a>
					    <a href="/registraciya_karty/" class="header-middle__button  header-middle__button--bonuses">Бонус</a>
				    </div>
			    </div>
		    </div>

	    <!-- "HEADER-BOTTOM" -->
	    <div class="section header-bottom">
		    <div class="section__inner header-bottom__inner">
			    <nav class="main-nav">
				    <div class="main-nav__header">Скрыть каталог</div>
				    <ul class="main-nav__list">
					    <li class="main-nav__item">
						    <a href="#" class="main-nav__link">ОБРУЧАЛЬНЫЕ КОЛЬЦА</a>
						    <div class="main-nav-level-1">
							    <div class="main-nav-level-1__header">ОБРУЧАЛЬНЫЕ КОЛЬЦА</div>
							    <ul class="main-nav-level-1__list">
								    <li class="main-nav-level-1__item">
									    <a href="#" class="main-nav-level-1__link">Тематика</a>
									    <div class="main-nav-level-2">
										    <div class="main-nav-level-2__header">Тематика</div>
										    <ul class="main-nav-level-2__list">
											    <li class="main-nav-level-2__item"><a href="http://zoloto585.ru/catalog/yuvelirnye_izdeliya/kolca/obruchalnye/" class="main-nav-level-2__link">Обручальные</a></li>
											    <li class="main-nav-level-2__item"><a href="http://zoloto585.ru/catalog/yuvelirnye_izdeliya/kolca/pomolvochnie/" class="main-nav-level-2__link">Помолвочные</a></li>
										    </ul>
									    </div>
								    </li>
								    <li class="main-nav-level-1__item">
									    <a href="#" class="main-nav-level-1__link">Материал</a>
									    <div class="main-nav-level-2">
										    <div class="main-nav-level-2__header">Материал</div>
										    <ul class="main-nav-level-2__list">
											    <li class="main-nav-level-2__item"><a href="http://zoloto585.ru/catalog/yuvelirnye_izdeliya/kolca/obruchalnye/iz-zolota/" class="main-nav-level-2__link">Обручальные кольца из золота</a></li>
											    <!-- <li class="main-nav-level-2__item"><a href="" class="main-nav-level-2__link">Обручальные кольца из серебра</a></li> -->
											    <li class="main-nav-level-2__item"><a href="http://zoloto585.ru/catalog/yuvelirnye_izdeliya/kolca/obruchalnye/white_gold/" class="main-nav-level-2__link">Обручальные кольца из белого золота</a></li>
											    <li class="main-nav-level-2__item"><a href="http://zoloto585.ru/catalog/yuvelirnye_izdeliya/kolca/obruchalnye/s_brilliantami/" class="main-nav-level-2__link">Обручальные кольца с бриллиантами</a></li>
											    <li class="main-nav-level-2__item"><a href="http://zoloto585.ru/catalog/yuvelirnye_izdeliya/kolca/pomolvochnie/iz-belogo-zolota/" class="main-nav-level-2__link">Помолвочные кольца из белого золота</a></li>
										    </ul>
									    </div>
								    </li>
								    <li class="main-nav-level-1__item">
									    <a href="#" class="main-nav-level-1__link">Дизайн</a>
									    <div class="main-nav-level-2">
										    <div class="main-nav-level-2__header">Дизайн</div>
										    <ul class="main-nav-level-2__list">
											    <li class="main-nav-level-2__item"><a href="http://zoloto585.ru/catalog/yuvelirnye_izdeliya/kolca/obruchalnye/gladkie/" class="main-nav-level-2__link">Гладкие обручальные кольца</a></li>
											    <li class="main-nav-level-2__item"><a href="http://zoloto585.ru/catalog/yuvelirnye_izdeliya/kolca/obruchalnye/trekhsplavnye/" class="main-nav-level-2__link">Трехсплавные обручальные кольца</a></li>
											    <li class="main-nav-level-2__item"><a href="http://zoloto585.ru/catalog/yuvelirnye_izdeliya/kolca/obruchalnye/s-almaznoi-graniu/" class="main-nav-level-2__link">Обручальные кольца с алмазной гранью</a></li>
											    <li class="main-nav-level-2__item"><a href="http://zoloto585.ru/catalog/yuvelirnye_izdeliya/kolca/obruchalnye/s-vrashhayushhejsya-vstavkoj/" class="main-nav-level-2__link">Обручальные кольца с вращающейся встакой</a></li>
											    <li class="main-nav-level-2__item"><a href="http://zoloto585.ru/catalog/yuvelirnye_izdeliya/?utm_source=yandex&&utm_campaign=GOLD_million_general&&utm_medium=cpc&&yclid=2829338717609790411&&set_filter=y&&arrFilter_155_2473281379=Y&&arrFilter_165_4196041389=Y&&arrFilter_171_2212294583=Y" class="main-nav-level-2__link">Обручальные кольца с одним камнем</a></li>
											    <li class="main-nav-level-2__item"><a href="http://zoloto585.ru/catalog/yuvelirnye_izdeliya/kolca/obruchalnye/dorozhka/" class="main-nav-level-2__link">Обручальные кольца дорожка</a></li>
										    </ul>
									    </div>
								    </li>
								    <li class="main-nav-level-1__item">
									    <a href="#" class="main-nav-level-1__link">По цене</a>
									    <div class="main-nav-level-2">
										    <div class="main-nav-level-2__header">По цене</div>
										    <ul class="main-nav-level-2__list">
											    <li class="main-nav-level-2__item"><a href="#" class="main-nav-level-2__link">Обручальные кольца до 5500 рублей</a></li>
											    <li class="main-nav-level-2__item"><a href="#" class="main-nav-level-2__link">Обручальные кольца до 8500 рублей</a></li>
											    <li class="main-nav-level-2__item"><a href="#" class="main-nav-level-2__link">Обручальные кольца до 12000 рублей</a></li>
											    <li class="main-nav-level-2__item"><a href="http://zoloto585.ru/catalog/yuvelirnye_izdeliya/?utm_source=yandex&utm_campaign=585gold_SPb_general&utm_medium=cpc&yclid=2839643960122805207&set_filter=y&arrFilter_155_2473281379=Y&arrFilter_165_1790921346=Y&arrFilter_165_2871910706=Y&arrFilter_165_2322626082=Y&arrFilter_165_4252452532=Y&arrFilter_165_4196041389=Y&arrFilter_149_MAX=100&arrFilter_149_MIN=50
" class="main-nav-level-2__link">Обручальные кольца со скидкой 50%, 60%, 70%</a></li>
										    </ul>
									    </div>
								    </li>
								    <li class="main-nav-level-1__item">
									    <a href="http://zoloto585.ru/catalog/yuvelirnye_izdeliya/kolca/obruchalnye/" class="main-nav-level-1__link  main-nav-level-1__link--all-items">Смотреть все обручальные кольца</a>
								    </li>
							    </ul>
						    </div>
					    </li>

					    <li class="main-nav__item">
						    <a href="#" class="main-nav__link">КОЛЬЦА</a>
						    <div class="main-nav-level-1">
							    <div class="main-nav-level-1__header">КОЛЬЦА</div>
							    <ul class="main-nav-level-1__list">
								    <li class="main-nav-level-1__item">
									    <a href="#" class="main-nav-level-1__link">Материал</a>
									    <div class="main-nav-level-2">
										    <div class="main-nav-level-2__header">Материал</div>
										    <ul class="main-nav-level-2__list">
											    <li class="main-nav-level-2__item"><a href="http://zoloto585.ru/catalog/yuvelirnye_izdeliya/kolca/?set_filter=y&&arrFilter_157_2212294583=Y" class="main-nav-level-2__link">Кольца из золота</a></li>
											    <li class="main-nav-level-2__item"><a href="http://zoloto585.ru/catalog/yuvelirnye_izdeliya/kolca/?set_filter=y&&arrFilter_157_450215437=Y" class="main-nav-level-2__link">Кольца из серебра</a></li>
											    <li class="main-nav-level-2__item"><a href="http://zoloto585.ru/catalog/yuvelirnye_izdeliya/kolca/?set_filter=y&&arrFilter_162_2707236321=Y&&arrFilter_162_3596227959=Y" class="main-nav-level-2__link">Кольца с бриллиантами</a></li>
											    <li class="main-nav-level-2__item"><a href="http://zoloto585.ru/catalog/yuvelirnye_izdeliya/?PAGEN_1=2&set_filter=y&arrFilter_155_2473281379=Y&arrFilter_162_1842515611=Y&arrFilter_162_450215437=Y&arrFilter_162_4252452532=Y&arrFilter_162_2483454842=Y&arrFilter_162_4194326291=Y&arrFilter_162_4088798008=Y&arrFilter_162_2788221432=Y&arrFilter_162_3510096238=Y&arrFilter_162_1060745282=Y&arrFilter_162_2944839123=Y&arrFilter_162_174200537=Y&arrFilter_162_3693793700=Y&arrFilter_162_326707096=Y&arrFilter_162_2047402582=Y&arrFilter_162_2367533627=Y&arrFilter_162_3632373061=Y&arrFilter_162_1112425479=Y&arrFilter_162_2225864208=Y&arrFilter_162_2366072709=Y&arrFilter_162_1790921346=Y&arrFilter_162_841265288=Y&arrFilter_162_3808539628=Y&arrFilter_162_945058907=Y&arrFilter_162_2226203566=Y&arrFilter_162_894006417=Y&arrFilter_162_4088188550=Y&arrFilter_162_498629140=Y&arrFilter_162_2212294583=Y&arrFilter_162_219140800=Y&arrFilter_162_3678868925=Y&arrFilter_162_1662243607=Y" class="main-nav-level-2__link">Кольца с цветными камнями</a></li>
											    <li class="main-nav-level-2__item"><a href="#" class="main-nav-level-2__link">Кольца с кристаллами Swarovski</a></li>
											    <li class="main-nav-level-2__item"><a href="http://zoloto585.ru/catalog/yuvelirnye_izdeliya/kolca/?set_filter=y&&arrFilter_162_1060745282=Y&&arrFilter_162_2944839123=Y" class="main-nav-level-2__link">Кольца с жемчугом</a></li>
											    <li class="main-nav-level-2__item"><a href="http://zoloto585.ru/catalog/bizhuteriya/?arrFilter_155_2473281379=Y&&set_filter=%D0%9F%D0%BE%D0%BA%D0%B0%D0%B7%D0%B0%D1%82%D1%8C" class="main-nav-level-2__link">Кольца бижутерия</a></li>
										    </ul>
									    </div>
								    </li>
								    <li class="main-nav-level-1__item">
									    <a href="#" class="main-nav-level-1__link">Тематика</a>
									    <div class="main-nav-level-2">
										    <div class="main-nav-level-2__header">Тематика</div>
										    <ul class="main-nav-level-2__list">
											    <li class="main-nav-level-2__item"><a href="http://zoloto585.ru/catalog/yuvelirnye_izdeliya/kolca/?arrFilter_157_2212294583=Y&&arrFilter_162_2707236321=Y&&arrFilter_171_2212294583=Y&&set_filter=%D0%9F%D0%BE%D0%BA%D0%B0%D0%B7%D0%B0%D1%82%D1%8C" class="main-nav-level-2__link">Помолвочные</a></li>
											    <li class="main-nav-level-2__item"><a href="http://zoloto585.ru/catalog/yuvelirnye_izdeliya/kolca/obruchalnye/" class="main-nav-level-2__link">Мужские печатки</a></li>
											    <li class="main-nav-level-2__item"><a href="http://zoloto585.ru/catalog/yuvelirnye_izdeliya/kolca/?set_filter=y&&arrFilter_165_219140800=Y" class="main-nav-level-2__link">Мужские печатки</a></li>
											    <li class="main-nav-level-2__item"><a href="#" class="main-nav-level-2__link">Детские колечки</a></li>
										    </ul>
									    </div>
								    </li>
								    <li class="main-nav-level-1__item">
									    <a href="#" class="main-nav-level-1__link">Дизайн</a>
									    <div class="main-nav-level-2">
										    <div class="main-nav-level-2__header">Дизайн</div>
										    <ul class="main-nav-level-2__list">
											    <li class="main-nav-level-2__item"><a href="http://zoloto585.ru/catalog/yuvelirnye_izdeliya/kolca/?set_filter=y&arrFilter_165_4194326291=Y" class="main-nav-level-2__link">Дорожка</a></li>
											    <li class="main-nav-level-2__item"><a href="http://zoloto585.ru/catalog/yuvelirnye_izdeliya/kolca/?set_filter=y&arrFilter_165_2944839123=Y" class="main-nav-level-2__link">Анималистика</a></li>
											    <li class="main-nav-level-2__item"><a href="http://zoloto585.ru/catalog/yuvelirnye_izdeliya/kolca/?set_filter=y&arrFilter_165_2707236321=Y" class="main-nav-level-2__link">Сердечки</a></li>
											    <li class="main-nav-level-2__item"><a href="http://zoloto585.ru/catalog/yuvelirnye_izdeliya/kolca/?set_filter=y&arrFilter_165_3510096238=Y" class="main-nav-level-2__link">Малинки</a></li>
											    <li class="main-nav-level-2__item"><a href="http://zoloto585.ru/catalog/yuvelirnye_izdeliya/kolca/?set_filter=y&arrFilter_165_2225864208=Y" class="main-nav-level-2__link">Символы</a></li>
										    </ul>
									    </div>
								    </li>
								    <li class="main-nav-level-1__item">
									    <a href="#" class="main-nav-level-1__link">Стиль</a>
									    <div class="main-nav-level-2">
										    <div class="main-nav-level-2__header">Стиль</div>
										    <ul class="main-nav-level-2__list">
											    <li class="main-nav-level-2__item"><a href="http://zoloto585.ru/catalog/yuvelirnye_izdeliya/kolca/?utm_source=google&utm_medium=cpc&utm_campaign=585gold_SPb_general&gclid=CjwKEAjw1Iq6BRDY_tK-9OjdmBESJABlzoY7Ze1yG2C7SgNgjXZ5zja-Ku8L4LZu5NAKkXw41CwvqBoCSuDw_wcB&set_filter=y&arrFilter_156_2212294583=Y" class="main-nav-level-2__link">Классика</a></li>
											    <li class="main-nav-level-2__item"><a href="http://zoloto585.ru/catalog/yuvelirnye_izdeliya/kolca/?utm_source=google&utm_medium=cpc&utm_campaign=585gold_SPb_general&gclid=CjwKEAjw1Iq6BRDY_tK-9OjdmBESJABlzoY7Ze1yG2C7SgNgjXZ5zja-Ku8L4LZu5NAKkXw41CwvqBoCSuDw_wcB&set_filter=y&arrFilter_156_450215437=Y" class="main-nav-level-2__link">Мода</a></li>
											    <li class="main-nav-level-2__item"><a href="http://zoloto585.ru/catalog/yuvelirnye_izdeliya/kolca/?utm_source=google&utm_medium=cpc&utm_campaign=585gold_SPb_general&gclid=CjwKEAjw1Iq6BRDY_tK-9OjdmBESJABlzoY7Ze1yG2C7SgNgjXZ5zja-Ku8L4LZu5NAKkXw41CwvqBoCSuDw_wcB&set_filter=y&arrFilter_156_4088798008=Y" class="main-nav-level-2__link">Тренд</a></li>
										    </ul>
									    </div>
								    </li>
								    <li class="main-nav-level-1__item">
									    <a href="#" class="main-nav-level-1__link">Цена</a>
									    <div class="main-nav-level-2">
										    <div class="main-nav-level-2__header">Цена</div>
										    <ul class="main-nav-level-2__list">
											    <li class="main-nav-level-2__item"><a href="#" class="main-nav-level-2__link">Кольца до 1500 рублей</a></li>
											    <li class="main-nav-level-2__item"><a href="#" class="main-nav-level-2__link">Кольца до 3500 рублей</a></li>
											    <li class="main-nav-level-2__item"><a href="#" class="main-nav-level-2__link">Кольца до 7000 рублей</a></li>
											    <li class="main-nav-level-2__item"><a href="http://zoloto585.ru/catalog/yuvelirnye_izdeliya/?set_filter=y&arrFilter_155_2473281379=Y&arrFilter_149_MAX=100&arrFilter_149_MIN=50" class="main-nav-level-2__link">Кольца со скидкой 50%, 60%, 70% </a></li>
										    </ul>
									    </div>
								    </li>
								    <li class="main-nav-level-1__item">
									    <a href="http://zoloto585.ru/catalog/yuvelirnye_izdeliya/kolca/" class="main-nav-level-1__link  main-nav-level-1__link--all-items">Смотреть все кольца</a>
								    </li>
							    </ul>
						    </div>
					    </li>

					    <li class="main-nav__item">
						    <a href="#" class="main-nav__link">СЕРЬГИ</a>
						    <div class="main-nav-level-1">
							    <div class="main-nav-level-1__header">СЕРЬГИ</div>
							    <ul class="main-nav-level-1__list">
								    <li class="main-nav-level-1__item">
									    <a href="#" class="main-nav-level-1__link">Материал</a>
									    <div class="main-nav-level-2">
										    <div class="main-nav-level-2__header">Материал</div>
										    <ul class="main-nav-level-2__list">
											    <li class="main-nav-level-2__item"><a href="http://zoloto585.ru/catalog/yuvelirnye_izdeliya/sergi/?set_filter=y&arrFilter_157_2212294583=Y" class="main-nav-level-2__link">Серьги из золота</a></li>
											    <li class="main-nav-level-2__item"><a href="http://zoloto585.ru/catalog/yuvelirnye_izdeliya/sergi/?set_filter=y&arrFilter_157_450215437=Y" class="main-nav-level-2__link">Серьги из серебра</a></li>
											    <li class="main-nav-level-2__item"><a href="http://zoloto585.ru/catalog/yuvelirnye_izdeliya/sergi/?set_filter=y&arrFilter_162_2707236321=Y&arrFilter_162_3596227959=Y" class="main-nav-level-2__link">Серьги с бриллиантами</a></li>
											    <li class="main-nav-level-2__item"><a href="http://zoloto585.ru/catalog/yuvelirnye_izdeliya/sergi/?set_filter=y&arrFilter_162_1842515611=Y&arrFilter_162_450215437=Y&arrFilter_162_4252452532=Y&arrFilter_162_2483454842=Y&arrFilter_162_4088798008=Y&arrFilter_162_2788221432=Y&arrFilter_162_3510096238=Y&arrFilter_162_1060745282=Y&arrFilter_162_2944839123=Y&arrFilter_162_174200537=Y&arrFilter_162_3693793700=Y&arrFilter_162_2047402582=Y&arrFilter_162_2367533627=Y&arrFilter_162_1112425479=Y&arrFilter_162_2366072709=Y&arrFilter_162_1790921346=Y&arrFilter_162_841265288=Y&arrFilter_162_3808539628=Y&arrFilter_162_945058907=Y&arrFilter_162_2226203566=Y&arrFilter_162_894006417=Y&arrFilter_162_498629140=Y&arrFilter_162_219140800=Y&arrFilter_162_3678868925=Y" class="main-nav-level-2__link">Серьги с цветными камнями</a></li>
											    <li class="main-nav-level-2__item"><a href="пока нет фильтра" class="main-nav-level-2__link">Серьги с кристаллами Swarovski </a></li>
											    <li class="main-nav-level-2__item"><a href="http://zoloto585.ru/catalog/yuvelirnye_izdeliya/sergi/?arrFilter_162_1060745282=Y&arrFilter_162_2944839123=Y&set_filter=%25D0%259F%25D0%25BE%25D0%25BA%25D0%25B0%25D0%25B7%25D0%25B0%25D1%2582%25D1%258C" class="main-nav-level-2__link">Серьги с жемчугом</a></li>
											    <li class="main-nav-level-2__item"><a href="http://zoloto585.ru/catalog/bizhuteriya/?set_filter=y&arrFilter_155_3510096238=Y" class="main-nav-level-2__link">Серьги бижутерия</a></li>
										    </ul>
									    </div>
								    </li>
								    <li class="main-nav-level-1__item">
									    <a href="#" class="main-nav-level-1__link">Тематика</a>
									    <div class="main-nav-level-2">
										    <div class="main-nav-level-2__header">Тематика</div>
										    <ul class="main-nav-level-2__list">
											    <li class="main-nav-level-2__item"><a href="http://zoloto585.ru/catalog/yuvelirnye_izdeliya/pirsing/" class="main-nav-level-2__link">Пирсинг</a></li>
											    <li class="main-nav-level-2__item"><a href="http://zoloto585.ru/catalog/yuvelirnye_izdeliya/sergi/?set_filter=y&arrFilter_165_945058907=Y" class="main-nav-level-2__link">Серьги - Конго (Кольца)</a></li>
											    <li class="main-nav-level-2__item"><a href="http://zoloto585.ru/catalog/yuvelirnye_izdeliya/sergi/?set_filter=y&arrFilter_165_1060745282=Y" class="main-nav-level-2__link">Серьги - Гвоздики (пуссеты)</a></li>
											    <li class="main-nav-level-2__item"><a href="http://zoloto585.ru/catalog/yuvelirnye_izdeliya/sergi/?arrFilter_165_1662243607=Y&set_filter=%25D0%259F%25D0%25BE%25D0%25BA%25D0%25B0%25D0%25B7%25D0%25B0%25D1%2582%25D1%258C" class="main-nav-level-2__link">Длинные серьги</a></li>
											    <li class="main-nav-level-2__item"><a href="http://zoloto585.ru/catalog/yuvelirnye_izdeliya/sergi/?PAGEN_1=2&set_filter=y&arrFilter_165_3632373061=Y" class="main-nav-level-2__link">Детские серьги</a></li>
										    </ul>
									    </div>
								    </li>
								    <li class="main-nav-level-1__item">
									    <a href="#" class="main-nav-level-1__link">Дизайн</a>
									    <div class="main-nav-level-2">
										    <div class="main-nav-level-2__header">Дизайн</div>
										    <ul class="main-nav-level-2__list">
											    <li class="main-nav-level-2__item"><a href="http://zoloto585.ru/catalog/yuvelirnye_izdeliya/sergi/?set_filter=y&arrFilter_165_2944839123=Y" class="main-nav-level-2__link">Анималистика</a></li>
											    <li class="main-nav-level-2__item"><a href="http://zoloto585.ru/catalog/yuvelirnye_izdeliya/sergi/?PAGEN_1=2&set_filter=y&arrFilter_165_4194326291=Y" class="main-nav-level-2__link">Дорожка</a></li>
											    <li class="main-nav-level-2__item"><a href="http://zoloto585.ru/catalog/yuvelirnye_izdeliya/sergi/?arrFilter_165_2707236321=Y&set_filter=%25D0%259F%25D0%25BE%25D0%25BA%25D0%25B0%25D0%25B7%25D0%25B0%25D1%2582%25D1%258C" class="main-nav-level-2__link">Сердечки </a></li>
											    <li class="main-nav-level-2__item"><a href="http://zoloto585.ru/catalog/yuvelirnye_izdeliya/sergi/?PAGEN_1=2&set_filter=y&arrFilter_165_3510096238=Y" class="main-nav-level-2__link">Малинки</a></li>
											    <li class="main-nav-level-2__item"><a href="http://zoloto585.ru/catalog/yuvelirnye_izdeliya/sergi/?arrFilter_165_3596227959=Y&set_filter=%25D0%259F%25D0%25BE%25D0%25BA%25D0%25B0%25D0%25B7%25D0%25B0%25D1%2582%25D1%258C" class="main-nav-level-2__link">Цветки</a></li>
											    <li class="main-nav-level-2__item"><a href="http://zoloto585.ru/catalog/yuvelirnye_izdeliya/sergi/?set_filter=y&arrFilter_175_2212294583=Y" class="main-nav-level-2__link">Английский замок</a></li>
											    <li class="main-nav-level-2__item"><a href="http://zoloto585.ru/catalog/yuvelirnye_izdeliya/sergi/?set_filter=y&arrFilter_175_450215437=Y" class="main-nav-level-2__link">Французский замок</a></li>
										    </ul>
									    </div>
								    </li>
								    <li class="main-nav-level-1__item">
									    <a href="#" class="main-nav-level-1__link">Стиль</a>
									    <div class="main-nav-level-2">
										    <div class="main-nav-level-2__header">Стиль</div>
										    <ul class="main-nav-level-2__list">
											    <li class="main-nav-level-2__item"><a href="http://zoloto585.ru/catalog/yuvelirnye_izdeliya/sergi/?set_filter=y&arrFilter_156_2212294583=Y" class="main-nav-level-2__link">Классика</a></li>
											    <li class="main-nav-level-2__item"><a href="http://zoloto585.ru/catalog/yuvelirnye_izdeliya/sergi/?set_filter=y&arrFilter_156_450215437=Y" class="main-nav-level-2__link">Мода </a></li>
											    <li class="main-nav-level-2__item"><a href="http://zoloto585.ru/catalog/yuvelirnye_izdeliya/sergi/?set_filter=y&arrFilter_156_4088798008=Y" class="main-nav-level-2__link">Тренд</a></li>
										    </ul>
									    </div>
								    </li>
								    <li class="main-nav-level-1__item">
									    <a href="#" class="main-nav-level-1__link">По цене</a>
									    <div class="main-nav-level-2">
										    <div class="main-nav-level-2__header">По цене</div>
										    <ul class="main-nav-level-2__list">
											    <li class="main-nav-level-2__item"><a href="#" class="main-nav-level-2__link">Серьги до 1500 рублей</a></li>
											    <li class="main-nav-level-2__item"><a href="#" class="main-nav-level-2__link">Серьги до 3500 рублей</a></li>
											    <li class="main-nav-level-2__item"><a href="#" class="main-nav-level-2__link">Серьги до 7000 рублей</a></li>
											    <li class="main-nav-level-2__item"><a href="http://zoloto585.ru/catalog/yuvelirnye_izdeliya/?set_filter=y&arrFilter_155_3510096238=Y&arrFilter_149_MAX=100&arrFilter_149_MIN=50" class="main-nav-level-2__link">Серьги со скидкой 50%, 60%, 70% </a></li>
										    </ul>
									    </div>
								    </li>
								    <li class="main-nav-level-1__item">
									    <a href="http://zoloto585.ru/catalog/yuvelirnye_izdeliya/sergi/" class="main-nav-level-1__link  main-nav-level-1__link--all-items">Смотреть все серьги</a>
								    </li>
							    </ul>
						    </div>
					    </li>

					    <li class="main-nav__item">
						    <a href="#" class="main-nav__link">КУЛОНЫ</a>
						    <div class="main-nav-level-1">
							    <div class="main-nav-level-1__header">КУЛОНЫ</div>
							    <ul class="main-nav-level-1__list">
								    <li class="main-nav-level-1__item">
									    <a href="#" class="main-nav-level-1__link">Материал</a>
									    <div class="main-nav-level-2">
										    <div class="main-nav-level-2__header">Материал</div>
										    <ul class="main-nav-level-2__list">
											    <li class="main-nav-level-2__item"><a href="http://zoloto585.ru/catalog/yuvelirnye_izdeliya/podveski/?set_filter=y&arrFilter_157_2212294583=Y" class="main-nav-level-2__link">Кулоны из золота</a></li>
											    <li class="main-nav-level-2__item"><a href="http://zoloto585.ru/catalog/yuvelirnye_izdeliya/podveski/?set_filter=y&arrFilter_157_450215437=Y" class="main-nav-level-2__link">Кулоны из серебра</a></li>
											    <li class="main-nav-level-2__item"><a href="http://zoloto585.ru/catalog/yuvelirnye_izdeliya/podveski/?set_filter=y&arrFilter_162_2707236321=Y" class="main-nav-level-2__link">Кулоны с бриллиантами</a></li>
											    <li class="main-nav-level-2__item"><a href="http://zoloto585.ru/catalog/yuvelirnye_izdeliya/podveski/?set_filter=y&arrFilter_162_1842515611=Y&arrFilter_162_450215437=Y&arrFilter_162_4252452532=Y&arrFilter_162_2483454842=Y&arrFilter_162_4088798008=Y&arrFilter_162_2788221432=Y&arrFilter_162_3510096238=Y&arrFilter_162_1060745282=Y&arrFilter_162_174200537=Y&arrFilter_162_3693793700=Y&arrFilter_162_2047402582=Y&arrFilter_162_3632373061=Y&arrFilter_162_2225864208=Y&arrFilter_162_2366072709=Y&arrFilter_162_1790921346=Y&arrFilter_162_841265288=Y&arrFilter_162_3808539628=Y&arrFilter_162_945058907=Y&arrFilter_162_2226203566=Y&arrFilter_162_894006417=Y&arrFilter_162_498629140=Y&arrFilter_162_2212294583=Y&arrFilter_162_219140800=Y&arrFilter_162_3678868925=Y&arrFilter_162_1662243607=Y" class="main-nav-level-2__link">Кулоны с цветными камнями</a></li>
											    <li class="main-nav-level-2__item"><a href="пока нет фильтра" class="main-nav-level-2__link">Кулоны с кристаллами Swarovski </a></li>
											    <li class="main-nav-level-2__item"><a href="http://zoloto585.ru/catalog/yuvelirnye_izdeliya/podveski/?set_filter=y&arrFilter_162_1060745282=Y" class="main-nav-level-2__link">Кулоны с жемчугом</a></li>
										    </ul>
									    </div>
								    </li>
								    <li class="main-nav-level-1__item">
									    <a href="#" class="main-nav-level-1__link">Дизайн</a>
									    <div class="main-nav-level-2">
										    <div class="main-nav-level-2__header">Дизайн</div>
										    <ul class="main-nav-level-2__list">
											    <li class="main-nav-level-2__item"><a href="http://zoloto585.ru/catalog/yuvelirnye_izdeliya/podveski/?set_filter=y&arrFilter_165_2889884971=Y" class="main-nav-level-2__link">Шармы</a></li>
											    <li class="main-nav-level-2__item"><a href="http://zoloto585.ru/catalog/yuvelirnye_izdeliya/podveski/?set_filter=y&arrFilter_165_1330857165=Y" class="main-nav-level-2__link">Буквы</a></li>
											    <li class="main-nav-level-2__item"><a href="http://zoloto585.ru/catalog/yuvelirnye_izdeliya/podveski/?set_filter=y&arrFilter_165_2788221432=Y" class="main-nav-level-2__link">Знаки Зодиака</a></li>
											    <li class="main-nav-level-2__item"><a href="http://zoloto585.ru/catalog/yuvelirnye_izdeliya/podveski/?set_filter=y&arrFilter_165_2707236321=Y" class="main-nav-level-2__link">Сердца</a></li>
											    <li class="main-nav-level-2__item"><a href="http://zoloto585.ru/catalog/yuvelirnye_izdeliya/podveski/?set_filter=y&arrFilter_165_2225864208=Y" class="main-nav-level-2__link">Символы</a></li>
											    <li class="main-nav-level-2__item"><a href="http://zoloto585.ru/catalog/yuvelirnye_izdeliya/podveski/?set_filter=y&arrFilter_165_2944839123=Y" class="main-nav-level-2__link">Анималистика</a></li>
											    <li class="main-nav-level-2__item"><a href="http://zoloto585.ru/catalog/yuvelirnye_izdeliya/podveski/?set_filter=y&arrFilter_165_498629140=Y" class="main-nav-level-2__link">Крестики</a></li>
											    <li class="main-nav-level-2__item"><a href="http://zoloto585.ru/catalog/yuvelirnye_izdeliya/podveski/?set_filter=y&arrFilter_165_1685985038=Y" class="main-nav-level-2__link">Нательные иконы</a></li>
											    <li class="main-nav-level-2__item"><a href="#" class="main-nav-level-2__link">Мусульманам</a></li>
											    <li class="main-nav-level-2__item"><a href="http://zoloto585.ru/catalog/yuvelirnye_izdeliya/podveski/?set_filter=y&arrFilter_165_2212294583=Y" class="main-nav-level-2__link">Лепестки</a></li>
											    <li class="main-nav-level-2__item"><a href="http://zoloto585.ru/catalog/yuvelirnye_izdeliya/podveski/?set_filter=y&arrFilter_165_3510096238=Y" class="main-nav-level-2__link">Малинки</a></li>
											    <li class="main-nav-level-2__item"><a href="http://zoloto585.ru/catalog/yuvelirnye_izdeliya/podveski/?set_filter=y&arrFilter_165_841265288=Y" class="main-nav-level-2__link">Многокаменка, как один</a></li>
										    </ul>
									    </div>
								    </li>
								    <li class="main-nav-level-1__item">
									    <a href="#" class="main-nav-level-1__link">Стиль</a>
									    <div class="main-nav-level-2">
										    <div class="main-nav-level-2__header">Стиль</div>
										    <ul class="main-nav-level-2__list">
											    <li class="main-nav-level-2__item"><a href="http://zoloto585.ru/catalog/yuvelirnye_izdeliya/podveski/?set_filter=y&arrFilter_156_2212294583=Y" class="main-nav-level-2__link">Классика</a></li>
											    <li class="main-nav-level-2__item"><a href="http://zoloto585.ru/catalog/yuvelirnye_izdeliya/podveski/?set_filter=y&arrFilter_156_450215437=Y" class="main-nav-level-2__link">Мода</a></li>
											    <li class="main-nav-level-2__item"><a href="http://zoloto585.ru/catalog/yuvelirnye_izdeliya/podveski/?set_filter=y&arrFilter_156_4088798008=Y" class="main-nav-level-2__link">Тренд</a></li>
										    </ul>
									    </div>
								    </li>
								    <li class="main-nav-level-1__item">
									    <a href="#" class="main-nav-level-1__link">По цене</a>
									    <div class="main-nav-level-2">
										    <div class="main-nav-level-2__header">По цене</div>
										    <ul class="main-nav-level-2__list">
											    <li class="main-nav-level-2__item"><a href="#" class="main-nav-level-2__link">Кулоны до 700 рублей</a></li>
											    <li class="main-nav-level-2__item"><a href="#" class="main-nav-level-2__link">Кулоны до 1500 рублей</a></li>
											    <li class="main-nav-level-2__item"><a href="#" class="main-nav-level-2__link">Кулоны до 5000 рублей</a></li>
											    <li class="main-nav-level-2__item"><a href="http://zoloto585.ru/catalog/yuvelirnye_izdeliya/?set_filter=y&arrFilter_155_1662243607=Y&arrFilter_149_MAX=100&arrFilter_149_MIN=50" class="main-nav-level-2__link">Кулоны со скидкой 50%, 60%, 70% </a></li>
										    </ul>
									    </div>
								    </li>
								    <li class="main-nav-level-1__item">
									    <a href="http://zoloto585.ru/catalog/yuvelirnye_izdeliya/podveski/" class="main-nav-level-1__link  main-nav-level-1__link--all-items">Смотреть все кулоны</a>
								    </li>
							    </ul>
						    </div>
					    </li>

					    <li class="main-nav__item">
						    <a href="#" class="main-nav__link">КОЛЬЕ и ЦЕПИ</a>
						    <div class="main-nav-level-1">
							    <div class="main-nav-level-1__header">КОЛЬЕ и ЦЕПИ</div>
							    <ul class="main-nav-level-1__list">
								    <li class="main-nav-level-1__item">
									    <a href="#" class="main-nav-level-1__link">Материал</a>
									    <div class="main-nav-level-2">
										    <div class="main-nav-level-2__header">Материал</div>
										    <ul class="main-nav-level-2__list">
											    <li class="main-nav-level-2__item"><a href="http://zoloto585.ru/catalog/yuvelirnye_izdeliya/cepi/?set_filter=y&arrFilter_156_1842515611=Y&arrFilter_157_2212294583=Y" class="main-nav-level-2__link">Цепи из золота</a></li>
											    <li class="main-nav-level-2__item"><a href="http://zoloto585.ru/catalog/yuvelirnye_izdeliya/cepi/?set_filter=y&arrFilter_156_1842515611=Y&arrFilter_157_450215437=Y" class="main-nav-level-2__link">Цепи из серебра</a></li>
											    <li class="main-nav-level-2__item"><a href="http://zoloto585.ru/catalog/yuvelirnye_izdeliya/cepi/?set_filter=y&arrFilter_162_2707236321=Y" class="main-nav-level-2__link">Колье с бриллиантом</a></li>
											    <li class="main-nav-level-2__item"><a href="http://zoloto585.ru/catalog/yuvelirnye_izdeliya/cepi/?set_filter=y&arrFilter_162_450215437=Y&arrFilter_162_4088798008=Y&arrFilter_162_1060745282=Y&arrFilter_162_174200537=Y&arrFilter_162_3808539628=Y&arrFilter_162_945058907=Y&arrFilter_162_2226203566=Y" class="main-nav-level-2__link">Колье с цветными камнями</a></li>
											    <li class="main-nav-level-2__item"><a href="http://zoloto585.ru/catalog/yuvelirnye_izdeliya/cepi/?set_filter=y&arrFilter_162_1060745282=Y" class="main-nav-level-2__link">Колье с жемчугом</a></li>
											    <li class="main-nav-level-2__item"><a href="http://zoloto585.ru/catalog/bizhuteriya/?set_filter=y&arrFilter_155_1685985038=Y&arrFilter_155_2366072709=Y" class="main-nav-level-2__link">Колье бижутерия</a></li>
											    <li class="main-nav-level-2__item"><a href="http://zoloto585.ru/catalog/yuvelirnye_izdeliya/cepi/?set_filter=y&arrFilter_165_1886922373=Y" class="main-nav-level-2__link">Шнурок каучуковый</a></li>
										    </ul>
									    </div>
								    </li>
								    <li class="main-nav-level-1__item">
									    <a href="#" class="main-nav-level-1__link">Дизайн</a>
									    <div class="main-nav-level-2">
										    <div class="main-nav-level-2__header">Дизайн</div>
										    <ul class="main-nav-level-2__list">
											    <li class="main-nav-level-2__item"><a href="http://zoloto585.ru/catalog/yuvelirnye_izdeliya/cepi/?set_filter=y&arrFilter_165_743589328=Y" class="main-nav-level-2__link">Лав</a></li>
											    <li class="main-nav-level-2__item"><a href="http://zoloto585.ru/catalog/yuvelirnye_izdeliya/cepi/?set_filter=y&arrFilter_165_3421137111=Y" class="main-nav-level-2__link">Нонна</a></li>
											    <li class="main-nav-level-2__item"><a href="http://zoloto585.ru/catalog/yuvelirnye_izdeliya/cepi/?set_filter=y&arrFilter_165_3678868925=Y" class="main-nav-level-2__link">Бисмарк</a></li>
											    <li class="main-nav-level-2__item"><a href="http://zoloto585.ru/catalog/yuvelirnye_izdeliya/cepi/?set_filter=y&arrFilter_165_1997922972=Y" class="main-nav-level-2__link">Сингапур</a></li>
											    <li class="main-nav-level-2__item"><a href="http://zoloto585.ru/catalog/yuvelirnye_izdeliya/cepi/?set_filter=y&arrFilter_165_1233418=Y" class="main-nav-level-2__link">Ромб</a></li>
											    <li class="main-nav-level-2__item"><a href="http://zoloto585.ru/catalog/yuvelirnye_izdeliya/cepi/?set_filter=y&arrFilter_165_3771153172=Y" class="main-nav-level-2__link">Якорное</a></li>
											    <li class="main-nav-level-2__item"><a href="http://zoloto585.ru/catalog/yuvelirnye_izdeliya/cepi/?set_filter=y&arrFilter_165_2568717232=Y" class="main-nav-level-2__link">Ролекс</a></li>
											    <li class="main-nav-level-2__item"><a href="http://zoloto585.ru/catalog/yuvelirnye_izdeliya/cepi/?set_filter=y&arrFilter_165_3169671233=Y" class="main-nav-level-2__link">Панцирь</a></li>
										    </ul>
									    </div>
								    </li>
								    <li class="main-nav-level-1__item">
									    <a href="#" class="main-nav-level-1__link">Вес</a>
									    <div class="main-nav-level-2">
										    <div class="main-nav-level-2__header">Вес</div>
										    <ul class="main-nav-level-2__list">
											    <li class="main-nav-level-2__item"><a href="#" class="main-nav-level-2__link">Легкие цепочки</a></li>
											    <li class="main-nav-level-2__item"><a href="#" class="main-nav-level-2__link">Тяжелые цепочки</a></li>
										    </ul>
									    </div>
								    </li>
								    <li class="main-nav-level-1__item">
									    <a href="#" class="main-nav-level-1__link">Длина</a>
									    <div class="main-nav-level-2">
										    <div class="main-nav-level-2__header">Длина</div>
										    <ul class="main-nav-level-2__list">
											    <li class="main-nav-level-2__item"><a href="#" class="main-nav-level-2__link">50</a></li>
											    <li class="main-nav-level-2__item"><a href="#" class="main-nav-level-2__link">60</a></li>
											    <li class="main-nav-level-2__item"><a href="#" class="main-nav-level-2__link">70</a></li>
											    <li class="main-nav-level-2__item"><a href="#" class="main-nav-level-2__link">80</a></li>
											    <li class="main-nav-level-2__item"><a href="#" class="main-nav-level-2__link">90</a></li>
										    </ul>
									    </div>
								    </li>
								    <li class="main-nav-level-1__item">
									    <a href="#" class="main-nav-level-1__link">По цене</a>
									    <div class="main-nav-level-2">
										    <div class="main-nav-level-2__header">По цене</div>
										    <ul class="main-nav-level-2__list">
											    <li class="main-nav-level-2__item"><a href="#" class="main-nav-level-2__link">Цепи до 3000 рублей</a></li>
											    <li class="main-nav-level-2__item"><a href="#" class="main-nav-level-2__link">Цепи до 8500 рублей</a></li>
											    <li class="main-nav-level-2__item"><a href="#" class="main-nav-level-2__link">Цепи до 15000 рублей</a></li>
											    <li class="main-nav-level-2__item"><a href="http://zoloto585.ru/catalog/yuvelirnye_izdeliya/?set_filter=y&arrFilter_155_2366072709=Y&arrFilter_149_MAX=100&arrFilter_149_MIN=50" class="main-nav-level-2__link">Цепи со скидкой 50%, 60%, 70% </a></li>
										    </ul>
									    </div>
								    </li>
								    <li class="main-nav-level-1__item">
									    <a href="http://zoloto585.ru/catalog/yuvelirnye_izdeliya/cepi/" class="main-nav-level-1__link  main-nav-level-1__link--all-items">Смотреть все часы</a>
								    </li>
							    </ul>
						    </div>
					    </li>

					    <li class="main-nav__item">
						    <a href="#" class="main-nav__link">ЧАСЫ</a>
						    <div class="main-nav-level-1">
							    <div class="main-nav-level-1__header">ЧАСЫ</div>
							    <ul class="main-nav-level-1__list">
								    <li class="main-nav-level-1__item">
									    <a href="#" class="main-nav-level-1__link">Материал</a>
									    <div class="main-nav-level-2">
										    <div class="main-nav-level-2__header">Материал</div>
										    <ul class="main-nav-level-2__list">
											    <li class="main-nav-level-2__item"><a href="http://zoloto585.ru/catalog/chasy/?set_filter=y&arrFilter_157_2212294583=Y" class="main-nav-level-2__link">Часы из золота</a></li>
											    <li class="main-nav-level-2__item"><a href="http://zoloto585.ru/catalog/chasy/?set_filter=y&arrFilter_157_450215437=Y" class="main-nav-level-2__link">Часы из серебра</a></li>
											    <li class="main-nav-level-2__item"><a href="#" class="main-nav-level-2__link">Часы с кожаным ремешком</a></li>
											    <li class="main-nav-level-2__item"><a href="#" class="main-nav-level-2__link">Часы с браслетом</a></li>
										    </ul>
									    </div>
								    </li>
								    <li class="main-nav-level-1__item">
									    <a href="#" class="main-nav-level-1__link">Тематика</a>
									    <div class="main-nav-level-2">
										    <div class="main-nav-level-2__header">Тематика</div>
										    <ul class="main-nav-level-2__list">
											    <li class="main-nav-level-2__item"><a href="#" class="main-nav-level-2__link">Женские часы</a></li>
											    <li class="main-nav-level-2__item"><a href="#" class="main-nav-level-2__link">Мужские часы</a></li>
										    </ul>
									    </div>
								    </li>
								    <li class="main-nav-level-1__item">
									    <a href="#" class="main-nav-level-1__link">Механизм</a>
									    <div class="main-nav-level-2">
										    <div class="main-nav-level-2__header">Механизм</div>
										    <ul class="main-nav-level-2__list">
											    <li class="main-nav-level-2__item"><a href="#" class="main-nav-level-2__link">Механические часы</a></li>
											    <li class="main-nav-level-2__item"><a href="#" class="main-nav-level-2__link">Кварцевые часы</a></li>
										    </ul>
									    </div>
								    </li>
								    <li class="main-nav-level-1__item">
									    <a href="#" class="main-nav-level-1__link">Производитель</a>
									    <div class="main-nav-level-2">
										    <div class="main-nav-level-2__header">Производитель</div>
										    <ul class="main-nav-level-2__list">
											    <li class="main-nav-level-2__item"><a href="#" class="main-nav-level-2__link">Ника</a></li>
											    <li class="main-nav-level-2__item"><a href="#" class="main-nav-level-2__link">Platinor</a></li>
											    <li class="main-nav-level-2__item"><a href="#" class="main-nav-level-2__link">Qwill</a></li>
											    <li class="main-nav-level-2__item"><a href="#" class="main-nav-level-2__link">Gold</a></li>
											    <li class="main-nav-level-2__item"><a href="#" class="main-nav-level-2__link">Луч</a></li>
										    </ul>
									    </div>
								    </li>
								    <li class="main-nav-level-1__item">
									    <a href="#" class="main-nav-level-1__link">По цене</a>
									    <div class="main-nav-level-2">
										    <div class="main-nav-level-2__header">По цене</div>
										    <ul class="main-nav-level-2__list">
											    <li class="main-nav-level-2__item"><a href="#" class="main-nav-level-2__link">Часы до 3000 рублей</a></li>
											    <li class="main-nav-level-2__item"><a href="#" class="main-nav-level-2__link">Часы до 7500 рублей</a></li>
											    <li class="main-nav-level-2__item"><a href="#" class="main-nav-level-2__link">Часы до 12000 рублей</a></li>
											    <li class="main-nav-level-2__item"><a href="#" class="main-nav-level-2__link">Часы со скидкой 50%, 60%, 70% </a></li>
										    </ul>
									    </div>
								    </li>
								    <li class="main-nav-level-1__item">
									    <a href="http://zoloto585.ru/catalog/chasy/" class="main-nav-level-1__link  main-nav-level-1__link--all-items">Смотреть все часы</a>
								    </li>
							    </ul>
						    </div>
					    </li>

					    <li class="main-nav__item">
						    <a href="#" class="main-nav__link">СЕРЕБРО</a>
						    <div class="main-nav-level-1">
							    <div class="main-nav-level-1__header">СЕРЕБРО</div>
							    <ul class="main-nav-level-1__list">
								    <li class="main-nav-level-1__item">
									    <a href="#" class="main-nav-level-1__link">Тип изделия</a>
									    <div class="main-nav-level-2">
										    <div class="main-nav-level-2__header">Тип изделия</div>
										    <ul class="main-nav-level-2__list">
											    <li class="main-nav-level-2__item"><a href="http://zoloto585.ru/catalog/yuvelirnye_izdeliya/?arrFilter_196_2466206161=Y&set_filter=y&arrFilter_155_1662243607=Y&arrFilter_157_450215437=Y&arrFilter_158_3596227959=Y&arrFilter_165_2889884971=Y" class="main-nav-level-2__link">Шармы из серебра</a></li>
											    <li class="main-nav-level-2__item"><a href="http://zoloto585.ru/catalog/yuvelirnye_izdeliya/?set_filter=y&arrFilter_155_2473281379=Y&arrFilter_157_450215437=Y&arrFilter_158_3596227959=Y" class="main-nav-level-2__link">Кольца из серебра</a></li>
											    <li class="main-nav-level-2__item"><a href="http://zoloto585.ru/catalog/yuvelirnye_izdeliya/?set_filter=y&arrFilter_155_3510096238=Y&arrFilter_157_450215437=Y&arrFilter_158_3596227959=Y" class="main-nav-level-2__link">Серьги из серебра</a></li>
											    <li class="main-nav-level-2__item"><a href="http://zoloto585.ru/catalog/yuvelirnye_izdeliya/?set_filter=y&arrFilter_155_1842515611=Y&arrFilter_157_450215437=Y&arrFilter_158_3596227959=Y" class="main-nav-level-2__link">Браслеты из серебра</a></li>
											    <li class="main-nav-level-2__item"><a href="http://zoloto585.ru/catalog/yuvelirnye_izdeliya/?set_filter=y&arrFilter_155_2366072709=Y&arrFilter_157_450215437=Y&arrFilter_158_3596227959=Y" class="main-nav-level-2__link">Цепи из серебра</a></li>
											    <li class="main-nav-level-2__item"><a href="http://zoloto585.ru/catalog/yuvelirnye_izdeliya/?arrFilter_196_2466206161=Y&set_filter=y&arrFilter_155_174200537=Y&arrFilter_155_2788221432=Y&arrFilter_157_450215437=Y&arrFilter_158_3596227959=Y" class="main-nav-level-2__link">Серебряные ложечки</a></li>
											    <li class="main-nav-level-2__item"><a href="http://zoloto585.ru/catalog/yuvelirnye_izdeliya/?set_filter=y&arrFilter_155_219140800=Y&arrFilter_157_450215437=Y&arrFilter_158_3596227959=Y" class="main-nav-level-2__link">Ложки-Загребушки из серебра</a></li>
										    </ul>
									    </div>
								    </li>
								    <li class="main-nav-level-1__item">
									    <a href="#" class="main-nav-level-1__link">Коллекции</a>
									    <div class="main-nav-level-2">
										    <div class="main-nav-level-2__header">Коллекции</div>
										    <ul class="main-nav-level-2__list">
											    <li class="main-nav-level-2__item"><a href="http://zoloto585.ru/catalog/collection/kollektsiya-imagine/" class="main-nav-level-2__link">Классика imagine</a></li>
											    <li class="main-nav-level-2__item"><a href="http://zoloto585.ru/catalog/collection/kollektsiya-charmony/" class="main-nav-level-2__link">Керамика charmony</a></li>
											    <li class="main-nav-level-2__item"><a href="http://zoloto585.ru/catalog/collection/-laerte/" class="main-nav-level-2__link">Наборные кольца и браслеты laerte</a></li>
											    <li class="main-nav-level-2__item"><a href="http://zoloto585.ru/catalog/collection/-mademoiselle/" class="main-nav-level-2__link">Модные украшения mademoiselle</a></li>
										    </ul>
									    </div>
								    </li>
								    <li class="main-nav-level-1__item">
									    <a href="http://zoloto585.ru/catalog/yuvelirnye_izdeliya/serebro-925-proby/" class="main-nav-level-1__link  main-nav-level-1__link--all-items">Смотреть всё серебро</a>
								    </li>
							    </ul>
						    </div>
					    </li>

					    <li class="main-nav__item">
						    <a href="#" class="main-nav__link">БИЖУТЕРИЯ</a>
						    <div class="main-nav-level-1">
							    <div class="main-nav-level-1__header">БИЖУТЕРИЯ</div>
							    <ul class="main-nav-level-1__list">
								    <li class="main-nav-level-1__item">
									    <a href="#" class="main-nav-level-1__link">По типу</a>
									    <div class="main-nav-level-2">
										    <div class="main-nav-level-2__header">По типу</div>
										    <ul class="main-nav-level-2__list">
											    <li class="main-nav-level-2__item"><a href="http://zoloto585.ru/catalog/bizhuteriya/?set_filter=y&arrFilter_155_2473281379=Y" class="main-nav-level-2__link">Кольца бижутерия</a></li>
											    <li class="main-nav-level-2__item"><a href="http://zoloto585.ru/catalog/bizhuteriya/?set_filter=y&arrFilter_155_3510096238=Y" class="main-nav-level-2__link">Серьги бижутерия</a></li>
											    <li class="main-nav-level-2__item"><a href="http://zoloto585.ru/catalog/bizhuteriya/?set_filter=y&arrFilter_155_1842515611=Y" class="main-nav-level-2__link">Браслеты бижутерия</a></li>
											    <li class="main-nav-level-2__item"><a href="http://zoloto585.ru/catalog/bizhuteriya/?set_filter=y&arrFilter_155_1685985038=Y" class="main-nav-level-2__link">Колье бижутерия</a></li>
											    <li class="main-nav-level-2__item"><a href="http://zoloto585.ru/catalog/bizhuteriya/?set_filter=y&arrFilter_155_326707096=Y" class="main-nav-level-2__link">Комплекты бижутерия</a></li>
										    </ul>
									    </div>
								    </li>
								    <li class="main-nav-level-1__item">
									    <a href="#" class="main-nav-level-1__link">Стиль</a>
									    <div class="main-nav-level-2">
										    <div class="main-nav-level-2__header">Стиль</div>
										    <ul class="main-nav-level-2__list">
											    <li class="main-nav-level-2__item"><a href="http://zoloto585.ru/catalog/bizhuteriya/?set_filter=y&arrFilter_156_2212294583=Y" class="main-nav-level-2__link">Классика</a></li>
											    <li class="main-nav-level-2__item"><a href="http://zoloto585.ru/catalog/bizhuteriya/?set_filter=y&arrFilter_156_450215437=Y" class="main-nav-level-2__link">Мода </a></li>
											    <li class="main-nav-level-2__item"><a href="http://zoloto585.ru/catalog/bizhuteriya/?set_filter=y&arrFilter_156_4088798008=Y" class="main-nav-level-2__link">Тренд</a></li>
										    </ul>
									    </div>
								    </li>
								    <li class="main-nav-level-1__item">
									    <a href="#" class="main-nav-level-1__link">Событие</a>
									    <div class="main-nav-level-2">
										    <div class="main-nav-level-2__header">Событие</div>
										    <ul class="main-nav-level-2__list">
											    <li class="main-nav-level-2__item"><a href="http://zoloto585.ru/catalog/bizhuteriya/?set_filter=y&arrFilter_156_2212294583=Y" class="main-nav-level-2__link">На каждый день (классика)</a></li>
											    <li class="main-nav-level-2__item"><a href="http://zoloto585.ru/catalog/bizhuteriya/?set_filter=y&arrFilter_156_450215437=Y" class="main-nav-level-2__link">На вечеринку (мода)</a></li>
										    </ul>
									    </div>
								    </li>
								    <li class="main-nav-level-1__item">
									    <a href="http://zoloto585.ru/catalog/bizhuteriya/" class="main-nav-level-1__link  main-nav-level-1__link--all-items">Смотреть всю бижутерию</a>
								    </li>
							    </ul>
						    </div>
					    </li>

					    <li class="main-nav__item">
						    <a href="#" class="main-nav__link">КОЛЛЕКЦИИ</a>
						    <div class="main-nav-level-1">
							    <div class="main-nav-level-1__header">КОЛЛЕКЦИИ</div>
							    <ul class="main-nav-level-1__list">
								    <li class="main-nav-level-1__item">
									    <a href="#" class="main-nav-level-1__link">Украшения с драгоценными и полудрагоценными камнями</a>
									    <div class="main-nav-level-2">
										    <div class="main-nav-level-2__header">Украшения с драгоценными и полудрагоценными камнями</div>
										    <ul class="main-nav-level-2__list">
											    <li class="main-nav-level-2__item"><a href="http://zoloto585.ru/catalog/collection/kollektsiya-lady-gold/" class="main-nav-level-2__link">Базовые модели lady gold</a></li>
											    <li class="main-nav-level-2__item"><a href="http://zoloto585.ru/catalog/collection/siyanie/" class="main-nav-level-2__link">Классические украшения с бриллиантами Сияние</a></li>
											    <li class="main-nav-level-2__item"><a href="http://zoloto585.ru/catalog/collection/kollektsiya-caprice/" class="main-nav-level-2__link">Модные украшения caprice</a></li>
											    <li class="main-nav-level-2__item"><a href="http://zoloto585.ru/catalog/collection/luxury/" class="main-nav-level-2__link">Ультра модные украшения luxury</a></li>
											    <li class="main-nav-level-2__item"><a href="http://zoloto585.ru/catalog/collection/-euro-mode/" class="main-nav-level-2__link">Европейские украшения из золота 375 пробы euro mode</a></li>
										    </ul>
									    </div>
								    </li>
								    <li class="main-nav-level-1__item">
									    <a href="#" class="main-nav-level-1__link">Золотые украшения с фианитами и без вставок</a>
									    <div class="main-nav-level-2">
										    <div class="main-nav-level-2__header">Золотые украшения с фианитами и без вставок</div>
										    <ul class="main-nav-level-2__list">
											    <li class="main-nav-level-2__item"><a href="http://zoloto585.ru/catalog/collection/kollektsiya-lovely/" class="main-nav-level-2__link">Модные украшения lovely</a></li>
										    </ul>
									    </div>
								    </li>
								    <li class="main-nav-level-1__item">
									    <a href="#" class="main-nav-level-1__link">Серебряные украшения</a>
									    <div class="main-nav-level-2">
										    <div class="main-nav-level-2__header">Серебряные украшения</div>
										    <ul class="main-nav-level-2__list">
											    <li class="main-nav-level-2__item"><a href="http://zoloto585.ru/catalog/collection/kollektsiya-imagine/" class="main-nav-level-2__link">Классика imagine</a></li>
											    <li class="main-nav-level-2__item"><a href="http://zoloto585.ru/catalog/collection/kollektsiya-charmony/" class="main-nav-level-2__link">Керамика charmony</a></li>
											    <li class="main-nav-level-2__item"><a href="http://zoloto585.ru/catalog/collection/-laerte/" class="main-nav-level-2__link">Наборные кольца и браслеты laerte</a></li>
											    <li class="main-nav-level-2__item"><a href="http://zoloto585.ru/catalog/collection/-mademoiselle/" class="main-nav-level-2__link">Модные украшения mademoiselle</a></li>
										    </ul>
									    </div>
								    </li>
								    <li class="main-nav-level-1__item">
									    <a href="http://zoloto585.ru/catalog/collection/" class="main-nav-level-1__link  main-nav-level-1__link--all-items">Смотреть все коллекции</a>
								    </li>
							    </ul>
						    </div>
					    </li>
				    </ul>
			    </nav>
		    </div>
	    </div>
	    <!-- END-of-"HEADER-BOTTOM" -->


        <div class="btn_mobile_menu clearfix h-touch-hidden">
            <ul class="nav clearfix">
                <li class="parent first">
                    <a href="/catalog/yuvelirnye_izdeliya/" id="sidebar-toggle"><img src="<?= SITE_TEMPLATE_PATH ?>/images/burger.png" alt="" /> Каталог</a>
                </li>
            </ul>
        </div>
        <div class="inner">
            <div id="search" class="flat" style="display:none">

                <?/*
=======
        <div class="inner h-touch-hidden">
            <div id="search" class="flat">
                <!-- Поиск  -->
                <?
>>>>>>> msalnikov
                $APPLICATION->IncludeComponent("bitrix:search.form" ,"flat", array(
                    "PAGE" => "#SITE_DIR#search/"
                ),
                    false
                );*/

                ?>
                <?$APPLICATION->IncludeComponent(
                    "bitrix:main.include",
                    "",
                    Array(
                        "COMPONENT_TEMPLATE" => ".default",
                        "AREA_FILE_SHOW" => "file",
                        "AREA_FILE_SUFFIX" => "inc",
                        "EDIT_TEMPLATE" => "",
                        "PATH" => "/include/search_yandex.php"
                    )
                );?>
              </div>
        </div>

    </header>
    <main>
        <div class="nav-wrap h-touch-hidden">
            <nav id="sidebar" class="navigation">
                <!--Меню html(работает только при включенном js)-->
                        <!--           Навигация  -->
                        <ul class="nav clearfix">
                            <li class="parent first katalog-li show-mob">
                                <a href="/catalog/yuvelirnye_izdeliya/" class="multilevel"><img src="/bitrix/templates/zoloto/images/burger.png" alt="">каталог</a>

                                <div class="katalog-main">
                                    <ul class="level1" style="height: 482px;">
                                        <li class=""><a href="javascript:void(0); ">Для женщин</a>

                                            <div class="level2">
                                                <div class="col 1" style="height: 480px;">
                                                    <ul>
                                                        <li class=""><a href="/catalog/yuvelirnye_izdeliya/kolca/">Кольца</a></li>
                                                        <li><a href="/catalog/yuvelirnye_izdeliya/kolca/obruchalnye/">Обручальные</a></li>
                                                        <li><a href="/catalog/yuvelirnye_izdeliya/kolca/krasnoe-zoloto-585-proby/">Красное золото</a>
                                                        </li>
                                                        <li><a href="/catalog/yuvelirnye_izdeliya/kolca/beloe-zoloto-585-proby/">Белое золото</a></li>
                                                        <li><a href="/catalog/yuvelirnye_izdeliya/kolca/zheltoe-zoloto-585-proby/">Желтое золото</a>
                                                        </li>
                                                        <li><a href="/catalog/yuvelirnye_izdeliya/kolca/kombinirovannoe-zoloto-585-proby/">Комбинированное
                                                                золото</a></li>
                                                        <li><a href="/catalog/yuvelirnye_izdeliya/kolca/serebro-925-proby/">Серебро</a></li>
                                                       <!-- <li><a href=" /catalog/for_woman/kolca/keramika/ ">Керамика</a></li>-->
                                                        <li><a href="/catalog/yuvelirnye_izdeliya/kolca/s-brilliantom/">Бриллианты</a></li>
                                                        <!--<li><a href=" /catalog/for_woman/kolca/cvetnyy_kamni/ ">Цветные камни</a></li>
                                                        <li><a href=" /catalog/for_woman/kolca/bez_vstavok/ ">Без вставок</a></li>-->
                                                    </ul>
                                                    <ul>
                                                        <li class=""><a href="/catalog/yuvelirnye_izdeliya/cepi/">Цепи</a></li>
                                                        <li><a href="/catalog/yuvelirnye_izdeliya/cepi/krasnoe-zoloto-585-proby/">Красное золото</a>
                                                        </li>
                                                        <li><a href="/catalog/yuvelirnye_izdeliya/cepi/beloe-zoloto-585-proby/">Белое золото</a></li>
                                                        <li><a href="/catalog/yuvelirnye_izdeliya/cepi/kombinirovannoe-zoloto-585-proby/">Комбинированное
                                                                золото</a></li>
                                                        <li><a href="/catalog/yuvelirnye_izdeliya/cepi/serebro-925-proby/">Серебро</a></li>
                                                    </ul>
                                                </div>
                                                <div class="col 3" style="height: 480px;">
                                                    <ul>
                                                        <li class=""><a href="/catalog/yuvelirnye_izdeliya/podveski/">Подвесы</a></li>
                                                        <li><a href="/catalog/yuvelirnye_izdeliya/podveski/krasnoe-zoloto-585-proby/">Красное
                                                                золото</a></li>
                                                        <li><a href="/catalog/yuvelirnye_izdeliya/podveski/beloe-zoloto-585-proby/">Белое золото</a>
                                                        </li>
                                                        <li><a href="/catalog/yuvelirnye_izdeliya/podveski/zheltoe-zoloto/">Желтое золото</a>
                                                        </li>
                                                        <li><a href="/catalog/yuvelirnye_izdeliya/podveski/kombinirovannoe-zoloto/">Комбинированное
                                                                золото</a></li>
                                                        <li><a href="/catalog/yuvelirnye_izdeliya/podveski/serebro-925-proby/">Серебро</a></li>
                                                        <!--<li><a href=" /catalog/for_woman/podvesy/keramika/ ">Керамика</a></li>-->
                                                        <li><a href="/catalog/yuvelirnye_izdeliya/podveski/s-brilliantom/">Бриллианты</a></li>
                                                       <!-- <li><a href=" /catalog/for_woman/podvesy/cvetnyy_kamni/ ">Цветные камни</a></li>
                                                        <li><a href=" /catalog/for_woman/podvesy/bez_vstavok/ ">Без вставок</a></li>-->
                                                    </ul>
                                                    <ul>
                                                        <li class=""><a href="/catalog/yuvelirnye_izdeliya/braslety/">Браслеты</a></li>
                                                        <li><a href="/catalog/yuvelirnye_izdeliya/braslety/krasnoe-zoloto-585-proby/">Красное
                                                                золото</a></li>
                                                        <li><a href="/catalog/yuvelirnye_izdeliya/braslety/beloe-zoloto-585-proby/">Белое золото</a>
                                                        </li>
                                                        <li><a href="/catalog/yuvelirnye_izdeliya/braslety/kombinirovannoe-zoloto/">Комбинированное
                                                                золото</a></li>
                                                        <li><a href="/catalog/yuvelirnye_izdeliya/braslety/serebro-925-proby/">Серебро</a></li>
                                                        <li><a href="/catalog/yuvelirnye_izdeliya/braslety/s-brilliantom/">Бриллианты</a></li>
                                                        <!--<li><a href=" /catalog/for_woman/braslety/keramika/ ">Керамика</a></li>
                                                        <li><a href=" /catalog/for_woman/braslety/cvetnyy_kamni/ ">Цветные камни</a></li>
                                                        <li><a href=" /catalog/for_woman/braslety/bez_vstavok/ ">Без вставок</a></li>-->
                                                    </ul>
                                                </div>
                                                <div class="col 5" style="height: 480px;">
                                                    <ul>
                                                        <li class=""><a href="/catalog/yuvelirnye_izdeliya/sergi/">Серьги</a></li>
                                                        <li><a href="/catalog/yuvelirnye_izdeliya/sergi/krasnoe-zoloto-585-proby/">Красное золото</a>
                                                        </li>
                                                        <li><a href="/catalog/yuvelirnye_izdeliya/sergi/beloe-zoloto-585-proby/">Белое золото</a></li>
                                                        <li><a href="/catalog/yuvelirnye_izdeliya/sergi/zheltoe-zoloto/">Желтое
                                                                золото</a></li>
                                                        <li><a href="/catalog/yuvelirnye_izdeliya/sergi/kombinirovannoe-zoloto/">Комбинированное
                                                                золото</a></li>
                                                        <li><a href="/catalog/yuvelirnye_izdeliya/sergi/serebro-925-proby/">Серебро</a></li>
                                                        <li><a href="/catalog/yuvelirnye_izdeliya/sergi/s-brilliantom/">Бриллианты</a></li>
                                                       <!-- <li><a href=" /catalog/for_woman/sergi/keramika/ ">Керамика</a></li>
                                                        <li><a href=" /catalog/for_woman/sergi/cvetnyy_kamni/ ">Цветные камни</a></li>
                                                        <li><a href=" /catalog/for_woman/sergi/bez_vstavok/ ">Без вставок</a></li>-->
                                                    </ul>
                                                    <ul>
                                                        <li class=""><a href="/catalog/yuvelirnye_izdeliya/pirsing/">Пирсинг</a></li>
                                                        <li><a href="/catalog/yuvelirnye_izdeliya/pirsing/krasnoe-zoloto-585-proby/">Красное
                                                                золото</a></li>
                                                        <li><a href="/catalog/yuvelirnye_izdeliya/pirsing/serebro-925-proby/">Серебро</a></li>
                                                        <li><a href="	/catalog/yuvelirnye_izdeliya/pirsing/s-brilliantom/">Бриллианты</a></li>
                                                        <!--<li><a href=" /catalog/for_woman/pirsing/cvetnyy_kamni/ ">Цветные камни</a></li>
                                                        <li><a href=" /catalog/for_woman/pirsing/bez_vstavok/ ">Без вставок</a></li>-->
                                                    </ul>
                                                    <ul>
                                                        <li><a href="/catalog/chasy/">Часы</a></li>
                                                    </ul>
                                                </div>
                                                <div class="col" style="height: 480px;">
                                                    <ul>
                                                        <li class=""><a href="/catalog/yuvelirnye_izdeliya/kolye/">Колье (бусы)</a></li>
                                                        <li><a href="/catalog/yuvelirnye_izdeliya/kolye/krasnoe-zoloto-585-proby/">Красное золото</a></li>
                                                        <li><a href="/catalog/yuvelirnye_izdeliya/kolye/beloe-zoloto-585-proby/">Белое золото</a></li>
                                                        <li><a href="/catalog/yuvelirnye_izdeliya/kolye/zhemchug/">Жемчуг</a></li>
                                                        <li><a href="/catalog/yuvelirnye_izdeliya/kolye/s-brilliantom/">Бриллианты</a></li>
                                                        <li><a href="/catalog/yuvelirnye_izdeliya/kolye/serebro-925-proby/">Серебро</a></li>
                                                        <!--<li><a href=" /catalog/for_woman/busy/kombinirovannoe_zoloto/ ">Комбинированное золото</a></li>
                                                        <li><a href=" /catalog/for_woman/busy/cvetnyy_kamni/ ">Цветные камни</a></li>
                                                        <li><a href=" /catalog/for_woman/busy/bez_vstavok/ ">Без вставок</a></li>-->

                                                    </ul>
                                                    <ul>
                                                        <li class=""><a href="/catalog/yuvelirnye_izdeliya/sharmy/">Шармы для браслетов</a></li>
                                                        <li><a href="/catalog/yuvelirnye_izdeliya/sharmy/">Серебро</a></li>
                                                        <li><a href="/catalog/yuvelirnye_izdeliya/?arrFilter_162_1112425479=Y&arrFilter_196_2466206161=Y&set_filter=y&arrFilter_155_1662243607=Y&arrFilter_157_450215437=Y&arrFilter_162_1842515611=Y&arrFilter_162_450215437=Y&arrFilter_162_4252452532=Y&arrFilter_162_2707236321=Y&arrFilter_162_3510096238=Y&arrFilter_162_3596227959=Y&arrFilter_162_4194326291=Y&arrFilter_162_4088798008=Y&arrFilter_162_1060745282=Y&arrFilter_162_2944839123=Y&arrFilter_162_174200537=Y&arrFilter_162_2483454842=Y&arrFilter_162_3693793700=Y&arrFilter_162_326707096=Y&arrFilter_162_2367533627=Y&arrFilter_162_3632373061=Y&arrFilter_162_2225864208=Y&arrFilter_162_2366072709=Y&arrFilter_162_1790921346=Y&arrFilter_162_841265288=Y&arrFilter_162_3808539628=Y&arrFilter_162_2047402582=Y&arrFilter_162_945058907=Y&arrFilter_162_2788221432=Y&arrFilter_162_2226203566=Y&arrFilter_162_894006417=Y&arrFilter_162_4088188550=Y&arrFilter_162_498629140=Y&arrFilter_162_219140800=Y&arrFilter_162_3678868925=Y&arrFilter_162_1662243607=Y&arrFilter_165_2889884971=Y">Цветные камни</a></li>
                                                        <!--<li><a href=" /catalog/for_woman/sharms/bez_vstavok/ ">Без вставок</a>
                                                        </li>-->
                                                    </ul>
                                                    <ul>
                                                        <li class=""><a href="/catalog/yuvelirnye_izdeliya/broshi/">Броши</a></li>
                                                        <li><a href="/catalog/yuvelirnye_izdeliya/broshi/krasnoe-zoloto-585-proby/">Красное золото</a></li>
                                                        <li><a href="/catalog/yuvelirnye_izdeliya/broshi/serebro-925-proby/">Серебро</a></li>
                                                        <li><a href="/catalog/yuvelirnye_izdeliya/broshi/s-brilliantom/">Бриллианты</a></li>
                                                        <!--<li><a href=" /catalog/for_woman/broshi/cvetnyy_kamni/ ">Цветные
                                                                камни</a></li>
                                                        <li><a href=" /catalog/for_woman/broshi/bez_vstavok/ ">Без вставок</a>
                                                        </li>-->
                                                    </ul>
                                                </div>
                                            </div>
                                        </li>
                                        <li><a href="javascript:void(0);">Для мужчин</a>

                                            <div class="level2">
                                                <div class="col" style="height: 480px;">
                                                    <ul>
                                                        <li class=""><a href="/catalog/yuvelirnye_izdeliya/zaponki/">Запонки</a></li>
                                                        <li><a href="/catalog/yuvelirnye_izdeliya/zaponki/krasnoe-zoloto-585-proby/">Красное
                                                                золото</a></li>
                                                        <li><a href="/catalog/yuvelirnye_izdeliya/zaponki/beloe-zoloto-585-proby/">Белое золото</a>
                                                        </li>
                                                        <li><a href="/catalog/yuvelirnye_izdeliya/zaponki/serebro-925-proby/">Серебро</a></li>
                                                    </ul>
                                                   <!-- <ul>
                                                        <li class=""><a href="/catalog/for_man/kolca/">Кольца</a></li>
                                                        <li><a href=" /catalog/for_man/kolca/krasnoe_zoloto/ ">Красное
                                                                золото</a></li>
                                                        <li><a href=" /catalog/for_man/kolca/serebro/ ">Серебро</a></li>
                                                    </ul>-->
                                                </div>
                                                <div class="col" style="height: 480px;">
                                                    <ul>
                                                        <li class=""><a href="/catalog/yuvelirnye_izdeliya/perstni_i_pechatki/">Перстни и
                                                                печатки</a></li>
                                                        <li><a href="/catalog/yuvelirnye_izdeliya/perstni_i_pechatki/krasnoe-zoloto-585-proby/">Красное
                                                                золото</a></li>
                                                        <li>
                                                            <a href="/catalog/yuvelirnye_izdeliya/perstni_i_pechatki/kombinirovannoe-zoloto/">Комбинированное
                                                                золото</a></li>
                                                        <li><a href="/catalog/yuvelirnye_izdeliya/perstni_i_pechatki/serebro-925-proby/">Серебро</a>
                                                        </li>
                                                    </ul>
                                                   <!-- <ul>
                                                        <li class=""><a href="/catalog/yuvelirnye_izdeliya/cepi/">Цепи</a></li>
                                                        <li><a href=" /catalog/for_man/cepi/krasnoe_zoloto/ ">Красное золото</a>
                                                        </li>
                                                        <li><a href=" /catalog/for_man/cepi/serebro/ ">Серебро</a></li>
                                                    </ul>-->
                                                </div>
                                                <div class="col" style="height: 480px;">
                                                    <!--<ul>
                                                        <li class=""><a href="/catalog/for_man/braslety/">Браслеты</a></li>
                                                        <li><a href=" /catalog/for_man/braslety/krasnoe_zoloto/ ">Красное
                                                                золото</a></li>
                                                        <li><a href=" /catalog/for_man/braslety/kombinirovannoe_zoloto/ ">Комбинированное
                                                                золото</a></li>
                                                    </ul>-->
                                                    <ul>
                                                        <li class=""><a href="/catalog/yuvelirnye_izdeliya/zakolka-dlya-galstuka/">Зажимы
                                                                для галстуков</a></li>
                                                        <li><a href="/catalog/yuvelirnye_izdeliya/zakolka-dlya-galstuka/krasnoe-zoloto-585-proby/">Красное
                                                                золото</a></li>
                                                        <li><a href="/catalog/yuvelirnye_izdeliya/zakolka-dlya-galstuka/beloe-zoloto-585-proby/">Белое
                                                                золото</a></li>
                                                        <li>
                                                            <a href="/catalog/yuvelirnye_izdeliya/zakolka-dlya-galstuka/serebro-925-proby/">Серебро</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </li>
                                        <!--<li><a href="javascript:void(0); ">Для детей</a>

                                            <div class="level2">
                                                <div class="col" style="height: 480px;">
                                                    <ul>
                                                        <li class=""><a href="/catalog/for_kids/kolca/">Кольца</a></li>
                                                        <li><a href=" /catalog/for_kids/kolca/krasnoe_zoloto/ ">Красное
                                                                золото</a></li>
                                                        <li><a href=" /catalog/for_kids/kolca/serebro/ ">Серебро</a></li>
                                                        <li><a href=" /catalog/for_kids/kolca/cvetnye_kamni/ ">Цветные камни</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="col" style="height: 480px;">
                                                    <ul>
                                                        <li class=""><a href="/catalog/for_kids/sergi/">Серьги</a></li>
                                                        <li><a href=" /catalog/for_kids/sergi/krasnoe_zoloto/ ">Красное
                                                                золото</a></li>
                                                        <li><a href=" /catalog/for_kids/sergi/serebro/ ">Серебро</a></li>
                                                        <li><a href=" /catalog/for_kids/sergi/cvetnye_kamni/ ">Цветные камни</a>
                                                        </li>
                                                        <li><a href=" /catalog/for_kids/sergi/bez_vstavok/ ">Без вставок</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="col" style="height: 480px;">
                                                    <ul>
                                                        <li class=""><a href="/catalog/for_kids/podvesi/">Подвесы</a></li>
                                                        <li><a href=" /catalog/for_kids/podvesi/krasnoe_zoloto/ ">Красное
                                                                золото</a></li>
                                                        <li><a href=" /catalog/for_kids/podvesi/serebro/ ">Серебро</a></li>
                                                        <li><a href=" /catalog/for_kids/podvesi/brillianty/ ">Бриллианты</a>
                                                        </li>
                                                        <li><a href=" /catalog/for_kids/podvesi/cvetnye_kamni/ ">Цветные
                                                                камни</a></li>
                                                        <li><a href=" /catalog/for_kids/podvesi/bez_vstavok/ ">Без вставок</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="col" style="height: 480px;">
                                                    <ul>
                                                        <li class=""><a href="/catalog/for_kids/serebryanye_lozhki/">Серебряные
                                                                ложки</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </li>-->
                                        <li class=""><a href="/catalog/yuvelirnye_izdeliya/stolovoe-serebro/">Столовое серебро</a>

                                            <div class="level2">
                                               <!-- <div class="col" style="height: 480px;">
                                                    <ul>
                                                        <li class=""><a href="/catalog/stolovoe_serebro/lozhki_zagrebushki/">Ложки-загребушки</a>
                                                        </li>
                                                    </ul>
                                                </div>-->
                                                <div class="col" style="height: 480px;">
                                                    <ul>
                                                        <li class=""><a href="/catalog/yuvelirnye_izdeliya/stolovoe-serebro/detskie_lozhki/">Детские
                                                                ложки</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </li>
                                        <li><a href="javascript:void(0);">Религиозные украшения</a>

                                            <div class="level2">
                                                <div class="col" style="height: 480px;">
                                                    <ul>
                                                        <li class=""><a
                                                                href="/catalog/yuvelirnye_izdeliya/kresti/">Кресты</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="col" style="height: 480px;">
                                                    <ul>
                                                        <li class=""><a
                                                                href="/catalog/yuvelirnye_izdeliya/ikony/">Нательные
                                                                иконы</a></li>
                                                    </ul>
                                                </div>
                                                <!--<div class="col" style="height: 480px;">
                                                    <ul>
                                                        <li class=""><a
                                                                href="/catalog/ukrasheniya_s_relizioznoj_simvolikoj/musulman_simbols/">Мусульманские
                                                                кулоны</a></li>
                                                    </ul>
                                                </div>-->
                                            </div>
                                        </li>
                                        <li class="search_mobile">
                                            <a href="#">Поиск</a>

                                            <div class="level2">
                                                <?$APPLICATION->IncludeComponent(
                                                    "bitrix:main.include",
                                                    "",
                                                    Array(
                                                        "COMPONENT_TEMPLATE" => ".default",
                                                        "AREA_FILE_SHOW" => "file",
                                                        "AREA_FILE_SUFFIX" => "inc",
                                                        "EDIT_TEMPLATE" => "",
                                                        "PATH" => "/include/search_yandex.php"
                                                    )
                                                );?>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li class="parent"><a href="/catalog/yuvelirnye_izdeliya/kolca/" class="multilevel">Кольца</a>

                                <div class="li-inner four">
                                    <div class="wrp">
                                        <div class="kat"><a href="/catalog/yuvelirnye_izdeliya/kolca/krasnoe-zoloto-585-proby/">Красное золото 585<img
                                                    src="/images/menu_img/red_kolco.png" height="125" width="200" alt=""></a>
                                        </div>
                                        <div class="kat"><a href="/catalog/yuvelirnye_izdeliya/kolca/beloe-zoloto-585-proby/">Белое золото 585<img
                                                    src="/images/menu_img/fff_kol.png" height="125" width="200" alt=""></a></div>
                                        <div class="kat"><a href="/catalog/yuvelirnye_izdeliya/kolca/kombinirovannoe-zoloto-585-proby/">Комбинированное
                                                золото 585<img src="/images/menu_img/komb_kol.png" height="125" width="200"
                                                               alt=""></a></div>
                                        <div class="kat"><a href="/catalog/bizhuteriya/kolca/">Бижутерия<img
                                                    src="/images/menu_img/kolco1.png" height="125" width="200" alt=""></a></div>
                                        <div class="kat"><a href="/catalog/yuvelirnye_izdeliya/kolca/zoloto-375-proby/">Золото 375<img
                                                    src="/images/menu_img/385_kol.png" height="125" width="200" alt=""></a></div>
                                        <div class="kat"><a href="/catalog/yuvelirnye_izdeliya/kolca/zheltoe-zoloto-585-proby/">Лимонное золото 585<img
                                                    src="/images/menu_img/lim_kol.png" height="125" width="200" alt=""></a></div>
                                        <div class="kat"><a href="/catalog/yuvelirnye_izdeliya/kolca/serebro-925-proby/">Серебро 925<img
                                                    src="/images/menu_img/ser_kol.png" height="125" width="200" alt=""></a></div>
                                        <div class="kat"><a href="/catalog/yuvelirnye_izdeliya/kolca/obruchalnye/">Обручальные<img
                                                    src="/images/menu_img/ob.png" height="125" width="200" alt=""></a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="parent"><a href="/catalog/yuvelirnye_izdeliya/sergi/" class="multilevel">Серьги</a>

                                <div class="li-inner four">
                                    <div class="wrp">
                                        <div class="kat"><a href="/catalog/yuvelirnye_izdeliya/sergi/zoloto-375-proby/">Золото 375<img
                                                    src="/images/menu_img/385_ser.png" height="125" width="200" alt=""></a></div>
                                        <div class="kat"><a href="/catalog/yuvelirnye_izdeliya/sergi/kombinirovannoe-zoloto/">Комбинированное
                                                золото 585<img src="/images/menu_img/komb_ser.png" height="125" width="200"
                                                               alt=""></a></div>
                                        <div class="kat"><a href="/catalog/yuvelirnye_izdeliya/sergi/krasnoe-zoloto-585-proby/">Красное золото 585<img
                                                    src="/images/menu_img/ser_red.png" height="125" width="200" alt=""></a></div>
                                        <div class="kat"><a href="/catalog/yuvelirnye_izdeliya/sergi/beloe-zoloto-585-proby/">Белое золото 585<img
                                                    src="/images/menu_img/fff_ser.png" height="125" width="200" alt=""></a></div>
                                        <div class="kat"><a href="/catalog/yuvelirnye_izdeliya/sergi/serebro-925-proby/">Серебро 925<img
                                                    src="/images/menu_img/ser_cer.png" height="125" width="200" alt=""></a></div>
                                        <div class="kat"><a href="/catalog/bizhuteriya/sergi/">Бижутерия<img
                                                    src="/images/menu_img/sergi.png" height="125" width="200" alt=""></a></div>
                                        <div class="kat"><a href="/catalog/yuvelirnye_izdeliya/sergi/zheltoe-zoloto/">Лимонное золото 585<img
                                                    src="/images/menu_img/lim_ser.png" height="125" width="200" alt=""></a></div>
                                    </div>
                                </div>
                            </li>
                            <li class="parent"><a href="/catalog/yuvelirnye_izdeliya/podveski/" class="multilevel">Кулоны</a>

                                <div class="li-inner four">
                                    <div class="wrp">
                                        <div class="kat"><a href="/catalog/yuvelirnye_izdeliya/podveski/zoloto-375-proby/">Золото 375<img
                                                    src="/images/menu_img/0000.png" height="125" width="200" alt=""></a></div>
                                        <div class="kat"><a href="/catalog/yuvelirnye_izdeliya/podveski/kombinirovannoe-zoloto/">Комбинированное
                                                золото 585<img src="/images/menu_img/komb_kul.png" height="125" width="200"
                                                               alt=""></a></div>
                                        <div class="kat"><a href="/catalog/yuvelirnye_izdeliya/podveski/krasnoe-zoloto-585-proby/">Красное золото
                                                585<img src="/images/menu_img/culon_red.png" height="125" width="200" alt=""></a>
                                        </div>
                                        <div class="kat"><a href="/catalog/yuvelirnye_izdeliya/podveski/beloe-zoloto-585-proby/">Белое золото 585<img
                                                    src="/images/menu_img/fff_kul.png" height="125" width="200" alt=""></a></div>
                                        <div class="kat"><a href="/catalog/yuvelirnye_izdeliya/podveski/serebro-925-proby/">Серебро 925<img
                                                    src="/images/menu_img/ser_kul.png" height="125" width="200" alt=""></a></div>
                                        <div class="kat"><a href="/catalog/yuvelirnye_izdeliya/podveski/zheltoe-zoloto/">Лимонное золото
                                                585<img src="/images/menu_img/lim_pod.png" height="125" width="200" alt=""></a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="parent"><a href="/catalog/yuvelirnye_izdeliya/cepi/" class="multilevel">Цепочки</a>

                                <div class="li-inner four">
                                    <div class="wrp">
                                        <div class="kat"><a href="/catalog/yuvelirnye_izdeliya/cepi/serebro-925-proby/">Серебро 925<img
                                                    src="/images/menu_img/ser_cep.png" height="125" width="200" alt=""></a></div>
                                        <div class="kat"><a href="/catalog/yuvelirnye_izdeliya/cepi/krasnoe-zoloto-585-proby/">Красное золото 585<img
                                                    src="/images/menu_img/red_cep.png" height="125" width="200" alt=""></a></div>
                                        <div class="kat"><a href="/catalog/yuvelirnye_izdeliya/cepi/kombinirovannoe-zoloto-585-proby/">Комбинированное
                                                золото 585<img src="/images/menu_img/komb_cep.png" height="125" width="200"
                                                               alt=""></a></div>
                                        <div class="kat"><a href="/catalog/yuvelirnye_izdeliya/cepi/beloe-zoloto-585-proby/">Белое золото 585<img
                                                    src="/images/menu_img/fff_cep.png" height="125" width="200" alt=""></a></div>
                                        <div class="kat"><a href="/catalog/yuvelirnye_izdeliya/cepi/zoloto-375-proby/">Золото 375<img
                                                    src="/images/menu_img/385_cep.png" height="125" width="200" alt=""></a></div>
                                    </div>
                                </div>
                            </li>
                            <li><a href="/catalog/bizhuteriya/" class="multilevel">Бижутерия</a></li>
                            <li class="parent collection-li show-mob"><a href="/catalog/collection/"
                                                                         class="multilevel">Коллекции</a>

                                <div class="katalog-main">
                                    <div class="wrp">
                                        <ul class="level1">
                                            <li class=""><a href="/catalog/collection/kollektsiya-imagine/">Imagine</a>

                                                <div class="level2"><a href="/catalog/collection/kollektsiya-imagine/"><img
                                                            src="/upload/iblock/e3a/imagine2.jpg" height="400" width="850"
                                                            alt=""></a></div>
                                            </li>
                                            <li><a href="/catalog/collection/kollektsiya-charmony/">Charmony</a>

                                                <div class="level2"><a href="/catalog/collection/kollektsiya-charmony/"><img
                                                            src="/upload/iblock/abc/charmony2.jpg" height="400" width="850" alt=""></a>
                                                </div>
                                            </li>
                                            <li><a href="/catalog/collection/siyanie/">Сияние</a>

                                                <div class="level2"><a href="/catalog/collection/siyanie/"><img
                                                            src="/upload/iblock/697/сияние.jpg" height="400" width="850" alt=""></a>
                                                </div>
                                            </li>
                                            <li><a href="/catalog/collection/kollektsiya-lady-gold/">Lady gold</a>

                                                <div class="level2"><a href="/catalog/collection/kollektsiya-lady-gold/"><img
                                                            src="/upload/iblock/080/lady_gold_big.jpg" height="400" width="850"
                                                            alt=""></a></div>
                                            </li>
                                            <li><a href="/catalog/collection/kollektsiya-caprice/">Caprice</a>

                                                <div class="level2"><a href="/catalog/collection/kollektsiya-caprice/"><img
                                                            src="/upload/iblock/7b4/caprice_big.jpg" height="400" width="850"
                                                            alt=""></a></div>
                                            </li>
                                            <li><a href="/catalog/collection/kollektsiya-lovely/">Lovely</a>

                                                <div class="level2"><a href="/catalog/collection/kollektsiya-lovely/"><img
                                                            src="/upload/iblock/d0c/lovely_big.jpg" height="400" width="850" alt=""></a>
                                                </div>
                                            </li>
                                            <li><a href="/catalog/collection/-laerte/">LaErte</a>

                                                <div class="level2"><a href="/catalog/collection/-laerte/"><img
                                                            src="/upload/iblock/2bf/123.jpg" height="400" width="850" alt=""></a>
                                                </div>
                                            </li>
                                            <li><a href="/catalog/collection/-mademoiselle/">Mademoiselle</a>

                                                <div class="level2"><a href="/catalog/collection/-mademoiselle/"><img
                                                            src="/upload/iblock/ceb/mademouselle_big.jpg" height="400" width="850"
                                                            alt=""></a></div>
                                            </li>
                                            <li><a href="/catalog/collection/luxury/">Luxury</a>

                                                <div class="level2"><a href="/catalog/collection/luxury/"><img
                                                            src="/upload/iblock/951/luxury.jpg" height="400" width="850" alt=""></a>
                                                </div>
                                            </li>
                                            <li><a href="/catalog/collection/-euro-mode/">Euro mode</a>

                                                <div class="level2"><a href="/catalog/collection/-euro-mode/"><img
                                                            src="/upload/iblock/11e/euromode_big.jpg" height="400" width="850"
                                                            alt=""></a></div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                           <li class="show-mob"><a href="/catalog/yuvelirnye_izdeliya/serebro-925-proby/" class="multilevel">Серебро</a></li>
                            <li class="show-mob"><a href="/catalog/chasy/">Часы</a></li>
                            <li class="parent multi">
                                <a href="http://zoloto585.ru/about/" class="multilevel"><img
                                        src="/bitrix/templates/zoloto/images/q.png">Покупателям</a>

                                <div class="li-inner">
                                    <div class="wrp">
                                        <div class="child">
                                            <ul>
                                                <li><a href="/about/">О 585 GOLD</a></li>
                                                <li><a href="/about/address/">Адреса магазинов</a></li>
                                                <li><a href="/about/yuvelirnye_masterskie/">Ювелирные
                                                        мастерские</a></li>
                                                <li><a href="http://lombard.zoloto585.ru/">Ломбарды</a></li>
                                                <li><a href="/registraciya_karty/">Бонусные карты</a></li>
                                                <li><a href="/about/podarochnye_sertifikaty/">Подарочные
                                                        сертификаты</a></li>
                                                <li><a href="/kredit/">Золото в кредит</a></li>
                                                <li><a href="/action/aktsiya-menyaem-staroe-na-novoe/">Меняем
                                                        старое на новое</a></li>
                                                <li><a href="/action/">Акции</a></li>
                                                <li><a href="/news/">Новости</a></li>
                                                <li><a href="/vacansii/">Вакансии</a></li>
                                                <li><a href="/about/tenders/">Тендеры</a></li>
                                                <li><a href="/about/contacts/">Контакты</a></li>
                                            </ul>
                                        </div>
                                        <img src="/bitrix/templates/zoloto/images/product/pokupateli.jpg" height="357" width="668"
                                             alt="">
                                    </div>
                                </div>
                            </li>
                        </ul>
                <!--Меню конец-->

            </nav>
        </div>