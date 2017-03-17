<?
require($_SERVER['DOCUMENT_ROOT'] . '/bitrix/header.php');
$APPLICATION->SetPageProperty("keywords", "адреса магазинов, ювелирных салонов, сеть 585, gold, ювелирный магазин, ювелирная сеть, официальный сайт");
$APPLICATION->SetPageProperty("description", "Адреса магазинов. О компании. Сеть ювелирных магазинов 585 Gold.");
$APPLICATION->SetPageProperty("title", "Адреса ювелирных магазинов | О ювелирной сети | Ювелирный магазин 585 Gold");

if (!empty($_REQUEST['ajax_mode'])) {
	$APPLICATION->RestartBuffer();
}
?>

<?$APPLICATION->IncludeComponent("bitrix:catalog.store", "custom", Array(
		"MODE" => $_REQUEST['ajax_mode'], //custom - на этот же компонент идут аякс запросы разного типа
		"CITY" => $_REQUEST['city_name'], //custom - показать склады только для этого города
		"SEF_MODE" => "Y",	// Включить поддержку ЧПУ
		"PHONE" => "Y",	// Отображать телефон
		"SEF_FOLDER" => "/about/address/",
		"SEF_URL_TEMPLATES" => array(
		    "liststores" => "index.php",
		    "element" => "#city#/#store_id#/"
		),
		"SCHEDULE" => "Y",	// Отображать график работы
		"SET_TITLE" => "N",	// Устанавливать заголовок страницы
		"TITLE" => "",	// Заголовок страницы
		"MAP_TYPE" => "0",	// Тип используемой карты
		"CACHE_TYPE" => "A",	// Тип кеширования
		"CACHE_TIME" => "0",	// Время кеширования (сек.)
	),
	false
);?>

<?
if (!empty($_REQUEST['ajax_mode'])) {
	die;
}
?>

<? require($_SERVER['DOCUMENT_ROOT'] . '/bitrix/footer.php'); ?>