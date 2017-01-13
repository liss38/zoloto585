<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("Личный кабинет");?>

<?include("header.php");?>

<div class="section  ucab-navi">
	<div class="section__inner  ucab-navi__inner">
		<a href="#bonus" id="ucab-bonuses-link" class="ucab-navi__link  ucab-navi__link--active">Бонусы</a>
		<a href="#favorites" id="ucab-favorites-link" class="ucab-navi__link">Избранное</a>
		<a href="#profile" id="ucab-profile-link" class="ucab-navi__link">Профиль</a>
		<a href="#subscribe" id="ucab-subscribes-link" class="ucab-navi__link">Подписки</a>
	</div>
</div>
<div id="ucab-bonuses" class="ucab-group  ucab-group--active">
	<div id="ucab-bonuses-tab" class="section  ucab-tab  ucab-tab--active">
		<div class="section__inner  ucab-tab__inner">
			Бонусы
		</div>
	</div>


	<!-- БЛОК "БОНУСНАЯ КАРТА" -->
	<?
	$obCache = new CPHPCache();
	$cacheLifetime = 60*60*24; $cacheID = 'userBK'.$GLOBALS["USER"]->getID(); $cachePath = '/bonuslk/';

	if( $obCache->InitCache($cacheLifetime, $cacheID, $cachePath) )
	{
		$arUser = $obCache->GetVars();
	}
	elseif( $obCache->StartDataCache()  )
	{
		$rsUsers = CUser::GetList(
			$by = 'ID',
			$order = 'ASC',
			Array("ID"=>$GLOBALS["USER"]->getID()),
			Array("SELECT"=>Array("UF_CARD","UF_BONUS","UF_LEVEL"))
		);

		$arUser = $rsUsers->fetch();

		if (!empty($arUser["UF_CARD"]))
		{
			ini_set('soap.wsdl_cache_enabled', 1);
			ini_set('soap.wsdl_cache_ttl', 4000);

			$client = new SoapClient('http://91.240.95.57:8047/sap/bc/srt/wsdl/srvc_00215A9C83B51EE2A3AA3BF264621F4D/wsdl11/allinone/standard/document?sap-client=900', array('login' => "setremote", 'password' => "set585Secure", 'location' => "http://91.240.95.57:8047/sap/bc/srt/rfc/sap/zws_crm_loy/900/zws_crm_loy/zws_crm_loy"));
			$params = array('IsCrd' => array('ExtId' => $arUser["UF_CARD"]), 'IsStore' => array('Id' => "0002"));

			$request = $client->ZfmCrmLoyMshInf($params);

			$obUser = new CUser;
			$arUser["UF_BONUS"] = $request->EsMsh->Balance;
			$arUser["UF_LEVEL"] = $request->EsMsh->Tier;

			$obUser->Update($GLOBALS["USER"]->getID(), $arUser);

		}

		$obCache->EndDataCache($arUser);
	}

	?>
	<div class="section  bonuses-card">
		<div class="section__inner  bonuses-card__inner">
			<div class="bonuses-card-identifier">
				<div class="bonuses-card-identifier-text">
					<div class="bonuses-card-identifier-text__virtual">Виртуальная</div>
					<div class="bonuses-card-identifier-text__real">Бонусная карта №</div>
					<div class="bonuses-card-identifier-text-virtual">
						<span class="bonuses-card-identifier-text-virtual__button"></span>
						<div class="bonuses-card-identifier-text-virtual-info">Виртуальную бонусную карту вы можете обменять на пластиковую в <a href="#" class="bonuses-card-identifier-text-virtual-info__link">розничном магазине</a> нашей сети.</div>
					</div>
				</div>

				<a href="#" class="bonuses-card-identifier__details-link">подробнее о бонусной программе ></a>


				<?/*###beg*/?>
				<?if(empty($arUser["UF_CARD"])):?>
					<form class="bonuses-card-add-form">
						<input class="bonuses-card-add-input  js-mask-number" type="text" placeholder="Введите номер карты">
						<input type="submit" class="b-button  bonuses-card-add-button" value="+">
						<div class="bonuses-card-add-error"></div>
					</form>
					
					<div class="bonuses-card-identifier__sms-button">получить номер карты по смс</div>
				<?else:?>
					<span class="bonuses-card-identifier__input"><?=$arUser["UF_CARD"]?></span>
					
					<div class="bonuses-card-identifier-points">
						<span class="bonuses-card-identifier-points__text">У вас:</span><br>
						<span class="bonuses-card-identifier-points__count"><?=number_format($arUser["UF_BONUS"],0,".","")?></span>
						<span class="bonuses-card-identifier-points__units"> баллов</span>
					</div>
				<?endif;?>
				<?/*###end*/?>



				<div class="bonuses-card-identifier__card585-gold"></div>
			</div>
		</div>
	</div>

	<?if(!empty($arUser["UF_LEVEL"])):?>
		<!-- БЛОК "УРОВЕНЬ УЧАСТИЯ" -->
		<div class="section  bonuses-level">
			<div class="section__inner  bonuses-level__inner">
				<div class="bonuses-discount-level">
					<h2 class="bonuses-discount-level__header bonuses-discount-level__header_active">Ваш уровень участия:</h2>
					<div class="bonuses-discount-level-progress">
						<!-- Прорисовка линии прогресса -->
						<div class="bonuses-discount-level-progress-line">
							<div class="bonuses-discount-level-progress-line__horizontal"></div>
							<div class="bonuses-discount-level-progress-line__vertical-1"></div>
							<div class="bonuses-discount-level-progress-line__vertical-2"></div>
							<div class="bonuses-discount-level-progress-line__vertical-3"></div>
							<div class="bonuses-discount-level-progress-line__vertical-4"></div>
							<div class="bonuses-discount-level-progress-line__rhomb bonuses-discount-level-progress-line__rhomb--silver"></div>
						</div>

						<!-- Процентная калибровка линии прогресса(надписи) -->
						<div class="bonuses-discount-level-progress-labels-percent">
							<div class="bonuses-discount-level-progress-labels-percent__item">0</div>
							<div class="bonuses-discount-level-progress-labels-percent__item bonuses-discount-level-progress-labels-percent__item--get">5%</div>
							<div class="bonuses-discount-level-progress-labels-percent__item">7%</div>
							<div class="bonuses-discount-level-progress-labels-percent__item">9%</div>
						</div>

						<!-- Статусная калибровка линни прогресса(надписи) -->
						<?/*###beg*/?>
						<div class="bonuses-discount-level-progress-labels-status" data-card-level="<?= $arUser["UF_LEVEL"]; ?>">
						<?/*###end*/?>
							<div class="bonuses-discount-level-progress-labels-status__item">базовый<br><span class="bonuses-discount-level-progress-labels-status__item-number euro-rouble">0</span></div>
							<div class="bonuses-discount-level-progress-labels-status__item bonuses-discount-level-progress-labels-status__item--get">серебряный<br><span class="bonuses-discount-level-progress-labels-status__item-number euro-rouble">15 000</span></div>
							<div class="bonuses-discount-level-progress-labels-status__item">золотой<br><span class="bonuses-discount-level-progress-labels-status__item-number euro-rouble">25 000</span></div>
							<div class="bonuses-discount-level-progress-labels-status__item">платиновый</div>
						</div>

						<div class="bonuses-discount-level__note">% накопления</div>
						<div class="bonuses-discount-level__card585-gold"></div>
					</div>
				</div>
			</div>
		</div>
	<?endif?>

