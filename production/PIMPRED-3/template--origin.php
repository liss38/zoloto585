<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();
/** @var array $arParams */
/** @var array $arResult */
/** @global CMain $APPLICATION */
/** @global CUser $USER */
/** @global CDatabase $DB */
/** @var CBitrixComponentTemplate $this */
/** @var string $templateName */
/** @var string $templateFile */
/** @var string $templateFolder */
/** @var string $componentPath */
/** @var CBitrixComponent $component */
$this->setFrameMode(true);
/**
 * Шаблон используется и на странице журнала для вывода связанных товаров, например тут http://d00.zoloto585.ru/more-bleska/-trendi/neobychnye-ukrasheniya-dlya-leta/
 * При внесении изменений нужно убедиться, что и там все отображается корректно
 */
?>

<?
$APPLICATION->IncludeComponent(
	'zoloto585:digitaldata',
	'',
	['Page' => 'category', 'Category' => $arResult, 'ListName' => $arParams['GTM_TYPE']],
	$this->__component
);
?>

<?if(!empty($arResult["PREVIEW_PICTURE_USER"])){?>
	<img src="<?=$arResult["PREVIEW_PICTURE_USER"]?>" class="seo_url_img" />
<?} else {
	if(!empty($arResult["PREVIEW_PICTURE"])):
	?>
	<img src="<?=CFile::GetPath($arResult["PREVIEW_PICTURE"])?>" class="seo_url_img" />
<?
	endif;
}?>

<?
if (!empty($arResult['ITEMS'])) {
/** Выводим общее количество товаров, чтобы отобразить в панели соритровки */
	$this->SetViewTarget('zoloto585_total_elements');
	$cnt = $arParams['PAGE_ELEMENT_COUNT'];
	if ($cnt > $arResult['NAV_RESULT']->NavRecordCount) {
		$cnt = $arResult['NAV_RESULT']->NavRecordCount;
	}
	?>

	<div class="total-elements-informer">
		<span>Показано:</span> <?=$cnt?> из <?=$arResult['NAV_RESULT']->NavRecordCount;?>
	</div>
	
	<? 
	$this->EndViewTarget(); 
}
?>

