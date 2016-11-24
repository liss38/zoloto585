<?
if (!empty($arParams['GTM_ACTION_ID'])) {
	$this->setViewTarget('zoloto585_ecommerce_scripts');
	Zoloto585Ecommerce::showActionCode($arParams['GTM_ACTION_ID'], $arResult);
	$this->endViewTarget();
}
?>