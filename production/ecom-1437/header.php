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

	<?$APPLICATION->SetAdditionalCSS(SITE_TEMPLATE_PATH .'/css/ext.min.css');?>
	<?$APPLICATION->SetAdditionalCSS(SITE_TEMPLATE_PATH .'/css/main.css?v0');?>
	<?$APPLICATION->SetAdditionalCSS(SITE_TEMPLATE_PATH .'/css/fonts.css');?>
	<?$APPLICATION->SetAdditionalCSS(SITE_TEMPLATE_PATH .'/css/reset.css');?>
	<?$APPLICATION->SetAdditionalCSS(SITE_TEMPLATE_PATH .'/css/base.css');?>
	<?$APPLICATION->SetAdditionalCSS(SITE_TEMPLATE_PATH .'/css/my.css?v1');?>
	<?$APPLICATION->SetAdditionalCSS(SITE_TEMPLATE_PATH .'/css/responsive.css');?>
	<?$APPLICATION->SetAdditionalCSS(SITE_TEMPLATE_PATH .'/css/fonts/font.css');?>
	<?$APPLICATION->SetAdditionalCSS(SITE_TEMPLATE_PATH .'/css/footer.css?v1');?>
	<?$APPLICATION->SetAdditionalCSS(SITE_TEMPLATE_PATH .'/css/pcard-motivate.css');?>
	<?$APPLICATION->SetAdditionalCSS(SITE_TEMPLATE_PATH .'/css/pcard_order_info.css');?>
	<?$APPLICATION->SetAdditionalCSS(SITE_TEMPLATE_PATH .'/css/msalnikov.min.css');?>
	<?$APPLICATION->SetAdditionalCSS(SITE_TEMPLATE_PATH .'/css/tmp.css');?>
	<?$APPLICATION->SetAdditionalCSS(SITE_TEMPLATE_PATH .'/css/style_new.css');?>

	<!--Блок яндекс советника-->
	<?$APPLICATION->AddHeadScript(SITE_TEMPLATE_PATH .'/js/ss.min.js');?>

	<!-- полифиллы для кроссбраузерности HTML5 и CSS3 -->
	<script>
		// Picture element HTML5 shiv
		document.createElement( "picture" );
	</script>
	<script src="<?= SITE_TEMPLATE_PATH ?>/js/picturefill.min.js"></script>


	<!-- jqueryteam: пак из плагинов и jquery -->
	<script src="<?= SITE_TEMPLATE_PATH ?>/js/jqueryteam.min.js"></script>

	<script data-skip-moving=true>dataLayer = [];</script>
	<?
	/** Инициализация механизма отслеживания заказов google analytics */
	Zoloto585Ecommerce::init();
	?>
	<script data-skip-moving=true>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-5PHB8P');</script>


	<? $APPLICATION->ShowHead(); /*CJSCore::Init();*/ ?>


	<!-- VK
	<script src="//vk.com/js/api/openapi.js" type="text/javascript"></script>-->
	<!-- YANDEX MAP -->
	<script src="https://api-maps.yandex.ru/2.0-stable/?load=package.standard,package.geoObjects&lang=ru-RU" type="text/javascript"></script>


	<!-- кастомный код -->
	<script type="text/javascript" src="<?= SITE_TEMPLATE_PATH ?>/js/new.js"></script>
	<script type="text/javascript" src="<?= SITE_TEMPLATE_PATH ?>/js/main.js?v=5"></script>
	<script type="text/javascript" src="<?= SITE_TEMPLATE_PATH ?>/js/msalnikov.js?v=1"></script>
	<script type="text/javascript" src="<?= SITE_TEMPLATE_PATH ?>/js/favorites.js"></script>


	<!-- тестирование гипотез -->
	<script type="text/javascript" src="<?= SITE_TEMPLATE_PATH ?>/js/retailrocket.segmentator.js"></script>
	<script type="text/javascript" src="<?= SITE_TEMPLATE_PATH ?>/js/ab_test.retailrocket.segmentator.js"></script>

	

</head>

<body class="<? if ($APPLICATION->GetCurPage(false) === '/'){echo 'main_page';}?>" >

<!-- Google Tag Manager (noscript) -->
<noscript>
	<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5PHB8P"  height="0" width="0" style="display:none;visibility:hidden"></iframe>
</noscript>
<!-- End Google Tag Manager (noscript) -->


<!-- Попап по сбору email -->
<?
$dynamicArea = new \Bitrix\Main\Page\FrameStatic("zoloto585_email_popup");
$dynamicArea->startDynamicArea();
$APPLICATION->IncludeComponent('zoloto585:popup');
$dynamicArea->finishDynamicArea();