<section class="content">
	<div class="wrp clearfix">
	<article class="catalog main_cat" itemscope="" itemtype="http://schema.org/Product">
	<? if ($arParams['ZOLOTO585_HIDE_H1'] !== 'Y') { ?>
		<h1><?=$arResult["NAME"]?></h1>
	<? } ?>
	<div class="workarea grid2x1">
		<div class="bx_sidebar filter_catalog"><?=$GLOBALS["filterView"]?></div>
		<div class="catalog_list">
			
			<? 
			/** Вывести пагинацию вне шаблона компонента */
			if ($arParams['EXTERNAL_PAGINATION_VIEW']) { 				
				$this->SetViewTarget($arParams['EXTERNAL_PAGINATION_VIEW']);
				echo $arResult["NAV_STRING"];
				$this->EndViewTarget();

			} else if ($arParams["DISPLAY_TOP_PAGER"]) {
				echo $arResult["NAV_STRING"];
			}
			?>

			<?
			//print_r($arResult);
			if(!empty($arResult["QUICK_LINKS_USER"])){?>
				<div class="block_sort clearfix"><?=html_entity_decode(htmlspecialchars_decode($arResult["QUICK_LINKS_USER"]))?></div>
			<?}?>
			<!-- конец панель сортировки, постраничной пагинации и выбора количества-->
			<!-- карточки каталога-->
			<div class="grid3">
			<?if (!empty($arResult['ITEMS'])){?>
				<?foreach($arResult['ITEMS'] as $arItem){
					$pict = resizeImages($arItem["DETAIL_PICTURE"]["ID"],180,180);
					?>
				<!-- карточка-->
				<div class="catalog-item catalog-item-ecommerce" data-id="<?=$arItem['ID']?>" data-name="<?=$arItem['NAME']?>" data-section-id="<?=$arItem['~IBLOCK_SECTION_ID']?>" data-gtm-type="<?=$arParams['GTM_TYPE']?>" data-cat-path="<?=$arItem['CatPath']?>">
					<!-- избранное, сравнение-->
					<div class="catalog-item-control" data-id='<?=$arItem["ID"]?>' id="favorites_item_<?=$arItem["ID"]?>">
			            <span style="display: none;" class="catalog-item-control__add" title="Добавить в избранное"></span>
			            <span class="catalog-item-control__remove act" title="Убрать из избранного"></span>
  						<?/*<span class="catalog-item-control__comparison" id="compare_item_<?=$arItem["ID"]?>"></span>*/?>
					</div>
					<!-- конец избранное, сравнение-->
					<!-- изображение-->
					<?$bSecondPromo = false;?>
					<div class="catalog-item-pic">
						<? if ($arItem['DISCOUNT_LABEL_TYPE'] == 'shock') : ?>
							<div class="promo-label  promo-label--shock-price">шок цена</div>
							<?$bSecondPromo = true;?>
						<? elseif ($arItem['DISCOUNT_LABEL_TYPE'] == 'new') : ?>
							<div class="promo-label  promo-label--new">новинка</div>
							<?$bSecondPromo = true;?>
						<? elseif ($arItem['MAX_DISCOUNT'] > 0 && $arItem['DISCOUNT_LABEL_TYPE'] == 'discount') : ?>
							<div class="promo-label  promo-label--discount">-<?=$arItem['MAX_DISCOUNT']?>%</div>
							<?$bSecondPromo = true;?>
						<? endif; ?>

						<a href="<?=$arItem["DETAIL_PAGE_URL"]?>" data-id="<?=$arItem["ID"]?>" <?if(!empty($arResult["DATA_TYPE"])):?>data-type="<?=$arResult["DATA_TYPE"]?>"<?endif?>>
							<img src="<?=$pict["src"]?>" alt="<?=$arItem["NAME"]?>" title="<?= $arItem['NAME'] ?>" />
						</a>
					</div>
					<!--конец изображение-->
					<!--название и цена-->

					<div class="catalog-item-info">
						<a <?if(!empty($arResult["DATA_TYPE"])):?>data-type="<?=$arResult["DATA_TYPE"]?>"<?endif?> data-id="<?=$arItem["ID"]?>" class="catalog-item-info__title" href="<? echo $arItem['DETAIL_PAGE_URL']; ?>">
							<?=$arItem["NAME"]?>
						</a>
						<div class="price">
							<?if($arItem["USER_PRICES"]["BASE_PRICE"] > 0){?>
								<p class="catalog-item-info__old-price"><?=$arItem["USER_PRICES"]["BASE_PRICE"]?CurrencyFormat($arItem["USER_PRICES"]["BASE_PRICE"], 'RUB'):''?></p>
							<?}?>

								<p class="catalog-item-info__new-price"><?=CurrencyFormat(round($arItem["USER_PRICES"]["INTERNET_PRICE"]), 'RUB');?></p>


							<?/*if(round($arItem["USER_PRICES"]["INTERNET_PRICE"]*0.8)>$arItem["USER_PRICES"]["MINIMAL_PRICE"]) {?>
								<p class="catalog-item-info__bonus-price">
									<span class="catalog-item-info__bonus-price-title">Ваша цена:</span>
										<span class="catalog-item-info__bonus-price-number"><?=round($arItem["USER_PRICES"]["INTERNET_PRICE"]*0.8);?></span>
								</p>
							<?}*/?>

						</div>
					</div>
					<!--конец название и цена-->

					<?$frame = $this->createFrame()->begin(""); ?>
						<div class="bron_yes catalog-item-reserve" data-id="<?=$arItem["ID"]?>" <?if(!empty($arResult["DATA_TYPE_ID"])):?>data-type_id="<?=$arResult["DATA_TYPE_ID"]?>"<?endif?>></div>
					<? $frame->end();?>
				</div>
				<!-- конец карточка-->	
				<?}?>
			<?}?>				
			</div>
			<div style="display: inline-block; width: 100%;"></div>			
			<div style="clear: both;"></div>
			<? if ($arParams["DISPLAY_BOTTOM_PAGER"]) { ?>
			<section class="content_pagination noshadow b-pagination-bottom">	
				<?=$arResult["NAV_STRING"];?>	
			</section>
			<? } ?>
			<div>
				<?
				if(empty($arResult['PREVIEW_TEXT_USER'])){
					echo $arResult['DESCRIPTION'];
				} else {
					echo $arResult['PREVIEW_TEXT_USER'];
				}
				?>
			</div>
			<div style="clear: both;"></div>
		</div>
		<div style="clear: both;"></div>
	</div>
</article>
	</div>
</section>


<script>
var ajax_path="/bitrix/templates/zoloto/components/bitrix/catalog.section/.default/ajax/";
function bron_button(){
    console.log('bron_button');
    if( $(".bron_yes").length>0) {
        elId = [];
		type = [];
        $(".bron_yes").each(function (index, val) {
            elId.push($(this).data("id"));
			type.push($(this).data("type_id"));
        });

        $.ajax({
            url: ajax_path + "get_button.php",
            type: "get",
            dataType: "html",
            data: {
                ID: elId,
                TYPE: type
            },
            success: function (ans) {
                $(".bron_container").html(ans);
                $(".bron_yes").each(function (index, val) {
                    var element = $(this).data("id");
                    var htmlResult = $(".bron_container").find("#container_outer_" + element + " > div").html();
                    $(this).html(htmlResult);
                    $(".catalog-item-reserve[data-id='"+element+"'] .catalog-item__button_soon, .catalog-item-reserve[data-id='"+element+"'] .catalog-item__button_reserve").attr("href", $(".catalog-item-info__title[data-id='"+element+"']").attr("href"));
                });

            }
        });

    }
}

BX.ready(function() {	
	setTimeout(bron_button, 500);		
});
</script>

