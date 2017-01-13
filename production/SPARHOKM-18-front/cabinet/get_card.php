<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/modules/main/include/prolog_before.php");

$arResult = Array();

if($GLOBALS["USER"]->IsAuthorized())
{
	$rsUsers = CUser::GetList(
		$by = 'ID',
		$order = 'ASC',
		Array("ID"=>$GLOBALS["USER"]->getID()),
		Array("FIELDS"=>Array("PERSONAL_PHONE"))
	);

	$arUser = $rsUsers->fetch();

	if(!empty($arUser["PERSONAL_PHONE"]))
	{
		$phone = "7".clear_phone($arUser["PERSONAL_PHONE"]);
		$data = file_get_contents("http://91.240.95.85/restapi/v1/cardbyphone/".$phone."/?api_key=52E47764-B722-4E8A-9BA8-DDA5B1500391");
		$arData = json_decode($data,true);
		$numcard = $arData[0]["numcard"];

		if (!empty($numcard))
		{
			sendSms($phone,"Номер карты ".$numcard);
			$arResult["success"] = 1;
		}
		else
		{
			$arResult["error"] = "card-not-find";
		}
	}
	else
	{
		$arResult["error"] = "empty-phone";
	}
}
else
{
	$arResult["error"] = "not-auth";
}

echo json_encode($arResult);
