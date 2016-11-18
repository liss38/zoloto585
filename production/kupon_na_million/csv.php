<?php

@set_time_limit(0);
ignore_user_abort(true);
require($_SERVER["DOCUMENT_ROOT"] . "/bitrix/modules/main/include/prolog_before.php");

$filter=array("IBLOCK_ID" => 29,array("LOGIC" => "OR", array("<PROPERTY_RADIUS" => 50)));

$_SERVER["DOCUMENT_ROOT"] = "/home/bitrix/www";
$DOCUMENT_ROOT = $_SERVER["DOCUMENT_ROOT"];
define("LANG", "s1");

define("BX_UTF", true);
define("NO_KEEP_STATISTIC", true);
define("NOT_CHECK_PERMISSIONS", true);
//define("BX_BUFFER_USED", true);

require($_SERVER["DOCUMENT_ROOT"] . "/bitrix/modules/main/include/prolog_before.php");

include("$DOCUMENT_ROOT/ordershops/helper.php");
CModule::IncludeModule('catalog');
CModule::IncludeModule('sale');

//$res = CIBlockElement::GetList(Array(""), Array("IBLOCK_ID" => 29), false, Array("nPageSize" => 50),
//    array("ID", "PROPERTY_SHT_CODE", "PROPERTY_SIZE_RING_PEND", "PROPERTY_SIZE_CB", "PROPERTY_soap", "PROPERTY_SUPPLIER_CODE", 'PROPERTY_WEIGHT_WITH_INSERTS', "*"/* ,  "PROPERTY_soap", */));

//$res = CIBlockElement::GetList(Array(""), Array("IBLOCK_ID" => 29), false, Array("nPageSize" => 50),
//    array("ID", "PROPERTY_SHT_CODE", "PROPERTY_SIZE_RING_PEND", "PROPERTY_SIZE_CB", "PROPERTY_soap", "PROPERTY_SUPPLIER_CODE", 'PROPERTY_WEIGHT_WITH_INSERTS', "*"/* ,  "PROPERTY_soap", */));

//phpinfo();
//exit;

//set_include_path("/home/bitrix/www");

$start = isset($_GET['start']) ? $_GET['start'] : 0;
$filter=array("IBLOCK_ID" => 29,array("LOGIC" => "OR", array("<PROPERTY_RADIUS" => 50),));
$products = CCatalogProduct::GetList(array("ID" => "ASC"), array(">ID" => $start), false, array("nTopCount" => 3500), array("ID"));

$csv = "csv11.csv";

$start = isset($_GET['start']) ? $_GET['start'] : 0;
$products = CCatalogProduct::GetList(array("ID" => "ASC"), array(">ID" => $start), false, array("nTopCount" => 3500), array("ID","*","PROPERTY_DETAIL_PICTURE","PROPERTY_PREVIEW_PICTURE"));

if (!$start) unlink($csv);
$f = fopen($csv, "a");
$ff = fopen("log.txt", "a");
//$fff=fopen("111.txt", "a");
fwrite($ff, $start . "\r\n");
fclose($ff);

fwrite($f, "SAP Код;Путь к картинке\r\n");
$cnt = 0;

//die("11");

$listBlocks = array();

while ($product = $products->fetch()) {
    print_r($product);
    exit;

    $list = CCatalogSKU::getOffersList(array($product['ID']));
    $offerIds = array_keys($list[$product['ID']]);
    for ($i = 0; $i < sizeof($offerIds); $i++) {
        $res = CIBlockElement::GetList(Array(), Array("ID" => $offerIds[$i]), false, Array("nPageSize" => 50),
            array("ID", "PROPERTY_SHT_CODE", "PROPERTY_SIZE_RING_PEND", "PROPERTY_SIZE_CB", "PROPERTY_soap", "PROPERTY_SUPPLIER_CODE", 'PROPERTY_WEIGHT_WITH_INSERTS', "*"/* ,  "PROPERTY_soap", */));
        $arProps = $res->fetch();
        if (!in_array($arProps['IBLOCK_ID'],$listBlocks)) {
            $listBlocks[]=$arProps['IBLOCK_ID'];
            file_put_contents("111.txt",print_r($listBlocks,true));
        }

        $mxResult = CCatalogSku::GetProductInfo($offerIds[$i]);
        $imgProps = CIBlockElement::GetByID($mxResult['ID'])->fetch();

        $num = !empty($imgProps['DETAIL_PICTURE']) ? $imgProps['DETAIL_PICTURE'] : $imgProps['PREVIEW_PICTURE'];
        if (empty($num))
            continue;
        print_r($product);
        //print_r()
        print_r($arProps);
        echo "<hr>";
        echo $num;
        exit;

        $img = CFile::GetPath($num);
        fwrite($f, "$arProps[XML_ID];$img\r\n");
        //echo "<pre>" . print_r($arProps, true) . print_r($img,true)."</pre>";
    }
    /*
    while($elem=$list->fetch()){
        print_r($elem);

    }
*/
    $cnt++;
    if ($cnt % 3000 == 0) {
        //die("1234");
        echo "<html><head></head><body><script>location.assign('?start=$product[ID]');</script>...</body></html>";
        //sleep(2);
        exit;

        sleep(1);
    }
    //echo $product['ID'] . "\r\n";
}

fclose($f);