<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetPageProperty("title", "Сеть ювелирных магазинов 585 Gold. Интернет магазин украшений из серебра, золота, камней.");
$APPLICATION->SetPageProperty("description", "Выбираете украшения себе или в подарок близким? Ювелирный магазин 585GOLD представляет большой ассортимент золотых и серебряных украшений по привлекательным ценам. Также для покупателей сети 585GOLD постоянно действуют скидки и спецпредложения.");
$APPLICATION->SetPageProperty("keywords", "ювелирный магазин, ювелирные украшения, ювелирный сайт");
$APPLICATION->SetTitle("Ювелирный интернет магазин. Купить ювелирные изделия и украшения из серебра, золота, камней. Недорого | Сеть ювелирных магазинов 585 Gold");
?>
	<style>
		.promo-banner {
			position: relative;
			height: 400px;
			width: 100%;
		}
		.promo-banner--small {
			display: none;
		}
		.promo-banner--big {
			display: block;
		}

		.sl-desc {
			position: absolute;
			left: 50%;
			margin-left: -960px;
		}

		@media screen and (max-width: 1024px) {
		/* коэфф. уменьшения для картинки (1920x400)*0.7 = 1344x280 */
			.promo-banner {
				height: 280px;
			}

			.sl-desc {
				height: 280px;
				width: 1344px;
				margin-left: -672px;
			}
		}

		@media screen and (max-width: 767px) {
			/* коэфф. уменьшения для картинки (1920x400)*0.58 = 1344x230 */
			.promo-banner {
				height: 230px;
			}

			.sl-desc {
				height: 230px;
				width: 1113px;
				margin-left: -556.5px;
			}
		}

		@media screen and (max-width: 600px) {
			.promo-banner {
				height: 390px;
			}
			.promo-banner--big {
				display: none;
			}
			.promo-banner--small {
				display: block;
			}

			.sl-mob {
				height: 390px;
				position: absolute;
				left: 50%;
				margin-left: -299.5px;
			}
		}
	</style>
	<!--AdFox START-->
	<script src="https://yastatic.net/pcode/adfox/loader.js"></script>
	<!--Расположение: верхний слайдер - первый баннер-->
	<div id="adfox_149060510351759290" class="promo-banner  promo-banner--big"></div>
	<script>
		window.Ya.adfoxCode.createAdaptive({
				ownerId: 255634,
				containerId: 'adfox_149060510351759290',
				params:
				{ pp: 'jyj', ps: 'clpy', p2: 'fota' }
			}, ['desktop'],
			{ tabletWidth: 600, phoneWidth: 600, isAutoReloads: false }
		);</script>

	<!--Расположение: верхний слайдер - первый баннер - mobile-->
	<div id="adfox_149061816374892971" class="promo-banner  promo-banner--small"></div>
	<script>
		window.Ya.adfoxCode.createAdaptive({
				ownerId: 255634,
				containerId: 'adfox_149061816374892971',
				params:
				{ pp: 'jyq', ps: 'clpy', p2: 'fota' }
			}, ['tablet', 'phone'],
			{ tabletWidth: 600, phoneWidth: 600, isAutoReloads: false }
		);</script>



<?
$staticHTMLCache = \Bitrix\Main\Data\StaticHTMLCache::getInstance();
$staticHTMLCache->disableVoting();

$APPLICATION->IncludeComponent(
	"bitrix:catalog.smart.filter",
	"mainpage",
	array(
		'IBLOCK_TYPE' => 'catalog',
		'IBLOCK_ID' => '4',
		'SECTION_ID' => 282,
		'FILTER_NAME' => 'arrFilter',
		'PRICE_CODE' => [],
		'CACHE_TYPE' => 'A',
		'CACHE_TIME' => '86400',
		'CACHE_GROUPS' => 'N',
		'SAVE_IN_SESSION' => 'N',
		'FILTER_VIEW_MODE' => 'HORIZONTAL',
		'XML_EXPORT' => 'Y',
		'DISPLAY_ELEMENT_COUNT' => 'Y',
		'SECTION_TITLE' => 'NAME',
		'SECTION_DESCRIPTION' => 'DESCRIPTION',
		'HIDE_NOT_AVAILABLE' => 'Y',
		'TEMPLATE_THEME' => 'blue',
		'CONVERT_CURRENCY' => 'Y',
		'CURRENCY_ID' => 'RUB',
		'SEF_MODE' => 'N',
		'SEF_RULE' => '/catalog/#SECTION_CODE_PATH#/filter/#SMART_FILTER_PATH#/',
		'SMART_FILTER_PATH' => NULL,
		'PAGER_PARAMS_NAME' => NULL
	)
);

