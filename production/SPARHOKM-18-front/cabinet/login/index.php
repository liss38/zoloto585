<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("Авторизация");
?>

	<?include("../header.php")?>

	<?$APPLICATION->IncludeComponent(
		"bitrix:system.auth.form",
		"cabinet",
		array(
			"COMPONENT_TEMPLATE" => "cabinet",
			"REGISTER_URL" => "/cabinet/reg/",
			"FORGOT_PASSWORD_URL" => "",
			"PROFILE_URL" => "",
			"SHOW_ERRORS" => "Y",
			"COMPOSITE_FRAME_MODE" => "A",
			"COMPOSITE_FRAME_TYPE" => "AUTO",
		),
		false
	);?>
<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>
