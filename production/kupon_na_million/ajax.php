<?php
require_once($_SERVER["DOCUMENT_ROOT"] . "/bitrix/modules/main/include/prolog_before.php");
include "helper.php";
CModule::IncludeModule("iblock");
CModule::IncludeModule('sale');
CModule::IncludeModule('catalog');

//$iBlockId = 37;
//$checkMail = CIBlockElement::GetList(Array("SORT" => "ASC", "NAME" => "ASC"), Array("IBLOCK_ID" => $iBlockId, "PROPERTY_email" => $_POST['email']))->fetch();
//print_r($checkMail);


/*
$iBlockList = CIBlockElement::GetList(Array(), Array("IBLOCK_CODE" => "magnit_clients"),array("*"));
$cnt=0;
while($iBlock=$iBlockList->fetch()){
    print_r($iBlock);
$cnt++;
    if($cnt>=100)break;
}
//$iBlock = CIBlockElement::GetList(Array(), Array("IBLOCK_ID" => 37))->fetch();
//print_r($iBlock);


exit;
*/

//echo "11";
$act = $_POST['act'];
if($act=="sendEmail"){
    //$iBlock = CIBlockElement::GetList(Array(), Array("IBLOCK_CODE" => "magnit_clients"),array("*"))->fetch();
    $iBlockId = 37;
    $checkMail = CIBlockElement::GetList(Array("SORT" => "ASC", "NAME" => "ASC"), Array("IBLOCK_ID" => $iBlockId, "PROPERTY_email" => $_POST['email']))->fetch();
    if($checkMail){
        echo ("1");
        exit;
    }

    $PROP = getProps($iBlockId);
    $userId = CUser::GetId();
    $arLoadProductArray = Array(
        "MODIFIED_BY" => $userId, // элемент изменен текущим пользователем
        "IBLOCK_SECTION_ID" => false, // элемент лежит в корне раздела
        "IBLOCK_ID" =>$iBlockId,// $iBlock1['ID'],
        "PROPERTY_VALUES" => $PROP,
        "NAME" => $_POST['email'],
        "ACTIVE" => "Y", // активен
        "PREVIEW_TEXT" => "текст для списка элементов",
        "DETAIL_TEXT" => "текст для детального просмотра"
    );

    print_r($iBlock);
    print_r($arLoadProductArray);
    $el = new CIBlockElement;
    $el->Add($arLoadProductArray);

    $name=$_POST['name'];
    $email=$_POST['email'];
    $send_array=array("USER_NAME"=>$name,"USER_EMAIL"=>$email);
    //echo "333";
    CEvent::Send("KUPON_NA_MILLION", s1, $send_array);

    // print_r($_POST,"|".print_r($send_array,true));
    echo "12345";

    //die(112233);
}

//echo 12345;
?>