$staticHTMLCache->enableVoting();
?>


<? /*if (CModule::IncludeModule("iblock")) {
	$arFilter = array(
		"ACTIVE" => "Y",
		"GLOBAL_ACTIVE" => "Y",
		"IBLOCK_ID" => 4,
	);
	if(strlen($arResult["VARIABLES"]["SECTION_CODE"])>0)
	{
		$arFilter["=CODE"] = $arResult["VARIABLES"]["SECTION_CODE"];
	}
	elseif($arResult["VARIABLES"]["SECTION_ID"]>0)
	{
		$arFilter["ID"] = $arResult["VARIABLES"]["SECTION_ID"];
	}

	$obCache = new CPHPCache;
	if($obCache->InitCache(36000, serialize($arFilter), "/iblock/catalog"))
	{
		$arCurSection = $obCache->GetVars();
	}
	else
	{
		$arCurSection = array();
		$dbRes = CIBlockSection::GetList(array(), $arFilter, false, array("ID"));
		$dbRes = new CIBlockResult($dbRes);

		if(defined("BX_COMP_MANAGED_CACHE"))
		{
			global $CACHE_MANAGER;
			$CACHE_MANAGER->StartTagCache("/iblock/catalog");

			if ($arCurSection = $dbRes->GetNext())
			{
				$CACHE_MANAGER->RegisterTag("iblock_id_".$arParams["IBLOCK_ID"]);
			}
			$CACHE_MANAGER->EndTagCache();
		}
		else
		{
			if(!$arCurSection = $dbRes->GetNext())
				$arCurSection = array();
		}

		$obCache->EndDataCache($arCurSection);
	}

}
*/
?>
	<div class="main-product-list clearfix">
		<div class="wrp">
			<!-- 		Слайдер 4+1 --> <?$APPLICATION->IncludeComponent(
				"bitrix:news.list",
				"slider4plus1",
				array(
					"ACTIVE_DATE_FORMAT" => "d.m.Y",
					"ADD_SECTIONS_CHAIN" => "N",
					"AJAX_MODE" => "N",
					"AJAX_OPTION_ADDITIONAL" => "",
					"AJAX_OPTION_HISTORY" => "N",
					"AJAX_OPTION_JUMP" => "N",
					"AJAX_OPTION_STYLE" => "Y",
					"CACHE_FILTER" => "N",
					"CACHE_GROUPS" => "N",
					"CACHE_TIME" => "36000000",
					"CACHE_TYPE" => "A",
					"CHECK_DATES" => "Y",
					"COMPONENT_TEMPLATE" => "slider4plus1",
					"DETAIL_URL" => "",
					"DISPLAY_BOTTOM_PAGER" => "Y",
					"DISPLAY_DATE" => "Y",
					"DISPLAY_NAME" => "Y",
					"DISPLAY_PICTURE" => "Y",
					"DISPLAY_PREVIEW_TEXT" => "Y",
					"DISPLAY_TOP_PAGER" => "N",
					"FIELD_CODE" => array(
						0 => "ID",
						1 => "CODE",
						2 => "XML_ID",
						3 => "NAME",
						4 => "PREVIEW_PICTURE",
						5 => "DETAIL_PICTURE",
						6 => "",
					),
					"FILTER_NAME" => "",
					"HIDE_LINK_WHEN_NO_DETAIL" => "N",
					"IBLOCK_ID" => "26",
					"IBLOCK_TYPE" => "news",
					"INCLUDE_IBLOCK_INTO_CHAIN" => "N",
					"INCLUDE_SUBSECTIONS" => "N",
					"MESSAGE_404" => "",
					"NEWS_COUNT" => "20",
					"PAGER_BASE_LINK_ENABLE" => "N",
					"PAGER_DESC_NUMBERING" => "N",
					"PAGER_DESC_NUMBERING_CACHE_TIME" => "36000",
					"PAGER_SHOW_ALL" => "N",
					"PAGER_SHOW_ALWAYS" => "N",
					"PAGER_TEMPLATE" => ".default",
					"PAGER_TITLE" => "",
					"PARENT_SECTION" => "",
					"PARENT_SECTION_CODE" => "",
					"PREVIEW_TRUNCATE_LEN" => "",
					"PROPERTY_CODE" => array(
						0 => "URL",
						1 => "GET_IZDELIE",
						2 => "BIG_IMG_4_1",
					),
					"SET_BROWSER_TITLE" => "N",
					"SET_LAST_MODIFIED" => "N",
					"SET_META_DESCRIPTION" => "N",
					"SET_META_KEYWORDS" => "N",
					"SET_STATUS_404" => "N",
					"SET_TITLE" => "N",
					"SHOW_404" => "N",
					"SORT_BY1" => "ACTIVE_FROM",
					"SORT_BY2" => "SORT",
					"SORT_ORDER1" => "DESC",
					"SORT_ORDER2" => "ASC",
					"COMPOSITE_FRAME_MODE" => "A",
					"COMPOSITE_FRAME_TYPE" => "AUTO"
				),
				false
			);?>
		</div>
	</div>
	<!-- 	Видео слайдер --> <?$APPLICATION->IncludeComponent(
	"bitrix:news.list",
	"videoslider",
	array(
		"ACTIVE_DATE_FORMAT" => "d.m.Y",
		"ADD_SECTIONS_CHAIN" => "N",
		"AJAX_MODE" => "N",
		"AJAX_OPTION_ADDITIONAL" => "",
		"AJAX_OPTION_HISTORY" => "N",
		"AJAX_OPTION_JUMP" => "N",
		"AJAX_OPTION_STYLE" => "Y",
		"CACHE_FILTER" => "N",
		"CACHE_GROUPS" => "Y",
		"CACHE_TIME" => "36000000",
		"CACHE_TYPE" => "A",
		"CHECK_DATES" => "Y",
		"COMPONENT_TEMPLATE" => "videoslider",
		"DETAIL_URL" => "",
		"DISPLAY_BOTTOM_PAGER" => "N",
		"DISPLAY_DATE" => "Y",
		"DISPLAY_NAME" => "Y",
		"DISPLAY_PICTURE" => "Y",
		"DISPLAY_PREVIEW_TEXT" => "Y",
		"DISPLAY_TOP_PAGER" => "N",
		"FIELD_CODE" => array(
			0 => "ID",
			1 => "CODE",
			2 => "XML_ID",
			3 => "NAME",
			4 => "DETAIL_PICTURE",
			5 => "",
		),
		"FILTER_NAME" => "",
		"HIDE_LINK_WHEN_NO_DETAIL" => "N",
		"IBLOCK_ID" => "27",
		"IBLOCK_TYPE" => "news",
		"INCLUDE_IBLOCK_INTO_CHAIN" => "Y",
		"INCLUDE_SUBSECTIONS" => "N",
		"MESSAGE_404" => "",
		"NEWS_COUNT" => "20",
		"PAGER_BASE_LINK_ENABLE" => "N",
		"PAGER_DESC_NUMBERING" => "N",
		"PAGER_DESC_NUMBERING_CACHE_TIME" => "36000",
		"PAGER_SHOW_ALL" => "N",
		"PAGER_SHOW_ALWAYS" => "N",
		"PAGER_TEMPLATE" => ".default",
		"PAGER_TITLE" => "Новости",
		"PARENT_SECTION" => "",
		"PARENT_SECTION_CODE" => "",
		"PREVIEW_TRUNCATE_LEN" => "",
		"PROPERTY_CODE" => array(
			0 => "URL_YOUTUBE",
			1 => "GRAD",
			2 => "URL_LINCK",
			3 => "COLOR",
			4 => "",
		),
		"SET_BROWSER_TITLE" => "N",
		"SET_LAST_MODIFIED" => "N",
		"SET_META_DESCRIPTION" => "N",
		"SET_META_KEYWORDS" => "N",
		"SET_STATUS_404" => "N",
		"SET_TITLE" => "N",
		"SHOW_404" => "N",
		"SORT_BY1" => "SORT",
		"SORT_BY2" => "ID",
		"SORT_ORDER1" => "DESC",
		"SORT_ORDER2" => "ASC"
	),
	false
);?>
	<div class="after-sl">
		<div class="wrp">
			<?$APPLICATION->IncludeComponent(
				"bitrix:main.include",
				"",
				Array(
					"COMPONENT_TEMPLATE" => ".default",
					"AREA_FILE_SHOW" => "file",
					"AREA_FILE_SUFFIX" => "inc",
					"EDIT_TEMPLATE" => "",
					"PATH" => "/include/inc_collection.php"
				)
			);?>
			<a href="#infoblock" class="next-a"></a>
		</div>
	</div>
