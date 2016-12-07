<?
if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();
$this->setFrameMode(true);
if(!$arResult["NavShowAlways"])
{
	if ($arResult["NavRecordCount"] == 0 || ($arResult["NavPageCount"] == 1 && $arResult["NavShowAll"] == false))
		return;
}
?>

<nav>
<ul class="pagination_list">

<?
$strNavQueryString = ($arResult["NavQueryString"] != "" ? $arResult["NavQueryString"]."&amp;" : "");
$strNavQueryStringFull = ($arResult["NavQueryString"] != "" ? "?".$arResult["NavQueryString"] : "");

$bFirst = true;
?>
	
<? if ($arResult["NavPageNomer"] > 1) { ?>
	<? if ($arResult["NavPageNomer"] > 2) {	?>

	<li class="pagination_list__item item-prev">
		<a href="<?=$arResult["sUrlPath"]?>?<?=$strNavQueryString?>PAGEN_<?=$arResult["NavNum"]?>=<?=($arResult["NavPageNomer"]-1)?>" aria-label="Previous" class="pagination_list__item__link-prev">
			<span aria-hidden="true" class="pagination_list__item__prev">&nbsp;</span>
		</a>
    </li>
	
	<? } else { ?>
	
		<li class="pagination_list__item item-prev">
			<a href="<?=$arResult["sUrlPath"]?><?=$strNavQueryStringFull?>" aria-label="Previous" class="pagination_list__item__link-prev">
				<span aria-hidden="true" class="pagination_list__item__prev">&nbsp;</span>
			</a>
	    </li>	

	<? } ?>
	
	<? if ($arResult["nStartPage"] > 1) { ?>
		<? $bFirst = false; ?>

		<li class="pagination_list__item">
			<a href="<?=$arResult["sUrlPath"]?><?=$strNavQueryStringFull?>" class="pagination_list__item__link">1</a>
		</li>

		
		<? if ($arResult["nStartPage"] > 2) { ?>

		<li class="pagination_list__item">
			<a href="<?=$arResult["sUrlPath"]?>?<?=$strNavQueryString?>PAGEN_<?=$arResult["NavNum"]?>=<?=round($arResult["nStartPage"] / 2)?>" class="pagination_list__item__link">...</a>
		</li>
		
		<? } ?>
	<? } ?>
<? } ?>

<? do { ?>
	<? if ($arResult["nStartPage"] == $arResult["NavPageNomer"]) { ?>

		<li class="pagination_list__item active">
			<a href="<?=$arResult["sUrlPath"]?>?<?=$strNavQueryString?>PAGEN_<?=$arResult["NavNum"]?>=<?=$arResult["nStartPage"]?>" class="pagination_list__item__link"><?=$arResult["nStartPage"]?></a>
		</li>

	<? } else if ($arResult["nStartPage"] == 1) { ?>

		<li class="pagination_list__item">
			<a href="<?=$arResult["sUrlPath"]?><?=$strNavQueryStringFull?>" class="pagination_list__item__link"><?=$arResult["nStartPage"]?></a>
		</li>	

	<? } else { ?>

		<li class="pagination_list__item">
			<a href="<?=$arResult["sUrlPath"]?>?<?=$strNavQueryString?>PAGEN_<?=$arResult["NavNum"]?>=<?=$arResult["nStartPage"]?>" class="pagination_list__item__link"><?=$arResult["nStartPage"]?></a>
		</li>

	<? } ?>

	<?
	$arResult["nStartPage"]++;
	$bFirst = false;
	?>

<? } while($arResult["nStartPage"] <= $arResult["nEndPage"]); ?>

<?
if($arResult["NavPageNomer"] < $arResult["NavPageCount"]) {
	if ($arResult["nEndPage"] < $arResult["NavPageCount"]) {
		if ($arResult["nEndPage"] < ($arResult["NavPageCount"] - 1)) {
	?>
	
			<li class="pagination_list__item">
				<a href="<?=$arResult["sUrlPath"]?>?<?=$strNavQueryString?>PAGEN_<?=$arResult["NavNum"]?>=<?=round($arResult["nEndPage"] + ($arResult["NavPageCount"] - $arResult["nEndPage"]) / 2)?>" class="pagination_list__item__link">...</a>
			</li>

			
			<? } ?>

		<li class="pagination_list__item">
			<a href="<?=$arResult["sUrlPath"]?>?<?=$strNavQueryString?>PAGEN_<?=$arResult["NavNum"]?>=<?=$arResult["NavPageCount"]?>" class="pagination_list__item__link"><?=$arResult["NavPageCount"]?></a>
		</li>

	<? } ?>

	<li class="pagination_list__item item-next">
		<a href="<?=$arResult["sUrlPath"]?>?<?=$strNavQueryString?>PAGEN_<?=$arResult["NavNum"]?>=<?=($arResult["NavPageNomer"]+1)?>" aria-label="Next" class="pagination_list__item__link-next"><span aria-hidden="true" class="pagination_list__item__next">&nbsp;</span></a>
    </li>
	
<? } ?>

</ul>
</nav>