<?
// require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
require($_SERVER['DOCUMENT_ROOT'].'/bitrix/modules/main/include/prolog_before.php');
extract($_POST);
if(!$id)
	exit;

$ElementID=$APPLICATION->IncludeComponent(
	"bitrix:catalog.element", 
	"modal", 
	Array(
		"IBLOCK_TYPE" => "catalog",	// Тип инфоблока
		"IBLOCK_ID" => "4",	// Инфоблок
		"ELEMENT_ID" => (int)$id,	// ID элемента
		"PROPERTY_CODE" => "",	// Свойства
		"BASKET_URL" => "/personal/basket.php",	// URL, ведущий на страницу с корзиной покупателя
		"ACTION_VARIABLE" => "action",	// Название переменной, в которой передается действие
		"PRODUCT_ID_VARIABLE" => "id",	// Название переменной, в которой передается код товара для покупки
		"SECTION_ID_VARIABLE" => "",	// Название переменной, в которой передается код группы
		"CHECK_SECTION_ID_VARIABLE" => "N",	// Использовать код группы из переменной, если не задан раздел элемента
		"PRODUCT_QUANTITY_VARIABLE" => "quantity",	// Название переменной, в которой передается количество товара
		"PRODUCT_PROPS_VARIABLE" => "prop",	// Название переменной, в которой передаются характеристики товара
		"CACHE_TYPE" => "N",	// Тип кеширования
		"CACHE_TIME" => "0",	// Время кеширования (сек.)
		"CACHE_GROUPS" => "N",	// Учитывать права доступа
		"SET_TITLE" => "N",	// Устанавливать заголовок страницы
		"SET_STATUS_404" => "N",	// Устанавливать статус 404
		"PRICE_CODE" => "",	// Тип цены
		"USE_PRICE_COUNT" => "Y",	// Использовать вывод цен с диапазонами
		"SHOW_PRICE_COUNT" => "1",	// Выводить цены для количества
		"PRICE_VAT_INCLUDE" => "Y",	// Включать НДС в цену
		"PRICE_VAT_SHOW_VALUE" => "Y",	// Отображать значение НДС
		"USE_PRODUCT_QUANTITY" => "Y",	// Разрешить указание количества товара
		"PRODUCT_PROPERTIES" => "",	// Характеристики товара
		"ADD_PROPERTIES_TO_BASKET" => "N",	// Добавлять в корзину свойства товаров и предложений
		"PARTIAL_PRODUCT_PROPERTIES" => "N",	// Разрешить добавлять в корзину товары, у которых заполнены не все характеристики
		"LINK_IBLOCK_TYPE" => "",	// Тип инфоблока, элементы которого связаны с текущим элементом
		"LINK_IBLOCK_ID" => "",	// ID инфоблока, элементы которого связаны с текущим элементом
		"LINK_PROPERTY_SID" => "",	// Свойство, в котором хранится связь
		"LINK_ELEMENTS_URL" => "link.php?PARENT_ELEMENT_ID=#ELEMENT_ID#",	// URL на страницу, где будет показан список связанных элементов
		"OFFERS_CART_PROPERTIES" => "",	// Свойства предложений, добавляемые в корзину
		"ADD_TO_BASKET_ACTION" => "Y",	// Показывать кнопки добавления в корзину и покупки
		"OFFERS_FIELD_CODE" => "",	// Поля предложений
		"OFFERS_PROPERTY_CODE" => "",	// Свойства предложений
		"OFFERS_SORT_FIELD" => "PROPERTY_ring_size",	// По какому полю сортируем предложения товара
		"OFFERS_SORT_ORDER" => "asc",	// Порядок сортировки предложений товара
		"OFFERS_SORT_FIELD2" => "name",	// Порядок второй сортировки предложений товара
		"OFFERS_SORT_ORDER2" => "desc",	// Поле для второй сортировки предложений товара
		"OFFERS_LIMIT" => "0",	// Максимальное количество предложений для показа (0 - все)
		"ELEMENT_CODE" => "",	// Код элемента
		"CONVERT_CURRENCY" => "Y",	// Показывать цены в одной валюте
		"CURRENCY_ID" => "RUB",	// Валюта, в которую будут сконвертированы цены
		"HIDE_NOT_AVAILABLE" => "N",	// Не отображать товары, которых нет на складах
		"USE_ELEMENT_COUNTER" => "N",	// Использовать счетчик просмотров
		"SHOW_OLD_PRICE" => "N",	// Показывать старую цену
		"SHOW_MAX_QUANTITY" => "N",	// Показывать общее количество товара
		"MESS_BTN_BUY" => "Купить",	// Текст кнопки "Купить"
		"MESS_BTN_ADD_TO_BASKET" => "В корзину",	// Текст кнопки "Добавить в корзину"
		"MESS_BTN_SUBSCRIBE" => "Подписаться",	// Текст кнопки "Уведомить о поступлении"
		"MESS_BTN_COMPARE" => "Сравнить",	// Текст кнопки "Сравнить"
		"MESS_NOT_AVAILABLE" => "Нет в наличии",	// Сообщение об отсутствии товара
		"USE_VOTE_RATING" => "N",	// Включить рейтинг товара
		"VOTE_DISPLAY_AS_RATING" => (isset($arParams["DETAIL_VOTE_DISPLAY_AS_RATING"])?$arParams["DETAIL_VOTE_DISPLAY_AS_RATING"]:""),
		"USE_COMMENTS" => $arParams["DETAIL_USE_COMMENTS"],	// Включить отзывы о товаре
		"BLOG_USE" => (isset($arParams["DETAIL_BLOG_USE"])?$arParams["DETAIL_BLOG_USE"]:""),
		"BLOG_URL" => (isset($arParams["DETAIL_BLOG_URL"])?$arParams["DETAIL_BLOG_URL"]:""),
		"BLOG_EMAIL_NOTIFY" => (isset($arParams["DETAIL_BLOG_EMAIL_NOTIFY"])?$arParams["DETAIL_BLOG_EMAIL_NOTIFY"]:""),
		"VK_USE" => (isset($arParams["DETAIL_VK_USE"])?$arParams["DETAIL_VK_USE"]:""),
		"VK_API_ID" => (isset($arParams["DETAIL_VK_API_ID"])?$arParams["DETAIL_VK_API_ID"]:"API_ID"),
		"FB_USE" => (isset($arParams["DETAIL_FB_USE"])?$arParams["DETAIL_FB_USE"]:""),
		"FB_APP_ID" => (isset($arParams["DETAIL_FB_APP_ID"])?$arParams["DETAIL_FB_APP_ID"]:""),
		"BRAND_USE" => (isset($arParams["DETAIL_BRAND_USE"])?$arParams["DETAIL_BRAND_USE"]:"N"),	// Использовать компонент "Бренды"
		"BRAND_PROP_CODE" => (isset($arParams["DETAIL_BRAND_PROP_CODE"])?$arParams["DETAIL_BRAND_PROP_CODE"]:""),
		"DISPLAY_NAME" => (isset($arParams["DETAIL_DISPLAY_NAME"])?$arParams["DETAIL_DISPLAY_NAME"]:""),	// Выводить название элемента
		"ADD_DETAIL_TO_SLIDER" => (isset($arParams["DETAIL_ADD_DETAIL_TO_SLIDER"])?$arParams["DETAIL_ADD_DETAIL_TO_SLIDER"]:""),	// Добавлять детальную картинку в слайдер
		"TEMPLATE_THEME" => (isset($arParams["TEMPLATE_THEME"])?$arParams["TEMPLATE_THEME"]:""),	// Цветовая тема
		"ADD_SECTIONS_CHAIN" => "Y",	// Включать раздел в цепочку навигации
		"ADD_ELEMENT_CHAIN" => "Y",	// Включать название элемента в цепочку навигации
		"DISPLAY_PREVIEW_TEXT_MODE" => (isset($arParams["DETAIL_DISPLAY_PREVIEW_TEXT_MODE"])?$arParams["DETAIL_DISPLAY_PREVIEW_TEXT_MODE"]:""),	// Показ описания для анонса
		"DETAIL_PICTURE_MODE" => (isset($arParams["DETAIL_DETAIL_PICTURE_MODE"])?$arParams["DETAIL_DETAIL_PICTURE_MODE"]:""),	// Режим показа детальной картинки
		"SHOW_CLOSE_POPUP" => isset($arParams["COMMON_SHOW_CLOSE_POPUP"])?$arParams["COMMON_SHOW_CLOSE_POPUP"]:"",	// Показывать кнопку продолжения покупок во всплывающих окнах
		"DISPLAY_COMPARE" => (isset($arParams["USE_COMPARE"])?$arParams["USE_COMPARE"]:""),	// Разрешить сравнение товаров
		"COMPARE_PATH" => $arResult["FOLDER"].$arResult["URL_TEMPLATES"]["compare"],
		"SHOW_BASIS_PRICE" => (isset($arParams["DETAIL_SHOW_BASIS_PRICE"])?$arParams["DETAIL_SHOW_BASIS_PRICE"]:"Y"),	// Показывать цену за единицу товара
	),
	false
);

?>