<?$APPLICATION->IncludeComponent(
	"bitrix:news.list",
	"main_imgs_block",
	array(
		"ACTIVE_DATE_FORMAT" => "d.m.Y",
		"ADD_SECTIONS_CHAIN" => "N",
		"AJAX_MODE" => "N",
		"AJAX_OPTION_ADDITIONAL" => "",
		"AJAX_OPTION_HISTORY" => "N",
		"AJAX_OPTION_JUMP" => "N",
		"AJAX_OPTION_STYLE" => "Y",
		"CACHE_FILTER" => "N",
		"CACHE_GROUPS" => "N",
		"CACHE_TIME" => "36000000",
		"CACHE_TYPE" => "A",
		"CHECK_DATES" => "Y",
		"COMPONENT_TEMPLATE" => "slider4plus1",
		"DETAIL_URL" => "",
		"DISPLAY_BOTTOM_PAGER" => "Y",
		"DISPLAY_DATE" => "Y",
		"DISPLAY_NAME" => "Y",
		"DISPLAY_PICTURE" => "Y",
		"DISPLAY_PREVIEW_TEXT" => "Y",
		"DISPLAY_TOP_PAGER" => "N",
		"FIELD_CODE" => array(
			0 => "ID",
			1 => "CODE",
			2 => "XML_ID",
			3 => "NAME",
			4 => "PREVIEW_PICTURE",
			5 => "DETAIL_PICTURE",
			6 => "",
		),
		"FILTER_NAME" => "",
		"HIDE_LINK_WHEN_NO_DETAIL" => "N",
		"IBLOCK_ID" => "28",
		"IBLOCK_TYPE" => "news",
		"INCLUDE_IBLOCK_INTO_CHAIN" => "N",
		"INCLUDE_SUBSECTIONS" => "N",
		"MESSAGE_404" => "",
		"NEWS_COUNT" => "7",
		"PAGER_BASE_LINK_ENABLE" => "N",
		"PAGER_DESC_NUMBERING" => "N",
		"PAGER_DESC_NUMBERING_CACHE_TIME" => "36000",
		"PAGER_SHOW_ALL" => "N",
		"PAGER_SHOW_ALWAYS" => "N",
		"PAGER_TEMPLATE" => ".default",
		"PAGER_TITLE" => "",
		"PARENT_SECTION" => "",
		"PARENT_SECTION_CODE" => "",
		"PREVIEW_TRUNCATE_LEN" => "",
		"PROPERTY_CODE" => array(
			0 => "URL",
			1 => "GET_IZDELIE",
			2 => "",
		),
		"SET_BROWSER_TITLE" => "N",
		"SET_LAST_MODIFIED" => "N",
		"SET_META_DESCRIPTION" => "N",
		"SET_META_KEYWORDS" => "N",
		"SET_STATUS_404" => "N",
		"SET_TITLE" => "N",
		"SHOW_404" => "N",
		"SORT_BY1" => "ACTIVE_FROM",
		"SORT_BY2" => "SORT",
		"SORT_ORDER1" => "DESC",
		"SORT_ORDER2" => "ASC"
	),
	false
);?>
<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>