</div>
<div id="ucab-favorites" class="ucab-group">

	<div id="ucab-favorites-tab" class="section  ucab-tab">
		<div class="section__inner  ucab-tab__inner">
			Бонусы
		</div>
	</div>


	<div class="section  ucab-tools">
		<div class="section__inner  ucab-tools__inner">
			<a href="#" class="ucab-tools__item  ucab-tools__item--print">распечатать страницу</a>
			<a href="#" class="ucab-tools__item  ucab-tools__item--mail">отправить на почту</a>
		</div>
	</div>

	<div class="favorites ">
		<section class="content">
			<div class="wrp clearfix nofilter">
				<article class="catalog tmp_art">
					<?
					global $arrFilter;
					$arFavorites = favorites::init()->get();
					if(!empty($arFavorites)) {
						$arrFilter = array(array('ID' => $arFavorites));
						$APPLICATION->IncludeComponent(
							"bitrix:catalog.section",
							"",
							Array(
								"TEMPLATE_THEME" => "blue",
								"PRODUCT_DISPLAY_MODE" => "N",
								"ADD_PICT_PROP" => "MORE_PHOTO",
								"LABEL_PROP" => "NEW_BOOK",
								"OFFER_ADD_PICT_PROP" => "FILE",
								"OFFER_TREE_PROPS" => array("-"),
								"PRODUCT_SUBSCRIPTION" => "N",
								"SHOW_DISCOUNT_PERCENT" => "N",
								"SHOW_OLD_PRICE" => "N",
								"SHOW_CLOSE_POPUP" => "Y",
								"MESS_BTN_BUY" => "Купить",
								"MESS_BTN_ADD_TO_BASKET" => "В корзину",
								"MESS_BTN_SUBSCRIBE" => "Подписаться",
								"MESS_BTN_DETAIL" => "Подробнее",
								"MESS_NOT_AVAILABLE" => "Нет в наличии",
								"AJAX_MODE" => "N",
								"SEF_MODE" => "N",
								"IBLOCK_TYPE" => "catalog",
								"IBLOCK_ID" => "4",
								"SECTION_ID" => "",
								"SECTION_CODE" => "",
								"SECTION_USER_FIELDS" => array(),
								"ELEMENT_SORT_FIELD" => "sort",
								"ELEMENT_SORT_ORDER" => "asc",
								"ELEMENT_SORT_FIELD2" => "name",
								"ELEMENT_SORT_ORDER2" => "asc",
								"FILTER_NAME" => "arrFilter",
								"INCLUDE_SUBSECTIONS" => "Y",
								"SHOW_ALL_WO_SECTION" => "Y",
								"SECTION_URL" => "",
								"DETAIL_URL" => "",
								"BASKET_URL" => "/personal/basket.php",
								"ACTION_VARIABLE" => "action",
								"PRODUCT_ID_VARIABLE" => "id",
								"PRODUCT_QUANTITY_VARIABLE" => "quantity",
								"ADD_PROPERTIES_TO_BASKET" => "Y",
								"PRODUCT_PROPS_VARIABLE" => "prop",
								"PARTIAL_PRODUCT_PROPERTIES" => "N",
								"SECTION_ID_VARIABLE" => "SECTION_ID",
								"ADD_SECTIONS_CHAIN" => "Y",
								"DISPLAY_COMPARE" => "N",
								"SET_TITLE" => "Y",
								"SET_BROWSER_TITLE" => "Y",
								"BROWSER_TITLE" => "-",
								"SET_META_KEYWORDS" => "Y",
								"META_KEYWORDS" => "",
								"SET_META_DESCRIPTION" => "Y",
								"META_DESCRIPTION" => "",
								"SET_LAST_MODIFIED" => "Y",
								"USE_MAIN_ELEMENT_SECTION" => "Y",
								"SET_STATUS_404" => "N",
								"PAGE_ELEMENT_COUNT" => "24",
								"LINE_ELEMENT_COUNT" => "4",
								"PROPERTY_CODE" => array("type","VIDEO","brend","vstavka","collection","materials","rubrics","MIN_PRICE","WEAR_TYPE","STYLISTIC_GROUP","METAL","PROBA","METALCOLOR","CATEGORY","FOR_SOMEONE","MAIN_INSERT","MAIN_COLOR_INSERT","COLLECTION_NEW","TOP_DESIGN_585","DIAMOND_CUT","LASER_ENGRAVING","COVER","MANUFACTURING_TECH","SECOND_LEVEL_DESIGN","JEWEL_NUMBER","CLIP","SHINKA_PROFILE","EMPTINESS","SNAP","COLLECTION_FUTL","COLOR_FUTL","PURPOSE_METAL_FUTL","TRADEMARK_CHEM","DENSITY_WEAVING","WEAVING","COMPLETE_WATCH","MECHANISM_WATCH","BRAND_WATCH","ADD_INSERT","TYPE_MAIN_INSERTS","MANUFACTURER","NUMBER_NONPRECIOUS_PRODUCT","NUMBER_PDK_PRODUCT","NUMBER_DK_PRODUCT","NOMINAL","DIAMETER_WEAVING","SHINKA_WIDTH","WIDTH_TUBE","CAPACITY_ML_CHEM","BRAND_ID","KOMPLEKT",""),
								"OFFERS_FIELD_CODE" => array("ID","CODE","XML_ID","NAME","TAGS","SORT","PREVIEW_TEXT","PREVIEW_PICTURE","DETAIL_TEXT","DETAIL_PICTURE","DATE_ACTIVE_FROM","ACTIVE_FROM","DATE_ACTIVE_TO","ACTIVE_TO","SHOW_COUNTER","SHOW_COUNTER_START","IBLOCK_TYPE_ID","IBLOCK_ID","IBLOCK_CODE","IBLOCK_NAME","IBLOCK_EXTERNAL_ID","DATE_CREATE","CREATED_BY","CREATED_USER_NAME","TIMESTAMP_X","MODIFIED_BY","USER_NAME",""),
								"OFFERS_PROPERTY_CODE" => array("SUPPLIER_CODE","SPECIAL_PRICE","SIZE_RING_PEND","WEIGHT_NO_INSERTS","WEIGHT_WITH_INSERTS","DATE_INSERT_SAP","SIZE_CB",""),
								"OFFERS_SORT_FIELD" => "sort",
								"OFFERS_SORT_ORDER" => "asc",
								"OFFERS_SORT_FIELD2" => "active_from",
								"OFFERS_SORT_ORDER2" => "desc",
								"OFFERS_LIMIT" => "5",
								"BACKGROUND_IMAGE" => "-",
								"PRICE_CODE" => array("base_price","rozn_price","stock_price","minimal_price","Internet_price"),
								"USE_PRICE_COUNT" => "Y",
								"SHOW_PRICE_COUNT" => "1",
								"PRICE_VAT_INCLUDE" => "Y",
								"PRODUCT_PROPERTIES" => array("type","VIDEO","brend","vstavka","collection","materials","rubrics","MIN_PRICE","WEAR_TYPE","STYLISTIC_GROUP","METAL","PROBA","METALCOLOR","CATEGORY","FOR_SOMEONE","MAIN_INSERT","MAIN_COLOR_INSERT","COLLECTION_NEW","TOP_DESIGN_585","DIAMOND_CUT","LASER_ENGRAVING","COVER","MANUFACTURING_TECH","SECOND_LEVEL_DESIGN","JEWEL_NUMBER","CLIP","SHINKA_PROFILE","EMPTINESS","SNAP","COLLECTION_FUTL","COLOR_FUTL","PURPOSE_METAL_FUTL","TRADEMARK_CHEM","DENSITY_WEAVING","WEAVING","COMPLETE_WATCH","MECHANISM_WATCH","BRAND_WATCH","ADD_INSERT","TYPE_MAIN_INSERTS","MANUFACTURER","NUMBER_NONPRECIOUS_PRODUCT","NUMBER_PDK_PRODUCT","NUMBER_DK_PRODUCT","NOMINAL","DIAMETER_WEAVING","SHINKA_WIDTH","WIDTH_TUBE","CAPACITY_ML_CHEM","BRAND_ID","KOMPLEKT",""),
								"USE_PRODUCT_QUANTITY" => "Y",
								"CACHE_TYPE" => "A",
								"CACHE_TIME" => "36000000",
								"CACHE_FILTER" => "Y",
								"CACHE_GROUPS" => "Y",
								"DISPLAY_TOP_PAGER" => "Y",
								"DISPLAY_BOTTOM_PAGER" => "Y",
								"PAGER_TITLE" => "Товары",
								"PAGER_SHOW_ALWAYS" => "N",
								"PAGER_TEMPLATE" => "",
								"PAGER_DESC_NUMBERING" => "N",
								"PAGER_DESC_NUMBERING_CACHE_TIME" => "36000",
								"PAGER_SHOW_ALL" => "Y",
								"HIDE_NOT_AVAILABLE" => "Y",
								"OFFERS_CART_PROPERTIES" => array(),
								"AJAX_OPTION_JUMP" => "N",
								"AJAX_OPTION_STYLE" => "Y",
								"AJAX_OPTION_HISTORY" => "N",
								"CONVERT_CURRENCY" => "Y",
								"CURRENCY_ID" => "RUB",
								"ADD_TO_BASKET_ACTION" => "ADD",
								"PAGER_BASE_LINK_ENABLE" => "Y",
								"SET_STATUS_404" => "Y",
								"SHOW_404" => "Y",
								"MESSAGE_404" => "",
								"PAGER_BASE_LINK" => "",
								"PAGER_PARAMS_NAME" => "arrPager"
							)
						);?>
						<div class="atten_text no_faves" style="display:none"></div>
					<?} else {?>
						<div class="atten_text no_faves">
							<p>К сожалению, вы пока не отметили ни один товар.</p>
							<p>Мы будем очень рады, если вы посетите наш каталог и выберете что-нибудь интересное.</p>
						</div>
					<?}?>
				</article>
			</div>
		</section>
	</div>



