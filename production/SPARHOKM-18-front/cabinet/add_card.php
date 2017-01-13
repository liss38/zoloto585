<?
require($_SERVER["DOCUMENT_ROOT"] . "/bitrix/modules/main/include/prolog_before.php");

global $USER;
$cardNum = intval($_GET['numbk']);
$arResult = Array();

if ($cardNum != '' && $USER->IsAuthorized())
{
	ini_set('soap.wsdl_cache_enabled', 1);
	ini_set('soap.wsdl_cache_ttl', 4000);

	$client = new SoapClient('http://91.240.95.57:8047/sap/bc/srt/wsdl/srvc_00215A9C83B51EE2A3AA3BF264621F4D/wsdl11/allinone/standard/document?sap-client=900', array('login' => "setremote", 'password' => "set585Secure", 'location' => "http://91.240.95.57:8047/sap/bc/srt/rfc/sap/zws_crm_loy/900/zws_crm_loy/zws_crm_loy"));
	$params = array('IsCrd' => array('ExtId' => $cardNum), 'IsStore' => array('Id' => "0002"));

	$request = $client->ZfmCrmLoyMshInf($params);

	//если карта найдера
	if ($request->EsCrd->ExtId != '')
	{
		//проверим не привязана ли она уже к кому-то
		$rsUsers = CUser::GetList(
			$by = 'ID',
			$order = 'ASC',
			Array("=UF_CARD"=>$cardNum),
			Array("FIELDS"=>Array("ID"))
		);

		//если она нашлась
		if ($arUser = $rsUsers->fetch())
		{
			//отдаем ошибку, что карта уже есть
			$arResult["error"] = "card-exist";
		}
		else
		{
			//иначе, добавляем карту к текущему пользователю
			$obUser = new CUser;
			$arUserFields["UF_CARD"] = $request->EsCrd->ExtId;
			$arUserFields["UF_BONUS"] = $request->EsMsh->Balance;
			$arUserFields["UF_LEVEL"] = $request->EsMsh->Tier;

			$obUser->Update($USER->getID(), $arUserFields);
			$arResult["success"] = 1;

			CPHPCache::Clean("userBK".$USER->getID(),"/bonuslk/");
		}

	}
	else
	{
		$arResult["error"] = "card-not-find";
	}
}
else
{
	$arResult["error"] = "not-auth";
}
echo json_encode($arResult);
