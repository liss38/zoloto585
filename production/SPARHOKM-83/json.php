<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/modules/main/include/prolog_before.php");

$arAllShop = Zoloto585Store::getStores();

$arResultJson = Array();
foreach ($arAllShop as $arStore)
{
	$arAddress = explode(",",$arStore["ADDRESS"]);

	$arResultJson[]=Array(
		"ADDRESS" => Array("STREET"=>$arAddress[0],"HOUSE_FLAT"=>$arAddress[1]),
		"SCHEDULE_PREPARE" => ShopSchedule::schedulePrepare($arStore['SCHEDULE'],true),
		"GPS_N" => $arStore['GPS_N'],
		"GPS_S" => $arStore['GPS_S'],
		"CITY" => $arStore['UF_CITY'],
		"XML_ID" => $arStore['XML_ID'],
		"DETAIL_URL" => $arStore['DETAIL_URL'],
	);
}

header('Content-type: application/json');
echo json_encode( $arResultJson );