</div>
<div id="ucab-profile" class="ucab-group">

	<div id="ucab-profile-tab" class="section  ucab-tab">
		<div class="section__inner  ucab-tab__inner">
			Профиль
		</div>
	</div>


	<?$APPLICATION->IncludeComponent(
	"bitrix:main.profile", 
	"profile", 
	array(
		"COMPONENT_TEMPLATE" => "profile",
		"AJAX_MODE" => "Y",
		"AJAX_OPTION_JUMP" => "N",
		"AJAX_OPTION_STYLE" => "Y",
		"AJAX_OPTION_HISTORY" => "N",
		"AJAX_OPTION_ADDITIONAL" => "undefined",
		"SET_TITLE" => "N",
		"USER_PROPERTY" => array(
		),
		"SEND_INFO" => "N",
		"CHECK_RIGHTS" => "N",
		"USER_PROPERTY_NAME" => "",
		"COMPOSITE_FRAME_MODE" => "A",
		"COMPOSITE_FRAME_TYPE" => "AUTO"
	),
	false
);?>

</div>
<div id="ucab-subscribes" class="ucab-group">
	<div id="ucab-subscribes-tab" class="section  ucab-tab">
		<div class="section__inner  ucab-tab__inner">
			Подписки
		</div>
	</div>


	<div class="section">
		<div class="section__inner" style="height: 200px">
			Подписки, содержимое раздела<br>
			атрибут style потом удалить
		</div>
	</div>
</div>

<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>