$dir = $APPLICATION->GetCurDir();
$APPLICATION->ShowPanel(); ?>
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

									$('#choose-city').html('<span>' + city + '</span>').trigger('click');
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
					<a href="/registraciya_karty/" class="top-bonuses__button">Бонус</a>
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

				<?/*?> <a href="/catalog/yuvelirnye_izdeliya/black_friday/" class="header-promo-banner">
					<picture>
						<!--[if IE 9]><video style="display: none;"><![endif]-->
						<source srcset="<?= SITE_TEMPLATE_PATH ?>/images/header-banner_tablet.png" media="(max-width: 1024px)">
						<source srcset="<?= SITE_TEMPLATE_PATH ?>/images/header-banner_desktop.png">
						<!--[if IE 9]></video><![endif]-->
						<img src="<?= SITE_TEMPLATE_PATH ?>/images/header-banner_desktop.png" alt="Распродажа BLACKFRIDAY">
					</picture>
				</a><?*/?>

				<div class="header-middle__bar">
					<a href="/action/" class="header-middle__button  header-middle__button--promo">Акции</a>
					<a href="/catalog/yuvelirnye_izdeliya/so-skidkoj-50-60-70-procentov/" class="header-middle__button  header-middle__button--sale">Суперцена</a>
				</div>
			</div>
		</div>

		<!-- "HEADER-BOTTOM" -->
		<div class="section header-bottom">
			<div class="navi-inner-list-wrapper"></div>
			<div class="section__inner header-bottom__inner">
				<nav class="alt-main-nav">
					<ul class="alt-main-nav__list">
						<li class="alt-main-nav__item  alt-main-nav__item--catalog"  data-inner-list="0"><a href="/catalog/yuvelirnye_izdeliya/" class="alt-main-nav__link">Каталог</a></li>
						<li class="alt-main-nav__item"  data-inner-list="1" data-inner-background-image="<?= SITE_TEMPLATE_PATH ?>/images/thingies/navi_bg_inner_1.jpg" data-inner-background-color="inherit" data-outer-background-image="<?= SITE_TEMPLATE_PATH ?>/images/thingies/navi_bg_outer_1.jpg" data-outer-background-color="inherit"><a href="/catalog/yuvelirnye_izdeliya/kolca/obruchalnye/" class="alt-main-nav__link">Обручальные кольца</a></li>
						<li class="alt-main-nav__item"  data-inner-list="2" data-inner-background-image="<?= SITE_TEMPLATE_PATH ?>/images/thingies/navi_bg_inner_2.jpg" data-inner-background-color="inherit" data-outer-background-image="<?= SITE_TEMPLATE_PATH ?>/images/thingies/navi_bg_outer_2.jpg" data-outer-background-color="inherit"><a href="/catalog/yuvelirnye_izdeliya/kolca/" class="alt-main-nav__link">Кольца</a></li>
						<li class="alt-main-nav__item"  data-inner-list="3" data-inner-background-image="<?= SITE_TEMPLATE_PATH ?>/images/thingies/navi_bg_inner_3.jpg" data-inner-background-color="inherit" data-outer-background-image="<?= SITE_TEMPLATE_PATH ?>/images/thingies/navi_bg_outer_3.jpg" data-outer-background-color="inherit"><a href="/catalog/yuvelirnye_izdeliya/sergi/" class="alt-main-nav__link">Серьги</a></li>
						<li class="alt-main-nav__item"  data-inner-list="4" data-inner-background-image="<?= SITE_TEMPLATE_PATH ?>/images/thingies/navi_bg_inner_4.jpg" data-inner-background-color="inherit" data-outer-background-image="<?= SITE_TEMPLATE_PATH ?>/images/thingies/navi_bg_outer_4.jpg" data-outer-background-color="inherit"><a href="/catalog/yuvelirnye_izdeliya/podveski/" class="alt-main-nav__link">Кулоны</a></li>
						<li class="alt-main-nav__item"  data-inner-list="5" data-inner-background-image="<?= SITE_TEMPLATE_PATH ?>/images/thingies/navi_bg_inner_5.jpg" data-inner-background-color="inherit" data-outer-background-image="<?= SITE_TEMPLATE_PATH ?>/images/thingies/navi_bg_outer_5.jpg" data-outer-background-color="inherit"><a href="/catalog/yuvelirnye_izdeliya/cepi_i_kole/" class="alt-main-nav__link">Колье и цепи</a></li>
						<li class="alt-main-nav__item"  data-inner-list="6" data-inner-background-image="<?= SITE_TEMPLATE_PATH ?>/images/thingies/navi_bg_inner_6.jpg" data-inner-background-color="inherit" data-outer-background-image="<?= SITE_TEMPLATE_PATH ?>/images/thingies/navi_bg_outer_6.jpg" data-outer-background-color="inherit"><a href="/catalog/chasy/" class="alt-main-nav__link">Часы</a></li>
						<li class="alt-main-nav__item"  data-inner-list="7" data-inner-background-image="<?= SITE_TEMPLATE_PATH ?>/images/thingies/navi_bg_inner_7.jpg" data-inner-background-color="inherit" data-outer-background-image="<?= SITE_TEMPLATE_PATH ?>/images/thingies/navi_bg_outer_7.jpg" data-outer-background-color="inherit"><a href="/catalog/yuvelirnye_izdeliya/serebro-925-proby/" class="alt-main-nav__link">Серебро</a></li>
						<li class="alt-main-nav__item"  data-inner-list="8" data-inner-background-image="<?= SITE_TEMPLATE_PATH ?>/images/thingies/navi_bg_inner_8.jpg" data-inner-background-color="inherit" data-outer-background-image="<?= SITE_TEMPLATE_PATH ?>/images/thingies/navi_bg_outer_8.jpg" data-outer-background-color="inherit"><a href="/catalog/bizhuteriya/" class="alt-main-nav__link">Бижутерия</a></li>
					</ul>
				</nav>

				<div class="header-search">
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

				<?include('menu.php');?>
			</div>
		</div>
		<!-- END-of-"HEADER-BOTTOM" -->
	</header>
	<main>

