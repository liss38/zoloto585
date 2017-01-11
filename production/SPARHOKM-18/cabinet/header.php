<?
	if (!$GLOBALS["USER"]->IsAuthorized() && $APPLICATION->GetCurDir()=="/cabinet/")
	LocalRedirect("/cabinet/login/")
?>
<div class="section  ucab-header">
	<div class="section__inner  ucab-header__inner">
		<?$APPLICATION->IncludeComponent("bitrix:breadcrumb", "lk", Array(),false);?>
		<h1 class="ucab-title"><?$APPLICATION->ShowTitle(false)?></h1>
	</div>
</div>